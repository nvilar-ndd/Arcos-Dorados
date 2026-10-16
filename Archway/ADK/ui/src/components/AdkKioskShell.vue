<script setup lang="ts">
/**
 * UI Shell de kiosco — Figma: UI Shell › Footers_shell (3845:1069) + foundations/layout.md.
 * Lienzo 1080 × 1920: header 192 · nav 248 (margen 32, gap 48) · contenido con scroll de 16 · footer flotante.
 * Todas las medidas salen de los tokens --adk-layout-*.
 *
 * `accessible`: modo de área accesible. Figma sólo define el rectángulo inferior (960, Accesibilidad_Footers);
 * acá todo lo interactivo (nav, contenido y footer) baja a ese rectángulo y el header se oculta (A-L02, a validar).
 */
import AdkScrollArea from './AdkScrollArea.vue'

withDefaults(defineProps<{ accessible?: boolean; contentLabel?: string }>(), { accessible: false, contentLabel: 'Productos' })
</script>

<template>
  <div
    class="adk-ui relative flex h-full w-full flex-col overflow-hidden bg-background-default text-text-primary"
    :data-accessible="accessible || undefined"
  >
    <div v-if="accessible" class="flex-1 bg-background-subtle" aria-hidden="true"><slot name="idle" /></div>
    <slot v-else name="header" />

    <div
      class="relative grid min-h-0 grid-cols-[var(--adk-layout-nav-width)_minmax(0,1fr)] gap-x-48 pl-32 pr-32"
      :class="accessible ? 'h-[var(--adk-layout-safe-area-height-extended)] shrink-0 pt-24' : 'flex-1 pt-24'"
    >
      <aside class="min-h-0 overflow-y-auto pb-[var(--adk-layout-footer-height)]"><slot name="nav" /></aside>
      <AdkScrollArea :label="contentLabel" class="min-h-0">
        <div class="flex flex-col gap-56 pb-[calc(var(--adk-layout-footer-height)+var(--adk-spacing-24))] pt-4">
          <slot />
        </div>
      </AdkScrollArea>
    </div>

    <div class="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-16">
      <slot name="snackbar" />
      <div class="w-full"><slot name="footer" /></div>
    </div>
  </div>
</template>
