import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbSubPanel } from '../src'
import { countryNav } from './fixtures'

const meta = {
  title: 'Estructura/SubPanelLeft (navegación secundaria de Country)',
  component: DbSubPanel,
  parameters: { controls: { disable: true } },
  args: { items: countryNav, ariaLabel: 'Configuración de Argentina' },
} satisfies Meta<typeof DbSubPanel>
export default meta
type Story = StoryObj<typeof meta>

/** stile Default (272) y Close (48 × 64 con SmallFAB para reabrir). */
export const DefaultYClose: Story = {
  name: 'Default y Close',
  render: () => ({
    components: { DbSubPanel },
    setup: () => ({ countryNav, a: ref<string | null>('c-promotions'), open: ref(true), closed: ref(false) }),
    template: `<div class="flex h-[760px] gap-800">
      <DbSubPanel v-model:current="a" v-model:open="open" :items="countryNav" aria-label="Configuración de Argentina" />
      <DbSubPanel v-model:current="a" v-model:open="closed" :items="countryNav" aria-label="Configuración de Chile" />
    </div>`,
  }),
}
