<script setup lang="ts">
/**
 * UI shell — Figma: ⮑ UI shell / Header + PanelLeft (658:40615 desktop · 658:55206 small).
 * Header (96) arriba; Left panel (272/256/48) a la izquierda; SubPanelLeft opcional; contenido.
 *  - ≥ 768 px (md): sidebar fija; el control del header alterna expandida / colapsada.
 *  - < 768 px: sidebar oculta; el control abre un drawer superpuesto que se cierra al navegar o con Escape.
 * Landmarks: banner, navigation(s) y main + skip link.
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const sidebarCollapsed = defineModel<boolean>('collapsed', { default: false })
const drawerOpen = defineModel<boolean>('drawer', { default: false })

const isMobile = ref(false)
let mq: MediaQueryList | null = null
const update = () => { isMobile.value = !!mq?.matches }

onMounted(() => {
  const bp = getComputedStyle(document.documentElement).getPropertyValue('--db-breakpoint-md').trim() || '768px'
  mq = window.matchMedia(`(max-width: calc(${bp} - 1px))`)
  update()
  mq.addEventListener('change', update)
})
onBeforeUnmount(() => mq?.removeEventListener('change', update))

/** Lo que el header debe mostrar como "expandido". */
const expanded = computed(() => (isMobile.value ? drawerOpen.value : !sidebarCollapsed.value))

function toggleSidebar() {
  if (isMobile.value) drawerOpen.value = !drawerOpen.value
  else sidebarCollapsed.value = !sidebarCollapsed.value
}

const drawer = ref<HTMLElement | null>(null)
watch(drawerOpen, async (open) => {
  if (!open) return
  await nextTick()
  drawer.value?.querySelector<HTMLElement>('a,button')?.focus()
})

defineExpose({ toggleSidebar, isMobile })
</script>

<template>
  <div class="db-ui flex h-full min-h-[480px] w-full flex-col bg-background-01">
    <a
      href="#db-main"
      class="db-focus db-label02 absolute left-200 top-200 z-50 -translate-y-[200%] rounded-sm bg-button-primary-enabled px-200 py-100 text-button-primary-text no-underline focus:translate-y-0"
    >Saltar al contenido</a>

    <slot name="header" :toggle-sidebar="toggleSidebar" :expanded="expanded" />

    <div class="relative flex min-h-0 flex-1">
      <!-- Desktop -->
      <div v-if="!isMobile" id="db-sidebar" class="flex">
        <slot name="sidebar" :collapsed="sidebarCollapsed" :mobile="false" />
      </div>

      <!-- Mobile: drawer -->
      <div
        v-else-if="drawerOpen"
        class="fixed inset-0 z-40 flex bg-[color-mix(in_srgb,var(--db-layer-06)_50%,transparent)]"
        @click.self="drawerOpen = false"
        @keydown.esc="drawerOpen = false"
      >
        <div id="db-sidebar" ref="drawer" role="dialog" aria-modal="true" aria-label="Menú" class="flex h-full">
          <slot name="sidebar" :collapsed="false" :mobile="true" />
        </div>
      </div>

      <slot name="subpanel" />

      <main id="db-main" tabindex="-1" class="min-w-0 flex-1 overflow-auto outline-none">
        <slot />
      </main>
    </div>
  </div>
</template>
