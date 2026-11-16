<script setup lang="ts">
/**
 * Card (base Core) — Figma: Design Resources CORE › Card. Style Elevated · Filled · Outlined;
 * State Enabled · Pressed · Focused · Selected. Padding 16, radio S (8), ancho mín. 328.
 * Regla de Figma: el trailing define la interacción.
 *  - trailing 'chevron' → la card entera es un enlace/botón y NO puede tener acciones adentro.
 *  - trailing 'more'/'favorite' → la card no se toca entera; las acciones son botones propios.
 */
import { computed } from 'vue'
import AwIcon from './AwIcon.vue'
import AwIconButton from './AwIconButton.vue'
import AwTag from './AwTag.vue'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    tag?: string
    variant?: 'elevated' | 'filled' | 'outlined'
    trailing?: 'chevron' | 'more' | 'none'
    favorite?: boolean
    selected?: boolean
    href?: string
  }>(),
  { subtitle: undefined, tag: undefined, variant: 'elevated', trailing: 'chevron', favorite: undefined, selected: false, href: undefined },
)
const emit = defineEmits<{ click: []; more: []; 'update:favorite': [value: boolean] }>()
const whole = computed(() => props.trailing === 'chevron')
const el = computed(() => (!whole.value ? 'div' : props.href ? 'a' : 'button'))
const surface = computed(() => ({
  elevated: 'bg-surface-default shadow-shallow-l-elev-1',
  filled: 'bg-surface-subtle',
  outlined: 'bg-surface-default shadow-[inset_0_0_0_1px_var(--aw-border-soft)]',
}[props.variant]))
const pressed = computed(() => (props.variant === 'filled' ? 'active:bg-surface-muted' : 'active:bg-surface-subtle'))
</script>

<template>
  <component
    :is="el"
    :href="el === 'a' ? href : undefined"
    :type="el === 'button' ? 'button' : undefined"
    :aria-current="selected ? 'true' : undefined"
    :class="[
      'aw-ui flex w-full min-w-[328px] flex-col gap-16 rounded-s p-16 text-left outline-none transition-colors duration-fast ease-standard',
      surface,
      whole ? `${pressed} focus-visible:shadow-[inset_0_0_0_2px_var(--aw-border-strong)]` : '',
      selected ? '!shadow-[inset_0_0_0_2px_var(--aw-border-input-active)]' : '',
    ]"
    @click="whole && emit('click')"
  >
    <div class="flex w-full items-center gap-8">
      <div v-if="$slots.leading" class="size-80 shrink-0 overflow-hidden rounded-s"><slot name="leading" /></div>
      <div class="flex min-w-0 flex-1 flex-col items-start gap-4">
        <slot name="tag"><AwTag v-if="tag" :label="tag" hierarchy="secondary" /></slot>
        <span class="aw-label-medium-bold text-text-primary">{{ title }}</span>
        <span v-if="subtitle" class="aw-label-small text-text-secondary">{{ subtitle }}</span>
      </div>
      <AwIconButton
        v-if="favorite !== undefined"
        icon="favorite"
        :label="favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'"
        variant="ghost"
        :pressed="favorite"
        @click.stop="emit('update:favorite', !favorite)"
      />
      <AwIcon v-if="trailing === 'chevron'" name="chevron-up" :rotate="90" class="text-icon-primary" />
      <AwIconButton v-else-if="trailing === 'more'" icon="more" label="Más opciones" variant="ghost" @click.stop="emit('more')" />
    </div>
    <div v-if="$slots.default" class="w-full"><slot /></div>
  </component>
</template>
