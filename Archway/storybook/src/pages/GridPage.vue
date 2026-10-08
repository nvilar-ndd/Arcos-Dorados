<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import GridPreview from '../components/GridPreview.vue'
</script>

<template>
  <DocPage
    title="Grilla"
    doc="grid.md"
    source="estilos Aw_Layout/col y Aw_Layout/Grid"
    lead="Master Frame de 412 × 912 para iOS y Android, 4 columnas fluidas de 83px con margen y gutter de 16px sobre una retícula base de 8px. El margen de 16 es sagrado; los breakpoints para Web, Dashboard y Kiosco son una propuesta del audit (F-01)."
  >
    <GridPreview />
  </DocPage>
</template>
