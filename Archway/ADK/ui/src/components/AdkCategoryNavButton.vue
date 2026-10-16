<script setup lang="ts">
/**
 * nav.category-button — Figma: Navegation › nav.category-button (137:1486). 248 × 56.
 * Ilustración de la categoría en un círculo Ivory (48) + nombre. Seleccionado: barra Gold + Bold.
 */
withDefaults(defineProps<{ label: string; image?: string; selected?: boolean }>(), { selected: false })
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    type="button"
    :aria-current="selected ? 'page' : undefined"
    class="adk-ui adk-focus flex h-56 w-full items-center gap-24 px-16 text-left text-text-primary"
    :class="selected ? 'border-l-selected border-border-selected bg-background-default' : 'bg-background-default'"
    @click="$emit('click', $event)"
  >
    <span class="flex size-48 shrink-0 items-center justify-center overflow-hidden rounded-full" :class="selected ? '' : 'bg-background-subtle'" aria-hidden="true">
      <img v-if="image" :src="image" alt="" class="size-32 object-contain" />
      <slot v-else name="illustration" />
    </span>
    <span class="line-clamp-2" :class="selected ? 'adk-body-small-bold' : 'adk-body-small'">{{ label }}</span>
  </button>
</template>
