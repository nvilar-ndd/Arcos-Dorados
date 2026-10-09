<script setup lang="ts">
/**
 * Loader Circular — Figma: Loaders (3197:1421). 120 × 120, arco Gold.
 * Agregados de a11y: role="status" con texto (visible u oculto). Con reduce-motion el arco no gira.
 * Gold sobre blanco da 1.69:1 (A-A01): el texto visible es lo que comunica la espera.
 */
withDefaults(defineProps<{ label?: string; showLabel?: boolean; size?: number }>(), {
  label: 'Cargando',
  showLabel: false,
  size: 120,
})
</script>

<template>
  <div role="status" class="adk-ui inline-flex flex-col items-center gap-24 text-text-primary">
    <svg :width="size" :height="size" viewBox="0 0 120 120" class="motion-safe:animate-spin" aria-hidden="true">
      <circle cx="60" cy="60" r="54" fill="none" class="stroke-scroll-track" stroke-width="12" />
      <circle cx="60" cy="60" r="54" fill="none" class="stroke-button-primary" stroke-width="12" stroke-linecap="round" stroke-dasharray="254 340" />
    </svg>
    <span :class="showLabel ? 'adk-body-large' : 'adk-sr-only'">{{ label }}</span>
  </div>
</template>
