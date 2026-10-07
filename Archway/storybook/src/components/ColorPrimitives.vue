<script setup lang="ts">
import { computed } from 'vue'
import { under, type Token } from '../tokens'
import CopyToken from './CopyToken.vue'

const FAMILY_ORDER = ['gold', 'red', 'black', 'white', 'green', 'lime', 'blue-dark', 'orange', 'fuchsia', 'purple', 'violet']
const FAMILY_LABEL: Record<string, string> = {
  gold: 'Gold · marca',
  red: 'Red · marca / error',
  black: 'Black · neutros',
  white: 'White',
  green: 'Green · éxito',
  lime: 'Lime',
  'blue-dark': 'Blue Dark · info, links, confianza',
  orange: 'Orange',
  fuchsia: 'Fuchsia',
  purple: 'Purple · Misiones, visited',
  violet: 'Violet · novedad',
}

const stepOf = (t: Token): number => {
  const n = parseInt(t.path[3] ?? '', 10)
  return Number.isNaN(n) ? 9999 : n
}

const families = computed(() => {
  const groups = new Map<string, Token[]>()
  for (const t of under('primitives.color')) {
    const fam = t.path[2]
    groups.set(fam, [...(groups.get(fam) ?? []), t])
  }
  return FAMILY_ORDER.filter((f) => groups.has(f)).map((f) => ({
    key: f,
    label: FAMILY_LABEL[f] ?? f,
    tokens: (groups.get(f) ?? []).slice().sort((a, b) => stepOf(a) - stepOf(b)),
  }))
})

const isBase = (t: Token): boolean => t.figma.name.endsWith('_')
const hasAlpha = (t: Token): boolean => String(t.resolved).length === 9
const stepLabel = (t: Token): string => t.path.slice(3).join('-') || t.path[2]
const darkText = (t: Token): boolean => {
  const h = String(t.resolved).replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 || hasAlpha(t)
}
</script>

<template>
  <div class="families">
    <section v-for="fam in families" :key="fam.key" class="family">
      <h3 class="family__name aw-heading-small-bold">{{ fam.label }}</h3>
      <ul class="ramp" role="list">
        <li v-for="t in fam.tokens" :key="t.id" class="chip" :title="t.description">
          <div
            class="chip__swatch"
            :class="{ 'chip__swatch--alpha': hasAlpha(t), 'is-dark-text': darkText(t) }"
            :style="{ '--swatch': String(t.resolved) }"
          >
            <span class="aw-label-small-bold">{{ stepLabel(t) }}</span>
            <span v-if="isBase(t)" class="chip__base aw-label-small">base</span>
          </div>
          <div class="chip__meta">
            <span class="mono">{{ String(t.resolved).toUpperCase() }}</span>
            <CopyToken :value="`var(${t.cssVar})`" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.families { display: grid; gap: var(--aw-spacing-32); }
.family__name { margin: 0 0 var(--aw-spacing-8); }
.ramp {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  gap: var(--aw-spacing-8);
  margin: 0;
  padding: 0;
  list-style: none;
}
.chip {
  overflow: hidden;
  border: 1px solid var(--aw-border-subtle);
  border-radius: var(--aw-radius-m);
  background: var(--aw-layer-01);
}
.chip__swatch {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 72px;
  padding: var(--aw-spacing-8);
  background: var(--swatch);
  color: var(--aw-text-on-color);
}
.chip__swatch.is-dark-text { color: var(--aw-text-primary); }
.chip__swatch--alpha {
  background:
    linear-gradient(var(--swatch), var(--swatch)),
    repeating-conic-gradient(var(--aw-layer-03) 0 25%, var(--aw-layer-01) 0 50%) 0 0 / 12px 12px;
}
.chip__base {
  padding: 0 var(--aw-spacing-4);
  border-radius: var(--aw-radius-xs);
  background: var(--aw-layer-01);
  color: var(--aw-text-primary);
}
.chip__meta {
  display: grid;
  gap: var(--aw-spacing-4);
  padding: var(--aw-spacing-8);
  overflow-wrap: anywhere;
}
.chip__meta code { font-size: 0.6875rem; }
</style>
