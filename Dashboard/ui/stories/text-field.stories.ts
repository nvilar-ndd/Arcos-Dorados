import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import { DbTextArea, DbTextField } from '../src'
import { pseudo } from './fixtures'

const meta = {
  title: 'Componentes/Text field y Text area',
  component: DbTextField,
  parameters: { controls: { disable: false } },
  argTypes: { status: { control: 'inline-radio', options: ['default', 'error', 'success'] } },
  args: { label: 'Label', placeholder: 'Input text', status: 'default', supportingText: '', clearable: true, disabled: false, iconLeft: Search },
} satisfies Meta<typeof DbTextField>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbTextField },
    setup: () => ({ args, value: ref('') }),
    template: '<div class="max-w-[321px] p-300"><DbTextField v-bind="args" v-model="value" /></div>',
  }),
}

/** Los 9 estados de TextField en Figma. */
export const Estados: Story = {
  parameters: { ...pseudo, controls: { disable: true } },
  render: () => ({
    components: { DbTextField },
    setup: () => ({ Search }),
    template: `<div class="db-ui grid max-w-[480px] grid-cols-[110px_1fr] items-start gap-x-200 gap-y-100 p-300">
      <span class="db-label01 pt-500 font-mono text-text-secondary">enabled</span><DbTextField label="Label" placeholder="Input text" :icon-left="Search" />
      <span class="db-label01 pt-500 font-mono text-text-secondary">hovered</span><DbTextField class="is-hover" label="Label" placeholder="Input text" :icon-left="Search" />
      <span class="db-label01 pt-500 font-mono text-text-secondary">complete</span><DbTextField label="Label" model-value="Papas con cheddar" clearable :icon-left="Search" />
      <span class="db-label01 pt-500 font-mono text-text-secondary">error</span><DbTextField label="Label" placeholder="Input text" status="error" supporting-text="Supporting text" :icon-left="Search" />
      <span class="db-label01 pt-500 font-mono text-text-secondary">success</span><DbTextField label="Label" model-value="1128" status="success" :icon-left="Search" />
      <span class="db-label01 pt-500 font-mono text-text-secondary">disabled</span><DbTextField label="Label" placeholder="Input text" disabled :icon-left="Search" />
    </div>`,
  }),
}

/** TextField_Dropdown: combobox con sugerencias. */
export const ConSugerencias: Story = {
  name: 'Con sugerencias (TextField_Dropdown)',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbTextField },
    setup: () => ({ Search, value: ref(''), options: ['New leads', 'High value', 'Inactive', 'Potential', 'Low Value', 'Medium Value', 'Lost'] }),
    template: '<div class="h-[340px] max-w-[352px] p-300"><DbTextField v-model="value" label="Segmentación de cliente" placeholder="Buscá o escribí un segmento" :icon-left="Search" :suggestions="options" /></div>',
  }),
}

export const TextArea: Story = {
  name: 'Text area',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbTextArea },
    setup: () => ({ a: ref(''), b: ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.') }),
    template: `<div class="grid max-w-[720px] grid-cols-1 gap-300 p-300 md:grid-cols-2">
      <DbTextArea v-model="a" label="Default" placeholder="Lorem ipsum dolor sit amet…" :maxlength="200" />
      <DbTextArea v-model="b" label="Error" status="error" supporting-text="Supporting text" :maxlength="200" />
      <DbTextArea v-model="b" label="Warning" status="warning" :maxlength="200" />
      <DbTextArea v-model="b" label="Disabled" disabled :maxlength="200" />
    </div>`,
  }),
}
