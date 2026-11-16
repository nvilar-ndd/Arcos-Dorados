# Divider

> **Fuente de la verdad:** [Design Resources CORE › Divider](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5009-8) · componente `Divider`.
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

> "Línea de separación entre contenidos." — Figma

## Anatomía y tokens

| Parte | Valor |
|---|---|
| Grosor | 1 |
| Ancho | Fill (412 en el componente) |
| Color | `Border/soft` (`black/100`) |

Lo usa [List Item](./list-item.md) con la propiedad `Divider`.

## Accesibilidad

- Es decorativo: `accessibilityHidden` / `aria-hidden="true"` (o `<hr>` si separa secciones con significado).
- 1.38:1 sobre blanco: válido para un separador decorativo (1.4.11 no aplica), **no** para delimitar un control ([C-A03](../audit.md#c-a03--bordes-de-controles-en-1381)).
