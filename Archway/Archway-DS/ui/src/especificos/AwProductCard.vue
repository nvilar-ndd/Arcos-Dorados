<script setup lang="ts">
/**
 * Product Card 💠 (Carrousel cards / Classic / Small 144 · Big 224) — Figma: Design Resources CORE.
 * Imagen sobre fondo Surface/default radio S (8) con sombra 0 8 16 Black/800 16 % (Figma: estilo remoto
 * Elevation/Bordered Down, audit C-T05) → 16 → título Body Medium (2 líneas) → 8 → precio anterior
 * (Label Small, Text/secondary) y precio Heading Small Bold con los centavos en superíndice.
 * Loyalty: aro con el degradé de Loyalty alrededor del producto y, en lugar del precio, el tag de puntos
 * (Label Small Bold, radio XS, padding 4): Surface/brand con el ícono Loyalty, o Surface/muted con candado
 * si está bloqueado. Disabled: textos Text/disabled y producto al 50 %. Toda la card es un enlace.
 */
import AwIcon from '../components/AwIcon.vue'

withDefaults(
  defineProps<{
    name: string
    price?: string
    /** Centavos en superíndice ("89"). */
    cents?: string
    oldPrice?: string
    points?: string
    locked?: boolean
    image?: string
    size?: 'small' | 'big'
    href?: string
    disabled?: boolean
    skeleton?: boolean
  }>(),
  { price: undefined, cents: undefined, oldPrice: undefined, points: undefined, locked: false, image: undefined, size: 'small', href: undefined, disabled: false, skeleton: false },
)
defineEmits<{ click: [] }>()
</script>

<template>
  <div v-if="skeleton" :class="['aw-ui flex flex-col gap-16', size === 'small' ? 'w-[144px]' : 'w-[224px]']" aria-hidden="true">
    <span class="aw-shimmer h-[128px] rounded-s bg-surface-subtle" />
    <span class="flex flex-col gap-8">
      <span class="aw-shimmer h-16 w-full rounded-xs bg-surface-subtle" />
      <span class="aw-shimmer h-16 w-1/2 rounded-xs bg-surface-subtle" />
    </span>
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
    <span class="relative flex h-[128px] w-full items-center justify-center rounded-s bg-surface-default shadow-[0_8px_16px_0_color-mix(in_srgb,var(--aw-color-black-800)_16%,transparent)]">
      <span
        v-if="points"
        class="absolute left-1/2 top-8 size-[112px] -translate-x-1/2 rounded-full"
        style="background: linear-gradient(180deg, var(--aw-color-fuchsia-700) 0%, var(--aw-color-red-600) 45%, var(--aw-color-orange-500) 75%, var(--aw-color-gold-500) 90%, transparent 100%); -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px)); mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))"
        aria-hidden="true"
      />
      <img v-if="image" :src="image" alt="" :class="['relative object-contain', points ? 'h-[90px] w-[100px]' : 'h-[112px] w-[126px]', disabled ? 'opacity-50' : '']" />
    </span>
    <span class="flex flex-col gap-8">
      <span :class="['aw-text-body-medium line-clamp-2', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ name }}</span>
      <span
        v-if="points"
        :class="['aw-label-small-bold inline-flex h-24 items-center gap-4 self-start rounded-xs p-4 text-text-primary', locked ? 'bg-surface-muted' : 'bg-surface-brand']"
      >
        <AwIcon :name="locked ? 'lock' : 'loyalty-outline'" :size="16" />{{ points }}
      </span>
      <span v-else-if="price" class="flex flex-col">
        <span v-if="oldPrice" class="aw-label-small text-text-secondary"><span class="aw-sr-only">Antes </span>{{ oldPrice }}</span>
        <span :class="['aw-heading-small-bold', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ price }}<sup v-if="cents" class="aw-label-small-bold align-top">{{ cents }}</sup></span>
      </span>
    </span>
  </component>
</template>
