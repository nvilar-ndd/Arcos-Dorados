<script setup lang="ts">
/**
 * Images and embeds — Figma: Components › Images and embeds (6453:9198).
 * 250 × 220 por defecto, radio 4, placeholder `layer/02`. Label arriba, abajo o dentro de la imagen.
 */
withDefaults(
  defineProps<{
    src?: string
    /** Obligatorio; vacío ("") si la imagen es decorativa. */
    alt: string
    label?: string
    labelPosition?: 'top' | 'bottom' | 'inner-top' | 'inner-bottom'
    aspect?: string
  }>(),
  { labelPosition: 'bottom', aspect: '25 / 22' },
)
</script>

<template>
  <figure class="db-ui flex w-full max-w-[250px] flex-col gap-100">
    <figcaption v-if="label && labelPosition === 'top'" class="db-label02 text-text-primary">{{ label }}</figcaption>
    <div class="relative w-full overflow-hidden rounded-sm bg-layer-02" :style="{ aspectRatio: aspect }">
      <img v-if="src" :src="src" :alt="alt" class="size-full object-cover" loading="lazy" />
      <figcaption
        v-if="label && labelPosition.startsWith('inner')"
        :class="[
          'db-label02 absolute inset-x-0 bg-layer-06 px-100 py-50 text-text-on-color',
          labelPosition === 'inner-top' ? 'top-0' : 'bottom-0',
        ]"
      >
        {{ label }}
      </figcaption>
    </div>
    <figcaption v-if="label && labelPosition === 'bottom'" class="db-label02 text-text-primary">{{ label }}</figcaption>
  </figure>
</template>
