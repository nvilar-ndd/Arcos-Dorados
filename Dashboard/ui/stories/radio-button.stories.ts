import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbRadio, DbRadioGroup } from '../src'

const meta = {
  title: 'Componentes/Radio button',
  // Componente genérico: Storybook no infiere sus props, los controles salen de `args`.
  parameters: { controls: { disable: false } },
  args: {
    legend: 'Tipo de promoción',
    framed: false,
    orientation: 'vertical',
    options: [
      { value: 'producto', label: 'Producto' },
      { value: 'pedido', label: 'Pedido', supportingText: 'Aplica al total del pedido' },
      { value: 'pago', label: 'Por método de pago' },
      { value: 'mkt', label: 'Promoción de Mkt', disabled: true },
    ],
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbRadioGroup }, setup: () => ({ args, v: ref('producto') }), template: '<div class="p-300"><DbRadioGroup v-bind="args" v-model="v" /></div>' }),
}

/** Sate (Default · Disabled) × Style (Fill · Unfilled) × Selected. */
export const Estados: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbRadio },
    template: `<div class="db-ui grid grid-cols-2 gap-200 p-300" style="max-width:420px">
      <DbRadio name="a" value="x" label="Radiobutton label" framed /><DbRadio name="b" value="x" label="Radiobutton label" />
      <DbRadio name="c" value="x" :model-value="'x'" label="Radiobutton label" framed /><DbRadio name="d" value="x" :model-value="'x'" label="Radiobutton label" />
      <DbRadio name="e" value="x" label="Radiobutton label" framed disabled /><DbRadio name="f" value="x" label="Radiobutton label" disabled />
    </div>`,
  }),
}
