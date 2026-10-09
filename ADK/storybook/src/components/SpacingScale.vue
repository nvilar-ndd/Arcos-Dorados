<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

/** Valores de spacing que existen en ArchWay como semánticos (Archway/tokens: semantic.spacing.*). */
const ARCHWAY = new Set([0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88])

const rows = computed(() =>
  under('semantic.spacing')
    .map((t) => ({ t, px: parseInt(String(t.resolved), 10) }))
    .filter((r) => r.px > 0),
)
</script>

<template>
  <div class="table-wrap">
    <table class="spec adk-body-small">
      <thead>
        <tr><th scope="col">Token</th><th scope="col">px</th><th scope="col">Muestra</th><th scope="col">ArchWay</th></tr>
      </thead>
      <tbody>
        <tr v-for="r in rows" :key="r.t.id">
          <td><CopyToken :value="`var(${r.t.cssVar})`" /></td>
          <td class="mono">{{ r.px }}</td>
          <td><span class="bar" :style="{ width: `var(${r.t.cssVar})` }" /></td>
          <td>
            <span v-if="ARCHWAY.has(r.px)" class="badge badge--pass adk-utility-small">spacing/{{ r.px }}</span>
            <span v-else class="badge badge--fail adk-utility-small">No existe</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.bar { display: block; height: 24px; border-radius: var(--adk-radius-xs); background: var(--adk-background-brand); }
</style>
