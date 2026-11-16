import type { Meta, StoryObj } from '@storybook/vue3'
import AwSkeleton from '../src/components/AwSkeleton.vue'
import web0 from '../src/components/AwSkeleton.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWDisplay.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwDisplay.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Skeleton', component: AwSkeleton, tags: ['autodocs'], argTypes: { type: { control: 'inline-radio', options: ['square', 'rectangle', 'circle'] } }, args: { type: 'rectangle' } } satisfies Meta<typeof AwSkeleton>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWSkeleton'),
    android: kotlin(androidSrc, 'AwSkeletonType', 'AwSkeleton'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwSkeleton },
  `<AwSkeleton type="square" /><AwSkeleton type="circle" /><div style="display:grid;gap:8px"><AwSkeleton /><AwSkeleton width="160px" /><AwSkeleton width="120px" /></div>`,
  () => ({}),
)
