<script setup lang="ts">
/**
 * Button illustration — Figma: Buttons › Button illustration (2232:515).
 * Tarjeta-botón con ilustración (p. ej. método de pago, comer acá / para llevar).
 * Big 344 × 440 (texto 32) · Medium 280 × 320 (texto 24). Radio 16, fondo blanco, elevación.
 */
withDefaults(defineProps<{ size?: 'big' | 'medium'; label: string; disabled?: boolean }>(), { size: 'big', disabled: false })
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    class="adk-ui adk-focus adk-press flex flex-col items-center justify-center rounded-l bg-background-default text-text-primary shadow-bordered-down"
    :class="[
      size === 'big' ? 'h-[440px] w-[344px] gap-48 px-48 py-32' : 'h-[320px] w-[280px] gap-24 p-32',
      disabled ? 'cursor-not-allowed opacity-40' : '',
    ]"
    @click="$emit('click', $event)"
  >
    <span class="flex items-center justify-center" :class="size === 'big' ? 'size-[248px]' : 'size-[168px]'" aria-hidden="true">
      <slot name="illustration" />
    </span>
    <!-- 32/40 no existe como text style (A-T02): Big usa el estilo más cercano, Headline Extra Small (28/32). -->
    <span class="text-center" :class="size === 'big' ? 'adk-headline-extra-small' : 'adk-body-large'">{{ label }}</span>
  </button>
</template>
