import type { Preview } from '@storybook/vue3'
import { create } from '@storybook/theming/create'
import '../src/generated/tokens.css'
import '../src/styles/docs.css'
import '../../ui/src/styles/ui.css'

const preview: Preview = {
  parameters: {
    // Links de las páginas Markdown con el azul de ADK (link.default, 5.00:1) en vez del celeste de Storybook (2.92:1).
    docs: { theme: create({ base: 'light', colorSecondary: '#0F62FE', fontBase: '"Speedee", "Helvetica Neue", Arial, system-ui, sans-serif' }) },
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          'ADK', ['Introducción'],
          'Foundations', ['Color', 'Tipografía', 'Espaciado y forma', 'Layout de kiosco', 'Formatos futuros'],
          'Componentes', ['Índice', '*'],
          'Pantallas',
          'Audit',
          'Convergencia',
        ],
      },
    },
  },
}

export default preview
