<script setup lang="ts">
/**
 * Producto Carrito — Figma: Product › Producto Carrito (2302:777). 888 de ancho, divisor inferior Light Grey.
 * Imagen 152 · nombre 24 Bold · descripción 22 · "Ver / Ocultar detalle" · precio 24 Bold (o puntos) · Quantity.
 * Con detalle: ítems del combo (200 × 248) con extras / quitados y "Personalizar y extras".
 * No disponible: 50 % + badge y cantidad deshabilitada. El badge queda opaco (en Figma también baja al 50 % y
 * no llega a 4.5:1): agregado de a11y.
 */
import { ref, useId } from 'vue'
import AdkBadge from './AdkBadge.vue'
import AdkButton from './AdkButton.vue'
import AdkQuantity from './AdkQuantity.vue'

export interface AdkCartPart { name: string; note?: string; removed?: boolean; image?: string }

const quantity = defineModel<number>('quantity', { default: 1 })
withDefaults(
  defineProps<{ name: string; description?: string; price: string; image?: string; parts?: AdkCartPart[]; unavailable?: boolean; points?: string }>(),
  { unavailable: false },
)
defineEmits<{ customize: []; remove: [] }>()
const open = ref(false)
const id = useId()
</script>

<template>
  <article class="adk-ui flex w-full max-w-[888px] flex-col gap-16 border-b border-border-subtle pb-32 text-text-primary">
    <div class="flex gap-48">
      <div class="flex min-w-0 flex-1 gap-32">
        <span class="size-[152px] shrink-0 overflow-hidden bg-background-subtle" :class="unavailable ? 'opacity-50' : ''" aria-hidden="true">
          <img v-if="image" :src="image" alt="" class="size-full object-cover" />
        </span>
        <div class="flex min-w-0 flex-col items-start gap-16">
          <h3 class="adk-body-large-bold" :class="unavailable ? 'opacity-50' : ''">{{ name }}</h3>
          <p v-if="description" class="adk-body-medium">{{ description }}</p>
          <AdkBadge v-if="unavailable" type="unavailable" />
          <AdkButton v-else-if="parts?.length" variant="secondary" size="sm" :aria-expanded="open" :aria-controls="id" @click="open = !open">
            {{ open ? 'Ocultar detalle' : 'Ver detalle' }}
          </AdkButton>
        </div>
      </div>
      <div class="flex w-[144px] shrink-0 flex-col items-end gap-24" :class="unavailable ? 'opacity-50' : ''">
        <p class="adk-body-large-bold">{{ points ? `${points}` : price }}</p>
        <AdkQuantity v-model="quantity" :label="name" removable :disabled="unavailable" @remove="$emit('remove')" />
      </div>
    </div>
    <div v-if="open && parts?.length" :id="id" class="ml-[184px] flex flex-col items-start gap-24">
      <ul class="flex gap-48">
        <li v-for="p in parts" :key="p.name" class="flex w-[200px] flex-col gap-8">
          <span class="h-[200px] bg-background-subtle" aria-hidden="true"><img v-if="p.image" :src="p.image" alt="" class="size-full object-cover" /></span>
          <span class="adk-body-small-bold">{{ p.name }}</span>
          <span v-if="p.note" class="adk-utility-small" :class="p.removed ? 'line-through' : ''">
            <span v-if="p.removed" class="adk-sr-only">Sin </span>{{ p.note }}
          </span>
        </li>
      </ul>
      <AdkButton variant="secondary" size="sm" class="w-[272px]" @click="$emit('customize')">Personalizar y extras</AdkButton>
    </div>
  </article>
</template>
