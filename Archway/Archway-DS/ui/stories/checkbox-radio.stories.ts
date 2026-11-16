import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwCheckbox from '../src/components/AwCheckbox.vue'
import AwRadio from '../src/components/AwRadio.vue'
import web0 from '../src/components/AwCheckbox.vue?raw'
import web1 from '../src/components/AwRadio.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWSelection.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwSelection.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Checkbox · Radio', component: AwCheckbox, argTypes: {}, args: { label: 'Acepto los términos', disabled: false, modelValue: false } } satisfies Meta<typeof AwCheckbox>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWCheckbox', 'AWRadio'),
    android: kotlin(androidSrc, 'AwCheckbox', 'AwRadio'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwCheckbox, AwRadio },
  `<div style="display:grid;gap:8px"><AwCheckbox v-model="a" label="Sin cebolla" /><AwCheckbox v-model="b" label="Sin pepinos" /><AwCheckbox :model-value="true" label="Disabled" disabled /><fieldset style="border:0;padding:0;margin:0"><legend class="aw-label-medium-bold">Tamaño</legend><AwRadio v-model="size" name="size" value="m" label="Mediano" /><AwRadio v-model="size" name="size" value="l" label="Grande" /><AwRadio v-model="size" name="size" value="xl" label="Extra grande" disabled /></fieldset></div>`,
  () => ({ a: ref(true), b: ref(false), size: ref('m') }),
)
