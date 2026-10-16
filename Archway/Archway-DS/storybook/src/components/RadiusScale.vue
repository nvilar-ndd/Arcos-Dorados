<script setup lang="ts">
import { computed } from 'vue'
import { under } from '../tokens'
import CopyToken from './CopyToken.vue'

const items = computed(() => under('semantic.radius'))
</script>

<template>
  <ul class="radii" role="list">
    <li v-for="t in items" :key="t.id" class="radius">
      <div class="radius__shape" :style="{ borderRadius: `var(${t.cssVar})` }" />
      <p class="aw-label-medium-bold radius__name">{{ t.figma.name.split('/').pop() }} · {{ String(t.resolved) }}</p>
      <CopyToken :value="`var(${t.cssVar})`" />
      <p class="aw-text-body-small radius__desc">{{ t.description }}</p>
    </li>
  </ul>
</template>

<style scoped>
.radii {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--aw-spacing-24);
  margin: 0;
  padding: 0;
  list-style: none;
}
.radius__shape {
  width: 100%;
  height: 112px;
  margin: 0 0 var(--aw-spacing-16);
  border: 2px solid var(--aw-border-input-active);
  background: var(--aw-feedback-warning-surface);
}
.radius__name { margin: 0 0 var(--aw-spacing-4); }
.radius__desc { margin: var(--aw-spacing-8) 0 0; color: var(--aw-text-secondary); }
</style>
