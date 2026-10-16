<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

const rows = computed(() => under('primitives.spacing').map((t) => {
  const px = parseInt(String(t.resolved), 10)
  const sem = under('semantic.spacing').find((s) => s.chain[s.chain.length - 1] === t.id)
  return { t, px, sem }
}))
const layout = computed(() => under('layout'))
</script>

<template>
  <div>
    <div class="table-wrap">
      <table class="spec db-body02">
        <thead>
          <tr><th scope="col">Primitivo</th><th scope="col">px</th><th scope="col">rem</th><th scope="col">Escala</th><th scope="col">Semántico</th><th scope="col">CSS var</th></tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.t.id">
            <td><code>{{ r.t.figma.name }}</code></td>
            <td class="mono">{{ r.px }}</td>
            <td class="mono">{{ r.px / 16 }}rem</td>
            <td><span class="bar" :style="{ width: `${r.px}px` }" :class="{ 'bar--base': r.px === 8, 'bar--zero': r.px === 0 }" /></td>
            <td>{{ r.sem ? r.sem.figma.name : '—' }}</td>
            <td><CopyToken :value="`var(${(r.sem ?? r.t).cssVar})`" /></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="db-h6 sub">Tokens de layout</h2>
    <p class="db-body02 lead">Colección <code>Layout</code>, con scopes de ancho/alto y gap.</p>
    <div class="table-wrap">
      <table class="spec db-body02">
        <thead><tr><th scope="col">Token</th><th scope="col">px</th><th scope="col">Escala</th><th scope="col">CSS var</th></tr></thead>
        <tbody>
          <tr v-for="t in layout" :key="t.id">
            <td><code>{{ t.figma.name }}</code></td>
            <td class="mono">{{ parseInt(String(t.resolved), 10) }}</td>
            <td><span class="bar" :style="{ width: String(t.resolved) }" /></td>
            <td><CopyToken :value="`var(${t.cssVar})`" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.bar { display: block; height: 16px; min-width: 2px; border-radius: 2px; background: var(--db-support-success); }
.bar--base { background: var(--db-layer-07); }
.bar--zero { background: var(--db-border-03); }
.sub { margin: var(--db-spacing-500) 0 var(--db-spacing-50); }
.lead { margin: 0 0 var(--db-spacing-200); color: var(--db-text-secondary); }
</style>
