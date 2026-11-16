<script setup lang="ts">
/**
 * Checkbox — Figma: Design Resources CORE › Checkbox (Selected × State, Label opcional).
 * Ícono 24 dentro de un área de 40 (ampliada a 48 con .aw-hit, audit C-A04).
 * Seleccionado = fondo Button/primary-bg + tilde Icon/primary (8.63:1): se reconoce por la forma.
 * Pressed/Focused los resuelve la fila (List Item); en web el foco visible va en el control.
 */
import AwIcon from './AwIcon.vue'

const model = defineModel<boolean>({ default: false })
withDefaults(defineProps<{ label?: string; ariaLabel?: string; disabled?: boolean; value?: string }>(), {
  label: undefined, ariaLabel: undefined, disabled: false, value: undefined,
})
</script>

<template>
  <label :class="['aw-ui inline-flex items-center gap-8', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <span class="aw-hit relative inline-flex size-40 items-center justify-center">
      <input v-model="model" type="checkbox" class="peer absolute inset-0 m-0 cursor-[inherit] opacity-0" :value="value" :disabled="disabled" :aria-label="label ? undefined : ariaLabel" />
      <span
        :class="[
          'flex size-[20px] items-center justify-center rounded-xs border-2 transition-colors duration-fast ease-standard peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-strong',
          model
            ? disabled ? 'border-button-primary-bg-disabled bg-button-primary-bg-disabled text-icon-disabled' : 'border-button-primary-bg bg-button-primary-bg text-icon-primary'
            : disabled ? 'border-border-subtle' : 'border-icon-primary',
        ]"
        aria-hidden="true"
      >
        <AwIcon v-if="model" name="checkmark" :size="16" />
      </span>
    </span>
    <span v-if="label" :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ label }}</span>
  </label>
</template>
