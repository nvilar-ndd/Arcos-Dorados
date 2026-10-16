#!/usr/bin/env node
/**
 * Exporta íconos e ilustraciones desde Figma (SSOT) a SVG en el repo. Siempre SVG: es el único formato
 * que usan los productos (Web, iOS y Android lo importan como vector).
 *
 *   FIGMA_TOKEN=xxxx node Archway/scripts/export-figma-assets.mjs iconos
 *   FIGMA_TOKEN=xxxx node Archway/scripts/export-figma-assets.mjs ilustraciones
 *   FIGMA_TOKEN=xxxx node Archway/scripts/export-figma-assets.mjs iconos --page="Arrows"
 *
 * Lee el manifiesto (Iconografia/iconos.json o Ilustraciones/ilustraciones.json), pide a la
 * API REST de Figma las variantes de cada component set y escribe un archivo por variante:
 *
 *   Iconografia/svg/<pagina>/<icono>/<variante>.svg
 *   Ilustraciones/svg/<pagina>/<grupo>/<ilustracion>/<variante>.svg
 *
 * Requisitos: Node 18+ (fetch nativo) y un token personal de Figma con acceso de lectura
 * a los archivos (Figma › Settings › Security › Personal access tokens, scope file_content:read).
 * No agrega dependencias.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const TOKEN = process.env.FIGMA_TOKEN
const args = Object.fromEntries(
  process.argv.slice(3).map((a) => {
    const [k, ...v] = a.replace(/^--/, '').split('=')
    return [k, v.join('=') || 'true']
  }),
)
const kind = process.argv[2]
const CONFIG = {
  iconos: { manifest: 'Iconografia/iconos.json', out: 'Iconografia' },
  ilustraciones: { manifest: 'Ilustraciones/ilustraciones.json', out: 'Ilustraciones' },
}
if (!CONFIG[kind]) {
  console.error('Uso: node export-figma-assets.mjs <iconos|ilustraciones> [--page="Nombre"]')
  process.exit(1)
}
if (!TOKEN) {
  console.error('Falta FIGMA_TOKEN (token personal de Figma con file_content:read).')
  process.exit(1)
}
const format = 'svg'

const slug = (s) =>
  s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'sin-nombre'
const chunk = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n))
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function api(path, attempt = 0) {
  const res = await fetch(`https://api.figma.com/v1${path}`, { headers: { 'X-Figma-Token': TOKEN } })
  if (res.status === 429 && attempt < 6) {
    const wait = Number(res.headers.get('retry-after') ?? 10) * 1000
    console.warn(`  límite de la API, espero ${wait / 1000}s…`)
    await sleep(wait)
    return api(path, attempt + 1)
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} en ${path}: ${await res.text()}`)
  return res.json()
}

const manifest = JSON.parse(await readFile(join(ROOT, CONFIG[kind].manifest), 'utf8'))
const key = manifest.fileKey

// 1. Lista de nodos a exportar: cada variante de cada component set (o el componente suelto).
const targets = []
for (const page of manifest.pages) {
  if (args.page && page.page !== args.page) continue
  const items = page.groups.flatMap((g) => g.items.map((it) => ({ ...it, group: g.name })))
  for (const ids of chunk(items.map((i) => i.id), 50)) {
    const data = await api(`/files/${key}/nodes?ids=${encodeURIComponent(ids.join(','))}&depth=1`)
    for (const it of items.filter((i) => ids.includes(i.id))) {
      const node = data.nodes[it.id]?.document
      if (!node) {
        console.warn(`  no encontrado en Figma: ${page.page} › ${it.name} (${it.id})`)
        continue
      }
      const base = [CONFIG[kind].out, format, slug(page.page), it.group ? slug(it.group) : null, slug(it.name)].filter(Boolean)
      const variants = node.type === 'COMPONENT_SET' ? node.children : [node]
      for (const v of variants) {
        const name = node.type === 'COMPONENT_SET' ? v.name.replace(/\s*,\s*/g, '__').replace(/=/g, '-') : 'default'
        targets.push({ id: v.id, file: join(...base, `${slug(name)}.${format}`) })
      }
    }
  }
}
console.log(`${targets.length} SVG a exportar`)

// 2. URLs de render en lotes y descarga.
let done = 0
for (const batch of chunk(targets, 100)) {
  const ids = batch.map((t) => t.id).join(',')
  const q = `ids=${encodeURIComponent(ids)}&format=svg&svg_outline_text=true&svg_include_id=false&svg_simplify_stroke=true`
  const { images } = await api(`/images/${key}?${q}`)
  await Promise.all(
    batch.map(async (t) => {
      const url = images[t.id]
      if (!url) return console.warn(`  sin render: ${t.file}`)
      const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
      const dest = join(ROOT, t.file)
      await mkdir(dirname(dest), { recursive: true })
      await writeFile(dest, buf)
    }),
  )
  done += batch.length
  console.log(`  ${done}/${targets.length}`)
}
console.log('Listo.')
