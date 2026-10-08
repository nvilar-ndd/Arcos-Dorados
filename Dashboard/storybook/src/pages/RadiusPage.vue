<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import RadiusScale from '../components/RadiusScale.vue'
</script>

<template>
  <DocPage
    title="Radios"
    doc="radius.md"
    source="variables radius/*"
    lead="Cuatro radios alias de la escala de espaciado: sm 4, md 8, lg 16, xl 32."
  >
    <RadiusScale />
  </DocPage>
</template>
