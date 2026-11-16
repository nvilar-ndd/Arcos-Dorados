import type { Meta, StoryObj } from '@storybook/vue3'
import AwProductCard from '../src/especificos/AwProductCard.vue'
import web0 from '../src/especificos/AwProductCard.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Product Card (Carrousel cards)', component: AwProductCard, argTypes: { size: { control: 'inline-radio', options: ['small', 'big'] } }, args: { name: 'Big Mac', price: '$ 6.900', oldPrice: '$ 8.200', points: '+150', size: 'small', disabled: false, skeleton: false } } satisfies Meta<typeof AwProductCard>
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
  `<AwProductCard name="Big Mac" price="$ 6.900" /><AwProductCard name="Cuarto de Libra con queso" price="$ 6.500" old-price="$ 7.800" points="+150" /><AwProductCard name="McFlurry Oreo" price="$ 3.200" size="big" /><AwProductCard name="Agotado" price="$ 2.900" disabled /><AwProductCard name="" price="" skeleton />`,
  () => ({}),
)
