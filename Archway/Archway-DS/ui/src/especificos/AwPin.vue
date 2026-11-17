<script setup lang="ts">
/**
 * Pin 💠 (Misiones) — Figma: Design Resources CORE › Pin, 56 × 60. Status Default · Incomplete ·
 * Expired. Figma usa #F9F9F9 / #FFFFFF sueltos (audit C-T02): acá se aplican los tokens propuestos
 * Surface/subtle y Surface/default. Hexágono con borde de 2 y sombra 0 1 8 al 24 %; producto de 38.
 * Incomplete: producto al 50 %; Expired: además en escala de grises. El estado se anuncia en texto.
 */
import { computed } from 'vue'
const props = withDefaults(defineProps<{ image?: string; name: string; status?: 'default' | 'incomplete' | 'expired' }>(), { image: undefined, status: 'default' })
const statusText = computed(() => ({ default: 'obtenido', incomplete: 'sin completar', expired: 'vencido' }[props.status]))
</script>

<template>
  <span class="aw-ui relative inline-flex h-[60px] w-56 items-center justify-center" role="img" :aria-label="`Pin ${name}, ${statusText}`">
    <svg class="absolute inset-0 h-[60px] w-56 drop-shadow-[0_1px_4px_color-mix(in_srgb,var(--aw-color-black-800)_24%,transparent)]" viewBox="-1 -0.2 56 60.4" aria-hidden="true">
      <path class="fill-surface-default" d="M23.5.9c2.2-1.2 4.8-1.2 7 0l20 11.6c2.2 1.2 3.5 3.5 3.5 6.1v23c0 2.5-1.3 4.9-3.5 6.1l-20 11.5c-2.2 1.3-4.8 1.3-7 0l-20-11.5C1.3 46.5 0 44.1 0 41.6v-23C0 16 1.3 13.7 3.5 12.5L23.5.9Z" />
      <path class="fill-surface-subtle" d="M25 1.8c1.8-1.1 4.1-1.1 6 0l20 11.5c1.8 1.1 3 3 3 5.2v23.1c0 2.2-1.2 4.1-3 5.2l-20 11.5c-1.9 1.1-4.2 1.1-6 0L5 46.8c-1.9-1.1-3-3-3-5.2V18.5c0-2.1 1.1-4.1 3-5.2L25 1.8Z" />
    </svg>
    <img v-if="image" :src="image" alt="" :class="['relative size-[38px] object-contain', status === 'expired' ? 'opacity-50 grayscale' : status === 'incomplete' ? 'opacity-50' : '']" />
  </span>
</template>
