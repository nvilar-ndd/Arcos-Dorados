<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import RadiusScale from '../components/RadiusScale.vue'
</script>

<template>
  <DocPage
    title="Radios"
    doc="radius.md"
    source="variables Valor/radius/*"
    lead="M (12) es el radio por defecto para cards, banners y snackbars. Radio interno = radio externo − padding."
  >
    <RadiusScale />
  </DocPage>
</template>
