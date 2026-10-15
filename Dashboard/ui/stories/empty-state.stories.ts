import type { Meta, StoryObj } from '@storybook/vue3'
import { DbEmptyState, DbStatusIcon } from '../src'

const meta = {
  title: 'Componentes/Empty state',
  component: DbEmptyState,
  parameters: { controls: { disable: false } },
  argTypes: {
    role: { control: 'inline-radio', options: ['status', 'alert'] },
    headingLevel: { control: 'inline-radio', options: [2, 3, 4] },
  },
  args: {
    title: 'Todavía no hay promociones',
    description: 'Cuando crees una promoción vas a verla en este listado. Podés filtrar por país o por estado.',
    actionLabel: 'Actualizar',
    headingLevel: 2,
    role: 'status',
  },
} satisfies Meta<typeof DbEmptyState>
export default meta
type Story = StoryObj<typeof meta>

export const Vacio: Story = {
  name: 'Sin elementos',
  render: (args) => ({
    components: { DbEmptyState },
    setup: () => ({ args }),
    template: `<div class="db-ui p-600"><DbEmptyState v-bind="args" /></div>`,
  }),
}

export const ErrorDeCarga: Story = {
  name: 'Error de carga',
  args: {
    title: 'No pudimos cargar los restaurantes',
    description: 'Revisá tu conexión e intentá de nuevo. Si el problema sigue, contactá a soporte.',
    actionLabel: 'Reintentar',
    role: 'alert',
  },
  render: (args) => ({
    components: { DbEmptyState, DbStatusIcon },
    setup: () => ({ args }),
    template: `<div class="db-ui p-600"><DbEmptyState v-bind="args"><template #icon><DbStatusIcon status="error" :size="56" /></template></DbEmptyState></div>`,
  }),
}
