<script setup lang="ts">
/**
 * Icon Only — Figma: Design Resources CORE › Icon_Only (431:2891).
 * Ícono universalmente comprensible dentro de una card, toolbar o header. Se mueve con el contenido.
 * `label` es obligatorio: describe la acción, no el ícono ("Buscar", no "Lupa").
 */
import { computed } from 'vue'
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

const props = withDefaults(
  defineProps<{
    icon: AwIconName
    label: string
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'medium' | 'small' | 'xs'
    /** Borde del Secondary: con borde sobre Surface/default, sin borde sobre fondos de color. */
    stroke?: boolean
    loading?: boolean
    disabled?: boolean
    /** Para toggles (favorito): estado presionado. */
    pressed?: boolean
    rotate?: 0 | 90 | 180 | 270
  }>(),
  { variant: 'ghost', size: 'medium', stroke: true, loading: false, disabled: false, pressed: undefined, rotate: 0 },
)
defineEmits<{ click: [event: MouseEvent] }>()

const SIZE = { medium: 'size-48', small: 'size-[32px] aw-hit', xs: 'size-[24px] aw-hit' } as const
const ICON = { medium: 24, small: 16, xs: 16 } as const
const VARIANT = {
  primary: 'bg-button-primary-bg text-icon-primary active:bg-button-primary-bg-pressed focus-visible:bg-button-primary-bg-focused',
  secondary: 'bg-button-secondary-bg text-icon-primary active:bg-button-secondary-bg-pressed focus-visible:bg-button-secondary-bg-focused focus-visible:border-button-secondary-stroke-focused',
  ghost: 'bg-button-ghost-bg text-icon-primary active:bg-button-ghost-bg-pressed focus-visible:border focus-visible:border-button-secondary-stroke-focused',
} as const
const DISABLED = {
  primary: 'bg-button-primary-bg-disabled text-icon-disabled',
  secondary: 'bg-button-secondary-bg-disabled text-icon-disabled',
  ghost: 'text-icon-disabled',
} as const

const classes = computed(() => [
  'aw-ui inline-flex items-center justify-center rounded-full transition-colors duration-fast ease-standard',
  SIZE[props.size],
  props.variant === 'secondary' && props.stroke ? 'border-[0.5px] border-button-secondary-stroke' : '',
  props.disabled ? DISABLED[props.variant] : VARIANT[props.variant],
])
</script>

<template>
  <button
    type="button"
    :class="classes"
    :aria-label="label"
    :aria-pressed="pressed"
    :disabled="disabled"
    :aria-busy="loading || undefined"
    @click="!loading && $emit('click', $event)"
  >
    <span v-if="loading" class="block size-[16px] rounded-full border-2 border-current border-t-transparent" style="animation: aw-spin 0.8s linear infinite" aria-hidden="true" />
    <AwIcon v-else :name="icon" :size="ICON[size]" :rotate="rotate" />
  </button>
</template>
