import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwSwitch from '../src/components/AwSwitch.vue'
import web0 from '../src/components/AwSwitch.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWSelection.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwSelection.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Switch', component: AwSwitch, argTypes: {}, args: { label: 'Notificaciones', disabled: false, skeleton: false, modelValue: true } } satisfies Meta<typeof AwSwitch>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWSwitch'),
    android: kotlin(androidSrc, 'AwSwitch'),
    iosNote: IOS_NATIVE + ' ' + NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwSwitch },
  `<AwSwitch v-model="on" label="Notificaciones" /><AwSwitch v-model="off" aria-label="Ofertas" /><AwSwitch :model-value="true" aria-label="Disabled on" disabled /><AwSwitch aria-label="Disabled off" disabled /><AwSwitch skeleton />`,
  () => ({ on: ref(true), off: ref(false) }),
)
