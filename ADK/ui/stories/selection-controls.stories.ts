import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { AdkChip, AdkQuantity, AdkToggle } from '../src'
import { pseudo } from './fixtures'

const meta = { title: 'Componentes/Chips, Toggle y Quantity', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Chips: Story = {
  parameters: pseudo,
  render: () => ({
    components: { AdkChip },
    setup: () => ({ sel: ref(['Sin cebolla']), opts: ['Sin cebolla', 'Sin pepinos', 'Extra queso', 'Sin salsa'] }),
    template: `<div class="adk-ui flex flex-col gap-24 p-24">
      <div class="flex flex-wrap gap-16">
        <AdkChip v-for="o in opts" :key="o" :model-value="sel.includes(o)" @update:model-value="(v) => sel = v ? [...sel, o] : sel.filter((x) => x !== o)">{{ o }}</AdkChip>
      </div>
      <div class="flex flex-wrap gap-16">
        <AdkChip size="sm" :model-value="true">Seleccionado · 40</AdkChip>
        <AdkChip size="sm">Sin seleccionar · 40</AdkChip>
        <AdkChip class="is-focus">Foco (agregado)</AdkChip>
        <AdkChip disabled>Deshabilitado</AdkChip>
      </div>
    </div>`,
  }),
}

export const Toggle: Story = {
  render: () => ({
    components: { AdkToggle },
    setup: () => ({ a: ref(true), b: ref(false) }),
    template: `<div class="adk-ui flex w-[656px] flex-col gap-32 p-24">
      <AdkToggle v-model="a" label="Sin hielo" />
      <AdkToggle v-model="b" label="Para llevar" description="Te lo entregamos en bolsa" />
      <AdkToggle :model-value="false" label="Deshabilitado" disabled />
    </div>`,
  }),
}

export const Quantity: Story = {
  render: () => ({
    components: { AdkQuantity },
    setup: () => ({ a: ref(1), b: ref(3), c: ref(1), removed: ref(false) }),
    template: `<div class="adk-ui flex flex-col items-start gap-24 p-24">
      <div class="flex items-center gap-24"><AdkQuantity v-model="a" label="Big Mac" /><span class="adk-body-small text-text-secondary">mínimo 1: el − se deshabilita</span></div>
      <div class="flex items-center gap-24"><AdkQuantity v-model="b" :max="3" label="Papas" /><span class="adk-body-small text-text-secondary">máximo 3: el + se deshabilita</span></div>
      <div class="flex items-center gap-24"><AdkQuantity v-model="c" label="McFlurry" removable @remove="removed = true" /><span class="adk-body-small text-text-secondary">Type Trash: con 1 el − quita del pedido {{ removed ? '(quitado)' : '' }}</span></div>
      <AdkQuantity :model-value="1" label="Agotado" disabled />
    </div>`,
  }),
}
