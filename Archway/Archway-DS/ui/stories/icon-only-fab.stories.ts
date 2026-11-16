import type { Meta, StoryObj } from '@storybook/vue3'
import AwIconButton from '../src/components/AwIconButton.vue'
import AwFab from '../src/components/AwFab.vue'
import web0 from '../src/components/AwIconButton.vue?raw'
import web1 from '../src/components/AwFab.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWButton.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwButtons.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Icon Only · FAB', component: AwIconButton, tags: ['autodocs'], argTypes: { variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] }, size: { control: 'inline-radio', options: ['medium', 'small', 'xs'] } }, args: { icon: 'favorite', label: 'Agregar a favoritos', variant: 'primary', size: 'medium', pressed: undefined, loading: false, disabled: false } } satisfies Meta<typeof AwIconButton>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWIconButton', 'AWFab'),
    android: kotlin(androidSrc, 'AwIconButton', 'AwFab'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwIconButton, AwFab },
  `<AwIconButton icon="search" label="Buscar" /><AwIconButton icon="close" label="Cerrar" variant="secondary" /><AwIconButton icon="more" label="Más opciones" variant="ghost" /><AwIconButton icon="add" label="Sumar" size="small" /><AwIconButton icon="cancel" label="Quitar" size="xs" variant="secondary" /><AwFab icon="add" aria-label="Nuevo pedido" /><AwFab icon="qr" label="Mi código" />`,
  () => ({}),
)
