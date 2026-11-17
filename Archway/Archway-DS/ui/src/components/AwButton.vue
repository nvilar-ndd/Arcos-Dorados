<script setup lang="ts">
/**
 * Button · Button_Ghost — Figma: Design Resources CORE › Button (424:897, 424:567).
 * Primary (una por pantalla) · Secondary · Ghost (siempre acompaña a otro botón, sin Loading).
 * Visual = Figma; Small y XS amplían el área táctil a 48 sin cambiar el tamaño (audit C-A04).
 */
import { computed } from 'vue'
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

export type AwButtonVariant = 'primary' | 'secondary' | 'ghost'
export type AwButtonSize = 'large' | 'medium' | 'small' | 'xs'

const props = withDefaults(
  defineProps<{
    /** Texto del botón (alternativa al slot por defecto). */
    label?: string
    variant?: AwButtonVariant
    size?: AwButtonSize
    /** Square dentro de un flujo; Round para un CTA suelto o flotante. */
    shape?: 'square' | 'round'
    iconLeading?: AwIconName
    iconTrailing?: AwIconName
    /** Borde del Secondary (Figma: `Stroke`). Sin borde sólo sobre fondos de color. */
    stroke?: boolean
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    block?: boolean
  }>(),
  { label: undefined, variant: 'primary', size: 'large', shape: 'square', iconLeading: undefined, iconTrailing: undefined, stroke: true, loading: false, disabled: false, type: 'button', block: false },
)
defineEmits<{ click: [event: MouseEvent] }>()

const SIZE: Record<AwButtonSize, string> = {
  large: 'h-56 min-w-[120px] px-16 aw-label-large',
  medium: 'h-48 min-w-[120px] px-16 aw-label-large',
  small: 'h-[32px] px-16 aw-label-medium aw-hit',
  xs: 'h-[24px] px-16 aw-label-small aw-hit',
}
/** Ancho mínimo de Small/XS: 64 en Primary/Secondary, 68 en Ghost (Figma). */
const MIN_SMALL: Record<AwButtonVariant, string> = { primary: 'min-w-[64px]', secondary: 'min-w-[64px]', ghost: 'min-w-[68px]' }
const RADIUS: Record<AwButtonSize, string> = { large: 'rounded-l', medium: 'rounded-l', small: 'rounded-m', xs: 'rounded-m' }

/**
 * Los bordes son `Inside` en Figma: se dibujan con box-shadow inset para no sumar al tamaño.
 * Secondary: 1 px Button/secondary-stroke; Pressed y Focused 0.5 px; Disabled stroke-disabled de 1 px
 * en Small/XS y 0.5 px en Medium/Large.
 */
const VARIANT: Record<AwButtonVariant, { base: string; stroke: string; disabled: string; disabledStroke: string }> = {
  primary: {
    base: 'bg-button-primary-bg text-button-text active:bg-button-primary-bg-pressed focus-visible:bg-button-primary-bg-focused',
    stroke: '',
    disabled: 'bg-button-primary-bg-disabled text-button-text-disabled',
    disabledStroke: '',
  },
  secondary: {
    base: 'bg-button-secondary-bg text-button-text active:bg-button-secondary-bg-pressed focus-visible:bg-button-secondary-bg-focused',
    stroke: 'shadow-[inset_0_0_0_1px_var(--aw-button-secondary-stroke)] active:shadow-[inset_0_0_0_0.5px_var(--aw-button-secondary-stroke-pressed)] focus-visible:shadow-[inset_0_0_0_0.5px_var(--aw-button-secondary-stroke-focused)]',
    disabled: 'bg-button-secondary-bg-disabled text-button-text-disabled',
    disabledStroke: 'shadow-[inset_0_0_0_1px_var(--aw-button-secondary-stroke-disabled)]',
    // safelist: shadow-[inset_0_0_0_0.5px_var(--aw-button-secondary-stroke-disabled)]
  },
  ghost: {
    base: 'bg-button-ghost-bg text-button-text active:bg-button-ghost-bg-pressed focus-visible:shadow-[inset_0_0_0_1px_var(--aw-button-secondary-stroke-focused)]',
    stroke: '',
    disabled: 'bg-button-ghost-bg text-button-text-disabled',
    disabledStroke: '',
  },
}

const inactive = computed(() => props.disabled || props.loading)
const classes = computed(() => {
  const v = VARIANT[props.variant]
  return [
    'aw-ui relative inline-flex items-center justify-center gap-8 overflow-hidden whitespace-nowrap outline-none transition-[background-color,box-shadow] duration-fast ease-standard',
    SIZE[props.size],
    props.size === 'small' || props.size === 'xs' ? MIN_SMALL[props.variant] : '',
    props.shape === 'round' ? 'rounded-xxl' : RADIUS[props.size],
    props.disabled
      ? [v.disabled, props.stroke ? (props.size === 'large' || props.size === 'medium' ? v.disabledStroke.replace('_1px_', '_0.5px_') : v.disabledStroke) : '']
      : [v.base, props.stroke ? v.stroke : ''],
    props.block ? 'w-full' : '',
  ]
})
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    :aria-disabled="loading || undefined"
    :aria-busy="loading || undefined"
    @click="!inactive && $emit('click', $event)"
  >
    <span v-if="loading && variant !== 'ghost'" class="absolute inset-y-0 left-0 w-full origin-left bg-button-primary-bg-focused opacity-40" style="animation: aw-loading 2.4s var(--aw-motion-easing-standard) forwards" aria-hidden="true" />
    <AwIcon v-if="iconLeading" :name="iconLeading" :size="16" class="relative" />
    <span class="relative"><slot>{{ label }}</slot></span>
    <AwIcon v-if="iconTrailing" :name="iconTrailing" :size="16" class="relative" />
    <span v-if="loading" class="aw-sr-only" role="status">Procesando</span>
  </button>
</template>
