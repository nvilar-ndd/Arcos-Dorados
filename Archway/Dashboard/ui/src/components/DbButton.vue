<script setup lang="ts">
/**
 * Button — Figma: Components › Button (337:3330).
 * Visual 1:1 con Figma. Agregado de a11y (propuesta D-C06): anillo de foco `db-focus`.
 * Docs: Dashboard/components/button.md
 */
import { computed, type Component } from 'vue'

export type DbButtonVariant = 'primary' | 'secondary' | 'danger'

const props = withDefaults(
  defineProps<{
    /** `danger` = estilo "eliminar" de Figma. */
    variant?: DbButtonVariant
    type?: 'button' | 'submit' | 'reset'
    /** Sólo para restricciones por rol o acciones no repetibles (regla de Figma). */
    disabled?: boolean
    /** Deshabilitado pero enfocable, para poder explicar el motivo con un tooltip. */
    ariaDisabled?: boolean
    iconLeft?: Component
    iconRight?: Component
    block?: boolean
  }>(),
  { variant: 'primary', type: 'button', disabled: false, ariaDisabled: false, block: false },
)

const emit = defineEmits<{ click: [event: MouseEvent] }>()

const inactive = computed(() => props.disabled || props.ariaDisabled)

const VARIANTS: Record<DbButtonVariant, { base: string; disabled: string }> = {
  primary: {
    base: 'bg-button-primary-enabled text-button-primary-text border-transparent hover:bg-button-primary-hover focus-visible:border-button-secondary-stroke active:bg-button-primary-pressed',
    disabled: 'bg-button-primary-disabled text-text-disabled border-transparent',
  },
  secondary: {
    base: 'bg-button-secondary text-button-secondary-text border-button-secondary-stroke hover:bg-button-secondary-hover hover:border-transparent focus-visible:bg-button-secondary-focus focus-visible:border-button-secondary-stroke active:bg-button-secondary active:border-button-secondary-stroke',
    disabled: 'bg-button-secondary-hover text-text-disabled border-border-03',
  },
  danger: {
    base: 'bg-button-red text-button-red-text border-button-secondary-stroke hover:bg-button-red-hover hover:border-transparent focus-visible:bg-button-red-hover focus-visible:border-button-secondary-stroke active:bg-button-red-pressed active:border-button-secondary-stroke',
    disabled: 'bg-button-red-disabled text-text-disabled border-border-03',
  },
}

const classes = computed(() => [
  'db-ui db-focus db-label02 inline-flex h-500 min-w-0 items-center justify-center gap-100 whitespace-nowrap rounded-md border px-200 py-100 transition-colors duration-fast',
  props.block ? 'w-full' : '',
  inactive.value ? `${VARIANTS[props.variant].disabled} cursor-not-allowed` : VARIANTS[props.variant].base,
])

function onClick(event: MouseEvent) {
  if (inactive.value) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    :aria-disabled="ariaDisabled || undefined"
    @click="onClick"
  >
    <component :is="iconLeft" v-if="iconLeft" class="size-200 shrink-0" aria-hidden="true" />
    <slot />
    <component :is="iconRight" v-if="iconRight" class="size-200 shrink-0" aria-hidden="true" />
  </button>
</template>
