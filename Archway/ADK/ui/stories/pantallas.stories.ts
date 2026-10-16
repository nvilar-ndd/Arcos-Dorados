import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { IdCard, Mail } from 'lucide-vue-next'
import {
  AdkButton, AdkCartBar, AdkCartItem, AdkDropdown, AdkFooter, AdkHeader, AdkKeyboard, AdkKioskShell, AdkLogo,
  AdkProductCustomRow, AdkProgressSteps, AdkQuantity, AdkSizeSelector, AdkTextField, AdkUserFooter, type AdkStep,
} from '../src'
import KioskFrame from './KioskFrame.vue'
import { docOptions, placeholder, sizes } from './fixtures'
import { homeTemplate, logoSlot, shellComponents, shellSetup } from './screens'

const meta = { title: 'Pantallas', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {
  name: 'Home con pedido',
  render: () => ({ components: shellComponents, setup: shellSetup, template: homeTemplate() }),
}

export const ModoAccesible: Story = {
  name: 'Home en modo accesible',
  render: () => ({ components: shellComponents, setup: shellSetup, template: homeTemplate(true) }),
}

export const Detalle: Story = {
  name: 'Detalle de producto (paso a paso)',
  render: () => ({
    components: { KioskFrame, AdkKioskShell, AdkHeader, AdkLogo, AdkProgressSteps, AdkSizeSelector, AdkProductCustomRow, AdkFooter, AdkUserFooter, AdkCartBar, AdkQuantity, AdkButton },
    setup: () => ({
      sizes, size: ref('m'), q: ref(1), a: ref(1), b: ref(0), c: ref(true), img: placeholder('', 80, 60),
      steps: [
        { label: 'Hamburguesa', state: 'complete' }, { label: 'Papas', state: 'current' },
        { label: 'Bebida', state: 'incomplete' }, { label: 'Postre', state: 'incomplete' },
      ] satisfies AdkStep[],
    }),
    template: `<KioskFrame :scale="0.42">
      <AdkKioskShell content-label="Personalizá tu McCombo">
        <template #header><AdkHeader title="Elegí el tamaño de tus papas" type="step">${logoSlot}</AdkHeader></template>
        <template #nav><AdkProgressSteps :steps="steps" label="Armado del McCombo" /></template>
        <section class="flex flex-col gap-24"><h2 class="adk-headline-extra-small-bold">Tamaño</h2><AdkSizeSelector v-model="size" :options="sizes" label="Tamaño de las papas" /></section>
        <section class="flex flex-col gap-16"><h2 class="adk-headline-extra-small-bold">Extras</h2>
          <AdkProductCustomRow v-model:quantity="a" name="Salsa BBQ" :image="img" extra-price="₡ 220,00" />
          <AdkProductCustomRow v-model:quantity="b" name="Salsa ranch" :image="img" extra-price="₡ 220,00" />
          <AdkProductCustomRow v-model:checked="c" name="Con sal" :image="img" control="check" />
        </section>
        <template #footer>
          <AdkFooter>
            <template #user><AdkUserFooter variant="collapsed" /></template>
            <div class="flex justify-end"><AdkQuantity v-model="q" label="McCombo" /></div>
            <AdkCartBar :count="q" :total="'₡ ' + (q * 10220).toLocaleString('es-AR')" cta-label="Siguiente" secondary-label="Volver" />
          </AdkFooter>
        </template>
      </AdkKioskShell>
    </KioskFrame>`,
  }),
}

export const Resumen: Story = {
  name: 'Resumen del pedido',
  render: () => ({
    components: { KioskFrame, AdkKioskShell, AdkHeader, AdkLogo, AdkCartItem, AdkFooter, AdkUserFooter, AdkCartBar },
    setup: () => ({ img: placeholder('', 152, 152), q1: ref(1), q2: ref(2), items: ref(['a', 'b']) }),
    template: `<KioskFrame :scale="0.42">
      <div class="flex size-full flex-col">
        <AdkHeader title="Tu pedido">${logoSlot}</AdkHeader>
        <main class="flex flex-1 flex-col items-center gap-32 px-96 pt-24">
          <AdkCartItem v-model:quantity="q1" name="McCombo BigMac® Grande" description="Papas Fritas Grandes, Coca-Cola Sin Azúcar" price="₡ 10.220,00" :image="img" />
          <AdkCartItem v-model:quantity="q2" name="McFlurry Oreo" price="₡ 2.100,00" :image="img" />
        </main>
        <AdkFooter>
          <template #user><AdkUserFooter /></template>
          <AdkCartBar :count="q1 + q2" :total="'₡ ' + (q1 * 10220 + q2 * 2100).toLocaleString('es-AR')" cta-label="Pagar" secondary-label="Seguir comprando" />
        </AdkFooter>
      </div>
    </KioskFrame>`,
  }),
}

export const Factura: Story = {
  name: 'Datos para la factura',
  render: () => ({
    components: { KioskFrame, AdkHeader, AdkLogo, AdkTextField, AdkDropdown, AdkKeyboard, AdkButton },
    setup: () => ({ IdCard, Mail, docOptions, tipo: ref<string | null>('fisica'), doc: ref(''), mail: ref(''), active: ref<'doc' | 'mail'>('doc') }),
    template: `<KioskFrame :scale="0.42">
      <div class="flex size-full flex-col">
        <AdkHeader title="¿A nombre de quién?" type="step">${logoSlot}</AdkHeader>
        <main class="flex flex-1 flex-col items-center gap-32 px-96 pt-48">
          <AdkDropdown v-model="tipo" label="Tipo de documento" :options="docOptions" />
          <AdkTextField v-model="doc" label="Número de documento" :icon="IdCard" inputmode="none" helper="Sin puntos ni guiones" @focusin="active = 'doc'" />
          <AdkTextField v-model="mail" label="Email (opcional)" :icon="Mail" type="email" inputmode="none" @focusin="active = 'mail'" />
          <div class="mt-auto pb-48">
            <AdkKeyboard v-if="active === 'doc'" v-model="doc" type="number" :max-length="12" />
            <AdkKeyboard v-else v-model="mail" characters />
          </div>
          <div class="flex w-full gap-24 pb-96"><AdkButton variant="secondary" class="flex-1">Omitir</AdkButton><AdkButton class="flex-1" :disabled="!doc">Continuar</AdkButton></div>
        </main>
      </div>
    </KioskFrame>`,
  }),
}
