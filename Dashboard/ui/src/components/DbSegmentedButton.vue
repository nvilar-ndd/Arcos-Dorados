<script setup lang="ts" generic="T extends string">
/**
 * Segmented button — Figma: Components › Tabs › Segmented button (2490:4471) + Building Blocks (2490:4485).
 * 2 a 4 segmentos de 32 px de alto. No seleccionado `layer/02`; seleccionado `layer/01` + borde `background/04`.
 * Semántica de radiogroup (selección única).
 */
import { nextTick, type Component } from 'vue'

export interface DbSegment<V> {
  value: V
  label?: string
  icon?: Component
  /** Obligatorio si el segmento es sólo ícono. */
  ariaLabel?: string
  disabled?: boolean
}

const model = defineModel<T>({ required: true })
defineProps<{ segments: DbSegment<T>[]; ariaLabel: string }>()

function onKeydown(event: KeyboardEvent, segments: DbSegment<T>[]) {
  const dir = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0
  if (!dir) return
  event.preventDefault()
  const group = event.currentTarget as HTMLElement
  const enabled = segments.filter((s) => !s.disabled)
  const i = enabled.findIndex((s) => s.value === model.value)
  const next = enabled[(i + dir + enabled.length) % enabled.length]
  if (next) model.value = next.value
  void nextTick(() => group.querySelector<HTMLElement>('[aria-checked="true"]')?.focus())
}
</script>

<template>
  <div role="radiogroup" :aria-label="ariaLabel" class="db-ui inline-flex rounded-md bg-layer-02" @keydown="onKeydown($event, segments)">
    <button
      v-for="(seg, i) in segments"
      :key="seg.value"
      type="button"
      role="radio"
      :aria-checked="seg.value === model"
      :aria-label="seg.label ? undefined : seg.ariaLabel"
      :tabindex="seg.value === model ? 0 : -1"
      :disabled="seg.disabled"
      :class="[
        'db-focus db-label02 inline-flex h-400 items-center justify-center gap-50 border px-200 py-50 transition-colors duration-fast',
        i === 0 && 'rounded-l-md',
        i === segments.length - 1 && 'rounded-r-md',
        seg.disabled
          ? 'cursor-not-allowed border-transparent text-text-disabled'
          : seg.value === model
            ? 'rounded-md border-background-04 bg-layer-01 text-text-primary'
            : 'border-transparent text-text-secondary hover:bg-button-secondary-hover',
      ]"
      @click="model = seg.value"
    >
      <component :is="seg.icon" v-if="seg.icon" class="size-200" aria-hidden="true" />
      <span v-if="seg.label">{{ seg.label }}</span>
    </button>
  </div>
</template>
