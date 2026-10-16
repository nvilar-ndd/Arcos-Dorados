import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Circle } from 'lucide-vue-next'
import { DbSelect } from '../src'
import { countries, placeholder, pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Dropdown',
  // Componente genérico: Storybook no infiere sus props, los controles salen de `args`.
  parameters: { controls: { disable: false } },
  args: { options: countries, label: 'País', placeholder: 'Seleccionar', status: 'default', disabled: false, skeleton: false },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbSelect },
    setup: () => ({ args, value: ref<string | null>(null) }),
    template: '<div class="h-[420px] max-w-[288px] p-300"><DbSelect v-bind="args" v-model="value" /></div>',
  }),
}

/** Dropdown-Menu: Enabled · Hover · Focus · Active · Error · Disabled · Skeleton. */
export const Estados: Story = {
  parameters: { ...pseudo, controls: { disable: true } },
  render: () => ({
    components: { DbSelect },
    setup: () => ({ Circle, options: countries }),
    template: `<div class="db-ui grid max-w-[440px] grid-cols-[96px_1fr] items-center gap-200 p-300">
      <span class="db-label01 font-mono text-text-secondary">enabled</span><DbSelect :options="options" :icon-left="Circle" aria-label="Enabled" placeholder="Menu item" />
      <span class="db-label01 font-mono text-text-secondary">hovered</span><DbSelect class="is-hover" :options="options" :icon-left="Circle" aria-label="Hovered" placeholder="Menu item" />
      <span class="db-label01 font-mono text-text-secondary">focused</span><DbSelect class="is-focus" :options="options" :icon-left="Circle" aria-label="Focused" placeholder="Menu item" />
      <span class="db-label01 font-mono text-text-secondary">error</span><DbSelect :options="options" :icon-left="Circle" aria-label="Error" status="error" supporting-text="Elegí un país" placeholder="Menu item" />
      <span class="db-label01 font-mono text-text-secondary">disabled</span><DbSelect :options="options" :icon-left="Circle" aria-label="Disabled" disabled placeholder="Menu item" />
      <span class="db-label01 font-mono text-text-secondary">skeleton</span><DbSelect :options="options" aria-label="Skeleton" skeleton />
    </div>`,
  }),
}

/** Dropdown-ListItem con imagen (80 px) y opción deshabilitada. */
export const ConImagenes: Story = {
  name: 'Opciones con imagen',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbSelect },
    setup: () => ({
      value: ref<string | null>('bigmac'),
      options: [
        { value: 'bigmac', label: 'Big Mac', image: placeholder('', 96, 96) },
        { value: 'cuarto', label: 'Cuarto de libra', image: placeholder('', 96, 96) },
        { value: 'mcnifica', label: 'McNífica', image: placeholder('', 96, 96) },
        { value: 'tasty', label: 'Tasty doble (sin stock)', image: placeholder('', 96, 96), disabled: true },
      ],
    }),
    template: '<div class="h-[440px] max-w-[288px] p-300"><DbSelect v-model="value" :options="options" label="Producto" /></div>',
  }),
}
