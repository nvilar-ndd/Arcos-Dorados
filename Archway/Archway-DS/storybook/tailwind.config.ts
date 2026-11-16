import type { Config } from 'tailwindcss'
import archway from '../ui/tailwind.preset'

export default {
  presets: [archway as Config],
  content: ['../ui/src/**/*.{vue,ts}', '../ui/stories/**/*.{vue,ts}'],
  // Preflight apagado: las páginas de documentación tienen estilos propios (src/styles/docs.css).
  // Los componentes llevan la clase raíz `aw-ui`, con un reset acotado en ui/src/styles/ui.css.
  corePlugins: { preflight: false },
} satisfies Config
