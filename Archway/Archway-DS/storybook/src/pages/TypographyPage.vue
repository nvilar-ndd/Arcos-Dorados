<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import TypeScale from '../components/TypeScale.vue'
import TextScaling from '../components/TextScaling.vue'
</script>

<template>
  <DocPage
    title="Tipografía"
    doc="typography.md"
    source="20 text styles + variables Font/*"
    lead="Speedee en cuatro roles: Display, Heading, Text y Label. Cada propiedad de cada estilo está enlazada a una variable Font/* en Figma; aquí se renderiza con las mismas variables."
  >
    <TypeScale />

    <section class="section">
      <h2 class="section__title aw-heading-large-bold">Tamaño de letra del sistema</h2>
      <p class="section__lead aw-text-body-medium">
        Los estilos crecen con el ajuste de letra del teléfono hasta un tope por grupo: Display, Heading y Label hasta +30 %
        (iOS: máximo fuera del modo de accesibilidad · Android: fontScale 1,3) y Body hasta el doble (fontScale 2,0).
        Acordado con iOS y Android el 16/10/2026. Mové el control para ver cuándo cada estilo llega a su tope.
      </p>
      <TextScaling />
    </section>
  </DocPage>
</template>
