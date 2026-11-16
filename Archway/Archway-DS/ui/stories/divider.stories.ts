import type { Meta, StoryObj } from '@storybook/vue3'
import AwDivider from '../src/components/AwDivider.vue'
import web0 from '../src/components/AwDivider.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWDisplay.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwDisplay.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Divider', component: AwDivider, tags: ['autodocs'], argTypes: {}, args: {} } satisfies Meta<typeof AwDivider>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWDivider'),
    android: kotlin(androidSrc, 'AwDivider'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwDivider },
  `<div style="width:320px"><AwDivider /></div>`,
  () => ({}),
)
