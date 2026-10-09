import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import FormatsPage from '../pages/FormatsPage.vue'

export default { title: 'Foundations/Formatos futuros', tags: ['!autodocs'] } satisfies Meta

export const KioskTabletPantallasChicas: StoryObj = { name: 'Kiosk, Kiosk S y Tablet', render: () => ({ setup: () => () => h(FormatsPage) }) }
