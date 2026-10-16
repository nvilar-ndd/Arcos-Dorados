<script setup lang="ts">
/**
 * Scroll — Figma: Components › Scroll (5700:4435). Barra de 8 px: track `color/black/100`, thumb `color/black/300`.
 * Se estiliza la barra nativa (no se simula) para conservar teclado, rueda y lectores.
 * Figma enlaza primitivos directos (audit D-C03): no cambian en Dark.
 */
withDefaults(defineProps<{ label: string; maxHeight?: string; orientation?: 'vertical' | 'horizontal' }>(), {
  maxHeight: '360px',
  orientation: 'vertical',
})
</script>

<template>
  <div
    class="db-ui db-focus db-scroll"
    role="region"
    :aria-label="label"
    tabindex="0"
    :style="orientation === 'vertical' ? { maxHeight, overflowY: 'auto' } : { overflowX: 'auto' }"
  >
    <slot />
  </div>
</template>

<style scoped>
.db-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--db-color-black-300) var(--db-color-black-100);
}
.db-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
.db-scroll::-webkit-scrollbar-track { background: var(--db-color-black-100); }
.db-scroll::-webkit-scrollbar-thumb { background: var(--db-color-black-300); border-radius: 4px; border: 2px solid var(--db-color-black-100); }
</style>
