<script setup lang="ts">
import { computed } from 'vue'
import { under, hex, primitiveIn, type Token, type Mode } from '../tokens'
import CopyToken from './CopyToken.vue'

const GROUP_INTRO: Record<string, string> = {
  background: 'Fondos de pantalla y de áreas grandes.',
  layer: 'Superficies superpuestas (cards, paneles, modales) sobre el fondo base.',
  border: 'Bordes y contornos de componentes.',
  text: 'Color de texto por jerarquía y estado.',
  link: 'Links de texto y sus estados.',
  icon: 'Color de íconos según contexto.',
  support: 'Estados y alertas: éxito, error, advertencia.',
  tag: 'Fondos de tags.',
  button: 'Tokens de componente Button.',
}

const sections = computed(() => {
  const colors = under('semantic').filter((t) => t.type === 'color')
  return Object.keys(GROUP_INTRO)
    .map((g) => ({ key: g, intro: GROUP_INTRO[g], tokens: colors.filter((t: Token) => t.path[1] === g) }))
    .filter((s) => s.tokens.length > 0)
})
const MODES: Mode[] = ['light', 'dark']
const isClear = (t: Token, m: Mode): boolean => String(t.byMode[m].resolved).toLowerCase().endsWith('00') && String(t.byMode[m].resolved).length === 9
const swatch = (t: Token, m: Mode): string => String(t.byMode[m].resolved)
</script>

<template>
  <div class="groups">
    <section v-for="s in sections" :key="s.key">
      <h3 class="db-h6 group__title">{{ s.key }}</h3>
      <p class="db-body02 group__intro">{{ s.intro }}</p>
      <div class="table-wrap">
        <table class="spec db-body02">
          <thead>
            <tr><th scope="col">Token Figma</th><th scope="col">Light</th><th scope="col">Dark</th><th scope="col">CSS var</th><th scope="col">Uso</th></tr>
          </thead>
          <tbody>
            <tr v-for="t in s.tokens" :key="t.id">
              <td><code>{{ t.figma.name }}</code></td>
              <td v-for="m in MODES" :key="m">
                <span class="mode">
                  <span class="dot" :class="{ 'dot--clear': isClear(t, m) }" :style="{ background: swatch(t, m) }" />
                  <span>
                    <span class="mono">{{ primitiveIn(t, m) }}</span><br />
                    <span class="mono muted">{{ isClear(t, m) ? 'transparente' : hex(t, m).toUpperCase() }}</span>
                  </span>
                </span>
              </td>
              <td><CopyToken :value="`var(${t.cssVar})`" /></td>
              <td class="desc">{{ t.description || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.groups { display: grid; gap: var(--db-spacing-500); }
.group__title { margin: 0 0 var(--db-spacing-50); text-transform: capitalize; }
.group__intro { margin: 0 0 var(--db-spacing-200); color: var(--db-text-secondary); }
.mode { display: inline-flex; align-items: center; gap: var(--db-spacing-100); white-space: nowrap; }
.dot { flex: none; width: 28px; height: 28px; border: 1px solid var(--db-border-03); border-radius: var(--db-radius-sm); }
.dot--clear { background: repeating-conic-gradient(#d6d6d6 0 25%, #ffffff 0 50%) 0 0 / 8px 8px !important; }
.muted { color: var(--db-text-secondary); }
</style>
