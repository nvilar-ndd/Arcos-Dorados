<script setup lang="ts">
/**
 * Footers — Figma: Footer › Footers (19:602) y UI Shell › Footers_shell (3845:1069).
 * Footer flotante de ancho completo con elevación hacia arriba: tarjeta de usuario a la izquierda (columna nav)
 * y, en la columna de contenido, carrito / acciones / leyenda legal.
 */
withDefaults(defineProps<{ label?: string }>(), { label: 'Tu pedido' })
</script>

<template>
  <footer
    :aria-label="label"
    class="adk-ui flex w-full items-end gap-48 bg-background-default pl-32 pr-96 pt-24 text-text-primary shadow-bordered-up"
  >
    <div class="shrink-0"><slot name="user" /></div>
    <div class="flex min-w-0 flex-1 flex-col gap-16 pb-24">
      <slot />
      <p v-if="$slots.legal" class="adk-utility-small self-end text-text-secondary"><slot name="legal" /></p>
    </div>
  </footer>
</template>
