<script setup lang="ts">
/**
 * Menú desplegable de acciones — Figma: FAB-ListMenu-desplegado (359:6293) + Dropdown-ListMenu.
 * El disparador es un DbIconButton; el panel usa `layer/02` y la elevación `Elevation/Raised Down`.
 * Patrón ARIA "menu button": flechas, Home/End, Escape devuelve el foco al disparador.
 */
import { nextTick, ref, useId, type Component } from 'vue'
import DbIconButton, { type DbIconButtonVariant } from './DbIconButton.vue'
import { useDismiss } from '../composables/useDismiss'

export interface DbMenuItem {
  value: string
  label: string
  icon?: Component
  disabled?: boolean
  /** Acción destructiva: el texto pasa a `text/error`. */
  danger?: boolean
}

const props = withDefaults(
  defineProps<{
    items: DbMenuItem[]
    /** Nombre accesible del disparador. */
    label: string
    icon?: Component
    initials?: string
    variant?: DbIconButtonVariant
    /** Alineación del panel respecto del disparador (Figma: Menu = Left / Right). */
    align?: 'left' | 'right'
    /** Figma: Position = down / Up. */
    position?: 'down' | 'up'
  }>(),
  { variant: 'secondary', align: 'left', position: 'down' },
)

const emit = defineEmits<{ select: [value: string] }>()

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const list = ref<HTMLElement | null>(null)
const menuId = useId()


useDismiss(open, [root], (reason) => close(reason === 'escape'))

function focusItem(index: number) {
  const nodes = list.value?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])')
  if (!nodes?.length) return
  const i = (index + nodes.length) % nodes.length
  nodes[i]?.focus()
}

async function toggle() {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    focusItem(0)
  }
}

function close(returnFocus = true) {
  open.value = false
  if (returnFocus) root.value?.querySelector<HTMLElement>('button')?.focus()
}

function onKeydown(event: KeyboardEvent) {
  const nodes = Array.from(list.value?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])') ?? [])
  const current = nodes.indexOf(document.activeElement as HTMLElement)
  if (event.key === 'ArrowDown') { event.preventDefault(); focusItem(current + 1) }
  else if (event.key === 'ArrowUp') { event.preventDefault(); focusItem(current - 1) }
  else if (event.key === 'Home') { event.preventDefault(); focusItem(0) }
  else if (event.key === 'End') { event.preventDefault(); focusItem(nodes.length - 1) }
  else if (event.key === 'Tab') close(false)
}

function choose(item: DbMenuItem) {
  if (item.disabled) return
  emit('select', item.value)
  close()
}

</script>

<template>
  <div ref="root" class="db-ui relative inline-flex h-fit self-start">
    <span @click="toggle" @keydown.down.prevent="toggle">
      <DbIconButton
        :label="label"
        :icon="icon"
        :initials="initials"
        :variant="variant"
        aria-haspopup="menu"
        :aria-expanded="open"
        :aria-controls="open ? menuId : undefined"
      />
    </span>
    <ul
      v-if="open"
      :id="menuId"
      ref="list"
      role="menu"
      :aria-label="label"
      :class="[
        'absolute z-10 w-[168px] overflow-hidden bg-layer-02 shadow-raised-down',
        align === 'left' ? 'left-0' : 'right-0',
        position === 'down' ? 'top-full mt-50' : 'bottom-full mb-50',
      ]"
      @keydown="onKeydown"
    >
      <li v-for="item in items" :key="item.value" role="none">
        <button
          type="button"
          role="menuitem"
          tabindex="-1"
          :aria-disabled="item.disabled || undefined"
          :class="[
            'db-label02 flex h-600 w-full items-center gap-100 border-b border-border-02 px-200 text-left outline-none',
            item.disabled ? 'cursor-not-allowed text-text-disabled' : item.danger ? 'text-text-error' : 'text-text-secondary',
            !item.disabled && 'hover:bg-background-04 hover:text-text-primary focus-visible:bg-background-04 focus-visible:text-text-primary',
          ]"
          @click="choose(item)"
        >
          <component :is="item.icon" v-if="item.icon" class="size-200 shrink-0" aria-hidden="true" />
          {{ item.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
