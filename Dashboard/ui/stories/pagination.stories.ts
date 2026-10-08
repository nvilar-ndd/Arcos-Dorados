import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbPagination } from '../src'

const meta = {
  title: 'Componentes/Pagination',
  component: DbPagination,
  parameters: { controls: { disable: false } },
  argTypes: { size: { control: 'inline-radio', options: ['default', 'small'] } },
  args: { total: 61, size: 'default' },
} satisfies Meta<typeof DbPagination>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { DbPagination },
    setup: () => ({ args, page: ref(1), size: ref(5) }),
    template: '<div class="p-300"><DbPagination v-bind="args" v-model:page="page" v-model:page-size="size" /><p class="db-label01 mt-200 text-text-secondary">Página {{ page }} · {{ size }} por página</p></div>',
  }),
}
