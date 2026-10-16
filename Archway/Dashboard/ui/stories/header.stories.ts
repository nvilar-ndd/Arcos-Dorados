import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { DbHeader } from '../src'
import { countries } from './fixtures'

const meta = {
  title: 'Estructura/Header',
  component: DbHeader,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: { userInitials: 'RA', userName: 'Rocío A.' },
} satisfies Meta<typeof DbHeader>
export default meta
type Story = StoryObj<typeof meta>

/** Anatomía 1–7. Abrí los menús de seguridad y perfil; achicá el viewport para ver el menú agrupado. */
export const Large: Story = {
  render: () => ({
    components: { DbHeader },
    setup: () => ({ countries, country: ref<string | null>('ar'), last: ref('') }),
    template: `<div class="min-h-[360px]"><DbHeader v-model:country="country" :countries="countries" user-initials="RA" user-name="Rocío A."
      :settings-items="[{ value: 'general', label: 'General' }, { value: 'usuarios', label: 'Usuarios' }]" @select="(m, v) => (last = m + ': ' + v)" />
      <p class="db-label01 p-300 text-text-secondary" aria-live="polite">{{ last }}</p></div>`,
  }),
}

/** Small (< 768 px): los accesos se agrupan en el menú de perfil. */
export const Small: Story = {
  parameters: { viewport: { defaultViewport: 'mobile2' } },
  render: () => ({
    components: { DbHeader },
    setup: () => ({ countries, country: ref<string | null>('ar') }),
    template: '<div class="min-h-[420px] max-w-[375px]"><DbHeader v-model:country="country" :countries="countries" user-initials="RA" user-name="Rocío A." /></div>',
  }),
}
