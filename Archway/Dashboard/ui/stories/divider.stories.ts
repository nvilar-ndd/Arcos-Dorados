import type { Meta, StoryObj } from '@storybook/vue3'
import { DbDivider } from '../src'

const meta = {
  title: 'Componentes/Hr (divisor)',
  component: DbDivider,
  parameters: { controls: { disable: false } },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof DbDivider>
export default meta
type Story = StoryObj<typeof meta>

export const Orientaciones: Story = {
  render: (args) => ({
    components: { DbDivider },
    setup: () => ({ args }),
    template: `<div class="db-ui flex flex-col gap-400 p-300">
      <div class="flex max-w-[400px] flex-col gap-200"><span class="db-label02 text-text-primary">Motor de promociones</span><DbDivider v-bind="args" /><span class="db-label02 text-text-primary">Productos a excluir</span></div>
      <div class="flex h-300 items-center gap-200"><span class="db-label01 text-text-secondary">Código: PROMOFIRSTOA</span><DbDivider orientation="vertical" /><span class="db-label01 text-text-secondary">Tipo: Por método de pago</span></div>
    </div>`,
  }),
}
