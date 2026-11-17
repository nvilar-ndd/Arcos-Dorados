import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwListItem from '../src/components/AwListItem.vue'
import AwSwitch from '../src/components/AwSwitch.vue'
import AwIcon from '../src/components/AwIcon.vue'
import web0 from '../src/components/AwListItem.vue?raw'
import web1 from '../src/components/AwSwitch.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWContainers.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwContainers.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Componentes/Core/List Item', component: AwListItem, argTypes: {}, args: { title: 'Mis datos', subtitle: 'Nombre, email y teléfono', leadingIcon: 'account', trailingIcon: 'chevron-right', divider: true, disabled: false, interactive: true } } satisfies Meta<typeof AwListItem>
export default meta

export const Playground: StoryObj<typeof meta> = {}

export const Plataformas = platformStory(
  {
    web: web0 + '\n\n' + web1,
    ios: swift(iosSrc, 'AWListItem'),
    android: kotlin(androidSrc, 'AwListItem'),
    iosNote: NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwListItem, AwSwitch, AwIcon },
  `<div style="width:412px"><AwListItem title="Mis datos" subtitle="Nombre, email y teléfono" leading-icon="account" divider interactive><template #trailing><AwIcon name="chevron-right" /></template></AwListItem><AwListItem title="Notificaciones" leading-icon="info" divider><template #trailing><AwSwitch v-model="n" aria-label="Notificaciones" /></template></AwListItem><AwListItem title="Ayuda" leading-icon="question" disabled interactive /></div>`,
  () => ({ n: ref(true) }),
)
