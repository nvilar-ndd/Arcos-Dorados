<script setup lang="ts">
/**
 * Tooltip (Plain y Rich) — Figma: Design Resources CORE › Tooltip. Surface/inverse, texto on-color
 * (14.55:1). Plain: Label Small, alto mín. 36, ancho 68–300. Rich: 248, título + cuerpo.
 * Aparece con tap/click o foco en el disparador; se cierra con X, tap fuera o Escape (WCAG 1.4.13).
 * El contenido queda vinculado al disparador con aria-describedby.
 */
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'
import AwIcon from './AwIcon.vue'

const open = defineModel<boolean>('open', { default: false })
withDefaults(
  defineProps<{ text: string; title?: string; position?: 'top' | 'bottom' | 'left' | 'right'; pointer?: boolean; closable?: boolean }>(),
  { title: undefined, position: 'top', pointer: true, closable: false },
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
const arrow = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-surface-inverse border-x-transparent border-b-0 border-x-8 border-t-8',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-surface-inverse border-x-transparent border-t-0 border-x-8 border-b-8',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-surface-inverse border-y-transparent border-r-0 border-y-8 border-l-8',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-surface-inverse border-y-transparent border-l-0 border-y-8 border-r-8',
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
        'absolute z-10 flex gap-8 bg-surface-inverse text-text-on-color shadow-shallow-m-elev-2',
        title ? 'w-[248px] flex-col rounded-m p-16' : 'min-h-[36px] min-w-[68px] max-w-[300px] items-center rounded-s px-16 py-8',
        place[position],
      ]"
    >
      <span v-if="title" class="aw-label-medium-bold">{{ title }}</span>
      <span :class="title ? 'aw-label-medium' : 'aw-label-small w-max max-w-[240px]'">{{ text }}</span>
      <button v-if="closable" type="button" class="aw-hit ml-auto text-icon-on-color" aria-label="Cerrar" @click="open = false">
        <AwIcon name="close" :size="16" />
      </button>
      <span v-if="pointer" :class="['absolute size-0 border-solid', arrow[position]]" aria-hidden="true" />
    </span>
  </span>
</template>
