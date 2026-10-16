<script setup lang="ts">
/**
 * Ítem de navegación — Figma: UI shell - Left panel items › sidebar (582:6524) e item (3815:7579).
 * Nivel 1: 40 px, padding 16, gap 8 (`Open_panel` 272 · `Close_panel` 48 sólo ícono).
 * Nivel 2 (subítem): 32 px, sangría 56.
 * Estados: enabled · hovered `button/secondary-hover` · focused `button/secondary-focus` + `border/01`
 * · pressed `button/secondary-pressed-transparent` · Active (barra `border/04` + peso) · disabled.
 */
import type { Component } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    label: string
    icon?: Component
    level?: 1 | 2
    href?: string
    /** Página actual. */
    current?: boolean
    /** Categoría que contiene la página actual (Active_item). */
    containsCurrent?: boolean
    /** Tiene subítems: se renderiza como botón con chevron. */
    expandable?: boolean
    expanded?: boolean
    collapsed?: boolean
    disabled?: boolean
    controls?: string
  }>(),
  { level: 1, current: false, containsCurrent: false, expandable: false, expanded: false, collapsed: false, disabled: false },
)
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <component
    :is="expandable || !href ? 'button' : 'a'"
    :href="!expandable ? href : undefined"
    :type="expandable || !href ? 'button' : undefined"
    :aria-current="current ? 'page' : undefined"
    :aria-expanded="expandable ? expanded : undefined"
    :aria-controls="expandable ? controls : undefined"
    :aria-label="collapsed ? label : undefined"
    :disabled="disabled || undefined"
    :class="[
      'db-ui relative flex w-full items-center gap-100 text-left text-text-primary no-underline outline-none transition-colors duration-fast',
      level === 1 ? 'h-500 px-200' : 'h-400 pl-700 pr-200',
      collapsed && 'justify-center px-0',
      disabled
        ? 'cursor-not-allowed bg-button-secondary text-text-disabled'
        : current && level === 2
          ? 'bg-button-secondary'
          : 'bg-layer-01 hover:bg-button-secondary-hover focus-visible:bg-button-secondary-focus focus-visible:shadow-[inset_0_0_0_1px_var(--db-border-01)] active:bg-button-secondary-pressed-transparent',
    ]"
    @click="$emit('click', $event)"
  >
    <!-- Indicador Active: barra dorada de 4 px a la izquierda -->
    <span v-if="current" class="absolute inset-y-0 left-0 w-50 bg-border-04" aria-hidden="true" />
    <component
      :is="icon"
      v-if="icon && level === 1"
      :class="['size-200 shrink-0', disabled ? 'text-text-disabled' : 'text-icon-primary']"
      :stroke-width="current || containsCurrent ? 2.25 : 1.75"
      aria-hidden="true"
    />
    <span
      v-if="!collapsed"
      :class="['min-w-0 flex-1 truncate', current || containsCurrent ? 'db-label03' : 'db-label02']"
    >{{ label }}</span>
    <ChevronDown
      v-if="expandable && !collapsed"
      :class="['size-200 shrink-0 text-icon-primary transition-transform duration-fast', expanded && 'rotate-180']"
      aria-hidden="true"
    />
  </component>
</template>
