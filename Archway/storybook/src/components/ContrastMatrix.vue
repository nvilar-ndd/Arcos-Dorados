<script setup lang="ts">
import { computed } from 'vue'
import { figmaToken, contrast, hex, wcagText } from '../tokens'

type Kind = 'text' | 'ui'
interface Pair { fg: string; bg: string; kind: Kind; note?: string }

/** Pares de uso real. Mismo set que audita audit.md. */
const PAIRS: Pair[] = [
  { fg: 'Text/primary', bg: 'Surface/default', kind: 'text' },
  { fg: 'Text/primary', bg: 'Surface/subtle', kind: 'text' },
  { fg: 'Text/primary', bg: 'Surface/muted', kind: 'text' },
  { fg: 'Text/secondary', bg: 'Surface/default', kind: 'text' },
  { fg: 'Text/secondary', bg: 'Surface/subtle', kind: 'text' },
  { fg: 'Text/secondary', bg: 'Surface/muted', kind: 'text' },
  { fg: 'Text/error', bg: 'Surface/default', kind: 'text' },
  { fg: 'Text/on-color', bg: 'Button/primary-bg', kind: 'text', note: 'A-01: descrito como uso válido' },
  { fg: 'Text/on-color', bg: 'Surface/brand', kind: 'text', note: 'A-01' },
  { fg: 'Text/on-color', bg: 'Surface/inverse', kind: 'text' },
  { fg: 'Button/text', bg: 'Button/primary-bg', kind: 'text' },
  { fg: 'Button/text', bg: 'Button/primary-bg-pressed', kind: 'text' },
  { fg: 'Button/text', bg: 'Button/primary-bg-focused', kind: 'text' },
  { fg: 'Icon/on-color', bg: 'Button/primary-bg', kind: 'ui', note: 'A-01' },
  { fg: 'Icon/on-color', bg: 'Chip/bg-selected', kind: 'ui', note: 'A-01' },
  { fg: 'Icon/gold', bg: 'Surface/inverse', kind: 'ui' },
  { fg: 'Icon/gold', bg: 'Surface/default', kind: 'ui', note: 'A-06' },
  { fg: 'Icon/primary', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Icon/gray', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Icon/red', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Chip/text', bg: 'Chip/bg', kind: 'text' },
  { fg: 'Chip/text-selected', bg: 'Chip/bg-selected', kind: 'text' },
  { fg: 'Chip/stroke', bg: 'Chip/bg', kind: 'ui' },
  { fg: 'Border/default', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Border/soft', bg: 'Surface/default', kind: 'ui', note: 'A-04: borde de input' },
  { fg: 'Border/strong', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Border/input-active', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Button/secondary-stroke', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Feedback/error', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Feedback/error-text', bg: 'Feedback/error-surface', kind: 'text' },
  { fg: 'Feedback/error-on-black', bg: 'Surface/inverse', kind: 'text', note: 'A-02' },
  { fg: 'Feedback/success', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Feedback/success-text', bg: 'Feedback/success-surface', kind: 'text' },
  { fg: 'Feedback/success-on-black', bg: 'Surface/inverse', kind: 'text', note: 'A-02' },
  { fg: 'Feedback/warning', bg: 'Surface/default', kind: 'ui', note: 'A-06' },
  { fg: 'Text/primary', bg: 'Feedback/warning-surface', kind: 'text' },
  { fg: 'Feedback/info', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Text/primary', bg: 'Feedback/info-surface', kind: 'text' },
  { fg: 'Feedback/info-on-black', bg: 'Surface/inverse', kind: 'text', note: 'A-02' },
  { fg: 'Interactive/active', bg: 'Surface/default', kind: 'ui', note: 'A-06' },
  { fg: 'Interactive/active-text', bg: 'Interactive/active', kind: 'text' },
  { fg: 'Interactive/active-subtle-text', bg: 'Interactive/active-subtle', kind: 'text', note: 'A-03' },
  { fg: 'Link/default', bg: 'Surface/default', kind: 'text' },
  { fg: 'Link/hover', bg: 'Surface/default', kind: 'text' },
  { fg: 'Link/focused', bg: 'Surface/default', kind: 'text' },
  { fg: 'Link/visited', bg: 'Surface/default', kind: 'text' },
  { fg: 'Link/inverse', bg: 'Surface/inverse', kind: 'text' },
  { fg: 'Link/inverse-visited', bg: 'Surface/inverse', kind: 'text' },
  { fg: 'Trust/text', bg: 'Trust/subtle', kind: 'text' },
  { fg: 'Text/on-color', bg: 'Trust/default', kind: 'text' },
  { fg: 'Feature/missions', bg: 'Feature/missions-surface', kind: 'text' },
  { fg: 'Highlight/new', bg: 'Surface/default', kind: 'ui' },
  { fg: 'Text/on-color', bg: 'Highlight/new', kind: 'text' },
  { fg: 'Feature/accessibility', bg: 'Surface/default', kind: 'ui' },
]

const rows = computed(() =>
  PAIRS.map((p) => {
    const fg = figmaToken(p.fg)
    const bg = figmaToken(p.bg)
    const ratio = contrast(hex(fg), hex(bg))
    const need = p.kind === 'text' ? 4.5 : 3
    const level = p.kind === 'text' ? wcagText(ratio) : ratio >= 3 ? 'AA' : 'Falla'
    const status = ratio >= need ? 'pass' : level === 'AA grande' ? 'large' : 'fail'
    return { ...p, fgVar: fg.cssVar, bgVar: bg.cssVar, ratio, need, level, status }
  }),
)
const failing = computed(() => rows.value.filter((r) => r.status !== 'pass').length)
</script>

<template>
  <div>
    <p class="note aw-text-body-medium">
      <strong>{{ failing }} de {{ rows.length }}</strong>
      <span>pares no alcanzan el mínimo WCAG 2.1 AA (texto 4.5:1, UI y bordes 3:1). Los ratios se calculan en vivo desde los tokens: cuando se aprueben las propuestas de audit.md, esta tabla se actualiza sola.</span>
    </p>
    <div class="table-wrap">
      <table class="spec aw-text-body-medium">
        <thead>
          <tr><th scope="col">Muestra</th><th scope="col">Primer plano</th><th scope="col">Fondo</th><th scope="col">Ratio</th><th scope="col">Criterio</th><th scope="col">Resultado</th></tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.fg + r.bg">
            <td>
              <span class="sample" :style="{ background: `var(${r.bgVar})`, color: `var(${r.fgVar})` }">
                <span v-if="r.kind === 'text'" class="aw-label-medium-bold">Aa Pedí ya</span>
                <span v-else class="ring" :style="{ borderColor: `var(${r.fgVar})` }" aria-hidden="true" />
              </span>
            </td>
            <td><code>{{ r.fg }}</code></td>
            <td><code>{{ r.bg }}</code></td>
            <td class="mono"><strong>{{ r.ratio.toFixed(2) }}:1</strong></td>
            <td>{{ r.kind === 'text' ? 'Texto 4.5:1' : 'UI 3:1' }}</td>
            <td>
              <span class="badge aw-label-small-bold" :class="`badge--${r.status}`">{{ r.status === 'pass' ? r.level : r.status === 'large' ? 'Sólo texto grande' : 'Falla' }}</span>
              <span v-if="r.note" class="aw-label-small row-note">{{ r.note }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.sample {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 112px;
  height: 40px;
  padding: 0 var(--aw-spacing-16);
  border: 1px solid var(--aw-border-subtle);
  border-radius: var(--aw-radius-s);
}
.ring {
  width: 64px;
  height: 20px;
  border: 2px solid;
  border-radius: var(--aw-radius-xs);
}
.row-note { display: block; margin-top: var(--aw-spacing-4); color: var(--aw-text-secondary); }
</style>
