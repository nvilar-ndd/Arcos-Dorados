<script setup lang="ts">
/**
 * Pagination (bullets) — Figma: Design Resources CORE › Pagination. 2–6 bullets; activo
 * Interactive/active ⚠️ 1.69:1 (audit C-A02): el activo además es más ancho para no depender
 * sólo del color. Con `interactive` cada bullet es un botón (área 48 vía .aw-hit).
 */
const model = defineModel<number>({ default: 0 })
withDefaults(defineProps<{ count: number; interactive?: boolean; label?: string }>(), { interactive: false, label: 'Página' })
</script>

<template>
  <div class="aw-ui flex items-center justify-center gap-8" :role="interactive ? 'group' : undefined" :aria-label="interactive ? 'Paginación' : `${label} ${model + 1} de ${count}`">
    <template v-for="i in count" :key="i">
      <button
        v-if="interactive"
        type="button"
        class="aw-hit rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong"
        :aria-label="`${label} ${i}`"
        :aria-current="model === i - 1 ? 'true' : undefined"
        @click="model = i - 1"
      >
        <span :class="['block h-8 rounded-full transition-all duration-fast ease-standard', model === i - 1 ? 'w-16 bg-interactive-active' : 'w-8 bg-surface-muted']" />
      </button>
      <span v-else :class="['block h-8 rounded-full', model === i - 1 ? 'w-16 bg-interactive-active' : 'w-8 bg-surface-muted']" aria-hidden="true" />
    </template>
  </div>
</template>
