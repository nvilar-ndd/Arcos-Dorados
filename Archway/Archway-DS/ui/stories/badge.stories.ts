import type { Meta, StoryObj } from '@storybook/vue3'
import AwBadge from '../src/components/AwBadge.vue'
import web0 from '../src/components/AwBadge.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWDisplay.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwDisplay.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Badge', component: AwBadge, tags: ['autodocs'], argTypes: {}, args: { count: 3, max: 99 } } satisfies Meta<typeof AwBadge>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWBadge'),
    android: kotlin(androidSrc, 'AwBadge'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwBadge },
  `<AwBadge /><AwBadge :count="3" /><AwBadge :count="120" />`,
  () => ({}),
)
