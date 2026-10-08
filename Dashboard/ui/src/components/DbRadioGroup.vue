<script setup lang="ts" generic="T extends string | number">
/**
 * Grupo de radios con <fieldset>/<legend>. Las flechas mueven la selección (comportamiento nativo).
 */
import { useId } from 'vue'
import DbRadio from './DbRadio.vue'

export interface DbRadioOption<V> {
  value: V
  label: string
  supportingText?: string
  disabled?: boolean
}

const model = defineModel<T | null>({ default: null })

withDefaults(
  defineProps<{
    legend: string
    options: DbRadioOption<T>[]
    framed?: boolean
    orientation?: 'vertical' | 'horizontal'
    hideLegend?: boolean
  }>(),
  { framed: false, orientation: 'vertical', hideLegend: false },
)

const name = useId()
</script>

<template>
  <fieldset class="db-ui flex flex-col gap-100">
    <legend :class="hideLegend ? 'db-sr-only' : 'db-label02 mb-100 text-text-primary'">{{ legend }}</legend>
    <div :class="['flex gap-100', orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap']">
      <DbRadio
        v-for="option in options"
        :key="String(option.value)"
        v-model="model"
        :name="name"
        :value="option.value"
        :label="option.label"
        :supporting-text="option.supportingText"
        :disabled="option.disabled"
        :framed="framed"
      />
    </div>
  </fieldset>
</template>
