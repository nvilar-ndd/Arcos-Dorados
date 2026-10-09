<script setup lang="ts">
/**
 * Carrito_Footer — Figma: Footer › Carrito_Footer (19:1213) + Badge (3740:1815). 656 × 80.
 * Empty: total en 0 y "Ver pedido" inactivo · Full: activo · Two buttons: secundario + primario.
 * Agregado de a11y: total y cantidad en aria-live.
 */
import { ShoppingBag } from 'lucide-vue-next'
import AdkButton from './AdkButton.vue'

withDefaults(
  defineProps<{ count: number; total: string; ctaLabel?: string; secondaryLabel?: string; disabled?: boolean }>(),
  { ctaLabel: 'Ver pedido', disabled: false },
)
defineEmits<{ primary: []; secondary: [] }>()
</script>

<template>
  <div class="adk-ui flex h-80 w-full max-w-content items-center gap-16 text-text-primary">
    <AdkButton v-if="secondaryLabel" variant="secondary" class="flex-1" @click="$emit('secondary')">{{ secondaryLabel }}</AdkButton>
    <p v-else class="flex flex-1 items-center gap-16" aria-live="polite">
      <!-- Badge 64 × 56: bolsa (la ilustración de marca la provee la app) + contador Red 32. -->
      <span class="relative flex h-56 w-64 shrink-0 items-end" aria-hidden="true">
        <slot name="bag"><ShoppingBag class="size-48 text-p-tertiary-beige" :stroke-width="1.5" /></slot>
        <span class="adk-body-medium-bold absolute right-0 top-0 flex size-32 items-center justify-center rounded-full bg-p-primary-red text-text-on-color">{{ count }}</span>
      </span>
      <span class="adk-sr-only">{{ count }} productos, total</span>
      <span class="adk-headline-medium-bold">{{ total }}</span>
    </p>
    <AdkButton class="flex-1" :disabled="disabled" @click="$emit('primary')">{{ ctaLabel }}</AdkButton>
  </div>
</template>
