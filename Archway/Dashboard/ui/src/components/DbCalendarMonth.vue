<script setup lang="ts">
/**
 * Grilla de un mes para DbDatePicker — Figma: celda `Date` (2379:4817).
 * Celda 48 × 48. Type: Default · Today · Selected · Null. Range: Start · End · Middle (+ inicio/fin de semana).
 * Patrón ARIA "grid": flechas (día/semana), Home/End (semana), PageUp/PageDown (mes) los maneja el padre.
 */
import { computed } from 'vue'
import { WEEKDAYS_LONG, WEEKDAYS_SHORT, longLabel, monthCells, monthTitle, type IsoDate } from '../utils/date'

const props = defineProps<{
  month: Date
  start: IsoDate | null
  end: IsoDate | null
  /** Día con foco "roving" (tabindex 0). */
  focused: IsoDate
  today: IsoDate
  min?: IsoDate
  max?: IsoDate
  /** Vista previa del rango mientras se elige el fin. */
  hover?: IsoDate | null
}>()

const emit = defineEmits<{
  select: [date: IsoDate]
  hover: [date: IsoDate | null]
  keydown: [event: KeyboardEvent, date: IsoDate]
}>()

const cells = computed(() => monthCells(props.month))
const weeks = computed(() => {
  const rows: Array<Array<IsoDate | null>> = []
  for (let i = 0; i < cells.value.length; i += 7) rows.push(cells.value.slice(i, i + 7))
  return rows
})
const title = computed(() => monthTitle(props.month))

const rangeEnd = computed(() => props.end ?? (props.start && props.hover && props.hover > props.start ? props.hover : null))

function isDisabled(d: IsoDate) {
  return (props.min !== undefined && d < props.min) || (props.max !== undefined && d > props.max)
}
function isSelected(d: IsoDate) {
  return d === props.start || d === rangeEnd.value
}
function inRange(d: IsoDate) {
  return !!props.start && !!rangeEnd.value && d > props.start && d < rangeEnd.value
}

function stripe(d: IsoDate): string {
  if (!props.start || !rangeEnd.value || props.start === rangeEnd.value) return ''
  if (d === props.start) return 'left-1/2 right-0'
  if (d === rangeEnd.value) return 'left-0 right-1/2'
  if (inRange(d)) return 'inset-x-0'
  return ''
}
</script>

<template>
  <div class="flex flex-col gap-100">
    <p class="db-body01 py-100 text-center text-text-primary" aria-live="polite">{{ title }}</p>
    <table role="grid" :aria-label="title" class="border-collapse">
      <thead>
        <tr>
          <th v-for="(day, i) in WEEKDAYS_SHORT" :key="day" scope="col" class="db-label02 h-500 w-600 p-0 font-normal text-text-primary">
            <abbr :title="WEEKDAYS_LONG[i]" class="no-underline">{{ day }}</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, w) in weeks" :key="w">
          <td v-for="(d, i) in week" :key="i" class="p-0" :role="d ? 'gridcell' : undefined" :aria-selected="d ? isSelected(d) : undefined">
            <button
              v-if="d"
              type="button"
              :tabindex="d === focused ? 0 : -1"
              :data-date="d"
              :disabled="isDisabled(d)"
              :aria-label="longLabel(d)"
              :aria-current="d === today ? 'date' : undefined"
              class="db-focus group relative flex size-600 items-center justify-center rounded-full disabled:cursor-not-allowed"
              @click="emit('select', d)"
              @mouseenter="emit('hover', d)"
              @mouseleave="emit('hover', null)"
              @keydown="emit('keydown', $event, d)"
            >
              <span v-if="stripe(d)" :class="['absolute inset-y-50 bg-layer-08', stripe(d)]" aria-hidden="true" />
              <span
                :class="[
                  'absolute inset-50 rounded-full border',
                  isSelected(d)
                    ? 'border-transparent bg-button-primary-enabled'
                    : d === today
                      ? 'border-transparent bg-layer-02 group-hover:border-border-01'
                      : 'border-transparent group-hover:border-background-05',
                  isDisabled(d) && 'group-hover:border-transparent',
                ]"
                aria-hidden="true"
              />
              <span :class="['db-body01 relative', isDisabled(d) ? 'text-text-disabled' : 'text-text-primary']">
                {{ Number(d.slice(8)) }}
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
