<script setup lang="ts">
/**
 * Tag — Figma: Components › Tag (633:3290) y Tag-operations (2312:3443).
 * 24 px de alto, padding 4/8, radio 16 (pill), `Label01`. No interactivo.
 * Tonos de estado tomados de Card_list y Calendar (no existen como variante en Figma, audit D-C10).
 */
import type { Component } from 'vue'

export type DbTagTone = 'neutral' | 'success' | 'info' | 'warning' | 'danger' | 'muted' | 'plain'

withDefaults(
  defineProps<{
    label: string
    icon?: Component
    variant?: 'fill' | 'outline'
    tone?: DbTagTone
    /** Tag-operations: textos largos, se truncan con el texto completo en `title`. */
    truncate?: boolean
  }>(),
  { variant: 'fill', tone: 'neutral', truncate: false },
)

const TONE: Record<DbTagTone, string> = {
  neutral: 'bg-layer-03',
  success: 'bg-tag-background-green',
  info: 'bg-tag-background-blue',
  // Calendar "Pendiente" usa button/primary-disabled; Card_list "Pendiente" usa el primitivo red-disabled.
  warning: 'bg-button-primary-disabled',
  danger: 'bg-[var(--db-color-tertiary-red-disabled)]',
  muted: 'bg-layer-03',
  plain: 'bg-transparent',
}
</script>

<template>
  <span
    :class="[
      'db-ui db-label01 inline-flex h-300 max-w-full items-center gap-50 rounded-full px-100 py-50 text-text-primary',
      variant === 'outline' ? 'border border-border-03 bg-layer-00' : TONE[tone],
    ]"
    :title="truncate ? label : undefined"
  >
    <component :is="icon" v-if="icon" class="size-200 shrink-0 text-icon-primary" aria-hidden="true" />
    <span :class="truncate ? 'truncate' : 'whitespace-nowrap'">{{ label }}</span>
  </span>
</template>
