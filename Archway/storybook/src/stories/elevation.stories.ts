import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import ElevationPage from '../pages/ElevationPage.vue'

export default { title: 'Foundations/Elevación', tags: ['!autodocs'] } satisfies Meta

export const Elevacion: StoryObj = {
  name: 'Elevación',
  render: () => ({ setup: () => () => h(ElevationPage) }),
}
