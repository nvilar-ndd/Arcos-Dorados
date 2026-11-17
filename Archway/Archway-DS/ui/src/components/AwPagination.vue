<script setup lang="ts">
/**
 * Pagination (bullets) — Figma: Design Resources CORE › Pagination. 2–6 bullets; activo
 * Interactive/active ⚠️ 1.69:1 (audit C-A02): el activo además es más grande (10 vs 6, en celdas de 16)
 * para no depender sólo del color. Con `interactive` cada bullet es un botón (área 48 vía .aw-hit).
 */
const model = defineModel<number>({ default: 0 })
withDefaults(defineProps<{ count: number; interactive?: boolean; label?: string }>(), { interactive: false, label: 'Página' })
</script>

<template>
  <div class="aw-ui flex items-center justify-center" :role="interactive ? 'group' : undefined" :aria-label="interactive ? 'Paginación' : `${label} ${model + 1} de ${count}`">
    <template v-for="i in count" :key="i">
      <button
        v-if="interactive"
        type="button"
        class="aw-hit rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong"
        :aria-label="`${label} ${i}`"
        :aria-current="model === i - 1 ? 'true' : undefined"
        @click="model = i - 1"
      >
        <span class="flex size-16 items-center justify-center"><span :class="['block rounded-full transition-all duration-fast ease-standard', model === i - 1 ? 'size-[10px] bg-interactive-active' : 'size-[6px] bg-surface-muted']" /></span>
      </button>
      <span v-else class="flex size-16 items-center justify-center" aria-hidden="true"><span :class="['block rounded-full', model === i - 1 ? 'size-[10px] bg-interactive-active' : 'size-[6px] bg-surface-muted']" /></span>
    </template>
  </div>
</template>
