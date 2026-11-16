# List Item

> **Fuente de la verdad:** [Design Resources CORE › List Item](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5010-47) · component set `List Item` (4 variantes).
> **Origen:** ArchWay · Nivel 2 Core (compuesto genérico) · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *List Item* (Menu, Toggle, Card, FAQs…).

## Propósito

> "Fila de una lista: texto principal y, opcionales, texto secundario, un elemento a la izquierda, uno a la derecha y separador." — Figma

> **Clave:** toda la fila es el área táctil. A la derecha puede ir chevron, [Checkbox, Radio](./checkbox-radio.md) o [Switch](./switch.md).

Específicos que se arman sobre él (pendientes): *List Item 💠 Address · Pickup*, *List Item 💠 Product*.

## Anatomía y tokens

| Parte | Token / medida |
|---|---|
| Fila | 412 × 56 · padding `Valor/spacing/16` · gap `Valor/spacing/8` |
| Fondo | `Surface/default` (Pressed: `Surface/subtle`) |
| Título | `Label/Label Medium`, `Text/primary` |
| Subtítulo | `Label/Label Medium`, `Text/secondary` (opcional) |
| Leading / Trailing | Ícono intercambiable (instance swap) |
| Divider | [Divider](./divider.md), `Border/soft` (opcional) |
| Focused | Borde `Border/strong` |
| Disabled | Texto `Text/disabled` |

## Propiedades

`Title` · `Subtitle` + `Subtitle text` · `Leading` + `Leading icon` · `Trailing` + `Trailing icon` · `Divider` · `State` (Enabled · Pressed · Focused · Disabled).

## Accesibilidad

- Un solo elemento accesible por fila: label = título + subtítulo; el control de la derecha aporta el rol y el estado (`switch`, `checkbox`) o el chevron indica navegación (`button` / link).
- Alto 56 ≥ 48 ✅.
- Listas: `<ul>`/`<li>` en web; en mobile, el lector anuncia "1 de N".
