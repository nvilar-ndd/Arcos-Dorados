// Genera src/generated/tokens.css a partir de ../tokens/adk.tokens.json.
// ADK tiene un solo modo. Los semánticos son la PROPUESTA de audit/convergencia (no existen en Figma).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const SRC = resolve(here, '../../tokens/adk.tokens.json')
const OUT = resolve(here, '../src/generated/tokens.css')
const tokens = JSON.parse(readFileSync(SRC, 'utf8'))

const flat = new Map()
function walk(node, path) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$') || value === null || typeof value !== 'object') continue
    if ('$value' in value) flat.set([...path, key].join('.'), value)
    else walk(value, [...path, key])
  }
}
walk(tokens, [])

const VAR_ROOTS = new Set(['primitives', 'semantic'])
const cssVar = (id) => {
  const [root, ...rest] = id.split('.')
  return `--adk-${(VAR_ROOTS.has(root) ? rest : [root, ...rest]).join('-')}`
}
const ref = (value) => {
  const m = typeof value === 'string' && value.match(/^\{([^}]+)\}$/)
  if (!m) return null
  if (!flat.has(m[1])) throw new Error(`Alias roto: ${m[1]}`)
  return m[1]
}
const FALLBACK = '"Helvetica Neue", Arial, system-ui, sans-serif'

const vars = []
const typeClasses = []
for (const [id, t] of flat) {
  const v = t.$value
  if (t.$type === 'typography') {
    typeClasses.push(
      `.adk-${id.split('.').slice(1).join('-')} {`,
      `  font-family: var(--adk-font-family);`,
      `  font-size: ${v.fontSize};`,
      `  line-height: ${v.lineHeight};`,
      `  letter-spacing: ${v.letterSpacing};`,
      `  font-weight: ${v.fontWeight};`,
      ...(v.textDecoration ? [`  text-decoration: ${v.textDecoration};`] : []),
      `}`,
    )
    continue
  }
  let css
  if (t.$type === 'fontFamily') css = `"${v}", ${FALLBACK}`
  else if (t.$type === 'shadow') css = `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`
  else if (t.$type === 'gradient') css = `linear-gradient(90deg, ${v.map((s) => `${s.color} ${(s.position * 100).toFixed(1)}%`).join(', ')})`
  else {
    const target = ref(v)
    // semantic.spacing.16 y primitives.dimension.16 son variables distintas: el alias se mantiene como var().
    css = target ? `var(${cssVar(target)})` : String(v)
  }
  vars.push(`  ${cssVar(id)}: ${css};`)
}

const css = `/* Generado por scripts/build-tokens.mjs desde tokens/adk.tokens.json — no editar. */
:root {
${vars.join('\n')}
}

/* Estilos de texto (Figma text styles ADK/*) */
${typeClasses.join('\n')}
`
mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, css)
console.log(`tokens.css: ${vars.length} variables, ${typeClasses.filter((l) => l.startsWith('.adk-')).length} estilos de texto`)
