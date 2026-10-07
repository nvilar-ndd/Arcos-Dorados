<script setup lang="ts">
import { computed, ref } from 'vue'
import { token, cssVarOf } from '../tokens'

interface ColumnsValue { count: number; gutter: string; margin: string; alignment: string }
interface BaselineValue { size: string }

const columns = token('grid.columns').value as ColumnsValue
const baseline = token('grid.baseline').value as BaselineValue
const refId = (r: string): string => r.replace(/^\{|\}$/g, '')
const px = (r: string): number => parseInt(String(token(refId(r)).resolved), 10)

const gutterVar = `var(${cssVarOf(refId(columns.gutter))})`
const marginVar = `var(${cssVarOf(refId(columns.margin))})`
const baselineVar = `var(${cssVarOf(refId(baseline.size))})`

const WIDTHS = [360, 393, 412, 440] as const
const width = ref<number>(412)
const showColumns = ref(true)
const showBaseline = ref(true)

const colWidth = computed(() => {
  const g = px(columns.gutter)
  const m = px(columns.margin)
  return (width.value - 2 * m - (columns.count - 1) * g) / columns.count
})
</script>

<template>
  <div class="grid-demo">
    <div class="controls aw-label-medium" role="group" aria-label="Controles de la grilla">
      <fieldset class="seg">
        <legend class="aw-label-small">Ancho del viewport (412 = Master Frame)</legend>
        <label v-for="w in WIDTHS" :key="w" class="seg__opt" :class="{ 'is-on': width === w }">
          <input v-model="width" type="radio" name="vw" :value="w" /> {{ w }}
        </label>
      </fieldset>
      <label class="check"><input v-model="showColumns" type="checkbox" /> Columnas (Aw_Layout/col)</label>
      <label class="check"><input v-model="showBaseline" type="checkbox" /> Baseline 8px (Aw_Layout/Grid)</label>
    </div>

    <div class="stage">
      <div class="phone" :style="{ width: `${width}px` }">
        <div v-if="showBaseline" class="baseline" :style="{ backgroundSize: `${baselineVar} ${baselineVar}` }" />
        <div
          v-if="showColumns"
          class="cols"
          :style="{ paddingInline: marginVar, columnGap: gutterVar, gridTemplateColumns: `repeat(${columns.count}, 1fr)` }"
        >
          <span v-for="n in columns.count" :key="n" class="col" />
        </div>
        <div class="content" :style="{ paddingInline: marginVar }">
          <div class="mock mock--header" />
          <div class="mock-row" :style="{ columnGap: gutterVar }">
            <div class="mock mock--card" /><div class="mock mock--card" />
          </div>
          <div class="mock mock--banner" />
          <div class="mock-row mock-row--4" :style="{ columnGap: gutterVar }">
            <div v-for="n in 4" :key="n" class="mock mock--tile" />
          </div>
        </div>
      </div>

      <dl class="readout aw-text-body-medium">
        <div><dt>Master Frame</dt><dd class="mono">412 × 912 · fold 720</dd></div>
        <div><dt>Columnas</dt><dd>{{ columns.count }} · {{ columns.alignment }}</dd></div>
        <div><dt>Margen lateral</dt><dd class="mono">{{ px(columns.margin) }}px · <code>{{ marginVar }}</code></dd></div>
        <div><dt>Gutter</dt><dd class="mono">{{ px(columns.gutter) }}px · <code>{{ gutterVar }}</code></dd></div>
        <div><dt>Ancho de columna</dt><dd class="mono">({{ width }} − 2×{{ px(columns.margin) }} − {{ columns.count - 1 }}×{{ px(columns.gutter) }}) / {{ columns.count }} = <strong>{{ colWidth.toFixed(2) }}px</strong></dd></div>
        <div><dt>Baseline</dt><dd class="mono">{{ px(baseline.size) }}px · <code>{{ baselineVar }}</code></dd></div>
      </dl>
    </div>
  </div>
</template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: flex-end; gap: var(--aw-spacing-24); margin: 0 0 var(--aw-spacing-24); }
.seg { display: flex; gap: var(--aw-spacing-4); margin: 0; padding: 0; border: 0; }
.seg legend { width: 100%; margin: 0 0 var(--aw-spacing-4); color: var(--aw-text-secondary); }
.seg__opt {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 var(--aw-spacing-16);
  border: 1px solid var(--aw-chip-enabled-stroke);
  border-radius: var(--aw-radius-xxxl);
  background: var(--aw-chip-enabled-bg);
  cursor: pointer;
}
.seg__opt.is-on { border-color: var(--aw-chip-selected-bg); background: var(--aw-chip-selected-bg); color: var(--aw-chip-selected-text); }
.seg__opt input { position: absolute; opacity: 0; pointer-events: none; }
.seg__opt:focus-within { outline: 2px solid var(--aw-link-default); outline-offset: 2px; }
.check { display: inline-flex; align-items: center; gap: var(--aw-spacing-8); min-height: 40px; cursor: pointer; }
.check input { width: 20px; height: 20px; accent-color: var(--aw-text-primary); }

.stage { display: flex; flex-wrap: wrap; gap: var(--aw-spacing-40); align-items: flex-start; }
.phone {
  position: relative;
  height: 560px;
  overflow: hidden;
  border: 8px solid var(--aw-layer-06);
  border-radius: 36px;
  background: var(--aw-layer-01);
  transition: width 200ms ease;
}
.baseline {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgb(255 0 0 / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(255 0 0 / 0.1) 1px, transparent 1px);
  pointer-events: none;
}
.cols { position: absolute; inset: 0; display: grid; pointer-events: none; z-index: 2; }
.col { background: rgb(255 0 0 / 0.1); }
.content { position: relative; display: grid; gap: var(--aw-spacing-16); padding-block: var(--aw-spacing-24); }
.mock { border-radius: var(--aw-radius-m); background: var(--aw-layer-03); }
.mock--header { height: 56px; background: var(--aw-layer-brand); }
.mock--card { height: 160px; }
.mock--banner { height: 112px; background: var(--aw-gradient-loyalty-ab); }
.mock--tile { height: 72px; border-radius: var(--aw-radius-s); }
.mock-row { display: grid; grid-template-columns: 1fr 1fr; }
.mock-row--4 { grid-template-columns: repeat(4, 1fr); }

.readout { display: grid; gap: var(--aw-spacing-8); margin: 0; min-width: 280px; flex: 1; }
.readout div { display: grid; grid-template-columns: 160px 1fr; gap: var(--aw-spacing-8); padding: var(--aw-spacing-8) 0; border-bottom: 1px solid var(--aw-border-subtle); }
.readout dt { color: var(--aw-text-secondary); }
.readout dd { margin: 0; }
</style>
