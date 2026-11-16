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

/**
 * State=change-order (Figma 6872:5073): lista con orden de prioridad editable.
 * Columna "Orden", destino (Tag-operations + producto o URL) y vigencia sin fechas de creación.
 */
export const CambioDeOrden: Story = {
  name: 'Cambio de orden',
  render: () => ({
    components: { DbCardList },
    setup: () => {
      const items: DbCardListItem[] = [
        { name: 'Papas con chedar', order: 1, type: 'Por método de pago', subtype: 'Subtipo', destination: { kind: 'PLU', label: '1128 - Papas con chedar' }, dateRange: '03 oct 2026 – 21 oct 2026', status: 'activa' },
        { name: 'Navidad 20% helados', type: 'Por método de pago', subtype: 'Subtipo', destination: { kind: 'URL', label: 'https://www.mcdonalds.com.ar…' }, dateRange: '06 nov 2026 – 17 nov 2026', status: 'proxima' },
        { name: 'Tasty doble 15%', type: 'Por método de pago', subtype: 'Subtipo', destination: { kind: 'PLU', label: '228 - Tasty doble deluxe' }, dateRange: '12 oct 2026 – 29 oct 2026', status: 'inactiva' },
        { name: 'Día del amigo', type: 'Por método de pago', subtype: 'Subtipo', destination: { kind: 'URL', label: 'https://www.mcdonalds.com.ar…' }, dateRange: '04 sep 2026 – 22 sep 2026', status: 'expirada' },
        { name: 'Combo Stranger Things', type: 'Por método de pago', subtype: 'Subtipo', destination: { kind: 'PLU', label: '7721 - Double Stranger Burguer' }, dateRange: '06 nov 2026 – 18 nov 2026', status: 'borrador' },
      ]
      return { items, actions }
    },
    template: `<div class="db-ui flex flex-col gap-200 p-300">
      <DbCardList v-for="it in items" :key="it.name" :item="it" :actions="actions" state="change-order" />
    </div>`,
  }),
}
