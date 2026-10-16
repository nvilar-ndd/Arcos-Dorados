<script setup lang="ts">
/**
 * Calendar (agenda de reservas de Cumpleaños) — Figma: Components › Calendar
 *   Day (2840:5405) · Number Day (3016:6381) · Evento (2840:5452).
 * Celda 144 px de alto (flex), padding 16/8, gap 8. Máximo 2 eventos por día; luego "Ver N más".
 * Estados de reserva (Figma): PENDING amarillo · CONFIRMED verde · CANCELLED rojo · COMPLETED verde atenuado
 * (se ve disabled pero sigue siendo interactiva).
 */
import { computed } from 'vue'
import { Trash2 } from 'lucide-vue-next'
import { WEEKDAYS_LONG, longLabel, monthCells, toIso, type IsoDate } from '../utils/date'

export type DbBookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'
export interface DbBooking {
  id: string
  date: IsoDate
  name?: string
  time: string
  status: DbBookingStatus
  /** "Slot": sólo horario disponible. */
  kind?: 'booking' | 'slot'
}

const props = withDefaults(
  defineProps<{
    month: Date
    bookings: DbBooking[]
    today?: IsoDate
    blocked?: IsoDate[]
    maxPerDay?: number
    removable?: boolean
  }>(),
  { blocked: () => [], maxPerDay: 2, removable: false },
)
const emit = defineEmits<{ select: [booking: DbBooking]; more: [date: IsoDate]; remove: [booking: DbBooking] }>()

const todayIso = computed(() => props.today ?? toIso(new Date()))
const weeks = computed(() => {
  const cells = monthCells(props.month)
  const rows: Array<Array<IsoDate | null>> = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
  return rows
})
const byDay = computed(() => {
  const map = new Map<IsoDate, DbBooking[]>()
  for (const b of props.bookings) map.set(b.date, [...(map.get(b.date) ?? []), b])
  return map
})

const STATUS: Record<DbBookingStatus, { cls: string; text: string }> = {
  pending: { cls: 'bg-button-primary-disabled', text: 'Pendiente de pago' },
  confirmed: { cls: 'border border-support-success bg-tag-background-green', text: 'Activa' },
  cancelled: { cls: 'bg-[var(--db-color-tertiary-red-disabled)]', text: 'Cancelada' },
  // Figma la muestra "disabled", pero sigue siendo interactiva: se diferencia con borde punteado
  // en lugar de bajar la opacidad (que rompe el contraste del texto, WCAG 1.4.3).
  completed: { cls: 'border border-dashed border-support-success bg-tag-background-green', text: 'Finalizada' },
}

function dayLabel(d: IsoDate) {
  const n = byDay.value.get(d)?.length ?? 0
  return `${longLabel(d)}${n ? `, ${n} ${n === 1 ? 'reserva' : 'reservas'}` : ''}${props.blocked.includes(d) ? ', bloqueado' : ''}`
}
</script>

<template>
  <div class="db-ui w-full overflow-x-auto">
    <table class="w-full min-w-[966px] table-fixed border border-border-02">
      <thead>
        <tr>
          <th v-for="d in WEEKDAYS_LONG" :key="d" scope="col" class="db-label03 h-600 border border-border-02 bg-layer-01 text-center font-normal text-text-primary">
            {{ d }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, w) in weeks" :key="w">
          <td
            v-for="(d, i) in week"
            :key="i"
            :aria-label="d ? dayLabel(d) : undefined"
            :class="[
              'h-[144px] border border-border-02 align-top',
              d && d === todayIso && 'shadow-[inset_0_0_0_1px_var(--db-border-01)]',
              !d || blocked.includes(d) ? 'bg-layer-02' : 'bg-background-01',
            ]"
          >
            <div v-if="d" class="flex h-full flex-col gap-100 px-100 py-200">
              <span
                :class="[
                  'db-label03 inline-flex h-200 min-w-300 items-center justify-center self-start rounded-full px-50',
                  d === todayIso ? 'bg-layer-06 text-text-on-color' : d < todayIso ? 'text-text-secondary' : 'text-text-primary',
                ]"
                :aria-current="d === todayIso ? 'date' : undefined"
              >
                {{ Number(d.slice(8)) }}
              </span>
              <template v-for="b in (byDay.get(d) ?? []).slice(0, maxPerDay)" :key="b.id">
                <div
                  :class="[
                    'flex items-center gap-50 rounded-md px-100 py-50',
                    b.kind === 'slot' ? 'bg-tag-background-green' : STATUS[b.status].cls,
                  ]"
                >
                  <button
                    type="button"
                    class="db-focus flex min-w-0 flex-1 flex-col rounded-sm text-left"
                    :aria-label="`${b.name ?? 'Turno'} ${b.time}, ${b.kind === 'slot' ? 'disponible' : STATUS[b.status].text}`"
                    @click="emit('select', b)"
                  >
                    <span
                      v-if="b.kind !== 'slot'"
                      :class="['db-label03 truncate text-text-primary', b.status === 'cancelled' && 'line-through']"
                    >{{ b.name }}</span>
                    <span :class="['db-label01 truncate text-text-primary', b.status === 'cancelled' && 'line-through']">{{ b.time }}</span>
                  </button>
                  <button
                    v-if="removable"
                    type="button"
                    class="db-focus inline-flex size-200 shrink-0 items-center justify-center rounded-sm text-icon-primary"
                    :aria-label="`Eliminar ${b.name ?? 'turno'} ${b.time}`"
                    @click="emit('remove', b)"
                  >
                    <Trash2 class="size-200" aria-hidden="true" />
                  </button>
                </div>
              </template>
              <button
                v-if="(byDay.get(d)?.length ?? 0) > maxPerDay"
                type="button"
                class="db-focus db-label03 self-start rounded-md bg-layer-03 px-100 py-50 text-text-primary"
                @click="emit('more', d)"
              >
                Ver {{ (byDay.get(d)?.length ?? 0) - maxPerDay }} más
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
