<script setup lang="ts">
/**
 * Nav.menu-button — Figma: Navegation › Nav.menu-button (137:2405).
 * Default 248 × 56 (ícono 48, texto 16) · compacto/A11y 80 × 48 (sólo ícono 32).
 * Seleccionado: fondo Ivory + barra Gold + texto Bold (el Bold es el segundo indicador, A-A01).
 */
import type { Component } from 'vue'

withDefaults(defineProps<{ label: string; icon?: Component; selected?: boolean; compact?: boolean }>(), {
  selected: false,
  compact: false,
})
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    type="button"
    :aria-current="selected ? 'page' : undefined"
    :aria-label="compact ? label : undefined"
    class="adk-ui adk-focus flex shrink-0 items-center text-text-primary"
    :class="[
      compact ? 'h-48 w-[80px] justify-center p-8' : 'h-56 w-full gap-24 px-16 py-4',
      selected
        ? compact ? 'border-b-selected border-border-selected' : 'border-l-selected border-border-selected bg-background-subtle'
        : 'bg-background-default',
    ]"
    @click="$emit('click', $event)"
  >
    <component
      :is="icon"
      v-if="icon"
      :class="[compact ? 'size-32' : 'size-48', selected ? 'text-border-selected' : 'text-text-disabled']"
      class="shrink-0"
      aria-hidden="true"
    />
    <span v-if="!compact" class="truncate text-left" :class="selected ? 'adk-body-small-bold' : 'adk-body-small'">{{ label }}</span>
  </button>
</template>
