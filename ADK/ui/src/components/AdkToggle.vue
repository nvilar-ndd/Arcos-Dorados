<script setup lang="ts">
/**
 * Toggle — Figma: Buttons › ADK Toggle (2971:1476). Track 88 × 32, knob 48.
 * Ojo: en Figma `Status=True` dibuja el estado apagado y `Status=False` el encendido (nombres invertidos, audit A-C08).
 * Agregado de a11y: role="switch", label visible asociado.
 */
import { useId } from 'vue'

const on = defineModel<boolean>({ default: false })
defineProps<{ label: string; description?: string; disabled?: boolean }>()
const id = useId()
</script>

<template>
  <div class="adk-ui flex items-center justify-between gap-24 text-text-primary" :class="disabled ? 'opacity-40' : ''">
    <span class="flex min-w-0 flex-col gap-4">
      <span :id="`${id}-l`" class="adk-body-medium">{{ label }}</span>
      <span v-if="description" :id="`${id}-d`" class="adk-body-small text-text-secondary">{{ description }}</span>
    </span>
    <button
      type="button"
      role="switch"
      :aria-checked="on"
      :aria-labelledby="`${id}-l`"
      :aria-describedby="description ? `${id}-d` : undefined"
      :disabled="disabled"
      class="adk-focus relative h-48 w-[88px] shrink-0 rounded-full"
      @click="on = !on"
    >
      <!-- Track: borde 1.5 en Figma; acá border-width default (1) — sin token de 1.5. -->
      <span
        class="absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 rounded-l border transition-colors duration-fast"
        :class="on ? 'border-control-on-stroke bg-control-on' : 'border-control-track-stroke bg-control-track'"
      />
      <span
        class="absolute top-0 size-48 rounded-full border border-control-track-stroke bg-background-default transition-[left] duration-fast"
        :class="on ? 'left-[40px] shadow-bordered-down' : 'left-0'"
      />
    </button>
  </div>
</template>
