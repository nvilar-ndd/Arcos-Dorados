<script setup lang="ts">
/**
 * Badges ADK — Figma: Product › Badges ADK (2769:2693). Alto 32, radio full, ícono 16 + texto 16 Bold.
 * Colores de Figma: Nuevo (Gold Disabled) · Recomendado / Más vendido / % OFF (Green Disabled + McDonald's Green)
 * · Últimos días / McCombo del día (Link Visited al 20 % + Dark Blue) · No disponible (Light Grey).
 */
import { computed } from 'vue'
import { Clock, Star, Tag } from 'lucide-vue-next'

export type AdkBadgeType = 'new' | 'recommended' | 'best-seller' | 'off' | 'last-days' | 'combo-of-day' | 'unavailable'

const props = defineProps<{ type: AdkBadgeType; label?: string }>()

const T = {
  new: { label: 'Nuevo', cls: 'bg-badge-new text-text-primary', icon: null },
  // Íconos de Figma: estrella y etiqueta rellenas, reloj de contorno.
  recommended: { label: 'Recomendado', cls: 'bg-badge-recommended text-p-tertiary-green', icon: null },
  'best-seller': { label: 'Más vendido', cls: 'bg-badge-recommended text-p-tertiary-green', icon: Star },
  off: { label: '% OFF', cls: 'bg-badge-recommended text-p-tertiary-green', icon: Tag },
  // Figma: blanco + Link Visited al 20 %. Sin token propio: se mezcla el primitivo con el fondo (A-S01).
  'last-days': { label: 'Últimos días', cls: 'bg-[color-mix(in_srgb,var(--adk-color-link-visited)_20%,var(--adk-background-default))] text-p-tertiary-dark-blue', icon: Clock },
  'combo-of-day': { label: 'McCombo del día', cls: 'bg-[color-mix(in_srgb,var(--adk-color-link-visited)_20%,var(--adk-background-default))] text-p-tertiary-dark-blue', icon: null },
  unavailable: { label: 'No disponible', cls: 'bg-badge-loyalty-disabled text-text-primary', icon: null },
} as const
const t = computed(() => T[props.type])
const filled = computed(() => props.type === 'best-seller' || props.type === 'off')
</script>

<template>
  <span class="adk-ui adk-body-small-bold inline-flex h-32 shrink-0 items-center gap-4 whitespace-nowrap rounded-full px-8" :class="t.cls">
    <component :is="t.icon" v-if="t.icon" :class="filled ? 'fill-current' : ''" class="size-16" aria-hidden="true" />
    {{ label ?? t.label }}
  </span>
</template>
