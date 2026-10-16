import type { Meta, StoryObj } from '@storybook/vue3'
import { CircleHelp } from 'lucide-vue-next'
import { DbButton, DbTooltip } from '../src'

const meta = {
  title: 'Componentes/Tooltip',
  component: DbTooltip,
  parameters: { controls: { disable: false } },
  argTypes: {
    position: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
    size: { control: 'inline-radio', options: ['small', 'big'] },
  },
  args: { text: 'Texto del tooltip', position: 'top', align: 'center', size: 'small' },
} satisfies Meta<typeof DbTooltip>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbTooltip, DbButton },
    setup: () => ({ args }),
    template: '<div class="flex justify-center p-1000"><DbTooltip v-bind="args"><DbButton variant="secondary">Pasá el mouse o enfocá</DbButton></DbTooltip></div>',
  }),
}

/** Position × alignment, Small (una línea) y Big (hasta cuatro). */
export const Variantes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbTooltip },
    setup: () => ({ CircleHelp }),
    template: `<div class="db-ui grid grid-cols-3 justify-items-start gap-y-1000 px-1000 py-800">
      <DbTooltip v-for="a in ['start','center','end']" :key="'t'+a" text="Small" position="top" :align="a" open><span class="db-label02 rounded-sm bg-layer-02 p-100">top / {{ a }}</span></DbTooltip>
      <DbTooltip v-for="a in ['start','center','end']" :key="'b'+a" text="Small" position="bottom" :align="a" open><span class="db-label02 rounded-sm bg-layer-02 p-100">bottom / {{ a }}</span></DbTooltip>
      <DbTooltip text="Left" position="left" open><span class="db-label02 rounded-sm bg-layer-02 p-100">left</span></DbTooltip>
      <DbTooltip text="Uso de cuatro líneas de texto: el tooltip Big admite hasta cuatro líneas antes de cortar." size="big" position="bottom" open><component :is="CircleHelp" class="size-300 text-icon-primary" role="img" aria-label="Ayuda" /></DbTooltip>
      <DbTooltip text="Right" position="right" open><span class="db-label02 rounded-sm bg-layer-02 p-100">right</span></DbTooltip>
    </div>`,
  }),
}
