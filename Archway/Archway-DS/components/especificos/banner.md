# Banner

> **Fuente de la verdad:** [Design Resources CORE › Banners](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4099-16647) · component set `Banner` (2 variantes).
> **Origen:** ArchWay · Específico · **Estado en Figma:** Parcial · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Banners* (Home, detalle, código de entrega, método de recogida).

## Propósito

Pieza de imagen para comunicaciones en la Home. Hoy el componente es un contenedor de imagen: `State` **Image** · **Skeleton**.

| Medida | Valor |
|---|---|
| Tamaño | 380 × 294 |
| Radio | `Valor/radius/S` (8) |
| Skeleton | `Surface/subtle` |

Los otros tipos de banner del legacy (detalle, código de entrega, método de recogida) todavía no están en ArchWay.

## Accesibilidad

- La imagen necesita texto alternativo con el mensaje de la pieza ("2x1 en McFlurry, hasta el domingo"), no "banner". Ver [Voz y Tono › Alt text](../../../../Voz-y-Tono/04_accesibilidad-e-inclusion/03_alt-text.md).
- Si el banner navega, rol `link` / `button` con el destino.
- El texto importante no debe estar sólo dentro de la imagen.
