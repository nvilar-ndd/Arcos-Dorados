<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import GridPreview from '../components/GridPreview.vue'
</script>

<template>
  <DocPage
    title="Grilla y breakpoints"
    doc="grid.md"
    source="colecciones Breakpoints y Layout, estilos de grilla CMS"
    lead="Cinco breakpoints de 375 a 1792 y seis grillas de 4, 8 y 16 columnas con gutter de 32px."
  >
    <GridPreview />
  </DocPage>
</template>
