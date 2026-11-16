<script setup lang="ts">
/**
 * List Item — Figma: Design Resources CORE › List Item. Fila de 56, padding 16, gap 8.
 * Si tiene `to`/`href` o escucha click es un botón/enlace de fila completa (Pressed: Surface/subtle,
 * Focused: borde Border/strong). Leading/trailing son íconos o slots (Checkbox, Radio, Switch).
 */
import { computed, useAttrs } from 'vue'
import AwIcon from './AwIcon.vue'
import AwDivider from './AwDivider.vue'
import type { AwIconName } from '../icons'

const props = withDefaults(
  defineProps<{ title: string; subtitle?: string; leadingIcon?: AwIconName; trailingIcon?: AwIconName; href?: string; divider?: boolean; disabled?: boolean; interactive?: boolean }>(),
  { subtitle: undefined, leadingIcon: undefined, trailingIcon: undefined, href: undefined, divider: false, disabled: false, interactive: false },
)
defineEmits<{ click: [e: MouseEvent] }>()
const attrs = useAttrs()
const isAction = computed(() => props.interactive || !!props.href || 'onClick' in attrs)
const tag = computed(() => (props.href ? 'a' : isAction.value ? 'button' : 'div'))
</script>

<template>
  <div class="aw-ui w-full">
    <component
      :is="tag"
      :href="href"
      :type="tag === 'button' ? 'button' : undefined"
      :disabled="tag === 'button' ? disabled : undefined"
      :aria-disabled="tag === 'a' && disabled ? 'true' : undefined"
      :class="[
        'flex min-h-56 w-full items-center gap-8 bg-surface-default p-16 text-left outline-none transition-colors duration-fast ease-standard',
        isAction && !disabled ? 'active:bg-surface-subtle focus-visible:shadow-[inset_0_0_0_2px_var(--aw-border-strong)]' : '',
        disabled ? 'cursor-not-allowed' : '',
      ]"
      @click="$emit('click', $event)"
    >
      <slot name="leading">
        <AwIcon v-if="leadingIcon" :name="leadingIcon" :class="disabled ? 'text-icon-disabled' : 'text-icon-primary'" />
      </slot>
      <span class="flex min-w-0 flex-1 flex-col">
        <span :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ title }}</span>
        <span v-if="subtitle" :class="['aw-label-medium', disabled ? 'text-text-disabled' : 'text-text-secondary']">{{ subtitle }}</span>
      </span>
      <slot name="trailing">
        <AwIcon v-if="trailingIcon" :name="trailingIcon" :class="disabled ? 'text-icon-disabled' : 'text-icon-primary'" />
      </slot>
    </component>
    <AwDivider v-if="divider" />
  </div>
</template>
