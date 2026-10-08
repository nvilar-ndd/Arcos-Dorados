<script setup lang="ts">
/**
 * Notification — Figma: Components › Notification (723:3840) y Notification+ProgresBar (2635:6502).
 * Barra de estado de 4 px a la izquierda, ícono de estado relleno, título `Label03`, mensaje `Label02`.
 *  - Toast (emergente): sombra, sin CTA (regla de Figma). Se apilan en DbToaster.
 *  - Inline (informativa, en paneles): admite CTA; variante `highContrast` con `background/05`.
 *  - Con `progress`: barra de avance + helper (procesos > 8 s).
 * Docs: Dashboard/components/notification.md
 */
import { computed, useId } from 'vue'
import { X } from 'lucide-vue-next'
import DbButton from './DbButton.vue'
import DbProgressBar from './DbProgressBar.vue'
import DbStatusIcon, { type DbStatus } from './DbStatusIcon.vue'

const props = withDefaults(
  defineProps<{
    title: string
    message?: string
    status?: DbStatus
    type?: 'toast' | 'inline'
    highContrast?: boolean
    closable?: boolean
    /** Sólo en `inline` (las emergentes no admiten acciones). */
    ctaLabel?: string
    /** 0–100: muestra la barra de progreso (Notification+ProgresBar). */
    progress?: number
    progressLabel?: string
    helperText?: string
  }>(),
  { status: 'info', type: 'toast', highContrast: false, closable: true },
)

const emit = defineEmits<{ close: []; action: [] }>()
const id = useId()

const BAR: Record<DbStatus, string> = {
  success: 'border-l-support-success',
  error: 'border-l-support-error',
  warning: 'border-l-support-warning',
  info: 'border-l-link-primary',
}

/** Errores interrumpen (alert); el resto se anuncia sin interrumpir (status). */
const role = computed(() => (props.status === 'error' ? 'alert' : 'status'))
const progressStatus = computed(() =>
  props.status === 'success' ? 'success' : props.status === 'error' ? 'error' : 'active',
)
</script>

<template>
  <div
    :role="role"
    :aria-labelledby="`${id}-title`"
    :class="[
      'db-ui flex w-full max-w-[288px] gap-100 rounded-sm border-l-4 p-200',
      type === 'inline' && 'max-w-none',
      BAR[status],
      highContrast ? 'bg-background-05' : 'bg-layer-02',
      type === 'toast' && 'shadow-raised-down',
    ]"
  >
    <DbStatusIcon :status="status" />
    <div class="flex min-w-0 flex-1 flex-col gap-50">
      <p :id="`${id}-title`" :class="['db-label03', highContrast ? 'text-text-on-color' : 'text-text-primary']">{{ title }}</p>
      <p v-if="message" :class="['db-label02', highContrast ? 'text-text-on-color' : 'text-text-secondary']">{{ message }}</p>
      <DbProgressBar
        v-if="progress !== undefined"
        class="mt-100"
        :value="progress"
        :label="progressLabel"
        :helper-text="helperText"
        :status="progressStatus"
      />
    </div>
    <DbButton v-if="type === 'inline' && ctaLabel" variant="secondary" class="self-center" @click="emit('action')">
      {{ ctaLabel }}
    </DbButton>
    <button
      v-if="closable"
      type="button"
      :class="['db-focus inline-flex size-300 shrink-0 items-center justify-center rounded-sm', highContrast ? 'text-icon-tertiary' : 'text-icon-primary']"
      aria-label="Cerrar notificación"
      @click="emit('close')"
    >
      <X class="size-200" aria-hidden="true" />
    </button>
  </div>
</template>
