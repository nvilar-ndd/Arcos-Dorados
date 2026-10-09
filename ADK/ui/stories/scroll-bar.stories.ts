import type { Meta, StoryObj } from '@storybook/vue3'
import { AdkProductCard, AdkScrollArea } from '../src'
import { placeholder, products } from './fixtures'

const meta = { title: 'Componentes/Scroll Bar', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ConContenido: Story = {
  name: 'Scroll con contenido',
  render: () => ({
    components: { AdkScrollArea, AdkProductCard },
    setup: () => ({ list: [...products, ...products, ...products], img: placeholder() }),
    template: `<div class="adk-ui p-24">
      <AdkScrollArea label="Productos" class="h-[720px] w-[720px]">
        <div class="grid grid-cols-3 gap-16 p-8">
          <AdkProductCard v-for="(p, i) in list" :key="i" v-bind="p" :image="img" />
        </div>
      </AdkScrollArea>
    </div>`,
  }),
}
