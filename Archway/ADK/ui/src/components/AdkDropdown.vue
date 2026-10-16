<script setup lang="ts" generic="T extends string">
/**
 * ADK Dropdown — Figma: Input › ADK Dropdown (2521:1406). 888 × 104, lista de opciones de 64.
 * Opción elegida: fondo Ivory + barra Gold. Mismo estilo de línea que el Text Field.
 * Agregado de a11y: patrón combobox (button + listbox) con flechas, Enter, Escape y Home/End.
 */
import { computed, nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

export interface AdkOption<V extends string = string> { value: V; label: string }

const value = defineModel<T | null>({ default: null })
const props = defineProps<{ label: string; options: AdkOption<T>[]; helper?: string; disabled?: boolean }>()
const id = useId()
const open = ref(false)
const active = ref(0)
const root = ref<HTMLElement | null>(null)
const list = ref<HTMLElement | null>(null)
const selected = computed(() => props.options.find((o) => o.value === value.value))

function show() {
  if (props.disabled) return
  open.value = true
  active.value = Math.max(0, props.options.findIndex((o) => o.value === value.value))
  nextTick(() => list.value?.focus())
}
function close(refocus = true) {
  open.value = false
  if (refocus) nextTick(() => root.value?.querySelector<HTMLButtonElement>('button')?.focus())
}
function pick(i: number) {
  value.value = props.options[i].value
  close()
}
function onKey(e: KeyboardEvent) {
  const last = props.options.length - 1
  const map: Record<string, () => void> = {
    ArrowDown: () => (active.value = Math.min(last, active.value + 1)),
    ArrowUp: () => (active.value = Math.max(0, active.value - 1)),
    Home: () => (active.value = 0),
    End: () => (active.value = last),
    Enter: () => pick(active.value),
    ' ': () => pick(active.value),
    Escape: () => close(),
    Tab: () => close(false),
  }
  if (map[e.key]) {
    if (e.key !== 'Tab') e.preventDefault()
    map[e.key]()
  }
}
function outside(e: PointerEvent) {
  if (open.value && root.value && !root.value.contains(e.target as Node)) close(false)
}
watch(open, (o) => (o ? document.addEventListener('pointerdown', outside) : document.removeEventListener('pointerdown', outside)))
onBeforeUnmount(() => document.removeEventListener('pointerdown', outside))
</script>

<template>
  <div ref="root" class="adk-ui relative flex w-full max-w-[888px] flex-col gap-8 text-text-primary" :class="disabled ? 'opacity-40' : ''">
    <button
      type="button"
      :id="`${id}-btn`"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-controls="`${id}-list`"
      :disabled="disabled"
      class="adk-focus flex h-[104px] w-full items-end gap-24 border-b border-p-secondary-grey bg-background-default px-16 pb-16 text-left"
      @click="open ? close() : show()"
      @keydown.down.prevent="show"
    >
      <span class="flex min-w-0 flex-1 flex-col">
        <span v-if="selected" class="adk-body-small mb-8 text-text-secondary">{{ label }}</span>
        <span class="adk-body-medium truncate">{{ selected?.label ?? label }}</span>
      </span>
      <ChevronDown class="size-48 shrink-0 transition-transform duration-fast" :class="open ? 'rotate-180' : ''" aria-hidden="true" />
    </button>
    <ul
      v-show="open"
      :id="`${id}-list`"
      ref="list"
      role="listbox"
      tabindex="-1"
      :aria-labelledby="`${id}-btn`"
      :aria-activedescendant="open ? `${id}-o${active}` : undefined"
      class="absolute inset-x-0 top-[104px] z-20 overflow-hidden rounded-s bg-background-default shadow-bordered-down outline-none"
      @keydown="onKey"
    >
      <li
        v-for="(o, i) in options"
        :id="`${id}-o${i}`"
        :key="o.value"
        role="option"
        :aria-selected="o.value === value"
        class="adk-body-medium flex h-[64px] items-center px-16"
        :class="[
          o.value === value ? 'border-l-selected border-border-selected bg-background-subtle' : '',
          i === active ? 'outline outline-focus -outline-offset-2 outline-border-strong' : '',
        ]"
        @click="pick(i)"
        @pointerenter="active = i"
      >
        {{ o.label }}
      </li>
    </ul>
    <p v-if="helper" class="adk-body-medium px-16 text-text-secondary">{{ helper }}</p>
  </div>
</template>
