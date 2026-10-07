import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import SpacingPage from '../pages/SpacingPage.vue'

export default { title: 'Foundations/Espaciado', tags: ['!autodocs'] } satisfies Meta

export const Espaciado: StoryObj = {
  name: 'Espaciado',
  render: () => ({ setup: () => () => h(SpacingPage) }),
}
