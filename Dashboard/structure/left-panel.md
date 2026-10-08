# Left panel (sidebar)

> **Fuente de la verdad:** [Components › UI shell - Left panel items](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3812-3216) · `sidebar` (15 variantes), `item`, `Menu_item`, `Sidebar_items`. Figma marca `Sidebar_items` como **"Usar este! componente final"**.
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> La sidebar (panel izquierdo) es el **menú principal de navegación**. Su comportamiento cambia según el ancho de la pantalla y el tipo de ítems (con o sin subcategorías). — Figma

## Anatomía (Figma)

| # | Parte | Detalle |
|---|---|---|
| 1 | Ícono | Hace referencia a la categoría |
| 2 | Category title | Nombre de la categoría |
| 3 | Chevron | Desplegable; sólo si la categoría tiene subcategorías |

## Componentes

| Componente | Rol | Medida | Tokens |
|---|---|---|---|
| `sidebar` | Ítem de primer nivel | 272 × 40 (`Open_panel`) · 48 × 40 (`Close_panel`) · padding `spacing/200` · gap `spacing/100` | `Label02 - cms` |
| `item` | Subítem | 272 × 32 · padding izquierdo 56 (`spacing/700`) | `Label02 - cms` (`Label03` activo) |
| `Menu_item` | Categoría + subítems | 272 × 160 | |
| `Sidebar_items` ✅ | Componente final: categoría con sus subítems | `Expand` 272 × 200 · `collapsed` 272 × 40 | |

Props de `sidebar`: `Chevron`, `Icon Left`, `Icon Default` / `Icon Active` / `Icon disabled` (instance swap), `Text Category Tittle`.

## Estados

| State | Fondo | Borde / indicador | Texto |
|---|---|---|---|
| enabled | `layer/01` | — | `text/primary` |
| hovered | `button/secondary-hover` | — | |
| focused | `button/secondary-focus` | `border/01` | |
| pressed | `button/secondary-pressed-transparent` | `border/01` | |
| **Active** (categoría actual) | `layer/01` | indicador `border/04` (gold) a la izquierda | `Label03` (peso) |
| **Active_item** (categoría con un subítem activo) | `layer/01` | — | |
| disabled | `button/secondary` | — | `text/disabled` · ícono `icon/secondary` |
| skeleton | `button/secondary` | — | bloques `layer/03` |

Subítem (`item`): enabled `layer/01` · hovered `button/secondary-hover` · focused `button/secondary-hover` + `border/01` · pressed `button/secondary-pressed-transparent` + `border/01` · active `button/secondary` + `border/04` · disabled `button/secondary`.

## Comportamiento (Figma)

**Breakpoints**

- **Desktop / Tablet (≥ 768 px):** visible (no es drawer). Expandida (íconos + texto) o colapsada (sólo íconos). Si está colapsada y se toca un ícono, se expande.
- **Anchos:** Max plus / Max **272 px** · X-Larger / Larger **256 px**.
- **Mobile (< 768 px):** oculta; el ícono del header la abre como drawer superpuesto que se cierra al elegir una opción.

**Ítems con y sin subcategorías**

- Sin subcategorías: ícono + nombre.
- Con subcategorías: ícono + nombre + chevron; clic en el chevron despliega.
- **Regla:** si el ítem tiene subítems, el clic en el padre **no cambia la vista principal**: se mantiene la pantalla anterior hasta que el usuario elija un subítem. Evita cambios inesperados y obliga a una selección explícita.

**Acciones fijas al final del panel**

- Dos CTA persistentes: **cambiar modo de color** (Light / Dark) y **cambiar idioma**.
- Siempre visibles abajo, **fuera** de la lista de navegación, con posición fija independiente del scroll de los ítems.
- En el drawer mobile siguen abajo; en colapsado (desktop) se muestran sólo como íconos.

Usos documentados: *SideBar expanded*, *SideBar collapsed*, *SideBar sin SubItem*, *SideBar close Panel*, *SubItem activo*.

## Accesibilidad

- `<nav aria-label="Principal">` con lista `<ul>`; el ítem actual con `aria-current="page"`.
- Categoría con subítems: `<button aria-expanded aria-controls>` (no es link, coherente con la regla de que no cambia la vista).
- **Colapsada:** cada ícono necesita nombre accesible (`aria-label`) y tooltip visible en hover/foco con el nombre de la categoría.
- El indicador Active es gold `border/04` (1.69:1 sobre blanco, [D-A06](../audit.md#d-a06--dorado-sobre-blanco)); se compensa con el cambio de peso (`Label03`), que conviene mantener.
- Pressed y focused comparten borde `border/01`: el foco necesita su propio anillo ([D-C06](../audit.md#d-c06--foco-visible)).
- Acciones fijas: el toggle de tema como `<button aria-pressed>` y el de idioma con el idioma actual en el nombre ("Idioma: Español").
- Ítems de 40 px de alto: OK para mouse; en el drawer mobile llevar a 44–48 px.
