<script setup lang="ts">
/**
 * Card List (lista de gestión) — Figma: Components › Card_list (2866:51005).
 * Fila 80 px de alto (1088 de ancho en Figma), `layer/01` + borde `border/02`, radio 8, padding 16.
 * Columnas: nombre + código · tipo/subtipo · vigencia + fechas · estado · toggle · menú de acciones.
 * Uso exclusivo para entidades gestionables (si es sólo lectura: DbDataTable).
 * Los estados y textos son los del ejemplo de promociones de Figma.
 *
 * Variante `change-order` (State=change-order, 6872:5073, nueva en Figma el 2026-11):
 * columna "Orden" a la izquierda, nombre + tipo/subtipo, "Destino" (Tag-operations + texto, p. ej. PLU)
 * y vigencia sin fechas de creación/modificación. Para listas cuyo orden de prioridad se edita.
 */
import { computed } from 'vue'
import { Calendar, Copy, EllipsisVertical } from 'lucide-vue-next'
import DbDivider from './DbDivider.vue'
import DbMenu, { type DbMenuItem } from './DbMenu.vue'
import DbTag, { type DbTagTone } from './DbTag.vue'
import DbToggle from './DbToggle.vue'

export type DbEntityStatus =
  | 'proxima' | 'activa' | 'inactiva' | 'expirada' | 'borrador' | 'cargando' | 'pendiente' | 'archivada'

export interface DbCardListDestination {
  /** Tipo de destino, va en el Tag-operations (`tag/background-blue`): "PLU", "URL"… */
  kind: string
  /** Producto o URL de destino. */
  label: string
}

export interface DbCardListItem {
  name: string
  /** Posición en la lista (variante change-order). `undefined` → "—". */
  order?: number
  /** Destino de la promoción (variante change-order). */
  destination?: DbCardListDestination
  code?: string
  type?: string
  subtype?: string
  dateRange?: string
  created?: string
  modified?: string
  status: DbEntityStatus
}

const active = defineModel<boolean>('active', { default: false })

const props = withDefaults(
  defineProps<{
    item: DbCardListItem
    actions?: DbMenuItem[]
    headingLevel?: 2 | 3 | 4
    /** `State` de Figma: `default` o `change-order`. */
    state?: 'default' | 'change-order'
  }>(),
  { actions: () => [], headingLevel: 3, state: 'default' },
)
const emit = defineEmits<{ action: [value: string]; copy: [code: string] }>()

/** Tag de publicación, título y descripción del estado (Figma). */
const STATUS: Record<DbEntityStatus, { tag: string; tone: DbTagTone; title: string; text: string; color: string; toggle: 'on' | 'off' | 'locked' }> = {
  proxima: { tag: 'Publicada', tone: 'success', title: 'Próxima', text: 'Espera fecha de inicio', color: 'text-link-primary', toggle: 'on' },
  activa: { tag: 'Publicada', tone: 'success', title: 'Activa', text: 'En curso actualmente', color: 'text-text-success', toggle: 'on' },
  inactiva: { tag: 'Publicada', tone: 'success', title: 'Inactiva', text: 'Apagada por administrador', color: 'text-text-primary', toggle: 'off' },
  expirada: { tag: 'Publicada', tone: 'success', title: 'Expirada', text: 'Finalizada por vencimiento', color: 'text-text-primary', toggle: 'locked' },
  borrador: { tag: 'Borrador', tone: 'plain', title: 'Borrador', text: 'Aún sin publicar', color: 'text-text-primary', toggle: 'locked' },
  cargando: { tag: 'Cargando', tone: 'info', title: 'Publicando', text: 'Procesando la publicación', color: 'text-text-primary', toggle: 'locked' },
  pendiente: { tag: 'Pendiente', tone: 'danger', title: 'Pendiente de publicar', text: 'Lista para publicar', color: 'text-text-error', toggle: 'locked' },
  archivada: { tag: 'Archivada', tone: 'muted', title: 'Archivada', text: 'Fuera de publicación', color: 'text-text-secondary', toggle: 'locked' },
}

const s = computed(() => STATUS[props.item.status])
const ordering = computed(() => props.state === 'change-order')
</script>

<template>
  <article
    :class="[
      'db-ui grid w-full items-center gap-200 rounded-md border border-border-02 bg-layer-01 p-200',
      ordering
        ? 'grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_minmax(0,1.6fr)_minmax(0,1.3fr)_minmax(0,1.2fr)_minmax(0,1fr)_auto_auto]'
        : 'grid-cols-[1fr_auto] lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_minmax(0,1fr)_auto_auto]',
    ]"
  >
    <!-- Orden (change-order) -->
    <div v-if="ordering" class="flex flex-col items-center gap-100">
      <span class="db-label01 text-text-primary">Orden</span>
      <span class="db-label03 text-text-primary" :aria-label="item.order === undefined ? 'Sin orden' : `Posición ${item.order}`">{{ item.order ?? '—' }}</span>
    </div>

    <!-- Change-order: nombre + tipo/subtipo -->
    <div v-if="ordering" class="flex min-w-0 flex-col gap-100">
      <component :is="`h${headingLevel}`" class="db-label03 truncate text-text-primary">{{ item.name }}</component>
      <div class="flex flex-wrap items-center gap-200">
        <span v-if="item.type" class="db-label03 text-text-primary">{{ item.type }}</span>
        <span v-if="item.subtype" class="db-label02 text-text-primary">{{ item.subtype }}</span>
      </div>
    </div>

    <!-- Change-order: destino -->
    <div v-if="ordering" class="hidden min-w-0 items-center gap-200 lg:flex">
      <DbDivider orientation="vertical" />
      <div v-if="item.destination" class="flex min-w-0 flex-col items-start gap-100">
        <DbTag :label="item.destination.kind" tone="info" />
        <span class="db-label02 truncate text-text-primary">{{ item.destination.label }}</span>
      </div>
    </div>

    <!-- Change-order: vigencia -->
    <span v-if="ordering && item.dateRange" class="db-label02 hidden items-center gap-100 text-text-primary lg:inline-flex">
      <Calendar class="size-200 text-icon-primary" aria-hidden="true" />{{ item.dateRange }}
    </span>

    <!-- Nombre, tag de publicación, código, tipo -->
    <div v-if="!ordering" class="flex min-w-0 flex-col gap-100">
      <div class="flex items-center gap-200">
        <component :is="`h${headingLevel}`" class="db-label03 truncate text-text-primary">{{ item.name }}</component>
        <DbTag :label="s.tag" :tone="s.tone" />
      </div>
      <div class="flex flex-wrap items-center gap-200">
        <span v-if="item.code" class="db-label01 inline-flex items-center gap-50 text-text-secondary">
          Código: {{ item.code }}
          <button
            type="button"
            class="db-focus inline-flex size-300 items-center justify-center rounded-sm text-icon-primary"
            :aria-label="`Copiar código ${item.code}`"
            @click="emit('copy', item.code)"
          >
            <Copy class="size-200" aria-hidden="true" />
          </button>
        </span>
        <DbDivider v-if="item.code && item.type" orientation="vertical" />
        <span v-if="item.type" class="db-label02 text-text-secondary">Tipo: <strong class="db-label03 text-text-primary">{{ item.type }}</strong></span>
        <span v-if="item.subtype" class="db-label02 text-text-primary">{{ item.subtype }}</span>
      </div>
    </div>

    <!-- Vigencia -->
    <div v-if="!ordering" class="hidden min-w-0 flex-col gap-100 lg:flex">
      <span v-if="item.dateRange" class="db-label02 inline-flex items-center gap-100 text-text-primary">
        <Calendar class="size-200 text-icon-primary" aria-hidden="true" />{{ item.dateRange }}
      </span>
      <span class="db-label01 text-text-secondary">
        <template v-if="item.created">Creada: {{ item.created }}</template>
        <template v-if="item.modified">&nbsp;&nbsp;Modificada: {{ item.modified }}</template>
      </span>
    </div>

    <!-- Estado -->
    <div class="hidden min-w-0 flex-col gap-100 lg:flex">
      <span :class="['db-label02', s.color]">{{ s.title }}</span>
      <span class="db-label01 text-text-secondary">{{ s.text }}</span>
    </div>

    <!-- Toggle + acciones -->
    <div :class="[ordering ? 'col-start-3' : 'col-start-2', 'row-start-1 flex items-center gap-200 lg:col-start-auto lg:row-start-auto']">
      <DbToggle
        :model-value="s.toggle === 'on' ? true : s.toggle === 'off' ? false : active"
        :disabled="s.toggle === 'locked'"
        :aria-label="`Activar ${item.name}`"
        @update:model-value="active = $event"
      />
    </div>
    <div :class="[ordering ? 'col-start-3' : 'col-start-2', 'flex justify-end lg:col-start-auto']">
      <DbMenu
        v-if="actions.length"
        :items="actions"
        :icon="EllipsisVertical"
        :label="`Acciones para ${item.name}`"
        align="right"
        @select="emit('action', $event)"
      />
    </div>
  </article>
</template>
