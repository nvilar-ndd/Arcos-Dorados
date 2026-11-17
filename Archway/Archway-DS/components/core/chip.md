# Chip

> **Fuente de la verdad:** [Design Resources CORE › Chip](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=548-1953) · component set `Chip` (30 variantes).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Tag clicable* (estaba mal nombrado: es un chip).

## Propósito

> "Interactivo, se puede tocar para filtrar o seleccionar." — Figma

- **Chip → se toca** para filtrar o seleccionar en la misma pantalla.
- **[Tag](./tag.md) → informa**, no se toca.
- Si navega a otra pantalla → [Tile](./tile.md) / Category.

Específico relacionado: *Chip 💠 Filtros* (gestor de filtros, pendiente).

## Anatomía y tokens

| Size | Visual | Área táctil | Padding | Radio |
|---|---|---|---|---|
| Medium | 40 | 40 ⚠️ | `Valor/spacing/16` | `Valor/radius/XXL` (píldora) |
| Small | 32 | 40 ⚠️ | — | píldora |

Layouts (propiedad `Layaut`, typo): **Label** · **Label icon** (ícono 16 + label + ícono 16) · **Only Icon** (40 × 40). Gap `Valor/spacing/4`. Texto `Label/Label Medium` (Selected: `Label/Label Medium Bold`).

| Estado | Fondo | Borde | Texto / ícono |
|---|---|---|---|
| Enabled | `Chip/bg` | `Chip/stroke` | `Chip/text` / `Chip/icon` |
| Selected | `Chip/bg-selected` (dorado) | `Color/Chip/chip-Selected-stroke` ⚠️ | `Chip/text-selected` (Bold) |
| Pressed | `Chip/bg-pressed` | `Chip/stroke-pressed` | `Chip/text` |
| Focused | `Chip/bg-focused` | `Chip/stroke-focused` | `Chip/text` |
| Disabled | `Chip/bg-disabled` | `Chip/stroke-disabled` | `Chip/text-disabled` / `Chip/icon-disabled` |

⚠️ El borde de Selected usa una variable que no está en Foundations ([C-T01](../audit.md#c-t01--variables-que-no-existen-en-foundations)).

Contraste: borde `black/400` sobre blanco **3.23:1** ✅ · texto sobre dorado **8.63:1** ✅. Selected se distingue además por el **peso Bold** del texto, no sólo por el color ✅ (cumple 1.4.1).

## Propiedades

`Size` (Medium · Small) · `Layaut` (Label icon · Label · Only Icon) · `State` (Enabled · Selected · Pressed · Focused · Disabled).

## Plataformas

Forma **Round (píldora)** siempre: es una acción de filtro aislada. En iOS, los chips de filtro **sobre el mapa** van con Liquid Glass porque flotan.

## Accesibilidad

- Rol: `button` con `accessibilityState: selected` (iOS: trait *selected*; web: `aria-pressed`).
- Grupo de filtros: contenedor con `accessibilityLabel` ("Filtros") y anuncio del resultado ("12 productos").
- Only Icon: `accessibilityLabel` obligatorio.
- Área táctil 40 → 48 ([C-A04](../audit.md#c-a04--áreas-táctiles)).

## Cambios 2026-11-17 (paridad con Figma)

- Gap ícono–texto 8 en Medium y 4 en Small; padding horizontal 15 + trazo de 1.
- Small Selected lleva borde `gold/600` (variable remota `Color/Chip/chip-Selected-stroke`, C-T01); Medium no.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
