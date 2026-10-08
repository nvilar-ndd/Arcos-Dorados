import type { Meta, StoryObj } from '@storybook/vue3'
import { DbButton, DbNotification, DbToaster, useToasts } from '../src'

const meta = {
  title: 'Componentes/Notification',
  component: DbNotification,
  parameters: { controls: { disable: false } },
  argTypes: {
    status: { control: 'inline-radio', options: ['success', 'info', 'warning', 'error'] },
    type: { control: 'inline-radio', options: ['toast', 'inline'] },
  },
  args: { title: 'Title', message: 'Rocío ha sido agregada al sistema con el rol de Admin Admin', status: 'success', type: 'toast', highContrast: false, closable: true },
} satisfies Meta<typeof DbNotification>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({ components: { DbNotification }, setup: () => ({ args }), template: '<div class="p-300"><DbNotification v-bind="args" /></div>' }),
}

/** Toast (emergentes) · Inline (informativas) · Inline high contrast. */
export const Variantes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbNotification },
    setup: () => ({ statuses: ['success', 'error', 'warning', 'info'] as const }),
    template: `<div class="db-ui grid grid-cols-1 gap-300 p-300 md:grid-cols-3">
      <div class="flex flex-col gap-200"><p class="db-label01 font-mono text-text-secondary">Toast</p>
        <DbNotification v-for="s in statuses" :key="s" :status="s" title="Title" message="Rocío ha sido agregada al sistema con el rol de Admin Admin" />
      </div>
      <div class="flex flex-col gap-200"><p class="db-label01 font-mono text-text-secondary">Inline</p>
        <DbNotification v-for="s in statuses" :key="s" :status="s" type="inline" title="Title" message="Message" />
      </div>
      <div class="flex flex-col gap-200"><p class="db-label01 font-mono text-text-secondary">Inline · high contrast</p>
        <DbNotification v-for="s in statuses" :key="s" :status="s" type="inline" high-contrast title="Title" message="Message" />
      </div>
    </div>`,
  }),
}

/** Notification + ProgresBar y CTA (sólo en inline). */
export const ProgresoYCta: Story = {
  name: 'Progreso y CTA',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbNotification },
    template: `<div class="db-ui flex flex-col gap-300 p-300" style="max-width:640px">
      <DbNotification status="info" title="Usuario creado con éxito!" message="Rocío ha sido agregada al sistema con el rol de Admin Admin" :progress="25" progress-label="Puede demorar unos minutos" helper-text="Optional helper text" />
      <DbNotification status="success" title="Usuario creado con éxito!" message="Rocío ha sido agregada al sistema con el rol de Admin Admin" :progress="100" progress-label="Puede demorar unos minutos" helper-text="Optional helper text" />
      <DbNotification type="inline" status="warning" title="Filtros" message="Si no seleccionás ningún filtro, la promoción se aplicará de forma predeterminada a todos los casos." cta-label="Botón" />
    </div>`,
  }),
}

/** Toasts reales: abajo a la derecha (16 / 32 px), apiladas; la de proceso no se cierra sola. */
export const Toaster: Story = {
  name: 'Toaster (en vivo)',
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DbButton, DbToaster },
    setup: () => {
      const toasts = useToasts()
      function process() {
        const id = toasts.push({ status: 'info', title: 'Publicando promoción', message: 'Navidad 20% helados', progress: 10, progressLabel: 'Puede demorar unos minutos' })
        let p = 10
        const t = setInterval(() => {
          p += 30
          if (p >= 100) {
            clearInterval(t)
            toasts.dismiss(id)
            toasts.push({ status: 'success', title: 'Promoción publicada', message: 'Navidad 20% helados ya está activa.' })
          } else toasts.update(id, { progress: p })
        }, 1200)
      }
      return {
        process,
        ok: () => toasts.push({ status: 'success', title: 'Cambios guardados', message: 'La configuración del país se actualizó.' }),
        err: () => toasts.push({ status: 'error', title: 'No se pudo guardar', message: 'Revisá los campos marcados e intentá de nuevo.' }),
      }
    },
    template: `<div class="flex min-h-[420px] flex-wrap items-start gap-200 p-300">
      <DbButton @click="ok">Éxito</DbButton>
      <DbButton variant="danger" @click="err">Error</DbButton>
      <DbButton variant="secondary" @click="process">Proceso con progreso</DbButton>
      <DbToaster />
    </div>`,
  }),
}
