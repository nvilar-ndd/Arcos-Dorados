<script setup lang="ts">
/**
 * Stepper — Figma: Progress indicator item (2816:7556).
 * State: Completed · Current · Incompleto · Error · Disabled · Skeleton.
 * Línea superior `border/04` (gold) en Current y Completed; `border/03` en el resto.
 * Se usa en el header del flujo paso a paso (alta de promoción).
 */
export type DbStepState = 'completed' | 'current' | 'incomplete' | 'error' | 'disabled' | 'skeleton'
export interface DbStep { label: string; state: DbStepState }

withDefaults(defineProps<{ steps: DbStep[]; ariaLabel?: string }>(), { ariaLabel: 'Pasos' })

const STATE_TEXT: Record<DbStepState, string> = {
  completed: 'completado',
  current: 'paso actual',
  incomplete: 'pendiente',
  error: 'con error',
  disabled: 'no disponible',
  skeleton: 'cargando',
}
</script>

<template>
  <nav class="db-ui w-full" :aria-label="ariaLabel">
    <ol class="flex w-full gap-50">
      <li
        v-for="(step, i) in steps"
        :key="i"
        :aria-current="step.state === 'current' ? 'step' : undefined"
        :class="[
          'flex min-w-[128px] flex-1 flex-col gap-50 border-t pt-50',
          step.state === 'current' || step.state === 'completed' ? 'border-border-04' : 'border-border-03',
        ]"
      >
        <span class="flex items-center gap-100">
          <!-- Íconos de 16 px según estado -->
          <svg viewBox="0 0 16 16" class="size-200 shrink-0" aria-hidden="true">
            <circle v-if="step.state === 'incomplete' || step.state === 'disabled' || step.state === 'skeleton'"
              cx="8" cy="8" r="6.5" fill="none" stroke-width="1" stroke-dasharray="2 2"
              :class="step.state === 'disabled' ? 'stroke-text-disabled' : 'stroke-icon-primary'" />
            <template v-else-if="step.state === 'current'">
              <circle cx="8" cy="8" r="6.5" fill="none" class="stroke-button-primary-enabled" stroke-width="1" />
              <path d="M8 1.5a6.5 6.5 0 0 0 0 13Z" class="fill-button-primary-enabled" />
            </template>
            <template v-else-if="step.state === 'completed'">
              <circle cx="8" cy="8" r="7" class="fill-button-primary-enabled" />
              <path d="m5 8.2 2 2 4-4.2" fill="none" class="stroke-icon-primary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </template>
            <template v-else>
              <circle cx="8" cy="8" r="6.5" fill="none" class="stroke-support-error" stroke-width="1.2" />
              <path d="M8 4.5v4.2" class="stroke-support-error" stroke-width="1.4" stroke-linecap="round" />
              <circle cx="8" cy="11" r=".9" class="fill-support-error" />
            </template>
          </svg>
          <span v-if="step.state === 'skeleton'" class="h-100 w-[72px] rounded-sm bg-layer-03" />
          <span
            v-else
            :class="['db-label01 truncate', step.state === 'disabled' ? 'text-text-disabled' : 'text-text-primary']"
          >
            {{ step.label }}<span class="db-sr-only">, {{ STATE_TEXT[step.state] }}</span>
          </span>
        </span>
      </li>
    </ol>
  </nav>
</template>
