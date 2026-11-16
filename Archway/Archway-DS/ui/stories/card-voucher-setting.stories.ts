import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwVoucherCard from '../src/especificos/AwVoucherCard.vue'
import AwSettingCard from '../src/especificos/AwSettingCard.vue'
import web0 from '../src/especificos/AwVoucherCard.vue?raw'
import web1 from '../src/especificos/AwSettingCard.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Específicos/Card Voucher · Setting', component: AwVoucherCard, tags: ['autodocs'], argTypes: {}, args: { headline: '2x1 en McFlurry', subhead: 'Cupón', support: ['Válido hasta el 30/11', 'Sólo en el local'], tag: 'Nuevo', actionLabel: 'Ver cupón' } } satisfies Meta<typeof AwVoucherCard>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWVoucherCard', 'AWSettingCard'),
    android: kotlin(androidSrc, 'AwVoucherCard', 'AwSettingCard'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwVoucherCard, AwSettingCard },
  `<div style="width:380px;display:grid;gap:16px"><AwVoucherCard headline="2x1 en McFlurry" subhead="Cupón" :support="['Válido hasta el 30/11', 'Sólo en el local']" tag="Nuevo" /><AwSettingCard v-model="push" headline="Notificaciones" supporting="Te avisamos cuando tu pedido esté listo" /><AwSettingCard v-model="mail" headline="Novedades por email" /></div>`,
  () => ({ push: ref(true), mail: ref(false) }),
)
