<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import SpacingScale from '../components/SpacingScale.vue'
import ShapeScale from '../components/ShapeScale.vue'
</script>

<template>
  <DocPage
    title="Espaciado y forma"
    doc="spacing.md"
    source="página Spaces + relevamiento de componentes"
    lead="Grilla de 8 px con 14 spacers (4–112). Radios, bordes y sombras no están documentados en Figma: se relevaron del uso y se proponen como tokens."
  >
    <section class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Espaciado</h2>
      <p class="section__lead adk-body-small">Misma convención por px que ArchWay. 96 existe sólo como primitivo; 104 y 112 no existen.</p>
      <SpacingScale />
    </section>
    <ShapeScale />
  </DocPage>
</template>
