<script setup lang="ts">
import { computed } from 'vue'
import { hex, primitiveOf, under } from '../tokens'
import ArchwayMatch from './ArchwayMatch.vue'
import CopyToken from './CopyToken.vue'

const rows = computed(() => under('semantic').filter((t) => t.type === 'color'))
const counts = computed(() => {
  const c: Record<string, number> = {}
  for (const t of rows.value) c[t.archway?.match ?? '—'] = (c[t.archway?.match ?? '—'] ?? 0) + 1
  return c
})
</script>

<template>
  <div>
    <p class="note adk-body-small">
      <strong>Propuesta</strong>
      <span>ADK no tiene semánticos en Figma. Esta capa sale del uso real en componentes y sirve de mapa hacia ArchWay:
        <template v-for="(n, k, i) in counts" :key="k">{{ i ? ' · ' : '' }}{{ n }} {{ k }}</template>.</span>
    </p>
    <div class="table-wrap">
      <table class="spec adk-body-small">
        <thead>
          <tr><th scope="col">Semántico ADK</th><th scope="col">Primitivo</th><th scope="col">Uso</th><th scope="col">Destino ArchWay</th></tr>
        </thead>
        <tbody>
          <tr v-for="t in rows" :key="t.id">
            <td>
              <span class="cell">
                <span class="swatch" :style="{ background: hex(t) }" aria-hidden="true" />
                <CopyToken :value="t.id.replace('semantic.', '')" />
              </span>
            </td>
            <td><code>{{ primitiveOf(t) }}</code> <span class="mono">{{ hex(t) }}</span></td>
            <td class="desc">{{ t.description }}<template v-if="t.archway?.note"><br /><em>{{ t.archway.note }}</em></template></td>
            <td><ArchwayMatch :match="t.archway" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.cell { display: inline-flex; align-items: center; gap: var(--adk-spacing-8); white-space: nowrap; }
</style>
