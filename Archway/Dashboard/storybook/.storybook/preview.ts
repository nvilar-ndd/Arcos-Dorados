import type { Preview } from '@storybook/vue3'
import '../src/generated/tokens.css'
import '../src/styles/docs.css'
import '../../ui/src/styles/ui.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Modo de la colección Semantic',
      defaultValue: 'light',
      toolbar: {
        title: 'Tema',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      document.documentElement.dataset.theme = String(context.globals.theme ?? 'light')
      return story()
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          'Dashboard', ['Introducción'],
          'Foundations', ['Color', 'Tipografía', 'Espaciado', 'Radios', 'Grilla'],
          'Componentes', ['Índice', '*'],
          'Estructura', ['Índice', 'UI shell — Header + PanelLeft', 'Header', 'Left panel (sidebar)', 'SubPanelLeft (navegación secundaria de Country)', '*'],
          'Uso', ['Índice', 'UI templates por contexto de navegación', '*'],
          'Convergencia',
        ],
      },
    },
  },
}

export default preview
