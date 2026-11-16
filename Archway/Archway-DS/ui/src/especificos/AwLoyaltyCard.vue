<script setup lang="ts">
/**
 * Loyalty Home Card 💠 — Figma: Design Resources CORE › Loyalty Home Card. Puntos (Display Medium
 * Bold) con contador animado, barra Interactive/active hacia el próximo premio, candado que se abre
 * al 100 %. Fondo Surface/brand, radio L. Las animaciones se apagan con prefers-reduced-motion.
 */
import { computed, onMounted, ref, watch } from 'vue'
import AwIcon from '../components/AwIcon.vue'

const props = withDefaults(
  defineProps<{ points: number; goal: number; title?: string; content?: string; expiry?: string; skeleton?: boolean }>(),
  { title: 'Mis puntos', content: undefined, expiry: undefined, skeleton: false },
)
const shown = ref(0)
const reduce = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const tick = (to: number) => {
  if (reduce()) { shown.value = to; return }
  const from = shown.value, t0 = performance.now()
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / 1000)
    shown.value = Math.round(from + (to - from) * (1 - (1 - k) ** 3))
    if (k < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
onMounted(() => tick(props.points))
watch(() => props.points, tick)
const pct = computed(() => Math.min(100, (props.points / props.goal) * 100))
const unlocked = computed(() => pct.value >= 100)
</script>

<template>
  <article v-if="skeleton" class="aw-ui aw-shimmer h-[176px] w-full rounded-l bg-surface-subtle" aria-busy="true" aria-label="Cargando puntos" />
  <article v-else class="aw-ui flex w-full flex-col gap-16 rounded-l bg-surface-brand p-16 text-text-primary">
    <header class="flex items-center justify-between">
      <h2 class="aw-heading-small-bold">{{ title }}</h2>
      <AwIcon name="loyalty" />
    </header>
    <p>
      <span class="aw-display-medium-bold" aria-hidden="true">{{ shown.toLocaleString('es') }}</span>
      <span class="aw-sr-only">{{ points.toLocaleString('es') }} puntos</span>
      <span class="aw-label-small" aria-hidden="true"> pts</span>
    </p>
    <div class="flex items-center gap-8">
      <div class="h-8 flex-1 overflow-hidden rounded-full bg-surface-default" role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" aria-label="Avance hacia el próximo premio">
        <div class="h-full rounded-full bg-interactive-active transition-[width] duration-expressive ease-entrance" :style="{ width: `${pct}%` }" />
      </div>
      <span :class="['flex size-32 items-center justify-center rounded-full', unlocked ? 'bg-surface-inverse text-icon-on-color' : 'bg-surface-default']">
        <AwIcon :name="unlocked ? 'checkmark' : 'cancel'" :size="16" />
      </span>
    </div>
    <p v-if="unlocked" class="aw-label-small-bold aw-toast">¡Premio desbloqueado!</p>
    <p v-else-if="content" class="aw-text-body-small">{{ content }}</p>
    <p v-if="expiry" class="aw-label-small">{{ expiry }}</p>
  </article>
</template>
