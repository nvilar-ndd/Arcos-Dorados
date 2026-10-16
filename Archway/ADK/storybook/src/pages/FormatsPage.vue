<script setup lang="ts">
import DocPage from '../components/DocPage.vue'
import FluidShell from '../components/FluidShell.vue'
</script>

<template>
  <DocPage
    title="Formatos futuros"
    lead="Tablets y pantallas más chicas para locales pequeños, centros de postres y McCafé. El mismo shell se adapta con container queries: cambia el layout, no los componentes."
  >
    <p class="note note--warning adk-body-small">
      <strong>Propuesta</strong>
      <span>Wireframe de la sección <em>Formatos</em> de Convergencia/adk-archway.md, para validar con producto y en dispositivo real. Las pantallas se muestran a escala; la franja verde es el área accesible.</span>
    </p>
    <div class="formats">
      <FluidShell :width="1080" :height="1920" :scale="0.25" label="Kiosk · vertical ≥ 1024" />
      <FluidShell :width="800" :height="1280" :scale="0.3" label="Kiosk S · vertical 768–1023" />
      <FluidShell :width="1280" :height="800" :scale="0.3" label="Tablet · horizontal" />
    </div>
    <section class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Qué cambia en cada formato</h2>
      <div class="table-wrap">
        <table class="spec adk-body-small">
          <thead><tr><th scope="col">Zona</th><th scope="col">Kiosk</th><th scope="col">Kiosk S</th><th scope="col">Tablet</th></tr></thead>
          <tbody>
            <tr><th scope="row">Breakpoint</th><td><code>portrait, ≥ 1024</code></td><td><code>portrait, 768–1023</code></td><td><code>landscape, ≥ 1024</code></td></tr>
            <tr><th scope="row">Tipografía</th><td>Modo <code>kiosk</code></td><td>Modo <code>kiosk</code> (misma distancia de uso)</td><td>Modo <code>tablet</code></td></tr>
            <tr><th scope="row">Header</th><td>192</td><td>120</td><td>96</td></tr>
            <tr><th scope="row">Navegación</th><td>Columna 248</td><td>Tabs horizontales (Ley de Hick: agrupar si hay más de 7–8)</td><td>Columna <code>clamp(200px, 18cqw, 240px)</code></td></tr>
            <tr><th scope="row">Productos</th><td>3 columnas de 208</td><td>2 columnas</td><td><code>auto-fill, min 176</code></td></tr>
            <tr><th scope="row">Pedido</th><td>Footer flotante 248</td><td>Footer 200, usuario colapsado</td><td>Carrito lateral fijo (Ley de Fitts, patrón POS)</td></tr>
            <tr><th scope="row">Área accesible</th><td>800 / 960</td><td>640</td><td>No aplica</td></tr>
            <tr><th scope="row">Touch target</th><td>56</td><td>56</td><td>48</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </DocPage>
</template>

<style scoped>
.formats { display: flex; flex-wrap: wrap; align-items: flex-start; gap: var(--adk-spacing-32); margin: 0 0 var(--adk-spacing-48); }
</style>
