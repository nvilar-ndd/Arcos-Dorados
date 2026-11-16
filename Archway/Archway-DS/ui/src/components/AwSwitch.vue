<script setup lang="ts">
/**
 * Switch — Figma: Design Resources CORE › Switch (Android custom; en iOS se usa el Toggle nativo).
 * Track 52 × 32 (píldora, padding 4) · handle 24 que se estira a 30 en Pressed · focus 2 px Border/strong.
 * Colores sólidos por token, nunca opacidad (regla de Figma). Movimiento: fast + Standard.
 * ⚠️ Tracks < 3:1 (audit C-A01): se respeta Figma; el estado también lo da la posición del handle.
 */
const model = defineModel<boolean>({ default: false })
withDefaults(defineProps<{ label?: string; ariaLabel?: string; disabled?: boolean; skeleton?: boolean }>(), {
  label: undefined, ariaLabel: undefined, disabled: false, skeleton: false,
})
</script>

<template>
  <span v-if="skeleton" class="aw-ui inline-block h-32 w-[52px] rounded-xxxl bg-surface-muted" aria-hidden="true" />
  <label v-else :class="['aw-ui inline-flex items-center gap-8', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <span v-if="label" :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ label }}</span>
    <span class="aw-hit group relative inline-flex">
      <input v-model="model" type="checkbox" role="switch" class="peer absolute inset-0 m-0 cursor-[inherit] opacity-0" :disabled="disabled" :aria-label="label ? undefined : ariaLabel" />
      <span
        :class="[
          'flex h-32 w-[52px] items-center rounded-xxxl p-4 transition-colors duration-fast ease-standard peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-strong',
          model ? (disabled ? 'justify-end bg-button-primary-bg-disabled' : 'justify-end bg-interactive-active') : 'justify-start bg-surface-muted',
        ]"
        aria-hidden="true"
      >
        <span
          :class="[
            'h-24 w-24 rounded-full shadow-shallow-l-elev-1 transition-[width] duration-fast ease-standard',
            disabled ? (model ? 'bg-surface-default' : 'bg-surface-subtle') : 'bg-surface-default group-active:w-[30px]',
          ]"
        />
      </span>
    </span>
  </label>
</template>
