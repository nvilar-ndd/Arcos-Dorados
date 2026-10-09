/**
 * Preset de Tailwind de ADK, generado desde tokens/adk.tokens.json.
 *
 * Cada utilidad apunta a una variable CSS --adk-* (ver storybook/scripts/build-tokens.mjs). Nunca hay valores duros.
 *
 *   bg-button-primary        → var(--adk-button-primary)          (semántico propuesto)
 *   text-text-secondary      → var(--adk-text-secondary)
 *   border-border-default    → var(--adk-border-default)
 *   text-p-tertiary-green    → var(--adk-color-tertiary-green)    (primitivo: sólo donde Figma usa un color sin rol)
 *   p-16 / gap-24 / h-56     → var(--adk-spacing-16/24/56)        (spacers de la página Spaces)
 *   rounded-xs … rounded-full→ var(--adk-radius-*)
 *   border-selected          → var(--adk-border-width-selected)   (3px)
 *   shadow-bordered-down     → var(--adk-shadow-bordered-down)
 *   bg-loyalty-ab            → var(--adk-gradient-loyalty-ab)
 *
 * La escala de Tailwind se reemplaza: no existen p-4 = 1rem, bg-gray-100, etc.
 */
import type { Config } from 'tailwindcss'
import tokens from '../tokens/adk.tokens.json'

/** Recorre un grupo de tokens y devuelve { 'a-b': 'var(--adk-<prefijo>-a-b)' }. */
function toVars(group: Record<string, unknown>, prefix: string, path: string[] = []): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, node] of Object.entries(group)) {
    if (key.startsWith('$') || node === null || typeof node !== 'object') continue
    const next = [...path, key]
    if ('$value' in (node as object)) out[next.join('-')] = `var(--adk-${prefix}-${next.join('-')})`
    else Object.assign(out, toVars(node as Record<string, unknown>, prefix, next))
  }
  return out
}

const sem = tokens.semantic as unknown as Record<string, Record<string, unknown>>
const COLOR_GROUPS = ['background', 'text', 'link', 'border', 'button', 'control', 'scroll', 'feedback', 'badge'] as const

const colors: Record<string, string | Record<string, string>> = {
  transparent: 'transparent',
  current: 'currentColor',
  // Primitivos: Figma usa colores sin rol semántico (badges, textos de ilustración). Ver audit A-S01.
  p: toVars(tokens.primitives.color as unknown as Record<string, unknown>, 'color'),
}
for (const group of COLOR_GROUPS) colors[group] = toVars(sem[group], group)

const preset: Partial<Config> = {
  theme: {
    screens: { kiosk: (tokens.breakpoint.kiosk as { $value: string }).$value },
    colors,
    spacing: { px: '1px', ...toVars(sem.spacing, 'spacing') },
    borderRadius: { none: '0', ...toVars(sem.radius, 'radius') },
    borderWidth: { 0: '0', DEFAULT: 'var(--adk-border-width-default)', ...toVars(sem['border-width'], 'border-width') },
    outlineWidth: { 0: '0', focus: 'var(--adk-border-width-focus)' },
    fontFamily: { sans: ['var(--adk-font-family)'] },
    boxShadow: { none: 'none', ...toVars(tokens.shadow as unknown as Record<string, unknown>, 'shadow') },
    extend: {
      backgroundImage: toVars(tokens.gradient as unknown as Record<string, unknown>, 'gradient'),
      maxWidth: { content: 'var(--adk-layout-content-width)' },
      width: { nav: 'var(--adk-layout-nav-width)', content: 'var(--adk-layout-content-width)' },
      minHeight: { touch: 'var(--adk-layout-touch-target-min)' },
      minWidth: { touch: 'var(--adk-layout-touch-target-min)' },
      transitionDuration: { fast: '120ms' },
    },
  },
}

export default preset
