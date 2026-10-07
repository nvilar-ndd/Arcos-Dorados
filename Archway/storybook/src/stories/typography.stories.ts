import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import TypographyPage from '../pages/TypographyPage.vue'

export default { title: 'Foundations/Tipografía', tags: ['!autodocs'] } satisfies Meta

export const Tipografia: StoryObj = {
  name: 'Tipografía',
  render: () => ({ setup: () => () => h(TypographyPage) }),
}
