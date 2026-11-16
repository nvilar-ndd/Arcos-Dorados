import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwTextField from '../src/components/AwTextField.vue'
import AwSelect from '../src/components/AwSelect.vue'
import AwPinCode from '../src/components/AwPinCode.vue'
import web0 from '../src/components/AwTextField.vue?raw'
import web1 from '../src/components/AwSelect.vue?raw'
import web2 from '../src/components/AwPinCode.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWInputs.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwInputs.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/Input — Text Field · Text Area · Password · Select · PinCode', component: AwTextField, argTypes: { type: { control: 'inline-radio', options: ['text', 'email', 'tel', 'number', 'password'] }, error: { control: 'text' } }, args: { label: 'Nombre', placeholder: 'Escribí tu nombre', hint: 'Como figura en tu documento', error: '', type: 'text', multiline: false, maxlength: undefined, disabled: false, modelValue: '' } } satisfies Meta<typeof AwTextField>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1 + '\n\n' + web2,
    ios: swift(iosSrc, 'AWTextField', 'AWSelect', 'AWPinCode'),
    android: kotlin(androidSrc, 'AwTextField', 'AwSelect', 'AwPinCode'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwTextField, AwSelect, AwPinCode },
  `<div style="display:grid;gap:24px;width:324px"><AwTextField v-model="name" label="Nombre" placeholder="Escribí tu nombre" hint="Como figura en tu documento" /><AwTextField v-model="pass" label="Contraseña" type="password" placeholder="••••••" /><AwTextField v-model="mail" label="Email" error="Revisá el formato del email" /><AwTextField v-model="note" label="Comentarios" multiline :maxlength="100" placeholder="Algo que debamos saber" /><AwSelect v-model="city" label="Ciudad" :options="cities" /><AwPinCode v-model="pin" label="Código de verificación" hint="Te lo enviamos por SMS" /><AwTextField label="Disabled" placeholder="No editable" disabled /></div>`,
  () => ({ name: ref(''), pass: ref(''), mail: ref('ana@'), note: ref(''), city: ref(''), pin: ref('12'), cities: [{ value: 'caba', label: 'Buenos Aires' }, { value: 'sp', label: 'São Paulo' }, { value: 'mx', label: 'Ciudad de México' }] }),
)
