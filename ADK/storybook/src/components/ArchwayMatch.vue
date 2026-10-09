<script setup lang="ts">
import { computed } from 'vue'
import { matchTone, type ArchwayMatch } from '../tokens'

/** Resultado de comparar un token de ADK con ArchWay: swatch + nombre + ΔE + badge. */
const props = defineProps<{ match?: ArchwayMatch }>()
const name = computed(() => {
  const m = props.match
  const n = m?.target ?? m?.nearest
  return n ? n.replace(/^(semantic|primitives\.color)\./, '') : '—'
})
</script>

<template>
  <span v-if="match" class="aw">
    <span v-if="match.value" class="swatch" :style="{ background: match.value }" aria-hidden="true" />
    <span class="aw__text">
      <code>{{ name }}</code>
      <span v-if="match.value" class="mono aw__hex">{{ match.value }}</span>
      <span v-if="match.deltaE !== undefined && match.match !== 'Sin equivalente'" class="mono aw__hex">ΔE {{ match.deltaE.toFixed(1) }}</span>
    </span>
    <span class="badge adk-utility-small" :class="`badge--${matchTone(match.match)}`">{{ match.match }}</span>
  </span>
</template>

<style scoped>
.aw { display: inline-flex; flex-wrap: wrap; align-items: center; gap: var(--adk-spacing-8); }
.aw__text { display: inline-flex; flex-wrap: wrap; align-items: baseline; gap: var(--adk-spacing-4) var(--adk-spacing-8); }
.aw__hex { color: var(--adk-text-secondary); }
</style>
