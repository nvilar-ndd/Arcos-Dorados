<script setup lang="ts">
/**
 * Banner 💠 — Figma: Design Resources CORE › Banner. Contenedor de imagen 380 × 294, radio S.
 * State Image · Skeleton (Surface/subtle). El texto alternativo es obligatorio (Voz y Tono › alt text):
 * la imagen comunica una promoción.
 */
withDefaults(defineProps<{ src?: string; alt: string; href?: string; skeleton?: boolean }>(), { src: undefined, href: undefined, skeleton: false })
</script>

<template>
  <div v-if="skeleton" class="aw-ui aw-shimmer aspect-[380/294] w-full max-w-[380px] rounded-s bg-surface-subtle" aria-hidden="true" />
  <component :is="href ? 'a' : 'div'" v-else :href="href" class="aw-ui block aspect-[380/294] w-full max-w-[380px] overflow-hidden rounded-s bg-surface-subtle outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong">
    <img :src="src" :alt="alt" class="h-full w-full object-cover" />
  </component>
</template>
