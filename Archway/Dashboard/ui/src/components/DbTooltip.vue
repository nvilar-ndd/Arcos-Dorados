<script setup lang="ts">
/**
 * Tooltip — Figma: Components › Tooltips (820:3726).
 * Burbuja `layer/06` + `text/on-color`, `Label01`, a 4 px del disparador (regla de Figma).
 * Position: top · bottom · left · right × alignment: start · center · end × Size: small (1 línea) · big (hasta 4).
 * Abre con hover, foco y clic/tap; Escape cierra (WCAG 1.4.13).
 */
import { computed, ref, useId } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    position?: 'top' | 'bottom' | 'left' | 'right'
    align?: 'start' | 'center' | 'end'
    size?: 'small' | 'big'
    /** Forzar abierto (documentación). */
    open?: boolean
  }>(),
  { position: 'top', align: 'center', size: 'small', open: undefined },
)

const id = useId()
const shown = ref(false)
const visible = computed(() => props.open ?? shown.value)

const placement = computed(() => {
  const p = props.position
  const a = props.align
  const main = {
    top: 'bottom-full mb-50',
    bottom: 'top-full mt-50',
    left: 'right-full mr-50',
    right: 'left-full ml-50',
  }[p]
  const cross =
    p === 'top' || p === 'bottom'
      ? { start: 'left-0', center: 'left-1/2 -translate-x-1/2', end: 'right-0' }[a]
      : { start: 'top-0', center: 'top-1/2 -translate-y-1/2', end: 'bottom-0' }[a]
  return `${main} ${cross}`
})

const arrow = computed(() => {
  const p = props.position
  const a = props.align
  const along = p === 'top' || p === 'bottom'
    ? { start: 'left-200', center: 'left-1/2 -translate-x-1/2', end: 'right-200' }[a]
    : { start: 'top-100', center: 'top-1/2 -translate-y-1/2', end: 'bottom-100' }[a]
  const side = { top: 'top-full border-t-layer-06 border-x-transparent border-b-0', bottom: 'bottom-full border-b-layer-06 border-x-transparent border-t-0', left: 'left-full border-l-layer-06 border-y-transparent border-r-0', right: 'right-full border-r-layer-06 border-y-transparent border-l-0' }[p]
  return `${along} ${side}`
})
</script>

<template>
  <span
    class="db-ui relative inline-flex"
    @mouseenter="shown = true"
    @mouseleave="shown = false"
    @focusin="shown = true"
    @focusout="shown = false"
    @click="shown = !shown"
    @keydown.esc="shown = false"
  >
    <span :aria-describedby="visible ? id : undefined" class="inline-flex">
      <slot />
    </span>
    <span
      v-show="visible"
      :id="id"
      role="tooltip"
      :class="[
        'db-label01 absolute z-30 w-max rounded-sm bg-layer-06 px-100 py-50 text-text-on-color',
        size === 'small' ? 'max-w-[240px] whitespace-nowrap' : 'max-w-[240px] whitespace-normal [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical] overflow-hidden',
        placement,
      ]"
    >
      {{ text }}
      <span :class="['absolute size-0 border-[4px] border-solid', arrow]" aria-hidden="true" />
    </span>
  </span>
</template>
