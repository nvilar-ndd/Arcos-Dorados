<script setup lang="ts">
/**
 * Product Custom — Figma: Product › Product Custom (2088:416). 888 × 112.
 * Imagen 112 en círculo Ivory · nombre 22 Bold · a la derecha: "+N ₡ precio" + Quantity, o check circular (48).
 */
import { useId } from 'vue'
import { Check } from 'lucide-vue-next'
import AdkQuantity from './AdkQuantity.vue'

const quantity = defineModel<number>('quantity', { default: 0 })
const checked = defineModel<boolean>('checked', { default: false })
withDefaults(defineProps<{ name: string; image?: string; extraPrice?: string; control?: 'quantity' | 'check'; max?: number }>(), {
  control: 'quantity',
  max: 9,
})
const id = useId()
</script>

<template>
  <div class="adk-ui flex h-[112px] w-full max-w-[888px] items-center gap-24 text-text-primary">
    <span class="size-[112px] shrink-0 overflow-hidden rounded-full bg-background-subtle" aria-hidden="true">
      <img v-if="image" :src="image" alt="" class="size-full object-contain p-16" />
    </span>
    <span :id="id" class="adk-body-medium-bold ml-24 min-w-0 flex-1 truncate">{{ name }}</span>
    <template v-if="control === 'quantity'">
      <span v-if="extraPrice && quantity > 0" class="adk-body-medium flex gap-16"><span>+{{ quantity }}</span><strong>{{ extraPrice }}</strong></span>
      <AdkQuantity v-model="quantity" :min="0" :max="max" :label="name" />
    </template>
    <button
      v-else
      type="button"
      role="checkbox"
      :aria-checked="checked"
      :aria-labelledby="id"
      class="adk-focus flex size-48 items-center justify-center rounded-full"
      @click="checked = !checked"
    >
      <span class="flex size-[37px] items-center justify-center rounded-full" :class="checked ? 'bg-control-on' : 'border border-border-strong'">
        <Check v-if="checked" class="size-24" :stroke-width="3" aria-hidden="true" />
      </span>
    </button>
  </div>
</template>
