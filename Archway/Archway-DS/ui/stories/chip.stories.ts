import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwChip from '../src/components/AwChip.vue'
import web0 from '../src/components/AwChip.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWSelection.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwSelection.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Chip', component: AwChip, argTypes: { size: { control: 'inline-radio', options: ['medium', 'small'] } }, args: { label: 'Hamburguesas', size: 'medium', disabled: false, selected: false } } satisfies Meta<typeof AwChip>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWChip'),
    android: kotlin(androidSrc, 'AwChip'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwChip },
  `<AwChip v-model:selected="a" label="Hamburguesas" /><AwChip v-model:selected="b" label="Postres" icon="deals" /><AwChip v-model:selected="c" label="Small" size="small" /><AwChip label="Disabled" disabled />`,
  () => ({ a: ref(true), b: ref(false), c: ref(false) }),
)
