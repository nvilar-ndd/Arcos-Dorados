<script setup lang="ts">
/**
 * Input: Select — Figma: Design Resources CORE › Imput_Select (5001:3921).
 * No se escribe: al tocarlo abre una lista de opciones. En web usa el <select> nativo
 * (teclado, lector de pantalla y picker del sistema en mobile) con la piel de Figma.
 */
import { useId } from 'vue'
import AwIcon from './AwIcon.vue'

export interface AwSelectOption { value: string; label: string; disabled?: boolean }

const model = defineModel<string>({ default: '' })
withDefaults(
  defineProps<{ label: string; options: AwSelectOption[]; placeholder?: string; hint?: string; disabled?: boolean }>(),
  { placeholder: 'Elegí una opción', hint: undefined, disabled: false },
)
const id = useId()
</script>

<template>
  <div class="aw-ui flex w-full flex-col gap-4">
    <label :for="id" :class="['aw-label-small', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ label }}</label>
    <div
      :class="[
        'relative flex h-[32px] items-center rounded-m border px-16 transition-colors duration-fast ease-standard',
        disabled ? 'bg-surface-subtle border-border-subtle text-text-disabled' : model ? 'bg-surface-default border-border-input-active text-text-primary focus-within:border-border-strong' : 'bg-surface-default border-border-soft text-text-secondary focus-within:border-border-strong',
      ]"
    >
      <select :id="id" v-model="model" class="aw-label-medium absolute inset-0 w-full cursor-pointer appearance-none bg-transparent px-16 pr-40 text-inherit" :disabled="disabled" :aria-describedby="hint ? `${id}-hint` : undefined">
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="o in options" :key="o.value" :value="o.value" :disabled="o.disabled">{{ o.label }}</option>
      </select>
      <AwIcon name="chevron-up" :size="16" :rotate="180" class="pointer-events-none ml-auto text-icon-primary" />
    </div>
    <p v-if="hint" :id="`${id}-hint`" class="aw-label-small text-text-secondary">{{ hint }}</p>
  </div>
</template>
