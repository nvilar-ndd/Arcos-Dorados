import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbButton, DbModal, DbTextField } from '../src'
import { placeholder } from './fixtures'

const meta = {
  title: 'Componentes/Modal',
  component: DbModal,
  parameters: { controls: { disable: false } },
  argTypes: { size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg', 'full'] } },
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    optionalLabel: 'Optional label',
    size: 'xs',
    primaryLabel: 'Label',
    secondaryLabel: 'Label',
    danger: false,
    divider: false,
  },
} satisfies Meta<typeof DbModal>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbModal, DbButton },
    setup: () => ({ args, open: ref(false) }),
    template: '<div class="p-300"><DbButton @click="open = true">Abrir modal</DbButton><DbModal v-bind="args" v-model:open="open" @confirm="open = false" /></div>',
  }),
}

/** Tamaños: xs 384 · sm 512 · md 672 · lg 896 (max-width = Tailwind / NuxtUI). */
export const Tamanios: Story = {
  name: 'Tamaños',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbModal, DbButton },
    setup: () => ({ open: ref<string | null>(null), sizes: ['xs', 'sm', 'md', 'lg'] as const }),
    template: `<div class="flex gap-200 p-300">
      <DbButton v-for="s in sizes" :key="s" variant="secondary" @click="open = s">{{ s }}</DbButton>
      <DbModal v-for="s in sizes" :key="'m' + s" :open="open === s" :size="s" :title="'Modal ' + s" description="El ancho máximo sale del token size/modal." primary-label="Aceptar" @update:open="open = null" @confirm="open = null" />
    </div>`,
  }),
}

/** Confirmación destructiva (alertdialog) y Custom con imagen / formulario. */
export const Casos: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbModal, DbButton, DbTextField },
    setup: () => ({ del: ref(false), custom: ref(false), img: placeholder('Imagen', 640, 480), name: ref('') }),
    template: `<div class="flex gap-200 p-300">
      <DbButton variant="danger" @click="del = true">Eliminar promoción</DbButton>
      <DbButton variant="secondary" @click="custom = true">Modal custom</DbButton>
      <DbModal v-model:open="del" danger title="¿Eliminar «Navidad 20% helados»?" description="La promoción se elimina de todos los restaurantes. Esta acción no se puede deshacer." primary-label="Eliminar promoción" secondary-label="Cancelar" @confirm="del = false" />
      <DbModal v-model:open="custom" size="sm" optional-label="Paso 1 de 2" title="Nueva marca de moneda" primary-label="Guardar" divider @confirm="custom = false">
        <img :src="img" alt="" class="aspect-[4/3] w-full rounded-sm object-cover" />
        <DbTextField v-model="name" label="Nombre" placeholder="Ej: Visa" />
      </DbModal>
    </div>`,
  }),
}
