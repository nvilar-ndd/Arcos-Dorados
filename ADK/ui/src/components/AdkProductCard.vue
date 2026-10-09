<script setup lang="ts">
/**
 * Product — Figma: Product › Product (247:1808). 208 × 312, radio 8, elevación.
 * Imagen 208 × 208 sobre Ivory + info de 104 (padding 16): nombre 16 Bold y precio 16.
 * Estados: Active · Selected (borde Gold + check) · Disable (50 % + badge "No disponible"). Type Product / Loyalty.
 * Agregados de a11y: un único botón con nombre accesible "nombre, precio"; seleccionado con aria-pressed y check
 * (segundo indicador además del color, A-A01); agotado con aria-disabled y texto visible.
 */
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import AdkBadge, { type AdkBadgeType } from './AdkBadge.vue'
import AdkLoyaltyPill from './AdkLoyaltyPill.vue'

const props = withDefaults(
  defineProps<{
    name: string
    price: string
    image?: string
    badge?: AdkBadgeType
    /** Badge de upselling chico (24) debajo del nombre, p. ej. "+ ₡ 500". */
    upsell?: string
    selected?: boolean
    unavailable?: boolean
    /** Canje con puntos (Type=Loyalty). */
    points?: string
    pointsAvailable?: boolean
  }>(),
  { selected: false, unavailable: false, pointsAvailable: true },
)
defineEmits<{ select: [] }>()
const badge = computed<AdkBadgeType | undefined>(() => (props.unavailable ? 'unavailable' : props.badge))
</script>

<template>
  <button
    type="button"
    :aria-pressed="selected"
    :aria-disabled="unavailable || undefined"
    class="adk-ui adk-focus adk-press relative flex h-[312px] w-[208px] flex-col overflow-hidden rounded-s bg-background-default text-left text-text-primary shadow-bordered-down"
    :class="selected ? 'border-selected border-border-selected' : ''"
    @click="!unavailable && $emit('select')"
  >
    <span class="relative flex h-[208px] w-full shrink-0 items-center justify-center bg-background-subtle" :class="unavailable ? 'opacity-50' : ''">
      <img v-if="image" :src="image" alt="" class="size-full object-cover" />
      <slot v-else name="image" />
    </span>
    <span class="flex flex-1 flex-col p-16" :class="unavailable ? 'opacity-50' : ''">
      <span class="adk-body-small-bold line-clamp-2">{{ name }}</span>
      <span v-if="upsell" class="adk-body-small-bold mt-4 inline-flex h-24 self-start items-center rounded-full bg-badge-recommended px-8 text-p-tertiary-green">{{ upsell }}</span>
      <span class="adk-body-small mt-auto">{{ price }}</span>
    </span>
    <AdkLoyaltyPill v-if="points" class="absolute left-16 top-16" :points="points" :available="pointsAvailable" />
    <AdkBadge v-else-if="badge" class="absolute left-16 top-16" :type="badge" />
    <span v-if="selected" class="absolute -right-px -top-px flex size-24 items-center justify-center rounded-full border-default border-background-default bg-control-on" aria-hidden="true">
      <Check class="size-16" :stroke-width="3" />
    </span>
  </button>
</template>
