<script setup lang="ts">
/**
 * Logo — Figma: Logos › Logos Arcos (3197:1424), 152 × 112.
 * Types: McDonald's Red · Arcos Dorados · MiM · MeuM. Los archivos de marca los provee la app (no se dibujan acá).
 */
withDefaults(defineProps<{ src?: string; alt?: string }>(), { alt: "McDonald's" })
</script>

<template>
  <span class="adk-ui inline-flex h-[112px] w-[152px] shrink-0 items-center justify-center">
    <img v-if="src" :src="src" :alt="alt" class="max-h-full max-w-full object-contain" />
    <slot v-else />
  </span>
</template>
