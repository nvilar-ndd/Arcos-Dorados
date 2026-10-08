// Genera src/generated/tokens.css a partir de ../tokens/dashboard.tokens.json.
// Semantic tiene dos modos: Light en :root y Dark en [data-theme="dark"].
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const SRC = resolve(here, '../../tokens/dashboard.tokens.json')
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
  return `--db-${(VAR_ROOTS.has(root) ? rest : [root, ...rest]).join('-')}`
}
const toCss = (value, selfId) => {
  const m = typeof value === 'string' && value.match(/^\{([^}]+)\}$/)
  if (m) {
    if (!flat.has(m[1])) throw new Error(`Alias roto: ${m[1]}`)
    // semantic/spacing/100 y primitives/spacing/100 comparten nombre de variable: usar el valor directo.
    if (selfId && cssVar(m[1]) === cssVar(selfId)) return toCss(flat.get(m[1]).$value)
    return `var(${cssVar(m[1])})`
  }
  return String(value)
}
const FALLBACK = '"Helvetica Neue", Arial, system-ui, sans-serif'

const light = []
const dark = []
for (const [id, t] of flat) {
  if (id.startsWith('primitives.')) light.push(`  ${cssVar(id)}: ${toCss(t.$value)};`)
}
for (const [id, t] of flat) {
  if (!id.startsWith('semantic.')) continue
  if (t.$type === 'fontFamily') {
    light.push(`  ${cssVar(id)}: "Speedee", ${FALLBACK};`)
    continue
  }
  const modes = t.$extensions?.modes ?? {}
  light.push(`  ${cssVar(id)}: ${toCss(modes.light ?? t.$value, id)};`)
  if (modes.dark !== undefined && modes.dark !== modes.light) dark.push(`  ${cssVar(id)}: ${toCss(modes.dark, id)};`)
}
for (const [id, t] of flat) {
  if (id.startsWith('layout.') || id.startsWith('breakpoint.')) light.push(`  ${cssVar(id)}: ${t.$value};`)
}

const typeClasses = []
for (const [id, t] of flat) {
  if (!id.startsWith('typography.')) continue
  const v = t.$value
  const family = v.fontFamily === 'Roboto Mono' ? `"Roboto Mono", ui-monospace, Menlo, monospace` : 'var(--db-font-family-default)'
  typeClasses.push(
    `.db-${id.split('.').slice(1).join('-')} {`,
    `  font-family: ${family};`,
    `  font-size: ${v.fontSize};`,
    `  line-height: ${v.lineHeight};`,
    `  letter-spacing: ${v.letterSpacing};`,
    `  font-weight: ${v.fontWeight};`,
    `}`,
  )
}

const css = `/* Generado por scripts/build-tokens.mjs desde tokens/dashboard.tokens.json — no editar. */
:root {
${light.join('\n')}
}

/* Modo Dark (colección Semantic, modo "Dark") */
[data-theme='dark'] {
${dark.join('\n')}
}

/* Estilos de texto (Figma text styles) */
${typeClasses.join('\n')}
`
mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, css)
console.log(`tokens.css: ${light.length} variables Light, ${dark.length} overrides Dark, ${typeClasses.filter((l) => l.startsWith('.db-')).length} estilos de texto`)
