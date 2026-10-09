import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { AdkCategoryNavButton, AdkNavButton, AdkNavMenu, AdkProgressSteps, type AdkStep } from '../src'
import { categories, placeholder, sections } from './fixtures'
import { House } from 'lucide-vue-next'

const meta = { title: 'Componentes/Navegación', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  name: 'Nav.menu',
  render: () => ({
    components: { AdkNavMenu },
    setup: () => ({ sections, a: ref('home'), b: ref('loyalty'), c: ref('home'), d: ref('coupons') }),
    template: `<div class="adk-ui grid grid-cols-[repeat(2,248px)] items-start gap-48 bg-background-subtle p-24">
      <AdkNavMenu v-model:current="a" :items="sections" user-name="Ronald" points="300 pts." />
      <AdkNavMenu v-model:current="b" :items="sections" user-name="Ronald" points="300 pts." compact />
      <AdkNavMenu v-model:current="c" :items="sections" />
      <AdkNavMenu v-model:current="d" :items="sections" compact />
    </div>`,
  }),
}

export const Botones: Story = {
  name: 'Nav.menu-button y category-button',
  render: () => ({
    components: { AdkNavButton, AdkCategoryNavButton },
    setup: () => ({ House, categories, cat: ref('Hamburguesas'), img: placeholder('', 64, 64) }),
    template: `<div class="adk-ui flex items-start gap-48 bg-background-subtle p-24">
      <div class="flex w-nav flex-col gap-8">
        <AdkNavButton label="Nombre página" :icon="House" />
        <AdkNavButton label="Nombre página" :icon="House" selected />
        <div class="flex gap-8"><AdkNavButton label="Home" :icon="House" compact /><AdkNavButton label="Home" :icon="House" compact selected /></div>
      </div>
      <nav aria-label="Categorías" class="w-nav">
        <ul class="flex flex-col gap-8">
          <li v-for="c in categories" :key="c"><AdkCategoryNavButton :label="c" :image="img" :selected="c === cat" @click="cat = c" /></li>
        </ul>
      </nav>
    </div>`,
  }),
}

export const Pasos: Story = {
  name: 'Progress Bar (pasos)',
  render: () => ({
    components: { AdkProgressSteps },
    setup: () => ({
      steps: [
        { label: 'Hamburguesa', state: 'complete' },
        { label: 'Acompañamiento', state: 'current' },
        { label: 'Bebida', state: 'incomplete' },
        { label: 'Postre', state: 'incomplete' },
      ] satisfies AdkStep[],
    }),
    template: '<div class="adk-ui bg-background-subtle p-24"><AdkProgressSteps :steps="steps" label="Armado del McCombo" /></div>',
  }),
}
