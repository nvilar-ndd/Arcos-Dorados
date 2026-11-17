import type { Meta, StoryObj } from '@storybook/vue3'
import AwInlineNotice from '../src/components/AwInlineNotice.vue'
import web0 from '../src/components/AwInlineNotice.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWFeedback.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwFeedback.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, NOT_COMPILED } from './_support/platform'

const meta = {
  title: 'Componentes/Core/Inline notice',
  component: AwInlineNotice,
  argTypes: { tone: { control: 'inline-radio', options: ['info', 'success', 'warning', 'critical'] } },
  args: { tone: 'info', title: 'Título', description: 'Texto del aviso.', actionLabel: 'Ver más' },
  decorators: [() => ({ template: '<div style="width:296px"><story /></div>' })],
} satisfies Meta<typeof AwInlineNotice>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Tonos: StoryObj<typeof meta> = {
  render: () => ({
    components: { AwInlineNotice },
    template: `<div style="display:flex;flex-direction:column;gap:16px">
      <AwInlineNotice tone="info" title="Info." description="Tu pedido se está preparando." />
      <AwInlineNotice tone="success" title="Listo." description="Guardamos tus cambios." />
      <AwInlineNotice tone="warning" title="Atención." description="Quedan pocas unidades." action-label="Ver detalle" />
      <AwInlineNotice tone="critical" title="Error." description="No pudimos procesar el pago." action-label="Reintentar" />
    </div>`,
  }),
}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWInlineNotice'),
    android: kotlin(androidSrc, 'AwInlineNoticeTone', 'AwInlineNotice'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwInlineNotice },
  `<AwInlineNotice tone="info" title="Info." description="Tu pedido se está preparando." /><AwInlineNotice tone="critical" description="No pudimos procesar el pago." action-label="Reintentar" />`,
  () => ({}),
)
