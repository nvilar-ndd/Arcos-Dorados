import type { Meta, StoryObj } from '@storybook/vue3'
import { DbProgressBar, DbProgressCircle, DbSpinner, DbStepper } from '../src'

const meta = {
  title: 'Componentes/Progress (bar, circle, spinner, indicator)',
  component: DbProgressBar,
  parameters: { controls: { disable: false } },
  argTypes: { status: { control: 'inline-radio', options: ['active', 'success', 'error'] }, value: { control: { type: 'range', min: 0, max: 100 } } },
  args: { value: 50, label: 'Puede demorar unos minutos', helperText: 'Optional helper text', status: 'active' },
} satisfies Meta<typeof DbProgressBar>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbProgressBar }, setup: () => ({ args }), template: '<div class="max-w-[220px] p-300"><DbProgressBar v-bind="args" /></div>' }),
}

export const Barras: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbProgressBar },
    template: `<div class="db-ui flex max-w-[220px] flex-col gap-300 p-300">
      <DbProgressBar v-for="v in [0, 25, 50, 75]" :key="v" :value="v" label="Puede demorar unos minutos" helper-text="Optional helper text" />
      <DbProgressBar :value="100" status="success" label="Puede demorar unos minutos" helper-text="Optional helper text" />
      <DbProgressBar :value="100" status="error" label="Puede demorar unos minutos" helper-text="Optional helper text" />
    </div>`,
  }),
}

export const CirculoYSpinner: Story = {
  name: 'Progress circle y Spinner',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbProgressCircle, DbSpinner },
    template: `<div class="db-ui flex flex-col gap-400 p-300">
      <div class="flex gap-200"><DbProgressCircle v-for="v in [10, 25, 40, 60, 75, 90, 100]" :key="v" :value="v" /></div>
      <div class="flex items-center gap-400">
        <DbSpinner />
        <span class="inline-flex rounded-md bg-background-05 p-200"><DbSpinner color="white" /></span>
      </div>
    </div>`,
  }),
}

/** Progress indicator item: Incompleto · Current · Completed · Error · Disabled · Skeleton. */
export const Stepper: Story = {
  name: 'Progress indicator (stepper)',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbStepper },
    setup: () => ({
      all: [
        { label: 'Item Step', state: 'incomplete' }, { label: 'Item Step', state: 'current' }, { label: 'Item Step', state: 'completed' },
        { label: 'Item Step', state: 'error' }, { label: 'Item Step', state: 'disabled' }, { label: 'Item Step', state: 'skeleton' },
      ],
      flow: [
        { label: 'Descuento', state: 'completed' }, { label: 'Detalles generales', state: 'completed' }, { label: 'Disponibilidad', state: 'completed' },
        { label: 'Segmentación', state: 'current' }, { label: 'Contenido de apoyo', state: 'incomplete' },
      ],
    }),
    template: `<div class="db-ui flex flex-col gap-600 p-300">
      <DbStepper :steps="all" aria-label="Estados" />
      <DbStepper :steps="flow" aria-label="Alta de promoción" />
    </div>`,
  }),
}
