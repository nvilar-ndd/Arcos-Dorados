<script setup lang="ts">
/**
 * Contenedor de snackbars: centrado arriba del footer, dentro del área accesible (layout.md).
 * Pausa el cierre automático mientras la persona toca el aviso.
 */
import { onBeforeUnmount, watch } from 'vue'
import AdkSnackbar from './AdkSnackbar.vue'
import { useSnackbar } from '../composables/useSnackbar'

const { items, dismiss } = useSnackbar()
const timers = new Map<number, number>()

function arm(id: number, ms: number) {
  timers.set(id, window.setTimeout(() => { timers.delete(id); dismiss(id) }, ms))
}
function pause(id: number) {
  window.clearTimeout(timers.get(id))
  timers.delete(id)
}
watch(
  () => items.map((i) => i.id),
  () => { for (const i of items) if (!timers.has(i.id) && i.duration > 0) arm(i.id, i.duration) },
  { immediate: true },
)
onBeforeUnmount(() => timers.forEach((t) => window.clearTimeout(t)))
</script>

<template>
  <div class="adk-ui pointer-events-none flex flex-col items-center gap-16">
    <TransitionGroup
      enter-from-class="translate-y-16 opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition duration-fast"
      leave-active-class="transition duration-fast"
    >
      <AdkSnackbar
        v-for="s in items"
        :key="s.id"
        class="pointer-events-auto"
        :status="s.status"
        :message="s.message"
        dismissible
        @pointerdown="pause(s.id)"
        @pointerup="arm(s.id, 2000)"
        @dismiss="dismiss(s.id)"
      />
    </TransitionGroup>
  </div>
</template>
