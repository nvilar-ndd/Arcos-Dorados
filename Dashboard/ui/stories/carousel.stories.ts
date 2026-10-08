import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbCarousel } from '../src'
import { placeholder } from './fixtures'

const slides = [1, 2, 3].map((n) => ({ src: placeholder(`Imagen ${n}`, 1344, 448), alt: `Banner ${n}` }))

const meta = {
  title: 'Componentes/Carousel',
  component: DbCarousel,
  parameters: { controls: { disable: false } },
  argTypes: { variant: { control: 'inline-radio', options: ['arrows', 'float-arrows', 'dots', 'simple'] } },
  args: { slides, label: 'Banners de la Home', variant: 'dots' },
} satisfies Meta<typeof DbCarousel>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbCarousel }, setup: () => ({ args, i: ref(0) }), template: '<div class="max-w-[672px] p-300"><DbCarousel v-bind="args" v-model="i" /></div>' }),
}

export const Variantes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbCarousel },
    setup: () => ({ slides, idx: ref([0, 0, 0, 0]) }),
    template: `<div class="db-ui flex max-w-[672px] flex-col gap-400 p-300">
      <DbCarousel v-for="(v, n) in ['arrows', 'float-arrows', 'dots', 'simple']" :key="v" v-model="idx[n]" :slides="slides" :variant="v" :label="'Carrusel ' + v" />
    </div>`,
  }),
}
