import type { Meta, StoryObj } from '@storybook/vue3'
import { Store } from 'lucide-vue-next'
import { DbTag } from '../src'

const meta = {
  title: 'Componentes/Tag',
  component: DbTag,
  parameters: { controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['fill', 'outline'] },
    tone: { control: 'select', options: ['neutral', 'success', 'info', 'warning', 'danger', 'muted', 'plain'] },
  },
  args: { label: 'Text', variant: 'fill', tone: 'neutral', truncate: false },
} satisfies Meta<typeof DbTag>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbTag }, setup: () => ({ args }), template: '<div class="p-300"><DbTag v-bind="args" /></div>' }),
}

export const Variantes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbTag },
    setup: () => ({ Store }),
    template: `<div class="db-ui flex flex-col gap-300 p-300">
      <div class="flex flex-wrap gap-200"><DbTag label="Text" /><DbTag label="Text" variant="outline" /><DbTag label="Text" :icon="Store" /><DbTag label="Text" :icon="Store" variant="outline" /></div>
      <div class="flex flex-wrap gap-200">
        <DbTag label="Publicada" tone="success" /><DbTag label="Cargando" tone="info" /><DbTag label="Pendiente" tone="danger" />
        <DbTag label="Pendiente de pago" tone="warning" /><DbTag label="Archivada" tone="muted" /><DbTag label="Borrador" tone="plain" />
      </div>
      <div class="max-w-[241px]"><DbTag truncate label="Tag content with a long text description that must be shown" /></div>
    </div>`,
  }),
}
