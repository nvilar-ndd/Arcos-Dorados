<script setup lang="ts">
/**
 * Skeleton — Figma: Design Resources CORE › Skeleton. Square 72 (radio S), Rectangle 92 × 16
 * (radio XS), Circle 72. Placeholders Surface/muted con shimmer en código (se apaga con
 * prefers-reduced-motion). Decorativo: el contenedor que carga anuncia aria-busy.
 */
withDefaults(defineProps<{ type?: 'square' | 'rectangle' | 'circle'; width?: string; height?: string }>(), {
  type: 'rectangle', width: undefined, height: undefined,
})
</script>

<template>
  <span
    :class="[
      'aw-ui aw-shimmer inline-block bg-surface-muted',
      type === 'square' ? 'size-72 rounded-s' : type === 'circle' ? 'size-72 rounded-full' : 'h-16 w-[92px] rounded-xs',
    ]"
    :style="{ width, height }"
    aria-hidden="true"
  />
</template>
