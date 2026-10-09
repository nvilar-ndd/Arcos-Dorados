<script setup lang="ts">
/**
 * Propuesta K8 de Convergencia/adk-archway.md: modo `kiosk` (y `tablet`) sobre Font/size y Font/line-height de ArchWay.
 * Los valores de ArchWay mobile salen de Archway/tokens/archway.tokens.json; kiosk y tablet son la propuesta.
 */
import { ref } from 'vue'

type Mode = 'mobile' | 'tablet' | 'kiosk'
const SIZE: Record<Mode, Record<string, number>> = {
  mobile: { xs: 12, s: 14, m: 16, l: 18, xl: 20, '2xl': 24, '3xl': 30, '4xl': 36 },
  tablet: { xs: 14, s: 16, m: 18, l: 22, xl: 28, '2xl': 32, '3xl': 40, '4xl': 48 },
  kiosk: { xs: 16, s: 22, m: 24, l: 28, xl: 40, '2xl': 48, '3xl': 60, '4xl': 80 },
}
const LH: Record<Mode, Record<string, number>> = {
  mobile: { s: 16, m: 20, l: 24, xl: 28, '2xl': 32, '3xl': 36, '4xl': 44 },
  tablet: { s: 20, m: 24, l: 28, xl: 36, '2xl': 40, '3xl': 48, '4xl': 56 },
  kiosk: { s: 24, m: 28, l: 32, xl: 44, '2xl': 52, '3xl': 64, '4xl': 80 },
}
/** Estilos de ArchWay: [nombre, size, line-height, peso, estilo ADK que reemplaza en kiosco] */
const STYLES: [string, string, string, number, string][] = [
  ['Display/Large Bold', '4xl', '4xl', 700, 'Display/Medium Bold 80/80'],
  ['Display/Medium Bold', '3xl', '3xl', 700, 'Headline/Extra Large Bold 60/64'],
  ['Heading/Large Bold', '2xl', '2xl', 700, 'Headline/Large Bold 48/52'],
  ['Heading/Medium Bold', 'xl', 'xl', 700, 'Headline/Medium Bold 40/44'],
  ['Heading/Small Bold', 'l', 'l', 700, 'Headline/Extra Small Bold 28/32'],
  ['Text/Body Large', 'm', 'l', 400, 'Body/Large 24/28 → 24/32'],
  ['Text/Body Medium', 's', 'm', 400, 'Body/Medium 22/26 → 22/28'],
  ['Text/Body Small', 'xs', 's', 400, 'Body/Small 16/20 → 16/24'],
  ['Label/Large', 'm', 'm', 400, 'Body/Large 24/28'],
  ['Label/Medium', 's', 's', 400, '22/24 (327 textos sin estilo)'],
  ['Label/Small', 'xs', 's', 400, 'Utility/Alert 16/20 → 16/24'],
]
const MODES: { id: Mode; label: string }[] = [
  { id: 'mobile', label: 'Mobile (ArchWay actual)' },
  { id: 'tablet', label: 'Tablet (propuesta)' },
  { id: 'kiosk', label: 'Kiosk (propuesta)' },
]
const mode = ref<Mode>('kiosk')
</script>

<template>
  <div>
    <fieldset class="modes">
      <legend class="adk-body-small-bold">Modo de <code>Font/*</code></legend>
      <label v-for="m in MODES" :key="m.id" class="mode adk-body-small" :class="{ 'is-on': mode === m.id }">
        <input v-model="mode" type="radio" name="type-mode" :value="m.id" />
        {{ m.label }}
      </label>
    </fieldset>

    <div class="table-wrap" role="region" aria-label="Escala por modo" tabindex="0">
      <table class="spec adk-body-small">
        <thead>
          <tr><th scope="col">Estilo ArchWay</th><th scope="col">Muestra</th><th scope="col">Mobile</th><th scope="col">Tablet</th><th scope="col">Kiosk</th><th scope="col">Reemplaza en ADK</th></tr>
        </thead>
        <tbody>
          <tr v-for="[name, s, l, w, adk] in STYLES" :key="name">
            <th scope="row" class="mono">{{ name }}</th>
            <td>
              <span class="sample" :style="{ fontSize: `${SIZE[mode][s]}px`, lineHeight: `${LH[mode][l]}px`, fontWeight: w, letterSpacing: mode === 'kiosk' || name.startsWith('D') || name.startsWith('H') ? '0px' : '0.25px' }">
                Elegí tu McCombo
              </span>
            </td>
            <td v-for="m in MODES" :key="m.id" class="mono" :class="{ 'is-current': m.id === mode }">{{ SIZE[m.id][s] }}/{{ LH[m.id][l] }}</td>
            <td class="desc">{{ adk }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.modes { display: flex; flex-wrap: wrap; gap: var(--adk-spacing-8); margin: 0 0 var(--adk-spacing-24); padding: 0; border: 0; }
.modes legend { margin: 0 0 var(--adk-spacing-8); padding: 0; }
.mode { display: inline-flex; align-items: center; gap: var(--adk-spacing-8); min-height: 48px; padding: 0 var(--adk-spacing-16); border: 1px solid var(--adk-border-default); border-radius: var(--adk-radius-full); cursor: pointer; }
.mode.is-on { border: 3px solid var(--adk-border-selected); background: var(--adk-background-subtle); font-weight: 700; }
.mode input { accent-color: var(--adk-text-primary); }
.mode:has(input:focus-visible) { outline: 2px solid var(--adk-border-strong); outline-offset: 2px; }
.sample { display: block; font-family: var(--adk-font-family); white-space: nowrap; }
td.is-current { font-weight: 700; background: var(--adk-background-subtle); }
</style>
