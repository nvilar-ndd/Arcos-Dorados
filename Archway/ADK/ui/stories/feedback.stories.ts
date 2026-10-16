import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { AdkAlert, AdkButton, AdkLoader, AdkSnackbar, AdkSnackbarHost, useSnackbar } from '../src'
import KioskFrame from './KioskFrame.vue'

const meta = { title: 'Componentes/Feedback — Snackbar, Alerta y Loaders', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Snackbars: Story = {
  render: () => ({
    components: { AdkSnackbar },
    template: `<div class="adk-ui flex flex-col gap-32 p-24">
      <AdkSnackbar status="success" message="Producto agregado al pedido" />
      <AdkSnackbar status="error" message="No pudimos aplicar el cupón" />
      <AdkSnackbar status="warning" message="Quedan pocas unidades" />
      <AdkSnackbar status="info" message="Tu pedido suma 40 puntos" />
    </div>`,
  }),
}

/** Cola con cierre automático: 4 s, 6 s para Error (propuesta A-C07). Tocar el aviso pausa el cierre. */
export const Cola: Story = {
  name: 'Cola (useSnackbar)',
  render: () => ({
    components: { AdkSnackbarHost, AdkButton },
    setup: () => {
      const { show } = useSnackbar()
      return { show }
    },
    template: `<div class="adk-ui flex flex-col items-start gap-24 p-24">
      <div class="flex gap-16">
        <AdkButton size="md" @click="show('Producto agregado al pedido')">Agregar producto</AdkButton>
        <AdkButton size="md" variant="secondary" @click="show('No pudimos aplicar el cupón', 'error')">Cupón inválido</AdkButton>
      </div>
      <AdkSnackbarHost class="w-[568px]" />
    </div>`,
  }),
}

export const Alerta: Story = {
  render: () => ({
    components: { AdkAlert, AdkButton, KioskFrame },
    setup: () => ({ open: ref(true) }),
    template: `<div class="adk-ui">
      <div class="px-24 pt-24"><AdkButton size="md" variant="secondary" @click="open = true">Abrir alerta</AdkButton></div>
      <KioskFrame :scale="0.4">
        <div class="relative size-full bg-background-default">
          <AdkAlert v-model:open="open" title="Ups! Hubo un problema" message="Es necesario tener productos en el carrito para utilizar esta opción" secondary-label="Cancelar" />
        </div>
      </KioskFrame>
    </div>`,
  }),
}

export const Loaders: Story = {
  render: () => ({
    components: { AdkLoader },
    template: `<div class="adk-ui flex items-start gap-96 p-24">
      <AdkLoader />
      <AdkLoader label="Procesando tu pago…" show-label />
    </div>`,
  }),
}
