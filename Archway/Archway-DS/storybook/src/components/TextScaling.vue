<script setup lang="ts">
/**
 * Simulador del tamaño de letra del sistema (Figma › Typography › Handoff, acordado con iOS y Android el 16/10/2026).
 * Display, Heading y Label crecen hasta +30 % (iOS máx. fuera de accesibilidad · Android fontScale 1,3);
 * Body crece hasta el doble (fontScale 2,0). Los tamaños base salen de los tokens Font/*.
 */
import { computed, ref } from 'vue'
import { under, token, type Token } from '../tokens'

interface TypeValue { fontSize: string; lineHeight: string }

/** Tope por grupo (rol del estilo en el JSON: display · heading · text · label). */
const CAP: Record<string, number> = { display: 1.3, heading: 1.3, label: 1.3, text: 2 }
const SAMPLES = ['Label/Label Small', 'Label/Label Large', 'Heading/Heading Small Bold', 'Text/Body Medium', 'Text/Body Large']

const scale = ref(1)
const STEPS = [1, 1.15, 1.3, 1.5, 1.75, 2]

const px = (ref: string): number => parseFloat(String(token(ref.replace(/^\{|\}$/g, '')).resolved))

const rows = computed(() =>
  under('typography')
    .filter((t: Token) => SAMPLES.includes(t.figma.name))
    .sort((a, b) => SAMPLES.indexOf(a.figma.name) - SAMPLES.indexOf(b.figma.name))
    .map((t) => {
      const v = t.value as TypeValue
      const role = t.path[1]
      const cap = CAP[role] ?? 1
      const applied = Math.min(scale.value, cap)
      const size = px(v.fontSize)
      const lh = px(v.lineHeight)
      return {
        id: t.id,
        name: t.figma.name.split('/')[1],
        className: `aw-${t.path.slice(1).join('-')}`,
        cap,
        capped: scale.value > cap,
        base: size,
        size: Math.round(size * applied * 10) / 10,
        lineHeight: Math.round(lh * applied * 10) / 10,
      }
    }),
)

const label = computed(() => `${Math.round(scale.value * 100)} %`)
</script>

<template>
  <div class="scaling">
    <div class="scaling__control">
      <label for="aw-text-scale" class="aw-label-medium-bold">Tamaño de letra del sistema</label>
      <input
        id="aw-text-scale"
        v-model.number="scale"
        type="range"
        min="1"
        max="2"
        step="0.05"
        :aria-valuetext="label"
        list="aw-text-scale-steps"
      />
      <datalist id="aw-text-scale-steps">
        <option v-for="s in STEPS" :key="s" :value="s" />
      </datalist>
      <output for="aw-text-scale" class="aw-label-medium mono" aria-live="polite">{{ label }}</output>
    </div>

    <article v-for="r in rows" :key="r.id" class="scaling__row">
      <p
        :class="r.className"
        class="scaling__sample"
        :style="{ fontSize: `${r.size}px`, lineHeight: `${r.lineHeight}px` }"
      >
        {{ r.name }} — Agregar al pedido
      </p>
      <p class="scaling__spec aw-label-small">
        <span class="mono">{{ r.base }} → {{ r.size }}px</span>
        <span>Tope {{ r.cap === 2 ? 'el doble' : '+30 %' }}</span>
        <strong v-if="r.capped" class="scaling__badge">En el tope</strong>
      </p>
    </article>
  </div>
</template>

<style scoped>
.scaling__control {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--aw-spacing-16);
  margin: 0 0 var(--aw-spacing-24);
}
.scaling__control input { flex: 1 1 240px; min-height: var(--aw-spacing-48); accent-color: var(--aw-text-primary); }
.scaling__control input:focus-visible { outline: 2px solid var(--aw-border-strong); outline-offset: 2px; }
.scaling__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  align-items: center;
  gap: var(--aw-spacing-8) var(--aw-spacing-32);
  padding: var(--aw-spacing-16) 0;
  border-bottom: 1px solid var(--aw-border-subtle);
}
.scaling__sample { margin: 0; overflow-wrap: anywhere; }
.scaling__spec { display: flex; flex-wrap: wrap; gap: var(--aw-spacing-8); margin: 0; color: var(--aw-text-secondary); }
.scaling__badge {
  padding: 0 var(--aw-spacing-8);
  border-radius: var(--aw-radius-xs);
  background: var(--aw-surface-inverse);
  color: var(--aw-text-on-color);
}
@media (max-width: 820px) { .scaling__row { grid-template-columns: 1fr; } }
</style>
