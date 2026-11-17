import type { Meta, StoryObj } from '@storybook/vue3'
import AwProductCard from '../src/especificos/AwProductCard.vue'
import web0 from '../src/especificos/AwProductCard.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Product Card (Carrousel cards)', component: AwProductCard, argTypes: { size: { control: 'inline-radio', options: ['small', 'big'] } }, args: { name: 'Grand Tasty Turbo Bacon Doble', price: '$ 17.300', cents: '89', oldPrice: '$ 14.70589', disabled: false, skeleton: false, size: 'small' } } satisfies Meta<typeof AwProductCard>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWProductCard'),
    android: kotlin(androidSrc, 'AwProductCard'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwProductCard },
  `<AwProductCard name="Grand Tasty Turbo Bacon Doble" price="$ 17.300" cents="89" old-price="$ 14.70589" /><AwProductCard name="Grand Tasty Turbo Bacon Doble" price="$ 17.300" cents="89" old-price="$ 14.70589" disabled /><AwProductCard name="Grand Tasty Turbo Bacon Doble" points="8.000 pts" /><AwProductCard name="Grand Tasty Turbo Bacon Doble" points="8.000 pts" locked /><AwProductCard name="" skeleton />`,
  () => ({}),
)
