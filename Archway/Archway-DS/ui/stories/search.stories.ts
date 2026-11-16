import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwSearch from '../src/components/AwSearch.vue'
import web0 from '../src/components/AwSearch.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWInputs.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwInputs.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Search', component: AwSearch, argTypes: {}, args: { placeholder: 'Buscar', label: 'Buscar productos', disabled: false, modelValue: '' } } satisfies Meta<typeof AwSearch>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'awSearchable'),
    android: kotlin(androidSrc, 'AwSearch'),
    iosNote: IOS_NATIVE + ' ' + NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwSearch },
  `<div style="width:360px;display:grid;gap:16px"><AwSearch v-model="q" /><AwSearch v-model="q2" /></div>`,
  () => ({ q: ref(''), q2: ref('Big Mac') }),
)
