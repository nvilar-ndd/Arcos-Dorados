import type { Meta, StoryObj } from '@storybook/vue3'
import { AdkHeader, AdkLogo } from '../src'

const meta = { title: 'Componentes/Header', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const logo = `<AdkLogo><span class="adk-body-small flex size-full items-center justify-center rounded-s border border-dashed border-border-default text-text-secondary">Logo 152 × 112</span></AdkLogo>`

export const Variantes: Story = {
  render: () => ({
    components: { AdkHeader, AdkLogo },
    template: `<div class="adk-ui flex w-[1080px] flex-col gap-32 bg-background-subtle p-24">
      <AdkHeader title="Hamburguesas"><template #logo>${logo}</template></AdkHeader>
      <AdkHeader title="Elegí tu bebida" type="step"><template #logo>${logo}</template></AdkHeader>
      <AdkHeader><template #logo>${logo}</template></AdkHeader>
      <AdkHeader logo-position="center"><template #logo>${logo}</template></AdkHeader>
    </div>`,
  }),
}
