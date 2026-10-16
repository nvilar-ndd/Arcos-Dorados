import type { Meta, StoryObj } from '@storybook/vue3'
import { Plus, Trash2 } from 'lucide-vue-next'
import { DbButton } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Button',
  component: DbButton,
  parameters: { controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'danger'] },
    disabled: { control: 'boolean' },
  },
  args: { variant: 'primary', disabled: false },
} satisfies Meta<typeof DbButton>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbButton }, setup: () => ({ args }), template: '<div class="p-300"><DbButton v-bind="args">Label</DbButton></div>' }),
}

/** Matriz de Figma: Style × State (hover, focus y pressed forzados). */
export const Estados: Story = {
  parameters: { ...pseudo, controls: { disable: true } },
  render: () => ({
    components: { DbButton },
    setup: () => ({
      states: [['enabled', ''], ['hovered', 'is-hover'], ['focused', 'is-focus'], ['pressed', 'is-active'], ['disabled', 'dis']],
      variants: ['primary', 'secondary', 'danger'],
    }),
    template: `<div class="db-ui grid grid-cols-[96px_repeat(3,128px)] items-center gap-200 p-300">
      <span /><span v-for="v in variants" :key="v" class="db-label01 text-text-secondary">{{ v === 'danger' ? 'eliminar' : v }}</span>
      <template v-for="[name, cls] in states" :key="name">
        <span class="db-label01 font-mono text-text-secondary">{{ name }}</span>
        <DbButton v-for="v in variants" :key="v" :variant="v" :class="['w-full', cls]" :disabled="cls === 'dis'">Label</DbButton>
      </template>
    </div>`,
  }),
}

export const ConIconos: Story = {
  name: 'Con íconos',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbButton },
    setup: () => ({ Plus, Trash2 }),
    template: `<div class="flex flex-wrap gap-200 p-300">
      <DbButton :icon-left="Plus">Agregar</DbButton>
      <DbButton variant="secondary">Cancelar</DbButton>
      <DbButton variant="danger" :icon-left="Trash2">Eliminar promoción</DbButton>
      <DbButton aria-disabled title="Tu rol no permite publicar">Publicar (sin permiso)</DbButton>
    </div>`,
  }),
}
