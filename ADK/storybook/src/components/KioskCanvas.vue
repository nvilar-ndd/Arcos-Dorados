<script setup lang="ts">
/**
 * Lienzo de kiosco 1080 × 1920 armado con los tokens de layout de ADK (foundations/layout.md).
 * Es una ilustración del template (Figma › templete / UI Shell), no un componente de producción.
 */
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ zones?: boolean; safe?: 0 | 800 | 960; scale?: number }>(), {
  zones: true,
  safe: 0,
  scale: 0.42,
})

const showZones = ref(props.zones)
const safeArea = ref<0 | 800 | 960>(props.safe)
const zoom = ref(props.scale)

const NAV = ['Hamburguesas', 'McCombos', 'Pollo', 'Acompañamientos', 'Bebidas', 'Postres', 'McCafé']
const PRODUCTS = ['Big Mac', 'Cuarto de Libra', 'McNífica', 'Doble Cheddar', 'McPollo', 'Tasty Doble']

const frame = computed(() => ({ width: `${1080 * zoom.value}px`, height: `${1920 * zoom.value}px` }))
</script>

<template>
  <div class="kc">
    <div class="kc__controls adk-body-small" role="group" aria-label="Capas del lienzo">
      <label class="ctrl"><input v-model="showZones" type="checkbox" /> Zonas y medidas</label>
      <fieldset class="ctrl-group">
        <legend class="adk-body-small-bold">Área accesible</legend>
        <label class="ctrl"><input v-model="safeArea" type="radio" name="safe" :value="0" /> Oculta</label>
        <label class="ctrl"><input v-model="safeArea" type="radio" name="safe" :value="800" /> 1080 × 800</label>
        <label class="ctrl"><input v-model="safeArea" type="radio" name="safe" :value="960" /> 1080 × 960</label>
      </fieldset>
      <label class="ctrl">Escala
        <select v-model.number="zoom">
          <option :value="0.3">30 %</option>
          <option :value="0.42">42 %</option>
          <option :value="0.6">60 %</option>
          <option :value="1">100 % (tamaño real)</option>
        </select>
      </label>
    </div>

    <figure class="kc__figure">
      <div class="kc__frame" :style="frame">
        <div class="k" :style="{ transform: `scale(${zoom})` }" aria-hidden="true">
          <!-- HEADER -->
          <header class="k-header">
            <div class="k-logo adk-body-small-bold">Logo<br />152 × 112</div>
            <div>
              <p class="adk-headline-large-bold k-m0">Hamburguesas</p>
              <p class="adk-headline-extra-small k-m0 k-secondary">Elegí tu favorita</p>
            </div>
          </header>

          <!-- NAV -->
          <nav class="k-nav">
            <div v-for="(n, i) in NAV" :key="n" class="k-nav__item adk-body-medium" :class="{ 'is-selected': i === 0 }">{{ n }}</div>
          </nav>

          <!-- CONTENIDO -->
          <main class="k-content">
            <section class="k-banner">
              <p class="adk-headline-small-bold k-m0">¡Llegó MiMcDonald's!</p>
              <p class="adk-body-large k-m0">Sumá puntos con cada pedido</p>
            </section>
            <section class="k-grid">
              <article v-for="p in PRODUCTS" :key="p" class="k-card">
                <div class="k-card__img" />
                <span class="k-badge adk-body-small-bold">Nuevo</span>
                <p class="adk-body-medium-bold k-m0">{{ p }}</p>
                <p class="adk-body-large k-m0">$ 4.500</p>
              </article>
            </section>
          </main>

          <!-- SCROLL -->
          <div class="k-scroll"><div class="k-scroll__thumb" /></div>

          <!-- FOOTER -->
          <footer class="k-footer">
            <div class="k-user adk-body-large-bold">Hola, Ana<br /><span class="adk-body-medium">1.250 pts</span></div>
            <div class="k-cart">
              <div class="k-points adk-body-small">Podrías sumar 40 pts con este pedido</div>
              <div class="k-cart__bar">
                <span class="k-cart__badge adk-body-large-bold">3</span>
                <span class="adk-body-large-bold">Total $ 13.500</span>
                <span class="k-btn adk-body-large">Ver pedido</span>
              </div>
            </div>
          </footer>

          <!-- CAPAS -->
          <template v-if="showZones">
            <div class="z z--header"><span>Header · 1080 × 192</span></div>
            <div class="z z--nav"><span>Nav · 248</span></div>
            <div class="z z--gap"><span>48</span></div>
            <div class="z z--content"><span>Contenido · 656 · módulos cada 56</span></div>
            <div class="z z--scroll"><span>16</span></div>
            <div class="z z--footer"><span>Footer flotante · 248 (y 1672)</span></div>
          </template>
          <div v-if="safeArea" class="safe" :style="{ height: `${safeArea}px` }">
            <span>Área accesible · 1080 × {{ safeArea }}</span>
          </div>
        </div>
      </div>
      <figcaption class="adk-utility-small kc__caption">
        Lienzo 1080 × 1920 armado con <code>--adk-layout-*</code>: margen 32 · nav 248 · gap 48 · contenido 656 · margen derecho 96 con scroll de 16.
        <template v-if="safeArea"> Lo que tenga que poder alcanzar una persona en silla de ruedas, de baja estatura o un niño tiene que caer dentro del área marcada.</template>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.kc__controls { display: flex; flex-wrap: wrap; align-items: center; gap: var(--adk-spacing-16) var(--adk-spacing-24); margin: 0 0 var(--adk-spacing-24); }
.ctrl { display: inline-flex; align-items: center; gap: var(--adk-spacing-8); min-height: 48px; cursor: pointer; }
.ctrl input { width: 20px; height: 20px; accent-color: var(--adk-text-primary); }
.ctrl select { min-height: 40px; padding: 0 var(--adk-spacing-8); border: 1px solid var(--adk-border-default); border-radius: var(--adk-radius-xs); font: inherit; }
.ctrl-group { display: inline-flex; flex-wrap: wrap; align-items: center; gap: var(--adk-spacing-16); margin: 0; padding: 0; border: 0; }
.ctrl-group legend { float: left; margin-right: var(--adk-spacing-8); padding: 0; }
.kc__figure { margin: 0; }
.kc__frame { position: relative; overflow: hidden; border: 1px solid var(--adk-border-default); border-radius: var(--adk-radius-s); background: var(--adk-background-default); }
.kc__caption { max-width: 80ch; margin-top: var(--adk-spacing-8); color: var(--adk-text-secondary); }

/* ---- Lienzo a escala 1:1 (se escala con transform) ---- */
.k {
  --x-content: calc(var(--adk-layout-margin-left) + var(--adk-layout-nav-width) + var(--adk-layout-column-gap));
  --y-footer: calc(var(--adk-layout-screen-height) - var(--adk-layout-footer-height));
  position: absolute;
  inset: 0 auto auto 0;
  width: var(--adk-layout-screen-width);
  height: var(--adk-layout-screen-height);
  transform-origin: 0 0;
  background: var(--adk-background-default);
  color: var(--adk-text-primary);
  font-family: var(--adk-font-family);
}
.k-m0 { margin: 0; }
.k-secondary { color: var(--adk-text-secondary); }

.k-header {
  position: absolute; inset: 0 0 auto 0; height: var(--adk-layout-header-height);
  display: flex; align-items: flex-end; gap: var(--adk-spacing-96);
  padding: var(--adk-spacing-104) var(--adk-spacing-80) var(--adk-spacing-24);
  background: var(--adk-background-default);
}
.k-logo { display: grid; place-items: center; flex: none; width: 152px; height: 112px; margin-bottom: calc(-1 * var(--adk-spacing-8)); border: 2px dashed var(--adk-border-default); border-radius: var(--adk-radius-s); color: var(--adk-text-secondary); text-align: center; }

.k-nav { position: absolute; top: calc(var(--adk-layout-header-height) + var(--adk-spacing-24)); left: var(--adk-layout-margin-left); width: var(--adk-layout-nav-width); display: grid; gap: var(--adk-spacing-8); }
.k-nav__item { display: flex; align-items: center; height: 56px; padding: 0 var(--adk-spacing-16); border: var(--adk-border-width-default) solid transparent; border-radius: var(--adk-radius-s); }
.k-nav__item.is-selected { border: var(--adk-border-width-selected) solid var(--adk-border-selected); background: var(--adk-background-subtle); font-weight: 700; }

.k-content { position: absolute; top: calc(var(--adk-layout-header-height) + var(--adk-spacing-24)); left: var(--x-content); width: var(--adk-layout-content-width); display: grid; gap: var(--adk-layout-module-gap); }
.k-banner { display: grid; align-content: center; gap: var(--adk-spacing-8); height: 200px; padding: var(--adk-spacing-24); border-radius: var(--adk-radius-s); background: var(--adk-color-tertiary-fuchsia); color: var(--adk-text-on-color); box-shadow: var(--adk-shadow-bordered-down); }
.k-grid { display: grid; grid-template-columns: repeat(3, 208px); gap: var(--adk-spacing-16); }
.k-card { position: relative; display: grid; align-content: start; gap: var(--adk-spacing-4); height: 312px; padding: var(--adk-spacing-8); border: var(--adk-border-width-default) solid var(--adk-border-subtle); border-radius: var(--adk-radius-s); }
.k-card__img { height: 176px; margin-bottom: var(--adk-spacing-8); border-radius: var(--adk-radius-xs); background: var(--adk-color-illustration-neutral-grey); }
.k-badge { position: absolute; top: var(--adk-spacing-16); left: var(--adk-spacing-16); display: inline-flex; align-items: center; height: 32px; padding: 0 var(--adk-spacing-16); border-radius: var(--adk-radius-full); background: var(--adk-badge-new); }

.k-scroll { position: absolute; top: calc(var(--adk-layout-header-height) + var(--adk-spacing-24)); left: calc(var(--adk-layout-screen-width) - var(--adk-spacing-32) - var(--adk-layout-scrollbar-width)); width: var(--adk-layout-scrollbar-width); height: calc(var(--y-footer) - var(--adk-layout-header-height) - var(--adk-spacing-48)); border-radius: var(--adk-radius-l); background: var(--adk-scroll-track); }
.k-scroll__thumb { height: 30%; border-radius: var(--adk-radius-l); background: var(--adk-scroll-thumb); }

.k-footer { position: absolute; top: var(--y-footer); left: 0; width: 100%; height: var(--adk-layout-footer-height); display: flex; gap: var(--adk-layout-column-gap); align-items: flex-end; padding: 0 0 var(--adk-spacing-16) var(--adk-layout-margin-left); background: var(--adk-background-default); box-shadow: var(--adk-shadow-bordered-up); }
.k-user { display: grid; align-content: center; width: var(--adk-layout-nav-width); height: 232px; padding: var(--adk-spacing-24); border-radius: var(--adk-radius-s); background: var(--adk-background-brand); }
.k-cart { display: grid; gap: var(--adk-spacing-16); width: var(--adk-layout-content-width); }
.k-points { display: flex; align-items: center; height: 48px; padding: 0 var(--adk-spacing-16); border-radius: var(--adk-radius-s); background: var(--adk-background-subtle); }
.k-cart__bar { display: flex; align-items: center; gap: var(--adk-spacing-16); height: 80px; }
.k-cart__badge { display: grid; place-items: center; width: 64px; height: 56px; border-radius: var(--adk-radius-s); background: var(--adk-background-subtle); }
.k-btn { display: grid; place-items: center; height: 80px; margin-left: auto; padding: 0 var(--adk-spacing-48); border: var(--adk-border-width-default) solid var(--adk-button-primary-stroke); border-radius: var(--adk-radius-xs); background: var(--adk-button-primary); color: var(--adk-button-text); }

/* ---- Capas de medidas (colores de la paleta tertiary, sólo para documentar) ---- */
.z { position: absolute; display: flex; align-items: flex-start; justify-content: flex-start; border: 4px dashed var(--adk-color-secondary-blue); background: color-mix(in srgb, var(--adk-color-tertiary-light-blue) 18%, transparent); pointer-events: none; }
.z span { padding: var(--adk-spacing-8) var(--adk-spacing-16); background: var(--adk-color-tertiary-dark-blue); color: var(--adk-text-on-color); font: 700 28px/32px var(--adk-font-family); }
.z--header { inset: 0 0 auto 0; height: var(--adk-layout-header-height); }
.z--nav, .z--gap, .z--content, .z--scroll { align-items: flex-end; }
.z--nav { top: var(--adk-layout-header-height); left: var(--adk-layout-margin-left); width: var(--adk-layout-nav-width); height: calc(var(--y-footer) - var(--adk-layout-header-height)); }
.z--gap { top: var(--adk-layout-header-height); left: calc(var(--adk-layout-margin-left) + var(--adk-layout-nav-width)); width: var(--adk-layout-column-gap); height: calc(var(--y-footer) - var(--adk-layout-header-height)); border-color: var(--adk-color-tertiary-fuchsia); background: transparent; }
.z--gap span { background: var(--adk-color-tertiary-fuchsia); padding: var(--adk-spacing-8) var(--adk-spacing-4); }
.z--content { top: var(--adk-layout-header-height); left: var(--x-content); width: var(--adk-layout-content-width); height: calc(var(--y-footer) - var(--adk-layout-header-height)); }
.z--scroll { top: var(--adk-layout-header-height); left: calc(var(--adk-layout-screen-width) - var(--adk-spacing-32) - var(--adk-layout-scrollbar-width)); width: var(--adk-layout-scrollbar-width); height: calc(var(--y-footer) - var(--adk-layout-header-height)); border-width: 2px; }
.z--scroll span { padding: var(--adk-spacing-4); font-size: 20px; }
.z--footer { top: var(--y-footer); left: 0; width: 100%; height: var(--adk-layout-footer-height); }

.safe { position: absolute; left: 0; bottom: 0; width: 100%; display: flex; align-items: flex-start; justify-content: center; padding-top: var(--adk-spacing-24); border-top: 6px solid var(--adk-color-tertiary-green); background: repeating-linear-gradient(135deg, color-mix(in srgb, var(--adk-color-tertiary-green) 22%, transparent) 0 24px, color-mix(in srgb, var(--adk-color-tertiary-green) 8%, transparent) 24px 48px); pointer-events: none; }
.safe span { padding: var(--adk-spacing-8) var(--adk-spacing-24); border-radius: var(--adk-radius-full); background: var(--adk-color-tertiary-green); color: var(--adk-text-on-color); font: 700 40px/44px var(--adk-font-family); }
</style>
