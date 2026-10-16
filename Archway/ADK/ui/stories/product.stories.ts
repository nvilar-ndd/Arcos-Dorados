import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { AdkBadge, AdkCartItem, AdkLoyaltyPill, AdkProductCard, AdkProductCustomRow, AdkSizeSelector, type AdkBadgeType } from '../src'
import { placeholder, sizes } from './fixtures'

const meta = { title: 'Componentes/Product', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Cards: Story = {
  name: 'Product card',
  render: () => ({
    components: { AdkProductCard },
    setup: () => ({ img: placeholder(), sel: ref(true) }),
    template: `<div class="adk-ui grid grid-cols-[repeat(3,208px)] gap-24 bg-background-subtle p-24">
      <AdkProductCard name="Producto" price="₡ 6.950,00" :image="img" badge="new" />
      <AdkProductCard name="Producto" price="₡ 6.950,00" :image="img" unavailable />
      <AdkProductCard name="Producto" price="₡ 6.950,00" :image="img" :selected="sel" @select="sel = !sel" />
      <AdkProductCard name="Producto" price="₡ 6.950,00" :image="img" points="3.000 pts" />
      <AdkProductCard name="Producto" price="₡ 6.950,00" :image="img" points="3.000 pts" :points-available="false" />
      <AdkProductCard name="Papas Medianas" price="₡ 1.950,00" :image="img" upsell="+ ₡ 500,00" />
    </div>`,
  }),
}

export const Badges: Story = {
  render: () => ({
    components: { AdkBadge, AdkLoyaltyPill },
    setup: () => ({ types: ['new', 'recommended', 'best-seller', 'off', 'last-days', 'combo-of-day', 'unavailable'] satisfies AdkBadgeType[] }),
    template: `<div class="adk-ui flex flex-col items-start gap-16 p-24">
      <AdkBadge v-for="t in types" :key="t" :type="t" :label="t === 'off' ? '15% OFF' : undefined" />
      <AdkLoyaltyPill points="3.000 pts" />
      <AdkLoyaltyPill points="3.000 pts" :available="false" />
    </div>`,
  }),
}

export const Carrito: Story = {
  name: 'Producto Carrito',
  render: () => ({
    components: { AdkCartItem },
    setup: () => ({
      img: placeholder('', 152, 152),
      q1: ref(1), q2: ref(2), q3: ref(1),
      parts: [
        { name: 'BigMac®', note: 'Extra: 1 Queso cheddar', image: placeholder('', 200, 200) },
        { name: 'Papas Fritas Grandes', note: 'Sal', removed: true, image: placeholder('', 200, 200) },
        { name: 'Coca-Cola Sin Azúcar', note: 'Hielo', removed: true, image: placeholder('', 200, 200) },
      ],
    }),
    template: `<div class="adk-ui flex w-[936px] flex-col gap-32 p-24">
      <AdkCartItem v-model:quantity="q1" name="McCombo BigMac® Grande" description="Papas Fritas Grandes, Coca-Cola Sin Azúcar" price="₡ 10.220,00" :image="img" :parts="parts" />
      <AdkCartItem v-model:quantity="q2" name="McCombo BigMac® Grande" price="₡ 10.220,00" :image="img" />
      <AdkCartItem v-model:quantity="q3" name="McCombo BigMac® Grande" price="₡ 10.220,00" :image="img" unavailable />
    </div>`,
  }),
}

export const Personalizar: Story = {
  name: 'Product Custom',
  render: () => ({
    components: { AdkProductCustomRow },
    setup: () => ({ img: placeholder('', 80, 60), a: ref(0), b: ref(2), c: ref(true) }),
    template: `<div class="adk-ui flex w-[936px] flex-col gap-16 bg-background-subtle p-24">
      <AdkProductCustomRow v-model:quantity="a" name="Queso cheddar" :image="img" extra-price="₡ 220,00" />
      <AdkProductCustomRow v-model:quantity="b" name="Tocino" :image="img" extra-price="₡ 440,00" />
      <AdkProductCustomRow v-model:checked="c" name="Lechuga" :image="img" control="check" />
    </div>`,
  }),
}

export const Tamano: Story = {
  name: 'Product Size',
  render: () => ({
    components: { AdkSizeSelector },
    setup: () => ({ sizes, v: ref('g') }),
    template: '<div class="adk-ui bg-background-subtle p-24"><AdkSizeSelector v-model="v" :options="sizes" label="Tamaño de las papas" /></div>',
  }),
}
