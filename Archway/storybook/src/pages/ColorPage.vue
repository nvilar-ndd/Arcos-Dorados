<script setup lang="ts">
import { computed } from 'vue'
import DocPage from '../components/DocPage.vue'
import ColorPrimitives from '../components/ColorPrimitives.vue'
import ColorSemantic from '../components/ColorSemantic.vue'
import ContrastMatrix from '../components/ContrastMatrix.vue'
import { under } from '../tokens'

const props = defineProps<{ view: 'semantic' | 'primitives' | 'contrast' }>()
const gradients = computed(() => under('gradient'))
const counts = {
  primitives: under('primitives').filter((t) => t.type === 'color').length,
  semantic: under('semantic').filter((t) => t.type === 'color').length,
}
</script>

<template>
  <DocPage
    title="Color"
    doc="color.md"
    source="colecciones Primitives (Default) y Semantic (Light)"
    :lead="`Dos niveles de variables: ${counts.primitives} primitivos con los valores crudos y ${counts.semantic} semánticos que expresan la intención. Componentes y código consumen sólo semánticos.`"
  >
    <template v-if="props.view === 'semantic'">
      <section class="section">
        <h2 class="section__title aw-heading-large-bold">Tokens semánticos</h2>
        <p class="section__lead aw-text-body-medium">Cada token es un alias de un primitivo. Hacé clic en la variable para copiarla.</p>
        <ColorSemantic />
      </section>
    </template>

    <template v-else-if="props.view === 'primitives'">
      <section class="section">
        <h2 class="section__title aw-heading-large-bold">Primitivos</h2>
        <p class="section__lead aw-text-body-medium">Paleta cruda por familia. No se aplican directo en componentes; la etiqueta <em>base</em> marca el valor de marca de cada familia.</p>
        <ColorPrimitives />
      </section>
      <section class="section">
        <h2 class="section__title aw-heading-large-bold">Gradientes de marca</h2>
        <p class="section__lead aw-text-body-medium">Estilos de pintura de Figma (no variables). Loyalty BA es el inverso de Loyalty AB.</p>
        <div v-for="g in gradients" :key="g.id" class="gradient">
          <div class="gradient__bar" :style="{ background: `var(${g.cssVar})` }" />
          <p class="aw-label-medium-bold">{{ g.figma.name }} · <code>var({{ g.cssVar }})</code></p>
        </div>
      </section>
    </template>

    <template v-else>
      <section class="section">
        <h2 class="section__title aw-heading-large-bold">Contraste WCAG 2.1 AA</h2>
        <p class="section__lead aw-text-body-medium">Pares de uso real calculados sobre los valores resueltos de los tokens.</p>
        <ContrastMatrix />
      </section>
    </template>
  </DocPage>
</template>

<style scoped>
.gradient { margin: 0 0 var(--aw-spacing-24); }
.gradient__bar { height: 80px; margin: 0 0 var(--aw-spacing-8); border-radius: var(--aw-radius-m); }
.gradient p { margin: 0; }
</style>
