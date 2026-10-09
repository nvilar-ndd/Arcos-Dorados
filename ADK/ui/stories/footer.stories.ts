import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Accessibility } from 'lucide-vue-next'
import { AdkButton, AdkCartBar, AdkFooter, AdkPointsHint, AdkQuantity, AdkUserFooter } from '../src'

const meta = { title: 'Componentes/Footer', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const UserFooter: Story = {
  name: 'User_Footer',
  render: () => ({
    components: { AdkUserFooter },
    setup: () => ({ open: ref(true) }),
    template: `<div class="adk-ui flex items-end gap-32 bg-background-subtle p-24">
      <AdkUserFooter variant="attract" />
      <AdkUserFooter :variant="open ? 'guest' : 'collapsed'" @toggle="open = !open" />
      <AdkUserFooter variant="logged" user-name="Ronald McDonald" />
    </div>`,
  }),
}

export const Carrito: Story = {
  name: 'Carrito_Footer y puntos',
  render: () => ({
    components: { AdkCartBar, AdkPointsHint },
    template: `<div class="adk-ui flex w-[704px] flex-col gap-24 bg-background-subtle p-24">
      <AdkCartBar :count="0" total="$ 0,00" disabled />
      <AdkCartBar :count="3" total="$ 13.500" />
      <AdkCartBar :count="3" total="$ 13.500" secondary-label="Cancelar pedido" />
      <AdkPointsHint points="103" />
      <AdkPointsHint points="103" compact />
      <AdkPointsHint points="103" :identified="false" />
    </div>`,
  }),
}

/** Footers (19:602) — variante Home con carrito, a 1080 de ancho. */
export const Completo: Story = {
  name: 'Footer completo',
  render: () => ({
    components: { AdkFooter, AdkUserFooter, AdkCartBar, AdkButton, AdkQuantity, AdkPointsHint },
    setup: () => ({ q: ref(1), Accessibility }),
    template: `<div class="adk-ui w-[1080px] bg-background-subtle pt-48">
      <AdkFooter>
        <template #user><AdkUserFooter /></template>
        <AdkPointsHint points="103" compact />
        <div class="flex justify-end"><AdkQuantity v-model="q" label="Big Mac" /></div>
        <AdkCartBar :count="q" :total="'$ ' + (q * 4500).toLocaleString('es-AR')" />
        <div class="flex gap-16">
          <AdkButton variant="secondary" size="md" class="flex-1">Cancelar pedido</AdkButton>
          <AdkButton variant="secondary" size="md" class="flex-1" :icon="Accessibility">Accesibilidad</AdkButton>
        </div>
        <template #legal>Imágenes de carácter ilustrativo.</template>
      </AdkFooter>
    </div>`,
  }),
}
