import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import LayoutPage from '../pages/LayoutPage.vue'

const view = (v: 'template' | 'safe-area'): StoryObj => ({ render: () => ({ setup: () => () => h(LayoutPage, { view: v }) }) })

export default { title: 'Foundations/Layout de kiosco', tags: ['!autodocs'] } satisfies Meta

export const Plantilla: StoryObj = { ...view('template'), name: 'Plantilla 1080 × 1920' }
export const AreaAccesible: StoryObj = { ...view('safe-area'), name: 'Área accesible' }
