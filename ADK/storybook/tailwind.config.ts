import type { Config } from 'tailwindcss'
import adk from '../ui/tailwind.preset'

export default {
  presets: [adk as Config],
  content: ['../ui/src/**/*.{vue,ts}', '../ui/stories/**/*.{vue,ts}'],
  // Preflight apagado: las páginas de documentación tienen estilos propios (src/styles/docs.css)
  // y los componentes declaran su reset mínimo (.adk-ui).
  corePlugins: { preflight: false },
} satisfies Config
