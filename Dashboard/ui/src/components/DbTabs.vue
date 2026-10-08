<script setup lang="ts" generic="T extends string">
/**
 * Tabs — Figma: Components › Tabs › Tab label (797:9633).
 * 120 × 48, padding 16, indicador inferior. Default/Pressed/Active según Figma; el foco suma `db-focus`.
 * Patrón ARIA tabs con activación manual por flechas (Home/End incluidos).
 * El contenido va en el slot `panel` (recibe el valor activo).
 */
import { nextTick, ref, useId, type Component } from 'vue'

export interface DbTab<V> { value: V; label: string; icon?: Component; disabled?: boolean }

const model = defineModel<T>({ required: true })
const props = defineProps<{ tabs: DbTab<T>[]; ariaLabel: string }>()

const id = useId()
const list = ref<HTMLElement | null>(null)

async function focusTab(index: number) {
  const enabled = props.tabs.map((t, i) => (t.disabled ? -1 : i)).filter((i) => i >= 0)
  if (!enabled.length) return
  const pos = enabled.indexOf(props.tabs.findIndex((t) => t.value === model.value))
  const next = enabled[(pos + index + enabled.length) % enabled.length] ?? 0
  const tab = props.tabs[next]
  if (tab) model.value = tab.value
  await nextTick()
  list.value?.querySelector<HTMLElement>('[aria-selected="true"]')?.focus()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') { event.preventDefault(); void focusTab(1) }
  else if (event.key === 'ArrowLeft') { event.preventDefault(); void focusTab(-1) }
  else if (event.key === 'Home') {
    event.preventDefault()
    const first = props.tabs.find((t) => !t.disabled)
    if (first) { model.value = first.value; void focusTab(0) }
  } else if (event.key === 'End') {
    event.preventDefault()
    const last = [...props.tabs].reverse().find((t) => !t.disabled)
    if (last) { model.value = last.value; void focusTab(0) }
  }
}
</script>

<template>
  <div class="db-ui flex w-full flex-col">
    <div ref="list" role="tablist" :aria-label="ariaLabel" class="flex overflow-x-auto" @keydown="onKeydown">
      <button
        v-for="tab in tabs"
        :id="`${id}-tab-${tab.value}`"
        :key="tab.value"
        type="button"
        role="tab"
        :aria-selected="tab.value === model"
        :aria-controls="$slots.panel ? `${id}-panel` : undefined"
        :tabindex="tab.value === model ? 0 : -1"
        :disabled="tab.disabled"
        :class="[
          'db-focus inline-flex h-600 min-w-[120px] shrink-0 items-center justify-center gap-100 border-b px-200 transition-colors duration-fast',
          tab.disabled
            ? 'cursor-not-allowed border-border-03 bg-button-skeleton text-text-disabled db-label02'
            : tab.value === model
              ? 'border-b-2 border-border-01 bg-button-secondary text-text-primary db-label03'
              : 'border-border-03 bg-button-secondary text-text-primary db-label02 hover:bg-button-secondary-hover focus-visible:bg-button-secondary-hover focus-visible:border-border-01 active:bg-button-secondary active:border-border-01',
        ]"
        @click="model = tab.value"
      >
        <component :is="tab.icon" v-if="tab.icon" class="size-200" aria-hidden="true" />
        {{ tab.label }}
      </button>
      <span class="flex-1 border-b border-border-03" aria-hidden="true" />
    </div>
    <div
      v-if="$slots.panel"
      :id="`${id}-panel`"
      role="tabpanel"
      :aria-labelledby="`${id}-tab-${model}`"
      tabindex="0"
      class="db-focus pt-200 outline-none"
    >
      <slot name="panel" :value="model" />
    </div>
  </div>
</template>
