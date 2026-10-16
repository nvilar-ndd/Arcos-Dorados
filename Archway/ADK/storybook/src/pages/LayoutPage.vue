<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import KioskCanvas from '../components/KioskCanvas.vue'

const props = defineProps<{ view: 'template' | 'safe-area' }>()
</script>

<template>
  <DocPage
    title="Layout de kiosco"
    doc="layout.md"
    source="páginas templete, Safe Accesibility Area y UI Shell"
    lead="Pantalla vertical 1080 × 1920 a 1.0×. Zonas fijas: header 192, nav 248, contenido 656, scroll 16 y footer flotante 248. El área accesible marca el tercio inferior que tiene que estar al alcance de todas las personas."
  >
    <KioskCanvas v-if="props.view === 'template'" :zones="true" :safe="0" />
    <template v-else>
      <p class="note adk-body-small">
        <strong>Falta documentar</strong>
        <span>En Figma el área accesible es sólo un rectángulo (1080 × 800 y 1080 × 960). No dice qué componentes se mueven, cómo se activa el modo ni cómo se sale (audit A-L02).</span>
      </p>
      <KioskCanvas :zones="false" :safe="800" />
    </template>
  </DocPage>
</template>
