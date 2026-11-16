import type { Meta, StoryObj } from '@storybook/vue3'
import AwTopBar from '../src/components/AwTopBar.vue'
import web0 from '../src/components/AwTopBar.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWNavigation.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwNavigation.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Top Bar', component: AwTopBar, argTypes: { leading: { control: 'inline-radio', options: ['back', 'close', 'none'] } }, args: { title: 'Mi pedido', leading: 'back', helpLabel: 'Ayuda' } } satisfies Meta<typeof AwTopBar>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'awTopBar'),
    android: kotlin(androidSrc, 'AwTopBarLeading', 'AwTopBar'),
    iosNote: IOS_NATIVE + ' ' + NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwTopBar },
  `<div style="width:412px;display:grid;gap:8px"><AwTopBar title="Mi pedido" help-label="Ayuda" /><AwTopBar title="Elegí tu local" leading="close" /></div>`,
  () => ({}),
)
