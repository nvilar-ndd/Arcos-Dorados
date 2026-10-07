<script setup lang="ts">
import { computed } from 'vue'
import { under, primitiveLabel, hex, type Token } from '../tokens'
import CopyToken from './CopyToken.vue'

const GROUP_ORDER = ['text', 'icon', 'layer', 'background', 'surface', 'border', 'interactive', 'feedback', 'link', 'trust', 'highlight', 'feacture', 'button', 'chip']
const GROUP_INTRO: Record<string, string> = {
  text: 'Color de texto. Siempre sobre una superficie Layer o Surface.',
  icon: 'Íconos del set McDonald\'s. No se usan emojis como íconos de sistema.',
  layer: 'Superficies apiladas: Layer/01 es el fondo base; cada número sube un nivel.',
  background: 'Hoy equivalentes 1:1 a Layer/01…06 (ver audit S-02).',
  surface: 'Superficies de componentes: inputs, chips, botones secundarios.',
  border: 'Trazos: default para interactivos, strong para focus, subtle para disabled.',
  interactive: 'Estados activos o seleccionados: chip selected, switch ON, toggle.',
  feedback: 'Error, éxito, advertencia e información. Las variantes -on-black sólo aplican sobre Layer/06.',
  link: 'Links en sus estados, sobre fondo claro y oscuro (inverse).',
  trust: 'Mensajes de confianza.',
  highlight: 'Novedad: features nuevas, onboarding, badges de "Nuevo".',
  feacture: 'Identidad de programas o features específicos.',
  button: 'Tokens de componente Button (viven en Semantic; ver audit S-01).',
  chip: 'Tokens de componente Chip (viven en Semantic; ver audit S-01).',
}

const props = defineProps<{ groups?: string[] }>()

const sections = computed(() => {
  const colors = under('semantic').filter((t) => t.type === 'color')
  const wanted = props.groups ?? GROUP_ORDER
  return wanted
    .map((g) => ({ key: g, intro: GROUP_INTRO[g] ?? '', tokens: colors.filter((t: Token) => t.path[1] === g) }))
    .filter((s) => s.tokens.length > 0)
})
const isTransparent = (t: Token): boolean => String(t.resolved).toLowerCase().endsWith('00') && String(t.resolved).length === 9
</script>

<template>
  <div class="groups">
    <section v-for="s in sections" :key="s.key" class="group">
      <h3 class="aw-heading-small-bold group__title">{{ s.tokens[0].figma.name.split('/')[0] }}</h3>
      <p class="aw-text-body-medium group__intro">{{ s.intro }}</p>
      <div class="table-wrap">
        <table class="spec aw-text-body-medium">
          <thead>
            <tr><th scope="col">Muestra</th><th scope="col">Token Figma</th><th scope="col">Alias → primitivo</th><th scope="col">Hex</th><th scope="col">CSS var</th><th scope="col">Uso</th></tr>
          </thead>
          <tbody>
            <tr v-for="t in s.tokens" :key="t.id">
              <td><span class="dot" :class="{ 'dot--clear': isTransparent(t) }" :style="{ background: `var(${t.cssVar})` }" /></td>
              <td><code>{{ t.figma.name }}</code></td>
              <td class="mono">{{ primitiveLabel(t) }}</td>
              <td class="mono">{{ isTransparent(t) ? 'transparente' : hex(t).toUpperCase() }}</td>
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
.groups { display: grid; gap: var(--aw-spacing-40); }
.group__title { margin: 0 0 var(--aw-spacing-4); }
.group__intro { margin: 0 0 var(--aw-spacing-16); color: var(--aw-text-secondary); }
.dot {
  display: block;
  width: 32px;
  height: 32px;
  border: 1px solid var(--aw-border-subtle);
  border-radius: var(--aw-radius-s);
}
.dot--clear {
  background: repeating-conic-gradient(var(--aw-layer-03) 0 25%, var(--aw-layer-01) 0 50%) 0 0 / 8px 8px !important;
}
</style>
