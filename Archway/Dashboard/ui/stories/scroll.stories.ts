import type { Meta, StoryObj } from '@storybook/vue3'
import { DbScrollArea } from '../src'

const meta = {
  title: 'Componentes/Scroll',
  component: DbScrollArea,
  parameters: { controls: { disable: true } },
  args: { label: 'Listado de restaurantes' },
} satisfies Meta<typeof DbScrollArea>
export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  render: (args) => ({
    components: { DbScrollArea },
    setup: () => ({ args, items: ['Bel', 'Scalabrini', 'Oli', 'Abasto', 'Palermo', 'Av. Santa Fe', 'Ayacucho', 'Guatemala', 'Borges', 'Av. Córdoba', 'Belgrano', 'Caballito', 'Flores', 'Liniers'] }),
    template: `<div class="max-w-[288px] p-300"><DbScrollArea v-bind="args" max-height="240px">
      <ul class="m-0 list-none p-0"><li v-for="i in items" :key="i" class="db-label02 border-b border-border-02 px-200 py-200 text-text-primary">{{ i }}</li></ul>
    </DbScrollArea></div>`,
  }),
}
