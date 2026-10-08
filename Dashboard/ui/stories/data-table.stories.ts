import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, ref } from 'vue'
import { Copy, EllipsisVertical, Eye } from 'lucide-vue-next'
import { DbDataTable, DbIconButton, DbPagination, DbTag, type DbSort } from '../src'

interface Log { id: string; method: string; url: string; type: string; service: string; status: number; time: number; created: string }
const methods = ['Post', 'Get', 'Get', 'Post', 'Delete']
const logs: Log[] = Array.from({ length: 23 }, (_, i) => ({
  id: String(i + 1),
  method: methods[i % 5] ?? 'Get',
  url: `http://api-mcd-ecommerce-br.qappmcdonalds.com/catalog/recommended?area=DLV&restaurant=${61 + i}`,
  type: i % 3 ? 'OUT' : 'IN',
  service: ['importis', 'api', 'mgt'][i % 3] ?? 'api',
  status: i % 4 === 1 ? 400 : 200,
  time: 5 + ((i * 37) % 1400),
  created: `2025-01-${String(20 - (i % 9)).padStart(2, '0')}`,
}))

const meta = {
  title: 'Componentes/Data table — Read-only',
  // Componente genérico: Storybook no infiere sus props, los controles salen de `args`.
  parameters: { controls: { disable: true } },
  args: { columns: [], rows: [], caption: 'Logs' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

/** Ejemplo de uso de Figma: logs de integraciones, con orden y paginación. */
export const Logs: Story = {
  render: () => ({
    components: { DbDataTable, DbPagination, DbTag, DbIconButton },
    setup: () => {
      const sort = ref<DbSort | null>({ key: 'created', direction: 'desc' })
      const page = ref(1)
      const size = ref(5)
      const sorted = computed(() => {
        const s = sort.value
        if (!s) return logs
        return [...logs].sort((a, b) => {
          const x = a[s.key as keyof Log]
          const y = b[s.key as keyof Log]
          return (x < y ? -1 : x > y ? 1 : 0) * (s.direction === 'asc' ? 1 : -1)
        })
      })
      const rows = computed(() => sorted.value.slice((page.value - 1) * size.value, page.value * size.value))
      return {
        sort, page, size, rows, total: logs.length, Copy, Eye, EllipsisVertical,
        columns: [
          { key: 'method', label: 'Method', sticky: true },
          { key: 'url', label: 'Url', width: '280px' },
          { key: 'type', label: 'Type' },
          { key: 'service', label: 'Service' },
          { key: 'status', label: 'Status code', sortable: true },
          { key: 'time', label: 'Excution time', sortable: true, align: 'right' },
          { key: 'created', label: 'Created at', sortable: true },
          { key: 'id', label: 'Acciones', align: 'center' },
        ],
      }
    },
    template: `<div class="p-300"><DbDataTable v-model:sort="sort" :columns="columns" :rows="rows" row-key="id" caption="Logs de integraciones">
      <template #cell-method="{ value }"><DbTag :label="String(value)" :tone="value === 'Get' ? 'info' : value === 'Delete' ? 'danger' : 'success'" /></template>
      <template #cell-url="{ value }"><span class="block max-w-[280px] break-all">{{ value }}</span></template>
      <template #cell-type="{ value }"><DbTag :label="String(value)" tone="success" /></template>
      <template #cell-service="{ value }"><DbTag :label="String(value)" tone="success" /></template>
      <template #cell-status="{ value }"><DbTag :label="String(value)" :tone="value === 200 ? 'success' : 'info'" /></template>
      <template #cell-time="{ value }"><span :class="Number(value) > 1000 ? 'text-text-error' : ''">{{ Number(value) > 1000 ? (Number(value) / 1000).toFixed(1) + 's' : value + 'ms' }}</span></template>
      <template #cell-id="{ row }"><DbIconButton :icon="EllipsisVertical" variant="secondary" :label="'Acciones del log ' + row.id" /></template>
      <template #footer><DbPagination v-model:page="page" v-model:page-size="size" :total="total" /></template>
    </DbDataTable></div>`,
  }),
}
