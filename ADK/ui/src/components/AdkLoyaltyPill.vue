<script setup lang="ts">
/**
 * Loyalty Pill ADK — Figma: Product (137:7301). 112 × 32, radio full.
 * Disponible: Gold + ícono de puntos · Bloqueado (no alcanzan los puntos): Light Grey + candado.
 */
import { Coins, LockKeyhole } from 'lucide-vue-next'

withDefaults(defineProps<{ points: string; available?: boolean }>(), { available: true })
</script>

<template>
  <span
    class="adk-ui adk-body-small-bold inline-flex h-32 items-center gap-4 whitespace-nowrap rounded-full px-8 py-4 text-text-primary"
    :class="available ? 'bg-badge-loyalty' : 'bg-badge-loyalty-disabled'"
  >
    <component :is="available ? Coins : LockKeyhole" class="size-24" aria-hidden="true" />
    {{ points }}
    <span v-if="!available" class="adk-sr-only">(puntos insuficientes)</span>
  </span>
</template>
