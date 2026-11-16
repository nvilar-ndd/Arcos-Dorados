# Product Card (Carrousel cards)

> **Fuente de la verdad:** [Design Resources CORE › Products Cards & Carrousels](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2220-2104) · `Carrousel cards / Classic / Small` ([2220:2452](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2220-2452), 5), `Carrousel cards / Classic / Big` ([2483:855](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2483-855), 3), `Carrousel cards / New` ([2220:2258](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2220-2258), 6).
> **Origen:** ArchWay · Específico · **Estado en Figma:** Parcial · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Square Products*.

## Propósito

Card de producto para carruseles con scroll horizontal: imagen, nombre y precio (con descuento y puntos Loyalty opcionales).

| Componente | Tamaño | Variantes |
|---|---|---|
| Classic / Small | 144 × 216 (imagen 144 × 128, texto 144 × 72) | `State` Active · Disabled · Skeleton × `Loyalty` Off · On |
| Classic / Big | 224 × 212 | `State` Active · Disabled · Skeleton |
| New | Small 144 / Big 224 de ancho | `Type` Card · Skeleton × `Size` Small · Big × `State` Disable · Enable |

Espaciado: imagen → texto `Valor/spacing/16`; título → precios `Valor/spacing/8`. Auto-layout vertical sin padding externo.

## Tokens

Título `Text/Body Medium` · precio `Heading/Heading Small Bold` · etiquetas `Label/Label Small` · `Text/primary` / `Text/secondary` / `Text/disabled` · imagen `Surface/subtle`, radio `Valor/radius/S` · badge Loyalty `Surface/brand` / `Icon/gold`.

## Hallazgos

- Precio con descuento en `#DB0007` sin variable (10 nodos) ([C-T02](../audit.md#c-t02--colores-sin-variable)). Contraste 5.23:1 ✅.
- `Trust/Surface` no existe en Foundations → `Trust/subtle` ([C-T01](../audit.md#c-t01--variables-que-no-existen-en-foundations)).
- Disabled por opacidad según la ficha ([C-A05](../audit.md#c-a05--disabled-por-opacidad)); `Disable` / `Enable` y `Loayalty Coin` ([C-H01](../audit.md#c-h01--typos-y-nombres)).
- Las etiquetas de persuasión dentro de la card son *Tag 💠 EP* (pendiente).

## Accesibilidad

- Un solo label por card: nombre + precio + precio anterior + etiqueta ("Big Mac, $4.500, antes $5.200, Oferta").
- El precio tachado se anuncia como "antes", no como dos números seguidos.
- Carrusel: el contenedor tiene nombre ("Para vos") y se puede recorrer con el lector sin swipe obligatorio.
