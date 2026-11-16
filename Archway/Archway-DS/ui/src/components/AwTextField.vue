<script setup lang="ts">
/**
 * Input — Text Field · Text Area · Password. Figma: Design Resources CORE › Imput_Text Field (501:1801),
 * Imput_Text area (537:17470), Imput_Password (5005:564), con las piezas Imput label · Placeholder · Hint.
 *
 * Estados de Figma resueltos por el navegador: Enabled · Focused/Active/Typing (:focus-within) ·
 * Completed (con valor) · Error · Success · Disabled. El label enfoca el campo (amplía el área
 * táctil del campo de 32, audit C-A04).
 */
import { computed, ref, useId } from 'vue'
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

const model = defineModel<string>({ default: '' })
const props = withDefaults(
  defineProps<{
    label: string
    placeholder?: string
    hint?: string
    error?: string
    success?: string
    type?: 'text' | 'email' | 'tel' | 'number' | 'password'
    multiline?: boolean
    maxlength?: number
    iconLeading?: AwIconName
    disabled?: boolean
    required?: boolean
    autocomplete?: string
  }>(),
  {
    placeholder: undefined, hint: undefined, error: undefined, success: undefined, type: 'text', multiline: false,
    maxlength: undefined, iconLeading: undefined, disabled: false, required: false, autocomplete: undefined,
  },
)

const id = useId()
const hintId = `${id}-hint`
const shown = ref(false)
const inputType = computed(() => (props.type === 'password' && !shown.value ? 'password' : props.type === 'password' ? 'text' : props.type))
const message = computed(() => props.error ?? props.success ?? props.hint)

const fieldClasses = computed(() => [
  'flex w-full gap-8 rounded-m border px-16 py-8 transition-colors duration-fast ease-standard',
  props.multiline ? 'min-h-[72px] items-start' : 'h-[32px] items-center',
  props.disabled
    ? 'bg-surface-subtle border-border-subtle text-text-disabled'
    : props.error
      ? 'bg-surface-default border-feedback-error text-text-primary'
      : model.value
        ? 'bg-surface-default border-border-input-active text-text-primary focus-within:border-border-strong'
        : 'bg-surface-default border-border-soft text-text-primary focus-within:border-border-strong',
])
</script>

<template>
  <div class="aw-ui flex w-full flex-col gap-4">
    <div class="flex items-center justify-between gap-4">
      <label :for="id" :class="['aw-label-small', disabled ? 'text-text-disabled' : 'text-text-primary']">
        {{ label }}<span v-if="required" aria-hidden="true"> *</span>
      </label>
      <span v-if="multiline && maxlength" class="aw-label-small text-text-secondary" aria-live="polite">{{ model.length }}/{{ maxlength }}</span>
    </div>

    <div :class="fieldClasses">
      <AwIcon v-if="iconLeading" :name="iconLeading" :size="16" class="text-icon-gray" />
      <textarea
        v-if="multiline"
        :id="id"
        v-model="model"
        rows="3"
        class="aw-label-medium min-w-0 flex-1 resize-none bg-transparent placeholder:text-text-secondary"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :required="required"
        :aria-invalid="!!error || undefined"
        :aria-describedby="message ? hintId : undefined"
      />
      <input
        v-else
        :id="id"
        v-model="model"
        :type="inputType"
        class="aw-label-medium min-w-0 flex-1 bg-transparent placeholder:text-text-secondary"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :required="required"
        :autocomplete="autocomplete ?? (type === 'password' ? 'current-password' : undefined)"
        :aria-invalid="!!error || undefined"
        :aria-describedby="message ? hintId : undefined"
      />
      <button
        v-if="type === 'password'"
        type="button"
        class="aw-hit text-icon-primary"
        :aria-label="shown ? 'Ocultar contraseña' : 'Mostrar contraseña'"
        :aria-pressed="shown"
        :disabled="disabled"
        @click="shown = !shown"
      >
        <AwIcon name="hide" :size="16" />
      </button>
      <button
        v-else-if="multiline && model && !disabled"
        type="button"
        class="aw-hit text-icon-primary"
        aria-label="Borrar texto"
        @click="model = ''"
      >
        <AwIcon name="cancel" :size="16" />
      </button>
    </div>

    <p
      v-if="message"
      :id="hintId"
      :class="['aw-label-small flex items-center gap-4', error ? 'text-text-error' : disabled ? 'text-text-disabled' : 'text-text-secondary']"
      :aria-live="error ? 'assertive' : undefined"
    >
      <AwIcon v-if="error" name="error" :size="16" />
      <AwIcon v-else-if="success" name="success" :size="16" class="text-feedback-success" />
      {{ message }}
    </p>
  </div>
</template>
