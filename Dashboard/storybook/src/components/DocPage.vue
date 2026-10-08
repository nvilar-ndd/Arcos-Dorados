<script setup lang="ts">
const REPO = 'https://github.com/nvilar-ndd/Arcos-Dorados/blob/main/Dashboard'
const FIGMA = 'https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation'
const CONV = 'https://github.com/nvilar-ndd/Arcos-Dorados/blob/main/Convergencia/dashboard-archway.md'

defineProps<{
  title: string
  lead: string
  /** Archivo .md de la foundation dentro de Dashboard/foundations */
  doc?: string
  /** Qué parte de Figma alimenta esta página */
  source: string
}>()
</script>

<template>
  <main class="doc">
    <p class="doc__eyebrow db-label02">Dashboard · Foundations</p>
    <h1 class="doc__title db-h2">{{ title }}</h1>
    <p class="doc__lead db-body01">{{ lead }}</p>
    <ul class="doc__meta db-label01">
      <li>Fuente: <a :href="FIGMA" target="_blank" rel="noopener">Figma — {{ source }}</a></li>
      <li v-if="doc"><a :href="`${REPO}/foundations/${doc}`" target="_blank" rel="noopener">Documentación: {{ doc }}</a></li>
      <li><a :href="`${REPO}/audit.md`" target="_blank" rel="noopener">Propuestas en audit.md</a></li>
      <li><a :href="CONV" target="_blank" rel="noopener">Convergencia con ArchWay</a></li>
    </ul>
    <slot />
  </main>
</template>
