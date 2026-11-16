# Dialog 💠 Pop-up dashboard

> **Fuente de la verdad:** [Design Resources CORE › Dialog 💠 Pop-up](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5146-3503) · component set `Dialog 💠 Pop-up dashboard` (2 variantes).
> **Origen:** ArchWay · Específico · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

> "Pop-up de marketing que arma Contenidos desde el dashboard: imagen, título y CTA." — Figma

**Usar:** comunicaciones de marketing cargadas desde el Dashboard (Home). **No usar:** mensajes del sistema o confirmaciones → Dialog Core (pendiente).

**Imagen:** 1080 × 1080 px (1:1), PNG o JPG.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 328 × 448 (Inset) / 464 (Full bleed) · `Surface/default` · radio `Valor/radius/L` (también usa `Radius/L` de otra librería, [C-T01](../audit.md#c-t01--variables-que-no-existen-en-foundations)) |
| Imagen | `Image layout`: Inset · Full bleed |
| Título | `Heading/Heading Large Bold`, `Text/primary` (opcional) |
| CTA primario | [Button](../core/button.md) Primary |
| CTA secundario | Button Secondary (opcional) |
| Cerrar | Opcional |

Props: `Close`, `Title` + `Title text`, `Image`, `Primary CTA`, `Secondary CTA`, `Image layout`.

Se carga desde el Dashboard: ver [Dashboard › Home content](../../../Dashboard/structure/information-architecture.md) (*Pop-up in app*).

## Accesibilidad

- Rol `dialog` con `aria-modal`; el foco entra al abrir y vuelve al disparador al cerrar.
- **Cerrar siempre disponible** (aunque `Close` sea opcional en Figma): botón "Cerrar" y gesto / Esc.
- La imagen lleva texto alternativo con el mensaje; el título no puede estar sólo en la imagen.
