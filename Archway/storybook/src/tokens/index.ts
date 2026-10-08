import raw from '../../../tokens/archway.tokens.json'

export type TokenType =
  | 'color'
  | 'dimension'
  | 'number'
  | 'string'
  | 'fontFamily'
  | 'typography'
  | 'shadow'
  | 'gradient'
  | 'object'
  | 'duration'
  | 'cubicBezier'
  | 'transition'

export interface FigmaMeta {
  name: string
  collection?: 'Primitives' | 'Semantic'
  style?: 'TEXT' | 'EFFECT' | 'PAINT' | 'GRID'
  scopes?: string[]
  /** Página de documentación de Figma de la que sale el token (Motion, Grid base…) */
  page?: string
  source?: 'documentation'
}

interface RawToken {
  $type: TokenType
  $value: unknown
  $description?: string
  $extensions?: { figma?: FigmaMeta }
}

export interface Token {
  /** Ruta DTCG, p. ej. `semantic.text.primary` */
  id: string
  path: string[]
  type: TokenType
  value: unknown
  /** Valor final luego de seguir los alias */
  resolved: unknown
  /** Cadena de alias, del token al primitivo: `['semantic.text.primary', 'primitives.color.black.800']` */
  chain: string[]
  cssVar: string
  description: string
  figma: FigmaMeta
}

const REF = /^\{([^}]+)\}$/
const VAR_ROOTS = new Set(['primitives', 'semantic'])

const rawById = new Map<string, RawToken>()
const order: string[] = []

function isRawToken(node: unknown): node is RawToken {
  return typeof node === 'object' && node !== null && '$value' in node
}

function walk(node: Record<string, unknown>, path: string[]): void {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$') || typeof value !== 'object' || value === null) continue
    const next = [...path, key]
    if (isRawToken(value)) {
      const id = next.join('.')
      rawById.set(id, value)
      order.push(id)
    } else {
      walk(value as Record<string, unknown>, next)
    }
  }
}
walk(raw as unknown as Record<string, unknown>, [])

export function cssVarOf(id: string): string {
  const [root, ...rest] = id.split('.')
  return `--aw-${(VAR_ROOTS.has(root) ? rest : [root, ...rest]).join('-')}`
}

function resolveChain(id: string): { resolved: unknown; chain: string[] } {
  const chain = [id]
  let value = rawById.get(id)?.$value
  while (typeof value === 'string') {
    const match = value.match(REF)
    if (!match) break
    const target = match[1]
    if (!rawById.has(target)) throw new Error(`Alias roto: ${target}`)
    chain.push(target)
    value = rawById.get(target)?.$value
  }
  return { resolved: value, chain }
}

export const tokens: Token[] = order.map((id) => {
  const t = rawById.get(id) as RawToken
  const { resolved, chain } = resolveChain(id)
  return {
    id,
    path: id.split('.'),
    type: t.$type,
    value: t.$value,
    resolved,
    chain,
    cssVar: cssVarOf(id),
    description: t.$description ?? '',
    figma: t.$extensions?.figma ?? { name: id },
  }
})

export const byId = new Map(tokens.map((t) => [t.id, t]))
export const byFigmaName = new Map(tokens.map((t) => [t.figma.name, t]))

export function token(id: string): Token {
  const t = byId.get(id)
  if (!t) throw new Error(`Token inexistente: ${id}`)
  return t
}

export function figmaToken(name: string): Token {
  const t = byFigmaName.get(name)
  if (!t) throw new Error(`Token de Figma inexistente: ${name}`)
  return t
}

export const under = (prefix: string): Token[] => tokens.filter((t) => t.id.startsWith(`${prefix}.`))

/** Nombre corto legible del primitivo al que apunta un token (`black/800`). */
export function primitiveLabel(t: Token): string {
  const last = t.chain[t.chain.length - 1]
  const p = byId.get(last)
  return p ? p.figma.name.replace(/^color\//, '').replace(/_$/, '') : last
}

// ---------- WCAG ----------
function channel(c: number): number {
  const s = c / 255
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}
export function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}
export type WcagLevel = 'AAA' | 'AA' | 'AA grande' | 'Falla'
export function wcagText(ratio: number): WcagLevel {
  if (ratio >= 7) return 'AAA'
  if (ratio >= 4.5) return 'AA'
  if (ratio >= 3) return 'AA grande'
  return 'Falla'
}
export const hex = (t: Token): string => String(t.resolved).slice(0, 7)
