<script setup lang="ts">
/**
 * Tile / Category — Figma: Design Resources CORE › Tile (116 × 112), Category Primary (184 × 104),
 * Category Secondary (102 × 120). Radio L (16), Surface/default + Border/subtle 0.5 (decorativo).
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
      'aw-ui relative flex shrink-0 overflow-hidden rounded-l border-[0.5px] border-border-subtle bg-surface-default p-8 outline-none transition duration-fast ease-standard',
      'active:bg-button-secondary-bg-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong',
      type === 'tile' ? 'flex-col items-center justify-center gap-8' : '',
      type === 'category-primary' ? 'items-end active:scale-[0.97]' : '',
      type === 'category-secondary' ? 'flex-col items-center gap-4 active:scale-[0.97]' : '',
      size,
    ]"
    @click="$emit('click')"
  >
    <span v-if="type === 'tile'" class="flex size-48 items-center justify-center rounded-full bg-surface-brand text-icon-primary">
      <AwIcon v-if="icon" :name="icon" />
    </span>
    <img v-else-if="image" :src="image" alt="" :class="type === 'category-primary' ? 'absolute right-8 top-8 size-72 object-contain' : 'size-64 object-contain'" />
    <span
      :class="[
        'line-clamp-2 text-text-primary',
        type === 'category-primary' ? 'aw-label-medium relative max-w-[60%] text-left' : 'aw-label-small text-center',
      ]"
    >{{ label }}</span>
  </component>
</template>
