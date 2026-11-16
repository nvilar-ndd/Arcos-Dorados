import type { Meta, StoryObj } from '@storybook/vue3'
import AwButton from '../src/components/AwButton.vue'
import web0 from '../src/components/AwButton.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWButton.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwButtons.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/Button', component: AwButton, tags: ['autodocs'], argTypes: { variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] }, size: { control: 'inline-radio', options: ['large', 'medium', 'small', 'xs'] }, shape: { control: 'inline-radio', options: ['square', 'round'] } }, args: { label: 'Agregar al pedido', variant: 'primary', size: 'large', shape: 'square', loading: false, disabled: false } } satisfies Meta<typeof AwButton>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWButton', 'AWButtonStyle'),
    android: kotlin(androidSrc, 'AwButtonVariant', 'AwButtonSize', 'AwButton'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwButton },
  `<AwButton label="Primary" /><AwButton label="Secondary" variant="secondary" /><AwButton label="Ghost" variant="ghost" /><AwButton label="Medium" size="medium" /><AwButton label="Small round" size="small" shape="round" variant="secondary" /><AwButton label="XS" size="xs" /><AwButton label="Cargando" loading /><AwButton label="Disabled" disabled />`,
  () => ({}),
)
