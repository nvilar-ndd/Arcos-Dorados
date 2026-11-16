# Badge

> **Fuente de la verdad:** [Design Resources CORE › Badge](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2133-2088) · component set `Badge` (2 variantes).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Badge*, *Badge cantidades*.

## Propósito

> "Las Badge muestran notificaciones, recuentos o información de estado en los elementos e iconos de navegación." — Figma

Va **encima** de otro elemento (ícono del NavBar, avatar, ícono del carrito). No es un [Tag](./tag.md): el Tag es una etiqueta de texto con contexto propio.

## Anatomía y tokens

| Size | Tamaño | Contenido |
|---|---|---|
| Large | 16 × 16 (crece con el número) | Número, `Label/Label Small` |
| Small | 8 × 8 | Punto, sin texto |

| Parte | Token |
|---|---|
| Fondo | `Highlight/new` (`violet/400`) |
| Texto | `Text/on-color` — **5.00:1** ✅ |
| Radio | `Valor/radius/XXXL` (círculo) |

> En Figma la descripción dice **"Color a revisar!!!"** ([C-S06](../audit.md#c-s06--marcas-pendientes)). `Highlight/new` es "algo nuevo o no visto"; para recuentos (carrito) puede convenir otro token. Pendiente de definición.

## Propiedades

`Size` (Large · Small) · `Badge label` (texto).

## Accesibilidad

- El badge no se lee solo: se suma al label del elemento que lo lleva ("Cupones, 3 nuevos"; "Carrito, 2 productos").
- Small (punto) no tiene texto: el elemento debe anunciar "con novedades".
- Números grandes: mostrar "99+" y anunciar el número real.
