<script setup lang="ts">
/**
 * User points — Figma: Navegation › User points (3250:8541).
 * "¡Hola, {nombre}!" + "Tienes disponibles" + puntos con el gradiente Loyalty. Sin nombre: "¡Hola!".
 */
withDefaults(defineProps<{ name?: string; points?: string; compact?: boolean }>(), { compact: false })
</script>

<template>
  <div class="adk-ui flex flex-col gap-8 text-text-primary">
    <p :class="compact ? 'adk-body-large' : 'adk-headline-extra-small'">
      ¡Hola<template v-if="name">, <strong :class="compact ? 'adk-body-large-bold' : 'adk-headline-extra-small-bold'">{{ name }}</strong></template>!
    </p>
    <template v-if="points">
      <p class="adk-body-small">Tienes disponibles</p>
      <p class="adk-text-loyalty" :class="compact ? 'adk-headline-extra-small-bold' : 'adk-headline-medium-bold'">{{ points }}</p>
    </template>
  </div>
</template>
