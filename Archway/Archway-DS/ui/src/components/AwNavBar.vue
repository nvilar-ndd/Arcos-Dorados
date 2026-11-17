<script setup lang="ts">
/**
 * NavBar (Android custom / web) — Figma: Design Resources CORE › NavBarCustom + NavItem.
 * En iOS es el TabBar nativo (Liquid Glass). Contenedor flotante Surface/default, radio XXL,
 * sombra Shallow/M.Elev-2, padding 4; 4 ítems de 56 de alto que se superponen 8 (Figma: gap −8).
 * Margen 16/16/24/16. Selected: Surface/inverse, ícono Icon/gold y texto on-color Bold. Un solo ítem seleccionado (aria-current="page").
 */
import AwIcon from './AwIcon.vue'
import AwBadge from './AwBadge.vue'
import type { AwIconName } from '../icons'

export interface AwNavItem { id: string; label: string; icon: AwIconName; href?: string; badge?: number | boolean }
const model = defineModel<string>({ required: true })
defineProps<{ items: AwNavItem[]; label?: string }>()
</script>

<template>
  <nav :aria-label="label ?? 'Navegación principal'" class="aw-ui w-full px-16 pb-24 pt-16">
    <ul class="flex rounded-xxl bg-surface-default p-4 shadow-shallow-m-elev-2">
      <li v-for="it in items" :key="it.id" class="min-w-0 flex-1 [&:not(:first-child)]:-ml-8">
        <component
          :is="it.href ? 'a' : 'button'"
          :href="it.href"
          :type="it.href ? undefined : 'button'"
          :aria-current="model === it.id ? 'page' : undefined"
          :class="[
            'relative flex h-56 w-full flex-col items-center justify-center rounded-xxl outline-none transition-colors duration-fast ease-standard focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-border-strong',
            model === it.id ? 'bg-surface-inverse text-text-on-color aw-label-small-bold' : 'aw-label-small text-text-secondary active:bg-surface-subtle',
          ]"
          @click="model = it.id"
        >
          <span class="relative">
            <AwIcon :name="it.icon" :class="model === it.id ? 'text-icon-gold' : 'text-icon-primary'" />
            <AwBadge v-if="it.badge" :count="typeof it.badge === 'number' ? it.badge : undefined" class="absolute -right-8 -top-4" />
          </span>
          {{ it.label }}
        </component>
      </li>
    </ul>
  </nav>
</template>
