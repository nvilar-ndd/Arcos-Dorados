<script setup lang="ts">
/**
 * Progress Circle — Figma: Design Resources CORE › Progress Circle. Tamaños 16 · 24 · 32 · 48 · 56.
 * Sin `value` es indeterminado (gira; se detiene con reduced-motion).
 */
import { computed } from 'vue'
const props = withDefaults(defineProps<{ value?: number; size?: 16 | 24 | 32 | 48 | 56; label?: string }>(), { value: undefined, size: 32, label: 'Cargando' })
/** Figma: el anillo mide 1/8 del tamaño (16 → 2, 24 → 3, 32 → 4, 48 → 6, 56 → 7), puntas redondeadas. */
const stroke = computed(() => props.size / 8)
const r = computed(() => (props.size - stroke.value) / 2)
const c = computed(() => 2 * Math.PI * r.value)
const pct = computed(() => (props.value === undefined ? 25 : Math.max(0, Math.min(100, props.value))))
</script>

<template>
  <svg
    role="progressbar"
    :aria-label="label"
    :aria-valuenow="value === undefined ? undefined : Math.round(pct)"
    aria-valuemin="0"
    aria-valuemax="100"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    :class="['aw-ui -rotate-90', value === undefined ? 'aw-spin' : '']"
  >
    <circle :cx="size / 2" :cy="size / 2" :r="r" fill="none" class="stroke-feedback-info-surface" :stroke-width="stroke" />
    <circle
      :cx="size / 2" :cy="size / 2" :r="r" fill="none" class="stroke-feedback-info transition-[stroke-dashoffset] duration-moderate ease-standard"
      :stroke-width="stroke" stroke-linecap="round" :stroke-dasharray="c" :stroke-dashoffset="c * (1 - pct / 100)"
    />
  </svg>
</template>
