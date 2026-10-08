<script setup lang="ts">
/**
 * Link — Figma: Components › Link (714:27725).
 * Figma usa `text/primary` sin estados; se respeta el color y se agrega subrayado en hover/foco
 * para que el link sea distinguible (WCAG 1.4.1, audit D-C11).
 * Sin `href` se renderiza como <button> (acciones como "+ Agregar marca de moneda").
 */
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    href?: string
    iconLeft?: Component
    iconRight?: Component
    /** Abre en otra pestaña y lo anuncia. */
    external?: boolean
  }>(),
  { external: false },
)
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="db-ui db-focus db-label02 inline-flex items-center gap-100 rounded-sm py-100 text-text-primary no-underline underline-offset-4 hover:underline focus-visible:underline"
    @click="$emit('click', $event)"
  >
    <component :is="iconLeft" v-if="iconLeft" class="size-200 shrink-0" aria-hidden="true" />
    <slot />
    <component :is="iconRight" v-if="iconRight" class="size-200 shrink-0" aria-hidden="true" />
    <span v-if="external" class="db-sr-only">(se abre en otra pestaña)</span>
  </component>
</template>
