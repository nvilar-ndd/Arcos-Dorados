<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import ColorPrimitives from '../components/ColorPrimitives.vue'
import ColorSemantic from '../components/ColorSemantic.vue'
import ContrastMatrix from '../components/ContrastMatrix.vue'
import { under } from '../tokens'

const props = defineProps<{ view: 'primitives' | 'semantic' | 'contrast' }>()
const n = {
  primitives: under('primitives.color').length,
  semantic: under('semantic').filter((t) => t.type === 'color').length,
}
</script>

<template>
  <DocPage
    title="Color"
    doc="color.md"
    source="página Colors (sin variables)"
    :lead="`ADK no tiene variables de color: la paleta son muestras en Figma y los componentes usan hex sueltos. Acá están los ${n.primitives} primitivos relevados, ${n.semantic} semánticos propuestos y su equivalente en ArchWay.`"
  >
    <section v-if="props.view === 'primitives'" class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Primitivos</h2>
      <p class="section__lead adk-body-small">Paleta de la página <em>Colors</em> más los colores que usan los componentes y no están documentados (borde punteado). Cada uno con el primitivo de ArchWay más cercano (ΔE CIE76).</p>
      <ColorPrimitives />
    </section>
    <section v-else-if="props.view === 'semantic'" class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Semánticos (propuesta) → ArchWay</h2>
      <p class="section__lead adk-body-small">Derivados del uso real en componentes. Es el mapa para enlazar ADK a ArchWay Semantic: "Distinto" y "Cercano" cambian de color visible al migrar.</p>
      <ColorSemantic />
    </section>
    <section v-else class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Contraste WCAG 2.1 AA</h2>
      <p class="section__lead adk-body-small">Pares de uso real en componentes, calculados en vivo desde los tokens.</p>
      <ContrastMatrix />
    </section>
  </DocPage>
</template>
