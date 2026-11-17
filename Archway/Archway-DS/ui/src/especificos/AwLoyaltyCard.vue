<script setup lang="ts">
/**
 * Loyalty Home Card 💠 — Figma: Design Resources CORE › Loyalty home card (4100:16736).
 * Título de sección "MiMcDonald’s" (Heading Small Bold) arriba; card Surface/default con stroke 1 Inside
 * Border/subtle, padding 16, gap 16 y radios 16/48/16/16. Puntos en Display Medium Bold con el degradé
 * de Loyalty (púrpura → rojo → naranja) y la pila de monedas de 24; texto Body Small.
 * Barra de 16 sobre Button/primary-bg-disabled con estrellas en Interactive/active y el avance en degradé
 * (blanco → naranja → rojo → púrpura) con perilla Surface/default de 12; debajo "0 pts" y el candado.
 * Vencimiento: franja Surface/subtle con radio 16 abajo que asoma 24 bajo la card, ícono Warning 16 y
 * dos líneas en Body Small. Los degradés usan los primitivos más cercanos (audit C-T01).
 * Contador animado; las animaciones se apagan con prefers-reduced-motion.
 */
import { computed, onMounted, ref, watch } from 'vue'
import AwIcon from '../components/AwIcon.vue'

const GRAD = 'linear-gradient(90deg, var(--aw-color-fuchsia-700) 0%, var(--aw-color-red-600) 49%, var(--aw-color-orange-500) 100%)'
const STARS = [4, 86, 168, 250, 332]
const fmt = (n: number) => n.toLocaleString('es-AR')

const props = withDefaults(
  defineProps<{ points: number; goal: number; title?: string; content?: string; expiry?: string; skeleton?: boolean; start?: string }>(),
  { title: 'MiMcDonald’s', content: undefined, expiry: undefined, skeleton: false, start: '0 pts' },
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
  <section class="aw-ui relative w-full min-w-[328px] pt-8" :aria-busy="skeleton || undefined">
    <!-- Ilustración de monedas (Figma: grupo "coins", 80 × 88 arriba a la derecha). -->
    <div v-if="$slots.illustration" class="absolute right-16 top-0 z-[2]" aria-hidden="true"><slot name="illustration" /></div>
    <h2 class="aw-heading-small-bold mb-8 text-text-primary">{{ title }}</h2>
    <div v-if="skeleton" class="aw-shimmer h-[154px] rounded-l bg-surface-subtle" aria-hidden="true" />
    <template v-else>
      <div class="relative z-[1] flex flex-col gap-16 rounded-l rounded-tr-[48px] bg-surface-default p-16 shadow-[inset_0_0_0_1px_var(--aw-border-subtle)]">
        <div class="flex flex-col gap-4">
          <div class="flex h-[46px] items-center gap-4">
            <slot name="coin">
              <svg class="size-24 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <defs><linearGradient id="aw-coin" x1="23.4" x2="1" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="var(--aw-color-fuchsia-700)" /><stop offset=".5" stop-color="var(--aw-color-red-600)" /><stop offset="1" stop-color="var(--aw-color-orange-500)" /></linearGradient></defs>
                <path fill="url(#aw-coin)" d="M4.9 13.3c.4.3.9.5 1.5.7-1.7.6-3 1.4-3.4 2.4-.6 2.2 3.4 4.2 9.2 4.2 5.9 0 9.9-2 9.2-4.2-.4-1-1.6-1.8-3.4-2.4.6-.2 1.1-.4 1.6-.7 1.8.8 3.2 2 3.6 3.4 1.1 3.4-3.7 6.8-11 6.8-7.2 0-12.1-3.4-11-7 .5-1.3 1.8-2.4 3.7-3.2Z" />
                <path class="fill-interactive-active" d="M7.5 14.4c.7.1 1.4.3 2.2.4-1.8.3-2.9.7-3.2 1.2-.7 1.1 5.3 2.3 13.9 2.6-1.2 1-3.6 1.7-6.6 1.8-6.2-1.1-9.5-2.9-8.5-4.6.3-.5 1.1-1 2.2-1.4Z" />
                <path fill="url(#aw-coin)" d="M4.6 7c.4.3.9.5 1.5.7-1.6.6-2.7 1.5-3.1 2.5-.6 2.5 3.4 4.7 9.2 4.7 5.9 0 9.9-2.2 9.2-4.7-.3-1-1.4-1.8-3-2.5.6-.2 1.1-.4 1.5-.6 1.7.8 2.9 2 3.3 3.4 1.1 3.9-3.7 7.7-11 7.7-7.2 0-12.1-3.8-11-7.7.5-1.5 1.7-2.6 3.4-3.5Z" />
                <path class="fill-interactive-active" d="M7.3 8.1c.6.1 1.3.2 2 .3-1.5.4-2.5.9-2.8 1.3-.5 1.3 5.3 2.7 13.9 3-1.2 1.1-3.6 2-6.8 2.2-6.1-1.2-9.4-3.3-8.3-5.2.3-.6 1-1.2 2-1.6Z" />
                <path fill="url(#aw-coin)" d="M12.2 0c5.2 0 10 1.8 11 4.6 1.1 3.5-3.7 6.9-11 6.9C5 11.5.1 8.1 1.2 4.6 2.2 1.8 7.1 0 12.2 0Zm0 1.3C7.8 1.3 3.7 2.5 3 4.5c-.6 2 3.4 4.1 9.2 4.1 5.9 0 9.9-1.9 9.2-4.1-.7-1.9-4.7-3.2-9.2-3.2Z" />
                <path class="fill-interactive-active" d="M20.4 6.5c-8.6-.2-14.4-1.4-13.9-2.6.6-1 5.2-1.8 11.2-2-1.6-.4-3.5-.6-5.5-.6h-.1C8.6 1.8 6 2.8 5.3 3.9 4.2 5.6 7.5 7.4 13.6 8.6c3.2-.3 5.6-.9 6.8-2.1Z" />
              </svg>
            </slot>
            <span class="aw-display-medium-bold bg-clip-text text-transparent" :style="{ backgroundImage: GRAD }">{{ fmt(shown) }} pts</span>
          </div>
          <p v-if="content" class="aw-text-body-small text-text-primary">{{ content }}</p>
        </div>
        <div class="flex flex-col gap-8">
          <div
            role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" aria-label="Avance hacia el próximo premio"
            class="relative h-16 overflow-hidden rounded-s bg-button-primary-bg-disabled"
          >
            <svg v-for="x in STARS" :key="x" class="absolute top-[2px] size-[12px] fill-interactive-active" :style="{ left: `${x}px` }" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0c.4 3.2 2.1 5.4 6 6-3.9.6-5.6 2.8-6 6-.4-3.2-2.1-5.4-6-6 3.9-.6 5.6-2.8 6-6Z" /></svg>
            <div
              v-if="pct > 0"
              class="absolute inset-y-0 left-0 flex min-w-16 items-center justify-end rounded-s p-4 transition-[width] duration-slow ease-standard"
              :style="{ width: `${pct}%`, backgroundImage: 'linear-gradient(90deg, var(--aw-color-fuchsia-700) 0%, var(--aw-color-red-600) 38%, var(--aw-color-orange-500) 75%, var(--aw-color-gold-200) 87%, var(--aw-color-white-default) 100%)' }"
            >
              <span class="size-[12px] rounded-full bg-surface-default" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="aw-text-body-small text-text-primary">{{ start }}</span>
            <AwIcon :name="unlocked ? 'checkmark' : 'lock'" :size="16" class="text-icon-disabled" />
          </div>
        </div>
      </div>
      <div v-if="expiry" class="-mt-[18px] flex items-center gap-8 rounded-b-l bg-surface-subtle px-16 pb-8 pt-[32px]">
        <AwIcon name="warning" :size="16" class="shrink-0 text-icon-primary" />
        <p class="aw-text-body-small whitespace-pre-line text-text-primary">{{ expiry }}</p>
      </div>
    </template>
  </section>
</template>
