/**
 * Preset de Tailwind del Dashboard, generado desde tokens/dashboard.tokens.json (Figma SSOT).
 *
 * Cada utilidad apunta a una variable CSS --db-* (ver storybook/scripts/build-tokens.mjs),
 * así Light/Dark se resuelve solo con [data-theme="dark"] y nunca hay valores duros.
 *
 *   bg-layer-02            → var(--db-layer-02)          (Semantic › layer/02)
 *   text-text-primary      → var(--db-text-primary)      (Semantic › text/primary)
 *   border-border-02       → var(--db-border-02)         (Semantic › border/02)
 *   bg-button-red-hover    → var(--db-button-red-hover)  (Semantic › button/red-hover)
 *   p-200 / gap-100        → var(--db-spacing-200/100)   (Semantic › spacing/*)
 *   rounded-md             → var(--db-radius-md)         (Semantic › radius/md)
 *   md:*                   → breakpoint/md (768px)
 */
import type { Config } from 'tailwindcss'
import tokens from '../tokens/dashboard.tokens.json'

type TokenNode = { $value?: unknown; [key: string]: unknown }

/** Recorre un grupo de tokens y devuelve { 'a-b': 'var(--db-<prefijo>-a-b)' }. */
function toVars(group: Record<string, unknown>, prefix: string, path: string[] = []): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, node] of Object.entries(group)) {
    if (key.startsWith('$') || node === null || typeof node !== 'object') continue
    const next = [...path, key]
    if ('$value' in (node as TokenNode)) out[next.join('-')] = `var(--db-${prefix}-${next.join('-')})`
    else Object.assign(out, toVars(node as Record<string, unknown>, prefix, next))
  }
  return out
}

const sem = tokens.semantic as unknown as Record<string, Record<string, unknown>>
const COLOR_GROUPS = ['background', 'layer', 'border', 'text', 'link', 'icon', 'support', 'tag', 'button'] as const

const colors: Record<string, string | Record<string, string>> = {
  transparent: 'transparent',
  current: 'currentColor',
}
for (const group of COLOR_GROUPS) colors[group] = toVars(sem[group], group)

const spacing: Record<string, string> = { px: '1px', ...toVars(sem.spacing, 'spacing') }
const radius = toVars(sem.radius, 'radius')
const layout = toVars(tokens.layout as unknown as Record<string, unknown>, 'layout')
const modal = toVars((sem.size as Record<string, Record<string, unknown>>).modal, 'size-modal')

const screens: Record<string, string> = {}
for (const [key, node] of Object.entries(tokens.breakpoint)) {
  if (!key.startsWith('$')) screens[key] = (node as { $value: string }).$value
}

const preset: Partial<Config> = {
  theme: {
    screens,
    colors,
    spacing,
    borderRadius: { none: '0', ...radius, full: '9999px' },
    fontFamily: {
      sans: ['var(--db-font-family-default)'],
      mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
    },
    extend: {
      gap: { ...layout },
      maxWidth: { ...Object.fromEntries(Object.entries(modal).map(([k, v]) => [`modal-${k}`, v])) },
      boxShadow: {
        // Valores de los estilos remotos `Elevation/*` que usan los componentes en Figma (audit D-C05).
        // Quedan acá hasta que existan tokens de elevación propios del Dashboard.
        'raised-down': '0 16px 24px 0 rgb(41 41 41 / 0.08)',
        'bordered-down': '0 8px 16px 0 rgb(41 41 41 / 0.16)',
      },
      transitionDuration: { fast: '120ms' },
    },
  },
}

export default preset
