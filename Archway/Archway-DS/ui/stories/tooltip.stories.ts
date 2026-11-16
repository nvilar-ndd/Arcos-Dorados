import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwTooltip from '../src/components/AwTooltip.vue'
import AwIconButton from '../src/components/AwIconButton.vue'
import web0 from '../src/components/AwTooltip.vue?raw'
import web1 from '../src/components/AwIconButton.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWFeedback.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwFeedback.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Tooltip', component: AwTooltip, argTypes: { position: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] } }, args: { text: 'Sumá 100 puntos más para tu próximo premio', position: 'bottom', pointer: true, closable: false, open: true } } satisfies Meta<typeof AwTooltip>
export default meta

export const Playground: StoryObj<typeof meta> = {
  render: args => ({
    components: { AwTooltip, AwIconButton },
    setup: () => ({ args }),
    template: `<div style="padding:96px 160px"><AwTooltip v-bind="args"><template #default="{ describedby, toggle }"><AwIconButton icon="info" label="Más información" variant="secondary" :aria-describedby="describedby" @click="toggle" /></template></AwTooltip></div>`,
  }),
}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWTooltipContent', 'awTooltip'),
    android: kotlin(androidSrc, 'AwTooltip'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwTooltip, AwIconButton },
  `<div style="padding:96px 160px;display:flex;gap:120px"><AwTooltip v-model:open="a" text="Plain: texto corto" position="top"><template #default="{ describedby, toggle }"><AwIconButton icon="info" label="Más información" variant="secondary" :aria-describedby="describedby" @click="toggle" /></template></AwTooltip><AwTooltip v-model:open="b" title="Rich" text="Con título y cuerpo, 248 de ancho." position="bottom" closable><template #default="{ describedby, toggle }"><AwIconButton icon="question" label="Ayuda" variant="secondary" :aria-describedby="describedby" @click="toggle" /></template></AwTooltip></div>`,
  () => ({ a: ref(true), b: ref(true) }),
)
