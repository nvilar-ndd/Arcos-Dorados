<script setup lang="ts">
/**
 * Gamification Bar 💠 — Figma: Design Resources CORE › Gamification Bar (2684:4307).
 * Bloque Feedback/info-surface con radio L arriba, padding 16/16/8/16 (Collapsed) o 16/16/80/16
 * (Expanded: el carrito se superpone abajo). Barra de 20: línea de 4 con puntas redondas en
 * Surface/strong, avance Feedback/info, hitos de 16 (Icon Bar: Disabled = Surface/strong + arcos
 * Icon/disabled; Complete = Feedback/info + check Icon/on-color) y un hito final al extremo.
 * Mensaje centrado en Label Small (las partes en Bold con <strong>), padding 8/16, montado 10 sobre la barra.
 * Sin `progress` muestra sólo el mensaje (estados "Suma productos" y "Sin barra"). Se anuncia con aria-live.
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** 0–100. Sin valor no hay barra. */
    progress?: number
    /** Hitos intermedios en % del recorrido (el final siempre está). */
    milestones?: number[]
    message?: string
    type?: 'expanded' | 'collapsed'
    skeleton?: boolean
    label?: string
  }>(),
  { progress: undefined, milestones: () => [12.8], message: undefined, type: 'collapsed', skeleton: false, label: 'Avance hacia el envío gratis' },
)
const pct = computed(() => (props.progress === undefined ? undefined : Math.max(0, Math.min(100, props.progress))))
</script>

<template>
  <section
    :class="['aw-ui w-full rounded-t-l pl-16 pr-16 pt-16', skeleton ? 'bg-surface-subtle' : 'bg-feedback-info-surface', type === 'expanded' ? 'min-h-[162px] pb-80' : 'min-h-[66px] pb-8']"
    :aria-busy="skeleton || undefined"
  >
    <div v-if="skeleton" class="mx-auto my-8 h-16 w-[278px] rounded-xs bg-surface-muted" aria-hidden="true" />
    <template v-else>
      <div
        v-if="pct !== undefined"
        role="progressbar" :aria-valuenow="Math.round(pct)" aria-valuemin="0" aria-valuemax="100" :aria-label="label"
        class="relative h-[20px] w-full"
      >
        <span class="absolute left-0 right-[20px] top-[6px] h-4 rounded-full bg-surface-strong" aria-hidden="true" />
        <span class="absolute left-0 top-[6px] h-4 rounded-full bg-feedback-info transition-[width] duration-slow ease-standard" :style="{ width: `calc((100% - 20px) * ${pct / 100})` }" aria-hidden="true" />
        <svg
          v-for="m in [...milestones, 100]"
          :key="m"
          class="absolute top-0 size-16"
          :style="{ left: `calc((100% - 20px) * ${m / 100})` }"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <template v-if="pct >= m">
            <circle cx="8" cy="8" r="8" class="fill-feedback-info" />
            <path class="fill-icon-on-color" fill-rule="evenodd" d="M12.34 5.01 7.88 11.2a.54.54 0 0 1-.85.05l-3-3.22a.54.54 0 0 1 .03-.77l.54-.5 2.76 2.97 3.62-5.03a.54.54 0 0 1 .76-.12l.6.43Z" />
          </template>
          <template v-else>
            <circle cx="8" cy="8" r="8" class="fill-surface-strong" />
            <path class="fill-icon-disabled" d="M9.85 4.15C9.1 4.15 8.44 5.18 8 6.81 7.57 5.18 6.9 4.15 6.15 4.15c-1.31 0-2.37 3.45-2.37 7.7h1.05c0-3.95.59-7.15 1.32-7.15s1.32 2.96 1.32 6.6h1.06c0-3.64.59-6.6 1.32-6.6s1.32 3.2 1.32 7.15h1.05c0-4.25-1.06-7.7-2.37-7.7Z" />
          </template>
        </svg>
      </div>
      <p :class="['aw-label-small px-16 py-8 text-center text-text-primary', pct !== undefined ? '-mt-[10px]' : '']" aria-live="polite">
        <slot>{{ message }}</slot>
      </p>
    </template>
  </section>
</template>
