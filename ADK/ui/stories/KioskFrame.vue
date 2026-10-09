<script setup lang="ts">
/**
 * Marco de stories: muestra un lienzo de kiosco 1080 × 1920 a escala (no es parte de la librería).
 * El contenido se dibuja a tamaño real y se escala con transform, así las medidas son las de Figma.
 */
withDefaults(defineProps<{ scale?: number; width?: number; height?: number; label?: string }>(), {
  scale: 0.42,
  width: 1080,
  height: 1920,
})
</script>

<template>
  <figure class="m-0 p-24">
    <div
      class="relative overflow-hidden rounded-s border border-border-default"
      :style="{ width: `${width * scale}px`, height: `${height * scale}px` }"
    >
      <div class="absolute left-0 top-0 origin-top-left" :style="{ width: `${width}px`, height: `${height}px`, transform: `scale(${scale})` }">
        <slot />
      </div>
    </div>
    <figcaption v-if="label" class="adk-utility-small mt-8 text-text-secondary">{{ label }}</figcaption>
  </figure>
</template>
