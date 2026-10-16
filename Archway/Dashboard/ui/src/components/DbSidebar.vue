<script setup lang="ts">
/**
 * Left panel (sidebar) — Figma: UI shell / Header + PanelLeft (658:40615) + Sidebar_items (3859:8573).
 *  - ≥ 768 px: siempre visible. Expandida 272 (Max plus/Max) o 256 (X-Larger/Larger) · Colapsada 48.
 *    Tap en un ícono colapsado → se expande (emite `update:collapsed`).
 *  - Regla: un ítem con subítems NO cambia la vista; sólo despliega (botón con chevron).
 *  - Acciones fijas al pie (modo de color, idioma), fuera de la lista y sin scroll (slot `footer`).
 * Para mobile usar DbAppShell, que lo monta como drawer.
 */
import { ref, useId, watch, type Component } from 'vue'
import DbNavItem from './DbNavItem.vue'
import DbTooltip from './DbTooltip.vue'

export interface DbNavNode {
  id: string
  label: string
  icon?: Component
  href?: string
  disabled?: boolean
  children?: DbNavNode[]
}

const current = defineModel<string | null>('current', { default: null })
const collapsed = defineModel<boolean>('collapsed', { default: false })

const props = withDefaults(
  defineProps<{
    items: DbNavNode[]
    ariaLabel?: string
    /** Ancho expandido: 272 (Max plus / Max) o 256 (X-Larger / Larger / drawer). */
    width?: 272 | 256
    /** Muestra íconos (panel principal) o no (SubPanelLeft). */
    icons?: boolean
  }>(),
  { ariaLabel: 'Principal', width: 272, icons: true },
)
const emit = defineEmits<{ navigate: [node: DbNavNode] }>()

const uid = useId()
const expanded = ref<Set<string>>(new Set())

function parentOf(id: string | null): DbNavNode | undefined {
  return props.items.find((n) => n.children?.some((c) => c.id === id))
}

// La categoría que contiene la página actual empieza desplegada.
watch(current, (id) => {
  const p = parentOf(id)
  if (p) expanded.value.add(p.id)
}, { immediate: true })

function toggle(node: DbNavNode) {
  if (collapsed.value) {
    collapsed.value = false
    expanded.value.add(node.id)
    return
  }
  const next = new Set(expanded.value)
  if (next.has(node.id)) next.delete(node.id)
  else next.add(node.id)
  expanded.value = next
}

function go(node: DbNavNode) {
  if (collapsed.value) collapsed.value = false
  current.value = node.id
  emit('navigate', node)
}
</script>

<template>
  <nav
    :aria-label="ariaLabel"
    :class="[
      'db-ui flex h-full shrink-0 flex-col border-r border-border-02 bg-layer-01 pt-400 transition-[width] duration-fast',
      collapsed ? 'w-600' : width === 272 ? 'w-[272px]' : 'w-[256px]',
    ]"
  >
    <ul class="flex-1 overflow-y-auto overflow-x-hidden">
      <li v-for="node in items" :key="node.id">
        <DbTooltip v-if="collapsed" :text="node.label" position="right" class="w-full [&>span:first-child]:w-full">
          <DbNavItem
            :label="node.label"
            :icon="icons ? node.icon : undefined"
            :href="node.href"
            :collapsed="true"
            :current="current === node.id"
            :contains-current="parentOf(current)?.id === node.id"
            :disabled="node.disabled"
            :expandable="!!node.children?.length"
            :expanded="false"
            @click="node.children?.length ? toggle(node) : go(node)"
          />
        </DbTooltip>
        <template v-else>
          <DbNavItem
            :label="node.label"
            :icon="icons ? node.icon : undefined"
            :href="node.href"
            :current="current === node.id"
            :contains-current="parentOf(current)?.id === node.id"
            :disabled="node.disabled"
            :expandable="!!node.children?.length"
            :expanded="expanded.has(node.id)"
            :controls="`${uid}-${node.id}`"
            @click="node.children?.length ? toggle(node) : go(node)"
          />
          <ul v-if="node.children?.length" v-show="expanded.has(node.id)" :id="`${uid}-${node.id}`">
            <li v-for="child in node.children" :key="child.id">
              <DbNavItem
                :label="child.label"
                :href="child.href"
                :level="2"
                :current="current === child.id"
                :disabled="child.disabled"
                @click="go(child)"
              />
            </li>
          </ul>
        </template>
      </li>
    </ul>
    <div v-if="$slots.footer" :class="['flex border-t border-border-02 py-200', collapsed ? 'flex-col items-center gap-100' : 'gap-100 px-200']">
      <slot name="footer" :collapsed="collapsed" />
    </div>
  </nav>
</template>
