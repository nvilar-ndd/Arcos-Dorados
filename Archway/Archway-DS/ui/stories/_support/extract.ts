/**
 * Recorta del archivo fuente la declaración de un componente (con su comentario de documentación),
 * para mostrar en Storybook el código real de iOS y Android sin copiarlo a mano.
 */
function cut(lines: string[], start: number): string {
  let from = start
  while (from > 0 && /^\s*(\/\/\/|\/\*\*|\*|\*\/|@Composable)/.test(lines[from - 1])) from--
  let to = start
  while (to < lines.length && lines[to] !== '}') to++
  return lines.slice(from, to + 1).join('\n')
}

export function swiftDecl(source: string, name: string): string {
  const lines = source.split('\n')
  const i = lines.findIndex(l => new RegExp(`^(public )?(struct|enum) ${name}\\b`).test(l) || new RegExp(`^\\s*func ${name}\\(`).test(l))
  if (i < 0) return `// ${name}: no encontrado`
  if (/^\s+func /.test(lines[i])) {
    let from = i
    while (from > 0 && /^\s*\/\/\//.test(lines[from - 1])) from--
    let to = i
    while (to < lines.length && lines[to] !== '    }') to++
    return lines.slice(from, to + 1).map(l => l.replace(/^ {4}/, '')).join('\n')
  }
  return cut(lines, i)
}

export function kotlinDecl(source: string, name: string): string {
  const lines = source.split('\n')
  const i = lines.findIndex(l => new RegExp(`^(fun|data class|enum class) ${name}\\b`).test(l))
  if (i < 0) return `// ${name}: no encontrado`
  const head = lines[i].trimEnd()
  if (!head.endsWith('{') && !head.endsWith('(')) return lines[i]
  return cut(lines, i)
}

/** Varias declaraciones, en orden, separadas por una línea en blanco. */
export const swift = (src: string, ...names: string[]) => names.map(n => swiftDecl(src, n)).join('\n\n')
export const kotlin = (src: string, ...names: string[]) => names.map(n => kotlinDecl(src, n)).join('\n\n')
