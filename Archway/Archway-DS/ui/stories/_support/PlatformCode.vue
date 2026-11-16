<script setup lang="ts">
/**
 * Pestañas Web / iOS / Android con el código real de cada plataforma.
 * El código web se ve en vivo arriba (slot); iOS y Android no se pueden ejecutar en el navegador.
 */
import { computed, ref } from 'vue'

const props = defineProps<{ web: string; ios: string; android: string; iosNote?: string; androidNote?: string }>()
const tabs = [
  { id: 'web', label: 'Web · Vue 3 + Tailwind', file: 'ui/src' },
  { id: 'ios', label: 'iOS · SwiftUI', file: 'ios/Sources/ArchwayUI' },
  { id: 'android', label: 'Android · Compose', file: 'android/archway-ui' },
] as const
type Tab = (typeof tabs)[number]['id']
const active = ref<Tab>('web')
const code = computed(() => props[active.value])
const note = computed(() => (active.value === 'ios' ? props.iosNote : active.value === 'android' ? props.androidNote : undefined))
const copied = ref(false)
async function copy() {
  try { await navigator.clipboard.writeText(code.value); copied.value = true; setTimeout(() => (copied.value = false), 1500) } catch { /* sin permiso de portapapeles */ }
}
</script>

<template>
  <section class="aw-ui flex flex-col gap-16">
    <div v-if="$slots.default" class="flex flex-wrap items-start gap-16 rounded-m border border-border-soft bg-surface-subtle p-24">
      <slot />
    </div>
    <div role="tablist" aria-label="Plataforma" class="flex gap-8 border-b border-border-soft">
      <button
        v-for="t in tabs"
        :id="`tab-${t.id}`"
        :key="t.id"
        role="tab"
        type="button"
        :aria-selected="active === t.id"
        :aria-controls="`panel-${t.id}`"
        :tabindex="active === t.id ? 0 : -1"
        :class="['aw-label-medium -mb-px border-b-2 px-16 py-8 outline-none focus-visible:outline-2 focus-visible:outline-border-strong', active === t.id ? 'aw-label-medium-bold border-border-strong text-text-primary' : 'border-transparent text-text-secondary']"
        @click="active = t.id"
        @keydown.right.prevent="active = tabs[(tabs.findIndex(x => x.id === active) + 1) % 3].id"
        @keydown.left.prevent="active = tabs[(tabs.findIndex(x => x.id === active) + 2) % 3].id"
      >{{ t.label }}</button>
    </div>
    <div :id="`panel-${active}`" role="tabpanel" :aria-labelledby="`tab-${active}`" class="relative">
      <p v-if="note" class="aw-label-small mb-8 text-text-secondary">{{ note }}</p>
      <button type="button" class="aw-label-small absolute right-8 top-8 rounded-xs bg-surface-default px-8 py-4 text-text-primary" @click="copy">{{ copied ? 'Copiado' : 'Copiar' }}</button>
      <pre class="max-h-[520px] overflow-auto rounded-m bg-surface-inverse p-16 aw-text-body-small font-mono text-text-on-color"><code class="!bg-transparent !p-0 !text-text-on-color">{{ code }}</code></pre>
    </div>
  </section>
</template>
