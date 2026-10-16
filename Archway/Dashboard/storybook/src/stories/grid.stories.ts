import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import GridPage from '../pages/GridPage.vue'

export default { title: 'Foundations/Grilla', tags: ['!autodocs'] } satisfies Meta

export const Grilla: StoryObj = {
  name: 'Grilla',
  render: () => ({ setup: () => () => h(GridPage) }),
}
