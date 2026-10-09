import type { Meta, StoryObj } from '@storybook/vue3'
import { AdkBanner, AdkCategoryCard } from '../src'
import { placeholder } from './fixtures'

const meta = { title: 'Componentes/Banners y categorías', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Banner: Story = {
  render: () => ({
    components: { AdkBanner },
    setup: () => ({ img: placeholder('Ilustración', 152, 152) }),
    template: `<div class="adk-ui flex flex-col gap-32 bg-background-subtle p-24">
      <AdkBanner title="¡Llegó" highlight="MiMcDonald's!" subtitle="El programa de beneficios de McDonald's" cta="Quiero registrarme" :image="img" />
      <AdkBanner title="McCombo del día" subtitle="Elegí el tuyo con 20 % de descuento" :image="img" />
    </div>`,
  }),
}

export const Categorias: Story = {
  name: 'Botones de categoría',
  render: () => ({
    components: { AdkCategoryCard },
    setup: () => ({ img: placeholder('', 190, 190), cats: ['Hamburguesas', 'McCombos', 'Postres', 'McCafé'] }),
    template: `<div class="adk-ui grid w-[704px] grid-cols-2 gap-16 bg-background-subtle p-24">
      <AdkCategoryCard v-for="c in cats" :key="c" :label="c" :image="img" />
    </div>`,
  }),
}
