<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import ElevationScale from '../components/ElevationScale.vue'
</script>

<template>
  <DocPage
    title="Elevación"
    doc="elevation.md"
    source="effect styles Shallow/* y Deep/*"
    lead="Dos familias de sombra con tres niveles cada una. A mayor nivel, más cerca del usuario."
  >
    <ElevationScale />
  </DocPage>
</template>
