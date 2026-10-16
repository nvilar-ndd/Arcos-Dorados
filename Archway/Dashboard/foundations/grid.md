# Grilla, breakpoints y layout

> **Fuente de la verdad:** [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) — colecciones **Breakpoints** y **Layout**, 6 estilos de grilla y página *Grids*.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas viven en [`audit.md`](../audit.md); la convergencia con ArchWay, en [`Convergencia/dashboard-archway.md`](../../Convergencia/dashboard-archway.md).

## Breakpoints

| Token | px | CSS var (propuesta) |
|---|---|---|
| `breakpoint/sm` | 375 | `--db-breakpoint-sm` |
| `breakpoint/md` | 768 | `--db-breakpoint-md` |
| `breakpoint/lg` | 1024 | `--db-breakpoint-lg` |
| `breakpoint/xl` | 1440 | `--db-breakpoint-xl` |
| `breakpoint/2xl` | 1792 | `--db-breakpoint-2xl` |

## Grillas (estilos de Figma)

Todas con **gutter de 32px**. El nombre indica el ancho del área de contenido.

| Estilo | Ancho | Columnas | Tipo | Gutter | Margen | Nota |
|---|---|---|---|---|---|---|
| `CMS - Small-320` | 320 | 4 | stretch | 32 | 16 | `offset` y `gutter` enlazados a variables |
| `CMS- Medium-672` | 672 | 8 | stretch | 32 | 32 | — |
| `CMS - Large -1056` | 1056 | 16 | stretch | 32 | 32 | — |
| `CMS-X-large -1312` | 1312 | 16 | stretch | 32 | 32 | — |
| `CMS - Max -1584` | 1584 | 16 | stretch | 32 | 40 | — |
| `CMS- MaxPlus - 1784` | 1784 | 16 | center | 32 | — | columnas de 66px centradas |

> **Diferencia página vs estilos:** la página *Grids* dice 8 columnas para Large, X-Large y Max, pero los estilos publicados tienen **16**. Este documento sigue a los estilos. Ver [`audit.md`](../audit.md).

La página muestra las grillas aplicadas a dos estructuras de pantalla: **Screen + Panel Left** y **Screen + Panel Left condensed** (ver la página *Structure* del archivo).

## Tokens de layout

Espaciados de layout con scope `WIDTH_HEIGHT` y `GAP`:

| Token | px |
|---|---|
| `layout/01` | 16 |
| `layout/02` | 24 |
| `layout/03` | 32 |
| `layout/04` | 48 |
| `layout/05` | 64 |

## Tamaños de modal

| Token | px |
|---|---|
| `size/modal/xs` | 384 |
| `size/modal/sm` | 512 |
| `size/modal/md` | 672 |
| `size/modal/lg` | 896 |
