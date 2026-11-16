<script setup lang="ts">
/**
 * ProgressBar_beneficios (272 × 4) y Progress bar misiones (332 × 16) 💠 — Figma: Design Resources CORE.
 * Figma usa hex sueltos / variables eliminadas (audit C-T01, C-T02): se aplican los tokens
 * equivalentes (Surface/muted + Interactive/active · Feature/missions-surface + Feature/missions).
 */
import { computed } from 'vue'
const props = withDefaults(defineProps<{ value: number; type?: 'beneficios' | 'misiones'; label: string }>(), { type: 'beneficios' })
const pct = computed(() => Math.max(0, Math.min(100, props.value)))
</script>

<template>
  <div
    role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" :aria-label="label"
    :class="['aw-ui overflow-hidden rounded-full', type === 'beneficios' ? 'h-4 w-[272px] max-w-full bg-surface-muted' : 'h-16 w-[332px] max-w-full bg-feature-missions-surface']"
  >
    <div :class="['h-full rounded-full transition-[width] duration-slow ease-standard', type === 'beneficios' ? 'bg-interactive-active' : 'bg-feature-missions']" :style="{ width: `${pct}%` }" />
  </div>
</template>
