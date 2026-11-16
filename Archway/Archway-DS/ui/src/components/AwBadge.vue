<script setup lang="ts">
/**
 * Badge — Figma: Design Resources CORE › Badge (2133:2088).
 * Va encima de otro elemento (ícono del NavBar, carrito). Large: número; Small: punto.
 * El número se suma al label del elemento que lo lleva: este componente sólo es visual (aria-hidden).
 * Color Highlight/new ("Color a revisar!!!" en Figma, audit C-S06).
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ count?: number; max?: number }>(), { count: undefined, max: 99 })
const text = computed(() => (props.count === undefined ? '' : props.count > props.max ? `${props.max}+` : String(props.count)))
</script>

<template>
  <span
    v-if="count === undefined"
    class="aw-ui inline-block size-8 rounded-full bg-highlight-new"
    aria-hidden="true"
  />
  <span
    v-else
    class="aw-ui aw-label-small inline-flex h-16 min-w-16 items-center justify-center rounded-full bg-highlight-new px-4 text-text-on-color"
    aria-hidden="true"
  >{{ text }}</span>
</template>
