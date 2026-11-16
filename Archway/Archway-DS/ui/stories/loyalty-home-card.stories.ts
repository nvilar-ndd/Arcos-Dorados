import type { Meta, StoryObj } from '@storybook/vue3'
import AwLoyaltyCard from '../src/especificos/AwLoyaltyCard.vue'
import web0 from '../src/especificos/AwLoyaltyCard.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Loyalty home card', component: AwLoyaltyCard, argTypes: { points: { control: { type: 'range', min: 0, max: 2500, step: 50 } } }, args: { points: 1250, goal: 2000, content: 'Te faltan 750 puntos para tu próximo premio', expiry: '300 puntos vencen el 31/12', skeleton: false } } satisfies Meta<typeof AwLoyaltyCard>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWLoyaltyCard'),
    android: kotlin(androidSrc, 'AwLoyaltyCard'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwLoyaltyCard },
  `<div style="width:380px;display:grid;gap:16px"><AwLoyaltyCard :points="1250" :goal="2000" content="Te faltan 750 puntos para tu próximo premio" /><AwLoyaltyCard :points="2000" :goal="2000" /><AwLoyaltyCard :points="0" :goal="1" skeleton /></div>`,
  () => ({}),
)
