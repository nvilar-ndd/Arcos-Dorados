<script setup lang="ts">
/**
 * Carousel — Figma: Components › Carousel (6539:5188).
 * Type: Arrows (flechas afuera) · Float Arrow (sobre la imagen) · Dots · Simple (sólo swipe/scroll).
 * Dot activo `button/primary-enabled`; inactivo `border/03` (#ADADAD suelto en Figma, D-C04).
 * Sin autoplay (WCAG 2.2.2).
 */
import { computed, useId } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

export interface DbSlide { src?: string; alt: string }

const index = defineModel<number>({ default: 0 })

const props = withDefaults(
  defineProps<{
    slides: DbSlide[]
    label: string
    variant?: 'arrows' | 'float-arrows' | 'dots' | 'simple'
    /** Relación de aspecto de cada imagen (Figma: 672 × 230 ≈ 3 / 1). */
    aspect?: string
  }>(),
  { variant: 'dots', aspect: '3 / 1' },
)

const id = useId()
const count = computed(() => props.slides.length)
const current = computed(() => props.slides[index.value])
function go(step: number) {
  index.value = (index.value + step + count.value) % count.value
}
</script>

<template>
  <section
    class="db-ui flex w-full flex-col gap-200"
    aria-roledescription="carrusel"
    :aria-label="label"
  >
    <div :class="['flex items-center', variant === 'arrows' ? 'gap-200' : '']">
      <button
        v-if="variant === 'arrows'"
        type="button"
        class="db-focus inline-flex size-500 shrink-0 items-center justify-center rounded-full bg-button-transparent text-icon-primary hover:bg-button-secondary-hover"
        aria-label="Imagen anterior"
        :aria-controls="id"
        @click="go(-1)"
      >
        <ChevronLeft class="size-300" aria-hidden="true" />
      </button>

      <div :id="id" class="relative flex-1 overflow-hidden rounded-sm bg-layer-02" aria-live="polite">
        <div
          v-if="variant === 'simple'"
          class="db-focus flex snap-x snap-mandatory gap-200 overflow-x-auto"
          tabindex="0"
          :aria-label="label"
        >
          <div v-for="(s, i) in slides" :key="i" class="w-full shrink-0 snap-center bg-layer-02" :style="{ aspectRatio: aspect }">
            <img v-if="s.src" :src="s.src" :alt="s.alt" class="size-full object-cover" />
          </div>
        </div>
        <div v-else role="group" aria-roledescription="diapositiva" :aria-label="`${index + 1} de ${count}`" class="w-full" :style="{ aspectRatio: aspect }">
          <img v-if="current?.src" :src="current.src" :alt="current.alt" class="size-full object-cover" />
          <span v-else class="db-sr-only">{{ current?.alt }}</span>
        </div>

        <template v-if="variant === 'float-arrows'">
          <button
            type="button"
            class="db-focus absolute left-100 top-1/2 inline-flex size-500 -translate-y-1/2 items-center justify-center rounded-full bg-layer-01 text-icon-primary shadow-raised-down"
            aria-label="Imagen anterior"
            @click="go(-1)"
          >
            <ChevronLeft class="size-300" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="db-focus absolute right-100 top-1/2 inline-flex size-500 -translate-y-1/2 items-center justify-center rounded-full bg-layer-01 text-icon-primary shadow-raised-down"
            aria-label="Imagen siguiente"
            @click="go(1)"
          >
            <ChevronRight class="size-300" aria-hidden="true" />
          </button>
        </template>
      </div>

      <button
        v-if="variant === 'arrows'"
        type="button"
        class="db-focus inline-flex size-500 shrink-0 items-center justify-center rounded-full bg-button-transparent text-icon-primary hover:bg-button-secondary-hover"
        aria-label="Imagen siguiente"
        :aria-controls="id"
        @click="go(1)"
      >
        <ChevronRight class="size-300" aria-hidden="true" />
      </button>
    </div>

    <div v-if="variant === 'dots'" class="flex justify-center gap-50">
      <button
        v-for="(s, i) in slides"
        :key="i"
        type="button"
        class="db-focus inline-flex size-300 items-center justify-center rounded-full"
        :aria-label="`Imagen ${i + 1} de ${count}`"
        :aria-current="i === index || undefined"
        @click="index = i"
      >
        <span
          :class="['block rounded-full transition-all duration-fast', i === index ? 'size-100 bg-button-primary-enabled' : 'size-[6px] bg-border-03']"
          aria-hidden="true"
        />
      </button>
    </div>
  </section>
</template>
