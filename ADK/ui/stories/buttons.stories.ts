import type { Meta, StoryObj } from '@storybook/vue3'
import { CreditCard, Plus, Utensils } from 'lucide-vue-next'
import { AdkButton, AdkIllustrationButton } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Buttons',
  component: AdkButton,
  parameters: { controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'selection'] },
    size: { control: 'inline-radio', options: ['lg', 'md', 'sm', 'xxl'] },
  },
  args: { variant: 'primary', size: 'lg', selected: false, disabled: false },
} satisfies Meta<typeof AdkButton>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { AdkButton }, setup: () => ({ args }), template: '<div class="p-24"><AdkButton v-bind="args" class="w-[320px]">Continuar</AdkButton></div>' }),
}

/** Matriz de Figma: Style × State. "Hover" de Figma = presionado (:active) en touch; Focus es agregado (A-C01). */
export const Estados: Story = {
  parameters: { ...pseudo, controls: { disable: true } },
  render: () => ({
    components: { AdkButton },
    setup: () => ({
      states: [['Active', ''], ['Hover / pressed', 'is-active'], ['Focus (agregado)', 'is-focus'], ['Inactive', 'dis']],
    }),
    template: `<div class="adk-ui grid grid-cols-[200px_repeat(4,240px)] items-center gap-24 p-24">
      <span /><span class="adk-body-small text-text-secondary">Primary</span><span class="adk-body-small text-text-secondary">Secondary</span><span class="adk-body-small text-text-secondary">Selection</span><span class="adk-body-small text-text-secondary">Selection elegida</span>
      <template v-for="[name, cls] in states" :key="name">
        <span class="adk-body-small text-text-secondary">{{ name }}</span>
        <AdkButton :class="['w-full', cls]" :disabled="cls === 'dis'">Label</AdkButton>
        <AdkButton variant="secondary" :class="['w-full', cls]" :disabled="cls === 'dis'">Label</AdkButton>
        <AdkButton variant="selection" :class="['w-full', cls]" :disabled="cls === 'dis'">Label</AdkButton>
        <AdkButton variant="selection" selected :class="['w-full', cls]" :disabled="cls === 'dis'">Label</AdkButton>
      </template>
    </div>`,
  }),
}

export const Tamanos: Story = {
  name: 'Tamaños',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { AdkButton },
    setup: () => ({ Plus }),
    template: `<div class="adk-ui flex flex-col items-start gap-24 p-24">
      <AdkButton size="lg" class="w-[320px]">Large · 80</AdkButton>
      <AdkButton size="md" class="w-[320px]">Medium · 56</AdkButton>
      <AdkButton size="sm" class="w-[320px]">Small · 40 (deprecado en footer)</AdkButton>
      <AdkButton variant="secondary" size="lg" :icon="Plus">Con ícono</AdkButton>
      <AdkButton variant="secondary" size="xxl">Comer aquí</AdkButton>
    </div>`,
  }),
}

export const Ilustracion: Story = {
  name: 'Button illustration',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { AdkIllustrationButton },
    setup: () => ({ CreditCard, Utensils }),
    template: `<div class="adk-ui flex items-start gap-32 bg-background-subtle p-24">
      <AdkIllustrationButton label="Pagar con tarjeta"><template #illustration><component :is="CreditCard" class="size-[168px] text-p-primary-gold" :stroke-width="1" /></template></AdkIllustrationButton>
      <AdkIllustrationButton size="medium" label="Comer aquí"><template #illustration><component :is="Utensils" class="size-[120px] text-p-primary-gold" :stroke-width="1" /></template></AdkIllustrationButton>
    </div>`,
  }),
}
