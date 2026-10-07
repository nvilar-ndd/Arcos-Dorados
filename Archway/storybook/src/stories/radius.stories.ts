import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import RadiusPage from '../pages/RadiusPage.vue'

export default { title: 'Foundations/Radios', tags: ['!autodocs'] } satisfies Meta

export const Radios: StoryObj = {
  name: 'Radios',
  render: () => ({ setup: () => () => h(RadiusPage) }),
}
