<script setup lang="ts">
/**
 * Top Bar (Android custom / web) — Figma: Design Resources CORE › Top Bar. En iOS es la barra nativa.
 * Alto 64 · padding 8 / 16 · gap 8 · Surface/default. Leading Icon Only Ghost (back o close),
 * título Heading Small Bold en una línea, trailing "Ayuda" (Secondary Small Round).
 */
import AwIconButton from './AwIconButton.vue'
import AwButton from './AwButton.vue'

withDefaults(defineProps<{ title?: string; leading?: 'back' | 'close' | 'none'; helpLabel?: string }>(), {
  title: undefined, leading: 'back', helpLabel: undefined,
})
defineEmits<{ leading: []; help: [] }>()
</script>

<template>
  <header class="aw-ui flex h-64 w-full min-w-[360px] items-center gap-16 bg-surface-default px-16 py-8">
    <AwIconButton
      v-if="leading !== 'none'"
      :icon="leading === 'back' ? 'chevron-left' : 'close'"
      :art="leading === 'back' ? 32 : 48"
      :label="leading === 'back' ? 'Volver' : 'Cerrar'"
      variant="ghost"
      @click="$emit('leading')"
    />
    <h1 v-if="title" class="aw-heading-small-bold min-w-0 flex-1 truncate text-text-primary">{{ title }}</h1>
    <span v-else class="flex-1" />
    <slot name="trailing">
      <AwButton v-if="helpLabel" :label="helpLabel" variant="secondary" size="small" shape="round" @click="$emit('help')" />
    </slot>
  </header>
</template>
