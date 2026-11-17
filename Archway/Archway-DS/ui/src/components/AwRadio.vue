<script setup lang="ts">
/**
 * Radio — Figma: Design Resources CORE › Radio. Mismo contenedor que Checkbox (40, padding 8, gap 8).
 * Seleccionado = círculo Button/primary-bg con el tilde calado sobre Icon/primary (glifo Checkbox - Circle de Iconography).
 * El grupo lo arma la pantalla con <fieldset><legend>; las flechas mueven la selección (nativo).
 */
const OUTLINE = 'M9.25 17.25a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 1.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z'
const FILLED = 'M9.25 18.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Zm-.09-5.06 5.447-7.5-.607-.44a.75.75 0 0 0-1.048.166l-4.485 6.176-3.432-3.493-.535.526a.75.75 0 0 0-.01 1.06l3.528 3.59a.75.75 0 0 0 1.142-.085Z'
const model = defineModel<string>()
const props = withDefaults(defineProps<{ value: string; name: string; label?: string; ariaLabel?: string; disabled?: boolean }>(), {
  label: undefined, ariaLabel: undefined, disabled: false,
})
const checked = () => model.value === props.value
</script>

<template>
  <label :class="['aw-ui aw-hit relative inline-flex items-center gap-8 p-8', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <span class="relative inline-flex size-24 shrink-0">
      <input v-model="model" type="radio" class="peer absolute inset-0 m-0 cursor-[inherit] opacity-0" :name="name" :value="value" :disabled="disabled" :aria-label="label ? undefined : ariaLabel" />
      <svg class="size-24 rounded-full peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-border-strong" viewBox="0 0 24 24" aria-hidden="true">
        <template v-if="checked()">
          <circle cx="12" cy="12" r="9.25" :class="disabled ? 'fill-icon-disabled' : 'fill-icon-primary'" />
          <path :class="['transition-colors duration-fast ease-standard', disabled ? 'fill-button-primary-bg-disabled' : 'fill-button-primary-bg']" transform="translate(2.75 2.75)" fill-rule="evenodd" :d="FILLED" />
        </template>
        <path v-else :class="disabled ? 'fill-border-subtle' : 'fill-icon-primary'" transform="translate(2.75 2.75)" fill-rule="evenodd" :d="OUTLINE" />
      </svg>
    </span>
    <span v-if="label" :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ label }}</span>
  </label>
</template>
