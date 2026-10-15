<script setup lang="ts">
/**
 * Empty state — Figma: Components › Empty State (6749:5101). Nuevo en Figma (relevado 2026-10-15).
 * "Para mostrar información sobre elementos vacíos o errores."
 * Columna centrada: ícono 56 (slot) · título 24 Bold · descripción 18 `text/secondary` · botón secondary.
 * Gaps: 32 entre bloques, 16 entre ícono y texto, 8 entre título y descripción.
 */
import DbButton from './DbButton.vue'

withDefaults(
  defineProps<{
    title: string
    description?: string
    /** Texto del botón. Sin texto, no se muestra el botón. */
    actionLabel?: string
    /** Nivel del heading del título: depende de dónde vive el empty state en la página. */
    headingLevel?: 2 | 3 | 4
    /** `status` (por defecto) anuncia el mensaje cuando aparece; `alert` para errores bloqueantes. */
    role?: 'status' | 'alert'
  }>(),
  { description: undefined, actionLabel: undefined, headingLevel: 2, role: 'status' },
)
defineEmits<{ action: [] }>()
defineSlots<{ icon?: () => unknown; default?: () => unknown }>()
</script>

<template>
  <div :role="role" class="db-ui mx-auto flex w-full max-w-modal-sm flex-col items-center gap-400 text-center">
    <div class="flex w-full flex-col items-center gap-200">
      <span class="flex size-700 items-center justify-center text-icon-primary" aria-hidden="true">
        <slot name="icon">
          <!-- Refresh (ícono por defecto en Figma) -->
          <svg viewBox="0 0 24 24" class="size-500" fill="none" focusable="false">
            <path d="M20 12a8 8 0 1 1-2.34-5.66" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M20 4v5h-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </slot>
      </span>
      <div class="flex w-full flex-col items-center gap-100">
        <component :is="`h${headingLevel}`" class="db-h4 m-0 text-text-primary">{{ title }}</component>
        <p v-if="description" class="db-h7 m-0 text-text-secondary">{{ description }}</p>
        <slot />
      </div>
    </div>
    <DbButton v-if="actionLabel" variant="secondary" @click="$emit('action')">{{ actionLabel }}</DbButton>
  </div>
</template>
