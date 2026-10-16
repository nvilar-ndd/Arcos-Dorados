<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import TypeScale from '../components/TypeScale.vue'
</script>

<template>
  <DocPage
    title="Tipografía"
    doc="typography.md"
    source="20 text styles + variables Font/*"
    lead="Speedee en cuatro roles: Display, Heading, Text y Label. Cada propiedad de cada estilo está enlazada a una variable Font/* en Figma; aquí se renderiza con las mismas variables."
  >
    <TypeScale />
  </DocPage>
</template>
