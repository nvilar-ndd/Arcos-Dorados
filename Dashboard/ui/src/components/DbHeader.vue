<script setup lang="ts">
/**
 * Header — Figma: Components › UI shell - Header (581:5749). 96 px, padding 24/16, `layer/01`,
 * borde inferior `border/02`.
 * Anatomía: 1 control de la sidebar · 2 logo · 3 selector de país · 4 ayuda · 5 configuración
 * · 6 seguridad · 7 perfil. En < 768 px los accesos 4–6 se agrupan dentro del menú de perfil.
 * Figma separa los grupos con un gap fijo de 206 px (audit D-E02): acá `justify-between`.
 * El logo va por slot (`#logo`) con el asset oficial de marca.
 */
import { computed } from 'vue'
import { CircleHelp, PanelLeft, Settings, Shield } from 'lucide-vue-next'
import DbIconButton from './DbIconButton.vue'
import DbMenu, { type DbMenuItem } from './DbMenu.vue'
import DbSelect, { type DbSelectOption } from './DbSelect.vue'

const country = defineModel<string | null>('country', { default: null })

const props = withDefaults(
  defineProps<{
    countries?: DbSelectOption<string>[]
    userInitials: string
    userName: string
    sidebarExpanded?: boolean
    settingsItems?: DbMenuItem[]
    securityItems?: DbMenuItem[]
    profileItems?: DbMenuItem[]
    helpHref?: string
    /** id del <nav> de la sidebar que controla el botón (lo pone DbAppShell). */
    sidebarId?: string
  }>(),
  {
    countries: () => [],
    sidebarExpanded: true,
    settingsItems: () => [],
    securityItems: () => [
      { value: 'auditorias', label: 'Auditorías' },
      { value: 'registros', label: 'Registros' },
      { value: 'autenticacion', label: 'Autenticación de terceros' },
    ],
    profileItems: () => [
      { value: 'perfil', label: 'Mi perfil' },
      { value: 'logout', label: 'Cerrar sesión' },
    ],
  },
)

const emit = defineEmits<{ toggleSidebar: []; select: [menu: 'settings' | 'security' | 'profile' | 'help', value: string] }>()

/** Menú de perfil en mobile: suma ayuda, configuración y seguridad. */
const mobileProfile = computed<DbMenuItem[]>(() => [
  { value: 'help', label: 'Ayuda', icon: CircleHelp },
  ...props.settingsItems.map((i) => ({ ...i, value: `settings:${i.value}` })),
  ...props.securityItems.map((i) => ({ ...i, value: `security:${i.value}` })),
  ...props.profileItems,
])

function onMobile(value: string) {
  if (value === 'help') emit('select', 'help', value)
  else if (value.startsWith('settings:')) emit('select', 'settings', value.slice(9))
  else if (value.startsWith('security:')) emit('select', 'security', value.slice(9))
  else emit('select', 'profile', value)
}
</script>

<template>
  <header class="db-ui flex h-1200 w-full items-center justify-between gap-200 border-b border-border-02 bg-layer-01 px-200 py-300">
    <div class="flex min-w-0 items-center gap-200 md:gap-500">
      <div class="flex items-center gap-200">
        <DbIconButton
          :icon="PanelLeft"
          variant="secondary"
          :label="sidebarExpanded ? 'Contraer menú' : 'Expandir menú'"
          :aria-expanded="sidebarExpanded"
          :aria-controls="sidebarId"
          @click="emit('toggleSidebar')"
        />
        <a href="/" class="db-focus inline-flex items-center rounded-sm no-underline" aria-label="Inicio">
          <slot name="logo">
            <span class="db-label03 inline-flex h-400 items-center rounded-sm bg-layer-02 px-100 text-text-secondary" aria-hidden="true">Logo</span>
          </slot>
        </a>
      </div>
      <div v-if="countries.length" class="w-[176px] min-w-0 md:w-[208px]">
        <DbSelect v-model="country" :options="countries" aria-label="País" placeholder="Seleccionar país" />
      </div>
    </div>

    <!-- ≥ 768 px: accesos distribuidos -->
    <div class="hidden items-center gap-200 md:flex">
      <a
        v-if="helpHref"
        :href="helpHref"
        class="db-focus inline-flex size-400 items-center justify-center rounded-full text-icon-primary hover:bg-button-secondary-hover"
        aria-label="Ayuda"
      >
        <CircleHelp class="size-200" aria-hidden="true" />
      </a>
      <DbIconButton v-else :icon="CircleHelp" variant="secondary" label="Ayuda" @click="emit('select', 'help', 'help')" />
      <DbMenu v-if="settingsItems.length" :items="settingsItems" :icon="Settings" label="Configuración" align="right" @select="emit('select', 'settings', $event)" />
      <DbMenu :items="securityItems" :icon="Shield" label="Seguridad" align="right" @select="emit('select', 'security', $event)" />
      <DbMenu :items="profileItems" variant="avatar" :initials="userInitials" :label="`Perfil de ${userName}`" align="right" @select="emit('select', 'profile', $event)" />
    </div>

    <!-- < 768 px: todo dentro del menú de perfil -->
    <div class="md:hidden">
      <DbMenu :items="mobileProfile" variant="avatar" :initials="userInitials" :label="`Perfil de ${userName}`" align="right" @select="onMobile" />
    </div>
  </header>
</template>
