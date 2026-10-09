<script setup lang="ts">
import { computed } from 'vue'
import { contrast, hex, under, type Token } from '../tokens'
import ArchwayMatch from './ArchwayMatch.vue'
import CopyToken from './CopyToken.vue'

const LABEL: Record<string, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
  accent: 'Accessible Accent',
  link: 'Links',
  illustration: 'Ilustración (usados en UI)',
  undocumented: 'Usados en componentes, ausentes de la paleta',
}

/** Texto del swatch: blanco o negro, el que tenga más contraste con el color. */
const ink = (h: string): string => (contrast(h, '#FFFFFF') >= contrast(h, '#292929') ? '#FFFFFF' : '#292929')

const groups = computed(() => {
  const map = new Map<string, Token[]>()
  for (const t of under('primitives.color')) map.set(t.path[2], [...(map.get(t.path[2]) ?? []), t])
  return [...map.entries()].map(([key, items]) => ({ key, label: LABEL[key] ?? key, items }))
})
</script>

<template>
  <div class="groups">
    <section v-for="g in groups" :key="g.key">
      <h3 class="adk-body-large-bold group__name">{{ g.label }}</h3>
      <ul class="cards" role="list">
        <li v-for="t in g.items" :key="t.id" class="card" :class="{ 'card--warn': g.key === 'undocumented' }">
          <div class="card__swatch" :style="{ background: hex(t), color: ink(hex(t)) }">
            <span class="adk-body-medium-bold">{{ t.figmaName }}</span>
          </div>
          <div class="card__meta adk-utility-small">
            <span class="mono">{{ hex(t) }}</span>
            <CopyToken :value="`var(${t.cssVar})`" />
            <span v-if="t.description" class="card__desc">{{ t.description }}</span>
            <span class="card__aw-label">ArchWay más cercano</span>
            <ArchwayMatch :match="t.archway" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.groups { display: grid; gap: var(--adk-spacing-32); }
.group__name { margin: 0 0 var(--adk-spacing-8); }
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--adk-spacing-16); margin: 0; padding: 0; list-style: none; }
.card { overflow: hidden; border: 1px solid var(--adk-border-subtle); border-radius: var(--adk-radius-s); background: var(--adk-background-default); }
.card--warn { border-style: dashed; border-color: var(--adk-border-default); }
.card__swatch { display: flex; align-items: flex-end; height: 88px; padding: var(--adk-spacing-8); border-bottom: 1px solid var(--adk-border-subtle); }
.card__meta { display: grid; gap: var(--adk-spacing-4); padding: var(--adk-spacing-8); overflow-wrap: anywhere; }
.card__desc { color: var(--adk-text-secondary); }
.card__aw-label { margin-top: var(--adk-spacing-4); color: var(--adk-text-secondary); }
</style>
