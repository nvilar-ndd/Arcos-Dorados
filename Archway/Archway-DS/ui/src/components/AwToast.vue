<script setup lang="ts">
/**
 * Toast — Figma: Design Resources CORE › Toast. Surface/inverse, radio S, acento izquierdo 5 px Inside
 * (box-shadow, no suma al padding) e ícono 16 lleno del estado (tokens *-on-black, ≥ 3:1).
 * Sombra 0 8 16 Black/800 16 %: Figma usa el estilo remoto Elevation/Bordered Down, que no está en
 * Foundations (audit C-T05). Texto Label Medium on-color, máx. 2 líneas.
 * Ancho 328–408 · padding 8 / 16 / 8 / 24 · 5 s por defecto.
 * Accesibilidad: role=status (polite); Error usa role=alert. El tiempo se pausa con hover/foco
 * (WCAG 2.2.1) y se respeta prefers-reduced-motion (ui.css).
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AwIcon from './AwIcon.vue'

const props = withDefaults(defineProps<{ status?: 'info' | 'success' | 'warning' | 'error'; message: string; supportText?: string; duration?: number }>(), {
  status: 'info', supportText: undefined, duration: 5000,
})
const emit = defineEmits<{ close: [] }>()
const tone = computed(() => ({
  info: { border: 'shadow-[inset_5px_0_0_0_var(--aw-feedback-info-on-black),0_8px_16px_0_color-mix(in_srgb,var(--aw-color-black-800)_16%,transparent)]', text: 'text-feedback-info-on-black', icon: 'info-filled' as const },
  success: { border: 'shadow-[inset_5px_0_0_0_var(--aw-feedback-success-on-black),0_8px_16px_0_color-mix(in_srgb,var(--aw-color-black-800)_16%,transparent)]', text: 'text-feedback-success-on-black', icon: 'success-filled' as const },
  warning: { border: 'shadow-[inset_5px_0_0_0_var(--aw-feedback-warning),0_8px_16px_0_color-mix(in_srgb,var(--aw-color-black-800)_16%,transparent)]', text: 'text-feedback-warning', icon: 'warning-filled' as const },
  error: { border: 'shadow-[inset_5px_0_0_0_var(--aw-feedback-error-on-black),0_8px_16px_0_color-mix(in_srgb,var(--aw-color-black-800)_16%,transparent)]', text: 'text-feedback-error-on-black', icon: 'error-filled' as const },
}[props.status]))

let timer: ReturnType<typeof setTimeout> | undefined
const paused = ref(false)
const start = () => { if (props.duration > 0) timer = setTimeout(() => emit('close'), props.duration) }
const pause = () => { paused.value = true; clearTimeout(timer) }
const resume = () => { paused.value = false; start() }
onMounted(start)
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div
    :role="status === 'error' ? 'alert' : 'status'"
    :class="['aw-ui aw-toast flex w-full min-w-[328px] max-w-[408px] items-center gap-8 rounded-s bg-surface-inverse py-8 pl-24 pr-16 min-h-64', tone.border]"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
  >
    <AwIcon :name="tone.icon" :size="16" :class="tone.text" />
    <p class="aw-label-medium line-clamp-2 flex-1 text-text-on-color">{{ message }}</p>
    <span v-if="supportText" class="aw-label-small text-text-on-color">{{ supportText }}</span>
  </div>
</template>
