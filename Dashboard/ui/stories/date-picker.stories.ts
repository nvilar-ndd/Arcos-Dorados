import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbDatePicker, type DbDateRange } from '../src'

const meta = {
  title: 'Componentes/Date picker',
  component: DbDatePicker,
  parameters: { controls: { disable: false } },
  argTypes: {
    mode: { control: 'inline-radio', options: ['single', 'range'] },
    presentation: { control: 'inline-radio', options: ['dropdown', 'modal'] },
    status: { control: 'inline-radio', options: ['default', 'error'] },
  },
  args: { mode: 'single', presentation: 'dropdown', label: 'Fecha de inicio', status: 'default', errorText: 'Error message', disabled: false, today: '2026-01-14' },
} satisfies Meta<typeof DbDatePicker>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbDatePicker },
    setup: () => ({ args, value: ref<string | null | DbDateRange>(null) }),
    template: '<div class="min-h-[560px] p-300"><DbDatePicker v-bind="args" v-model="value" /><p class="db-label01 mt-200 text-text-secondary">Valor: {{ value }}</p></div>',
  }),
}

/** Calendar picker: Enabled · Error · Disabled y con valor. */
export const Estados: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbDatePicker },
    template: `<div class="db-ui flex max-w-[352px] flex-col gap-200 p-300">
      <DbDatePicker label="Enabled" />
      <DbDatePicker label="Con valor" model-value="2026-01-14" />
      <DbDatePicker label="Error" status="error" error-text="Error message" />
      <DbDatePicker label="Disabled" disabled />
    </div>`,
  }),
}

/** Range calendar (dos meses) en dropdown y en modal. */
export const Rango: Story = {
  name: 'Range calendar',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbDatePicker },
    setup: () => ({ a: ref<DbDateRange>({ start: '2026-01-14', end: '2026-02-14' }), b: ref<DbDateRange>({ start: null, end: null }) }),
    template: `<div class="flex min-h-[560px] flex-wrap gap-800 p-300">
      <DbDatePicker v-model="a" mode="range" today="2026-01-14" start-label="Desde" end-label="Hasta" />
      <DbDatePicker v-model="b" mode="range" presentation="modal" today="2026-01-14" start-label="Desde (modal)" end-label="Hasta" />
    </div>`,
  }),
}
