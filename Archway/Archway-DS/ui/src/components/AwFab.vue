<script setup lang="ts">
/**
 * FAB · FAB Extended — Figma: Design Resources CORE › FAB (431:2972), FAB_Extended (3256:415).
 * La acción más importante de la pantalla, fija sobre el contenido. Una sola por pantalla,
 * abajo a la derecha con 16 de margen (`fixed`). Con `label` es Extended ("Ver lista", "Ver mapa").
 * En iOS lleva Liquid Glass (ver ios/); en web y Android es sólido.
 */
import AwIcon from './AwIcon.vue'
import type { AwIconName } from '../icons'

withDefaults(
  defineProps<{
    icon: AwIconName
    /** Texto visible (FAB Extended). Sin texto, `ariaLabel` es obligatorio. */
    label?: string
    ariaLabel?: string
    disabled?: boolean
    fixed?: boolean
  }>(),
  { label: undefined, ariaLabel: undefined, disabled: false, fixed: false },
)
defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    type="button"
    :class="[
      'aw-ui inline-flex h-56 items-center justify-center gap-8 rounded-xxl shadow-shallow-m-elev-2 transition-colors duration-fast ease-standard',
      label ? 'px-24 aw-label-large text-text-primary' : 'w-56 text-icon-primary',
      disabled ? 'bg-button-primary-bg-disabled text-text-disabled' : 'bg-button-primary-bg active:bg-button-primary-bg-pressed focus-visible:bg-button-primary-bg-focused',
      fixed ? 'fixed bottom-16 right-16 z-10' : '',
    ]"
    :aria-label="label ? undefined : ariaLabel"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <AwIcon :name="icon" :size="24" />
    <span v-if="label">{{ label }}</span>
  </button>
</template>
