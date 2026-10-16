import type { Config } from 'tailwindcss'
import dashboard from '../ui/tailwind.preset'

export default {
  presets: [dashboard as Config],
  content: ['../ui/src/**/*.{vue,ts}', '../ui/stories/**/*.{vue,ts}'],
  // Preflight apagado: las páginas de documentación tienen estilos propios (src/styles/docs.css).
  // Los componentes declaran su propio reset mínimo.
  corePlugins: { preflight: false },
} satisfies Config
