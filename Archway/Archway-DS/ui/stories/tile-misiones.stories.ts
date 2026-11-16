import type { Meta, StoryObj } from '@storybook/vue3'
import AwMissionTile from '../src/especificos/AwMissionTile.vue'
import web0 from '../src/especificos/AwMissionTile.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Tile 💠 Misiones', component: AwMissionTile, argTypes: {}, args: { label: '50 puntos', icon: 'loyalty', skeleton: false } } satisfies Meta<typeof AwMissionTile>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWMissionTile'),
    android: kotlin(androidSrc, 'AwMissionTile'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwMissionTile },
  `<AwMissionTile label="50 puntos" icon="loyalty" /><AwMissionTile label="Cupón 2x1" /><AwMissionTile skeleton />`,
  () => ({}),
)
