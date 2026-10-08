# Tabs y Segmented button

> **Fuente de la verdad:** [Components › Tabs](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=797-4187) · `Tab label`, `Segmented button`, `Building Blocks`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

- **Tabs:** alternar entre vistas hermanas de una misma entidad sin salir de la pantalla.
- **Segmented button:** alternar entre 2–4 modos de visualización o filtros excluyentes (p. ej. Grid / Lista).

## Tab label

| Parte | Token |
|---|---|
| Contenedor | 120 × 48 · padding `spacing/200` (16) · gap `spacing/100` · radio `spacing/0` |
| Indicador | borde inferior (stroke por lado) |
| Texto | `Label02 - cms` (`Label03` en activo) · `text/primary` / `text/disabled` |
| Ícono | opcional (`Show Icon`) |

| Estado | Fondo | Indicador |
|---|---|---|
| Default | `button/secondary` | `border/03` |
| Hovered | `button/secondary-hover` | `border/03` |
| Focused | `button/secondary-hover` | `border/01` |
| Pressed | `button/secondary` | `border/01` |
| Active | `button/secondary` | `border/01` |
| disabled | `button/skeleton` | `border/03` |

> Pressed, Active y Focused comparten el mismo indicador `border/01`; el foco necesita una señal propia ([D-C06](../audit.md#d-c06--foco-visible)).

## Segmented button

`Segmente` = 2 · 3 · 4 segmentos (132 / 198 / 264 × 32). Se arma con `Building Blocks` (45 variantes):

| Propiedad | Valores |
|---|---|
| Type | Start · Middle · End (define qué esquinas llevan radio `spacing/100`) |
| Configuration | Text · Icon · Icon - Text |
| Selected | False / True |
| State | Enabled · Hovered · Disabled |

Tokens: no seleccionado `layer/02`; hover `button/secondary-hover`; **seleccionado** `layer/01` + borde `background/04` 1 px; textos `text/primary` / `text/secondary` / `text/disabled`. Padding 4/16 (`spacing/050` / `spacing/200`).

## Responsive

Tabs: si no entran, scroll horizontal con fade en el borde (no hacer wrap). Segmented: máximo 4 segmentos; en mobile ocupa el 100 % del ancho.

## Accesibilidad

- Tabs: `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls`; flechas izquierda/derecha entre tabs, `Tab` va al panel.
- Segmented: `role="radiogroup"` + `role="radio"` (selección única) o grupo de `<button aria-pressed>`.
- Segmento sólo ícono → `aria-label`.
- Seleccionado vs no seleccionado sólo cambia `layer/02` → `layer/01` + borde `background/04`: verificar 3:1 entre estados (WCAG 1.4.11).
