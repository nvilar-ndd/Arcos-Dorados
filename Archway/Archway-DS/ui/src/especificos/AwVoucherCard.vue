<script setup lang="ts">
/**
 * Card / Voucher 💠 — Figma: Design Resources CORE › Card / Voucher (deriva de Card Nivel 2).
 * Lo propio del voucher: el troquel (muescas laterales) y la franja de acción
 * Feature/missions-surface. Type Img Product · Img Left · Icon Left.
 */
import AwIcon from '../components/AwIcon.vue'
import AwTag from '../components/AwTag.vue'
import type { AwIconName } from '../icons'

withDefaults(
  defineProps<{ headline: string; subhead?: string; support?: string[]; tag?: string; image?: string; icon?: AwIconName; actionLabel?: string; href?: string }>(),
  { subhead: undefined, support: () => [], tag: undefined, image: undefined, icon: 'deals', actionLabel: 'Ver cupón', href: undefined },
)
defineEmits<{ click: [] }>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    class="aw-ui relative flex w-full min-w-[328px] flex-col overflow-hidden rounded-s bg-surface-default text-left shadow-shallow-l-elev-1 outline-none active:bg-surface-subtle focus-visible:shadow-[inset_0_0_0_2px_var(--aw-border-strong)]"
    @click="$emit('click')"
  >
    <div class="flex items-center gap-16 p-16">
      <img v-if="image" :src="image" alt="" class="size-80 shrink-0 rounded-s bg-surface-subtle object-contain" />
      <span v-else class="flex size-56 shrink-0 items-center justify-center rounded-full bg-surface-brand text-icon-primary"><AwIcon :name="icon" /></span>
      <div class="flex min-w-0 flex-1 flex-col items-start gap-4">
        <AwTag v-if="tag" :label="tag" hierarchy="secondary" />
        <span v-if="subhead" class="aw-label-small text-text-secondary">{{ subhead }}</span>
        <span class="aw-label-medium-bold text-text-primary">{{ headline }}</span>
        <span v-for="(l, i) in support.slice(0, 2)" :key="i" class="aw-text-body-small text-text-secondary">{{ l }}</span>
      </div>
    </div>
    <!-- Troquel: dos muescas del color de la pantalla y una línea punteada (decorativo). -->
    <div class="relative h-0 border-t border-dashed border-border-soft" aria-hidden="true">
      <span class="absolute -left-8 -top-8 size-16 rounded-full bg-surface-subtle" />
      <span class="absolute -right-8 -top-8 size-16 rounded-full bg-surface-subtle" />
    </div>
    <span class="aw-label-medium-bold flex items-center justify-between bg-feature-missions-surface px-16 py-8 text-text-primary">
      {{ actionLabel }} <AwIcon name="chevron-up" :rotate="90" :size="16" />
    </span>
  </component>
</template>
