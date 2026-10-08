<script setup lang="ts">
/**
 * Íconos de estado rellenos (Success / Error / Warning / Info) que usan Notification,
 * Progress bar y Text area en Figma. Decorativos: el estado se comunica con texto.
 */
export type DbStatus = 'success' | 'error' | 'warning' | 'info'

withDefaults(defineProps<{ status: DbStatus; size?: number }>(), { size: 24 })

const FILL: Record<DbStatus, string> = {
  success: 'text-support-success',
  error: 'text-support-error',
  warning: 'text-support-warning',
  info: 'text-link-primary',
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    :class="['shrink-0', FILL[status]]"
  >
    <template v-if="status === 'warning'">
      <path d="M12 3 22 20H2L12 3Z" fill="currentColor" />
      <path d="M12 9v5" class="stroke-text-primary" stroke-width="2" stroke-linecap="round" />
      <circle cx="12" cy="17" r="1.1" class="fill-text-primary" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        v-if="status === 'success'"
        d="m7.5 12.3 3 3 6-6.3"
        fill="none"
        class="stroke-text-on-color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        v-else-if="status === 'error'"
        d="m8.5 8.5 7 7m0-7-7 7"
        fill="none"
        class="stroke-text-on-color"
        stroke-width="2"
        stroke-linecap="round"
      />
      <template v-else>
        <path d="M12 11v6" class="stroke-text-on-color" stroke-width="2" stroke-linecap="round" />
        <circle cx="12" cy="7.5" r="1.2" class="fill-text-on-color" />
      </template>
    </template>
  </svg>
</template>
