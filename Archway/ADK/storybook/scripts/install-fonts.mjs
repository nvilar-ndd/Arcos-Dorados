// Copia los woff2 de Speedee a storybook/fonts/ (carpeta ignorada por git).
// Uso: npm run fonts -- <ruta a la carpeta Speedee_V1.301 descomprimida>
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'

const FILES = ['Speedee_W_Rg.woff2', 'Speedee_W_Bd.woff2', 'Speedee_W_It.woff2', 'Speedee_W_BdIt.woff2']
const arg = process.argv[2]
if (!arg) {
  console.error('Uso: npm run fonts -- <ruta a Speedee_V1.301>')
  process.exit(1)
}
const root = resolve(arg.replace(/^~(?=$|\/)/, homedir()))
const dest = resolve(dirname(fileURLToPath(import.meta.url)), '../fonts')
mkdirSync(dest, { recursive: true })

function find(dir, name, depth = 0) {
  if (depth > 5 || !existsSync(dir)) return null
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (entry === name) return p
    if (statSync(p).isDirectory()) {
      const hit = find(p, name, depth + 1)
      if (hit) return hit
    }
  }
  return null
}

let missing = 0
for (const f of FILES) {
  const src = find(root, f)
  if (!src) { console.error(`✗ No encontré ${f} dentro de ${root}`); missing++; continue }
  copyFileSync(src, join(dest, basename(src)))
  console.log(`✓ ${f}`)
}
process.exit(missing ? 1 : 0)
