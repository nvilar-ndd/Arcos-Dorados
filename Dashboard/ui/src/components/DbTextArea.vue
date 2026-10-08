<script setup lang="ts">
/**
 * Text area — Figma: Components › Text Area (2723:28041).
 * Estados: Default · Focus · Error · Warning · Disabled. Contador "n/máx" a la derecha del label.
 * Figma usa `Text/text-primary` de otra librería (audit D-C05): acá se usa `text/primary`.
 */
import { computed, useId } from 'vue'
import DbStatusIcon from './DbStatusIcon.vue'

const model = defineModel<string>({ default: '' })

const props = withDefaults(
  defineProps<{
    label: string
    placeholder?: string
    rows?: number
    maxlength?: number
    status?: 'default' | 'error' | 'warning'
    supportingText?: string
    disabled?: boolean
    required?: boolean
  }>(),
  { rows: 3, status: 'default', disabled: false, required: false },
)

const id = useId()
const supportId = `${id}-support`
const counterId = `${id}-counter`

const fieldClasses = computed(() => {
  const base = 'flex gap-100 rounded-sm border p-100 transition-colors duration-fast'
  if (props.disabled) return `${base} border-transparent bg-layer-03`
  if (props.status === 'error') return `${base} border-support-error bg-layer-02`
  return `${base} border-transparent bg-layer-02 focus-within:border-border-01`
})

const nearLimit = computed(() => props.maxlength !== undefined && model.value.length >= props.maxlength * 0.9)
</script>

<template>
  <div class="db-ui flex w-full flex-col">
    <div class="flex items-center justify-between gap-100 p-100">
      <label :for="id" class="db-label02 text-text-primary">
        {{ label }}<span v-if="required" aria-hidden="true"> *</span>
      </label>
      <span v-if="maxlength" :id="counterId" class="db-label02 text-text-primary" :aria-live="nearLimit ? 'polite' : 'off'">
        {{ model.length }}/{{ maxlength }}
      </span>
    </div>
    <div :class="fieldClasses">
      <textarea
        :id="id"
        v-model="model"
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :required="required"
        :aria-invalid="status === 'error' || undefined"
        :aria-describedby="[supportingText ? supportId : '', maxlength ? counterId : ''].filter(Boolean).join(' ') || undefined"
        class="db-label02 min-h-[72px] flex-1 resize-y bg-transparent text-text-primary outline-none placeholder:text-text-secondary disabled:cursor-not-allowed disabled:text-text-disabled"
      />
      <DbStatusIcon v-if="status === 'error' && !disabled" status="error" />
      <DbStatusIcon v-else-if="status === 'warning' && !disabled" status="warning" />
    </div>
    <p
      v-if="supportingText"
      :id="supportId"
      :class="['db-label01 p-100', status === 'error' ? 'text-text-error' : 'text-text-secondary']"
    >
      {{ supportingText }}
    </p>
  </div>
</template>
