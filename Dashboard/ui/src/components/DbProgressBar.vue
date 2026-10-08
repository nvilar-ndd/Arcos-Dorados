<script setup lang="ts">
/**
 * Progress bar — Figma: Progress bar › `progress bar` (2635:5535) y `progress bar -Items` (2635:5047).
 * Track 8 px `layer/03`; avance `link/primary` · Success `support/success` · Error `support/error`.
 * Figma usa `Text/text-secondary` de otra librería para el helper (audit D-C05): acá `text/secondary`.
 */
import { computed, useId } from 'vue'
import DbStatusIcon from './DbStatusIcon.vue'

const props = withDefaults(
  defineProps<{
    value: number
    label?: string
    helperText?: string
    status?: 'active' | 'success' | 'error'
  }>(),
  { status: 'active' },
)

const id = useId()
const pct = computed(() => (props.status === 'active' ? Math.min(100, Math.max(0, props.value)) : 100))
const fill = computed(() =>
  props.status === 'success' ? 'bg-support-success' : props.status === 'error' ? 'bg-support-error' : 'bg-link-primary',
)
</script>

<template>
  <div class="db-ui flex w-full flex-col gap-100">
    <div v-if="label" class="flex items-center justify-between gap-100">
      <span :id="`${id}-label`" class="db-label02 text-text-primary">{{ label }}</span>
      <DbStatusIcon v-if="status !== 'active'" :status="status === 'success' ? 'success' : 'error'" :size="16" />
    </div>
    <div
      role="progressbar"
      :aria-labelledby="label ? `${id}-label` : undefined"
      :aria-label="label ? undefined : 'Progreso'"
      :aria-valuenow="pct"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuetext="status === 'success' ? 'Completado' : status === 'error' ? 'Error' : `${pct} %`"
      :aria-describedby="helperText ? `${id}-help` : undefined"
      class="h-100 w-full overflow-hidden bg-layer-03"
    >
      <div :class="['h-full transition-[width] duration-fast', fill]" :style="{ width: `${pct}%` }" />
    </div>
    <p v-if="helperText" :id="`${id}-help`" class="db-label01 text-text-secondary">{{ helperText }}</p>
  </div>
</template>
