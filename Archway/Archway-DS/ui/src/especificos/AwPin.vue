<script setup lang="ts">
/**
 * Pin 💠 (Misiones) — Figma: Design Resources CORE › Pin, 56 × 60. Status Default · Incomplete ·
 * Expired. Figma usa #F9F9F9 / #FFFFFF sueltos (audit C-T02): acá se aplican los tokens propuestos
 * Surface/subtle y Surface/default. El estado se anuncia en texto (no sólo visual).
 */
import { computed } from 'vue'
const props = withDefaults(defineProps<{ image?: string; name: string; status?: 'default' | 'incomplete' | 'expired' }>(), { image: undefined, status: 'default' })
const statusText = computed(() => ({ default: 'obtenido', incomplete: 'sin completar', expired: 'vencido' }[props.status]))
</script>

<template>
  <span class="aw-ui relative inline-flex h-[60px] w-56 items-start justify-center" role="img" :aria-label="`Pin ${name}, ${statusText}`">
    <span
      :class="[
        'flex size-56 items-center justify-center overflow-hidden rounded-full border-2',
        status === 'default' ? 'border-surface-default bg-surface-subtle shadow-shallow-l-elev-1' : 'border-border-subtle bg-surface-subtle',
      ]"
    >
      <img v-if="image" :src="image" alt="" :class="['h-full w-full object-contain', status !== 'default' ? 'grayscale' : '']" />
    </span>
    <span v-if="status === 'expired'" class="aw-label-small absolute bottom-0 rounded-xs bg-surface-inverse px-4 text-text-on-color" aria-hidden="true">Vencido</span>
  </span>
</template>
