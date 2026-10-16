<script setup lang="ts">
/**
 * Accordion item — Figma: Components › Accordion (697:23702).
 * Encabezado 40 px (padding 8, `Label02`) con chevron; contenido `Body02`.
 * Figma sólo documenta "Desplegada": se suma foco visible (D-C06) y estado deshabilitado.
 */
import { useId, type Component } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const open = defineModel<boolean>('open', { default: false })

withDefaults(
  defineProps<{
    title: string
    icon?: Component
    /** Nivel del heading que envuelve al botón (estructura del documento). */
    headingLevel?: 2 | 3 | 4 | 5 | 6
    disabled?: boolean
  }>(),
  { headingLevel: 3, disabled: false },
)

const id = useId()
</script>

<template>
  <div class="db-ui flex w-full flex-col gap-50">
    <component :is="`h${headingLevel}`" class="m-0">
      <button
        :id="`${id}-btn`"
        type="button"
        :aria-expanded="open"
        :aria-controls="`${id}-panel`"
        :disabled="disabled"
        class="db-focus flex h-500 w-full items-center gap-100 rounded-sm p-100 text-left disabled:cursor-not-allowed"
        @click="open = !open"
      >
        <component :is="icon" v-if="icon" class="size-300 shrink-0 p-[3px] text-icon-primary" aria-hidden="true" />
        <span :class="['db-label02 flex-1 pr-100', disabled ? 'text-text-disabled' : 'text-text-primary']">{{ title }}</span>
        <ChevronDown
          :class="['size-300 shrink-0 p-[3px] transition-transform duration-fast', disabled ? 'text-text-disabled' : 'text-icon-primary', open && 'rotate-180']"
          aria-hidden="true"
        />
      </button>
    </component>
    <div
      v-show="open"
      :id="`${id}-panel`"
      role="region"
      :aria-labelledby="`${id}-btn`"
      class="db-body02 px-100 pb-100 text-text-secondary"
    >
      <slot />
    </div>
  </div>
</template>
