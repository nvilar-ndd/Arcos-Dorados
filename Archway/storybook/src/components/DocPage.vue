<script setup lang="ts">
const REPO = 'https://github.com/nvilar-ndd/Arcos-Dorados/blob/main/Archway'
const FIGMA = 'https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library'

defineProps<{
  title: string
  lead: string
  /** Archivo .md de la foundation dentro de Archway/foundations */
  doc?: string
  /** Qué parte de Figma alimenta esta página */
  source: string
}>()
</script>

<template>
  <main class="doc">
    <p class="doc__eyebrow aw-label-medium">ArchWay · Foundations</p>
    <h1 class="doc__title aw-display-medium-bold">{{ title }}</h1>
    <p class="doc__lead aw-text-body-large">{{ lead }}</p>
    <ul class="doc__meta aw-label-small">
      <li>Fuente: <a :href="FIGMA" target="_blank" rel="noopener">Figma — {{ source }}</a></li>
      <li v-if="doc"><a :href="`${REPO}/foundations/${doc}`" target="_blank" rel="noopener">Documentación: {{ doc }}</a></li>
      <li><a :href="`${REPO}/audit.md`" target="_blank" rel="noopener">Propuestas en audit.md</a></li>
    </ul>
    <slot />
  </main>
</template>
