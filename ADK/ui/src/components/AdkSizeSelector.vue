<script setup lang="ts" generic="T extends string">
/**
 * Product Size — Figma: Product › Product Size (2137:1126). Círculo de 88 con inicial (24), nombre 22 y precio 16.
 * Elegido: borde Gold 3 + Bold + check (24). Opcional: badge de upselling "+ ₡ 2.000,00".
 * Agregado de a11y: radiogroup con flechas (patrón roving tabindex).
 */
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'

export interface AdkSizeOption<V extends string = string> { value: V; label: string; short: string; price?: string; upcharge?: string }

const value = defineModel<T | null>({ default: null })
const props = withDefaults(defineProps<{ options: AdkSizeOption<T>[]; label?: string }>(), { label: 'Tamaño' })
const group = ref<HTMLElement | null>(null)

function move(i: number, d: number) {
  const n = (i + d + props.options.length) % props.options.length
  value.value = props.options[n].value
  group.value?.querySelectorAll<HTMLElement>('[role=radio]')[n]?.focus()
}
</script>

<template>
  <div ref="group" role="radiogroup" :aria-label="label" class="adk-ui flex flex-wrap gap-32 text-text-primary">
    <button
      v-for="(o, i) in options"
      :key="o.value"
      type="button"
      role="radio"
      :aria-checked="o.value === value"
      :tabindex="o.value === value || (value === null && i === 0) ? 0 : -1"
      class="adk-focus adk-press flex w-[102px] flex-col items-center gap-16 rounded-s"
      @click="value = o.value"
      @keydown.right.prevent="move(i, 1)"
      @keydown.down.prevent="move(i, 1)"
      @keydown.left.prevent="move(i, -1)"
      @keydown.up.prevent="move(i, -1)"
    >
      <span
        class="relative flex size-[88px] items-center justify-center rounded-full bg-background-default"
        :class="o.value === value ? 'border-selected border-border-selected adk-body-large-bold' : 'border border-p-secondary-grey adk-body-large'"
        aria-hidden="true"
      >
        {{ o.short }}
        <span v-if="o.value === value" class="absolute -right-4 -top-4 flex size-24 items-center justify-center rounded-full bg-control-on"><Check class="size-16" :stroke-width="3" /></span>
      </span>
      <span class="flex flex-col items-center gap-8">
        <span :class="o.value === value ? 'adk-body-medium-bold' : 'adk-body-medium'">{{ o.label }}</span>
        <span v-if="o.price" class="adk-body-small">{{ o.price }}</span>
        <span v-if="o.upcharge" class="adk-body-small-bold inline-flex h-24 items-center whitespace-nowrap rounded-full bg-badge-recommended px-8 text-p-tertiary-green">{{ o.upcharge }}</span>
      </span>
    </button>
  </div>
</template>
