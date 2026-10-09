<script setup lang="ts">
/**
 * Header — Figma: Header › Header (143:948). 1080 × 192, padding 104 · 80 · 24 · 80, gap logo ↔ título 96.
 * Type: Categoría (título 48 Bold) · Paso productos (28 Bold) · sin título. Logo a la izquierda o centrado.
 * La "sombra" blanca de Figma es un fade sobre el contenido que scrollea: se resuelve con un gradiente.
 */
withDefaults(
  defineProps<{ title?: string; type?: 'category' | 'step'; logoPosition?: 'left' | 'center' }>(),
  { type: 'category', logoPosition: 'left' },
)
</script>

<template>
  <header
    class="adk-ui relative z-10 flex h-[192px] w-full items-center gap-96 bg-background-default px-80 pb-24 pt-104 text-text-primary after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-16 after:bg-[linear-gradient(var(--adk-background-default),transparent)] after:content-['']"
    :class="logoPosition === 'center' ? 'justify-center' : ''"
  >
    <slot name="logo" />
    <!-- Título máx. 672 (Figma). Único h1 de la pantalla. -->
    <h1
      v-if="title && logoPosition === 'left'"
      class="max-w-[672px]"
      :class="type === 'category' ? 'adk-headline-large-bold' : 'adk-headline-extra-small-bold'"
    >
      {{ title }}
    </h1>
  </header>
</template>
