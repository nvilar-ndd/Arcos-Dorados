<script setup lang="ts">
/**
 * ProgressBar_beneficios (272 × 4) y Progress bar misiones (332 × 16) 💠 — Figma: Design Resources CORE.
 * Beneficios: riel Surface/muted (Figma #d6d6d6 suelto, audit C-T01); en curso, degradé fucsia → rojo → naranja
 * (Figma: hex sueltos; se usan los primitivos más cercanos, audit C-T01); completo, Interactive/active con el
 * círculo de check de 16 al final.
 * Misiones: riel Surface/subtle radio S con rombos de 6 en Interactive/active cada 25 %; avance Feature/missions
 * con padding 2 y la perilla blanca de 12 en la punta.
 */
import { computed } from 'vue'
const props = withDefaults(defineProps<{ value: number; type?: 'beneficios' | 'misiones'; label: string }>(), { type: 'beneficios' })
const pct = computed(() => Math.max(0, Math.min(100, props.value)))
const DIAMONDS = [0, 1, 2, 3, 4].map((i) => 8 + i * 82.88)
</script>

<template>
  <div
    v-if="type === 'beneficios'"
    role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" :aria-label="label"
    class="aw-ui relative h-4 w-[272px] max-w-full rounded-[2px] bg-surface-muted"
  >
    <div
      v-if="pct > 0"
      :class="[
        'h-full rounded-[2px] transition-[width] duration-slow ease-standard',
        pct >= 100 ? 'bg-interactive-active' : 'bg-[linear-gradient(90deg,var(--aw-color-fuchsia-700)_0%,var(--aw-color-red-600)_51%,var(--aw-color-orange-500)_100%)]',
      ]"
      :style="{ width: `${pct}%` }"
    />
    <svg v-if="pct >= 100" class="absolute -right-0 -top-[6px] size-16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="7" class="fill-icon-primary stroke-icon-on-color" stroke-width="1.5" />
      <path class="fill-icon-gold" fill-rule="evenodd" d="M8 14.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Zm-.1-3.46 3.51-5-.41-.29a.5.5 0 0 0-.7.12L7.42 9.72 5.35 7.65 5 8a.5.5 0 0 0 0 .71l2.13 2.14a.5.5 0 0 0 .77-.06Z" />
    </svg>
  </div>
  <div
    v-else
    role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" :aria-label="label"
    class="aw-ui relative h-16 w-[332px] max-w-full overflow-hidden rounded-s bg-surface-subtle"
  >
    <span v-for="x in DIAMONDS" :key="x" class="absolute top-[5px] size-[6px] rotate-45 rounded-[1px] bg-interactive-active" :style="{ left: `${x}px` }" aria-hidden="true" />
    <div
      v-if="pct > 0"
      class="absolute inset-y-0 left-0 flex min-w-16 items-center justify-end rounded-s bg-feature-missions p-[2px] transition-[width] duration-slow ease-standard"
      :style="{ width: `${pct}%` }"
    >
      <span class="size-[12px] rounded-full bg-surface-default" />
    </div>
  </div>
</template>
