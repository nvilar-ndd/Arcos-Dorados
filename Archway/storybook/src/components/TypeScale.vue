<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { under, token, type Token } from '../tokens'

interface TypeValue {
  fontFamily: string
  fontSize: string
  lineHeight: string
  letterSpacing: string
  fontWeight: number
  fontStyle: 'normal' | 'italic'
}

const SAMPLE: Record<string, string> = {
  display: 'Tu McCombo, como te gusta',
  heading: 'Promociones de la semana',
  text: 'Sumá puntos con cada pedido y canjealos por tus productos favoritos en cualquier local adherido.',
  label: 'Agregar al pedido',
}
const ROLE: Record<string, string> = {
  display: 'Display — impacto, hero, onboarding',
  heading: 'Heading — títulos de pantalla y sección',
  text: 'Text (Body) — contenido que se lee',
  label: 'Label — contenido que se acciona o rotula',
}

/** Uso en producto según la página Typography de Figma. */
const USAGE: Record<string, string> = {
  'Display Large Bold': 'Grandes promociones',
  'Display Medium Bold': 'Títulos de categorías del menú',
  'Heading Large Bold': 'Títulos de pantalla (ej. "Carrito")',
  'Heading Large': 'Uso en presentaciones',
  'Heading Medium Bold': 'Títulos de sección o modales',
  'Heading Medium': 'Títulos de sección o modales',
  'Heading Small Bold': 'Nombres de productos en cards',
  'Heading Small': 'Nombres de productos en cards',
  'Body Large Bold': 'Texto base',
  'Body Large': 'Texto base',
  'Body Medium Bold': 'Descripciones',
  'Body Medium': 'Descripciones',
  'Body Small': 'Letra pequeña, legales',
  'Label Large': 'Primary buttons (CTAs)',
  'Label Medium Bold': 'Labels, inputs, tabs',
  'Label Medium': 'Labels, inputs, tabs',
  'Label Medium Italic': 'Aclaraciones de precio, disclaimers, legales, TyC',
  'Label Small Bold': 'Letra pequeña, legales y tab bar',
  'Label Small': 'Letra pequeña, legales y tab bar',
  'Label Small Italic': 'Aclaraciones de precio, disclaimers, legales, TyC',
}

const refValue = (ref: string): string => {
  const id = ref.replace(/^\{|\}$/g, '')
  return String(token(id).resolved)
}

/** true cuando Speedee está disponible (instalada en el equipo o en storybook/fonts). */
const speedee = ref(true)
onMounted(async () => {
  await document.fonts.ready
  await Promise.allSettled(['400 16px Speedee', '700 16px Speedee'].map((f) => document.fonts.load(f)))
  speedee.value = document.fonts.check('400 16px Speedee') && [...document.fonts].some((f) => f.family.replace(/["']/g, '') === 'Speedee' && f.status === 'loaded')
})

const groups = computed(() => {
  const all = under('typography')
  return Object.keys(ROLE).map((role) => ({
    role,
    title: ROLE[role],
    styles: all
      .filter((t: Token) => t.path[1] === role)
      .map((t) => {
        const v = t.value as TypeValue
        return {
          t,
          className: `aw-${t.path.slice(1).join('-')}`,
          size: refValue(v.fontSize),
          lineHeight: refValue(v.lineHeight),
          tracking: refValue(v.letterSpacing),
          weight: v.fontStyle === 'italic' ? 'Italic' : v.fontWeight === 700 ? 'Bold' : 'Regular',
          sizeToken: v.fontSize.replace(/^\{semantic\.|\}$/g, ''),
        }
      }),
  }))
})
</script>

<template>
  <div class="type">
    <p v-if="!speedee" class="note note--warning aw-text-body-medium">
      <strong>Speedee no está cargada.</strong>
      <span>Es una tipografía con licencia y no se versiona: copiá los .woff2 en <code>Archway/storybook/fonts/</code> (ver el README de esa carpeta). Mientras tanto se ve Helvetica Neue / Arial; tamaños, interlineados y tracking son los reales.</span>
    </p>
    <section v-for="g in groups" :key="g.role" class="type__group">
      <h2 class="aw-heading-small-bold type__role">{{ g.title }}</h2>
      <article v-for="s in g.styles" :key="s.t.id" class="type__row">
        <p :class="s.className" class="type__sample">{{ SAMPLE[g.role] }}</p>
        <dl class="type__spec aw-label-small">
          <div><dt>Estilo Figma</dt><dd><code>{{ s.t.figma.name }}</code></dd></div>
          <div><dt>Tamaño / Interlineado</dt><dd class="mono">{{ s.size }} / {{ s.lineHeight }}</dd></div>
          <div><dt>Peso</dt><dd>{{ s.weight }}</dd></div>
          <div><dt>Tracking</dt><dd class="mono">{{ s.tracking }}</dd></div>
          <div><dt>Uso en producto</dt><dd>{{ USAGE[s.t.figma.name.split('/')[1]] ?? '—' }}</dd></div>
          <div><dt>Clase</dt><dd><code>.{{ s.className }}</code></dd></div>
        </dl>
        <p class="type__desc aw-text-body-small">{{ s.t.description }}</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
.type__group { margin: 0 0 var(--aw-spacing-40); }
.type__role { margin: 0 0 var(--aw-spacing-8); }
.type__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: var(--aw-spacing-8) var(--aw-spacing-32);
  padding: var(--aw-spacing-24) 0;
  border-bottom: 1px solid var(--aw-border-subtle);
}
.type__sample { margin: 0; max-width: 60ch; }
.type__spec { grid-row: span 2; display: grid; gap: var(--aw-spacing-4); margin: 0; }
.type__spec div { display: grid; grid-template-columns: 136px 1fr; gap: var(--aw-spacing-8); }
.type__spec dt { color: var(--aw-text-secondary); }
.type__spec dd { margin: 0; }
.type__desc { margin: 0; color: var(--aw-text-secondary); }
@media (max-width: 820px) {
  .type__row { grid-template-columns: 1fr; }
  .type__spec { grid-row: auto; }
}
</style>
