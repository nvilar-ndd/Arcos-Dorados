<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

const items = computed(() => under('semantic.radius'))
</script>

<template>
  <ul class="radii" role="list">
    <li v-for="t in items" :key="t.id">
      <div class="shape" :style="{ borderRadius: `var(${t.cssVar})` }" />
      <p class="db-label03 name">{{ t.figma.name }} · {{ String(t.resolved) }}</p>
      <CopyToken :value="`var(${t.cssVar})`" />
    </li>
  </ul>
</template>

<style scoped>
.radii { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--db-spacing-300); margin: 0; padding: 0; list-style: none; }
.shape { height: 112px; margin: 0 0 var(--db-spacing-200); border: 2px solid var(--db-border-01); background: var(--db-layer-08); }
.name { margin: 0 0 var(--db-spacing-50); }
</style>
