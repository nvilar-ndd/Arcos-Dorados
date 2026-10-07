# Grilla y Layout

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — estilos de grilla `Aw_Layout/col` y `Aw_Layout/Grid`.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Grilla de columnas — `Aw_Layout/col`

| Propiedad | Valor | Token relacionado |
|---|---|---|
| Tipo | Columnas, `STRETCH` (columnas fluidas) | — |
| Columnas | **4** | — |
| Gutter | **16px** | `Valor/spacing/16` (valor coincide; no está enlazado a la variable) |
| Margen lateral (offset) | **16px** | `Valor/spacing/16` — "margen sagrado lateral" |
| Contexto | App mobile (360–430px de ancho) | — |

```
|16|  col  |16|  col  |16|  col  |16|  col  |16|
 ^ margen         ^ gutter                    ^ margen
```

Ancho de columna en un viewport de 375px: `(375 − 2×16 − 3×16) / 4 = 73.75px`.

## Grilla base — `Aw_Layout/Grid`

| Propiedad | Valor | Token relacionado |
|---|---|---|
| Tipo | Grid cuadrada | — |
| Tamaño de celda | **8px** | Enlazado a `Valor/8` ✅ |

Todo tamaño, padding y posición se alinea a esta retícula de 8 (con 4 como medio paso). Ver [spacing.md](./spacing.md).

## Reglas de layout

- El contenido respeta siempre el margen lateral de 16px. Sólo los elementos *full-bleed* (banners, carruseles con peek, headers de marca) pueden ignorarlo.
- Los componentes se dimensionan por cantidad de columnas (1, 2 o 4) y no por px fijos.
- Carruseles horizontales: el primer ítem alinea al margen de 16; el último deja ver *peek* del siguiente.

## Pendiente de definición

Hoy sólo existe grilla **mobile**. No hay grillas ni breakpoints para Web eCommerce, Dashboard o Kiosco ADK. Ver propuesta en [`audit.md`](../audit.md).
