import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbSelectableCard } from '../src'
import { placeholder } from './fixtures'

const many = [1, 2, 3].map((n) => ({ src: placeholder(`${n}`, 854, 560), alt: `Foto ${n}` }))
const one = [{ src: placeholder('', 854, 560), alt: 'Foto' }]

const meta = {
  title: 'Componentes/Selectable Card',
  component: DbSelectableCard,
  parameters: { controls: { disable: false } },
  argTypes: { type: { control: 'inline-radio', options: ['multi', 'single'] } },
  args: { label: 'Opción 1', images: many, type: 'multi', disabled: false },
} satisfies Meta<typeof DbSelectableCard>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbSelectableCard }, setup: () => ({ args, v: ref(false) }), template: '<div class="p-300"><DbSelectableCard v-bind="args" v-model="v" /></div>' }),
}

/** Multiselect (checkbox) y Single select (radio), con carrusel e imagen simple. */
export const Listas: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbSelectableCard },
    setup: () => ({ many, one, multi: ref([true, false, false]), single: ref('b') }),
    template: `<div class="db-ui flex flex-col gap-600 p-300">
      <fieldset class="flex flex-col gap-200"><legend class="db-label02 mb-200 text-text-primary">Multiselect</legend>
        <div class="grid grid-cols-1 gap-300 md:grid-cols-3">
          <DbSelectableCard v-model="multi[0]" label="Opción 1" :images="many" />
          <DbSelectableCard v-model="multi[1]" label="Opción 2" :images="one" />
          <DbSelectableCard v-model="multi[2]" label="Opción 3" :images="many" />
        </div>
      </fieldset>
      <fieldset class="flex flex-col gap-200"><legend class="db-label02 mb-200 text-text-primary">Single select</legend>
        <div class="grid grid-cols-1 gap-300 md:grid-cols-3">
          <DbSelectableCard v-for="o in ['a', 'b', 'c']" :key="o" type="single" name="single" :value="o" :label="'Opción ' + o.toUpperCase()" :images="o === 'b' ? one : many"
            :model-value="single === o" @update:model-value="$event && (single = o)" />
        </div>
      </fieldset>
    </div>`,
  }),
}
