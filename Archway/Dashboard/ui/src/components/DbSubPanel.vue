<script setup lang="ts">
/**
 * SubPanelLeft — Figma: ⮑ SubPanelLeft › SubPanelLeft-Countries (4103:18419).
 * Navegación secundaria de la configuración de un país. Mismos ítems que el Left panel, sin íconos.
 * stile: Default (272 desktop / 256 mobile) · Close (48 × 64: sólo un SmallFAB para reabrir).
 */
import { Menu, PanelLeftClose } from 'lucide-vue-next'
import DbIconButton from './DbIconButton.vue'
import DbSidebar, { type DbNavNode } from './DbSidebar.vue'

const current = defineModel<string | null>('current', { default: null })
const open = defineModel<boolean>('open', { default: true })

withDefaults(defineProps<{ items: DbNavNode[]; ariaLabel: string; width?: 272 | 256 }>(), { width: 272 })
const emit = defineEmits<{ navigate: [node: DbNavNode] }>()
</script>

<template>
  <div class="db-ui relative flex h-full shrink-0">
    <div v-if="!open" class="flex w-600 justify-end pr-0 pt-400">
      <DbIconButton :icon="Menu" :label="`Mostrar ${ariaLabel}`" aria-expanded="false" @click="open = true" />
    </div>
    <template v-else>
      <DbSidebar v-model:current="current" :items="items" :aria-label="ariaLabel" :width="width" :icons="false" @navigate="emit('navigate', $event)" />
      <DbIconButton
        class="absolute right-100 top-100"
        :icon="PanelLeftClose"
        variant="secondary"
        :label="`Ocultar ${ariaLabel}`"
        aria-expanded="true"
        @click="open = false"
      />
    </template>
  </div>
</template>
