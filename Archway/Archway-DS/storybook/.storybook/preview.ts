import type { Preview } from '@storybook/vue3'
import '../src/generated/tokens.css'
import '../src/styles/docs.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    options: {
      storySort: {
        order: ['ArchWay', ['Introducción', 'Glosario'], 'Foundations', ['Color', 'Tipografía', 'Espaciado', 'Grilla', 'Radios', 'Elevación', 'Motion'], 'Guías'],
      },
    },
    backgrounds: { disable: true },
  },
}

export default preview
