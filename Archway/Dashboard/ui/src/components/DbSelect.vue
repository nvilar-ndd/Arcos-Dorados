<script setup lang="ts" generic="T extends string | number">
/**
 * Dropdown — Figma: Components › Dropdown
 *   Dropdown-Menu (317:3297, input) · Dropdown-ListMenu (lista) · Dropdown-ListItem (3670:6645, opción).
 * Input: borde inferior en Focus / Active / Pressed / Error. Opción: Hover y Selected comparten fondo
 * en Figma (`background/04`, audit D-C08); se agrega un check al seleccionado.
 * Patrón ARIA: select-only combobox (W3C APG).
 */
import { computed, nextTick, ref, useId, watch, type Component } from 'vue'
import { Check, ChevronDown } from 'lucide-vue-next'
import { useDismiss } from '../composables/useDismiss'

export interface DbSelectOption<V> {
  value: V
  label: string
  icon?: Component
  /** Miniatura de 48 × 48 (variante con imagen). */
  image?: string
  disabled?: boolean
}

const model = defineModel<T | null>({ default: null })

const props = withDefaults(
  defineProps<{
    options: DbSelectOption<T>[]
    label?: string
    /** Nombre accesible si no hay label visible. */
    ariaLabel?: string
    placeholder?: string
    iconLeft?: Component
    status?: 'default' | 'error'
    supportingText?: string
    disabled?: boolean
    skeleton?: boolean
  }>(),
  { placeholder: 'Seleccionar', status: 'default', disabled: false, skeleton: false },
)

const id = useId()
const labelId = `${id}-label`
const listId = `${id}-list`
const supportId = `${id}-support`
const open = ref(false)
const active = ref(-1)
const root = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)

const selected = computed(() => props.options.find((o) => o.value === model.value) ?? null)

useDismiss(open, [root], (reason) => {
  open.value = false
  if (reason === 'escape') button.value?.focus()
})

watch(open, async (value) => {
  if (!value) return
  active.value = Math.max(0, props.options.findIndex((o) => o.value === model.value))
  await nextTick()
  scrollActive()
})

function scrollActive() {
  document.getElementById(`${listId}-${active.value}`)?.scrollIntoView({ block: 'nearest' })
}

function move(step: number) {
  const n = props.options.length
  let i = active.value
  for (let k = 0; k < n; k++) {
    i = (i + step + n) % n
    if (!props.options[i]?.disabled) break
  }
  active.value = i
  void nextTick(scrollActive)
}

function choose(index: number) {
  const option = props.options[index]
  if (!option || option.disabled) return
  model.value = option.value
  open.value = false
  button.value?.focus()
}

function onKeydown(event: KeyboardEvent) {
  if (props.disabled) return
  const key = event.key
  if (!open.value && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(key)) {
    event.preventDefault()
    open.value = true
    return
  }
  if (!open.value) return
  if (key === 'ArrowDown') { event.preventDefault(); move(1) }
  else if (key === 'ArrowUp') { event.preventDefault(); move(-1) }
  else if (key === 'Home') { event.preventDefault(); active.value = 0; move(0) }
  else if (key === 'End') { event.preventDefault(); active.value = props.options.length - 1; move(0) }
  else if (key === 'Enter' || key === ' ') { event.preventDefault(); choose(active.value) }
  else if (key === 'Tab') open.value = false
  else if (key.length === 1) {
    const i = props.options.findIndex((o) => !o.disabled && o.label.toLowerCase().startsWith(key.toLowerCase()))
    if (i >= 0) { active.value = i; void nextTick(scrollActive) }
  }
}

const triggerClasses = computed(() => {
  const base = 'db-focus flex h-600 w-full items-center gap-100 border-b px-200 text-left transition-colors duration-fast'
  if (props.skeleton) return `${base} border-transparent bg-layer-02 pointer-events-none`
  if (props.disabled) return `${base} border-transparent bg-layer-02 text-text-disabled cursor-not-allowed`
  if (props.status === 'error') return `${base} border-support-error bg-layer-01`
  if (open.value) return `${base} border-border-01 bg-layer-01`
  return `${base} border-transparent bg-layer-01 hover:bg-button-secondary-hover focus-visible:bg-button-secondary-hover focus-visible:border-border-01 active:bg-layer-01 active:border-border-01`
})
</script>

<template>
  <div ref="root" class="db-ui relative flex h-fit w-full flex-col">
    <span v-if="label" :id="labelId" class="db-label02 p-100 text-text-primary">{{ label }}</span>

    <div
      :id="id"
      ref="button"
      role="combobox"
      :tabindex="disabled || skeleton ? -1 : 0"
      :aria-labelledby="label ? `${labelId} ${id}` : undefined"
      :aria-label="label ? undefined : ariaLabel"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-controls="listId"
      :aria-activedescendant="open && active >= 0 ? `${listId}-${active}` : undefined"
      :aria-disabled="disabled || undefined"
      :aria-invalid="status === 'error' || undefined"
      :aria-describedby="supportingText ? supportId : undefined"
      :aria-busy="skeleton || undefined"
      :class="triggerClasses"
      @click="!disabled && (open = !open)"
      @keydown="onKeydown"
    >
      <template v-if="skeleton">
        <span class="size-200 rounded-sm bg-background-04" />
        <span class="h-200 flex-1 rounded-sm bg-layer-03" />
        <span class="size-200 rounded-sm bg-background-04" />
      </template>
      <template v-else>
        <component
          :is="selected?.icon ?? iconLeft"
          v-if="selected?.icon ?? iconLeft"
          class="size-200 shrink-0 text-icon-primary"
          aria-hidden="true"
        />
        <span
          :class="[
            'db-label02 min-w-0 flex-1 truncate',
            disabled ? 'text-text-disabled' : selected ? 'text-text-primary' : 'text-text-secondary',
          ]"
        >
          {{ selected?.label ?? placeholder }}
        </span>
        <ChevronDown
          :class="['size-200 shrink-0 transition-transform duration-fast', disabled ? 'text-text-disabled' : 'text-icon-primary', open && 'rotate-180']"
          aria-hidden="true"
        />
      </template>
    </div>

    <p
      v-if="supportingText"
      :id="supportId"
      :class="['db-label01 p-100', status === 'error' ? 'text-text-error' : 'text-text-secondary']"
    >
      {{ supportingText }}
    </p>

    <ul
      v-show="open"
      :id="listId"
      role="listbox"
      :aria-labelledby="label ? labelId : undefined"
      :aria-label="label ? undefined : ariaLabel"
      class="absolute left-0 right-0 top-full z-10 max-h-[384px] overflow-auto bg-background-01 shadow-raised-down"
    >
      <li
        v-for="(option, index) in options"
        :id="`${listId}-${index}`"
        :key="String(option.value)"
        role="option"
        :aria-selected="option.value === model"
        :aria-disabled="option.disabled || undefined"
        :class="[
          'db-label02 flex items-center gap-100 border-b border-border-02 p-200',
          option.image ? 'min-h-1000' : '',
          option.disabled
            ? 'cursor-not-allowed bg-layer-02 text-text-disabled'
            : index === active || option.value === model
              ? 'cursor-pointer bg-background-04 text-text-primary'
              : 'cursor-pointer bg-background-01 text-text-secondary hover:bg-background-04 hover:text-text-primary',
        ]"
        @mouseenter="!option.disabled && (active = index)"
        @click="choose(index)"
      >
        <component :is="option.icon" v-if="option.icon" class="size-200 shrink-0" aria-hidden="true" />
        <span class="min-w-0 flex-1 truncate">{{ option.label }}</span>
        <Check v-if="option.value === model" class="size-200 shrink-0 text-icon-primary" aria-hidden="true" />
        <img v-if="option.image" :src="option.image" alt="" class="size-600 shrink-0 rounded-sm object-cover" />
      </li>
    </ul>
  </div>
</template>
