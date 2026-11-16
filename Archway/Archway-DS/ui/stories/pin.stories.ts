import type { Meta, StoryObj } from '@storybook/vue3'
import AwPin from '../src/especificos/AwPin.vue'
import web0 from '../src/especificos/AwPin.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Pin 💠', component: AwPin, argTypes: { status: { control: 'inline-radio', options: ['default', 'incomplete', 'expired'] } }, args: { name: 'Madrugador', status: 'default' } } satisfies Meta<typeof AwPin>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWPin'),
    android: kotlin(androidSrc, 'AwPinStatus', 'AwPin'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwPin },
  `<AwPin name="Madrugador" /><AwPin name="Fan del café" status="incomplete" /><AwPin name="Verano" status="expired" />`,
  () => ({}),
)
