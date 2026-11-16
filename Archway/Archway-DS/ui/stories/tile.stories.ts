import type { Meta, StoryObj } from '@storybook/vue3'
import AwTile from '../src/components/AwTile.vue'
import web0 from '../src/components/AwTile.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWContainers.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwContainers.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Tile · Category', component: AwTile, tags: ['autodocs'], argTypes: { type: { control: 'inline-radio', options: ['tile', 'category-primary', 'category-secondary'] } }, args: { label: 'Cupones', type: 'tile', icon: 'deals', skeleton: false } } satisfies Meta<typeof AwTile>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWTile'),
    android: kotlin(androidSrc, 'AwTileType', 'AwTile'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwTile },
  `<AwTile label="Cupones" icon="deals" /><AwTile label="Mis puntos" icon="loyalty" /><AwTile label="Hamburguesas y combos" type="category-primary" /><AwTile label="Postres" type="category-secondary" /><AwTile label="" skeleton />`,
  () => ({}),
)
