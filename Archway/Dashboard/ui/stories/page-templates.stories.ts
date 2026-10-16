import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { ArrowLeft, Coins, MapPin, Plus, Search, Settings, UserRound } from 'lucide-vue-next'
import {
  DbAppShell, DbButton, DbCard, DbCardField, DbCheckbox, DbDivider, DbHeader, DbLink, DbNotification, DbSelect,
  DbSidebar, DbStepper, DbSubPanel, DbTextField, DbToggle, type DbStep,
} from '../src'
import { countries, countryNav, mainNav } from './fixtures'

const meta = {
  title: 'Uso/Templates de pantalla (medidas)',
  component: DbAppShell,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
} satisfies Meta<typeof DbAppShell>
export default meta
type Story = StoryObj<typeof meta>

const common = {
  DbAppShell, DbHeader, DbSidebar, DbSubPanel, DbButton, DbTextField, DbToggle, DbSelect, DbLink, DbDivider,
}

/** Country session → formulario por secciones (Argentina › Promociones). Columna de contenido 1089. */
export const CountryFormulario: Story = {
  name: 'Country → formulario',
  render: () => ({
    components: common,
    setup: () => ({
      mainNav, countryNav, countries, Settings, Coins, Search, Plus,
      country: ref<string | null>('ar'), current: ref<string | null>('countries'), sub: ref<string | null>('c-promotions'),
      collapsed: ref(true), drawer: ref(false),
      motor: ref(true), plu: ref(''), segmento: ref(''), minimo: ref('0'), moneda: ref<string | null>('bog'),
      acum1: ref(false), acum2: ref(false), banco: ref(''), bancoNombre: ref(''),
    }),
    template: `<div class="h-screen">
      <DbAppShell v-model:collapsed="collapsed" v-model:drawer="drawer">
        <template #header="{ toggleSidebar, expanded }">
          <DbHeader v-model:country="country" :countries="countries" user-initials="RA" user-name="Rocío A." :sidebar-expanded="expanded" sidebar-id="db-sidebar" @toggle-sidebar="toggleSidebar" />
        </template>
        <template #sidebar="{ mobile }"><DbSidebar v-model:current="current" v-model:collapsed="collapsed" :items="mainNav" :width="mobile ? 256 : 272" @navigate="drawer = false" /></template>
        <template #subpanel><DbSubPanel v-model:current="sub" :items="countryNav" aria-label="Configuración de Argentina" class="hidden md:flex" /></template>

        <form class="mx-auto flex w-full max-w-[1089px] flex-col gap-400 px-200 py-600 md:px-400" @submit.prevent>
          <h1 class="db-h2 m-0 text-text-primary">Argentina</h1>
          <div class="flex flex-col gap-600">
            <section class="flex flex-col gap-600 rounded-sm border border-border-02 p-400" aria-labelledby="s1">
              <h2 id="s1" class="db-h6 m-0 flex items-center gap-100 text-text-primary"><component :is="Settings" class="size-300" aria-hidden="true" />Configuración</h2>
              <DbToggle v-model="motor" label="Motor de promociones" description="Habilitar o deshabilitar el sistema de promociones para este país" />
              <DbDivider />
              <div class="flex flex-col gap-200 md:flex-row md:items-end">
                <DbTextField v-model="plu" class="flex-1" label="Productos a excluir en promociones" placeholder="Escribí el PLU de los productos que quieras excluir." :icon-left="Search" />
                <DbButton>Aplicar PLU</DbButton>
              </div>
              <DbDivider />
              <div class="flex flex-col gap-200 md:flex-row md:items-end">
                <DbTextField v-model="segmento" class="flex-1" label="Segmentación de cliente" placeholder="Buscá o escribí un segmento" :icon-left="Search" :suggestions="['New leads', 'High value', 'Inactive', 'Potential']" />
                <DbButton>Aplicar segmento</DbButton>
              </div>
            </section>

            <section class="flex flex-col gap-600 rounded-sm border border-border-02 p-400" aria-labelledby="s2">
              <h2 id="s2" class="db-h6 m-0 flex items-center gap-100 text-text-primary"><component :is="Coins" class="size-300" aria-hidden="true" />Reglas de negocio</h2>
              <div class="flex flex-col gap-200">
                <div><p class="db-body02 text-text-primary">Integración de descuento</p><p class="db-label01 text-text-secondary">Valor de referencia se utiliza para identificar o agrupar transacciones con un monto mínimo.</p></div>
                <div class="grid grid-cols-1 gap-200 md:grid-cols-2">
                  <DbTextField v-model="minimo" label="Cantidad mínima" type="number" />
                  <DbSelect v-model="moneda" label="Marca de moneda" :options="[{ value: 'bog', label: 'Bog' }, { value: 'ars', label: 'ARS' }]" />
                </div>
                <DbLink class="self-end" :icon-left="Plus">Agregar marca de moneda</DbLink>
              </div>
              <DbDivider />
              <fieldset class="m-0 flex flex-col gap-200 border-0 p-0">
                <legend class="db-body02 mb-200 text-text-primary">Acumulación de promociones</legend>
                <div class="flex flex-col gap-300 md:flex-row md:gap-800">
                  <DbToggle v-model="acum1" label="Promoción de productos + Promoción de pedidos" />
                  <DbToggle v-model="acum2" label="Promoción de pedidos + Promoción de pedidos" />
                </div>
              </fieldset>
            </section>

            <section class="flex flex-col gap-300 rounded-sm border border-border-02 p-400" aria-labelledby="s3">
              <h2 id="s3" class="db-h6 m-0 flex items-center gap-100 text-text-primary"><component :is="Settings" class="size-300" aria-hidden="true" />Medios de pago</h2>
              <p class="db-body02 text-text-primary">Bancos</p>
              <div class="flex flex-col gap-200 md:flex-row md:items-start">
                <DbTextField v-model="banco" class="flex-1" label="Código del banco" placeholder="¿Qué código debo ingresar aquí?" supporting-text="Indicá el código asignado al banco en Yuno." />
                <DbTextField v-model="bancoNombre" class="flex-1" label="Nombre del banco" placeholder="Ejemplo: Banco Nación" supporting-text="Escribí el nombre completo del banco tal como aparece en Yuno." />
                <DbButton class="md:mt-[44px]">Aplicar</DbButton>
              </div>
            </section>
          </div>
          <footer class="flex justify-end gap-400 border-t border-border-02 pt-400">
            <DbButton variant="secondary">Cancelar</DbButton>
            <DbButton type="submit">Guardar configuración</DbButton>
          </footer>
        </form>
      </DbAppShell>
    </div>`,
  }),
}

/** Left Panel → flujo paso a paso (Promotions › Crear › Segmentación y filtros). Columna 800 + Card_Info 208. */
export const PasoAPaso: Story = {
  name: 'Left Panel → paso a paso',
  render: () => ({
    components: { ...common, DbStepper, DbNotification, DbCard, DbCardField, DbCheckbox },
    setup: () => ({
      mainNav, countries, ArrowLeft, MapPin, UserRound, Search,
      country: ref<string | null>('ar'), current: ref<string | null>('promotions'), collapsed: ref(false), drawer: ref(false),
      steps: [
        { label: 'Descuento', state: 'completed' }, { label: 'Detalles generales', state: 'completed' },
        { label: 'Disponibilidad', state: 'completed' }, { label: 'Segmentación', state: 'current' },
        { label: 'Contenido de apoyo', state: 'incomplete' },
      ] satisfies DbStep[],
      restaurantes: ref(['Bel', 'Scalabrini', 'Oli', 'Abasto', 'Palermo', 'Av. Santa Fe'].map((n, i) => ({ n, on: i === 1 }))),
      segmentos: ref(['New leads', 'High value', 'Inactive', 'Potential', 'Low Value'].map((n) => ({ n, on: false }))),
      q: ref(''),
    }),
    template: `<div class="h-screen">
      <DbAppShell v-model:collapsed="collapsed" v-model:drawer="drawer">
        <template #header="{ toggleSidebar, expanded }">
          <DbHeader v-model:country="country" :countries="countries" user-initials="RA" user-name="Rocío A." :sidebar-expanded="expanded" sidebar-id="db-sidebar" @toggle-sidebar="toggleSidebar" />
        </template>
        <template #sidebar="{ mobile }"><DbSidebar v-model:current="current" v-model:collapsed="collapsed" :items="mainNav" :width="mobile ? 256 : 272" @navigate="drawer = false" /></template>

        <div class="flex flex-col">
          <div class="bg-layer-02 px-200 pb-400 pt-300 md:px-1400">
            <div class="flex max-w-[864px] flex-col gap-600">
              <div class="flex flex-col gap-200">
                <DbLink href="#" :icon-left="ArrowLeft">volver</DbLink>
                <DbStepper :steps="steps" aria-label="Alta de promoción" />
              </div>
              <div class="flex flex-col gap-100">
                <h1 class="db-h2 m-0 text-text-primary">Segmentación y filtros</h1>
                <p class="db-body01 m-0 text-text-secondary">Configure dónde y para quién aplica esta promoción</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col-reverse gap-400 px-200 py-400 md:px-1400 lg:flex-row lg:items-start">
            <div class="flex w-full max-w-[800px] flex-col gap-600">
              <DbNotification type="inline" status="info" title="Filtros" message="Si no seleccionás ningún filtro, la promoción se aplicará de forma predeterminada a todos los casos." :closable="false" />
              <section class="flex flex-col gap-300 rounded-sm border border-border-02 p-400" aria-labelledby="f1">
                <h2 id="f1" class="db-h6 m-0 flex items-center gap-100 text-text-primary"><component :is="MapPin" class="size-300" aria-hidden="true" />Filtros de restaurante</h2>
                <p class="db-label01 text-text-secondary">Seleccioná los restaurantes donde aplica la promoción. Si no seleccionás ninguno, se aplicará a todos.</p>
                <div class="grid grid-cols-1 gap-200 md:grid-cols-2">
                  <fieldset class="m-0 flex flex-col gap-100 rounded-sm border border-border-02 p-200">
                    <legend class="db-sr-only">Listado de restaurantes</legend>
                    <DbTextField v-model="q" aria-label="Buscar restaurante" placeholder="Ej: Oli" :icon-left="Search" />
                    <DbCheckbox v-for="r in restaurantes.filter((x) => x.n.toLowerCase().includes(q.toLowerCase()))" :key="r.n" v-model="r.on" :label="r.n" />
                  </fieldset>
                  <div class="flex flex-col gap-100 rounded-sm border border-border-02 p-200">
                    <p class="db-label03 text-text-primary">Listado de restaurantes seleccionados</p>
                    <ul class="m-0 list-none p-0"><li v-for="r in restaurantes.filter((x) => x.on)" :key="r.n" class="db-label02 py-100 text-text-primary">{{ r.n }}</li></ul>
                  </div>
                </div>
              </section>
              <section class="flex flex-col gap-300 rounded-sm border border-border-02 p-400" aria-labelledby="f2">
                <h2 id="f2" class="db-h6 m-0 flex items-center gap-100 text-text-primary"><component :is="UserRound" class="size-300" aria-hidden="true" />Filtros de segmentación</h2>
                <fieldset class="m-0 flex flex-col gap-50 border-0 p-0">
                  <legend class="db-label01 mb-100 text-text-secondary">Segmentación de usuarios</legend>
                  <DbCheckbox v-for="s in segmentos" :key="s.n" v-model="s.on" :label="s.n" />
                </fieldset>
              </section>
              <footer class="flex justify-end gap-400 border-t border-border-02 pt-400">
                <DbButton variant="secondary">Cancelar</DbButton>
                <DbButton>Siguiente</DbButton>
              </footer>
            </div>
            <DbCard variant="info" title="Resumen" :icon="UserRound" class="lg:sticky lg:top-300">
              <DbCardField label="Tipo" :tag="{ label: 'Envío', tone: 'warning' }" />
              <DbCardField label="Descuento" value="Porcentaje al producto" layout="stack" />
            </DbCard>
          </div>
        </div>
      </DbAppShell>
    </div>`,
  }),
}
