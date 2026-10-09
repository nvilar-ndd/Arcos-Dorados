<script setup lang="ts" generic="T extends string">
/**
 * Nav.menu — Figma: Navegation › Nav.menu (3241:8311). 248 de ancho, radio 8, elevación bordered-down.
 * Saludo (User points) arriba y las secciones abajo. `compact` = versión A11y: íconos en fila con barra inferior.
 */
import type { Component } from 'vue'
import AdkNavButton from './AdkNavButton.vue'
import AdkUserPoints from './AdkUserPoints.vue'

export interface AdkNavItem<V extends string = string> { value: V; label: string; icon?: Component }

const current = defineModel<T>('current')
withDefaults(
  defineProps<{ items: AdkNavItem<T>[]; userName?: string; points?: string; compact?: boolean; label?: string }>(),
  { compact: false, label: 'Secciones' },
)
</script>

<template>
  <nav :aria-label="label" class="adk-ui flex w-nav flex-col overflow-hidden rounded-s bg-background-default shadow-bordered-down">
    <AdkUserPoints class="p-16" :name="userName" :points="points" :compact="compact" />
    <ul :class="compact ? 'flex' : 'flex flex-col'">
      <li v-for="item in items" :key="item.value" :class="compact ? 'flex-1' : ''">
        <AdkNavButton
          :label="item.label"
          :icon="item.icon"
          :compact="compact"
          :selected="item.value === current"
          :class="compact ? 'w-full' : ''"
          @click="current = item.value"
        />
      </li>
    </ul>
  </nav>
</template>
