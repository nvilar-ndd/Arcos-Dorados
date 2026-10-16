<script setup lang="ts">
import { computed } from 'vue'
import { contrast, hex, token, wcagText } from '../tokens'

type Kind = 'text' | 'ui'
interface Pair { fg: string; bg: string; kind: Kind; use: string; note?: string }

/** Pares de uso real en componentes ADK. Mismo set que ADK/audit.md. */
const PAIRS: Pair[] = [
  { fg: 'text.primary', bg: 'background.default', kind: 'text', use: 'Texto general' },
  { fg: 'text.secondary', bg: 'background.default', kind: 'text', use: 'Label, helper, descripciones' },
  { fg: 'text.secondary', bg: 'background.subtle', kind: 'text', use: 'Texto sobre Ivory' },
  { fg: 'text.error', bg: 'background.default', kind: 'text', use: 'Error de Text Field' },
  { fg: 'link.default', bg: 'background.default', kind: 'text', use: 'Link' },
  { fg: 'button.text', bg: 'button.primary', kind: 'text', use: 'Botón primario' },
  { fg: 'button.text', bg: 'button.primary-hover', kind: 'text', use: 'Botón primario hover' },
  { fg: 'button.text', bg: 'button.secondary-hover', kind: 'text', use: 'Botón secundario hover' },
  { fg: 'text.on-color', bg: 'background.inverse', kind: 'text', use: 'Snackbar' },
  { fg: 'text.primary', bg: 'badge.new', kind: 'text', use: 'Badge Nuevo' },
  { fg: 'text.primary', bg: 'badge.recommended', kind: 'text', use: 'Badge Recomendado' },
  { fg: 'text.disabled', bg: 'background.default', kind: 'text', use: 'Disabled (exento de WCAG)' },
  { fg: 'button.primary-stroke', bg: 'background.default', kind: 'ui', use: 'Borde del botón primario' },
  { fg: 'border.default', bg: 'background.default', kind: 'ui', use: 'Borde de secundario y chips' },
  { fg: 'control.track-stroke', bg: 'background.default', kind: 'ui', use: 'Borde de Text Field, Dropdown, Toggle off', note: 'A-A02' },
  { fg: 'border.selected', bg: 'background.default', kind: 'ui', use: 'Selección / chip / nav (Gold)', note: 'A-A01' },
  { fg: 'scroll.thumb', bg: 'scroll.track', kind: 'ui', use: 'Thumb del scroll', note: 'A-A03' },
  { fg: 'feedback.success', bg: 'background.inverse', kind: 'ui', use: 'Borde Snackbar Success' },
  { fg: 'feedback.error', bg: 'background.inverse', kind: 'ui', use: 'Borde Snackbar Error' },
  { fg: 'feedback.warning', bg: 'background.inverse', kind: 'ui', use: 'Borde Snackbar Warning' },
  { fg: 'feedback.info', bg: 'background.inverse', kind: 'ui', use: 'Borde Snackbar Info' },
]

const rows = computed(() =>
  PAIRS.map((p) => {
    const f = hex(token(`semantic.${p.fg}`))
    const b = hex(token(`semantic.${p.bg}`))
    const ratio = contrast(f, b)
    const need = p.kind === 'text' ? 4.5 : 3
    const level = p.kind === 'text' ? wcagText(ratio) : ratio >= 3 ? 'AA' : 'Falla'
    const status = ratio >= need ? 'pass' : level === 'AA grande' ? 'large' : 'fail'
    return { ...p, f, b, ratio, level, status }
  }),
)
const failing = computed(() => rows.value.filter((r) => r.status !== 'pass' && !r.use.includes('exento')).length)
</script>

<template>
  <div>
    <p class="note adk-body-small">
      <strong>{{ failing }} de {{ rows.length }}</strong>
      <span>pares de uso real no alcanzan WCAG 2.1 AA (texto 4.5:1, UI 3:1). En kiosco la luz ambiente baja el contraste percibido: conviene apuntar a AAA (7:1) en texto de lectura.</span>
    </p>
    <div class="table-wrap">
      <table class="spec adk-body-small">
        <thead>
          <tr><th scope="col">Uso</th><th scope="col">Primer plano / fondo</th><th scope="col">Criterio</th><th scope="col">Resultado</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.fg + row.bg">
            <td>{{ row.use }}<span v-if="row.note" class="adk-utility-small row-note">{{ row.note }}</span></td>
            <td><code>{{ row.fg }}</code> / <code>{{ row.bg }}</code></td>
            <td>{{ row.kind === 'text' ? 'Texto 4.5' : 'UI 3' }}</td>
            <td>
              <span class="cell">
                <span class="sample" aria-hidden="true" :style="{ background: row.b, color: row.f, borderColor: row.kind === 'ui' ? row.f : undefined }">
                  <span v-if="row.kind === 'text'" class="adk-body-small-bold">Aa</span>
                </span>
                <span class="mono"><strong>{{ row.ratio.toFixed(2) }}</strong></span>
                <span class="badge adk-utility-small" :class="`badge--${row.status}`">{{ row.status === 'pass' ? row.level : row.status === 'large' ? 'Grande' : 'Falla' }}</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.cell { display: inline-flex; align-items: center; gap: var(--adk-spacing-8); white-space: nowrap; }
.sample { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 32px; border: 3px solid transparent; border-radius: var(--adk-radius-xs); }
.row-note { display: block; margin-top: var(--adk-spacing-4); color: var(--adk-text-secondary); }
</style>
