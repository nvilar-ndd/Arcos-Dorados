<script setup lang="ts">
/**
 * Date picker — Figma: Components › DatePicker
 *   Calendar picker (2365:22263) · Range calendar (2370:17663) · Date (2379:4817).
 * Campo 352 × 40 (`layer/02`) que acepta tipeo dd/mm/aaaa + calendario desplegable
 * (Dropdown Calendar) o en modal (Modal Calendar). La selección se confirma con "Guardar".
 * Docs: Dashboard/components/date-picker.md
 */
import { computed, nextTick, ref, useId, watch } from 'vue'
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import DbButton from './DbButton.vue'
import DbCalendarMonth from './DbCalendarMonth.vue'
import DbStatusIcon from './DbStatusIcon.vue'
import { useDismiss } from '../composables/useDismiss'
import {
  addDays, addMonths, diffDays, formatDisplay, fromIso, parseDisplay, startOfMonth, toIso, weekdayIndex, type IsoDate,
} from '../utils/date'

export interface DbDateRange { start: IsoDate | null; end: IsoDate | null }

/** `single`: IsoDate | null · `range`: { start, end } */
const model = defineModel<IsoDate | null | DbDateRange>({ default: null })

const props = withDefaults(
  defineProps<{
    mode?: 'single' | 'range'
    label?: string
    /** Labels de los dos campos del rango. */
    startLabel?: string
    endLabel?: string
    presentation?: 'dropdown' | 'modal'
    status?: 'default' | 'error'
    errorText?: string
    disabled?: boolean
    min?: IsoDate
    max?: IsoDate
    /** Para stories/tests: fecha de "hoy". */
    today?: IsoDate
  }>(),
  {
    mode: 'single', label: 'Fecha', startLabel: 'Desde', endLabel: 'Hasta', presentation: 'dropdown',
    status: 'default', disabled: false,
  },
)

const id = useId()
const panelId = `${id}-panel`
const todayIso = computed(() => props.today ?? toIso(new Date()))

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const panel = ref<HTMLElement | null>(null)
const draftStart = ref<IsoDate | null>(null)
const draftEnd = ref<IsoDate | null>(null)
const hoverDate = ref<IsoDate | null>(null)
const focused = ref<IsoDate>(todayIso.value)
const viewMonth = ref<Date>(startOfMonth(new Date()))

const current = computed<DbDateRange>(() => {
  const v = model.value
  if (props.mode === 'range') return (v && typeof v === 'object' ? v : { start: null, end: null }) as DbDateRange
  return { start: typeof v === 'string' ? v : null, end: null }
})

const textStart = ref('')
const textEnd = ref('')
watch(current, (c) => { textStart.value = formatDisplay(c.start); textEnd.value = formatDisplay(c.end) }, { immediate: true })

const fields = computed(() => (props.mode === 'range' ? (['start', 'end'] as const) : (['start'] as const)))

function setText(which: 'start' | 'end', value: string) {
  if (which === 'start') textStart.value = value
  else textEnd.value = value
}

const months = computed(() => (props.mode === 'range' ? [viewMonth.value, addMonths(viewMonth.value, 1)] : [viewMonth.value]))

const periodText = computed(() => {
  if (props.mode !== 'range') return ''
  return draftStart.value && draftEnd.value ? `Periodo de fechas: ${diffDays(draftStart.value, draftEnd.value) + 1} días` : rangeHelp.value
})

const rangeHelp = computed(() => {
  if (!draftStart.value) return 'Seleccioná una fecha de inicio'
  if (!draftEnd.value) return 'Seleccioná una fecha de fin'
  return `Periodo de fechas: ${diffDays(draftStart.value, draftEnd.value) + 1} días`
})

useDismiss(open, [root, panel], (reason) => close(reason === 'escape'))

async function openPanel() {
  if (props.disabled) return
  draftStart.value = current.value.start
  draftEnd.value = current.value.end
  focused.value = current.value.start ?? todayIso.value
  viewMonth.value = startOfMonth(fromIso(focused.value))
  open.value = true
  await nextTick()
  focusDay(focused.value)
}

function close(returnFocus = true) {
  open.value = false
  if (returnFocus) root.value?.querySelector<HTMLButtonElement>('[data-trigger]')?.focus()
}

function focusDay(iso: IsoDate) {
  panel.value?.querySelector<HTMLButtonElement>(`[data-date="${iso}"]`)?.focus()
}

function select(d: IsoDate) {
  focused.value = d
  if (props.mode === 'single') { draftStart.value = d; return }
  if (!draftStart.value || draftEnd.value || d < draftStart.value) { draftStart.value = d; draftEnd.value = null }
  else draftEnd.value = d
}

function save() {
  model.value = props.mode === 'range' ? { start: draftStart.value, end: draftEnd.value } : draftStart.value
  close()
}

async function moveFocus(d: IsoDate) {
  focused.value = d
  const visible = months.value.some((m) => d.slice(0, 7) === toIso(m).slice(0, 7))
  if (!visible) viewMonth.value = startOfMonth(fromIso(d))
  await nextTick()
  focusDay(d)
}

function onDayKeydown(event: KeyboardEvent, d: IsoDate) {
  const map: Record<string, () => IsoDate> = {
    ArrowLeft: () => addDays(d, -1),
    ArrowRight: () => addDays(d, 1),
    ArrowUp: () => addDays(d, -7),
    ArrowDown: () => addDays(d, 7),
    Home: () => addDays(d, -weekdayIndex(fromIso(d))),
    End: () => addDays(d, 6 - weekdayIndex(fromIso(d))),
    PageUp: () => toIso(new Date(fromIso(d).getFullYear(), fromIso(d).getMonth() - 1, fromIso(d).getDate())),
    PageDown: () => toIso(new Date(fromIso(d).getFullYear(), fromIso(d).getMonth() + 1, fromIso(d).getDate())),
  }
  const next = map[event.key]
  if (next) { event.preventDefault(); void moveFocus(next()) }
}

function commitText(which: 'start' | 'end') {
  const text = which === 'start' ? textStart.value : textEnd.value
  const parsed = text ? parseDisplay(text) : null
  if (text && !parsed) return // queda el texto; el error lo valida el formulario
  if (props.mode === 'single') model.value = parsed
  else model.value = { ...current.value, [which]: parsed }
}

const fieldClass = computed(() => {
  const base = 'flex h-500 items-center gap-100 rounded-sm border px-100 transition-colors duration-fast'
  if (props.disabled) return `${base} border-transparent bg-layer-03 text-text-disabled`
  if (props.status === 'error') return `${base} border-support-error bg-layer-02`
  if (open.value) return `${base} border-button-secondary-stroke bg-layer-02`
  return `${base} border-transparent bg-layer-02 hover:border-button-secondary-hover focus-within:border-button-secondary-stroke`
})
</script>

<template>
  <div ref="root" class="db-ui relative flex h-fit w-full max-w-[352px] flex-col self-start">
    <div :class="['grid gap-100', mode === 'range' ? 'grid-cols-2' : 'grid-cols-1']">
      <div v-for="which in fields" :key="which" class="flex flex-col">
        <label :for="`${id}-${which}`" class="db-label02 p-100 text-text-primary">
          {{ mode === 'range' ? (which === 'start' ? startLabel : endLabel) : label }}
        </label>
        <div :class="fieldClass">
          <input
            :id="`${id}-${which}`"
            :value="which === 'start' ? textStart : textEnd"
            placeholder="dd/mm/aaaa"
            inputmode="numeric"
            autocomplete="off"
            :disabled="disabled"
            :aria-invalid="status === 'error' || undefined"
            :aria-describedby="status === 'error' && errorText ? `${id}-error` : undefined"
            class="db-label02 min-w-0 flex-1 bg-transparent text-text-primary outline-none placeholder:text-text-secondary disabled:cursor-not-allowed disabled:text-text-disabled"
            @input="setText(which, ($event.target as HTMLInputElement).value)"
            @blur="commitText(which)"
            @keydown.enter.prevent="commitText(which)"
          />
          <DbStatusIcon v-if="status === 'error' && !disabled" status="error" :size="16" />
          <button
            v-else
            type="button"
            data-trigger
            :disabled="disabled"
            :aria-label="`Abrir calendario${mode === 'range' ? ` (${which === 'start' ? startLabel : endLabel})` : ''}`"
            aria-haspopup="dialog"
            :aria-expanded="open"
            :aria-controls="panelId"
            class="db-focus inline-flex size-300 shrink-0 items-center justify-center rounded-sm text-icon-primary disabled:text-text-disabled"
            @click="open ? close(false) : openPanel()"
          >
            <Calendar class="size-200" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <p v-if="status === 'error' && errorText" :id="`${id}-error`" class="db-label01 p-100 text-text-error">{{ errorText }}</p>

    <Teleport to="body" :disabled="presentation !== 'modal'">
      <div
        v-if="open"
        :class="presentation === 'modal'
          ? 'db-ui fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--db-layer-06)_50%,transparent)] p-200'
          : 'absolute left-0 top-full z-20 mt-50'"
      >
        <div
          :id="panelId"
          ref="panel"
          role="dialog"
          :aria-modal="presentation === 'modal' || undefined"
          :aria-label="mode === 'range' ? 'Elegir período' : 'Elegir fecha'"
          :class="[
            'flex flex-col bg-background-01 shadow-bordered-down',
            presentation === 'modal' ? 'w-full max-w-modal-md rounded-md' : 'rounded-sm',
          ]"
        >
          <div v-if="presentation === 'modal'" class="flex items-center gap-200 px-300 pt-300">
            <button type="button" class="db-focus inline-flex size-300 items-center justify-center rounded-sm text-icon-primary" aria-label="Cerrar" @click="close()">
              <X class="size-200" aria-hidden="true" />
            </button>
            <p class="db-body01 flex-1 text-center text-text-primary">{{ mode === 'range' ? 'Seleccioná una fecha de inicio' : 'Seleccioná una fecha' }}</p>
          </div>

          <div class="relative flex flex-col gap-200 p-200 md:flex-row md:gap-400">
            <button
              type="button"
              class="db-focus absolute left-200 top-300 inline-flex size-300 items-center justify-center rounded-sm text-icon-primary"
              aria-label="Mes anterior"
              @click="viewMonth = addMonths(viewMonth, -1)"
            >
              <ChevronLeft class="size-200" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="db-focus absolute right-200 top-300 inline-flex size-300 items-center justify-center rounded-sm text-icon-primary"
              aria-label="Mes siguiente"
              @click="viewMonth = addMonths(viewMonth, 1)"
            >
              <ChevronRight class="size-200" aria-hidden="true" />
            </button>
            <DbCalendarMonth
              v-for="m in months"
              :key="m.toISOString()"
              :month="m"
              :start="draftStart"
              :end="draftEnd"
              :hover="mode === 'range' && !draftEnd ? hoverDate : null"
              :focused="focused"
              :today="todayIso"
              :min="min"
              :max="max"
              @select="select"
              @hover="hoverDate = $event"
              @keydown="onDayKeydown"
            />
          </div>

          <div class="flex items-center justify-between gap-200 border-t border-border-02 px-200 py-200">
            <p class="db-label02 text-text-secondary" aria-live="polite">
              {{ periodText }}
            </p>
            <DbButton :disabled="!draftStart || (mode === 'range' && !draftEnd)" @click="save">Guardar</DbButton>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
