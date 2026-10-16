<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

interface GridValue { width: string; columns: number; alignment: string; gutter: string; margin: string | null }

const px = (v: string | null): number => (v ? parseInt(v, 10) : 0)
const breakpoints = computed(() => under('breakpoint').map((t) => ({ t, px: px(String(t.value)) })))
const maxBp = computed(() => Math.max(...breakpoints.value.map((b) => b.px)))

/** Cada grilla se dibuja a escala: el ancho del estilo sobre el ancho del breakpoint mayor. */
const grids = computed(() => under('grid').map((t) => {
  const v = t.value as GridValue
  const width = px(v.width)
  const gutter = px(v.gutter)
  const margin = v.margin ? px(v.margin) : null
  const col = v.alignment === 'center' ? 66 : (width - 2 * (margin ?? 0) - (v.columns - 1) * gutter) / v.columns
  return { t, v, width, gutter, margin, col }
}))
const modals = computed(() => under('semantic.size.modal'))
</script>

<template>
  <div>
    <section class="section">
      <h2 class="db-h4 section__title">Breakpoints</h2>
      <p class="db-body02 section__lead">Colección <code>Breakpoints</code>. La barra muestra cada corte sobre el más ancho (2xl, 1792).</p>
      <ul class="bps" role="list">
        <li v-for="b in breakpoints" :key="b.t.id" class="bp">
          <span class="db-label03 bp__name">{{ b.t.figma.name.split('/')[1] }}</span>
          <span class="bp__track"><span class="bp__fill" :style="{ width: `${(b.px / maxBp) * 100}%` }" /></span>
          <span class="mono bp__px">{{ b.px }}px</span>
          <CopyToken :value="`var(${b.t.cssVar})`" />
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="db-h4 section__title">Grillas</h2>
      <p class="db-body02 section__lead">Estilos de grilla de Figma, todos con gutter de 32px. Se dibujan a escala sobre 1792px.</p>
      <article v-for="g in grids" :key="g.t.id" class="grid">
        <div class="grid__head">
          <p class="db-label03">{{ g.t.figma.name }}</p>
          <p class="db-label01 muted">{{ g.width }}px · {{ g.v.columns }} columnas · {{ g.v.alignment }} · gutter {{ g.gutter }} · margen {{ g.margin ?? '—' }} · columna {{ g.col.toFixed(1) }}px</p>
        </div>
        <div class="grid__frame" :style="{ width: `${(g.width / maxBp) * 100}%` }">
          <div
            class="grid__cols"
            :style="{
              paddingInline: g.margin !== null ? `${(g.margin / g.width) * 100}%` : '0',
              columnGap: `${(g.gutter / g.width) * 100}%`,
              gridTemplateColumns: g.v.alignment === 'center' ? `repeat(${g.v.columns}, ${(66 / g.width) * 100}%)` : `repeat(${g.v.columns}, 1fr)`,
              justifyContent: g.v.alignment === 'center' ? 'center' : 'stretch',
            }"
          >
            <span v-for="n in g.v.columns" :key="n" class="grid__col" />
          </div>
        </div>
      </article>
      <p class="note note--warning db-body02"><strong>Página vs estilos</strong><span>La página <em>Grids</em> dice 8 columnas para Large, X-Large y Max; los estilos publicados tienen 16 (audit D-D01).</span></p>
    </section>

    <section class="section">
      <h2 class="db-h4 section__title">Tamaños de modal</h2>
      <ul class="modals" role="list">
        <li v-for="m in modals" :key="m.id" class="modal" :style="{ width: `min(100%, ${String(m.resolved)}px)` }">
          <span class="db-label03">{{ m.figma.name }}</span>
          <span class="mono">{{ String(m.resolved) }}px</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.muted { color: var(--db-text-secondary); margin: 0; }
.bps { display: grid; gap: var(--db-spacing-100); margin: 0; padding: 0; list-style: none; }
.bp { display: grid; grid-template-columns: 48px 1fr 72px auto; gap: var(--db-spacing-200); align-items: center; }
.bp__track { height: 16px; border-radius: var(--db-radius-sm); background: var(--db-layer-02); }
.bp__fill { display: block; height: 100%; border-radius: var(--db-radius-sm); background: var(--db-layer-07); }
.grid { margin: 0 0 var(--db-spacing-300); }
.grid__head p { margin: 0 0 var(--db-spacing-50); }
.grid__frame { min-width: 120px; height: 56px; border: 1px solid var(--db-border-03); border-radius: var(--db-radius-sm); background: var(--db-background-01); }
.grid__cols { display: grid; height: 100%; }
.grid__col { background: rgb(255 0 0 / 0.12); }
.modals { display: grid; gap: var(--db-spacing-100); margin: 0; padding: 0; list-style: none; }
.modal { display: flex; justify-content: space-between; padding: var(--db-spacing-200); border: 1px solid var(--db-border-03); border-radius: var(--db-radius-md); background: var(--db-layer-02); }
@media (max-width: 640px) { .bp { grid-template-columns: 40px 1fr; } }
</style>
