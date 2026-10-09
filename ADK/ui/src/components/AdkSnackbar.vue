<script setup lang="ts">
/**
 * Snackbar — Figma: Snackbars › ADK_Snackbars (2321:1048). 568 × 96, fondo Black, radio 8, borde izquierdo de estado.
 * Status: Success (Light Green) · Error (#FA4D56, fuera de paleta) · Warning (Gold) · Information (Light Blue). Ícono 32, texto 24 blanco.
 * Agregado de a11y: role status (Error: alert) para que lo anuncien los lectores.
 */
import { CircleCheck, Info, OctagonAlert, TriangleAlert, X } from 'lucide-vue-next'

export type AdkSnackbarStatus = 'success' | 'error' | 'warning' | 'info'

withDefaults(defineProps<{ status?: AdkSnackbarStatus; message: string; dismissible?: boolean }>(), {
  status: 'success',
  dismissible: false,
})
defineEmits<{ dismiss: [] }>()

const S = {
  success: { icon: CircleCheck, border: 'border-feedback-success', text: 'text-feedback-success' },
  error: { icon: OctagonAlert, border: 'border-feedback-error', text: 'text-feedback-error' },
  warning: { icon: TriangleAlert, border: 'border-feedback-warning', text: 'text-feedback-warning' },
  info: { icon: Info, border: 'border-feedback-info', text: 'text-feedback-info' },
} as const
</script>

<template>
  <div
    :role="status === 'error' ? 'alert' : 'status'"
    class="adk-ui flex min-h-[96px] w-[568px] max-w-full items-center gap-16 rounded-s border-l-[8px] bg-background-inverse py-16 pl-24 pr-32 text-text-on-color shadow-bordered-down"
    :class="S[status].border"
  >
    <component :is="S[status].icon" class="size-32 shrink-0" :class="S[status].text" aria-hidden="true" />
    <p class="adk-body-large min-w-0 flex-1">{{ message }}</p>
    <button v-if="dismissible" type="button" class="adk-focus flex size-48 shrink-0 items-center justify-center rounded-full" aria-label="Cerrar aviso" @click="$emit('dismiss')">
      <X class="size-24" aria-hidden="true" />
    </button>
  </div>
</template>
