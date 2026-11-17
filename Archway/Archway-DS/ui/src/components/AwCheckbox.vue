<script setup lang="ts">
/**
 * Checkbox — Figma: Design Resources CORE › Checkbox (Selected × State, Label opcional).
 * Glifo de 24 (Iconography, 18×18 con trazo de 1.25) en un contenedor de 40 con padding 8 y gap 8 al label,
 * igual que Figma; área táctil ampliada a 48 con .aw-hit (audit C-A04).
 * Seleccionado = fondo Button/primary-bg + tilde Icon/primary (8.63:1): se reconoce por la forma.
 * Pressed/Focused los resuelve la fila (List Item); en web el foco visible va en el control.
 */
// Glifos de Iconography › Checkbox - Square / 24px (Outline · Filled), copiados de Figma.
const OUTLINE = 'M16.5 1.25h-15a.25.25 0 0 0-.25.25v15c0 .14.11.25.25.25h15c.14 0 .25-.11.25-.25v-15a.25.25 0 0 0-.25-.25ZM1.5 0A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0h-15Z'
const BOX = 'M0 1.5A1.5 1.5 0 0 1 1.5 0h15A1.5 1.5 0 0 1 18 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 0 16.5v-15Z'
const CHECK = 'M10.642.881 4.674 9.098 0 4.341l1.07-1.051 3.432 3.493L9.428 0l1.214.881Z'

const model = defineModel<boolean>({ default: false })
withDefaults(defineProps<{ label?: string; ariaLabel?: string; disabled?: boolean; value?: string }>(), {
  label: undefined, ariaLabel: undefined, disabled: false, value: undefined,
})
</script>

<template>
  <label :class="['aw-ui aw-hit relative inline-flex items-center gap-8 p-8', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <span class="relative inline-flex size-24 shrink-0">
      <input v-model="model" type="checkbox" class="peer absolute inset-0 m-0 cursor-[inherit] opacity-0" :value="value" :disabled="disabled" :aria-label="label ? undefined : ariaLabel" />
      <svg class="size-24 rounded-xs peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-border-strong" viewBox="0 0 24 24" aria-hidden="true">
        <template v-if="model">
          <path :class="['transition-colors duration-fast ease-standard', disabled ? 'fill-button-primary-bg-disabled' : 'fill-button-primary-bg']" transform="translate(3 3)" :d="BOX" />
          <path :class="disabled ? 'fill-icon-disabled' : 'fill-icon-primary'" transform="translate(6.715 7.809)" fill-rule="evenodd" :d="CHECK" />
        </template>
        <path v-else :class="disabled ? 'fill-border-subtle' : 'fill-icon-primary'" transform="translate(3 3)" fill-rule="evenodd" :d="OUTLINE" />
      </svg>
    </span>
    <span v-if="label" :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ label }}</span>
  </label>
</template>
