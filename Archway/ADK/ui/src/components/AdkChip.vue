<script setup lang="ts">
/**
 * Chip — Figma: Buttons › ADK_Chips (297:480). Alto 56 o 40, radio full.
 * Seleccionado: fondo Gold + Bold. Sin seleccionar: blanco + borde Dark Grey.
 * El Bold es el segundo indicador además del color (A-A01).
 */
const selected = defineModel<boolean>({ default: false })
withDefaults(defineProps<{ size?: 'lg' | 'sm'; disabled?: boolean }>(), { size: 'lg', disabled: false })
</script>

<template>
  <button
    type="button"
    :aria-pressed="selected"
    :disabled="disabled"
    class="adk-ui adk-focus adk-press inline-flex min-w-[146px] items-center justify-center rounded-full px-24 text-text-primary transition-colors duration-fast"
    :class="[
      size === 'lg' ? 'h-56' : 'h-[40px]',
      selected ? 'bg-control-on adk-body-medium-bold border border-control-on' : 'border border-border-default bg-background-default adk-body-medium',
      disabled ? 'cursor-not-allowed opacity-40' : '',
    ]"
    @click="selected = !selected"
  >
    <slot />
  </button>
</template>
