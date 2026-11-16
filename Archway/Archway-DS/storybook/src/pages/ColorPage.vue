<script setup lang="ts">
import { computed } from 'vue'
import DocPage from '../components/DocPage.vue'
import ColorPrimitives from '../components/ColorPrimitives.vue'
import ColorSemantic from '../components/ColorSemantic.vue'
import ContrastMatrix from '../components/ContrastMatrix.vue'
import { under } from '../tokens'
import { ILLUSTRATION_PALETTE } from '../data/illustration-palette'

const props = defineProps<{ view: 'semantic' | 'primitives' | 'contrast' | 'illustration' }>()
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

    <template v-else-if="props.view === 'illustration'">
      <section class="section">
        <h2 class="section__title aw-heading-large-bold">Paleta de ilustración</h2>
        <p class="section__lead aw-text-body-medium">
          Color Guide de ilustraciones de la página Colors, <strong>de uso exclusivo para ilustraciones</strong>. No son variables ni estilos y no
          se usan en UI: para interfaz, sólo tokens semánticos. Los avisos marcan valores mal cargados en Figma (audit H-02).
        </p>
        <ul class="palette" role="list">
          <li v-for="c in ILLUSTRATION_PALETTE" :key="c.name" class="palette__item">
            <span class="palette__chip" :class="{ 'palette__chip--empty': !c.hex }" :style="c.hex ? { background: c.hex } : undefined" aria-hidden="true" />
            <span class="aw-label-medium-bold">{{ c.name }}</span>
            <code class="aw-label-small">{{ c.hex || 'Sin definir' }}</code>
            <span v-if="c.issue" class="palette__issue aw-label-small">⚠ {{ c.issue }}</span>
          </li>
        </ul>
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
.palette { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--aw-spacing-16); margin: 0; padding: 0; list-style: none; }
.palette__item { display: grid; align-content: start; gap: var(--aw-spacing-4); }
.palette__item code { justify-self: start; }
.palette__chip { height: 64px; border: 1px solid var(--aw-border-subtle); border-radius: var(--aw-radius-s); }
.palette__chip--empty { background: repeating-linear-gradient(45deg, var(--aw-surface-subtle) 0 8px, var(--aw-surface-default) 8px 16px); }
.palette__issue { color: var(--aw-text-error); }
</style>
