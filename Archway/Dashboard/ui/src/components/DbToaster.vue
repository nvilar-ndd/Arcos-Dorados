<script setup lang="ts">
/**
 * Región de toasts — esquina inferior derecha, 16 px del borde inferior y 32 px del derecho (Figma).
 * Las nuevas se apilan por encima. El temporizador se pausa con hover o foco (WCAG 2.2.1).
 * En < 768 px ocupa el ancho disponible con 16 px de margen.
 */
import { onBeforeUnmount, watch } from 'vue'
import DbNotification from './DbNotification.vue'
import { useToasts } from '../composables/useToasts'

const { items, dismiss } = useToasts()
const timers = new Map<number, { left: number; started: number; handle?: ReturnType<typeof setTimeout> }>()

function start(id: number) {
  const t = timers.get(id)
  if (!t || t.left <= 0) return
  t.started = Date.now()
  t.handle = setTimeout(() => dismiss(id), t.left)
}
function pause(id: number) {
  const t = timers.get(id)
  if (!t?.handle) return
  clearTimeout(t.handle)
  t.left -= Date.now() - t.started
  t.handle = undefined
}

watch(
  () => items.map((t) => `${t.id}:${t.duration}`),
  () => {
    for (const t of items) {
      if (!timers.has(t.id) && t.duration > 0) {
        timers.set(t.id, { left: t.duration, started: Date.now() })
        start(t.id)
      }
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => timers.forEach((t) => t.handle && clearTimeout(t.handle)))
</script>

<template>
  <section
    aria-label="Notificaciones"
    class="db-ui pointer-events-none fixed bottom-200 left-200 right-200 z-50 flex flex-col items-end gap-100 md:left-auto md:right-400"
  >
    <DbNotification
      v-for="t in items"
      :key="t.id"
      class="pointer-events-auto"
      type="toast"
      :title="t.title"
      :message="t.message"
      :status="t.status"
      :progress="t.progress"
      :progress-label="t.progressLabel"
      :helper-text="t.helperText"
      @mouseenter="pause(t.id)"
      @mouseleave="start(t.id)"
      @focusin="pause(t.id)"
      @focusout="start(t.id)"
      @close="dismiss(t.id)"
    />
  </section>
</template>
