import type { Meta, StoryObj } from '@storybook/vue3'
import AwBanner from '../src/especificos/AwBanner.vue'
import web0 from '../src/especificos/AwBanner.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Específicos/Banner', component: AwBanner, tags: ['autodocs'], argTypes: {}, args: { alt: 'Promoción de la semana', skeleton: true } } satisfies Meta<typeof AwBanner>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWBanner'),
    android: kotlin(androidSrc, 'AwBanner'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwBanner },
  `<div style="width:380px"><AwBanner alt="Promoción" skeleton /></div>`,
  () => ({}),
)
