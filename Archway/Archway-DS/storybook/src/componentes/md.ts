/**
 * Adapta una ficha .md del repo para mostrarla en Storybook:
 * quita el título (la página lo pone arriba del embed de Figma) y convierte
 * los links relativos en links a GitHub, porque Storybook no sirve los .md.
 */
const REPO = 'https://github.com/nvilar-ndd/Arcos-Dorados/blob/main/'

export function fichaSinTitulo(content: string): string {
  return content.replace(/^# .*\n+/, '')
}

export function linksAGithub(content: string, mdPath: string): string {
  const base = mdPath.split('/').slice(0, -1)
  return content.replace(/\]\((?!https?:|mailto:|#)([^)\s]+)\)/g, (_m, rel: string) => {
    const [file, hash] = rel.split('#')
    const parts = [...base]
    for (const seg of file.split('/')) {
      if (seg === '..') parts.pop()
      else if (seg && seg !== '.') parts.push(seg)
    }
    return `](${REPO}${parts.join('/')}${hash ? `#${hash}` : ''})`
  })
}

export const ficha = (content: string, mdPath: string): string => linksAGithub(fichaSinTitulo(content), mdPath)
export const doc = (content: string, mdPath: string): string => linksAGithub(content, mdPath)
