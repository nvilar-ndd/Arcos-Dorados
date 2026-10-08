<script setup lang="ts">
import { computed } from 'vue'
import { figmaToken, contrast, hex, wcagText, type Mode } from '../tokens'

type Kind = 'text' | 'ui'
interface Pair { fg: string; bg: string; kind: Kind; note?: string }

/** Pares de uso real. Mismo set que audita Dashboard/audit.md. */
const PAIRS: Pair[] = [
  { fg: 'text/primary', bg: 'background/01', kind: 'text' },
  { fg: 'text/primary', bg: 'layer/02', kind: 'text' },
  { fg: 'text/primary', bg: 'layer/03', kind: 'text', note: 'D-A03' },
  { fg: 'text/secondary', bg: 'background/01', kind: 'text' },
  { fg: 'text/secondary', bg: 'layer/02', kind: 'text' },
  { fg: 'text/error', bg: 'background/01', kind: 'text' },
  { fg: 'text/success', bg: 'background/01', kind: 'text' },
  { fg: 'text/on-color', bg: 'background/05', kind: 'text' },
  { fg: 'link/primary', bg: 'background/01', kind: 'text' },
  { fg: 'link/primary-hover', bg: 'background/01', kind: 'text' },
  { fg: 'link/primary-visited', bg: 'background/01', kind: 'text' },
  { fg: 'button/primary-text', bg: 'button/primary-enabled', kind: 'text' },
  { fg: 'button/primary-text', bg: 'button/primary-hover', kind: 'text' },
  { fg: 'button/primary-text', bg: 'button/primary-focus', kind: 'text' },
  { fg: 'button/secondary-text', bg: 'button/secondary', kind: 'text' },
  { fg: 'button/secondary-text', bg: 'button/secondary-pressed', kind: 'text', note: 'D-A04' },
  { fg: 'button/red-text', bg: 'button/red', kind: 'text' },
  { fg: 'button/red-text', bg: 'button/red-hover', kind: 'text', note: 'D-A05' },
  { fg: 'text/primary', bg: 'tag/background-green', kind: 'text', note: 'D-A01' },
  { fg: 'text/primary', bg: 'tag/background-blue', kind: 'text', note: 'D-A01' },
  { fg: 'text/primary', bg: 'layer/08', kind: 'text' },
  { fg: 'icon/secondary', bg: 'background/01', kind: 'ui' },
  { fg: 'icon/gold', bg: 'background/01', kind: 'ui', note: 'D-A06' },
  { fg: 'border/01', bg: 'background/01', kind: 'ui' },
  { fg: 'border/02', bg: 'background/01', kind: 'ui', note: 'D-A02' },
  { fg: 'border/03', bg: 'background/01', kind: 'ui', note: 'D-A02' },
  { fg: 'border/04', bg: 'background/01', kind: 'ui', note: 'D-A02' },
  { fg: 'support/error', bg: 'background/01', kind: 'ui' },
  { fg: 'support/success', bg: 'background/01', kind: 'ui' },
  { fg: 'support/warning', bg: 'background/01', kind: 'ui', note: 'D-A06' },
]
const MODES: Mode[] = ['light', 'dark']

function evaluate(p: Pair, m: Mode) {
  const fg = figmaToken(p.fg)
  const bg = figmaToken(p.bg)
  const f = hex(fg, m)
  const b = hex(bg, m)
  const ratio = contrast(f, b)
  const need = p.kind === 'text' ? 4.5 : 3
  const level = p.kind === 'text' ? wcagText(ratio) : ratio >= 3 ? 'AA' : 'Falla'
  const status = ratio >= need ? 'pass' : level === 'AA grande' ? 'large' : 'fail'
  return { f, b, ratio, level, status }
}
const rows = computed(() => PAIRS.map((p) => ({ ...p, r: { light: evaluate(p, 'light'), dark: evaluate(p, 'dark') } })))
const failing = (m: Mode) => rows.value.filter((r) => r.r[m].status !== 'pass').length
</script>

<template>
  <div>
    <p class="note db-body02">
      <strong>Light: {{ failing('light') }} · Dark: {{ failing('dark') }}</strong>
      <span>de {{ rows.length }} pares no alcanzan WCAG 2.1 AA (texto 4.5:1, UI 3:1). Calculado en vivo desde los tokens de cada modo.</span>
    </p>
    <div class="table-wrap">
      <table class="spec db-body02">
        <thead>
          <tr><th scope="col">Primer plano / fondo</th><th scope="col">Criterio</th><th v-for="m in MODES" :key="m" scope="col">{{ m === 'light' ? 'Light' : 'Dark' }}</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.fg + row.bg">
            <td><code>{{ row.fg }}</code> / <code>{{ row.bg }}</code><span v-if="row.note" class="db-label01 row-note">{{ row.note }}</span></td>
            <td>{{ row.kind === 'text' ? 'Texto 4.5' : 'UI 3' }}</td>
            <td v-for="m in MODES" :key="m">
              <span class="cell">
                <span class="sample" :style="{ background: row.r[m].b, color: row.r[m].f, borderColor: row.kind === 'ui' ? row.r[m].f : undefined }">
                  <span v-if="row.kind === 'text'" class="db-label03">Aa</span>
                </span>
                <span class="mono"><strong>{{ row.r[m].ratio.toFixed(2) }}</strong></span>
                <span class="badge db-label01" :class="`badge--${row.r[m].status}`">{{ row.r[m].status === 'pass' ? row.r[m].level : row.r[m].status === 'large' ? 'Grande' : 'Falla' }}</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.cell { display: inline-flex; align-items: center; gap: var(--db-spacing-100); white-space: nowrap; }
.sample { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 32px; border: 2px solid transparent; border-radius: var(--db-radius-sm); }
.row-note { display: block; margin-top: var(--db-spacing-50); color: var(--db-text-secondary); }
</style>
