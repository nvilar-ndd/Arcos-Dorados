<script setup lang="ts">
/**
 * Input: PinCode — Figma: Design Resources CORE › Imput_PinCode (5001:4017) + Imput_PinCode box.
 * 4 o 6 casillas de 48 × 56 (Heading Large). Para el lector es UN campo ("Código de 6 dígitos"):
 * un input real, transparente, sobre las casillas; acepta pegar y el autocompletado de SMS.
 */
import { computed, ref, useId } from 'vue'

const model = defineModel<string>({ default: '' })
const props = withDefaults(defineProps<{ digits?: 4 | 6; label?: string; hint?: string; error?: string }>(), {
  digits: 6, label: undefined, hint: undefined, error: undefined,
})
const id = useId()
const focused = ref(false)
const boxes = computed(() => Array.from({ length: props.digits }, (_, i) => model.value[i] ?? ''))
const onInput = (e: Event) => {
  model.value = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, props.digits)
}
</script>

<template>
  <div class="aw-ui flex flex-col gap-8">
    <label v-if="label" :for="id" class="aw-label-small text-text-primary">{{ label }}</label>
    <div class="relative flex gap-8">
      <input
        :id="id"
        :value="model"
        class="absolute inset-0 z-[1] h-full w-full cursor-text opacity-0"
        inputmode="numeric"
        autocomplete="one-time-code"
        :maxlength="digits"
        :aria-label="label ? undefined : `Código de ${digits} dígitos`"
        :aria-invalid="!!error || undefined"
        :aria-describedby="error || hint ? `${id}-hint` : undefined"
        @input="onInput"
        @focus="focused = true"
        @blur="focused = false"
      />
      <span
        v-for="(d, i) in boxes"
        :key="i"
        :class="[
          'aw-heading-large flex h-56 w-48 items-center justify-center rounded-m border bg-surface-default text-text-primary',
          error ? 'border-feedback-error' : focused && i === Math.min(model.length, digits - 1) ? 'border-border-strong' : 'border-border-soft',
        ]"
        aria-hidden="true"
      >{{ d }}</span>
    </div>
    <p v-if="error || hint" :id="`${id}-hint`" :class="['aw-label-small', error ? 'text-text-error' : 'text-text-secondary']">{{ error ?? hint }}</p>
  </div>
</template>
