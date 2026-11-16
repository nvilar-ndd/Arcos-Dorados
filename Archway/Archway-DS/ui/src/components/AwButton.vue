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
  large: 'h-56 px-16 aw-label-large',
  medium: 'h-48 px-16 aw-label-large',
  small: 'h-[32px] px-16 aw-label-medium aw-hit',
  xs: 'h-[24px] px-16 aw-label-small aw-hit',
}
const RADIUS: Record<AwButtonSize, string> = { large: 'rounded-l', medium: 'rounded-l', small: 'rounded-m', xs: 'rounded-m' }

const VARIANT: Record<AwButtonVariant, { base: string; disabled: string }> = {
  primary: {
    base: 'bg-button-primary-bg text-button-text active:bg-button-primary-bg-pressed focus-visible:bg-button-primary-bg-focused',
    disabled: 'bg-button-primary-bg-disabled text-button-text-disabled',
  },
  secondary: {
    base: 'bg-button-secondary-bg text-button-text border-button-secondary-stroke active:bg-button-secondary-bg-pressed active:border-button-secondary-stroke-pressed focus-visible:bg-button-secondary-bg-focused focus-visible:border-button-secondary-stroke-focused',
    disabled: 'bg-button-secondary-bg-disabled text-button-text-disabled border-button-secondary-stroke-disabled',
  },
  ghost: {
    base: 'bg-button-ghost-bg text-button-text border-transparent active:bg-button-ghost-bg-pressed focus-visible:border-button-secondary-stroke-focused',
    disabled: 'bg-button-ghost-bg text-button-text-disabled border-transparent',
  },
}

const inactive = computed(() => props.disabled || props.loading)
const classes = computed(() => [
  'aw-ui relative inline-flex items-center justify-center gap-8 overflow-hidden whitespace-nowrap transition-colors duration-fast ease-standard',
  SIZE[props.size],
  props.shape === 'round' ? 'rounded-xxl' : RADIUS[props.size],
  props.variant === 'secondary' && props.stroke ? 'border-[0.5px]' : props.variant === 'ghost' ? 'border' : '',
  props.disabled ? VARIANT[props.variant].disabled : VARIANT[props.variant].base,
  props.block ? 'w-full' : '',
])
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
