import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Archive, Copy, Pencil, Trash2 } from 'lucide-vue-next'
import { DbCardList, type DbCardListItem, type DbEntityStatus } from '../src'

const statuses: DbEntityStatus[] = ['proxima', 'activa', 'inactiva', 'expirada', 'borrador', 'cargando', 'pendiente', 'archivada']
const base: Omit<DbCardListItem, 'status'> = {
  name: 'PROMOBIRTHDAYPA',
  code: 'PROMOFIRSTOA',
  type: 'Por método de pago',
  subtype: 'Subtipo',
  dateRange: '03 de ene 2022 - 27 de oct 2025',
  created: '1 ene 2022',
  modified: '11 ene 2022',
}
const actions = [
  { value: 'edit', label: 'Editar', icon: Pencil },
  { value: 'duplicate', label: 'Duplicar', icon: Copy },
  { value: 'archive', label: 'Archivar', icon: Archive },
  { value: 'delete', label: 'Eliminar', icon: Trash2, danger: true },
]

const meta = {
  title: 'Componentes/Card List (lista de gestión)',
  component: DbCardList,
  parameters: { controls: { disable: true } },
  args: { item: { ...base, status: 'activa' } },
} satisfies Meta<typeof DbCardList>
export default meta
type Story = StoryObj<typeof meta>

/** Los 8 estados de Card_list (promociones). */
export const Estados: Story = {
  render: () => ({
    components: { DbCardList },
    setup: () => ({ items: statuses.map((s) => ({ ...base, status: s })), actions, last: ref('') }),
    template: `<div class="db-ui flex flex-col gap-200 p-300">
      <DbCardList v-for="it in items" :key="it.status" :item="it" :actions="actions" @action="last = it.status + ' → ' + $event" />
      <p class="db-label01 text-text-secondary" aria-live="polite">{{ last && 'Acción: ' + last }}</p>
    </div>`,
  }),
}
