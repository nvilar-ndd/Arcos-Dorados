<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import SpacingScale from '../components/SpacingScale.vue'
</script>

<template>
  <DocPage
    title="Espaciado"
    doc="spacing.md"
    source="variables Valor/spacing/*"
    lead="Múltiplos de 8 con 4 como medio paso. El 16 es el margen lateral y el gutter de la grilla; el 48 es el mínimo de cualquier área tocable."
  >
    <SpacingScale />
  </DocPage>
</template>
