import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import ColorPage from '../pages/ColorPage.vue'

type View = 'semantic' | 'primitives' | 'contrast' | 'illustration'
const view = (v: View): StoryObj => ({ render: () => ({ setup: () => () => h(ColorPage, { view: v }) }) })

export default { title: 'Foundations/Color', tags: ['!autodocs'] } satisfies Meta

export const Semanticos: StoryObj = { ...view('semantic'), name: 'Semánticos' }
export const Primitivos: StoryObj = { ...view('primitives'), name: 'Primitivos' }
export const Contraste: StoryObj = { ...view('contrast'), name: 'Contraste' }
export const Ilustracion: StoryObj = { ...view('illustration'), name: 'Ilustración' }
