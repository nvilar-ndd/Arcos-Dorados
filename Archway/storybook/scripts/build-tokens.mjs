// Genera src/generated/tokens.css a partir de ../tokens/archway.tokens.json.
// El JSON se exporta desde Figma (SSOT); este archivo nunca se edita a mano.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const SRC = resolve(here, '../../tokens/archway.tokens.json')
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
  return `--aw-${(VAR_ROOTS.has(root) ? rest : [root, ...rest]).join('-')}`
}
const refRe = /^\{([^}]+)\}$/
const toCss = (value) => {
  if (typeof value === 'string') {
    const m = value.match(refRe)
    if (m) {
      if (!flat.has(m[1])) throw new Error(`Alias roto: ${m[1]}`)
      return `var(${cssVar(m[1])})`
    }
  }
  return String(value)
}

const lines = []
const section = (title) => lines.push('', `  /* ${title} */`)

section('Primitives — no usar directo en componentes')
for (const [id, t] of flat) {
  if (!id.startsWith('primitives.') || id === 'primitives.number') continue
  lines.push(`  ${cssVar(id)}: ${toCss(t.$value)};`)
}
section('Semantic — la única capa que consumen los componentes')
for (const [id, t] of flat) {
  if (!id.startsWith('semantic.')) continue
  let v = toCss(t.$value)
  if (t.$type === 'fontFamily') v = `"${t.$value}", "Helvetica Neue", Arial, system-ui, sans-serif`
  lines.push(`  ${cssVar(id)}: ${v};`)
}
section('Elevación')
for (const [id, t] of flat) {
  if (!id.startsWith('shadow.')) continue
  const s = t.$value
  lines.push(`  ${cssVar(id)}: ${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color};`)
}
section('Gradientes')
for (const [id, t] of flat) {
  if (!id.startsWith('gradient.')) continue
  const stops = t.$value.map((s) => `${s.color} ${+(s.position * 100).toFixed(1)}%`).join(', ')
  lines.push(`  ${cssVar(id)}: linear-gradient(90deg, ${stops});`)
}

section('Motion')
for (const [id, t] of flat) {
  if (!id.startsWith('motion.') || t.$type === 'transition') continue
  const v = t.$type === 'cubicBezier' ? `cubic-bezier(${t.$value.join(', ')})` : toCss(t.$value)
  lines.push(`  ${cssVar(id)}: ${v};`)
}

const typeClasses = []
for (const [id, t] of flat) {
  if (!id.startsWith('typography.')) continue
  const v = t.$value
  typeClasses.push(
    `.aw-${id.split('.').slice(1).join('-')} {`,
    `  font-family: ${toCss(v.fontFamily)};`,
    `  font-size: ${toCss(v.fontSize)};`,
    `  line-height: ${toCss(v.lineHeight)};`,
    `  letter-spacing: ${toCss(v.letterSpacing)};`,
    `  font-weight: ${v.fontWeight};`,
    `  font-style: ${v.fontStyle};`,
    `}`,
  )
}

const css = `/* Generado por scripts/build-tokens.mjs desde tokens/archway.tokens.json — no editar. */
:root {${lines.join('\n')}
}

/* Estilos de texto (Figma text styles) */
${typeClasses.join('\n')}
`
mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, css)
console.log(`tokens.css: ${lines.filter((l) => l.includes('--aw-')).length} variables, ${typeClasses.filter((l) => l.startsWith('.aw-')).length} estilos de texto`)
