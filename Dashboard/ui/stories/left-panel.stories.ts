import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Languages, Sun } from 'lucide-vue-next'
import { DbIconButton, DbNavItem, DbSidebar } from '../src'
import { mainNav, pseudo } from './fixtures'

const meta = {
  title: 'Estructura/Left panel (sidebar)',
  component: DbSidebar,
  parameters: { controls: { disable: true } },
  args: { items: mainNav },
} satisfies Meta<typeof DbSidebar>
export default meta
type Story = StoryObj<typeof meta>

const panel = (collapsedInit: boolean) => ({
  components: { DbSidebar, DbIconButton },
  setup: () => ({ mainNav, Sun, Languages, current: ref<string | null>('service-fee'), collapsed: ref(collapsedInit) }),
  template: `<div class="flex h-[720px] gap-300">
    <DbSidebar v-model:current="current" v-model:collapsed="collapsed" :items="mainNav">
      <template #footer>
        <DbIconButton :icon="Sun" variant="secondary" label="Cambiar a modo oscuro" />
        <DbIconButton :icon="Languages" variant="secondary" label="Idioma: Español" />
      </template>
    </DbSidebar>
    <div class="flex flex-col items-start gap-200 p-300">
      <button class="db-label02 rounded-sm border border-border-02 px-200 py-100" @click="collapsed = !collapsed">{{ collapsed ? 'Expandir' : 'Colapsar' }}</button>
      <span class="db-label01 text-text-secondary">Actual: {{ current }}</span>
    </div>
  </div>`,
})

export const Expandida: Story = { render: () => panel(false) }
export const Colapsada: Story = { render: () => panel(true) }

/** Estados de `sidebar` e `item` (Figma 582:6524 · 3815:7579). */
export const Estados: Story = {
  parameters: pseudo,
  render: () => ({
    components: { DbNavItem },
    setup: () => ({ icon: mainNav[2]?.icon, rows: [['enabled', ''], ['hovered', 'is-hover'], ['focused', 'is-focus'], ['pressed', 'is-active']] }),
    template: `<div class="db-ui grid grid-cols-[96px_272px_48px_272px] items-center gap-x-300 gap-y-100 p-300">
      <template v-for="[name, cls] in rows" :key="name">
        <span class="db-label01 font-mono text-text-secondary">{{ name }}</span>
        <div :class="cls"><DbNavItem label="Category Tittle" :icon="icon" expandable /></div>
        <div :class="cls"><DbNavItem label="Category Tittle" :icon="icon" collapsed /></div>
        <div :class="cls"><DbNavItem label="SubCategory" :level="2" /></div>
      </template>
      <span class="db-label01 font-mono text-text-secondary">Active</span>
      <DbNavItem label="Category Tittle" :icon="icon" current /><DbNavItem label="Category Tittle" :icon="icon" collapsed current /><DbNavItem label="SubCategory" :level="2" current />
      <span class="db-label01 font-mono text-text-secondary">Active_item</span>
      <DbNavItem label="Category Tittle" :icon="icon" contains-current expandable expanded /><span /><span />
      <span class="db-label01 font-mono text-text-secondary">disabled</span>
      <DbNavItem label="Category Tittle" :icon="icon" disabled /><DbNavItem label="Category Tittle" :icon="icon" collapsed disabled /><DbNavItem label="SubCategory" :level="2" disabled />
    </div>`,
  }),
}
