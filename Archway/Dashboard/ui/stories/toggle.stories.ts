import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbToggle } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Toggle (switch)',
  component: DbToggle,
  parameters: { controls: { disable: false } },
  args: { label: 'Motor de promociones', description: 'Habilitar o deshabilitar el sistema de promociones para este país', disabled: false, skeleton: false },
} satisfies Meta<typeof DbToggle>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbToggle }, setup: () => ({ args, on: ref(true) }), template: '<div class="p-300"><DbToggle v-bind="args" v-model="on" /></div>' }),
}

/** Status × True/False (12 variantes de Figma). */
export const Estados: Story = {
  parameters: { ...pseudo, controls: { disable: true } },
  render: () => ({
    components: { DbToggle },
    setup: () => ({ states: [['enabled', ''], ['hovered', 'is-hover'], ['focused', 'is-focus'], ['pressed', 'is-active'], ['disabled', 'dis'], ['skeleton', 'skel']] }),
    template: `<div class="db-ui grid grid-cols-[96px_64px_64px] items-center gap-x-200 p-300">
      <span /><span class="db-label01 text-text-secondary">True</span><span class="db-label01 text-text-secondary">False</span>
      <template v-for="[name, cls] in states" :key="name">
        <span class="db-label01 font-mono text-text-secondary">{{ name }}</span>
        <DbToggle v-for="v in [true, false]" :key="String(v)" :class="cls" :model-value="v" :disabled="cls === 'dis'" :skeleton="cls === 'skel'" :aria-label="name + ' ' + v" />
      </template>
    </div>`,
  }),
}
