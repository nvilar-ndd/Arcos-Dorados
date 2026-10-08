<script setup lang="ts">
/**
 * Progress circle — Figma: Progress bar › _Progress circle (3296:6233), 16 × 16.
 * Fases 10–100 %. Track `border/02`, avance `link/primary`. Se usa en el File uploader.
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ value: number; size?: number; label?: string }>(), {
  size: 16,
  label: 'Progreso',
})

const R = 6
const C = 2 * Math.PI * R
const clamped = computed(() => Math.min(100, Math.max(0, props.value)))
</script>

<template>
  <span
    class="db-ui inline-flex"
    role="progressbar"
    :aria-valuenow="clamped"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="label"
  >
    <svg :width="size" :height="size" viewBox="0 0 16 16" aria-hidden="true" class="-rotate-90">
      <circle cx="8" cy="8" :r="R" fill="none" class="stroke-border-02" stroke-width="2" />
      <circle
        cx="8"
        cy="8"
        :r="R"
        fill="none"
        class="stroke-link-primary transition-[stroke-dashoffset] duration-fast"
        stroke-width="2"
        stroke-linecap="round"
        :stroke-dasharray="C"
        :stroke-dashoffset="C * (1 - clamped / 100)"
      />
    </svg>
  </span>
</template>
