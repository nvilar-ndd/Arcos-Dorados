# Carousel

> **Fuente de la verdad:** [Components › Carousel](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6518-4514) · component set `imagen-carousel`.
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Mostrar varias imágenes de una misma opción en poco espacio (p. ej. dentro de [Selectable Card](./selectable-card.md)).

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 672 × 230 (262 con dots) · gap `layout/01` (16) |
| Imagen | fondo `layer/02` |
| Flechas | `button/transparent` + ícono |
| Dot activo / inactivo | `button/primary-enabled` / `#ADADAD` suelto |

## Variantes (`Type`)

| Type | Navegación |
|---|---|
| Arrows | flechas a los costados, fuera de la imagen |
| Float Arrow | flechas flotando sobre la imagen |
| Dots | indicadores debajo |
| Simple | sin controles (scroll/swipe) |

Props `Item 2`, `Item 3` para mostrar más ítems.

## Accesibilidad

- Sin autoplay (o con botón de pausa, WCAG 2.2.2).
- Flechas `<button aria-label="Imagen anterior/siguiente">`; dots como botones con `aria-label="Imagen 2 de 3"` y `aria-current`.
- Contenedor `role="region"` + `aria-roledescription="carrusel"` + `aria-label`.
- Dot activo gold sobre blanco (1.69:1) e inactivo `#ADADAD` (2.24:1): diferenciarlos también por tamaño o forma.
- `Simple` en desktop no tiene forma de navegar con mouse/teclado: usarlo sólo en touch.
