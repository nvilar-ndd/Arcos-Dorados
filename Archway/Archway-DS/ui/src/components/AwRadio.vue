<script setup lang="ts">
/**
 * Radio — Figma: Design Resources CORE › Radio. Igual que Checkbox, en círculo.
 * El grupo lo arma la pantalla con <fieldset><legend>; las flechas mueven la selección (nativo).
 */
const model = defineModel<string>()
const props = withDefaults(defineProps<{ value: string; name: string; label?: string; ariaLabel?: string; disabled?: boolean }>(), {
  label: undefined, ariaLabel: undefined, disabled: false,
})
const checked = () => model.value === props.value
</script>

<template>
  <label :class="['aw-ui inline-flex items-center gap-8', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <span class="aw-hit relative inline-flex size-40 items-center justify-center">
      <input v-model="model" type="radio" class="peer absolute inset-0 m-0 cursor-[inherit] opacity-0" :name="name" :value="value" :disabled="disabled" :aria-label="label ? undefined : ariaLabel" />
      <span
        :class="[
          'flex size-[20px] items-center justify-center rounded-full border-2 transition-colors duration-fast ease-standard peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-strong',
          checked()
            ? disabled ? 'border-button-primary-bg-disabled bg-button-primary-bg-disabled' : 'border-button-primary-bg bg-button-primary-bg'
            : disabled ? 'border-border-subtle' : 'border-icon-primary',
        ]"
        aria-hidden="true"
      >
        <span v-if="checked()" :class="['size-8 rounded-full', disabled ? 'bg-icon-disabled' : 'bg-icon-primary']" />
      </span>
    </span>
    <span v-if="label" :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ label }}</span>
  </label>
</template>
