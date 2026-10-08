<script setup lang="ts">
/**
 * Card_Option (2559:4600) y Cards_Category (2530:4492) — cards navegables.
 *  - option:   288 × 68, ícono + título + descripción (+ link)
 *  - category: 154 × 160, ícono grande sobre `icon/background` + label
 * Estados Figma: enabled · hovered (igual a enabled, D-C08) · pressed (borde `border/01` 2 px).
 * Se renderiza como un único <a> o <button> que cubre toda la card.
 */
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    variant?: 'option' | 'category'
    title: string
    description?: string
    icon?: Component
    href?: string
    /** Muestra el estado "pressed" de Figma (p. ej. opción elegida). */
    selected?: boolean
    linkLabel?: string
  }>(),
  { variant: 'option', selected: false },
)
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    :aria-current="href && selected ? 'page' : undefined"
    :aria-pressed="!href ? selected : undefined"
    :class="[
      'db-ui db-focus flex rounded-md bg-layer-01 p-200 text-left text-text-primary no-underline transition-colors duration-fast',
      selected ? 'border-2 border-border-01' : 'border border-border-02 active:border-2 active:border-border-01',
      variant === 'option' ? 'w-full max-w-[288px] items-center gap-200' : 'size-[160px] max-w-[154px] flex-col items-center justify-center gap-200 text-center',
    ]"
    @click="$emit('click', $event)"
  >
    <span
      v-if="icon"
      :class="variant === 'category' ? 'inline-flex size-800 items-center justify-center rounded-full bg-icon-background' : 'inline-flex'"
      aria-hidden="true"
    >
      <component :is="icon" :class="variant === 'category' ? 'size-500 text-icon-primary' : 'size-300 text-icon-primary'" />
    </span>
    <span class="flex min-w-0 flex-1 flex-col gap-50">
      <span class="db-label02 text-text-primary">{{ title }}</span>
      <span v-if="description" class="db-label01 text-text-secondary">{{ description }}</span>
    </span>
    <span v-if="linkLabel && variant === 'option'" class="db-label03 shrink-0 text-link-primary">{{ linkLabel }}</span>
  </component>
</template>
