# Espaciado, radios, bordes y elevación

> **Fuente de la verdad:** [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System), página *Spaces* + relevamiento de componentes.
> **Extraído vía Figma MCP:** 2026-10-09 · **Estado:** espaciado documentado en Figma. Radios, bordes y sombras **no están documentados**: se relevan del uso y se proponen como tokens.

## Espaciado

Grilla base de **8 px**; el 4 es la única excepción. La página *Spaces* define 14 "spacers", sin variables:

| Token | px | ArchWay |
|---|---|---|
| `spacing.4` | 4 | `spacing/4` |
| `spacing.8` | 8 | `spacing/8` |
| `spacing.16` | 16 | `spacing/16` |
| `spacing.24` | 24 | `spacing/24` |
| `spacing.32` | 32 | `spacing/32` |
| `spacing.48` | 48 | `spacing/48` |
| `spacing.56` | 56 | `spacing/56` |
| `spacing.64` | 64 | `spacing/64` |
| `spacing.72` | 72 | `spacing/72` |
| `spacing.80` | 80 | `spacing/80` |
| `spacing.88` | 88 | `spacing/88` |
| `spacing.96` | 96 | Primitivo `dimension/96`, sin semántico |
| `spacing.104` | 104 | **No existe** |
| `spacing.112` | 112 | **No existe** |

- La nomenclatura por px coincide con ArchWay: los primeros 11 valores mapean 1:1.
- ADK **no usa 12 ni 40**, que sí existen en ArchWay.
- ADK necesita **104 y 112**: el padding superior del header (104) y los offsets de módulo.

## Radios (relevado del uso)

| Token propuesto | px | Usos | Dónde | ArchWay |
|---|---|---|---|---|
| `radius.xs` | 4 | 349 | Botones, inputs | `radius/XS` |
| `radius.s` | 8 | 105 | Cards de producto, banners, nav menu, snackbar | `radius/S` |
| `radius.m` | 12 | 32 | Botones de categoría | `radius/M` |
| `radius.l` | 16 | 58 | Card Loyalty, botón ilustración, scroll | `radius/L` |
| `radius.xl` | 20 | 36 | Quantity y chips de 40 px (= alto/2) | **No existe** (audit ArchWay F-03 pide `XL`) |
| `radius.full` | 9999 | 208 | Pills y badges (en Figma, 100 y 99) | **No existe** (F-03 pide `full`) |

Hay además radios sueltos (5, 2, 3, 19, 6, 2.59) en ~120 nodos; ver A-S02.

> El chip de 56 px usa radio 28: es `full`, no un valor fijo.

## Bordes

| Token propuesto | px | Uso |
|---|---|---|
| `border-width.default` | 1 | Botones primario y secundario, chips, inputs (1.190 usos) |
| `border-width.selected` | 3 | Botón Selection activo, ítem de nav seleccionado (54) |
| `border-width.focus` | 2 | **Propuesta**: anillo de foco, que hoy no existe |

## Elevación

No hay effect styles. Las sombras se repiten como valores sueltos:

| Token propuesto | Valor | Usos | ArchWay más cercano |
|---|---|---|---|
| `shadow.bordered-down` | `0 8 16 0 #292929 / 16%` | 100 (nav menu, banners, cards) | `Deep/M-elev-2` = `0 8 16 #292929 / 25%`: misma geometría, más opaca |
| `shadow.bordered-up` | `0 −8 16 0 #292929 / 16%` | 40 (footer flotante) | **No existe**: ArchWay no tiene sombras hacia arriba |

El Header lleva una sombra blanca (`0 8 16 #FFFFFF`) que funciona como **fade** sobre el contenido que scrollea, no como elevación. Proponemos modelarla como gradiente.
