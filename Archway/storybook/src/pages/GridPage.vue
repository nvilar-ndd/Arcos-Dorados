<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import GridPreview from '../components/GridPreview.vue'
</script>

<template>
  <DocPage
    title="Grilla"
    doc="grid.md"
    source="estilos Aw_Layout/col y Aw_Layout/Grid"
    lead="4 columnas fluidas con margen y gutter de 16px sobre una retícula base de 8px. Hoy sólo existe la grilla mobile; los breakpoints para Web, Dashboard y Kiosco son una propuesta del audit (F-01)."
  >
    <GridPreview />
  </DocPage>
</template>
