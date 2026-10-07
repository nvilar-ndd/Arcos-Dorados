<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

const rows = computed(() =>
  under('semantic.spacing').map((t) => ({ t, px: parseInt(String(t.resolved), 10) })),
)
</script>

<template>
  <div class="table-wrap">
    <table class="spec aw-text-body-medium">
      <thead>
        <tr><th scope="col">Token Figma</th><th scope="col">px</th><th scope="col">Escala</th><th scope="col">CSS var</th><th scope="col">Uso</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in rows" :key="r.t.id">
          <td><code>{{ r.t.figma.name }}</code></td>
          <td class="mono">{{ r.px }}</td>
          <td><span class="bar" :style="{ width: `var(${r.t.cssVar})` }" :class="{ 'bar--base': r.px === 8, 'bar--zero': r.px === 0 }" /></td>
          <td><CopyToken :value="`var(${r.t.cssVar})`" /></td>
          <td class="desc">{{ r.t.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.bar {
  display: block;
  height: 16px;
  min-width: 2px;
  border-radius: 2px;
  background: var(--aw-feedback-info);
}
.bar--base { background: var(--aw-layer-brand); }
.bar--zero { background: var(--aw-border-default); }
</style>
