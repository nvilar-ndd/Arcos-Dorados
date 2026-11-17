<script setup lang="ts">
/**
 * Tooltip (Plain y Rich) — Figma: Design Resources CORE › Tooltip. Surface/inverse, texto on-color
 * (14.55:1), sin sombra. Plain: padding 8, gap 4, radio S, Label Small; cierre con Cancel lleno de 24.
 * Rich: 248, padding 16/16/8/16, radio M, título Label Medium + cuerpo Label Small y fila de acciones
 * (slot `actions`, Button Ghost y Secondary XS alineados a la derecha).
 * Puntero de 16 × 8 con la punta redondeada de Figma, alineado al inicio, centro o final (16 del borde).
 * Aparece con tap/click o foco en el disparador; se cierra con X, tap fuera o Escape (WCAG 1.4.13).
 * El contenido queda vinculado al disparador con aria-describedby.
 */
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'
import AwIcon from './AwIcon.vue'

const open = defineModel<boolean>('open', { default: false })
withDefaults(
  defineProps<{ text: string; title?: string; position?: 'top' | 'bottom' | 'left' | 'right'; align?: 'start' | 'center' | 'end'; pointer?: boolean; closable?: boolean }>(),
  { title: undefined, position: 'top', align: 'center', pointer: true, closable: false },
)
const id = useId()
const root = ref<HTMLElement>()
const onDoc = (e: Event) => { if (root.value && !root.value.contains(e.target as Node)) open.value = false }
const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') open.value = false }
onMounted(() => { document.addEventListener('pointerdown', onDoc); document.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { document.removeEventListener('pointerdown', onDoc); document.removeEventListener('keydown', onKey) })
const place = {
  top: 'bottom-full left-1/2 mb-8 -translate-x-1/2',
  bottom: 'top-full left-1/2 mt-8 -translate-x-1/2',
  left: 'right-full top-1/2 mr-8 -translate-y-1/2',
  right: 'left-full top-1/2 ml-8 -translate-y-1/2',
} as const
/** Puntero (Figma › Pointer): triángulo 16 × 8 con la punta redondeada. */
const ARROW = {
  top: { box: 'top-full h-8 w-16', view: '0 0 16 8', d: 'M16 0L9.13 6.87C8.74 7.26 8.54 7.46 8.31 7.54C8.11 7.6 7.89 7.6 7.69 7.54C7.46 7.46 7.26 7.26 6.87 6.87L0 0H16Z' },
  bottom: { box: 'bottom-full h-8 w-16', view: '0 0 16 8', d: 'M0 8L6.87 1.13C7.26 0.74 7.46 0.54 7.69 0.46C7.89 0.4 8.11 0.4 8.31 0.46C8.54 0.54 8.74 0.74 9.13 1.13L16 8H0Z' },
  left: { box: 'left-full h-16 w-8', view: '0 0 8 16', d: 'M0 0L6.87 6.87C7.26 7.26 7.46 7.46 7.54 7.69C7.6 7.89 7.6 8.11 7.54 8.31C7.46 8.54 7.26 8.74 6.87 9.13L0 16V0Z' },
  right: { box: 'right-full h-16 w-8', view: '0 0 8 16', d: 'M8 0L1.13 6.87C0.74 7.26 0.54 7.46 0.46 7.69C0.4 7.89 0.4 8.11 0.46 8.31C0.54 8.54 0.74 8.74 1.13 9.13L8 16V0Z' },
} as const
const ALIGN = {
  x: { start: 'left-16', center: 'left-1/2 -translate-x-1/2', end: 'right-16' },
  y: { start: 'top-8', center: 'top-1/2 -translate-y-1/2', end: 'bottom-8' },
} as const
</script>

<template>
  <span ref="root" class="aw-ui relative inline-flex">
    <slot :describedby="open ? id : undefined" :toggle="() => (open = !open)" :open="open" />
    <span
      v-if="open"
      :id="id"
      role="tooltip"
      :class="[
        'absolute z-10 flex bg-surface-inverse text-text-on-color',
        title ? 'w-[248px] flex-col gap-8 rounded-m px-16 pb-8 pt-16' : 'max-w-[300px] items-center gap-4 rounded-s p-8',
        place[position],
      ]"
    >
      <template v-if="title">
        <span class="flex flex-col gap-4">
          <span class="aw-label-medium">{{ title }}</span>
          <span class="aw-label-small">{{ text }}</span>
        </span>
        <span v-if="$slots.actions" class="flex h-40 items-center justify-end gap-8"><slot name="actions" /></span>
      </template>
      <template v-else>
        <span class="aw-label-small w-max max-w-[260px]">{{ text }}</span>
        <button v-if="closable" type="button" class="aw-hit flex size-24 shrink-0 items-center justify-center text-icon-primary" aria-label="Cerrar" @click="open = false">
          <AwIcon name="cancel-filled" :size="24" />
        </button>
      </template>
      <svg
        v-if="pointer"
        :class="['absolute fill-surface-inverse', ARROW[position].box, position === 'top' || position === 'bottom' ? ALIGN.x[align] : ALIGN.y[align]]"
        :viewBox="ARROW[position].view"
        aria-hidden="true"
      ><path :d="ARROW[position].d" /></svg>
    </span>
  </span>
</template>
