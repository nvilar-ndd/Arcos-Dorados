<script setup lang="ts">
/**
 * Inline notice — Figma: Design Resources CORE › Inline notice (5699:578), nuevo el 17/11/2026.
 * Aviso contextual persistente dentro de un bloque: comunica una condición o un cambio de expectativas.
 * Sin cierre ni temporizador; se retira cuando la condición deja de aplicar. Tono: Informativo · Positivo ·
 * Advertencia · Crítico (significado, no duración). Título y enlace opcionales; descripción obligatoria.
 * Medidas de Figma: ancho inicial 296 (se adapta al contenedor), padding 10/12, radio 4 (Valor/radius/XS),
 * ícono 16 en un espacio de 20 × 20 centrado verticalmente con el texto, gap 8.
 * Tipografía (Figma 20/11/2026): descripción `Label/Label Small` 12/16; título y enlace Speedee Bold 12/16 con
 * variables Font/* (= Label Small Bold, sin estilo aplicado). Título arriba de la descripción, enlace abajo.
 * Título y enlace en Figma usan `Surface/inverse` (#292929): acá `Text/primary`, mismo valor (audit C-T07).
 * ⚠️ Los fondos en Figma son hex sueltos (#EDF5FF, #EBF7ED, #FFEDD5, #FFEDF0) sin token semántico:
 * se usan los primitivos más cercanos (blue/100, green/100, orange/100, red/50) hasta que se definan
 * Feedback/*-subtle (audit C-T06).
 */
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

const props = withDefaults(
  defineProps<{
    tone?: 'info' | 'success' | 'warning' | 'critical'
    title?: string
    description: string
    actionLabel?: string
    href?: string
    /** Ícono del tono (Figma: intercambio de instancia por tono). */
    icon?: AwIconName
  }>(),
  { tone: 'info', title: undefined, actionLabel: undefined, href: undefined, icon: undefined },
)
defineEmits<{ action: [] }>()
const TONE = {
  info: { bg: 'bg-[var(--aw-color-blue-100)]', icon: 'info-filled', color: 'text-icon-primary' },
  success: { bg: 'bg-[var(--aw-color-green-100)]', icon: 'success-filled', color: 'text-icon-primary' },
  warning: { bg: 'bg-[var(--aw-color-orange-100)]', icon: 'warning-filled', color: 'text-icon-primary' },
  critical: { bg: 'bg-[var(--aw-color-red-50)]', icon: 'error-filled', color: 'text-icon-primary' },
} as const
</script>

<template>
  <div
    :role="tone === 'critical' || tone === 'warning' ? 'alert' : 'status'"
    :class="['aw-ui flex w-full min-w-0 items-center gap-8 rounded-xs px-[12px] py-[10px]', TONE[props.tone].bg]"
  >
    <span class="flex size-[20px] shrink-0 items-center justify-center" aria-hidden="true">
      <AwIcon :name="props.icon ?? TONE[props.tone].icon" :size="16" :class="TONE[props.tone].color" />
    </span>
    <div class="aw-label-small flex min-w-0 flex-1 flex-col text-text-primary">
      <strong v-if="title" class="aw-label-small-bold">{{ title }}</strong>
      <p>{{ description }}</p>
      <component
        :is="href ? 'a' : 'button'"
        v-if="actionLabel"
        :href="href"
        :type="href ? undefined : 'button'"
        class="aw-hit aw-label-small-bold self-start text-text-primary underline outline-none focus-visible:outline-2 focus-visible:outline-border-strong"
        @click="$emit('action')"
      >{{ actionLabel }}</component>
    </div>
  </div>
</template>
