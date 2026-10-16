<script setup lang="ts">
/**
 * ADK_Podrias sumar x pts — Figma: Footer (2894:1100). 656 × 48 (compacto 32), Ivory, radio 8.
 * Identificado: "Podrías sumar hasta N pts. con tu pedido." · No identificado: "Inicia sesión y suma hasta…".
 * Los puntos usan el gradiente Loyalty en Bold.
 */
import { Coins } from 'lucide-vue-next'

withDefaults(defineProps<{ points: string; identified?: boolean; compact?: boolean }>(), { identified: true, compact: false })
</script>

<template>
  <p
    class="adk-ui flex w-full max-w-content items-center gap-8 rounded-s bg-background-subtle px-16 text-text-primary shadow-bordered-down"
    :class="compact ? 'h-32 py-4' : 'h-48 py-8'"
    aria-live="polite"
  >
    <Coins :class="compact ? 'size-24' : 'size-32'" class="shrink-0 text-p-primary-red" aria-hidden="true" />
    <span class="adk-body-medium truncate">
      {{ identified ? 'Podrías sumar hasta' : 'Inicia sesión y suma hasta' }}
      <strong class="adk-body-medium-bold adk-text-loyalty">{{ points }} pts.</strong>
      con tu pedido.
    </span>
  </p>
</template>
