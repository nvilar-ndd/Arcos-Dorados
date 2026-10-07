<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import RadiusScale from '../components/RadiusScale.vue'
</script>

<template>
  <DocPage
    title="Radios"
    doc="radius.md"
    source="variables Valor/radius/*"
    lead="M (12) es el radio por defecto para cards, banners y snackbars. Regla del balance: un componente anidado baja 4px respecto de su contenedor (12 → 8)."
  >
    <RadiusScale />
  </DocPage>
</template>
