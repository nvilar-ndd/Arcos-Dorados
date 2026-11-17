<script setup lang="ts">
/**
 * Input — Text Field · Text Area · Password. Figma: Design Resources CORE › Imput_Text Field (501:1801),
 * Imput_Text area (537:17470), Imput_Password (5005:564), con las piezas Imput label · Placeholder · Hint.
 *
 * Medidas de Figma: label Label Small Text/secondary, gap 4, campo de 32 (Text Area 72) con padding 8/16,
 * radio M y stroke Inside de 1 px (Border/soft → Completed Border/input-active, Typing Border/strong,
 * Error Feedback/error, Success vuelve a Border/soft; Focused 2 px Button/secondary-stroke-focused).
 * Disabled: Surface/subtle.
 * Hint en Text/secondary; Error y Success suman el ícono lleno (Cancel rojo / Success verde).
 * Typing y Error muestran el botón de borrar (Cancel lleno). El Text Area crece con el texto desde 72.
 * El label enfoca el campo (amplía el área táctil del campo de 32, audit C-A04).
 */
import { computed, nextTick, onMounted, ref, useId, watch } from 'vue'
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
const focused = ref(false)
const area = ref<HTMLTextAreaElement>()
const inputType = computed(() => (props.type === 'password' && !shown.value ? 'password' : props.type === 'password' ? 'text' : props.type))
const message = computed(() => props.error ?? props.success ?? props.hint)
const clearable = computed(() => !props.disabled && props.type !== 'password' && (props.multiline || (!!model.value && (focused.value || !!props.error))))

/** Text Area: arranca en 72 (Figma) y crece con el contenido. */
const grow = () => {
  const el = area.value
  if (!el) return
  el.style.height = '16px'
  el.style.height = `${Math.max(16, el.scrollHeight)}px`
}
onMounted(grow)
watch(model, () => nextTick(grow))

const fieldClasses = computed(() => [
  'flex w-full items-center gap-8 rounded-m px-16 py-8 transition-[box-shadow,background-color] duration-fast ease-standard',
  props.multiline ? 'min-h-[72px]' : 'h-[32px]',
  props.disabled
    ? 'bg-surface-subtle text-text-disabled'
    : 'bg-surface-default text-text-primary',
  props.disabled
    ? props.multiline ? 'shadow-[inset_0_0_0_1px_var(--aw-border-soft)]' : 'shadow-[inset_0_0_0_1px_var(--aw-border-subtle)]'
    : props.error
      ? 'shadow-[inset_0_0_0_1px_var(--aw-feedback-error)]'
      : props.success && !focused.value
        ? 'shadow-[inset_0_0_0_1px_var(--aw-border-soft)]'
      : focused.value
        ? model.value
          ? 'shadow-[inset_0_0_0_1px_var(--aw-border-strong)] has-[:focus-visible]:shadow-[inset_0_0_0_2px_var(--aw-button-secondary-stroke-focused)]'
          : 'shadow-[inset_0_0_0_2px_var(--aw-button-secondary-stroke-focused)]'
        : model.value
          ? 'shadow-[inset_0_0_0_1px_var(--aw-border-input-active)]'
          : 'shadow-[inset_0_0_0_1px_var(--aw-border-soft)]',
])
</script>

<template>
  <div class="aw-ui flex w-full flex-col gap-4">
    <div class="flex items-center justify-between gap-4">
      <label :for="id" :class="['aw-label-small', disabled ? 'text-text-disabled' : 'text-text-secondary']">
        {{ label }}<span v-if="required" aria-hidden="true"> *</span>
      </label>
      <span v-if="multiline && maxlength" class="aw-label-small text-text-primary" aria-live="polite">{{ model.length }}/{{ maxlength }}</span>
    </div>

    <div :class="fieldClasses">
      <AwIcon v-if="iconLeading" :name="iconLeading" :size="16" class="text-icon-gray" />
      <textarea
        v-if="multiline"
        :id="id"
        ref="area"
        v-model="model"
        rows="1"
        class="aw-label-medium block min-w-0 flex-1 resize-none overflow-hidden bg-transparent placeholder:text-[color:inherit]"
        :class="model || disabled ? '' : 'placeholder:text-text-secondary'"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :required="required"
        :aria-invalid="!!error || undefined"
        :aria-describedby="message ? hintId : undefined"
        @focus="focused = true"
        @blur="focused = false"
      />
      <input
        v-else
        :id="id"
        v-model="model"
        :type="inputType"
        :class="['aw-label-medium min-w-0 flex-1 bg-transparent', disabled ? 'placeholder:text-text-disabled' : 'placeholder:text-text-secondary']"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :required="required"
        :autocomplete="autocomplete ?? (type === 'password' ? 'current-password' : undefined)"
        :aria-invalid="!!error || undefined"
        :aria-describedby="message ? hintId : undefined"
        @focus="focused = true"
        @blur="focused = false"
      />
      <button
        v-if="type === 'password'"
        type="button"
        class="aw-hit ml-4 mr-[5px] text-icon-primary"
        :aria-label="shown ? 'Ocultar contraseña' : 'Mostrar contraseña'"
        :aria-pressed="shown"
        :disabled="disabled"
        @click="shown = !shown"
      >
        <AwIcon :name="shown ? 'show' : 'hide'" :size="16" />
      </button>
      <button
        v-else-if="clearable || (multiline && disabled)"
        type="button"
        class="aw-hit ml-4 mr-[5px] text-icon-primary"
        aria-label="Borrar texto"
        :disabled="disabled || !model"
        @mousedown.prevent
        @click="model = ''"
      >
        <AwIcon name="cancel-filled" :size="16" />
      </button>
    </div>

    <p
      v-if="message"
      :id="hintId"
      :class="['aw-label-small flex items-center gap-4', disabled ? 'text-text-disabled' : 'text-text-secondary']"
      :aria-live="error ? 'assertive' : undefined"
    >
      <AwIcon v-if="error" name="cancel-red" :size="16" class="text-feedback-error" />
      <AwIcon v-else-if="success" name="success-filled" :size="16" class="text-feedback-success" />
      {{ message }}
    </p>
  </div>
</template>
