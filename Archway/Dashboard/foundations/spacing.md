# Espaciado

> **Fuente de la verdad:** [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) — colección **Primitives** (`spacing/*`), alias en **Semantic** y página *Spaces*.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas viven en [`audit.md`](../audit.md); la convergencia con ArchWay, en [`Convergencia/dashboard-archway.md`](../../Convergencia/dashboard-archway.md).

## Principio

Grilla base de **8px**: márgenes, paddings y separaciones en múltiplos de 8. El **4px** se usa excepcionalmente (íconos pequeños, microajustes) y no sigue la grilla de 8. Ritmo vertical estándar: **16px entre módulos principales**.

Los nombres siguen un **multiplicador de 8**: `spacing/100` = 8px (1×), `spacing/200` = 16px (2×), `spacing/050` = 4px (0.5×).

## Escala

| Primitivo | px | rem | Semántico | CSS var (propuesta) |
|---|---|---|---|---|
| `spacing/0` | 0 | 0rem | `spacing/0` | `--db-spacing-0` |
| `spacing/025` | 2 | 0.125rem | — | `--db-spacing-025` |
| `spacing/050` | 4 | 0.25rem | `spacing/50` | `--db-spacing-050` |
| `spacing/100` | 8 | 0.5rem | `spacing/100` | `--db-spacing-100` |
| `spacing/200` | 16 | 1rem | `spacing/200` | `--db-spacing-200` |
| `spacing/300` | 24 | 1.5rem | `spacing/300` | `--db-spacing-300` |
| `spacing/400` | 32 | 2rem | `spacing/400` | `--db-spacing-400` |
| `spacing/500` | 40 | 2.5rem | `spacing/500` | `--db-spacing-500` |
| `spacing/600` | 48 | 3rem | `spacing/600` | `--db-spacing-600` |
| `spacing/700` | 56 | 3.5rem | `spacing/700` | `--db-spacing-700` |
| `spacing/800` | 64 | 4rem | `spacing/800` | `--db-spacing-800` |
| `spacing/1000` | 80 | 5rem | `spacing/1000` | `--db-spacing-1000` |
| `spacing/1200` | 96 | 6rem | `spacing/1200` | `--db-spacing-1200` |
| `spacing/1400` | 128 | 8rem | `spacing/1400` | `--db-spacing-1400` |
| `spacing/2000` | 160 | 10rem | `spacing/2000` | `--db-spacing-2000` |

> `spacing/025` (2px) no tiene alias semántico. `spacing/50` (semántico) apunta a `spacing/050`.

## Clasificación de uso (página *Spaces*)

| Rango | Valores | Uso | Ejemplos |
|---|---|---|---|
| Sin espacio | 0 | Cuando no se necesita espaciado adicional | Campos que ya tienen margen propio; resetear márgenes; evitar espacios redundantes |
| Extra extra mínimo | 4 | Componentes compactos o detalles finos. **Excepcional, no sigue la grilla de 8** | Separación mínima ícono–texto, microajustes |
| Extra mínimo | 8 | Detalles pequeños, espacios internos mínimos | Ícono–texto, relleno de botones chicos o chips, body + body |
| Pequeños | 16, 24 | Componentes estándar o agrupaciones moderadas | Título + cuerpo (h1 + body), ítems dentro de una card, padding interno de secciones |
| Medianos | 32, 40 (**32 recomendado**) | Entre secciones medias o componentes relacionados | Entre módulos o cards independientes, margen entre secciones de una vista |
| Grandes | 48, 56 | Entre secciones principales o layouts completos | Margen superior/inferior entre secciones, componentes de alto nivel |
| Muy grandes | 64, 80 | Uso frecuente en web, puntual en app | Secciones de landings, vistas largas |
| Extra grandes | 96, 128, 160 | Web o pantallas amplias con jerarquía marcada | Hero, bloques principales, padding de landings y banners |
