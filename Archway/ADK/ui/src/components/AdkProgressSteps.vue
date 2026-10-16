<script setup lang="ts">
/**
 * Progress Bar — Figma: Navegation › Progress Bar (262:1322). Pasos de 248 × 56 del armado de un producto.
 * Incomplete: círculo vacío · Selected (actual): barra Gold + Bold + fondo Ivory · Complete: check Gold.
 * Agregado de a11y: <ol> con aria-current="step" y estado en texto para lectores.
 */
import { Check } from 'lucide-vue-next'

export type AdkStepState = 'incomplete' | 'current' | 'complete'
export interface AdkStep { label: string; state: AdkStepState }

withDefaults(defineProps<{ steps: AdkStep[]; label?: string }>(), { label: 'Pasos del producto' })
const STATE_TEXT: Record<AdkStepState, string> = { incomplete: 'pendiente', current: 'paso actual', complete: 'completo' }
</script>

<template>
  <ol :aria-label="label" class="adk-ui flex w-nav flex-col text-text-primary">
    <li
      v-for="(step, i) in steps"
      :key="i"
      :aria-current="step.state === 'current' ? 'step' : undefined"
      class="flex h-56 items-center gap-24 px-16 py-4"
      :class="step.state === 'current' ? 'border-l-selected border-border-selected bg-background-subtle' : 'bg-background-default'"
    >
      <span class="flex size-48 shrink-0 items-center justify-center" aria-hidden="true">
        <span
          class="flex size-24 items-center justify-center rounded-full"
          :class="step.state === 'complete' ? 'bg-control-on' : 'border border-border-strong'"
        >
          <Check v-if="step.state === 'complete'" class="size-16" :stroke-width="3" />
        </span>
      </span>
      <span :class="step.state === 'current' ? 'adk-body-small-bold' : 'adk-body-small'">
        {{ step.label }}<span class="adk-sr-only">, {{ STATE_TEXT[step.state] }}</span>
      </span>
    </li>
  </ol>
</template>
