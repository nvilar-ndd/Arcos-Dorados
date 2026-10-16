# Hr (divisor)

> **Fuente de la verdad:** [Components › Hr](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6303) · component set `Hr`.
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Línea divisora para contenidos dentro de un frame." — Figma

Separa bloques dentro de una card, modal o sección de formulario (p. ej. entre "Motor de promociones" y "Productos a excluir").

## Anatomía y tokens

| Propiedad `orientacion` | Medida | Color | Regla de uso |
|---|---|---|---|
| Horizontal | 1 px de alto | `border/02` | Fill del contenedor en **ancho** |
| vertical | 1 px de ancho | `border/02` | Fill del contenedor en **alto** |

El componente trae un padding vertical de 48 (`spacing/600`) enlazado al wrapper: el espacio alrededor del divisor lo define el contenedor, no el divisor.

## Accesibilidad

- Decorativo → `<hr aria-hidden="true">` o borde CSS. Si separa secciones con significado, usar `<hr>` (rol `separator`) y headings.
- `border/02` (1.45:1) está bien para un divisor decorativo; no usarlo para delimitar controles ([D-A02](../audit.md#d-a02--bordes-en-light)).
