<script setup lang="ts">
/**
 * Progress bar — Figma: Design Resources CORE › Progress bar. Track Feedback/info-surface,
 * indicador Feedback/info (3.80:1). Alto 8, radio XS. Valor continuo 0–100 (Figma va de a 10).
 */
import { computed } from 'vue'
const props = withDefaults(defineProps<{ value: number; label?: string; showLabel?: boolean }>(), { label: 'Progreso', showLabel: false })
const pct = computed(() => Math.max(0, Math.min(100, Math.round(props.value))))
</script>

<template>
  <div class="aw-ui flex w-full flex-col gap-8">
    <div v-if="showLabel" class="aw-label-medium flex justify-between text-text-primary"><span>{{ label }}</span><span>{{ pct }} %</span></div>
    <div role="progressbar" :aria-valuenow="pct" aria-valuemin="0" aria-valuemax="100" :aria-label="label" class="h-8 w-full overflow-hidden rounded-xs bg-feedback-info-surface">
      <div class="h-full min-w-8 rounded-xs bg-feedback-info transition-[width] duration-moderate ease-standard" :style="{ width: `${pct}%` }" />
    </div>
  </div>
</template>
