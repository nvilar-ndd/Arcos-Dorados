<script setup lang="ts">
/**
 * category_buttons — Figma: Banners Categorias (3191:10152). 320 × 200, radio 12, elevación.
 * Nombre 28 Bold a la izquierda (padding 16) e ilustración de 190 recortada a la derecha (144 de ancho).
 */
withDefaults(defineProps<{ label: string; image?: string }>(), {})
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    type="button"
    class="adk-ui adk-focus adk-press flex h-[200px] w-[320px] items-center overflow-hidden rounded-m bg-background-default text-left text-text-primary shadow-bordered-down"
    @click="$emit('click', $event)"
  >
    <span class="adk-headline-extra-small-bold min-w-0 flex-1 break-words p-16">{{ label }}</span>
    <span class="flex h-full w-[144px] shrink-0 items-center overflow-hidden" aria-hidden="true">
      <img v-if="image" :src="image" alt="" class="size-[190px] max-w-none object-contain" />
      <slot v-else name="illustration" />
    </span>
  </button>
</template>
