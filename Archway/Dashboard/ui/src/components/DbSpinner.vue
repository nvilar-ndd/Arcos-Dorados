<script setup lang="ts">
/**
 * Spinner — Figma: Progress bar › Spinner animation (3582:5760) / Spinner base.
 * Color Blue (`link/primary`, fondos claros) · White (`icon/tertiary`, fondos oscuros).
 * Carga indeterminada; respeta prefers-reduced-motion (ui.css).
 */
withDefaults(defineProps<{ size?: number; color?: 'blue' | 'white'; label?: string }>(), {
  size: 48,
  color: 'blue',
  label: 'Cargando…',
})
</script>

<template>
  <span class="db-ui inline-flex" role="status">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
      aria-hidden="true"
      :class="['animate-spin', color === 'blue' ? 'text-link-primary' : 'text-icon-tertiary']"
    >
      <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-dasharray="90 120" />
    </svg>
    <span class="db-sr-only">{{ label }}</span>
  </span>
</template>
