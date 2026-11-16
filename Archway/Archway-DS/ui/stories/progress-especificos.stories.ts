import type { Meta, StoryObj } from '@storybook/vue3'
import AwBenefitsProgress from '../src/especificos/AwBenefitsProgress.vue'
import web0 from '../src/especificos/AwBenefitsProgress.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Loading & progress 💠', component: AwBenefitsProgress, argTypes: { type: { control: 'inline-radio', options: ['beneficios', 'misiones'] }, value: { control: { type: 'range', min: 0, max: 100 } } }, args: { value: 60, type: 'beneficios', label: 'Avance del beneficio' } } satisfies Meta<typeof AwBenefitsProgress>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWProgressBarTrack'),
    android: kotlin(androidSrc, 'AwBenefitsProgressType', 'AwBenefitsProgress'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwBenefitsProgress },
  `<div style="display:grid;gap:16px"><AwBenefitsProgress :value="60" label="Beneficio" /><AwBenefitsProgress :value="40" type="misiones" label="Misión" /></div>`,
  () => ({}),
)
