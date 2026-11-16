import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwDialog from '../src/especificos/AwDialog.vue'
import AwButton from '../src/components/AwButton.vue'
import web0 from '../src/especificos/AwDialog.vue?raw'
import web1 from '../src/components/AwButton.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Especificos/AWEspecificos.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/especificos/AwEspecificos.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Específicos/Dialog 💠 Pop-up dashboard' } satisfies Meta
export default meta

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWDialog'),
    android: kotlin(androidSrc, 'AwDialog'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwDialog, AwButton },
  `<AwButton label="Abrir pop-up" @click="open = true" /><AwDialog v-model:open="open" title="¡Nuevo en el menú!" primary-label="Ver producto" secondary-label="Ahora no" @primary="open = false" @secondary="open = false"><p class="aw-text-body-medium text-text-secondary">Probá la nueva línea de postres por tiempo limitado.</p></AwDialog>`,
  () => ({ open: ref(false) }),
)
