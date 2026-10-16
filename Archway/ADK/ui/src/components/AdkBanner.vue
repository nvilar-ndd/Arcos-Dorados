<script setup lang="ts">
/**
 * Banner — Figma: Banners › Banner 656x200/loyalty (173:1155). 656 × 200, radio 8, elevación, margen de seguridad 24.
 * Ilustración a la izquierda; título 36 Bold (en loyalty, con el gradiente Loyalty en la marca), bajada y CTA secundario.
 * Agregado de a11y: texto en vivo (no horneado en la imagen) para que escale y se traduzca.
 */
import AdkButton from './AdkButton.vue'

withDefaults(defineProps<{ title: string; highlight?: string; subtitle?: string; cta?: string; image?: string }>(), {})
defineEmits<{ cta: [] }>()
</script>

<template>
  <section class="adk-ui flex h-[200px] w-full max-w-content items-center gap-24 overflow-hidden rounded-s bg-background-default p-24 text-text-primary shadow-bordered-down">
    <span class="flex h-full w-[152px] shrink-0 items-center justify-center" aria-hidden="true">
      <img v-if="image" :src="image" alt="" class="max-h-full object-contain" />
      <slot v-else name="illustration" />
    </span>
    <div class="flex min-w-0 flex-col items-start gap-8">
      <h2 class="adk-headline-small-bold">{{ title }} <span v-if="highlight" class="adk-text-loyalty">{{ highlight }}</span></h2>
      <p v-if="subtitle" class="adk-body-medium-bold">{{ subtitle }}</p>
      <AdkButton v-if="cta" variant="secondary" size="md" class="mt-8" @click="$emit('cta')">{{ cta }}</AdkButton>
    </div>
  </section>
</template>
