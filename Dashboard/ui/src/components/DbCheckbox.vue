<script setup lang="ts">
/**
 * Checkbox — Figma: Components › Checkbox (2278:4537).
 * State: Default · focus · complete · Disabled × Style: fill (con contenedor) / unfilled.
 * Se agrega `indeterminate` (no existe en Figma, audit D-C11) para "seleccionar todos".
 * Input nativo visualmente oculto: teclado y lectores de pantalla funcionan sin JS extra.
 */
import { computed, useId } from 'vue'

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    label: string
    supportingText?: string
    /** Figma Style=fill: opción encuadrada (fondo `layer/01` + borde `border/02`). */
    framed?: boolean
    disabled?: boolean
    indeterminate?: boolean
    name?: string
    value?: string
  }>(),
  { framed: false, disabled: false, indeterminate: false },
)

const id = useId()
const checkedLike = computed(() => model.value || props.indeterminate)
</script>

<template>
  <label
    :for="id"
    :class="[
      'db-ui group relative inline-flex min-h-500 items-start gap-100 rounded-sm p-100',
      framed && 'border border-border-02 bg-layer-01',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <input
      :id="id"
      v-model="model"
      type="checkbox"
      class="peer db-sr-only"
      :name="name"
      :value="value"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :aria-describedby="supportingText ? `${id}-support` : undefined"
    />
    <!-- Caja de 18 px dentro de un área de 24 px (ícono Square de Figma). -->
    <span
      class="flex size-300 shrink-0 items-center justify-center rounded-sm peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-link-primary"
      aria-hidden="true"
    >
      <span
        :class="[
          'flex size-[18px] items-center justify-center rounded-[2px]',
          !checkedLike
            ? 'border-2 border-icon-primary bg-transparent'
            : disabled
              ? 'bg-[var(--db-color-tertiary-gold-disabled)]'
              : 'bg-layer-07',
          disabled && !checkedLike && 'border-text-disabled',
        ]"
      >
        <svg v-if="model && !indeterminate" viewBox="0 0 16 16" class="size-200 text-icon-primary">
          <path d="m3.5 8.5 3 3 6-6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-else-if="indeterminate" viewBox="0 0 16 16" class="size-200 text-icon-primary">
          <path d="M4 8h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </span>
    </span>
    <span class="flex min-h-300 flex-col justify-center">
      <span
        :class="[
          disabled ? 'text-text-disabled' : checkedLike ? 'text-text-primary' : 'text-text-secondary',
          checkedLike ? 'db-label03' : 'db-label02',
        ]"
      >
        {{ label }}
      </span>
      <span v-if="supportingText" :id="`${id}-support`" class="db-label01 text-text-secondary">{{ supportingText }}</span>
    </span>
  </label>
</template>
