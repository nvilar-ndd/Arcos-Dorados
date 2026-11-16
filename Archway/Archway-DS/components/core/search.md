# Search

> **Fuente de la verdad:** [Design Resources CORE › Search](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=3642-689) · `Search / Android` ([3642:347](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=3642-347), 5 variantes) y `_Search - iPhone` ([3844:2213](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=3844-2213), nativo, 6).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Search Bar 2.0*.

## Propósito

Buscador de la nueva home: busca productos dentro de la pantalla de categorías.

- **iOS:** nativo, con Liquid Glass cuando flota (`_Search - iPhone`, modos Light / Dark, estados Placeholder · Value · Typing).
- **Android:** custom (`Search / Android`).

## Anatomía y tokens (Android)

| # | Parte | Token / medida |
|---|---|---|
| 1 | Contenedor | 380 × 36 · píldora `Valor/radius/XXXL` · padding `Valor/spacing/16` h / `Valor/spacing/8` v · `Surface/default` · borde 1 px |
| 2 | Leading icon | Lupa (`Leading Icon`) |
| 3 | Placeholder | `Label/Label Medium`, `Text/secondary` |
| 4 | Cursor | Visible en Active y Typing |
| 5 | Trailing icon | Borrar (X), `Trailing Icon` |

| Estado | Borde | Texto |
|---|---|---|
| Enabled | `Border/soft` ⚠️ | placeholder `Text/secondary` |
| Active | `Border/strong` | placeholder + cursor |
| Typing | `Border/strong` | `Text/primary` + cursor |
| Completed | `Border/input-active` | `Text/primary` |
| Disabled | — | `Text/disabled`, fondo `Surface/subtle` |

## Hallazgos

- Alto 36: área táctil menor a 48 ([C-A04](../audit.md#c-a04--áreas-táctiles)).
- Borde en reposo 1.38:1 ([C-A03](../audit.md#c-a03--bordes-de-controles-en-1381)).
- La ficha del canvas usa hex (`#5C5C5C`, `#424242`); los tokens son `Text/secondary` y `Border/strong`.

## Accesibilidad

- Rol `search` / `searchbox`; `accessibilityLabel` "Buscar productos".
- Botón borrar: "Borrar búsqueda".
- Anunciar la cantidad de resultados al terminar de escribir (`aria-live="polite"`), sin interrumpir en cada tecla.
