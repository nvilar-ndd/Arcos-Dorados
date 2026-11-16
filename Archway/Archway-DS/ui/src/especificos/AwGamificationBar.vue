<script setup lang="ts">
/**
 * Gamification Bar 💠 — Figma: Design Resources CORE › Gamification Bar. Expanded (barra + card
 * de mensaje) o Collapsed (sólo barra). Contenedor Surface/default con radio L arriba, padding-top 16.
 * Track Surface/subtle, avance Feedback/info, hitos Feedback/info + Icon/on-color o Icon/disabled.
 * Card de mensaje Feedback/info-surface. El mensaje se anuncia (aria-live) cuando cambia la etapa.
 */
import { computed } from 'vue'
import AwIcon from '../components/AwIcon.vue'

const props = withDefaults(
  defineProps<{ progress: number; milestones?: number[]; message?: string; type?: 'expanded' | 'collapsed'; skeleton?: boolean; label?: string }>(),
  { milestones: () => [33, 66, 100], message: undefined, type: 'expanded', skeleton: false, label: 'Avance hacia el envío gratis' },
)
const pct = computed(() => Math.max(0, Math.min(100, props.progress)))
</script>

<template>
  <section class="aw-ui flex w-full flex-col gap-16 rounded-t-l bg-surface-default px-16 pb-16 pt-16" :aria-busy="skeleton || undefined">
    <div v-if="skeleton" class="aw-shimmer h-24 w-full rounded-full bg-surface-muted" aria-hidden="true" />
    <div v-else class="relative flex h-24 items-center" role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" :aria-label="label">
      <div class="h-8 w-full overflow-hidden rounded-full bg-surface-subtle">
        <div class="h-full rounded-full bg-feedback-info transition-[width] duration-slow ease-standard" :style="{ width: `${pct}%` }" />
      </div>
      <span
        v-for="m in milestones"
        :key="m"
        :class="['absolute flex size-24 -translate-x-full items-center justify-center rounded-full', pct >= m ? 'bg-feedback-info text-icon-on-color' : 'bg-surface-strong text-icon-disabled']"
        :style="{ left: `${m}%` }"
        aria-hidden="true"
      >
        <AwIcon :name="pct >= m ? 'checkmark' : 'deals'" :size="16" />
      </span>
    </div>
    <p v-if="type === 'expanded' && message && !skeleton" class="aw-label-small-bold rounded-m bg-feedback-info-surface p-16 text-text-primary" aria-live="polite">{{ message }}</p>
  </section>
</template>
