import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { IdCard, Mail } from 'lucide-vue-next'
import { AdkDropdown, AdkKeyboard, AdkTextField } from '../src'
import { docOptions } from './fixtures'

const meta = { title: 'Componentes/Input', parameters: { controls: { disable: true } } } satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

/** Estados de Figma: Inactive · Focused/Typing (con foco, se ve al tocar) · Activated · Error. */
export const TextField: Story = {
  name: 'Text Field',
  render: () => ({
    components: { AdkTextField },
    setup: () => ({ IdCard, a: ref(''), b: ref('123456789'), c: ref('12345') }),
    template: `<div class="adk-ui flex w-[888px] flex-col gap-24 bg-background-subtle p-24">
      <AdkTextField v-model="a" label="Número de documento" helper="Sin puntos ni guiones" placeholder="123456789" :icon="IdCard" inputmode="numeric" />
      <AdkTextField v-model="b" label="Número de documento" helper="Sin puntos ni guiones" :icon="IdCard" />
      <AdkTextField v-model="c" label="Número de documento" error="El documento debe tener 9 dígitos" :icon="IdCard" />
    </div>`,
  }),
}

export const Dropdown: Story = {
  render: () => ({
    components: { AdkDropdown },
    setup: () => ({ docOptions, v: ref<string | null>(null), w: ref<string | null>('fisica') }),
    template: `<div class="adk-ui flex h-[640px] w-[888px] flex-col gap-24 bg-background-subtle p-24">
      <AdkDropdown v-model="w" label="Tipo de documento" :options="docOptions" />
      <AdkDropdown v-model="v" label="Tipo de documento" :options="docOptions" helper="Elegí cómo querés tu factura" />
    </div>`,
  }),
}

export const Teclado: Story = {
  name: 'Keyboard',
  render: () => ({
    components: { AdkKeyboard },
    setup: () => ({ a: ref(''), b: ref(''), c: ref('') }),
    template: `<div class="adk-ui flex flex-col items-start gap-48 p-24">
      <div class="flex flex-col gap-16"><output class="adk-body-large min-h-32">{{ a || '—' }}</output><AdkKeyboard v-model="a" /></div>
      <div class="flex flex-col gap-16"><output class="adk-body-large min-h-32">{{ b || '—' }}</output><AdkKeyboard v-model="b" characters /></div>
      <div class="flex flex-col gap-16"><output class="adk-body-large min-h-32">{{ c || '—' }}</output><AdkKeyboard v-model="c" type="number" switchable /></div>
    </div>`,
  }),
}

/** Text Field con inputmode="none" + teclado en pantalla, como en el kiosco. */
export const ConTeclado: Story = {
  name: 'Text Field + teclado',
  render: () => ({
    components: { AdkTextField, AdkKeyboard },
    setup: () => ({ Mail, mail: ref('') }),
    template: `<div class="adk-ui flex w-[888px] flex-col items-center gap-32 p-24">
      <AdkTextField v-model="mail" label="Email" :icon="Mail" type="email" inputmode="none" helper="Te enviamos la factura a este correo" class="w-full" />
      <AdkKeyboard v-model="mail" characters />
    </div>`,
  }),
}
