<script setup lang="ts">
/**
 * Attract Screen — Figma: Attract Screen (3191:9734) + Footers (19:602, variante Attract).
 * Pantalla de reposo 1080 × 1920: campaña arriba y footer de 496 con login QR, "Empezar a pedir",
 * cambio de idioma y modo accesible.
 * Agregados de a11y: <html lang> lo actualiza la app con `language`; botones de 72 dentro del área accesible.
 */
import { Accessibility, Languages } from 'lucide-vue-next'
import AdkUserFooter from './AdkUserFooter.vue'

withDefaults(defineProps<{ startLabel?: string; startHint?: string; legal?: string }>(), {
  startLabel: 'Empezar a pedir',
  startHint: 'Toque aquí',
})
defineEmits<{ start: []; language: []; accessibility: [] }>()
</script>

<template>
  <div class="adk-ui flex h-full w-full flex-col bg-background-default text-text-primary">
    <div class="relative min-h-0 flex-1 overflow-hidden bg-background-subtle"><slot name="media" /></div>
    <footer class="flex h-[496px] shrink-0 items-end gap-48 px-80 shadow-bordered-up">
      <AdkUserFooter variant="attract" />
      <div class="flex flex-1 flex-col gap-16 pb-48">
        <button
          type="button"
          class="adk-focus adk-press flex h-[152px] w-full flex-col items-center justify-center gap-8 rounded-xs border border-border-default bg-button-secondary"
          @click="$emit('start')"
        >
          <span class="adk-headline-medium-bold">{{ startLabel }}</span>
          <span class="adk-body-medium">{{ startHint }}</span>
        </button>
        <div class="flex gap-16">
          <button type="button" class="adk-focus adk-press adk-body-medium flex h-[72px] flex-1 items-center justify-center gap-16 rounded-xs border border-border-default" @click="$emit('language')">
            <Languages class="size-32" aria-hidden="true" />Otros idiomas
          </button>
          <button type="button" class="adk-focus adk-press adk-body-medium flex h-[72px] flex-1 items-center justify-center gap-16 rounded-xs border border-border-default" @click="$emit('accessibility')">
            <span class="flex size-48 items-center justify-center rounded-full bg-p-secondary-blue text-text-on-color" aria-hidden="true"><Accessibility class="size-32" /></span>
            Accesibilidad
          </button>
        </div>
        <p v-if="legal" class="adk-utility-small text-text-secondary">{{ legal }}</p>
      </div>
    </footer>
  </div>
</template>
