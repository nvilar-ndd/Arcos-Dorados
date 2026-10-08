import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import MotionPage from '../pages/MotionPage.vue'

export default { title: 'Foundations/Motion', tags: ['!autodocs'] } satisfies Meta

export const Motion: StoryObj = {
  name: 'Motion',
  render: () => ({ setup: () => () => h(MotionPage) }),
}
