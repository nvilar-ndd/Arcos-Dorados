<script setup lang="ts">
/**
 * Quantity — Figma: Buttons › Quantity ADK (2087:2160). 144 × 40, radio full, borde Black.
 * Variantes Active Remove / Active More / Type Trash: con la cantidad mínima el − pasa a tacho si `removable`.
 * Agregados de a11y: role="group", botones con aria-label, valor en aria-live.
 */
import { computed } from 'vue'
import { Minus, Plus, Trash2 } from 'lucide-vue-next'

const value = defineModel<number>({ default: 1 })
const props = withDefaults(
  defineProps<{ min?: number; max?: number; label: string; removable?: boolean; disabled?: boolean }>(),
  { min: 1, max: 99, removable: false, disabled: false },
)
const emit = defineEmits<{ remove: [] }>()

const canLess = computed(() => !props.disabled && (value.value > props.min || props.removable))
const canMore = computed(() => !props.disabled && value.value < props.max)
const trash = computed(() => props.removable && value.value <= props.min)

function less() {
  if (trash.value) emit('remove')
  else if (canLess.value) value.value -= 1
}
</script>

<template>
  <div
    role="group"
    :aria-label="label"
    class="adk-ui inline-flex h-[40px] w-[144px] items-center justify-between rounded-full border border-border-strong bg-background-default px-8 text-text-primary"
    :class="disabled ? 'opacity-40' : ''"
  >
    <button
      type="button"
      class="adk-focus flex size-32 items-center justify-center rounded-full disabled:text-text-disabled"
      :disabled="!canLess"
      :aria-label="trash ? `Quitar ${label} del pedido` : 'Quitar uno'"
      @click="less"
    >
      <component :is="trash ? Trash2 : Minus" class="size-24" aria-hidden="true" />
    </button>
    <span class="adk-headline-extra-small" aria-live="polite">{{ value }}</span>
    <button
      type="button"
      class="adk-focus flex size-32 items-center justify-center rounded-full disabled:text-text-disabled"
      :disabled="!canMore"
      aria-label="Agregar uno"
      @click="value += 1"
    >
      <Plus class="size-24" aria-hidden="true" />
    </button>
  </div>
</template>
