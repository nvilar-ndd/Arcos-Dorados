# Figma snapshots

Fotos de los tres archivos de Figma (ArchWay, Dashboard, ADK) en el momento de cada revisión. Sirven para que la próxima revisión sepa **exactamente** qué cambió en Figma, en lugar de comparar contra la documentación.

| Archivo | Contenido |
|---|---|
| `archway-primitives.txt` | Variables Primitives: `nombre\|tipo\|valor\|scopes\|codeSyntax\|oculto\|descripción` |
| `archway-semantic.txt` | Variables Semantic: `nombre\|tipo\|valor\|scopes\|codeSyntax\|descripción` |
| `dashboard-components.txt` | Component sets con cantidad de variantes y componentes sueltos de *Components* |
| `pages.txt` | Huella de cada página: cantidad de nodos, largo del texto y hash de todos los textos |

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

## Historial

| Fecha | Cambios detectados |
|---|---|
| 2026-10-15 | ArchWay: renombre y limpieza de variables de color (Background/Layer → Surface, naming, scopes, codeSyntax Android). Dashboard: nuevo `Empty state`, 2 descripciones de variables eliminadas. ADK: sin cambios. Primera foto con huellas de página |
| 2026-10-16 | Primer relevamiento de [Iconography](../Iconografia/iconos.json) (216 íconos) e [Illustrations Guide](../Ilustraciones/ilustraciones.json) (213 componentes). Los manifiestos JSON sirven como foto de base |
| 2026-11-16 | ArchWay: sin cambios de valores en variables ni estilos; primitivos `violet` sin scopes; *Colors* suma guía de uso, glosario (17), changelog y paleta de ilustración; *Typography* suma topes de tamaño de letra del sistema, changelog y fichas Roboto; *Utilities* suma la plantilla `Header` para componentes. Dashboard: variables sin cambios; `Card_list` 8 → 9 variantes (`State=change-order`) y exploraciones `Card_list2/3`; nueva IA del menú izquierdo v-03/11/26 aplicada al `Header+PanelLeft`; página separadora *Structure*. ADK: sin cambios. *Cover* de ArchWay no se relevó |

> **Corrección (2026-11-16):** la foto del 2026-10-15 guardó 6 descripciones de variables con los typos ya corregidos (`Valor/radius/L`, `XXL`, `XXXL`, `Valor/spacing/40`, `Button/primary-bg-focused`, `Link/inverse-visited`), aunque en Figma siguen como las registra el audit (H-01). La foto del 2026-11-16 tiene el texto real de Figma. Para comparar descripciones entre fotos, normalizar espacios y entidades HTML (`&#39;`, `&quot;`).
