<script setup lang="ts">
import { computed } from 'vue'
import { under, type Token } from '../tokens'
import CopyToken from './CopyToken.vue'

interface ShadowValue { color: string; offsetX: string; offsetY: string; blur: string; spread: string }

const families = computed(() =>
  (['shallow', 'deep'] as const).map((fam) => ({
    fam,
    title: fam === 'shallow' ? 'Shallow — elementos sobre superficies claras' : 'Deep — elementos flotantes y oscuros',
    items: under(`shadow.${fam}`).map((t: Token) => {
      const v = t.value as ShadowValue
      const alpha = Math.round((parseInt(v.color.slice(7, 9), 16) / 255) * 100)
      return { t, spec: `y ${v.offsetY} · blur ${v.blur} · ${alpha}%` }
    }),
  })),
)
</script>

<template>
  <div class="elev">
    <section v-for="f in families" :key="f.fam" class="elev__family">
      <h2 class="aw-heading-small-bold elev__title">{{ f.title }}</h2>
      <ul class="elev__grid" role="list">
        <li v-for="i in f.items" :key="i.t.id" class="card" :style="{ boxShadow: `var(${i.t.cssVar})` }">
          <p class="aw-heading-medium-bold card__name">{{ i.t.figma.name }}</p>
          <p class="mono card__spec">{{ i.spec }}</p>
          <CopyToken :value="`var(${i.t.cssVar})`" />
          <p class="aw-text-body-small card__desc">{{ i.t.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.elev {
  padding: var(--aw-spacing-32);
  border-radius: var(--aw-radius-l);
  background: var(--aw-layer-02);
}
.elev__family + .elev__family { margin-top: var(--aw-spacing-40); }
.elev__title { margin: 0 0 var(--aw-spacing-16); }
.elev__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--aw-spacing-32);
  margin: 0;
  padding: 0;
  list-style: none;
}
.card {
  padding: var(--aw-spacing-24);
  border-radius: var(--aw-radius-m);
  background: var(--aw-layer-01);
}
.card__name { margin: 0 0 var(--aw-spacing-4); }
.card__spec { margin: 0 0 var(--aw-spacing-8); color: var(--aw-text-secondary); }
.card__desc { margin: var(--aw-spacing-16) 0 0; color: var(--aw-text-secondary); }
</style>
