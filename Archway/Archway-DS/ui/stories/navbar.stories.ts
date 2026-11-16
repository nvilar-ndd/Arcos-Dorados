import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AwNavBar from '../src/components/AwNavBar.vue'
import web0 from '../src/components/AwNavBar.vue?raw'
import iosSrc from '../../ios/Sources/ArchwayUI/Core/AWNavigation.swift?raw'
import androidSrc from '../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwNavigation.kt?raw'
import { swift, kotlin } from './_support/extract'
import { platformStory, IOS_NATIVE, NOT_COMPILED } from './_support/platform'

const meta = { title: 'Código/Core/NavBar', tags: ['!autodocs'] } satisfies Meta
export default meta

export const Plataformas = platformStory(
  {
    web: web0,
    ios: swift(iosSrc, 'AWTabLabel'),
    android: kotlin(androidSrc, 'AwNavItem', 'AwNavBar'),
    iosNote: IOS_NATIVE + ' ' + NOT_COMPILED,
    androidNote: NOT_COMPILED,
  },
  { AwNavBar },
  `<div style="width:412px"><AwNavBar v-model="tab" :items="items" /></div>`,
  () => ({ tab: ref('home'), items: [{ id: 'home', label: 'Inicio', icon: 'home' }, { id: 'deals', label: 'Cupones', icon: 'deals', badge: 3 }, { id: 'loyalty', label: 'Mis puntos', icon: 'loyalty' }, { id: 'account', label: 'Mi cuenta', icon: 'account', badge: true }] }),
)
