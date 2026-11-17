<script setup lang="ts">
/**
 * Card / Voucher 💠 — Figma: Design Resources CORE › Card / Voucher (4798:9238).
 * Type Img Product (media 112 × 68 a la izquierda) · Img Left (imagen 96 × 80 dentro del contenido) ·
 * Icon Left (ícono 32 de Misiones en contenedor 48 radio M, Feature/missions-surface).
 * Contenido: padding 16, gap 16; Headline Label Medium Bold + Subhead Label Small (Text/primary), gap 4.
 * Troquel de 8: muescas de 8 en Surface/muted y línea punteada de 2 en Border/subtle.
 * Acción (alto 48, padding 4/16, gap 32): dos líneas de soporte (Label Small y Label Small Bold, Text/secondary)
 * y a la derecha Icon Only Ghost XS (info) + Button Primary XS Round. Radio S, sombra Shallow/M.Elev-2.
 */
import AwButton from '../components/AwButton.vue'
import AwIcon from '../components/AwIcon.vue'
import AwIconButton from '../components/AwIconButton.vue'
import AwTag from '../components/AwTag.vue'
import type { AwIconName } from '../icons'

withDefaults(
  defineProps<{
    headline: string
    subhead?: string
    /** Hasta dos líneas de soporte (la segunda va en Bold). */
    support?: string[]
    tag?: string
    type?: 'img-product' | 'img-left' | 'icon-left'
    image?: string
    imageAlt?: string
    icon?: AwIconName
    actionLabel?: string
    /** Muestra el botón de información (Icon Only Ghost XS). */
    infoLabel?: string
  }>(),
  { subhead: undefined, support: () => [], tag: undefined, type: 'img-product', image: undefined, imageAlt: '', icon: 'deals', actionLabel: 'Usar', infoLabel: 'Ver condiciones' },
)
defineEmits<{ action: []; info: [] }>()
</script>

<template>
  <article class="aw-ui flex w-full min-w-[326px] flex-col rounded-s bg-surface-default shadow-shallow-m-elev-2">
    <div class="flex items-center">
      <img v-if="type === 'img-product'" :src="image" :alt="imageAlt" class="h-[68px] w-[112px] shrink-0 rounded-tl-s bg-surface-subtle object-cover" />
      <div class="flex min-w-0 flex-1 items-center gap-16 p-16">
        <img v-if="type === 'img-left'" :src="image" :alt="imageAlt" class="h-80 w-[96px] shrink-0 bg-surface-subtle object-cover" />
        <span v-else-if="type === 'icon-left'" class="flex size-48 shrink-0 items-center justify-center rounded-m bg-feature-missions-surface text-feature-missions">
          <AwIcon :name="icon" :size="32" />
        </span>
        <div class="flex min-w-0 flex-1 flex-col items-start gap-8">
          <AwTag v-if="tag" :label="tag" />
          <div class="flex flex-col gap-4">
            <span class="aw-label-medium-bold text-text-primary">{{ headline }}</span>
            <span v-if="subhead" class="aw-label-small text-text-primary">{{ subhead }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Troquel (decorativo): muescas laterales y línea punteada. -->
    <div class="relative h-8" aria-hidden="true">
      <span class="absolute -left-4 top-0 size-8 rounded-full bg-surface-muted" />
      <span class="absolute -right-4 top-0 size-8 rounded-full bg-surface-muted" />
      <span class="absolute inset-x-[3px] top-[3px] border-t-2 border-dashed border-border-subtle" />
    </div>
    <div class="flex h-48 items-center gap-32 px-16 py-4">
      <div class="flex min-w-0 flex-col text-text-secondary">
        <span v-if="support[0]" class="aw-label-small">{{ support[0] }}</span>
        <span v-if="support[1]" class="aw-label-small-bold">{{ support[1] }}</span>
      </div>
      <div class="ml-auto flex items-center gap-16">
        <AwIconButton v-if="infoLabel" icon="info" :label="infoLabel" variant="ghost" size="xs" @click="$emit('info')" />
        <AwButton :label="actionLabel" size="xs" shape="round" @click="$emit('action')" />
      </div>
    </div>
  </article>
</template>
