import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwProgressBar from '../src/components/AwProgressBar.vue'
import AwProgressCircle from '../src/components/AwProgressCircle.vue'
import AwPagination from '../src/components/AwPagination.vue'
import AwStepper from '../src/components/AwStepper.vue'
import web0 from '../src/components/AwProgressBar.vue?raw'
import web1 from '../src/components/AwProgressCircle.vue?raw'
import web2 from '../src/components/AwPagination.vue?raw'
import web3 from '../src/components/AwStepper.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWDisplay.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwDisplay.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Progress', component: AwProgressBar, tags: ['autodocs'], argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } }, args: { value: 40, label: 'Progreso', showLabel: true } } satisfies Meta<typeof AwProgressBar>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1 + '\n\n' + web2 + '\n\n' + web3,
    ios: swift(iosSrc, 'AWProgressBar', 'AWProgressCircle', 'AWPagination', 'AWStepper'),
    android: kotlin(androidSrc, 'AwProgressBar', 'AwProgressCircle', 'AwPagination', 'AwStepper'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwProgressBar, AwProgressCircle, AwPagination, AwStepper },
  `<div style="display:grid;gap:24px;width:328px"><AwProgressBar :value="40" label="Avance" show-label /><div style="display:flex;gap:16px;align-items:center"><AwProgressCircle :value="25" :size="24" /><AwProgressCircle :value="60" :size="48" /><AwProgressCircle :size="32" /></div><AwPagination v-model="page" :count="5" interactive /><AwStepper :step="2" :total="4" /></div>`,
  () => ({ page: ref(1) }),
)
