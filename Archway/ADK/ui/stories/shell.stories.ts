import type { Meta, StoryObj } from '@storybook/vue3'
import { AdkAttractScreen, AdkLogo } from '../src'
import KioskFrame from './KioskFrame.vue'
import { homeTemplate, shellComponents, shellSetup } from './screens'
import { placeholder } from './fixtures'

const meta = { title: 'Componentes/Attract, Logos y UI Shell', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Attract: Story = {
  name: 'Attract Screen',
  render: () => ({
    components: { AdkAttractScreen, KioskFrame },
    setup: () => ({ media: placeholder('Campaña', 1080, 1424) }),
    template: `<KioskFrame :scale="0.42" label="Tocá «Empezar a pedir»: la app navega al Home.">
      <AdkAttractScreen legal="2.000 calorías diarias es lo que se usa para consejos generales de nutrición.">
        <template #media><img :src="media" alt="" class="size-full object-cover" /></template>
      </AdkAttractScreen>
    </KioskFrame>`,
  }),
}

export const Logos: Story = {
  render: () => ({
    components: { AdkLogo },
    template: `<div class="adk-ui flex gap-24 p-24">
      <AdkLogo v-for="n in ['McDonald\\'s Red', 'Arcos Dorados', 'MiM', 'MeuM']" :key="n">
        <span class="adk-body-small flex size-full items-center justify-center rounded-s border border-dashed border-border-default text-center text-text-secondary">{{ n }}</span>
      </AdkLogo>
    </div>`,
  }),
}

export const Shell: Story = {
  name: 'UI Shell',
  render: () => ({ components: shellComponents, setup: shellSetup, template: homeTemplate() }),
}
