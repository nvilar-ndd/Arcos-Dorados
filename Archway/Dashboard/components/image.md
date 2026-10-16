# Images and embeds

> **Fuente de la verdad:** [Components › Images and embeds](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6453-9189) · componente `images`.
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Responsive images, videos, and rich media embeds to enhance and illustrate your documentation." — Figma

Vista previa de imágenes cargadas (banners, productos) con etiqueta opcional.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 250 × 220 · gap `spacing/100` · radio `spacing/050` (4) |
| Placeholder | fondo `layer/02` |
| Label | `Label02 - cms`, `text/primary` |

Props de posición del label: `Label Top`, `Label Bottom`, `Label Inner Top`, `Label Inner Bottom`.

## Responsive

`aspect-ratio` fijo y `object-fit: cover`; ancho fill dentro de grillas de imágenes.

## Accesibilidad

- `alt` descriptivo; `alt=""` si la imagen es decorativa y el label ya la describe.
- Labels internos (*Inner*) sobre la imagen necesitan un fondo o scrim que garantice 4.5:1 (el componente tiene `#FFFFFF` suelto, [D-C04](../audit.md#d-c04--colores-sin-variable)).
- Videos: subtítulos y controles nativos.
