# Radio button

> **Fuente de la verdad:** [Components › Radiobutton](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=5644-4541) · component set `RadioButton` (12 variantes).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Utilice radiobuttons si no se pueden seleccionar varias opciones de una lista (selección única)." — Figma

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 156 × 40 · paddings `spacing/0` |
| Contenedor (`Style=Fill`) | fondo `layer/01` + borde `border/02` |
| Círculo | outline `#292929` sin variable |
| Punto seleccionado | `#FFBC0D` suelto ([D-C04](../audit.md#d-c04--colores-sin-variable)) |
| Disabled seleccionado | `color/tertiary/gold-disabled` (primitivo, [D-C03](../audit.md#d-c03--primitivos-enlazados-directo)) |
| Foco | borde `link/primary` |
| Label / supporting text | `text/primary` / `text/secondary`; `Label02`, `Label01`, `Label03` |

## Variantes y estados

`Sate` (typo) = Default · Focus · Disabled × `Style` = Fill / Unfilled × `Selected` = True / False. Props booleanas `Label` y `Supporting text`.

## Accesibilidad

- `<input type="radio">` dentro de `<fieldset>` con `<legend>`; flechas mueven la selección dentro del grupo, `Tab` entra y sale del grupo.
- Mismo caso que el checkbox: el borde del contenedor `border/02` (1.45:1) no delimita y el punto gold sobre blanco da 1.69:1.
- Nunca un radio solo: si hay una única opción binaria, usar [Checkbox](./checkbox.md) o [Toggle](./toggle.md).
