import type { Meta, StoryObj } from '@storybook/vue3'
import AwGamificationBar from '../src/especificos/AwGamificationBar.vue'
import web0 from '../src/especificos/AwGamificationBar.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Gamification Bar', component: AwGamificationBar, argTypes: { progress: { control: { type: 'range', min: 0, max: 100 } }, type: { control: 'inline-radio', options: ['expanded', 'collapsed'] } }, args: { progress: 27, message: '¡A solo $ 2.500 del envío gratis!', type: 'collapsed', skeleton: false } } satisfies Meta<typeof AwGamificationBar>
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
  `<div style="width:412px;display:grid;gap:16px"><AwGamificationBar>Sumá productos y desbloqueá tu <strong class="aw-label-small-bold">envío gratis</strong></AwGamificationBar><AwGamificationBar :progress="27">¡A solo <strong class="aw-label-small-bold">$ 2.500</strong> del <strong class="aw-label-small-bold">envío gratis!</strong></AwGamificationBar><AwGamificationBar :progress="100"><strong class="aw-label-small-bold">¡Felicitaciones! Alcanzaste el envío gratis</strong></AwGamificationBar><AwGamificationBar :progress="60" type="expanded" message="Expanded" /></div>`,
  () => ({}),
)
