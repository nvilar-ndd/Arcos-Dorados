<script setup lang="ts">
/**
 * Tile Misiones 💠 — Figma: Design Resources CORE › Tile Misiones (sobre Tile, 116 × 112).
 * Muestra una recompensa de la misión. Sin interacción: se renderiza como figura, no como botón
 * (Pressed sobra, ver doc).
 */
import AwIcon from '../components/AwIcon.vue'
import type { AwIconName } from '../icons'

withDefaults(defineProps<{ label?: string; icon?: AwIconName; image?: string; skeleton?: boolean }>(), {
  label: undefined, icon: 'deals', image: undefined, skeleton: false,
})
</script>

<template>
  <span v-if="skeleton" class="aw-ui aw-shimmer inline-block h-[112px] w-[116px] rounded-l bg-surface-subtle" aria-hidden="true" />
  <figure v-else class="aw-ui m-0 flex h-[112px] w-[116px] flex-col items-center justify-center gap-8 rounded-l border-[0.5px] border-border-subtle bg-surface-default p-8">
    <span class="flex size-48 items-center justify-center overflow-hidden rounded-full bg-feature-missions-surface text-icon-primary">
      <img v-if="image" :src="image" alt="" class="h-full w-full object-contain" />
      <AwIcon v-else :name="icon" />
    </span>
    <figcaption v-if="label" class="aw-label-small line-clamp-2 text-center text-text-primary">{{ label }}</figcaption>
  </figure>
</template>
