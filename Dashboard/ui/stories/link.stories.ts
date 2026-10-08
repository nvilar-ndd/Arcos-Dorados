import type { Meta, StoryObj } from '@storybook/vue3'
import { ArrowLeft, ExternalLink, Plus } from 'lucide-vue-next'
import { DbLink } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Link',
  component: DbLink,
  parameters: { controls: { disable: true } },
} satisfies Meta<typeof DbLink>
export default meta
type Story = StoryObj<typeof meta>

export const Usos: Story = {
  parameters: pseudo,
  render: () => ({
    components: { DbLink },
    setup: () => ({ ArrowLeft, Plus, ExternalLink }),
    template: `<div class="db-ui flex flex-col items-start gap-200 p-300">
      <DbLink href="#" :icon-left="ArrowLeft">volver</DbLink>
      <DbLink :icon-left="Plus">Agregar marca de moneda</DbLink>
      <DbLink href="https://www.mcdonalds.com.ar" external :icon-right="ExternalLink">Ver en el sitio</DbLink>
      <DbLink href="#" class="is-hover">Hover (subrayado)</DbLink>
    </div>`,
  }),
}
