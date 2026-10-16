# Checkbox

> **Fuente de la verdad:** [Components › Checkbox](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13515) · component set `Checkbox` (8 variantes).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Utilice casillas de verificación si se pueden seleccionar varias opciones de una lista." — Figma

Selección múltiple en formularios, listados con selección (filtros de restaurantes, segmentación) y [Selectable Card](./selectable-card.md) multiselect.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | ~142 × 40 (control + label) |
| Contenedor (`Style=fill`) | fondo `layer/01` + borde `border/02` (opción encuadrada) |
| Caja vacía | ícono outline `#292929` sin variable |
| Check (seleccionado) | relleno `#FFBC0D` suelto (sin variable, [D-C04](../audit.md#d-c04--colores-sin-variable)) |
| Disabled seleccionado | `color/tertiary/gold-disabled` (primitivo directo, [D-C03](../audit.md#d-c03--primitivos-enlazados-directo)) |
| Foco | borde `link/primary` |
| Label / supporting | `Label02 - cms` / `Label01`, `Label03` · `icon/secondary` |

## Variantes y estados

`State` = Default · focus · complete · Disabled × `Style` = fill (con contenedor) / unfilled (sólo control + label).

| Estado | Caja | Check |
|---|---|---|
| Default | outline `#292929` | — |
| complete (fill) | gold | ✓ oscuro |
| focus | anillo `link/primary` | |
| Disabled | `color/tertiary/gold-disabled` | |

No hay estado **indeterminado** (necesario en "seleccionar todos" de los listados de restaurantes) ni **error**.

## Accesibilidad

- `<input type="checkbox">` nativo con `<label>`; toda la fila es clicable.
- Grupos: `<fieldset>` + `<legend>`.
- **Contraste:** la caja vacía (#292929) contrasta bien; el borde del contenedor `border/02` (1.45:1) no delimita la opción ([D-A02](../audit.md#d-a02--bordes-en-light)). El gold de la caja seleccionada sobre blanco = 1.69:1; el check oscuro dentro sí contrasta.
- Agregar estado `indeterminate` (`aria-checked="mixed"`).
