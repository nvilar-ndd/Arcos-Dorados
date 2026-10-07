<script setup lang="ts">
import { computed } from 'vue'
import { figmaToken, contrast, hex, wcagText } from '../tokens'

type Kind = 'text' | 'ui'
interface Pair { fg: string; bg: string; kind: Kind; note?: string }

/** Pares de uso real. Mismo set que audita audit.md. */
const PAIRS: Pair[] = [
  { fg: 'Text/Text_primary', bg: 'Layer/01', kind: 'text' },
  { fg: 'Text/Text_primary', bg: 'Layer/03', kind: 'text' },
  { fg: 'Text/Text_secondary', bg: 'Layer/01', kind: 'text' },
  { fg: 'Text/Text_secondary', bg: 'Layer/03', kind: 'text' },
  { fg: 'Text/Text_error', bg: 'Layer/01', kind: 'text' },
  { fg: 'Button/text-enabled', bg: 'Button/primary', kind: 'text' },
  { fg: 'Button/text-enabled', bg: 'Button/primary-focus', kind: 'text' },
  { fg: 'Text/Text_on-color', bg: 'Button/primary', kind: 'text', note: 'A-01: descrito como uso válido' },
  { fg: 'Text/Text_on-color', bg: 'Layer/06', kind: 'text' },
  { fg: 'Chip/selected-text', bg: 'Chip/selected-bg', kind: 'text' },
  { fg: 'Interactive/active-text-subtle', bg: 'Interactive/active-subtle', kind: 'text', note: 'A-03' },
  { fg: 'Feedback/error-text', bg: 'Feedback/error-surface', kind: 'text' },
  { fg: 'Feedback/success-surface-text', bg: 'Feedback/success-surface', kind: 'text' },
  { fg: 'Feedback/error-on-black', bg: 'Layer/06', kind: 'text', note: 'A-02' },
  { fg: 'Feedback/success-on-black', bg: 'Layer/06', kind: 'text', note: 'A-02' },
  { fg: 'Feedback/info-on-black', bg: 'Layer/06', kind: 'text', note: 'A-02' },
  { fg: 'Link/default', bg: 'Layer/01', kind: 'text' },
  { fg: 'Link/visited', bg: 'Layer/01', kind: 'text' },
  { fg: 'Link/inverse', bg: 'Layer/06', kind: 'text' },
  { fg: 'Trust/default-text', bg: 'Trust/bg-default', kind: 'text' },
  { fg: 'Feacture/Misiones', bg: 'Feacture/Misiones-surface', kind: 'text' },
  { fg: 'Border/default', bg: 'Layer/01', kind: 'ui' },
  { fg: 'Border/soft', bg: 'Layer/01', kind: 'ui', note: 'A-04: borde de input' },
  { fg: 'Border/strong', bg: 'Layer/01', kind: 'ui' },
  { fg: 'Interactive/active', bg: 'Layer/01', kind: 'ui', note: 'A-06' },
  { fg: 'Icon/gold', bg: 'Layer/06', kind: 'ui' },
  { fg: 'Icon/gold', bg: 'Layer/01', kind: 'ui' },
  { fg: 'Feedback/error', bg: 'Layer/01', kind: 'ui' },
  { fg: 'Feedback/success', bg: 'Layer/01', kind: 'ui' },
  { fg: 'Feedback/info', bg: 'Layer/01', kind: 'ui' },
  { fg: 'highlight/new', bg: 'Layer/01', kind: 'ui' },
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
