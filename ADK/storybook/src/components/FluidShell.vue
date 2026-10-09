<script setup lang="ts">
/**
 * PROPUESTA (Convergencia/adk-archway.md § Formatos): el mismo shell se adapta con container queries
 * a kiosco (vertical ≥ 1024), kiosco chico (vertical 768–1023) y tablet (horizontal).
 * Wireframe: sólo estructura, sin contenido real.
 */
defineProps<{ width: number; height: number; scale: number; label: string }>()
const NAV = ['Hamburguesas', 'McCombos', 'Pollo', 'Bebidas', 'Postres', 'McCafé']
</script>

<template>
  <figure class="fs">
    <div class="fs__frame" :style="{ width: `${width * scale}px`, height: `${height * scale}px` }">
      <div class="fs__screen" :style="{ width: `${width}px`, height: `${height}px`, transform: `scale(${scale})` }" aria-hidden="true">
        <div class="s">
          <header class="s-header"><span class="s-logo" /><span class="s-title">Hamburguesas</span></header>
          <nav class="s-nav"><span v-for="(n, i) in NAV" :key="n" class="s-nav__item" :class="{ 'is-on': i === 0 }">{{ n }}</span></nav>
          <main class="s-content">
            <div class="s-banner" />
            <div class="s-grid"><span v-for="i in 9" :key="i" class="s-card" /></div>
          </main>
          <aside class="s-cart"><span class="s-cart__title">Tu pedido</span><span class="s-line" /><span class="s-line" /><span class="s-line" /><span class="s-cta">Pagar</span></aside>
          <footer class="s-footer"><span class="s-user" /><span class="s-bar"><span class="s-cta">Ver pedido</span></span></footer>
          <div class="s-safe" />
        </div>
      </div>
    </div>
    <figcaption class="adk-body-small-bold fs__label">{{ label }} <span class="adk-utility-small mono">{{ width }} × {{ height }}</span></figcaption>
  </figure>
</template>

<style scoped>
.fs { display: grid; gap: var(--adk-spacing-8); align-content: start; margin: 0; }
.fs__frame { position: relative; overflow: hidden; border: 1px solid var(--adk-border-default); border-radius: var(--adk-radius-s); background: var(--adk-background-default); }
.fs__screen { position: absolute; inset: 0 auto auto 0; transform-origin: 0 0; container-type: size; container-name: screen; font-family: var(--adk-font-family); color: var(--adk-text-primary); }
.fs__label span { margin-left: var(--adk-spacing-8); color: var(--adk-text-secondary); font-weight: 400; }

/* ---------- Kiosk (vertical ≥ 1024): layout actual ---------- */
.s {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: var(--adk-layout-nav-width) minmax(0, 1fr);
  grid-template-rows: var(--adk-layout-header-height) minmax(0, 1fr) var(--adk-layout-footer-height);
  grid-template-areas: 'header header' 'nav content' 'footer footer';
  column-gap: var(--adk-layout-column-gap);
  padding: 0 var(--adk-layout-margin-right) 0 var(--adk-layout-margin-left);
}
.s-header { grid-area: header; display: flex; align-items: flex-end; gap: var(--adk-spacing-48); margin: 0 calc(-1 * var(--adk-layout-margin-right)) 0 calc(-1 * var(--adk-layout-margin-left)); padding: 0 var(--adk-spacing-80) var(--adk-spacing-24); }
.s-logo { width: 152px; height: 112px; border-radius: var(--adk-radius-s); background: var(--adk-scroll-track); }
.s-title { font-size: 48px; line-height: 52px; font-weight: 700; }
.s-nav { grid-area: nav; display: grid; align-content: start; gap: var(--adk-spacing-8); padding-top: var(--adk-spacing-24); }
.s-nav__item { display: flex; align-items: center; height: 56px; padding: 0 var(--adk-spacing-16); border-radius: var(--adk-radius-s); font-size: 22px; white-space: nowrap; }
.s-nav__item.is-on { border: 3px solid var(--adk-border-selected); background: var(--adk-background-subtle); font-weight: 700; }
.s-content { grid-area: content; display: grid; align-content: start; gap: var(--adk-layout-module-gap); padding-top: var(--adk-spacing-24); overflow: hidden; }
.s-banner { aspect-ratio: 656 / 200; border-radius: var(--adk-radius-s); background: var(--adk-color-tertiary-fuchsia); }
.s-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--adk-spacing-16); }
.s-card { aspect-ratio: 208 / 312; border: 1px solid var(--adk-border-subtle); border-radius: var(--adk-radius-s); background: linear-gradient(var(--adk-color-illustration-neutral-grey) 0 56%, transparent 56%); }
.s-cart { display: none; }
.s-footer { grid-area: footer; display: flex; align-items: flex-end; gap: var(--adk-layout-column-gap); margin: 0 calc(-1 * var(--adk-layout-margin-right)) 0 calc(-1 * var(--adk-layout-margin-left)); padding: 0 var(--adk-layout-margin-right) var(--adk-spacing-16) var(--adk-layout-margin-left); box-shadow: var(--adk-shadow-bordered-up); background: var(--adk-background-default); }
.s-user { flex: none; width: var(--adk-layout-nav-width); height: 232px; border-radius: var(--adk-radius-s); background: var(--adk-background-brand); }
.s-bar { display: flex; flex: 1; justify-content: flex-end; align-items: center; height: 80px; }
.s-cta { display: grid; place-items: center; height: 80px; padding: 0 var(--adk-spacing-48); border: 1px solid var(--adk-button-primary-stroke); border-radius: var(--adk-radius-xs); background: var(--adk-button-primary); font-size: 24px; }
.s-safe { position: absolute; inset: auto 0 0 0; height: var(--adk-layout-safe-area-height); border-top: 6px solid var(--adk-color-tertiary-green); background: color-mix(in srgb, var(--adk-color-tertiary-green) 14%, transparent); pointer-events: none; }

/* ---------- Kiosk S (vertical 768–1023): nav en tabs, 2 columnas, header y footer compactos ---------- */
@container screen (orientation: portrait) and (max-width: 1023px) {
  .s { grid-template-columns: minmax(0, 1fr); grid-template-rows: 120px auto minmax(0, 1fr) 200px; grid-template-areas: 'header' 'nav' 'content' 'footer'; padding: 0 var(--adk-spacing-24); }
  .s-header { margin: 0 calc(-1 * var(--adk-spacing-24)); padding: 0 var(--adk-spacing-24) var(--adk-spacing-16); gap: var(--adk-spacing-24); }
  .s-logo { width: 96px; height: 72px; }
  .s-title { font-size: 40px; line-height: 44px; }
  .s-nav { display: flex; gap: var(--adk-spacing-8); padding: var(--adk-spacing-16) 0; overflow: hidden; }
  .s-nav__item { flex: none; border: 1px solid var(--adk-border-default); border-radius: var(--adk-radius-full); }
  .s-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .s-footer { margin: 0 calc(-1 * var(--adk-spacing-24)); padding: 0 var(--adk-spacing-24) var(--adk-spacing-16); }
  .s-user { width: 200px; height: 136px; }
  .s-safe { height: 640px; }
}

/* ---------- Tablet (horizontal): carrito lateral fijo, sin footer flotante ---------- */
@container screen (orientation: landscape) {
  .s {
    grid-template-columns: clamp(200px, 18cqw, 240px) minmax(0, 1fr) clamp(320px, 26cqw, 360px);
    grid-template-rows: 96px minmax(0, 1fr);
    grid-template-areas: 'header header header' 'nav content cart';
    column-gap: var(--adk-spacing-24);
    padding: 0 0 0 var(--adk-spacing-24);
  }
  .s-header { margin: 0 0 0 calc(-1 * var(--adk-spacing-24)); padding: 0 var(--adk-spacing-24) var(--adk-spacing-16); gap: var(--adk-spacing-24); }
  .s-logo { width: 72px; height: 56px; }
  .s-title { font-size: 32px; line-height: 40px; }
  .s-nav__item { height: 48px; font-size: 18px; }
  .s-grid { grid-template-columns: repeat(auto-fill, minmax(176px, 1fr)); }
  .s-content { gap: var(--adk-spacing-24); }
  .s-cart { grid-area: cart; display: grid; align-content: start; gap: var(--adk-spacing-16); padding: var(--adk-spacing-24); background: var(--adk-background-subtle); border-left: 1px solid var(--adk-border-subtle); }
  .s-cart__title { font-size: 28px; line-height: 32px; font-weight: 700; }
  .s-line { height: 48px; border-radius: var(--adk-radius-xs); background: var(--adk-background-default); }
  .s-cart .s-cta { height: 56px; margin-top: var(--adk-spacing-16); }
  .s-footer { display: none; }
  .s-safe { display: none; }
}
</style>
