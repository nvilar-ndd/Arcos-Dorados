<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { under } from '../tokens'

interface TypeValue { fontSize: string; lineHeight: string; letterSpacing: string; fontWeight: number; textDecoration?: string }

const SAMPLE: Record<string, string> = {
  display: 'McCombos',
  headline: 'Elegí tu bebida',
  body: 'Agregá papas grandes por $500 más y sumá 20 puntos.',
  utility: 'Precio sujeto a cambios',
}

const speedee = ref(true)
onMounted(async () => {
  await document.fonts.ready
  await Promise.allSettled([document.fonts.load('400 16px Speedee')])
  speedee.value = [...document.fonts].some((f) => f.family.replace(/["']/g, '') === 'Speedee' && f.status === 'loaded')
})

const groups = computed(() => {
  const all = under('typography')
  return ['display', 'headline', 'body', 'utility'].map((g) => ({
    key: g,
    styles: all.filter((t) => t.path[1] === g).map((t) => ({ t, v: t.value as TypeValue, cls: `adk-${t.path.slice(1).join('-')}` })),
  }))
})
</script>

<template>
  <div>
    <p v-if="!speedee" class="note note--warning adk-body-small">
      <strong>Speedee no está cargada.</strong>
      <span>Copiá los .woff2 en <code>ADK/storybook/fonts/</code> (ver el README de esa carpeta). Mientras tanto se ve Helvetica Neue / Arial.</span>
    </p>
    <p class="note adk-body-small">
      <strong>Tamaño real</strong>
      <span>Los ejemplos se ven a 1:1, como en el kiosco (1080 px de ancho a 50–70 cm). En un monitor de escritorio se ven grandes: es lo esperado.</span>
    </p>
    <section v-for="g in groups" :key="g.key" class="group">
      <h2 class="adk-headline-extra-small-bold group__title">{{ g.key[0].toUpperCase() + g.key.slice(1) }}</h2>
      <article v-for="s in g.styles" :key="s.t.id" class="row">
        <p :class="s.cls" class="row__sample">{{ SAMPLE[g.key] }}</p>
        <dl class="row__spec adk-utility-small">
          <div><dt>Estilo Figma</dt><dd><code>{{ s.t.figmaName }}</code></dd></div>
          <div><dt>Tamaño / interlineado</dt><dd class="mono">{{ s.v.fontSize }} / {{ s.v.lineHeight }}</dd></div>
          <div><dt>Peso</dt><dd>{{ s.v.fontWeight === 700 ? 'Bold' : 'Regular' }}{{ s.v.textDecoration ? ' · subrayado' : '' }}</dd></div>
          <div><dt>Tracking</dt><dd class="mono">{{ s.v.letterSpacing }}</dd></div>
          <div><dt>Clase</dt><dd><code>.{{ s.cls }}</code></dd></div>
          <div v-if="s.t.description"><dt>Nota</dt><dd>{{ s.t.description }}</dd></div>
        </dl>
      </article>
    </section>
  </div>
</template>

<style scoped>
.group { margin: 0 0 var(--adk-spacing-48); }
.group__title { margin: 0 0 var(--adk-spacing-8); }
.row { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: var(--adk-spacing-8) var(--adk-spacing-32); align-items: center; padding: var(--adk-spacing-24) 0; border-bottom: 1px solid var(--adk-border-subtle); }
.row__sample { margin: 0; overflow-wrap: anywhere; }
.row__spec { display: grid; gap: var(--adk-spacing-4); margin: 0; }
.row__spec div { display: grid; grid-template-columns: 140px 1fr; gap: var(--adk-spacing-8); }
.row__spec dt { color: var(--adk-text-secondary); }
.row__spec dd { margin: 0; }
@media (max-width: 820px) { .row { grid-template-columns: 1fr; } }
</style>
