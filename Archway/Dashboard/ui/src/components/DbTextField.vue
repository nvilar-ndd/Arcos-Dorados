<script setup lang="ts">
/**
 * Text field — Figma: Components › TextField (620:63185) + TextField_Dropdown.
 * Estados de Figma: Default · Hover · Focused · Active-Typing (borde 2 px) · Error · Success · Disabled.
 * Con `suggestions` se comporta como combobox (TextField_Dropdown).
 * Docs: Dashboard/components/text-field.md
 */
import { computed, ref, useId, type Component } from 'vue'
import { X } from 'lucide-vue-next'
import { useDismiss } from '../composables/useDismiss'

const model = defineModel<string>({ default: '' })

const props = withDefaults(
  defineProps<{
    label?: string
    placeholder?: string
    type?: 'text' | 'search' | 'email' | 'number' | 'tel' | 'url' | 'password'
    iconLeft?: Component
    /** Muestra la ✕ para limpiar cuando hay valor. */
    clearable?: boolean
    status?: 'default' | 'error' | 'success'
    supportingText?: string
    disabled?: boolean
    required?: boolean
    maxlength?: number
    /** Sugerencias: activa el patrón combobox (TextField_Dropdown). */
    suggestions?: string[]
    /** Nombre accesible cuando no hay label visible. */
    ariaLabel?: string
  }>(),
  { type: 'text', clearable: false, status: 'default', disabled: false, required: false },
)

const emit = defineEmits<{ select: [value: string]; clear: [] }>()

const id = useId()
const supportId = `${id}-support`
const listId = `${id}-list`
const input = ref<HTMLInputElement | null>(null)
const root = ref<HTMLElement | null>(null)
const focused = ref(false)
const open = ref(false)
const activeIndex = ref(-1)

const filtered = computed(() => {
  if (!props.suggestions) return []
  const q = model.value.trim().toLowerCase()
  return q ? props.suggestions.filter((s) => s.toLowerCase().includes(q)) : props.suggestions
})
const isCombobox = computed(() => props.suggestions !== undefined)

useDismiss(open, [root], () => (open.value = false))

const fieldClasses = computed(() => {
  const base =
    'flex h-500 items-center gap-100 rounded-sm border bg-layer-02 px-100 transition-colors duration-fast'
  if (props.disabled) return `${base} border-transparent bg-layer-03`
  if (props.status === 'error') return `${base} border-support-error`
  if (props.status === 'success') return `${base} border-support-success`
  // Active-Typing: 2 px sin mover el layout (borde 1 px + sombra interna 1 px).
  const typing = focused.value && model.value ? 'shadow-[inset_0_0_0_1px_var(--db-button-secondary-stroke)]' : ''
  return `${base} border-transparent hover:border-button-secondary-hover focus-within:border-button-secondary-stroke ${typing}`
})

function clear() {
  model.value = ''
  emit('clear')
  input.value?.focus()
}

function pick(value: string) {
  model.value = value
  emit('select', value)
  open.value = false
  activeIndex.value = -1
}

function onKeydown(event: KeyboardEvent) {
  if (!isCombobox.value) return
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    open.value = true
    activeIndex.value = Math.min(activeIndex.value + 1, filtered.value.length - 1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    activeIndex.value = Math.max(activeIndex.value - 1, 0)
  } else if (event.key === 'Enter' && open.value && activeIndex.value >= 0) {
    event.preventDefault()
    const value = filtered.value[activeIndex.value]
    if (value !== undefined) pick(value)
  }
}

function onInput() {
  if (isCombobox.value) {
    open.value = true
    activeIndex.value = -1
  }
}
</script>

<template>
  <div ref="root" class="db-ui relative flex h-fit w-full flex-col">
    <div v-if="label || maxlength" class="flex items-center justify-between gap-100 p-100">
      <label v-if="label" :for="id" class="db-label02 text-text-primary">
        {{ label }}<span v-if="required" aria-hidden="true"> *</span>
      </label>
      <span v-if="maxlength" class="db-label02 text-text-primary" aria-hidden="true">{{ model.length }}/{{ maxlength }}</span>
    </div>

    <div :class="fieldClasses">
      <component :is="iconLeft" v-if="iconLeft" class="size-300 shrink-0 p-[3px] text-icon-primary" aria-hidden="true" />
      <input
        :id="id"
        ref="input"
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :maxlength="maxlength"
        :aria-label="label ? undefined : ariaLabel"
        :aria-invalid="status === 'error' || undefined"
        :aria-describedby="supportingText ? supportId : undefined"
        :role="isCombobox ? 'combobox' : undefined"
        :aria-autocomplete="isCombobox ? 'list' : undefined"
        :aria-expanded="isCombobox ? open && filtered.length > 0 : undefined"
        :aria-controls="isCombobox ? listId : undefined"
        :aria-activedescendant="isCombobox && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined"
        class="db-label02 min-w-0 flex-1 bg-transparent text-text-primary outline-none placeholder:text-text-secondary disabled:cursor-not-allowed disabled:text-text-disabled"
        @focus="focused = true"
        @blur="focused = false"
        @input="onInput"
        @keydown="onKeydown"
      />
      <button
        v-if="clearable && model && !disabled"
        type="button"
        class="db-focus inline-flex size-300 shrink-0 items-center justify-center rounded-sm text-icon-primary"
        aria-label="Borrar texto"
        @click="clear"
      >
        <X class="size-200" aria-hidden="true" />
      </button>
    </div>

    <p
      v-if="supportingText"
      :id="supportId"
      :class="[
        'db-label01 p-100',
        status === 'error' ? 'text-text-error' : status === 'success' ? 'text-support-success' : 'text-text-secondary',
      ]"
      :aria-live="status === 'error' ? 'polite' : undefined"
    >
      {{ supportingText }}
    </p>

    <ul
      v-if="isCombobox && open && filtered.length"
      :id="listId"
      role="listbox"
      class="absolute left-0 right-0 top-full z-10 mt-50 max-h-[240px] overflow-auto bg-background-01 shadow-raised-down"
    >
      <li
        v-for="(option, index) in filtered"
        :id="`${listId}-${index}`"
        :key="option"
        role="option"
        :aria-selected="index === activeIndex"
        :class="[
          'db-label02 cursor-pointer border-b border-border-02 px-200 py-200',
          index === activeIndex ? 'bg-background-04 text-text-primary' : 'text-text-secondary hover:bg-background-04 hover:text-text-primary',
        ]"
        @mousedown.prevent="pick(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>
