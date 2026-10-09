<script setup lang="ts">
const REPO = 'https://github.com/nvilar-ndd/Arcos-Dorados/blob/main/ADK'
const FIGMA = 'https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System'
const CONV = 'https://github.com/nvilar-ndd/Arcos-Dorados/blob/main/Convergencia/adk-archway.md'

defineProps<{
  title: string
  lead: string
  /** Archivo .md de la foundation dentro de ADK/foundations */
  doc?: string
  /** Qué parte de Figma alimenta esta página. Sin `source`, la página es una propuesta que no existe en Figma. */
  source?: string
}>()
</script>

<template>
  <main class="doc">
    <p class="doc__eyebrow adk-utility-small">ADK · Foundations</p>
    <h1 class="doc__title adk-headline-medium-bold">{{ title }}</h1>
    <p class="doc__lead adk-body-small">{{ lead }}</p>
    <ul class="doc__meta adk-utility-small">
      <li v-if="source">Fuente: <a :href="FIGMA" target="_blank" rel="noopener">Figma — {{ source }}</a></li>
      <li v-else>Propuesta: no existe en Figma</li>
      <li v-if="doc"><a :href="`${REPO}/foundations/${doc}`" target="_blank" rel="noopener">Documentación: {{ doc }}</a></li>
      <li><a :href="`${REPO}/audit.md`" target="_blank" rel="noopener">Propuestas en audit.md</a></li>
      <li><a :href="CONV" target="_blank" rel="noopener">Convergencia con ArchWay</a></li>
    </ul>
    <slot />
  </main>
</template>
