<script setup lang="ts">
/**
 * Tile / Category — Figma: Design Resources CORE › Tile (116 × 112), Category Primary (184 × 104),
 * Category Secondary (102 × 120). Radio L (16), Surface/default + Border/subtle 0.5 Inside (decorativo).
 * Tile: sombra Shallow/L.Elev-1, ícono 24 en contenedor 40 radio M sobre Surface/brand.
 * Category Primary: fila con padding 16/8, ilustración 72 a la izquierda y título abajo (Label Medium).
 * Category Secondary: columna con padding 8, ilustración 64 y título centrado (Label Small).
 * Pressed: Button/secondary-bg-pressed; en Category, leve escala antes de navegar (< 1 s).
 */
import { computed } from 'vue'
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

const props = withDefaults(
  defineProps<{ label: string; type?: 'tile' | 'category-primary' | 'category-secondary'; icon?: AwIconName; image?: string; href?: string; skeleton?: boolean }>(),
  { type: 'tile', icon: undefined, image: undefined, href: undefined, skeleton: false },
)
defineEmits<{ click: [] }>()
const size = computed(() => ({ tile: 'h-[112px] w-[116px]', 'category-primary': 'h-[104px] w-[184px]', 'category-secondary': 'h-[120px] w-[102px]' }[props.type]))
</script>

<template>
  <span v-if="skeleton" :class="['aw-ui inline-block rounded-l bg-surface-subtle', size]" aria-hidden="true" />
  <component
    :is="href ? 'a' : 'button'"
    v-else
    :href="href"
    :type="href ? undefined : 'button'"
    :class="[
      'aw-ui relative flex shrink-0 overflow-hidden rounded-l bg-surface-default outline-none transition duration-fast ease-standard',
      'active:bg-button-secondary-bg-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong',
      type === 'tile'
        ? 'flex-col items-center justify-center gap-8 p-8 shadow-[inset_0_0_0_0.5px_var(--aw-border-subtle),var(--aw-shadow-shallow-l-elev-1)]'
        : 'shadow-[inset_0_0_0_0.5px_var(--aw-border-subtle)]',
      type === 'category-primary' ? 'items-end gap-8 px-8 py-16 active:scale-[0.97]' : '',
      type === 'category-secondary' ? 'flex-col items-center gap-8 p-8 active:scale-[0.97]' : '',
      size,
    ]"
    @click="$emit('click')"
  >
    <span v-if="type === 'tile'" class="flex size-40 shrink-0 items-center justify-center rounded-m bg-surface-brand text-icon-primary">
      <AwIcon v-if="icon" :name="icon" />
    </span>
    <img v-else-if="image" :src="image" alt="" :class="type === 'category-primary' ? 'size-72 shrink-0 object-contain' : 'size-64 shrink-0 object-contain'" />
    <span
      :class="[
        'line-clamp-2 text-text-primary',
        type === 'category-primary' ? 'aw-label-medium min-w-0 flex-1 text-left' : 'aw-label-small text-center',
      ]"
    >{{ label }}</span>
  </component>
</template>
