<script setup lang="ts" generic="R extends Record<string, unknown>">
/**
 * Data table — Read-only. Figma: Components › Data table (671:25687)
 *   header cell (635:3426, 64 px, `Label03`) · row cell (636:4116, 48 px, padding 8/16, `Label01`).
 * Para visualizar, monitorear o auditar: las filas no cambian de estado (si sí: DbCardList).
 * Celdas personalizadas con el slot `cell-<key>`; orden con `sortable` + v-model:sort.
 */
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-vue-next'

export interface DbColumn<K extends string = string> {
  key: K
  label: string
  sortable?: boolean
  align?: 'left' | 'right' | 'center'
  /** Ancho CSS de la columna (p. ej. '160px'). */
  width?: string
  /** Primera columna fija al hacer scroll horizontal. */
  sticky?: boolean
}
export interface DbSort { key: string; direction: 'asc' | 'desc' }

const sort = defineModel<DbSort | null>('sort', { default: null })

withDefaults(
  defineProps<{
    columns: DbColumn<Extract<keyof R, string>>[]
    rows: R[]
    /** Título accesible de la tabla. */
    caption: string
    rowKey?: Extract<keyof R, string>
    emptyText?: string
  }>(),
  { emptyText: 'No hay datos para mostrar.' },
)

function toggleSort(key: string) {
  if (!sort.value || sort.value.key !== key) sort.value = { key, direction: 'asc' }
  else sort.value = { key, direction: sort.value.direction === 'asc' ? 'desc' : 'asc' }
}
function ariaSort(key: string): 'ascending' | 'descending' | 'none' {
  if (sort.value?.key !== key) return 'none'
  return sort.value.direction === 'asc' ? 'ascending' : 'descending'
}
const ALIGN = { left: 'text-left justify-start', right: 'text-right justify-end', center: 'text-center justify-center' } as const
</script>

<template>
  <div class="db-ui flex w-full flex-col rounded-md border border-border-02 bg-layer-01">
    <div class="db-focus w-full overflow-x-auto" tabindex="0" role="region" :aria-label="caption">
      <table class="w-full min-w-max">
        <caption class="db-sr-only">{{ caption }}</caption>
        <thead>
          <tr>
            <th
              v-for="(col, i) in columns"
              :key="col.key"
              scope="col"
              :aria-sort="col.sortable ? ariaSort(col.key) : undefined"
              :style="col.width ? { width: col.width } : undefined"
              :class="[
                'db-label03 h-800 bg-layer-01 p-200 font-normal text-text-primary',
                ALIGN[col.align ?? 'left'],
                col.sticky && i === 0 && 'sticky left-0 z-[1]',
              ]"
            >
              <button
                v-if="col.sortable"
                type="button"
                :class="['db-focus inline-flex items-center gap-100 rounded-sm', ALIGN[col.align ?? 'left']]"
                @click="toggleSort(col.key)"
              >
                {{ col.label }}
                <ArrowUp v-if="sort?.key === col.key && sort.direction === 'asc'" class="size-200 text-icon-primary" aria-hidden="true" />
                <ArrowDown v-else-if="sort?.key === col.key" class="size-200 text-icon-primary" aria-hidden="true" />
                <ArrowUpDown v-else class="size-200 text-icon-secondary" aria-hidden="true" />
              </button>
              <template v-else>{{ col.label }}</template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!rows.length">
            <td :colspan="columns.length" class="db-label02 p-400 text-center text-text-secondary">{{ emptyText }}</td>
          </tr>
          <tr v-for="(row, r) in rows" :key="rowKey ? String(row[rowKey]) : r" class="border-t border-border-02">
            <td
              v-for="(col, i) in columns"
              :key="col.key"
              :class="[
                'db-label01 min-h-600 bg-layer-01 px-200 py-100 align-middle text-text-primary',
                ALIGN[col.align ?? 'left'],
                col.sticky && i === 0 && 'sticky left-0 z-[1]',
              ]"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">{{ row[col.key] }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="$slots.footer" class="flex justify-end border-t border-border-02 px-200 py-100">
      <slot name="footer" />
    </div>
  </div>
</template>
