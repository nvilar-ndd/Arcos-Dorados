<script setup lang="ts">
/**
 * Chip — Figma: Design Resources CORE › Chip (548:1953).
 * Se toca para filtrar o seleccionar en la misma pantalla. Selected = fondo dorado + texto Bold
 * (no sólo color). Visual 40 (Medium) / 32 (Small); área táctil 48 (audit C-A04).
 */
import { computed } from 'vue'
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

const selected = defineModel<boolean>('selected', { default: false })
const props = withDefaults(
  defineProps<{
    label?: string
    icon?: AwIconName
    size?: 'medium' | 'small'
    disabled?: boolean
    /** Only Icon: `ariaLabel` obligatorio. */
    ariaLabel?: string
  }>(),
  { label: undefined, icon: undefined, size: 'medium', disabled: false, ariaLabel: undefined },
)

const classes = computed(() => [
  'aw-ui aw-hit inline-flex items-center justify-center gap-4 rounded-full border transition-colors duration-fast ease-standard',
  props.size === 'medium' ? 'h-[40px]' : 'h-[32px]',
  props.label ? 'px-16' : props.size === 'medium' ? 'w-[40px]' : 'w-[32px]',
  props.disabled
    ? 'bg-chip-bg-disabled border-chip-stroke-disabled text-chip-text-disabled'
    : selected.value
      ? 'bg-chip-bg-selected border-chip-bg-selected text-chip-text-selected focus-visible:border-border-strong'
      : 'bg-chip-bg border-chip-stroke text-chip-text active:bg-chip-bg-pressed active:border-chip-stroke-pressed focus-visible:bg-chip-bg-focused focus-visible:border-chip-stroke-focused',
])
</script>

<template>
  <button
    type="button"
    :class="classes"
    :aria-pressed="selected"
    :aria-label="label ? undefined : ariaLabel"
    :disabled="disabled"
    @click="selected = !selected"
  >
    <AwIcon v-if="icon" :name="icon" :size="16" :class="disabled ? 'text-chip-icon-disabled' : 'text-chip-icon'" />
    <span v-if="label" :class="selected ? 'aw-label-medium-bold' : 'aw-label-medium'">{{ label }}</span>
  </button>
</template>
