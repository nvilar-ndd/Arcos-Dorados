<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { under, type Token } from '../tokens'

interface TypeValue { fontFamily: string; fontSize: string; lineHeight: string; letterSpacing: string; fontWeight: number }

const GROUPS: { title: string; match: (k: string) => boolean; sample: string }[] = [
  { title: 'Headings — h1 a H7', match: (k) => /^h\d$/.test(k), sample: 'Configuración de promociones' },
  { title: 'Body — lectura', match: (k) => k.startsWith('body'), sample: 'Seleccioná los restaurantes donde aplica la promoción. Si no seleccionás ninguno, se aplicará de forma predeterminada a todos los casos.' },
  { title: 'Label — interfaz', match: (k) => k.startsWith('label'), sample: 'Código del banco' },
  { title: 'Roboto Mono — JSON y código', match: (k) => k.startsWith('rm-'), sample: '{ "country": "AR", "promotions": true }' },
]

const speedee = ref(true)
onMounted(async () => {
  await document.fonts.ready
  await Promise.allSettled(['400 16px Speedee'].map((f) => document.fonts.load(f)))
  speedee.value = [...document.fonts].some((f) => f.family.replace(/["']/g, '') === 'Speedee' && f.status === 'loaded')
})

const groups = computed(() => {
  const all = under('typography')
  return GROUPS.map((g) => ({
    ...g,
    styles: all.filter((t: Token) => g.match(t.path[1])).map((t) => ({ t, v: t.value as TypeValue, className: `db-${t.path[1]}` })),
  }))
})
</script>

<template>
  <div>
    <p v-if="!speedee" class="note note--warning db-body02">
      <strong>Speedee no está cargada.</strong>
      <span>Copiá los .woff2 en <code>Dashboard/storybook/fonts/</code> (ver el README de esa carpeta). Mientras tanto se ve Helvetica Neue / Arial.</span>
    </p>
    <p class="note db-body02">
      <strong>Sin variables</strong>
      <span>Los estilos de Dashboard usan valores sueltos (no están enlazados a variables de fuente) y tracking −0.15px. Ver audit D-S01 y la convergencia con ArchWay.</span>
    </p>
    <section v-for="g in groups" :key="g.title" class="type__group">
      <h2 class="db-h6 type__role">{{ g.title }}</h2>
      <article v-for="s in g.styles" :key="s.t.id" class="type__row">
        <p :class="s.className" class="type__sample">{{ g.sample }}</p>
        <dl class="type__spec db-label01">
          <div><dt>Estilo Figma</dt><dd><code>{{ s.t.figma.name }}</code></dd></div>
          <div><dt>Familia</dt><dd>{{ s.v.fontFamily }}</dd></div>
          <div><dt>Tamaño / Interlineado</dt><dd class="mono">{{ s.v.fontSize }} / {{ s.v.lineHeight }}</dd></div>
          <div><dt>Peso</dt><dd>{{ s.v.fontWeight === 700 ? 'Bold' : 'Regular' }}</dd></div>
          <div><dt>Tracking</dt><dd class="mono">{{ s.v.letterSpacing }}</dd></div>
          <div><dt>Clase</dt><dd><code>.{{ s.className }}</code></dd></div>
        </dl>
        <p v-if="s.t.description" class="type__desc db-label01">{{ s.t.description }}</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
.type__group { margin: 0 0 var(--db-spacing-500); }
.type__role { margin: 0 0 var(--db-spacing-100); }
.type__row { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: var(--db-spacing-100) var(--db-spacing-400); padding: var(--db-spacing-300) 0; border-bottom: 1px solid var(--db-border-02); }
.type__sample { margin: 0; max-width: 60ch; }
.type__spec { grid-row: span 2; display: grid; gap: var(--db-spacing-50); margin: 0; }
.type__spec div { display: grid; grid-template-columns: 136px 1fr; gap: var(--db-spacing-100); }
.type__spec dt { color: var(--db-text-secondary); }
.type__spec dd { margin: 0; }
.type__desc { margin: 0; color: var(--db-text-secondary); }
@media (max-width: 820px) { .type__row { grid-template-columns: 1fr; } .type__spec { grid-row: auto; } }
</style>
