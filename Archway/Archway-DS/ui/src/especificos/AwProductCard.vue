<script setup lang="ts">
/**
 * Product Card 💠 (Classic Small 144 × 216 / Big 224 × 212) — Figma: Design Resources CORE.
 * Imagen Surface/subtle radio S → 16 → título Body Medium → 8 → precio Heading Small Bold.
 * Precio con descuento: Feedback/error-text (Figma usa #DB0007 suelto, audit C-T02).
 * Disabled con tokens (no opacidad, C-A05). Toda la card es un enlace; el nombre lo anuncia.
 */
import AwIcon from '../components/AwIcon.vue'

withDefaults(
  defineProps<{ name: string; price: string; oldPrice?: string; points?: string; image?: string; size?: 'small' | 'big'; href?: string; disabled?: boolean; skeleton?: boolean }>(),
  { oldPrice: undefined, points: undefined, image: undefined, size: 'small', href: undefined, disabled: false, skeleton: false },
)
defineEmits<{ click: [] }>()
</script>

<template>
  <div v-if="skeleton" :class="['aw-ui flex flex-col gap-16', size === 'small' ? 'w-[144px]' : 'w-[224px]']" aria-hidden="true">
    <span :class="['aw-shimmer rounded-s bg-surface-subtle', size === 'small' ? 'h-[128px]' : 'h-[128px]']" />
    <span class="aw-shimmer h-16 w-3/4 rounded-xs bg-surface-muted" />
    <span class="aw-shimmer h-16 w-1/2 rounded-xs bg-surface-muted" />
  </div>
  <component
    :is="disabled ? 'div' : href ? 'a' : 'button'"
    v-else
    :href="disabled ? undefined : href"
    :type="!disabled && !href ? 'button' : undefined"
    :aria-disabled="disabled || undefined"
    :class="['aw-ui flex shrink-0 flex-col gap-16 rounded-s text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong', size === 'small' ? 'w-[144px]' : 'w-[224px]']"
    @click="!disabled && $emit('click')"
  >
    <span class="relative flex h-[128px] w-full items-center justify-center overflow-hidden rounded-s bg-surface-subtle">
      <img v-if="image" :src="image" alt="" :class="['h-full w-full object-contain', disabled ? 'grayscale' : '']" />
      <span v-if="points" class="aw-label-small absolute left-8 top-8 flex items-center gap-4 rounded-xs bg-surface-brand px-4 text-text-primary">
        <AwIcon name="loyalty" :size="16" class="text-icon-gold" /> {{ points }}
      </span>
    </span>
    <span class="flex flex-col gap-8">
      <span :class="['aw-text-body-medium line-clamp-2', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ name }}</span>
      <span class="flex items-baseline gap-8">
        <span :class="['aw-heading-small-bold', disabled ? 'text-text-disabled' : oldPrice ? 'text-feedback-error-text' : 'text-text-primary']">{{ price }}</span>
        <s v-if="oldPrice" class="aw-label-small text-text-secondary"><span class="aw-sr-only">Antes </span>{{ oldPrice }}</s>
      </span>
    </span>
  </component>
</template>
