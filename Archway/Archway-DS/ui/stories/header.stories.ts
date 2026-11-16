import type { Meta, StoryObj } from '@storybook/vue3'
import AwHeader from '../src/especificos/AwHeader.vue'
import web0 from '../src/especificos/AwHeader.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Específicos/Header', component: AwHeader, tags: ['autodocs'], argTypes: { mode: { control: 'inline-radio', options: ['generic', 'pickup', 'delivery'] }, storeStatusTone: { control: 'inline-radio', options: ['neutral', 'error'] } }, args: { mode: 'pickup', action: 'Retirá en', location: 'McDonald\'s Obelisco', storeStatus: 'Próximo a cerrar', storeStatusTone: 'error', skeleton: false } } satisfies Meta<typeof AwHeader>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWHeader'),
    android: kotlin(androidSrc, 'AwHeader'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwHeader },
  `<div style="width:412px;display:grid;gap:16px"><AwHeader /><AwHeader mode="pickup" action="Retirá en" location="McDonald's Obelisco" store-status="Próximo a cerrar" store-status-tone="error" /><AwHeader skeleton /></div>`,
  () => ({}),
)
