<script setup lang="ts">
/** Divider — Figma: Design Resources CORE › Divider (5009:8). 1 px, Border/soft. Decorativo por defecto. */
withDefaults(defineProps<{ decorative?: boolean }>(), { decorative: true })
</script>

<template>
  <hr v-if="!decorative" class="aw-ui m-0 h-px w-full border-0 bg-border-soft" />
  <div v-else class="aw-ui h-px w-full bg-border-soft" aria-hidden="true" />
</template>
