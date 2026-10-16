# Data table — Read-only

> **Fuente de la verdad:** [Components › Data table](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=671-25687) · `Data table header cell`, `Data table row cell`, `Data Table icon/illustration`.
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> Organizar y mostrar grandes volúmenes de información de forma clara, para leer, comparar y analizar. La tabla de solo lectura se usa cuando el objetivo es **visualizar, monitorear o auditar**, y las filas no requieren acciones de gestión ni cambios de estado. — Figma

**Adecuada cuando** (Figma):

- La información sigue una estructura fija por columnas.
- Cada fila es un registro o evento, no una entidad gestionable.
- El contenido es homogéneo y comparable entre filas.
- Las acciones son secundarias (ver detalle, copiar) y no afectan el estado.

Prioriza claridad, consistencia y escaneabilidad. Si las filas se gestionan, usar [Card List](./card-list.md).

## Anatomía y tokens

| Pieza | Medida | Tokens |
|---|---|---|
| Header cell | 151 × 64 · padding `spacing/200` · gap 8 | fondo `layer/01` · `Label03 - cms` · `text/primary` |
| Row cell | 160 × 48 (Label) · padding 8/16 (`spacing/100`/`spacing/200`) | fondo `layer/01` · `Label01`/`Label02` |
| Icon / illustration / image / menú contextual | 64 × 48 · 80 × 64 (Image) | fondo `layer/02` |

**Header:** `IconLeft`, `IconRight`, `Show Sort Ascending/Descending`.

**Row cell `Style`:** Label · Tag · Switch (64 alto) · Tag-Operaciones (482 ancho) · Textfield (353 × 56).

Combinaciones documentadas: Default · IconLeft + label · Label + IconRight · Icon + Label + IconRight · IconLeft + Tag · Tag + IconRight · Tag + Label · Tag + Icon + Label · Label + Asc/Desc.

> `Switch` y `Textfield` en una tabla *read-only* contradicen la regla de uso: si la fila tiene toggle, es una Card List. Ver [D-C12](../audit.md#d-c12--data-table-read-only-con-controles).

## Responsive

Scroll horizontal dentro del contenedor con la primera columna fija; en < 768 px, si hay pocas columnas, pasar a lista apilada (etiqueta: valor).

## Accesibilidad

- `<table>` nativa con `<caption>`, `<th scope="col">`.
- Orden: botón dentro del `<th>` y `aria-sort="ascending|descending|none"` en el `<th>`.
- Celdas sólo ícono con texto alternativo; menú contextual con `aria-label` que nombre la fila.
- Filas alternas o divisores no pueden ser la única forma de seguir una fila: alto mínimo 48 y alineación consistente.
