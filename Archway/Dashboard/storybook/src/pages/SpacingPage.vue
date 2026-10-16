<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import SpacingScale from '../components/SpacingScale.vue'
</script>

<template>
  <DocPage
    title="Espaciado"
    doc="spacing.md"
    source="variables spacing/* y colección Layout"
    lead="Grilla base de 8px con nombres por multiplicador (100 = 8px). El 4 es excepcional; 32 es el valor medio recomendado."
  >
    <SpacingScale />
  </DocPage>
</template>
