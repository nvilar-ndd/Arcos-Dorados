# Icon Only · FAB · FAB Extended

> **Fuente de la verdad:** [Design Resources CORE › Button](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=424-440) · [`Icon_Only`](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=431-2891) (45 variantes) · [`FAB`](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=431-2972) (4) · [`FAB_Extended`](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=3256-415) (4).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *FABs*, *Small Floating*.

## Propósito

| Componente | Qué es | Comportamiento con el scroll |
|---|---|---|
| **Icon Only** | Botón con un ícono universalmente comprensible, dentro de una card, toolbar o header | Se mueve con el contenido; acción local |
| **FAB** | La acción más importante de la pantalla, flotando sobre el contenido | Fijo; acción global. **Uno por pantalla**, abajo a la derecha, 16 pt de margen |
| **FAB Extended** | FAB con ícono + texto, para acciones que cambian la vista ("Ver lista", "Ver mapa") | Fijo. Uno por pantalla |

**No usar Icon Only** si el ícono puede ser ambiguo o la acción es crítica (finalizar compra, registrarse) → [Button](./button.md) con label. **No usar FAB** si la acción se mueve con el contenido → Icon Only.

## Anatomía y tokens

| Icon Only | Visual | Área táctil | Ícono | Radio |
|---|---|---|---|---|
| Medium | 48 | 48 | 24 | `Valor/radius/XXL` (círculo) |
| Small | 32 | 40 ⚠️ | 16 | — |
| XS | 24 | 40 ⚠️ | 16 | — |

| | FAB | FAB Extended |
|---|---|---|
| Tamaño | 56 × 56 | 140 × 56 (ancho según texto) |
| Radio | `Valor/radius/XXL` | `Valor/radius/XXL` |
| Fondo | `Button/primary-bg` (+ pressed / focused / disabled) | ídem |
| Texto | — | `Label/Label Large`, `Text/primary` · padding `Valor/spacing/16`/`24` |

**Estilos de Icon Only:** Primary (`Button/primary-bg`), Secondary (`Button/secondary-bg` + borde `Button/secondary-stroke`), Ghost (sin fondo).

**Regla de borde (Secondary):** sobre fondos de color o brand → **sin** borde; sobre `Surface/default` → **con** borde de 0.5 px interior (propiedad `Stroke`).

## Estados

Enabled · Pressed · Focused · Disabled en los tres; **Loading** sólo en Icon Only.

## Plataformas

En iOS, FAB y FAB Extended llevan **Liquid Glass** porque flotan sobre el contenido (regla de *Nuestras bases*). Icon Only es custom con la marca.

## Accesibilidad

- `accessibilityLabel` **obligatorio**: describe la acción, no el ícono ("Buscar", no "Lupa").
- En toggles (favorito), el label alterna: "Agregar a favoritos" / "Quitar de favoritos" (+ `accessibilityState: selected`).
- Área táctil: XS y Small en 40 → 48 ([C-A04](../audit.md#c-a04--áreas-táctiles)).
- El FAB no debe tapar contenido al final del scroll: dejar 56 + 16 + 16 de margen inferior en la lista.
