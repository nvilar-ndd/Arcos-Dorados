<script setup lang="ts">
import { computed } from 'vue'
import { under, type Token } from '../tokens'
import CopyToken from './CopyToken.vue'

const FAMILY_LABEL: Record<string, string> = {
  gold: 'Gold · marca',
  red: 'Red · marca / error',
  black: 'Black · neutros',
  white: 'White',
  secondary: 'Secondary',
  link: 'Link',
  tertiary: 'Tertiary',
  accessible: 'Accessible accent',
}

const families = computed(() => {
  const groups = new Map<string, Token[]>()
  for (const t of under('primitives.color')) groups.set(t.path[2], [...(groups.get(t.path[2]) ?? []), t])
  return [...groups.entries()].map(([key, tokens]) => {
    const numeric = tokens.every((t) => /^\d+$/.test(t.path[3] ?? ''))
    return {
      key,
      label: FAMILY_LABEL[key] ?? key,
      tokens: numeric ? tokens.slice().sort((a, b) => Number(a.path[3]) - Number(b.path[3])) : tokens,
    }
  })
})

const hasAlpha = (t: Token): boolean => String(t.resolved).length === 9
const darkText = (t: Token): boolean => {
  const h = String(t.resolved).replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 || hasAlpha(t)
}
</script>

<template>
  <div class="families">
    <section v-for="fam in families" :key="fam.key">
      <h3 class="db-h6 family__name">{{ fam.label }}</h3>
      <ul class="ramp" role="list">
        <li v-for="t in fam.tokens" :key="t.id" class="chip">
          <div
            class="chip__swatch"
            :class="{ 'chip__swatch--alpha': hasAlpha(t), 'is-dark-text': darkText(t) }"
            :style="{ '--swatch': String(t.resolved) }"
          >
            <span class="db-label03">{{ t.path.slice(3).join('-') }}</span>
          </div>
          <div class="chip__meta">
            <span class="mono">{{ String(t.resolved).toUpperCase() }}</span>
            <CopyToken :value="`var(${t.cssVar})`" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.families { display: grid; gap: var(--db-spacing-400); }
.family__name { margin: 0 0 var(--db-spacing-100); }
.ramp { display: grid; grid-template-columns: repeat(auto-fill, minmax(136px, 1fr)); gap: var(--db-spacing-100); margin: 0; padding: 0; list-style: none; }
.chip { overflow: hidden; border: 1px solid var(--db-border-02); border-radius: var(--db-radius-md); background: var(--db-background-01); }
.chip__swatch { display: flex; align-items: flex-end; height: 72px; padding: var(--db-spacing-100); background: var(--swatch); color: #ffffff; }
.chip__swatch.is-dark-text { color: #292929; }
.chip__swatch--alpha { background: linear-gradient(var(--swatch), var(--swatch)), repeating-conic-gradient(#d6d6d6 0 25%, #ffffff 0 50%) 0 0 / 12px 12px; }
.chip__meta { display: grid; gap: var(--db-spacing-50); padding: var(--db-spacing-100); overflow-wrap: anywhere; }
.chip__meta code { font-size: 0.6875rem; }
</style>
