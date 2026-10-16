import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { LayoutGrid, List } from 'lucide-vue-next'
import { DbSegmentedButton, DbTabs } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Tabs y Segmented button',
  // Componente genérico: Storybook no infiere sus props, los controles salen de `args`.
  parameters: { controls: { disable: true } },
  args: { ariaLabel: 'Secciones', tabs: [], modelValue: '' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  render: () => ({
    components: { DbTabs },
    setup: () => ({
      tab: ref('general'),
      tabs: [
        { value: 'general', label: 'Menu item' },
        { value: 'disponibilidad', label: 'Menu item' + ' 2' },
        { value: 'segmentacion', label: 'Menu item' + ' 3' },
        { value: 'bloqueado', label: 'Disabled', disabled: true },
      ],
    }),
    template: `<div class="max-w-[720px] p-300"><DbTabs v-model="tab" :tabs="tabs" aria-label="Secciones de la promoción">
      <template #panel="{ value }"><p class="db-body02 text-text-secondary">Contenido de la pestaña <strong>{{ value }}</strong>.</p></template>
    </DbTabs></div>`,
  }),
}

/** Tab label: enabled · hovered · focused · pressed · Active · disabled. */
export const EstadosTab: Story = {
  name: 'Tab label · estados',
  parameters: pseudo,
  render: () => ({
    components: { DbTabs },
    setup: () => ({ states: [['enabled', ''], ['hovered', 'is-hover'], ['focused', 'is-focus'], ['pressed', 'is-active']] }),
    template: `<div class="db-ui flex flex-col gap-200 p-300" style="max-width:360px">
      <div v-for="[name, cls] in states" :key="name" :class="cls">
        <DbTabs :model-value="'x'" :tabs="[{ value: 'y', label: 'Menu item' }]" :aria-label="name" />
      </div>
      <DbTabs :model-value="'y'" :tabs="[{ value: 'y', label: 'Menu item' }]" aria-label="Active" />
      <DbTabs :model-value="'x'" :tabs="[{ value: 'y', label: 'Menu item', disabled: true }]" aria-label="Disabled" />
    </div>`,
  }),
}

export const Segmented: Story = {
  name: 'Segmented button',
  render: () => ({
    components: { DbSegmentedButton },
    setup: () => ({
      a: ref('1'), b: ref('list'), c: ref('lista'),
      List, LayoutGrid,
    }),
    template: `<div class="db-ui flex flex-col items-start gap-300 p-300">
      <DbSegmentedButton v-model="a" aria-label="Dos segmentos" :segments="[{ value: '1', label: 'Label' }, { value: '2', label: 'Label' }]" />
      <DbSegmentedButton v-model="a" aria-label="Cuatro segmentos" :segments="[{ value: '1', label: 'Label' }, { value: '2', label: 'Label' }, { value: '3', label: 'Label' }, { value: '4', label: 'Label', disabled: true }]" />
      <DbSegmentedButton v-model="b" aria-label="Vista" :segments="[{ value: 'list', icon: List, ariaLabel: 'Lista' }, { value: 'grid', icon: LayoutGrid, ariaLabel: 'Grilla' }]" />
      <DbSegmentedButton v-model="c" aria-label="Vista con texto" :segments="[{ value: 'lista', icon: List, label: 'Lista' }, { value: 'grilla', icon: LayoutGrid, label: 'Grilla' }]" />
    </div>`,
  }),
}
