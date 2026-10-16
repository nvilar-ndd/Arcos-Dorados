# Date picker

> **Fuente de la verdad:** [Components › DatePicker](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13516) · `Calendar picker`, `Range calendar`, `Date`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Elegir una fecha (`Calendar picker`) o un período (`Range calendar`, p. ej. vigencia de una promoción: "Periodo de fecha <XX días>"). Se presenta como **Dropdown Calendar** (debajo del campo) o **Modal Calendar**.

## Anatomía

| Pieza | Medida | Tokens |
|---|---|---|
| `Calendar picker` (campo) | 352 × 72 (104 con error) | fondo `layer/02`; borde `button/secondary-stroke` / `button/secondary-hover`; error `button/red` |
| Panel de calendario | — | fondo `background/01`, efecto `Elevation/Bordered Down` |
| `Date` (celda de día) | **48 × 48** | ver estados |
| Encabezado de mes | "Enero de 2026" | `Body01 - cms` |

Props del campo: `Label text`, `Error text`, `Open` (True / False).

## Estados del campo

`Type` = Enabled · Hover · Focus · Focus-open · Active · Disabled · Error.

## Celda `Date`

| Propiedad | Valores |
|---|---|
| Type | Default (day) · Today · Selected · Null (vacía) |
| State | Enabled · Hover · Disabled |
| Range | None · Start · End · Beginning of week · End of week · Only in the week · Middle |

| Caso | State layer (círculo) | Franja de rango | Texto |
|---|---|---|---|
| Default | — | — | `text/primary` |
| Hover | borde `background/05` | — | `text/primary` |
| Today | fondo `layer/02` (+ borde `border/01` en hover) | — | `text/primary` |
| Selected / Start / End | fondo `button/primary-enabled` | `layer/08` (Start/End) | `text/primary` |
| Middle · Beginning/End of week · Only in the week | — | `layer/08` | `text/primary` |
| Disabled | — | — | `text/disabled` |

Selected en Hover no cambia ([D-C08](../audit.md#d-c08--estados-iguales-entre-sí)).

Textos de ayuda del rango: "Seleccioná una fecha de inicio" → fecha de fin → "Periodo de fecha <XX días>".

## Responsive

Dropdown Calendar en desktop; Modal Calendar (o el `<input type="date">` nativo) en mobile. El rango muestra dos meses lado a lado en desktop y uno en mobile.

## Accesibilidad

- El campo tiene que aceptar **tipeo** de la fecha (dd/mm/aaaa) además del calendario.
- Grilla: `role="grid"` con flechas (día), `PageUp/PageDown` (mes), `Home/End` (semana); `aria-selected` en la seleccionada y `aria-current="date"` en hoy.
- Celda 48 × 48: cumple área de toque.
- Selected = gold con texto oscuro: OK para el texto, pero el círculo gold sobre blanco da 1.69:1. Hoy se marca sólo con un fondo `layer/02` muy claro: agregar un indicador más fuerte (borde `border/01` o punto) para no depender de una diferencia de fondo mínima.
- Usa `color/black/800` directo y `#DB0007` suelto en el error ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo), [D-C04](../audit.md#d-c04--colores-sin-variable)).
