# Pagination

> **Fuente de la verdad:** [Components › Pagination](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=787-27330) · `Pagination`, `Pagination-info`, `Pagination-cantidad`, `Dd-LabelNum`, `DropDown-ListMenuNum`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Navegar páginas de una [Data table](./data-table.md) o [Card List](./card-list.md) y elegir cuántos ítems ver por página.

## Anatomía

| Pieza | Contenido | Medida | Tokens |
|---|---|---|---|
| `Pagination-cantidad` | "Filas por página" + `Dd-LabelNum` | 100 × 24 · gap 13 (suelto) | `text/secondary` |
| `Dd-LabelNum` | selector numérico | 56 × 24 · padding 4/8 (`spacing/050`/`spacing/100`) · radio `spacing/0` | fondo `layer/02`, `icon/primary` |
| `DropDown-ListMenuNum` | lista de cantidades | 56 × 192 | `layer/02` |
| `Pagination-info` | "1–10 de 120" + flechas | 145 × 24 · gap `spacing/050` | `text/primary`, `text/secondary` |
| `Pagination` | todo junto | **Default** 269 × 24 (horizontal, gap `spacing/300`) · **Small** 288 × 52 (vertical) | |

Texto `Label01 - cms` en todas las piezas.

## Estados (`Dd-LabelNum`)

Default `layer/02` · Hover `button/secondary-hover` · pressed `button/secondary-pressed` · activo `layer/02`.

## Responsive

`Default` en desktop; `Small` (apilado) en < 768 px.

## Accesibilidad

- Envolver en `<nav aria-label="Paginación">`.
- Flechas como `<button>` con `aria-label="Página anterior"` / `"Página siguiente"`; disabled en los extremos.
- Anunciar el rango ("1–10 de 120") con `aria-live="polite"` al cambiar de página.
- **Área de toque:** 24 px de alto ([D-C07](../audit.md#d-c07--áreas-de-toque)); cumple el mínimo de 24 × 24 pero no 44 para touch.
- Hay dos componentes `DropDown-ListMenuNum` duplicados ([D-C09](../audit.md#d-c09--naming-de-variantes)).
