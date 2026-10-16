import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import SpacingPage from '../pages/SpacingPage.vue'

export default { title: 'Foundations/Espaciado y forma', tags: ['!autodocs'] } satisfies Meta

export const EspaciadoYForma: StoryObj = { name: 'Espaciado, radios, bordes y elevación', render: () => ({ setup: () => () => h(SpacingPage) }) }
