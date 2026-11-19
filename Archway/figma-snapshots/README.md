# Figma snapshots

Fotos de los archivos de Figma (ArchWay Foundations, Design Resources CORE, Dashboard, ADK) en el momento de cada revisión. Sirven para que la próxima revisión sepa **exactamente** qué cambió en Figma, en lugar de comparar contra la documentación.

| Archivo | Contenido |
|---|---|
| `archway-primitives.txt` | Variables Primitives: `nombre\|tipo\|valor\|scopes\|codeSyntax\|oculto\|descripción` |
| `archway-semantic.txt` | Variables Semantic: `nombre\|tipo\|valor\|scopes\|codeSyntax\|descripción` |
| `dashboard-components.txt` | Component sets con cantidad de variantes y componentes sueltos de *Components* |
| `pages.txt` | Huella de cada página: cantidad de nodos, largo del texto y hash de todos los textos. Desde 2026-11-19 incluye también las páginas de *Design Resources CORE – Archway* |
| `core-components.txt` | Desde 2026-11-16: component sets de *Design Resources CORE – Archway* por página, con cantidad de variantes e id. Desde 2026-11-17 suma tamaño del set y un hash de la estructura (para detectar cambios visuales sin texto nuevo). Desde 2026-11-19 el hash es la **v2**, documentada abajo |

Las variables de Dashboard y ADK se comparan contra `Dashboard/tokens/dashboard.tokens.json` y `ADK/tokens/adk.tokens.json`, que ya las registran.

## Cómo se calcula la huella de página

Script de sólo lectura vía Figma MCP (`use_figma`), una página por llamada:

```js
const h = (s) => { let x = 5381; for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x.toString(16) }
await figma.setCurrentPageAsync(page)
const nodes = page.findAll(() => true)
const txt = nodes.filter((n) => n.type === 'TEXT').map((n) => n.characters).join('\u0001')
return [page.id, page.name.trim(), nodes.length, txt.length, h(txt)].join('|')
```

Si el hash de una página cambia, se revisa esa página en detalle. Si cambia sólo la cantidad de nodos, el cambio es visual (sin texto nuevo).

## Variables de ArchWay Foundations

Una sola llamada de sólo lectura. Filas en el orden del panel de variables de Figma (`variableIds` de la colección), primer modo. Las descripciones se guardan **normalizadas**: entidades HTML resueltas (`&#39;` → `'`, `&quot;` → `"`, `&amp;` → `&`) y espacios/saltos de línea colapsados a un espacio, sin espacios al principio ni al final. Si sólo cambia el orden de las filas, no hay cambio de contenido: se anota en el Historial y no se toca la documentación.

```js
const cols = await figma.variables.getLocalVariableCollectionsAsync()
const all = await figma.variables.getLocalVariablesAsync()
const byId = Object.fromEntries(all.map((v) => [v.id, v]))
const hx = (n) => Math.round(n * 255).toString(16).padStart(2, '0')
const un = (s) => s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
const out = {}
for (const c of cols) {
  const m = c.modes[0].modeId
  out[c.name] = c.variableIds.map((id) => {
    const v = byId[id], val = v.valuesByMode[m]
    let s
    if (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') s = '>' + (byId[val.id]?.name ?? val.id)
    else if (v.resolvedType === 'COLOR') s = '#' + hx(val.r) + hx(val.g) + hx(val.b) + (val.a !== undefined && val.a < 1 ? hx(val.a) : '')
    else s = String(typeof val === 'number' ? Math.round(val * 10000) / 10000 : val)
    const t = { COLOR: 'C', FLOAT: 'F', STRING: 'S', BOOLEAN: 'B' }[v.resolvedType]
    const cs = Object.entries(v.codeSyntax || {}).map(([k, x]) => k + ':' + x).join(',')
    const f = [v.name, t, s, v.scopes.join(','), cs]
    if (c.name === 'Primitives') f.push(v.hiddenFromPublishing ? 'true' : '')
    f.push(un(v.description || ''))
    return f.join('|')
  })
}
return out
```

Para comparar sin traer todo el texto, se puede devolver `h(fila)` por variable (mismo `h` djb2 de arriba) y calcular lo mismo sobre la foto anterior (djb2 sobre unidades UTF-16, igual que `charCodeAt`).

## Hash de estructura de component sets (v2)

Una página de *Design Resources CORE – Archway* por llamada. Lista los component sets y los componentes sueltos (los `COMPONENT` cuyo padre no es un `COMPONENT_SET`), en el orden de `findAllWithCriteria`, y devuelve también la huella de la página:

```js
const PAGE_ID = '424:440' // una página por llamada
const h = (s) => { let x = 5381; for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x.toString(16) }
const r = (v) => typeof v === 'number' ? Math.round(v * 10) / 10 : (v === figma.mixed ? 'mixed' : (v ?? ''))
const hx = (c) => [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('')
const paints = (p) => (p === figma.mixed || !Array.isArray(p)) ? 'mixed' : p.filter((x) => x.visible !== false).map((x) => x.type === 'SOLID'
  ? hx(x.color) + (x.opacity !== undefined && x.opacity < 1 ? '@' + r(x.opacity) : '') + (x.boundVariables && x.boundVariables.color ? '~' + x.boundVariables.color.id.split('/').pop() : '')
  : x.type).join(',')
const sig = (n) => [n.type, n.name, r(n.width), r(n.height),
  'fills' in n ? paints(n.fills) : '', 'strokes' in n ? paints(n.strokes) : '',
  'strokeWeight' in n ? r(n.strokeWeight) : '', 'cornerRadius' in n ? r(n.cornerRadius) : '',
  'layoutMode' in n ? [n.layoutMode, r(n.itemSpacing), r(n.paddingTop), r(n.paddingRight), r(n.paddingBottom), r(n.paddingLeft)].join(',') : '',
  n.type === 'TEXT' ? n.characters : ''].join('|')
const page = await figma.getNodeByIdAsync(PAGE_ID)
await figma.setCurrentPageAsync(page)
const nodes = page.findAll(() => true)
const txt = nodes.filter((n) => n.type === 'TEXT').map((n) => n.characters).join('\u0001')
const comps = page.findAllWithCriteria({ types: ['COMPONENT_SET', 'COMPONENT'] })
  .filter((n) => !(n.type === 'COMPONENT' && n.parent && n.parent.type === 'COMPONENT_SET'))
const rows = comps.map((c) => [page.name.trim(), c.name,
  c.type === 'COMPONENT_SET' ? c.children.filter((k) => k.type === 'COMPONENT').length : 1,
  c.id, r(c.width) + 'x' + r(c.height),
  h([c, ...c.findAll(() => true)].map(sig).join('\n'))].join('|'))
return { page: [page.id, page.name.trim(), nodes.length, txt.length, h(txt)].join('|'), rows }
```

La firma de cada nodo incluye tipo, nombre, medidas (redondeadas a 0,1), fills y strokes visibles (hex, opacidad y variable enlazada), grosor de trazo, radio, auto layout (modo, gap y paddings) y el texto. Un cambio de color, radio o espaciado que no mueva el tamaño del set cambia el hash.

Páginas que se recorren: de *Utilidades* a *Tile 💠 Misiones* (se omiten *Cover*, *Índice*, *Nuestas bases* y los separadores). Ids de página en `pages.txt`.

> **Nota (2026-11-19):** el hash de las fotos del 2026-11-17 no se documentó y no se puede reproducir. Las fotos desde 2026-11-19 usan la v2 y no se comparan por hash con las anteriores. Nombre, variantes, id y tamaño sí son comparables.

## Historial

| Fecha | Cambios detectados |
|---|---|
| 2026-10-15 | ArchWay: renombre y limpieza de variables de color (Background/Layer → Surface, naming, scopes, codeSyntax Android). Dashboard: nuevo `Empty state`, 2 descripciones de variables eliminadas. ADK: sin cambios. Primera foto con huellas de página |
| 2026-10-16 | Primer relevamiento de [Iconography](../Iconografia/iconos.json) (216 íconos) e [Illustrations Guide](../Ilustraciones/ilustraciones.json) (213 componentes). Los manifiestos JSON sirven como foto de base |
| 2026-11-16 | ArchWay: sin cambios de valores en variables ni estilos; primitivos `violet` sin scopes; *Colors* suma guía de uso, glosario (17), changelog y paleta de ilustración; *Typography* suma topes de tamaño de letra del sistema, changelog y fichas Roboto; *Utilities* suma la plantilla `Header` para componentes. Dashboard: variables sin cambios; `Card_list` 8 → 9 variantes (`State=change-order`) y exploraciones `Card_list2/3`; nueva IA del menú izquierdo v-03/11/26 aplicada al `Header+PanelLeft`; página separadora *Structure*. ADK: sin cambios. *Cover* de ArchWay no se relevó Primer relevamiento de **Design Resources CORE – Archway**: 33 páginas y 76 componentes o component sets, documentados en 19 fichas Core y 10 Específicos |
| 2026-11-17 | ArchWay Foundations: sin cambios (variables y huellas de página iguales). Design Resources CORE: componente nuevo **Inline notice** (5699:578, 4 tonos); la página *Input* pasa a llamarse *Input text field*; ajustes de medidas en Button, Chip, Checkbox/Radio, Input, Tooltip, Card, Top Bar, Tile, NavBar, Toast y en los Específicos Header, Gamification Bar, Loyalty home card, Card / Voucher, Product Card, Pin y Dialog. Web ajustado a paridad visual en Storybook. Dashboard y ADK: no se revisaron (se copian las fotos del 16/11) |
| 2026-11-19 | ArchWay Foundations: sin cambios de contenido (119 Primitives y 126 Semantic con mismos valores, scopes, codeSyntax y descripciones; huellas de página iguales). Sólo cambió el orden de dos variables en el panel: `color/blue/700-alpha` pasa antes de `color/fuchsia/900` y `Font/line-height/s` pasa después de `Font/size/4xl`. Design Resources CORE: 76 component sets con mismo nombre, variantes, id y tamaño. **Nueva foto base:** hash de estructura v2 documentado y huellas de las 32 páginas de CORE en `pages.txt`. Dashboard y ADK: no se revisaron (se copian las fotos del 17/11) |

> **Corrección (2026-11-16):** la foto del 2026-10-15 guardó 6 descripciones de variables con los typos ya corregidos (`Valor/radius/L`, `XXL`, `XXXL`, `Valor/spacing/40`, `Button/primary-bg-focused`, `Link/inverse-visited`), aunque en Figma siguen como las registra el audit (H-01). La foto del 2026-11-16 tiene el texto real de Figma. Para comparar descripciones entre fotos, normalizar espacios y entidades HTML (`&#39;`, `&quot;`).
