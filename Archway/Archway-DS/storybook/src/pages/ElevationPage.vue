<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import ElevationScale from '../components/ElevationScale.vue'
</script>

<template>
  <DocPage
    title="Elevación"
    doc="elevation.md"
    source="effect styles Shallow/* y Deep/*"
    lead="Shallow para componentes claros, Deep para componentes oscuros. Medium es el estándar; High se reserva para diálogos y bottom sheets."
  >
    <ElevationScale />
  </DocPage>
</template>
