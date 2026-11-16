import type { Meta, StoryObj } from '@storybook/vue3'
import AwTag from '../src/components/AwTag.vue'
import web0 from '../src/components/AwTag.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWDisplay.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwDisplay.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Tag', component: AwTag, argTypes: { hierarchy: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'] } }, args: { label: 'Nuevo', hierarchy: 'primary' } } satisfies Meta<typeof AwTag>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWTag'),
    android: kotlin(androidSrc, 'AwTagHierarchy', 'AwTag'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwTag },
  `<AwTag label="Primary" /><AwTag label="Secondary" hierarchy="secondary" /><AwTag label="Tertiary" hierarchy="tertiary" icon-leading="info" />`,
  () => ({}),
)
