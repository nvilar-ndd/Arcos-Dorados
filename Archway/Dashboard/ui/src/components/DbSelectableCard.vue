<script setup lang="ts">
/**
 * Selectable Card — Figma: Components › Selectable Card (6605:6053).
 * type: multi (checkbox) · single (radio) × image: carrusel (varias) · simple (una) × state.
 * 427 de ancho, padding 16, gap 8, radio `radius/md`. Hover: se eleva con sombra. Pressed (seleccionada):
 * borde 2 px oscuro (`#292929` suelto en Figma → `border/01`) y control activo arriba a la derecha.
 * La card entera es el <label> del input real.
 */
import { computed, useId } from 'vue'
import DbCarousel, { type DbSlide } from './DbCarousel.vue'

const checked = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    label: string
    images: DbSlide[]
    type?: 'multi' | 'single'
    /** `single`: nombre del grupo de radios. */
    name?: string
    value?: string
    disabled?: boolean
  }>(),
  { type: 'multi', disabled: false },
)

const id = useId()
const slide = defineModel<number>('slide', { default: 0 })
const many = computed(() => props.images.length > 1)
</script>

<template>
  <div
    :class="[
      'db-ui group relative flex w-full max-w-[427px] flex-col gap-100 rounded-md bg-background-01 p-200 transition-shadow duration-fast',
      checked ? 'border-2 border-border-01' : 'border border-border-02 hover:shadow-raised-down',
      disabled && 'opacity-50',
    ]"
  >
    <!-- Los controles del carrusel quedan por encima del área clicable de la card. -->
    <div v-if="many" class="pointer-events-none relative z-[2] [&_button]:pointer-events-auto">
      <DbCarousel v-model="slide" :slides="images" :label="`Imágenes de ${label}`" variant="dots" aspect="3 / 2" />
    </div>
    <div v-else class="aspect-[3/2] w-full overflow-hidden rounded-sm bg-layer-02">
      <img v-if="images[0]?.src" :src="images[0].src" :alt="images[0].alt" class="size-full object-cover" />
    </div>

    <input
      :id="id"
      class="peer db-sr-only"
      :type="type === 'multi' ? 'checkbox' : 'radio'"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="checked = ($event.target as HTMLInputElement).checked"
    />
    <label
      :for="id"
      class="flex cursor-pointer items-center gap-100 after:absolute after:inset-0 after:rounded-md after:content-[''] peer-focus-visible:after:outline peer-focus-visible:after:outline-2 peer-focus-visible:after:outline-offset-2 peer-focus-visible:after:outline-border-01"
    >
      <span :class="checked ? 'db-label03 text-text-primary' : 'db-label02 text-text-secondary'">{{ label }}</span>
    </label>

    <!-- Control siempre visible arriba a la derecha (regla de Figma). -->
    <span class="pointer-events-none absolute right-300 top-300 z-[3] inline-flex size-300 items-center justify-center" aria-hidden="true">
      <span
        :class="[
          'flex size-[18px] items-center justify-center',
          type === 'multi' ? 'rounded-[2px]' : 'rounded-full',
          checked ? 'bg-layer-07' : 'border-2 border-icon-primary bg-background-01',
        ]"
      >
        <svg v-if="checked" viewBox="0 0 16 16" class="size-200 text-icon-primary">
          <path d="m3.5 8.5 3 3 6-6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </span>

  </div>
</template>
