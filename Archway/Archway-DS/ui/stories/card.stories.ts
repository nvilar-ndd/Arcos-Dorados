import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwCard from '../src/components/AwCard.vue'
import AwProgressBar from '../src/components/AwProgressBar.vue'
import web0 from '../src/components/AwCard.vue?raw'
import web1 from '../src/components/AwProgressBar.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWContainers.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwContainers.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Card', component: AwCard, argTypes: { variant: { control: 'inline-radio', options: ['elevated', 'filled', 'outlined'] }, trailing: { control: 'inline-radio', options: ['chevron', 'more', 'none'] } }, args: { title: 'Pedido #4521', subtitle: 'Retirá en el mostrador', tag: 'En preparación', variant: 'elevated', trailing: 'chevron', selected: false } } satisfies Meta<typeof AwCard>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWCard'),
    android: kotlin(androidSrc, 'AwCardStyle', 'AwCard'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwCard, AwProgressBar },
  `<div style="display:grid;gap:16px;width:360px"><AwCard title="Elevated" subtitle="Toda la card navega" /><AwCard title="Filled" subtitle="Con menú" variant="filled" trailing="more" v-model:favorite="fav" /><AwCard title="Outlined seleccionada" variant="outlined" trailing="none" selected /><AwCard title="Con slot inferior" tag="En camino" trailing="none"><AwProgressBar :value="60" label="Avance del pedido" /></AwCard></div>`,
  () => ({ fav: ref(false) }),
)
