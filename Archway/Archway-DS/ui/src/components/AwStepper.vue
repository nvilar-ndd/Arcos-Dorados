<script setup lang="ts">
/**
 * Progress_stepper — Figma: Design Resources CORE › Progress_stepper (3 o 4 pasos de 56 × 4).
 * Done Interactive/active ⚠️ (C-A02) · empty Surface/muted. Se anuncia "Paso X de N".
 */
withDefaults(defineProps<{ step: number; total?: 3 | 4 }>(), { total: 4 })
</script>

<template>
  <div class="aw-ui flex gap-8" role="img" :aria-label="`Paso ${step} de ${total}`">
    <span v-for="i in total" :key="i" :class="['h-4 w-56 rounded-full', i <= step ? 'bg-interactive-active' : 'bg-surface-muted']" />
  </div>
</template>
