# Tooltip

> **Fuente de la verdad:** [Components › Tooltips](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=2713-5222) · component set `Tooltip` (24 variantes).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Los indicadores de activación muestran y ocultan información adicional al hacer clic en un elemento de activación de la interfaz de usuario." — Figma

Información breve y complementaria (p. ej. motivo de un disabled, explicación de un campo en `Card_Campos`).

## Anatomía y tokens

| Parte | Token |
|---|---|
| Burbuja | fondo `layer/06` (oscuro) |
| Texto | `Label01 - cms`, `text/on-color` |
| Flecha | según `Position` y `alignment` |
| Distancia al elemento | **4 px** (regla de Figma) → `spacing/050` |

## Variantes

| Propiedad | Valores |
|---|---|
| Position | top · Bottom · Left · Right |
| alignment | Start · Center · End |
| Size | Small (56 × 28, una línea) · Big (68 × 36, hasta cuatro líneas) |

## Comportamiento

- Figma dice "al hacer clic"; en web también debe abrir con **hover y foco** (mouse/teclado). En touch, con tap.
- Máximo 4 líneas. Si hace falta más, usar [Notification](./notification.md) inline o un popover.

## Accesibilidad

- Disparador enfocable con `aria-describedby` apuntando al tooltip (`role="tooltip"`).
- WCAG 1.4.13: se cierra con `Esc`, se puede pasar el mouse por encima sin que desaparezca, y no se cierra solo mientras está en hover/foco.
- No poner en el tooltip información imprescindible para completar la tarea.
- `text/on-color` sobre `layer/06`: verificar en Dark (la capa cambia de modo).
