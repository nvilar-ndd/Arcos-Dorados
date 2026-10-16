<script setup lang="ts">
/**
 * User_Footer — Figma: Footer › User_Footer (19:1121), 4 variantes.
 *  - attract   336 × 400 Gold: "Inicia sesión con tu QR" (pantalla de inicio)
 *  - guest     248 × 232 Gold: "Escanea tu QR para Iniciar sesión" + chevron para colapsar
 *  - collapsed 248 × 136 Gold: sólo texto + chevron
 *  - logged    248 × 232 blanco con borde: usuario + "Cerrar sesión"
 * El login es con el lector QR físico del kiosco: la tarjeta informa, no es un botón.
 */
import { computed } from 'vue'
import { ChevronDown, ChevronUp, LogOut, QrCode, Smartphone } from 'lucide-vue-next'
import AdkButton from './AdkButton.vue'

export type AdkUserFooterVariant = 'attract' | 'guest' | 'collapsed' | 'logged'

const props = withDefaults(defineProps<{ variant?: AdkUserFooterVariant; userName?: string }>(), { variant: 'guest' })
defineEmits<{ toggle: []; logout: [] }>()
const gold = computed(() => props.variant !== 'logged')
</script>

<template>
  <section
    :aria-label="variant === 'logged' ? 'Tu cuenta' : 'Iniciar sesión'"
    class="adk-ui flex flex-col items-center rounded-t-s text-center text-text-primary"
    :class="[
      gold ? 'bg-background-brand' : 'border border-p-secondary-grey bg-background-default',
      variant === 'attract' ? 'h-[400px] w-[336px] gap-16 px-32 py-72' : 'w-nav px-32',
      variant === 'guest' ? 'h-[232px] gap-8 pt-32' : '',
      variant === 'collapsed' ? 'h-[136px] justify-center gap-8' : '',
      variant === 'logged' ? 'h-[232px] justify-center gap-16 py-24' : '',
    ]"
  >
    <template v-if="variant === 'attract'">
      <p class="adk-headline-medium-bold">Inicia sesión con tu QR</p>
      <p class="adk-body-medium">Suma puntos y canjéalos por productos.</p>
      <span class="relative mt-8 flex size-[144px] items-center justify-center" aria-hidden="true">
        <Smartphone class="size-[120px]" :stroke-width="1.5" /><QrCode class="absolute size-48" />
      </span>
    </template>

    <template v-else-if="variant === 'logged'">
      <LogOut class="size-56" :stroke-width="1.5" aria-hidden="true" />
      <p class="adk-body-medium-bold w-full truncate">{{ userName }}</p>
      <AdkButton size="sm" block @click="$emit('logout')">Cerrar sesión</AdkButton>
    </template>

    <template v-else>
      <span v-if="variant === 'guest'" class="relative flex size-[72px] items-center justify-center" aria-hidden="true">
        <Smartphone class="size-[64px]" :stroke-width="1.5" /><QrCode class="absolute size-24" />
      </span>
      <p class="flex flex-col gap-8">
        <span class="adk-body-small">Escanea tu QR para</span>
        <span class="adk-body-medium-bold">Iniciar sesión</span>
      </p>
      <!-- Chevron de 32 en Figma: el área táctil se agranda a 48 (A-C04). -->
      <button
        type="button"
        class="adk-focus flex size-48 items-center justify-center rounded-full"
        :aria-label="variant === 'guest' ? 'Achicar' : 'Ver cómo iniciar sesión'"
        :aria-expanded="variant === 'guest'"
        @click="$emit('toggle')"
      >
        <component :is="variant === 'guest' ? ChevronDown : ChevronUp" class="size-32" aria-hidden="true" />
      </button>
    </template>
  </section>
</template>
