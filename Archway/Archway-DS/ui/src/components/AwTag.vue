<script setup lang="ts">
/**
 * Tag — Figma: Design Resources CORE › Tag (581:529).
 * Informa, no se toca. Core es neutro: los colores de negocio son Tag 💠 EP / Tag 💠 Loyalty.
 * 24 de alto, Label Small Bold, radio XS (Square Circle: comunica que no es táctil).
 */
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

withDefaults(
  defineProps<{ label: string; hierarchy?: 'primary' | 'secondary' | 'tertiary'; iconLeading?: AwIconName; iconTrailing?: AwIconName }>(),
  { hierarchy: 'primary', iconLeading: undefined, iconTrailing: undefined },
)
const HIERARCHY = {
  primary: 'bg-surface-inverse text-text-on-color',
  secondary: 'bg-surface-muted text-text-primary',
  tertiary: 'text-text-primary',
} as const
</script>

<template>
  <span :class="['aw-ui aw-label-small-bold inline-flex h-[24px] max-w-full items-center gap-4 rounded-xs px-8 py-4', HIERARCHY[hierarchy]]">
    <AwIcon v-if="iconLeading" :name="iconLeading" :size="16" />
    <span class="truncate">{{ label }}</span>
    <AwIcon v-if="iconTrailing" :name="iconTrailing" :size="16" />
  </span>
</template>
