<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { under, token, type Token } from '../tokens'
import CopyToken from './CopyToken.vue'

const durations = computed(() => under('motion.duration'))
const easings = computed(() => under('motion.easing'))
const reducedDuration = String(token('motion.reduced.duration').value)
const pressScale = Number(token('motion.press.scale').value)

const ms = (t: Token): number => parseInt(String(t.value), 10)
const bezier = (t: Token): [number, number, number, number] => t.value as [number, number, number, number]

/** Multiplicador para ver las curvas en cámara lenta. */
const slow = ref(1)
/** Simula "Reducir movimiento" (o lo toma del sistema si ya está activo). */
const reduced = ref(false)
onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const playing = ref(false)
function play(): void {
  playing.value = !playing.value
}

const expanded = ref(false)

const curvePath = (c: [number, number, number, number]): string =>
  `M0,100 C${c[0] * 100},${100 - c[1] * 100} ${c[2] * 100},${100 - c[3] * 100} 100,0`
const label = (t: Token): string => t.figma.name
const usage = (t: Token): string => t.description.replace(`${t.figma.name}. `, '')
</script>

<template>
  <div class="motion" :class="{ 'is-reduced': reduced }" :style="{ '--slow': slow }">
    <div class="toolbar aw-label-medium" role="group" aria-label="Controles de reproducción">
      <button type="button" class="btn btn--primary aw-label-medium-bold" @click="play">
        {{ playing ? 'Volver al inicio' : 'Reproducir' }}
      </button>
      <fieldset class="seg">
        <legend class="aw-label-small">Velocidad</legend>
        <label v-for="s in [1, 3]" :key="s" class="seg__opt" :class="{ 'is-on': slow === s }">
          <input v-model="slow" type="radio" name="slow" :value="s" /> {{ s === 1 ? 'Real' : 'Cámara lenta ×3' }}
        </label>
      </fieldset>
      <label class="check"><input v-model="reduced" type="checkbox" /> Simular "Reducir movimiento"</label>
    </div>
    <p v-if="reduced" class="note note--warning aw-text-body-medium">
      <strong>Reducir movimiento</strong>
      <span>Las animaciones pasan a un fade de opacidad de {{ reducedDuration }}, sin desplazamiento ni escala.</span>
    </p>

    <section class="section">
      <h2 class="section__title aw-heading-large-bold">Duraciones</h2>
      <p class="section__lead aw-text-body-medium">Todas las pistas usan la curva Standard; sólo cambia el tiempo.</p>
      <ul class="tracks" role="list">
        <li v-for="d in durations" :key="d.id" class="track">
          <div class="track__meta">
            <p class="aw-label-medium-bold">{{ label(d) }} · {{ ms(d) }}ms</p>
            <CopyToken :value="`var(${d.cssVar})`" />
            <p class="aw-text-body-small track__desc">{{ d.description }}</p>
          </div>
          <div class="lane">
            <span
              class="dot"
              :class="{ 'is-on': playing }"
              :style="{ '--d': `var(${d.cssVar})`, '--e': 'var(--aw-motion-easing-standard)' }"
            />
          </div>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section__title aw-heading-large-bold">Curvas de aceleración</h2>
      <p class="section__lead aw-text-body-medium">Misma duración (slow, 400ms) para comparar cómo arranca y cómo frena cada curva.</p>
      <ul class="curves" role="list">
        <li v-for="e in easings" :key="e.id" class="curve">
          <svg class="curve__plot" viewBox="-6 -6 112 112" role="img" :aria-label="`Curva ${label(e)}`">
            <rect x="0" y="0" width="100" height="100" class="curve__frame" />
            <line x1="0" y1="100" x2="100" y2="0" class="curve__linear" />
            <path :d="curvePath(bezier(e))" class="curve__path" />
          </svg>
          <div class="lane lane--short">
            <span class="dot" :class="{ 'is-on': playing }" :style="{ '--d': 'var(--aw-motion-duration-slow)', '--e': `var(${e.cssVar})` }" />
          </div>
          <p class="aw-label-medium-bold">{{ label(e) }}</p>
          <p class="mono">cubic-bezier({{ bezier(e).join(', ') }})</p>
          <CopyToken :value="`var(${e.cssVar})`" />
          <p class="aw-text-body-small track__desc">{{ usage(e) }}</p>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section__title aw-heading-large-bold">Patrones</h2>
      <div class="patterns">
        <article class="pattern">
          <h3 class="aw-heading-small-bold">Scale &amp; Depth</h3>
          <p class="aw-text-body-small track__desc">Presioná la card: se encoge a {{ pressScale }} con duración fast y curva Standard.</p>
          <button type="button" class="press-card" :style="{ '--press': pressScale }" aria-label="Card de producto de ejemplo">
            <span class="press-card__img" aria-hidden="true" />
            <span class="aw-heading-small-bold">McCombo Cuarto de Libra</span>
            <span class="aw-text-body-small track__desc">Mantené presionado</span>
          </button>
        </article>
        <article class="pattern">
          <h3 class="aw-heading-small-bold">Golden Path</h3>
          <p class="aw-text-body-small track__desc">Shared element: la imagen del listado se convierte en el encabezado del detalle. 400ms, Standard.</p>
          <div class="golden">
            <button type="button" class="golden__item" :class="{ 'is-open': expanded }" :aria-expanded="expanded" @click="expanded = !expanded">
              <span class="golden__img" aria-hidden="true" />
              <span class="golden__title aw-label-medium-bold">{{ expanded ? 'Volver al listado' : 'Ver detalle' }}</span>
            </button>
            <div class="golden__rows" aria-hidden="true"><span /><span /><span /></div>
          </div>
        </article>
        <article class="pattern">
          <h3 class="aw-heading-small-bold">Move</h3>
          <p class="aw-text-body-small track__desc">Si el elemento recorre más de media pantalla → slow (400ms). Trayecto corto → moderate (250ms).</p>
          <div class="lane"><span class="dot" :class="{ 'is-on': playing }" :style="{ '--d': 'var(--aw-motion-duration-slow)', '--e': 'var(--aw-motion-easing-standard)' }" /></div>
          <div class="lane lane--short"><span class="dot" :class="{ 'is-on': playing }" :style="{ '--d': 'var(--aw-motion-duration-moderate)', '--e': 'var(--aw-motion-easing-standard)' }" /></div>
        </article>
      </div>
    </section>

    <section class="section">
      <h2 class="section__title aw-heading-large-bold">Reglas para el equipo</h2>
      <div class="table-wrap">
        <table class="spec aw-text-body-medium">
          <tbody>
            <tr><td><strong>Reducir movimiento</strong></td><td>Siempre disponible. Con la opción activa, todo pasa a un fade de opacidad de {{ reducedDuration }}.</td></tr>
            <tr><td><strong>No amontonar</strong></td><td>No animar más de 2 o 3 cosas al mismo tiempo en pantalla.</td></tr>
            <tr><td><strong>Bounce sutil</strong></td><td>Un rebote fuerte se ve infantil o poco profesional: el spring se mantiene muy sutil.</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.toolbar { display: flex; flex-wrap: wrap; align-items: flex-end; gap: var(--aw-spacing-24); margin: 0 0 var(--aw-spacing-32); }
.btn {
  min-height: 48px;
  padding: 0 var(--aw-spacing-24);
  border: 0;
  border-radius: var(--aw-radius-s);
  cursor: pointer;
}
.btn--primary { background: var(--aw-button-primary); color: var(--aw-button-text-enabled); }
.btn--primary:active { background: var(--aw-button-primary-pressed); }
.btn:focus-visible { outline: 2px solid var(--aw-link-default); outline-offset: 2px; }
.seg { display: flex; flex-wrap: wrap; gap: var(--aw-spacing-4); margin: 0; padding: 0; border: 0; }
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

.tracks { display: grid; gap: var(--aw-spacing-16); margin: 0; padding: 0; list-style: none; }
.track {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: var(--aw-spacing-24);
  align-items: center;
  padding: var(--aw-spacing-16) 0;
  border-bottom: 1px solid var(--aw-border-subtle);
}
.track__meta p { margin: 0 0 var(--aw-spacing-4); }
.track__desc { margin: var(--aw-spacing-4) 0 0; color: var(--aw-text-secondary); }

.lane {
  position: relative;
  height: 40px;
  margin: var(--aw-spacing-8) 0;
  border-radius: var(--aw-radius-xxxl);
  background: var(--aw-layer-02);
}
.lane--short { width: 50%; }
.dot {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--aw-layer-brand);
  box-shadow: var(--aw-shadow-shallow-m-elev-2);
  transition: left calc(var(--d) * var(--slow)) var(--e);
}
.dot.is-on { left: calc(100% - 36px); }
.is-reduced .dot { transition: opacity var(--aw-motion-reduced-duration) linear; left: 4px; }
.is-reduced .dot.is-on { left: calc(100% - 36px); }

.curves { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--aw-spacing-32); margin: 0; padding: 0; list-style: none; }
.curve p { margin: var(--aw-spacing-4) 0 0; }
.curve .lane--short { width: 100%; }
.curve__plot { width: 100%; max-width: 200px; height: auto; overflow: visible; }
.curve__frame { fill: var(--aw-layer-02); stroke: var(--aw-border-subtle); }
.curve__linear { stroke: var(--aw-border-default); stroke-dasharray: 3 3; }
.curve__path { fill: none; stroke: var(--aw-text-primary); stroke-width: 3; stroke-linecap: round; }

.patterns { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--aw-spacing-32); }
.pattern h3 { margin: 0; }
.press-card {
  display: grid;
  gap: var(--aw-spacing-8);
  width: 100%;
  margin-top: var(--aw-spacing-16);
  padding: var(--aw-spacing-16);
  border: 0;
  border-radius: var(--aw-radius-m);
  background: var(--aw-layer-01);
  box-shadow: var(--aw-shadow-shallow-m-elev-2);
  color: var(--aw-text-primary);
  text-align: left;
  cursor: pointer;
  transition: transform calc(var(--aw-motion-duration-fast) * var(--slow)) var(--aw-motion-easing-standard);
}
.press-card:active { transform: scale(var(--press)); }
.press-card:focus-visible { outline: 2px solid var(--aw-link-default); outline-offset: 2px; }
.is-reduced .press-card { transition: opacity var(--aw-motion-reduced-duration) linear; }
.is-reduced .press-card:active { transform: none; opacity: 0.8; }
.press-card__img { height: 96px; border-radius: var(--aw-radius-s); background: var(--aw-gradient-loyalty-ba); }

.golden {
  position: relative;
  height: 280px;
  margin-top: var(--aw-spacing-16);
  overflow: hidden;
  border: 8px solid var(--aw-layer-06);
  border-radius: 28px;
  background: var(--aw-layer-01);
}
.golden__item {
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 96px;
  height: 96px;
  padding: var(--aw-spacing-8);
  overflow: hidden;
  border: 0;
  border-radius: var(--aw-radius-m);
  background: var(--aw-layer-brand);
  color: var(--aw-text-primary);
  text-align: left;
  cursor: pointer;
  transition-property: top, left, width, height, border-radius;
  transition-duration: calc(var(--aw-motion-duration-slow) * var(--slow));
  transition-timing-function: var(--aw-motion-easing-standard);
}
.golden__item.is-open { top: 0; left: 0; width: 100%; height: 160px; border-radius: 0; }
.golden__item:focus-visible { outline: 2px solid var(--aw-link-default); outline-offset: -4px; }
.is-reduced .golden__item { transition: opacity var(--aw-motion-reduced-duration) linear; }
.golden__img { position: absolute; inset: 8px 8px 32px; border-radius: var(--aw-radius-s); background: var(--aw-gradient-loyalty-ab); opacity: 0.85; }
.golden__title { position: relative; }
.golden__rows { position: absolute; top: 128px; left: 16px; right: 16px; display: grid; gap: var(--aw-spacing-8); }
.golden__rows span { height: 24px; border-radius: var(--aw-radius-xs); background: var(--aw-layer-03); }

@media (max-width: 720px) {
  .track { grid-template-columns: 1fr; }
}
</style>
