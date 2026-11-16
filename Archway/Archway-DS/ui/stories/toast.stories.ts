import type { Meta, StoryObj } from '@storybook/vue3'
import AwToast from '../src/components/AwToast.vue'
import web0 from '../src/components/AwToast.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWFeedback.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwFeedback.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Toast', component: AwToast, argTypes: { status: { control: 'inline-radio', options: ['info', 'success', 'warning', 'error'] } }, args: { message: 'Agregamos el producto a tu pedido', status: 'success', duration: 0 } } satisfies Meta<typeof AwToast>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWToast', 'awToast'),
    android: kotlin(androidSrc, 'AwToastStatus', 'AwToast', 'AwToastHost'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwToast },
  `<div style="display:grid;gap:16px"><AwToast message="Tu pedido está en preparación" status="info" :duration="0" /><AwToast message="Agregamos el producto a tu pedido" status="success" :duration="0" /><AwToast message="El local cierra en 15 minutos" status="warning" :duration="0" /><AwToast message="No pudimos procesar el pago. Probá con otra tarjeta." status="error" :duration="0" /></div>`,
  () => ({}),
)
