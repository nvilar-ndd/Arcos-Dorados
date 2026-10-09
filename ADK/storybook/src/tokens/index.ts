import raw from '../../../tokens/adk.tokens.json'

export type TokenType = 'color' | 'dimension' | 'fontFamily' | 'typography' | 'shadow' | 'gradient'

export interface ArchwayMatch {
  /** Semánticos: token destino en ArchWay. */
  target?: string | null
  /** Primitivos: primitivo de ArchWay más cercano. */
  nearest?: string
  value?: string
  deltaE?: number
  match: 'Igual' | '≈ redondeo' | 'Cercano' | 'Distinto' | 'Sin equivalente'
  note?: string
}

interface RawToken {
  $type: TokenType
  $value: unknown
  $description?: string
  $extensions?: { figma?: { name: string; page?: string }; archway?: ArchwayMatch; adk?: { status: string } }
}

export interface Token {
  /** Ruta DTCG, p. ej. `semantic.text.primary` */
  id: string
  path: string[]
  type: TokenType
  value: unknown
  /** Valor final luego de seguir los alias */
  resolved: unknown
  chain: string[]
  cssVar: string
  description: string
  figmaName: string
  archway?: ArchwayMatch
  proposed: boolean
}

const REF = /^\{([^}]+)\}$/
const VAR_ROOTS = new Set(['primitives', 'semantic'])
const rawById = new Map<string, RawToken>()
const order: string[] = []

function walk(node: Record<string, unknown>, path: string[]): void {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$') || typeof value !== 'object' || value === null) continue
    const next = [...path, key]
    if ('$value' in value) {
      rawById.set(next.join('.'), value as RawToken)
      order.push(next.join('.'))
    } else walk(value as Record<string, unknown>, next)
  }
}
walk(raw as unknown as Record<string, unknown>, [])

export function cssVarOf(id: string): string {
  const [root, ...rest] = id.split('.')
  return `--adk-${(VAR_ROOTS.has(root) ? rest : [root, ...rest]).join('-')}`
}

function resolveChain(id: string): { resolved: unknown; chain: string[] } {
  const chain = [id]
  let value = rawById.get(id)?.$value
  while (typeof value === 'string') {
    const m = value.match(REF)
    if (!m) break
    if (!rawById.has(m[1])) throw new Error(`Alias roto: ${m[1]}`)
    chain.push(m[1])
    value = rawById.get(m[1])?.$value
  }
  return { resolved: value, chain }
}

export const tokens: Token[] = order.map((id) => {
  const t = rawById.get(id) as RawToken
  return {
    id,
    path: id.split('.'),
    type: t.$type,
    value: t.$value,
    ...resolveChain(id),
    cssVar: cssVarOf(id),
    description: t.$description ?? '',
    figmaName: t.$extensions?.figma?.name ?? '',
    archway: t.$extensions?.archway,
    proposed: t.$extensions?.adk?.status === 'proposed',
  }
})

export const byId = new Map(tokens.map((t) => [t.id, t]))
export function token(id: string): Token {
  const t = byId.get(id)
  if (!t) throw new Error(`Token inexistente: ${id}`)
  return t
}
export const under = (prefix: string): Token[] => tokens.filter((t) => t.id.startsWith(`${prefix}.`))
export const hex = (t: Token): string => String(t.resolved).slice(0, 7).toUpperCase()
/** `primary.gold` a partir de `primitives.color.primary.gold`. */
export const primitiveOf = (t: Token): string => t.chain[t.chain.length - 1].replace(/^primitives\.color\./, '')

// ---------- WCAG ----------
function channel(c: number): number {
  const s = c / 255
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}
export function luminance(h: string): number {
  const x = h.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(x.slice(i, i + 2), 16))
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
export const isLight = (h: string): boolean => luminance(h) > 0.4

/** Resultado de convergencia → clase del badge. */
export function matchTone(m: ArchwayMatch['match'] | undefined): 'pass' | 'large' | 'fail' | 'neutral' {
  if (m === 'Igual' || m === '≈ redondeo') return 'pass'
  if (m === 'Cercano') return 'large'
  if (m === 'Distinto') return 'fail'
  return 'neutral'
}
