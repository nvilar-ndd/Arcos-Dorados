import type { Meta, StoryObj } from '@storybook/vue3'
import AwGamificationBar from '../src/especificos/AwGamificationBar.vue'
import web0 from '../src/especificos/AwGamificationBar.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Específicos/Gamification Bar', component: AwGamificationBar, tags: ['autodocs'], argTypes: { progress: { control: { type: 'range', min: 0, max: 100 } }, type: { control: 'inline-radio', options: ['expanded', 'collapsed'] } }, args: { progress: 50, message: 'Sumá $ 2.500 más y el envío es gratis', type: 'expanded', skeleton: false } } satisfies Meta<typeof AwGamificationBar>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWGamificationBar'),
    android: kotlin(androidSrc, 'AwGamificationBar'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwGamificationBar },
  `<div style="width:412px;display:grid;gap:16px"><AwGamificationBar :progress="20" message="Sumá $ 1.000 más para reducir la tasa de servicio" /><AwGamificationBar :progress="70" type="collapsed" /><AwGamificationBar :progress="100" message="¡Tenés envío gratis!" /></div>`,
  () => ({}),
)
