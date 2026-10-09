<script setup lang="ts">
/**
 * Button — Figma: Buttons › ADK Buttons (7:258), 28 variantes.
 * Visual 1:1 con Figma. "Hover" de Figma = estado presionado en touch (`:active`, audit A-C03).
 * Agregados de a11y: anillo de foco `adk-focus` (A-C01) y `aria-pressed` en Selection.
 * Docs: ADK/components/buttons.md
 */
import { computed, type Component } from 'vue'

export type AdkButtonVariant = 'primary' | 'secondary' | 'selection'
export type AdkButtonSize = 'lg' | 'md' | 'sm' | 'xxl'

const props = withDefaults(
  defineProps<{
    variant?: AdkButtonVariant
    /** lg 80 · md 56 · sm 40 (deprecado en el footer por área de toque) · xxl 480 × 200. */
    size?: AdkButtonSize
    /** Sólo `selection`: opción elegida (borde Gold 3 px + Bold). */
    selected?: boolean
    /** Estado "Inactive" de Figma. */
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    icon?: Component
    block?: boolean
  }>(),
  { variant: 'primary', size: 'lg', selected: false, disabled: false, type: 'button', block: false },
)
defineEmits<{ click: [event: MouseEvent] }>()

/* Alto y texto por tamaño. 40, 200 y 480 no son spacers de ADK: medidas propias del componente. */
const SIZES: Record<AdkButtonSize, { box: string; text: string; bold: string; icon: string }> = {
  lg: { box: 'h-80 px-24', text: 'adk-body-large', bold: 'adk-body-large-bold', icon: 'size-32' },
  md: { box: 'h-56 px-24', text: 'adk-body-medium', bold: 'adk-body-medium-bold', icon: 'size-24' },
  sm: { box: 'h-[40px] px-24', text: 'adk-body-small', bold: 'adk-body-small-bold', icon: 'size-24' },
  xxl: { box: 'h-[200px] w-[480px] px-48', text: 'adk-headline-medium-bold', bold: 'adk-headline-medium-bold', icon: 'size-48' },
}

const VARIANTS: Record<AdkButtonVariant, string> = {
  primary: 'border bg-button-primary border-button-primary-stroke active:bg-button-primary-hover',
  secondary: 'border bg-button-secondary border-border-default active:bg-button-secondary-hover',
  selection: '',
}

const classes = computed(() => {
  const s = SIZES[props.size]
  const sel = props.variant === 'selection'
  return [
    'adk-ui adk-focus adk-press inline-flex min-w-0 items-center justify-center gap-16 rounded-xs text-button-text transition-colors duration-fast',
    s.box,
    sel && props.selected ? s.bold : s.text,
    sel
      ? props.selected
        ? 'border-selected border-border-selected bg-button-secondary'
        : 'border border-border-default bg-button-secondary active:bg-button-secondary-hover'
      : VARIANTS[props.variant],
    props.block ? 'w-full' : '',
    // Figma: forma y texto al 40 % de opacidad. Pendiente de tokens explícitos (A-C02).
    props.disabled ? 'cursor-not-allowed opacity-40' : '',
  ]
})
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    :aria-pressed="variant === 'selection' ? selected : undefined"
    @click="$emit('click', $event)"
  >
    <component :is="icon" v-if="icon" :class="SIZES[size].icon" class="shrink-0" aria-hidden="true" />
    <span class="truncate"><slot /></span>
  </button>
</template>
