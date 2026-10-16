<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

const ARCHWAY_RADIUS: Record<string, string> = { xs: 'radius/XS', s: 'radius/S', m: 'radius/M', l: 'radius/L' }
const radius = computed(() => under('semantic.radius'))
const borders = computed(() => under('semantic.border-width'))
const shadows = computed(() => under('shadow'))
const gradients = computed(() => under('gradient'))
</script>

<template>
  <div>
    <section class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Radios</h2>
      <p class="section__lead adk-body-small">Relevados del uso en componentes (no hay variables). <code>xl</code> 20 y <code>full</code> no existen en ArchWay: los pide su audit F-03.</p>
      <ul class="tiles" role="list">
        <li v-for="t in radius" :key="t.id" class="tile">
          <span class="tile__shape" :style="{ borderRadius: `var(${t.cssVar})` }" />
          <span class="adk-body-small-bold">{{ t.path[2] }} · {{ String(t.resolved) === '9999px' ? 'full' : t.resolved }}</span>
          <CopyToken :value="`var(${t.cssVar})`" />
          <span class="adk-utility-small tile__desc">{{ t.description }}</span>
          <span class="badge adk-utility-small" :class="ARCHWAY_RADIUS[t.path[2]] ? 'badge--pass' : 'badge--fail'">{{ ARCHWAY_RADIUS[t.path[2]] ?? 'No existe en ArchWay' }}</span>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Bordes</h2>
      <ul class="tiles" role="list">
        <li v-for="t in borders" :key="t.id" class="tile">
          <span class="tile__shape tile__shape--border" :style="{ borderWidth: `var(${t.cssVar})` }" />
          <span class="adk-body-small-bold">{{ t.path[2] }} · {{ t.resolved }}</span>
          <CopyToken :value="`var(${t.cssVar})`" />
          <span class="adk-utility-small tile__desc">{{ t.description }}</span>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Elevación</h2>
      <p class="section__lead adk-body-small">Valores repetidos en componentes, sin effect styles. ArchWay no tiene sombras hacia arriba.</p>
      <ul class="tiles" role="list">
        <li v-for="t in shadows" :key="t.id" class="tile tile--shadow">
          <span class="tile__shape tile__shape--shadow" :style="{ boxShadow: `var(${t.cssVar})` }" />
          <span class="adk-body-small-bold">{{ t.path[1] }}</span>
          <CopyToken :value="`var(${t.cssVar})`" />
          <span class="adk-utility-small tile__desc">{{ t.description }}</span>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section__title adk-headline-extra-small-bold">Gradientes</h2>
      <p class="section__lead adk-body-small">Idénticos a los de ArchWay.</p>
      <div v-for="t in gradients" :key="t.id" class="gradient">
        <div class="gradient__bar" :style="{ background: `var(${t.cssVar})` }" />
        <span class="adk-body-small-bold">{{ t.figmaName }}</span> <CopyToken :value="`var(${t.cssVar})`" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--adk-spacing-16); margin: 0; padding: 0; list-style: none; }
.tile { display: grid; gap: var(--adk-spacing-8); align-content: start; padding: var(--adk-spacing-16); border: 1px solid var(--adk-border-subtle); border-radius: var(--adk-radius-s); }
.tile--shadow { padding: var(--adk-spacing-32) var(--adk-spacing-16) var(--adk-spacing-16); }
.tile__shape { display: block; width: 100%; height: 72px; background: var(--adk-background-brand); }
.tile__shape--border { border-style: solid; border-color: var(--adk-border-strong); background: var(--adk-background-default); border-radius: var(--adk-radius-xs); }
.tile__shape--shadow { background: var(--adk-background-default); border-radius: var(--adk-radius-s); }
.tile__desc { color: var(--adk-text-secondary); }
.tile .badge { justify-self: start; }
.gradient { margin: 0 0 var(--adk-spacing-24); }
.gradient__bar { height: 80px; margin: 0 0 var(--adk-spacing-8); border-radius: var(--adk-radius-s); }
</style>
