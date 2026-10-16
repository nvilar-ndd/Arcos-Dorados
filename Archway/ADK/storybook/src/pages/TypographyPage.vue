<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import TypeScale from '../components/TypeScale.vue'
import KioskTypeMode from '../components/KioskTypeMode.vue'

const props = defineProps<{ view: 'scale' | 'kiosk-mode' }>()
</script>

<template>
  <DocPage
    title="Tipografía"
    doc="typography.md"
    source="20 text styles ADK/* (Speedee)"
    lead="Escala de kiosco: cuerpo de 22–24 px y títulos hasta 128 px, para pantalla vertical vista a 50–70 cm. Sólo 354 textos de componentes usan estos estilos; 3.272 están sin estilo (audit A-T01)."
  >
    <TypeScale v-if="props.view === 'scale'" />
    <section v-else class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Modo kiosk sobre ArchWay (propuesta K8)</h2>
      <p class="section__lead adk-body-small">
        Los estilos de ArchWay no cambian: cambian los valores de <code>Font/size/*</code> y <code>Font/line-height/*</code> por modo.
        Con estos valores, 7 de los 11 roles reproducen exacto la escala de ADK y los otros 4 sólo suman 2–4 px de interlineado.
      </p>
      <KioskTypeMode />
    </section>
  </DocPage>
</template>
