<script setup lang="ts">
/**
 * Ícono de Iconography. Decorativo por defecto (aria-hidden); si comunica algo solo, pasar `label`.
 * `rotate` resuelve las direcciones del Chevron (Figma lo exporta hacia arriba).
 */
import { computed } from 'vue'
import { AW_ICONS, type AwIconName } from '../icons'

const props = withDefaults(defineProps<{ name: AwIconName; size?: 16 | 24 | 32 | 48 | 56; label?: string; rotate?: 0 | 90 | 180 | 270 }>(), {
  size: 24,
  label: undefined,
  rotate: 0,
})
const icon = computed(() => AW_ICONS[props.name])
</script>

<template>
  <svg
    class="aw-ui shrink-0"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${icon.viewBox} ${icon.viewBox}`"
    fill="currentColor"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    :style="rotate ? { transform: `rotate(${rotate}deg)` } : undefined"
  >
    <path
      v-for="(p, i) in icon.paths"
      :key="i"
      :d="p.d"
      :fill-rule="p.evenOdd ? 'evenodd' : undefined"
      :clip-rule="p.evenOdd ? 'evenodd' : undefined"
    />
  </svg>
</template>
