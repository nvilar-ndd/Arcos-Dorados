// Genera los tokens y los íconos de ArchWay para iOS (SwiftUI) y Android (Jetpack Compose)
// a partir de tokens/archway.tokens.json (export de Figma, SSOT) e icons/archway-icons.json.
//
//   node scripts/build-platform-tokens.mjs
//
// Salidas (no editar a mano):
//   ios/Sources/ArchwayUI/Tokens/AWTokens.swift
//   ios/Sources/ArchwayUI/Resources/Icons.xcassets/aw.<icono>.imageset/*
//   android/archway-ui/src/main/java/com/arcosdorados/archway/tokens/AwTokens.kt
//   android/archway-ui/src/main/java/com/arcosdorados/archway/icons/AwIcons.kt
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tokens = JSON.parse(readFileSync(resolve(root, 'tokens/archway.tokens.json'), 'utf8'))
const icons = JSON.parse(readFileSync(resolve(root, 'icons/archway-icons.json'), 'utf8')).icons

const flat = new Map()
;(function walk(node, path) {
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$') || v === null || typeof v !== 'object') continue
    if ('$value' in v) flat.set([...path, k].join('.'), v)
    else walk(v, [...path, k])
  }
})(tokens, [])

const resolveValue = (v) => {
  const m = typeof v === 'string' && v.match(/^\{([^}]+)\}$/)
  if (!m) return v
  const t = flat.get(m[1])
  if (!t) throw new Error(`Alias roto: ${m[1]}`)
  return resolveValue(t.$value)
}
const px = (v) => parseFloat(String(resolveValue(v)))
const camel = (s) => s.replace(/[-_/ ](\w)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1')
const pascal = (s) => camel(s).replace(/^\w/, (c) => c.toUpperCase())
const hexParts = (hex) => {
  const h = hex.replace('#', '')
  const n = (i) => parseInt(h.slice(i, i + 2), 16)
  return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 }
}
const write = (rel, content) => {
  const out = resolve(root, rel)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, content)
  return rel
}
const HEADER = 'Generado por scripts/build-platform-tokens.mjs desde tokens/archway.tokens.json (Figma SSOT). No editar a mano.'

// ── Colecciones ────────────────────────────────────────────────────────────────
const semColors = [...flat].filter(([id, t]) => id.startsWith('semantic.') && t.$type === 'color')
const spacing = Object.entries(tokens.semantic.spacing).filter(([k]) => !k.startsWith('$'))
const radius = Object.entries(tokens.semantic.radius).filter(([k]) => !k.startsWith('$'))
const typography = [...flat].filter(([id]) => id.startsWith('typography.'))
const shadows = [...flat].filter(([id]) => id.startsWith('shadow.'))
const durations = Object.entries(tokens.motion.duration).filter(([k]) => !k.startsWith('$'))
const easings = Object.entries(tokens.motion.easing).filter(([k]) => !k.startsWith('$'))
const colorName = (id) => camel(id.replace('semantic.', '').replace(/\./g, '-'))

/** Tope de crecimiento con el tamaño de letra del sistema (Typography › Handoff, 16/10/2026). */
const scaleCap = (id) => (id.startsWith('typography.text.') ? 2.0 : 1.3)

// ── iOS ───────────────────────────────────────────────────────────────────────
const swiftColor = ([id, t]) => {
  const { r, g, b, a } = hexParts(resolveValue(t.$value))
  const f = (n) => (n / 255).toFixed(4)
  return `    /// ${t.$extensions?.figma?.name ?? id}${t.$description ? ` — ${t.$description.replace(/\s+/g, ' ').trim()}` : ''}
    public static let ${colorName(id)} = Color(.sRGB, red: ${f(r)}, green: ${f(g)}, blue: ${f(b)}, opacity: ${a.toFixed(3)})`
}
const swiftType = ([id, t]) => {
  const v = t.$value
  const name = camel(id.replace('typography.', '').replace(/\./g, '-'))
  const weight = v.fontWeight === 700 ? '.bold' : '.regular'
  return `    public static let ${name} = AWTextStyle(size: ${px(v.fontSize)}, lineHeight: ${px(v.lineHeight)}, tracking: ${px(v.letterSpacing)}, weight: ${weight}, italic: ${v.fontStyle === 'italic'}, maxScale: ${scaleCap(id)})`
}
const swiftShadow = ([id, t]) => {
  const s = t.$value
  const { a } = hexParts(s.color)
  return `    public static let ${camel(id.replace('shadow.', '').replace(/\./g, '-'))} = AWShadow(opacity: ${a.toFixed(2)}, radius: ${px(s.blur) / 2}, x: ${px(s.offsetX)}, y: ${px(s.offsetY)})`
}

const swift = `// ${HEADER}
import SwiftUI

/// Colores semánticos de ArchWay (colección Semantic, modo Light). Los primitivos no se exponen.
public enum AWColor {
${semColors.map(swiftColor).join('\n')}
}

/// Espaciado (Valor/spacing/*), en pt.
public enum AWSpacing {
${spacing.map(([k, t]) => `    public static let s${k}: CGFloat = ${px(t.$value)}`).join('\n')}
}

/// Radios (Valor/radius/*), en pt. \`xxxl\` = píldora / círculo.
public enum AWRadius {
${radius.map(([k, t]) => `    public static let ${k}: CGFloat = ${px(t.$value)}`).join('\n')}
}

/// Estilo de texto de Figma. \`maxScale\` es el tope con el tamaño de letra del sistema:
/// Display / Heading / Label +30 %, Body el doble (acordado con iOS y Android el 16/10/2026).
public struct AWTextStyle: Sendable {
    public let size: CGFloat
    public let lineHeight: CGFloat
    public let tracking: CGFloat
    public let weight: Font.Weight
    public let italic: Bool
    public let maxScale: CGFloat
}

/// Los 20 text styles de ArchWay.
public enum AWTypography {
${typography.map(swiftType).join('\n')}
}

/// Sombra de un effect style (Shallow / Deep). \`radius\` = blur / 2 (convención de SwiftUI).
public struct AWShadow: Sendable {
    public let opacity: Double
    public let radius: CGFloat
    public let x: CGFloat
    public let y: CGFloat
}

public enum AWElevation {
${shadows.map(swiftShadow).join('\n')}
}

/// Motion de Foundations (página Motion).
public enum AWMotion {
${durations.map(([k, t]) => `    public static let ${k}: Double = ${parseFloat(t.$value) / 1000}`).join('\n')}
${easings.map(([k, t]) => `    public static let ${camel(k)} = Animation.timingCurve(${t.$value.join(', ')}, duration: AWMotion.fast)`).join('\n')}
}
`
const outputs = [write('ios/Sources/ArchwayUI/Tokens/AWTokens.swift', swift)]

// Íconos iOS: Asset Catalog con SVG (template, preserva el vector)
const xcassets = resolve(root, 'ios/Sources/ArchwayUI/Resources/Icons.xcassets')
rmSync(xcassets, { recursive: true, force: true })
write('ios/Sources/ArchwayUI/Resources/Icons.xcassets/Contents.json', JSON.stringify({ info: { author: 'xcode', version: 1 } }, null, 2))
const svgOf = (icon) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 ${icon.viewBox} ${icon.viewBox}">${icon.paths
    .map((p) => `<path d="${p.d}"${p.evenOdd ? ' fill-rule="evenodd" clip-rule="evenodd"' : ''} fill="#292929"/>`)
    .join('')}</svg>\n`
for (const [name, icon] of Object.entries(icons)) {
  const dir = `ios/Sources/ArchwayUI/Resources/Icons.xcassets/aw.${name}.imageset`
  write(`${dir}/aw.${name}.svg`, svgOf(icon))
  write(
    `${dir}/Contents.json`,
    JSON.stringify(
      {
        images: [{ filename: `aw.${name}.svg`, idiom: 'universal' }],
        info: { author: 'xcode', version: 1 },
        properties: { 'preserves-vector-representation': true, 'template-rendering-intent': 'template' },
      },
      null,
      2,
    ),
  )
}
outputs.push(`ios/Sources/ArchwayUI/Resources/Icons.xcassets (${Object.keys(icons).length} íconos)`)

// ── Android ───────────────────────────────────────────────────────────────────
const ktColor = ([id, t]) => {
  const { r, g, b, a } = hexParts(resolveValue(t.$value))
  const argb = [Math.round(a * 255), r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('').toUpperCase()
  return `    /** ${t.$extensions?.figma?.name ?? id} */\n    val ${colorName(id)} = Color(0x${argb})`
}
const ktType = ([id, t]) => {
  const v = t.$value
  const name = camel(id.replace('typography.', '').replace(/\./g, '-'))
  return `    val ${name} = AwTextStyle(size = ${px(v.fontSize)}f, lineHeight = ${px(v.lineHeight)}f, tracking = ${px(v.letterSpacing)}f, weight = FontWeight.${v.fontWeight === 700 ? 'Bold' : 'Normal'}, italic = ${v.fontStyle === 'italic'}, maxScale = ${scaleCap(id)}f)`
}
const ktShadow = ([id, t]) => {
  const s = t.$value
  return `    val ${camel(id.replace('shadow.', '').replace(/\./g, '-'))} = AwShadow(offsetY = ${px(s.offsetY)}.dp, blur = ${px(s.blur)}.dp, color = Color(0x${(() => {
    const { r, g, b, a } = hexParts(s.color)
    return [Math.round(a * 255), r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('').toUpperCase()
  })()}))`
}

const kotlin = `// ${HEADER}
package com.arcosdorados.archway.tokens

import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/** Colores semánticos de ArchWay (colección Semantic, modo Light). Los primitivos no se exponen. */
object AwColor {
${semColors.map(ktColor).join('\n')}
}

/** Espaciado (Valor/spacing/…). */
object AwSpacing {
${spacing.map(([k, t]) => `    val s${k}: Dp = ${px(t.$value)}.dp`).join('\n')}
}

/** Radios (Valor/radius/…). \`xxxl\` = píldora / círculo. */
object AwRadius {
${radius.map(([k, t]) => `    val ${k}: Dp = ${px(t.$value)}.dp`).join('\n')}
}

/**
 * Estilo de texto de Figma en sp. \`maxScale\` es el tope de fontScale:
 * Display / Heading / Label 1,3 · Body 2,0 (acordado con iOS y Android el 16/10/2026).
 */
@Immutable
data class AwTextStyle(
    val size: Float,
    val lineHeight: Float,
    val tracking: Float,
    val weight: FontWeight,
    val italic: Boolean,
    val maxScale: Float,
)

/** Los 20 text styles de ArchWay. */
object AwTypography {
${typography.map(ktType).join('\n')}
}

@Immutable
data class AwShadow(val offsetY: Dp, val blur: Dp, val color: Color)

object AwElevation {
${shadows.map(ktShadow).join('\n')}
}

/** Motion de Foundations (página Motion). */
object AwMotion {
${durations.map(([k, t]) => `    const val ${k.toUpperCase()}: Int = ${parseInt(t.$value)}`).join('\n')}
${easings.map(([k, t]) => `    val ${camel(k)} = CubicBezierEasing(${t.$value.map((n) => `${n}f`).join(', ')})`).join('\n')}
}
`
outputs.push(write('android/archway-ui/src/main/java/com/arcosdorados/archway/tokens/AwTokens.kt', kotlin))

const ktIcon = ([name, icon]) => `    val ${pascal(name)}: ImageVector by lazy {
        ImageVector.Builder(name = "aw.${name}", defaultWidth = 24.dp, defaultHeight = 24.dp, viewportWidth = ${icon.viewBox}f, viewportHeight = ${icon.viewBox}f)
${icon.paths
  .map(
    (p) =>
      `            .addPath(pathData = PathParser().parsePathString("${p.d}").toNodes(), pathFillType = PathFillType.${p.evenOdd ? 'EvenOdd' : 'NonZero'}, fill = SolidColor(Color.Black))`,
  )
  .join('\n')}
            .build()
    }`
const kotlinIcons = `// Generado por scripts/build-platform-tokens.mjs desde icons/archway-icons.json (Iconography, Figma). No editar a mano.
package com.arcosdorados.archway.icons

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.PathParser
import androidx.compose.ui.unit.dp

/** Íconos de Iconography (24px, Outline). Se tiñen con \`Icon(tint = AwColor.icon…)\`. */
object AwIcons {
${Object.entries(icons).map(ktIcon).join('\n\n')}
}
`
outputs.push(write('android/archway-ui/src/main/java/com/arcosdorados/archway/icons/AwIcons.kt', kotlinIcons))

console.log(`Tokens de plataforma:\n  ${outputs.join('\n  ')}`)
console.log(`  ${semColors.length} colores · ${spacing.length} espaciados · ${radius.length} radios · ${typography.length} estilos · ${shadows.length} sombras · ${Object.keys(icons).length} íconos`)
