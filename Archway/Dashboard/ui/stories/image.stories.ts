import type { Meta, StoryObj } from '@storybook/vue3'
import { DbImage } from '../src'
import { placeholder } from './fixtures'

const meta = {
  title: 'Componentes/Images and embeds',
  component: DbImage,
  parameters: { controls: { disable: false } },
  argTypes: { labelPosition: { control: 'inline-radio', options: ['top', 'bottom', 'inner-top', 'inner-bottom'] } },
  args: { src: placeholder(), alt: '', label: 'Banner Home', labelPosition: 'bottom' },
} satisfies Meta<typeof DbImage>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbImage }, setup: () => ({ args }), template: '<div class="p-300"><DbImage v-bind="args" /></div>' }),
}

export const PosicionesDelLabel: Story = {
  name: 'Posiciones del label',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbImage },
    setup: () => ({ src: placeholder() }),
    template: `<div class="db-ui flex flex-wrap gap-300 p-300">
      <DbImage v-for="p in ['top', 'bottom', 'inner-top', 'inner-bottom']" :key="p" :src="src" alt="" :label="'Label ' + p" :label-position="p" />
    </div>`,
  }),
}
