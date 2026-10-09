<script setup lang="ts">
/**
 * Scroll — Figma: Scroll Bar › Scroll (143:931). Barra de 16 siempre visible (track Light Grey, thumb Grey, radio 16).
 * La barra es un indicador: el scroll se hace deslizando el contenido. El thumb además se puede arrastrar.
 * Agregados de a11y: región enfocable con nombre (teclado), barra aria-hidden.
 * Thumb #ADADAD vs track #D6D6D6 = 1.54:1 queda como en Figma hasta que se apruebe A-A03.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(defineProps<{ label: string; gap?: boolean }>(), { gap: true })
const box = ref<HTMLElement | null>(null)
const thumb = ref({ top: 0, height: 100, visible: false })
let ro: ResizeObserver | null = null

function measure() {
  const el = box.value
  if (!el) return
  const ratio = el.clientHeight / el.scrollHeight
  thumb.value = {
    visible: ratio < 1,
    height: Math.max(ratio * 100, 8),
    top: (el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight)) * (100 - Math.max(ratio * 100, 8)),
  }
}
let start = { y: 0, scroll: 0 }
function drag(e: PointerEvent) {
  const el = box.value
  if (!el) return
  el.scrollTop = start.scroll + ((e.clientY - start.y) / el.clientHeight) * el.scrollHeight
}
function down(e: PointerEvent) {
  start = { y: e.clientY, scroll: box.value?.scrollTop ?? 0 }
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
}
onMounted(() => {
  measure()
  ro = new ResizeObserver(measure)
  if (box.value) {
    ro.observe(box.value)
    if (box.value.firstElementChild) ro.observe(box.value.firstElementChild)
  }
})
onBeforeUnmount(() => ro?.disconnect())
</script>

<template>
  <div class="adk-ui relative flex min-h-0">
    <div
      ref="box"
      tabindex="0"
      role="region"
      :aria-label="label"
      class="adk-focus min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      :class="gap ? 'pr-48' : ''"
      @scroll.passive="measure"
    >
      <div><slot /></div>
    </div>
    <div v-show="thumb.visible" class="absolute inset-y-0 right-0 w-[16px] rounded-l bg-scroll-track" aria-hidden="true">
      <div
        class="absolute inset-x-0 cursor-grab touch-none rounded-l bg-scroll-thumb"
        :style="{ top: `${thumb.top}%`, height: `${thumb.height}%` }"
        @pointerdown="down"
        @pointermove="(e) => e.buttons && drag(e)"
      />
    </div>
  </div>
</template>
