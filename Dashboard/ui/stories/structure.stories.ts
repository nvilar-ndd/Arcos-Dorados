import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Languages, Sun } from 'lucide-vue-next'
import { DbAppShell, DbHeader, DbIconButton, DbSidebar, DbSubPanel } from '../src'
import { countries, countryNav, mainNav } from './fixtures'

const meta = {
  title: 'Estructura/UI shell — Header + PanelLeft',
  component: DbAppShell,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
} satisfies Meta<typeof DbAppShell>
export default meta
type Story = StoryObj<typeof meta>

const shell = (withSub: boolean) => ({
  components: { DbAppShell, DbHeader, DbSidebar, DbSubPanel, DbIconButton },
  setup: () => ({
    mainNav, countryNav, countries, Sun, Languages,
    country: ref<string | null>('ar'),
    current: ref<string | null>(withSub ? 'countries' : 'promotions'),
    sub: ref<string | null>('c-promotions'),
    collapsed: ref(withSub),
    drawer: ref(false),
    subOpen: ref(true),
  }),
  template: `<div class="h-screen">
    <DbAppShell v-model:collapsed="collapsed" v-model:drawer="drawer">
      <template #header="{ toggleSidebar, expanded }">
        <DbHeader v-model:country="country" :countries="countries" user-initials="RA" user-name="Rocío A." :sidebar-expanded="expanded" sidebar-id="db-sidebar"
          :settings-items="[{ value: 'general', label: 'General' }]" @toggle-sidebar="toggleSidebar" />
      </template>
      <template #sidebar="{ mobile }">
        <DbSidebar v-model:current="current" v-model:collapsed="collapsed" :items="mainNav" :width="mobile ? 256 : 272" @navigate="drawer = false">
          <template #footer>
            <DbIconButton :icon="Sun" variant="secondary" label="Cambiar a modo oscuro" />
            <DbIconButton :icon="Languages" variant="secondary" label="Idioma: Español" />
          </template>
        </DbSidebar>
      </template>
      ${withSub ? `<template #subpanel><DbSubPanel v-model:current="sub" v-model:open="subOpen" :items="countryNav" aria-label="Configuración de Argentina" /></template>` : ''}
      <div class="flex flex-col gap-200 p-400">
        <h1 class="db-h2 m-0 text-text-primary">${withSub ? 'Argentina' : 'Promociones'}</h1>
        <p class="db-body02 m-0 text-text-secondary">Área de contenido. Probá el control de la sidebar, los menús del header y el ancho &lt; 768 px (drawer).</p>
      </div>
    </DbAppShell>
  </div>`,
})

/** Left panel expandido (272) con Header. En < 768 px la sidebar pasa a drawer. */
export const Default: Story = { render: () => shell(false) }

/** Navegación secundaria: Left panel colapsado (48) + SubPanelLeft de Country. */
export const ConSubPanel: Story = { name: 'Con SubPanelLeft (Country)', render: () => shell(true) }
