# Card

> **Fuente de la verdad:** [Design Resources CORE › Card](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5182-653) · component set `.Card (Core)` (12 variantes).
> **Origen:** ArchWay · Nivel 2 Core (compuesto genérico) · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Card*.

## Propósito

> "Contenedor base de todas las cards de la app. Header fijo y dos slots para que cada card específica ponga lo suyo." — Figma

**Usar** como base de cualquier card. Las cards con negocio (Restaurant, Voucher, Checkout, Cupón, Métodos de pago) son Específicos armados sobre esta: `Card 💠 [Nombre]`.

**No usar:** cards con **imagen completa** (son el lenguaje de las piezas de marketing).

> **Nunca se desacopla.** Si a tu card le falta algo, va en el Bottom slot. Si aun así no alcanza, se le pide a Design Ops.

## Anatomía

| Parte | Qué es | Cómo se usa |
|---|---|---|
| Tag | [Tag](./tag.md) neutro | Se prende o se apaga. Para color de negocio, `Tag 💠 EP` / `Tag 💠 Loyalty` en el slot |
| Title / Subtitle | `Label/Label Medium Bold` / `Label/Label Small` · `Text/primary` / `Text/secondary` | El título va siempre; el subtítulo se puede apagar |
| Trailing | [Icon Only](./icon-only-fab.md), chevron por defecto | Se cambia por ⋮ (menú contextual) |
| Trailing 2 | Icon Only opcional (♡) | Segunda acción, como favorito |
| Leading slot | 80 × 80 para imagen o ícono | Un solo elemento en Fill; recorta lo que sobresale |
| Bottom slot | Todo el ancho, debajo del header | Filas, barra de progreso, línea de tiempo, botones |

**El ícono de la derecha define la interacción:**
- **Chevron:** la card se toca entera y lleva a otra pantalla. **No puede tener botones adentro.**
- **⋮ y ♡:** la card tiene acciones propias; no se toca entera.

## Estilos y estados

| Estilo | Fondo | Borde / sombra |
|---|---|---|
| Elevated | `Surface/default` | `Shallow/L.Elev-1` |
| Filled | `Surface/subtle` | — |
| Outlined | `Surface/default` | `Border/soft` 1 px |

| Estado | Cuándo | Cómo se ve |
|---|---|---|
| Enabled | Reposo | Según el estilo |
| Pressed | Mientras el dedo está apoyado | Fondo `Surface/subtle` (Filled: `Surface/muted`) |
| Focused | Teclado externo o accesibilidad | Borde `Border/strong` 2 px (10.05:1 ✅) |
| Selected | La card quedó elegida (restaurante, método de pago) | Borde `Border/input-active` 2 px |

"Cuándo usar cada estilo: **A definir**" en Figma ([C-S06](../audit.md#c-s06--marcas-pendientes)).

## Medidas

| Medida | Valor |
|---|---|
| Padding | 16 (`Valor/spacing/16`) |
| Header → Bottom slot | 16 |
| Dentro del header | 8 |
| Radio | 8 (`Valor/radius/S`), squircle 60 % |
| Ancho | Fill, mínimo 328 |
| Alto | Según contenido · sin slots 96 · con slot izquierda 112 |

## Propiedades

`Style` (Elevated · Filled · Outlined) · `State` (Enabled · Pressed · Focused · Selected) · `Tag` · `Title` · `Subtitle` + `Subtitle text` · `Trailing` · `Trailing 2` · `Leading` + `Leading slot` · `Bottom` + `Bottom slot`.

## Hallazgos

- **Dos bases:** en *Card 💠* existe otra `Card` "Nivel 2" con 26 propiedades e imagen completa ([C-S01](../audit.md#c-s01--dos-card-base)). Ver [especificos/card-voucher-setting.md](../especificos/card-voucher-setting.md).
- El Índice de Figma todavía marca Card como "Falta" ([C-S02](../audit.md#c-s02--estado-de-componentes-desalineado)).
- Outlined seleccionable: `Border/soft` no delimita (1.38:1); Selected sí usa `Border/input-active` ✅.

## Accesibilidad

- Card que se toca entera: un solo `accessibilityLabel` que describa a dónde lleva (incluye título, subtítulo y tag).
- Íconos de acción: `accessibilityLabel` obligatorio ("Más opciones", "Agregar a favoritos").
- Selected: `accessibilityState: selected` / `aria-checked` si es parte de un grupo de selección.
