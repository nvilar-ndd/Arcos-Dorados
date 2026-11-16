<script setup lang="ts">
/**
 * Card / Setting 💠 — Figma: Design Resources CORE › Card / Setting. 380 × 68, Surface/default +
 * Border/soft, radio S. Título Label Medium Bold + apoyo Body Small secondary + control (Switch).
 * Toda la fila activa el control (label asociado).
 */
import AwIcon from '../components/AwIcon.vue'
import AwSwitch from '../components/AwSwitch.vue'
import type { AwIconName } from '../icons'

const model = defineModel<boolean>({ default: false })
withDefaults(defineProps<{ headline: string; supporting?: string; icon?: AwIconName; disabled?: boolean }>(), {
  supporting: undefined, icon: undefined, disabled: false,
})
</script>

<template>
  <div class="aw-ui flex min-h-[68px] w-full items-center gap-16 rounded-s border border-border-soft bg-surface-default px-16 py-8">
    <AwIcon v-if="icon" :name="icon" class="text-icon-primary" />
    <div class="flex min-w-0 flex-1 flex-col">
      <span :class="['aw-label-medium-bold', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ headline }}</span>
      <span v-if="supporting" class="aw-text-body-small text-text-secondary">{{ supporting }}</span>
    </div>
    <AwSwitch v-model="model" :aria-label="headline" :disabled="disabled" />
  </div>
</template>
