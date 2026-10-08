import type { Meta, StoryObj } from '@storybook/vue3'
import { Pencil, Settings, Trash2, Copy } from 'lucide-vue-next'
import { DbIconButton, DbMenu } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/FAB (botón de ícono)',
  component: DbIconButton,
  parameters: { controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'avatar'] },
    size: { control: 'inline-radio', options: ['small', 'medium'] },
  },
  args: { label: 'Editar', variant: 'primary', size: 'small', icon: Pencil, initials: 'RA' },
} satisfies Meta<typeof DbIconButton>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbIconButton }, setup: () => ({ args }), template: '<div class="p-300"><DbIconButton v-bind="args" /></div>' }),
}

/** SmallFAB y MediumFAB: Primary · secondary · tipografía (avatar) × estados. */
export const Estados: Story = {
  parameters: { ...pseudo, controls: { disable: true } },
  render: () => ({
    components: { DbIconButton },
    setup: () => ({
      Pencil,
      states: [['enabled', ''], ['hovered', 'is-hover'], ['focused', 'is-focus'], ['pressed', 'is-active']],
    }),
    template: `<div class="db-ui flex gap-800 p-300">
      <div v-for="size in ['small', 'medium']" :key="size" class="grid grid-cols-[80px_repeat(3,56px)] items-center gap-200">
        <template v-for="[name, cls] in states" :key="name">
          <span class="db-label01 font-mono text-text-secondary">{{ name }}</span>
          <DbIconButton :class="cls" :size="size" :icon="Pencil" label="Editar" />
          <DbIconButton :class="cls" :size="size" :icon="Pencil" variant="secondary" label="Editar" />
          <DbIconButton v-if="size === 'small'" :class="cls" variant="avatar" initials="RA" label="Perfil" /><span v-else />
        </template>
      </div>
    </div>`,
  }),
}

/** FAB + DropDown-ListMenu (Menu Left/Right × Position Up/down). */
export const ConMenu: Story = {
  name: 'Con menú',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbMenu },
    setup: () => ({
      Settings,
      items: [
        { value: 'edit', label: 'Editar', icon: Pencil },
        { value: 'duplicate', label: 'Duplicar', icon: Copy },
        { value: 'archive', label: 'Archivar' },
        { value: 'disabled', label: 'Publicar', disabled: true },
        { value: 'delete', label: 'Eliminar', icon: Trash2, danger: true },
      ],
    }),
    template: `<div class="flex h-[360px] justify-between p-300">
      <DbMenu :items="items" variant="avatar" initials="RA" label="Perfil" />
      <DbMenu :items="items" :icon="Settings" label="Configuración" align="right" />
    </div>`,
  }),
}
