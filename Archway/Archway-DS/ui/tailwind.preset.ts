/**
 * Preset de Tailwind de ArchWay, generado desde tokens/archway.tokens.json (Figma SSOT).
 *
 * Cada utilidad apunta a una variable CSS --aw-* (storybook/scripts/build-tokens.mjs → tokens.css).
 * La escala de Tailwind se reemplaza: no existen p-4 ni bg-gray-100, sólo los tokens de ArchWay.
 *
 *   bg-button-primary-bg   → var(--aw-button-primary-bg)   (Semantic › Button/primary-bg)
 *   text-text-primary      → var(--aw-text-primary)        (Semantic › Text/primary)
 *   border-border-soft     → var(--aw-border-soft)         (Semantic › Border/soft)
 *   p-16 / gap-8           → var(--aw-spacing-16 / 8)      (Semantic › Valor/spacing/*)
 *   rounded-l              → var(--aw-radius-l)            (Semantic › Valor/radius/L)
 *   shadow-shallow-m-elev-2 → var(--aw-shadow-shallow-m-elev-2) (effect style Shallow/M.Elev-2)
 *   duration-fast / ease-standard → motion de Foundations
 * Tipografía: clases .aw-* de tokens.css (p. ej. .aw-label-large), una por text style.
 */
import type { Config } from 'tailwindcss'
import tokens from '../tokens/archway.tokens.json'

type Node = { $value?: unknown; $type?: string; [key: string]: unknown }

function vars(group: Record<string, unknown>, prefix: string, type?: string, path: string[] = []): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, node] of Object.entries(group)) {
    if (key.startsWith('$') || node === null || typeof node !== 'object') continue
    const next = [...path, key]
    const n = node as Node
    if ('$value' in n) {
      if (!type || n.$type === type) out[next.join('-')] = `var(--aw-${prefix}${next.join('-')})`
    } else Object.assign(out, vars(n as Record<string, unknown>, prefix, type, next))
  }
  return out
}

const sem = tokens.semantic as unknown as Record<string, Record<string, unknown>>
const COLOR_GROUPS = ['border', 'button', 'chip', 'feature', 'feedback', 'interactive', 'highlight', 'icon', 'link', 'surface', 'text', 'trust'] as const

const colors: Record<string, string | Record<string, string>> = { transparent: 'transparent', current: 'currentColor' }
for (const g of COLOR_GROUPS) colors[g] = vars(sem[g], `${g}-`, 'color')

const preset: Partial<Config> = {
  theme: {
    colors,
    spacing: { px: '1px', ...vars(sem.spacing, 'spacing-') },
    borderRadius: { none: '0', ...vars(sem.radius, 'radius-'), full: '9999px' },
    boxShadow: { none: 'none', ...vars(tokens.shadow as unknown as Record<string, unknown>, 'shadow-') },
    fontFamily: { sans: ['var(--aw-font-family-speedee)'] },
    transitionDuration: vars((tokens.motion as unknown as Record<string, Record<string, unknown>>).duration, 'motion-duration-'),
    transitionTimingFunction: vars((tokens.motion as unknown as Record<string, Record<string, unknown>>).easing, 'motion-easing-'),
    extend: {},
  },
}

export default preset
