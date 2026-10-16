<script setup lang="ts">
/**
 * Hr (divisor) — Figma: Components › Hr (2708:5583). 1 px `border/02`.
 * Horizontal: fill en ancho · Vertical: fill en alto. El espacio alrededor lo define el contenedor.
 */
withDefaults(defineProps<{ orientation?: 'horizontal' | 'vertical'; decorative?: boolean }>(), {
  orientation: 'horizontal',
  decorative: true,
})
</script>

<template>
  <hr
    v-if="orientation === 'horizontal'"
    class="db-ui m-0 h-px w-full shrink-0 border-0 bg-border-02"
    :aria-hidden="decorative || undefined"
  />
  <div
    v-else
    class="db-ui w-px shrink-0 self-stretch bg-border-02"
    :role="decorative ? undefined : 'separator'"
    :aria-orientation="decorative ? undefined : 'vertical'"
    :aria-hidden="decorative || undefined"
  />
</template>
