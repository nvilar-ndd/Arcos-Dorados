<script setup lang="ts">
/**
 * Icon button — Figma: Components › FAB (SmallFAB 333:2404 · MediumFAB 333:3219).
 * En Figma se llama "FAB", pero es un botón de sólo ícono (o avatar con iniciales).
 * Docs: Dashboard/components/fab.md
 */
import { computed, type Component } from 'vue'

export type DbIconButtonVariant = 'primary' | 'secondary' | 'avatar'

const props = withDefaults(
  defineProps<{
    /** Nombre accesible obligatorio: el botón no tiene texto visible. */
    label: string
    icon?: Component
    /** Iniciales para `variant="avatar"` (estilo "tipografia" en Figma). */
    initials?: string
    variant?: DbIconButtonVariant
    size?: 'small' | 'medium'
    disabled?: boolean
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', size: 'small', disabled: false, type: 'button' },
)

defineEmits<{ click: [event: MouseEvent] }>()

const SIZE = { small: 'size-400 p-100', medium: 'size-600 p-200' } as const

const VARIANT: Record<DbIconButtonVariant, string> = {
  primary:
    'bg-button-primary-enabled text-icon-primary border-transparent hover:bg-button-primary-hover focus-visible:border-button-primary-focus active:bg-button-primary-focus',
  avatar:
    'bg-button-primary-enabled text-button-primary-text border-transparent hover:bg-button-primary-hover focus-visible:border-button-primary-focus active:bg-button-primary-focus',
  secondary:
    'bg-button-transparent text-icon-primary border-transparent hover:bg-button-secondary-hover focus-visible:bg-button-secondary-focus focus-visible:border-button-primary-focus active:bg-button-secondary active:border-border-01',
}

const classes = computed(() => [
  'db-ui db-focus inline-flex shrink-0 items-center justify-center rounded-full border transition-colors duration-fast',
  SIZE[props.size],
  props.disabled ? 'cursor-not-allowed bg-button-primary-disabled text-text-disabled border-transparent' : VARIANT[props.variant],
])
</script>

<template>
  <button :type="type" :class="classes" :aria-label="label" :disabled="disabled" @click="$emit('click', $event)">
    <span v-if="variant === 'avatar'" class="db-label01 leading-none" aria-hidden="true">{{ initials }}</span>
    <component :is="icon" v-else-if="icon" class="size-200" :stroke-width="1.75" aria-hidden="true" />
  </button>
</template>
