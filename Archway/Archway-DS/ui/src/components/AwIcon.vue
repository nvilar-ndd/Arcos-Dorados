<script setup lang="ts">
/**
 * Ícono de Iconography. Decorativo por defecto (aria-hidden); si comunica algo solo, pasar `label`.
 * `rotate` resuelve las direcciones del Chevron (Figma lo exporta hacia arriba).
 */
import { computed } from 'vue'
import { AW_ICONS, AW_ICON_ALIASES, type AwIconName } from '../icons'

const props = withDefaults(defineProps<{
  name: AwIconName
  size?: 16 | 24 | 32 | 48 | 56
  label?: string
  rotate?: 0 | 90 | 180 | 270
  /** Dibujo de Iconography a usar cuando Figma escala otro tamaño (p. ej. el Chevron de 32 dentro de 24). */
  art?: 16 | 24 | 32 | 48 | 56
}>(), {
  size: 24,
  label: undefined,
  rotate: 0,
  art: undefined,
})
const alias = computed(() => (props.name in AW_ICON_ALIASES ? AW_ICON_ALIASES[props.name as keyof typeof AW_ICON_ALIASES] : null))
const icon = computed(() => {
  const def = AW_ICONS[(alias.value?.icon ?? props.name) as keyof typeof AW_ICONS]
  return def.sizes?.[String(props.art ?? props.size)] ?? def
})
const deg = computed(() => (props.rotate + (alias.value?.rotate ?? 0)) % 360)
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
    :style="deg ? { transform: `rotate(${deg}deg)` } : undefined"
  >
    <path
      v-for="(p, i) in icon.paths"
      :key="i"
      :d="p.d"
      :fill="p.knockout ? 'var(--aw-icon-on-color)' : p.inner ? 'var(--aw-icon-primary)' : undefined"
      :fill-rule="p.evenOdd ? 'evenodd' : undefined"
      :clip-rule="p.evenOdd ? 'evenodd' : undefined"
    />
  </svg>
</template>
