import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import TypographyPage from '../pages/TypographyPage.vue'

const view = (v: 'scale' | 'kiosk-mode'): StoryObj => ({ render: () => ({ setup: () => () => h(TypographyPage, { view: v }) }) })

export default { title: 'Foundations/Tipografía', tags: ['!autodocs'] } satisfies Meta

export const Escala: StoryObj = { ...view('scale'), name: 'Escala ADK' }
export const ModoKiosk: StoryObj = { ...view('kiosk-mode'), name: 'Modo kiosk en ArchWay' }
