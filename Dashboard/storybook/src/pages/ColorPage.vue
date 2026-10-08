<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import ColorPrimitives from '../components/ColorPrimitives.vue'
import ColorSemantic from '../components/ColorSemantic.vue'
import ContrastMatrix from '../components/ContrastMatrix.vue'
import { under } from '../tokens'

const props = defineProps<{ view: 'semantic' | 'primitives' | 'contrast' }>()
const counts = {
  primitives: under('primitives').filter((t) => t.type === 'color').length,
  semantic: under('semantic').filter((t) => t.type === 'color').length,
}
</script>

<template>
  <DocPage
    title="Color"
    doc="color.md"
    source="colecciones Primitives y Semantic (Light + Dark)"
    :lead="`${counts.primitives} primitivos y ${counts.semantic} semánticos con modo Light y Dark. Usá el selector de tema de la barra superior para ver cada modo.`"
  >
    <template v-if="props.view === 'semantic'">
      <section class="section">
        <h2 class="section__title db-h4">Tokens semánticos</h2>
        <p class="section__lead db-body02">Cada token apunta a un primitivo distinto en Light y en Dark. Hacé clic en la variable para copiarla.</p>
        <ColorSemantic />
      </section>
    </template>

    <template v-else-if="props.view === 'primitives'">
      <section class="section">
        <h2 class="section__title db-h4">Primitivos</h2>
        <p class="section__lead db-body02">Paleta cruda: escalas gold, red y black (0–950) y grupos secondary, tertiary, link y accessible.</p>
        <ColorPrimitives />
      </section>
    </template>

    <template v-else>
      <section class="section">
        <h2 class="section__title db-h4">Contraste WCAG 2.1 AA</h2>
        <p class="section__lead db-body02">Pares de uso real calculados en los dos modos.</p>
        <ContrastMatrix />
      </section>
    </template>
  </DocPage>
</template>

<style scoped>
.gradient { margin: 0 0 var(--db-spacing-300); }
.gradient__bar { height: 80px; margin: 0 0 var(--db-spacing-100); border-radius: var(--db-radius-md); }
.gradient p { margin: 0; }
</style>
