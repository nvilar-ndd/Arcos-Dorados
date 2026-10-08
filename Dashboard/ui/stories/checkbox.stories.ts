import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, ref } from 'vue'
import { DbCheckbox } from '../src'

const meta = {
  title: 'Componentes/Checkbox',
  component: DbCheckbox,
  parameters: { controls: { disable: false } },
  args: { label: 'Checkbox label', framed: false, disabled: false, indeterminate: false, supportingText: '' },
} satisfies Meta<typeof DbCheckbox>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbCheckbox }, setup: () => ({ args, v: ref(false) }), template: '<div class="p-300"><DbCheckbox v-bind="args" v-model="v" /></div>' }),
}

/** State (Default · complete · Disabled) × Style (fill / unfilled). */
export const Estados: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbCheckbox },
    template: `<div class="db-ui grid grid-cols-2 gap-200 p-300" style="max-width:420px">
      <DbCheckbox label="Checkbox label" framed /><DbCheckbox label="Checkbox label" />
      <DbCheckbox label="Checkbox label" framed :model-value="true" /><DbCheckbox label="Checkbox label" :model-value="true" />
      <DbCheckbox label="Checkbox label" framed disabled :model-value="true" /><DbCheckbox label="Checkbox label" disabled />
      <DbCheckbox label="Seleccionar todos" indeterminate /><DbCheckbox label="Con ayuda" supporting-text="Texto de soporte" />
    </div>`,
  }),
}

/** Grupo con "seleccionar todos" (estado indeterminado, agregado). */
export const SeleccionarTodos: Story = {
  name: 'Seleccionar todos',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbCheckbox },
    setup: () => {
      const items = ref([{ id: 'bel', label: 'Bel', on: true }, { id: 'sca', label: 'Scalabrini', on: false }, { id: 'oli', label: 'Oli', on: false }])
      const all = computed({
        get: () => items.value.every((i) => i.on),
        set: (v: boolean) => items.value.forEach((i) => (i.on = v)),
      })
      const some = computed(() => items.value.some((i) => i.on) && !all.value)
      return { items, all, some }
    },
    template: `<fieldset class="db-ui flex flex-col gap-50 p-300">
      <legend class="db-label02 text-text-primary">Restaurantes</legend>
      <DbCheckbox v-model="all" :indeterminate="some" label="Listado de restaurantes" />
      <div class="flex flex-col pl-300"><DbCheckbox v-for="i in items" :key="i.id" v-model="i.on" :label="i.label" /></div>
    </fieldset>`,
  }),
}
