<script setup lang="ts" generic="T extends string | number">
/**
 * Radio button — Figma: Components › Radiobutton (5644:4395).
 * Sate: Default · Focus · Disabled (opacidad 50 %) × Style: Fill / Unfilled × Selected.
 * Usar dentro de DbRadioGroup (fieldset + legend) o con el mismo `name`.
 */
import { computed, useId } from 'vue'

const model = defineModel<T | null>({ default: null })

const props = withDefaults(
  defineProps<{
    value: T
    label: string
    name?: string
    supportingText?: string
    framed?: boolean
    disabled?: boolean
  }>(),
  { framed: false, disabled: false },
)

const id = useId()
const checked = computed(() => model.value === props.value)
</script>

<template>
  <label
    :for="id"
    :class="[
      'db-ui relative inline-flex min-h-500 items-start gap-100 rounded-sm p-100',
      framed && 'border border-border-02 bg-layer-01',
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ]"
  >
    <input
      :id="id"
      v-model="model"
      type="radio"
      class="peer db-sr-only"
      :name="name"
      :value="value"
      :disabled="disabled"
      :aria-describedby="supportingText ? `${id}-support` : undefined"
    />
    <span
      class="flex size-300 shrink-0 items-center justify-center rounded-full peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-link-primary"
      aria-hidden="true"
    >
      <span
        :class="[
          'flex size-[20px] items-center justify-center rounded-full border-2',
          checked ? 'border-layer-07' : 'border-icon-primary',
        ]"
      >
        <span v-if="checked" class="size-[10px] rounded-full bg-layer-07" />
      </span>
    </span>
    <span class="flex min-h-300 flex-col justify-center">
      <span :class="[checked ? 'db-label03 text-text-primary' : 'db-label02 text-text-secondary']">{{ label }}</span>
      <span v-if="supportingText" :id="`${id}-support`" class="db-label01 text-text-secondary">{{ supportingText }}</span>
    </span>
  </label>
</template>
