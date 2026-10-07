# Espaciado

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — variables `Valor/*` (Primitives) y `Valor/spacing/*` (Semantic).
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Principio

Sistema basado en **múltiplos de 8** (`Valor/spacing/8` es el valor base), con **4** como medio paso para ajustes finos entre ícono–texto o label–input.

## Escala dimensional (Primitives)

Valores numéricos crudos que alimentan spacing, radius y la grilla base.

| Token | px | ¿Usado por un semántico? |
|---|---|---|
| `Valor/0` | 0 | Sí |
| `Valor/4` | 4 | Sí |
| `Valor/8` | 8 | Sí |
| `Valor/12` | 12 | Sí — Uso limitado |
| `Valor/16` | 16 | Sí |
| `Valor/24` | 24 | Sí |
| `Valor/32` | 32 | Sí |
| `Valor/40` | 40 | Sí |
| `Valor/48` | 48 | Sí |
| `Valor/56` | 56 | Sí |
| `Valor/64` | 64 | Sí |
| `Valor/72` | 72 | Sí |
| `Valor/80` | 80 | Sí |
| `Valor/88` | 88 | Sí |
| `Valor/96` | 96 | No |
| `Valor/128` | 128 | No |
| `Valor/160` | 160 | Sí |

## Tokens de espaciado (Semantic)

Scopes en Figma: `WIDTH_HEIGHT`, `GAP`, `STROKE_FLOAT`.

| Token | px | CSS var (propuesta) | Uso |
|---|---|---|---|
| `Valor/spacing/0` | 0 | `--aw-spacing-0` | Sin espacio. Uso cuando dos elementos deben estar pegados. |
| `Valor/spacing/4` | 4 | `--aw-spacing-4` | Espacio entre icono y texto, o label e input. |
| `Valor/spacing/8` | 8 | `--aw-spacing-8` | Valor Base |
| `Valor/spacing/16` | 16 | `--aw-spacing-16` | Margen sagrado lateral y Gutters de la grilla |
| `Valor/spacing/24` | 24 | `--aw-spacing-24` | Separación entre grupos de contenido o secciones. |
| `Valor/spacing/32` | 32 | `--aw-spacing-32` | Separación entre banners y secciones principales. |
| `Valor/spacing/40` | 40 | `--aw-spacing-40` | Uso esporádico |
| `Valor/spacing/48` | 48 | `--aw-spacing-48` | Altura mínima de touch targets o espaciado de sección. |
| `Valor/spacing/56` | 56 | `--aw-spacing-56` | NavBar height, FAB size, alto de botón L. |
| `Valor/spacing/64` | 64 | `--aw-spacing-64` | Separación entre secciones de pantalla completa. |
| `Valor/spacing/72` | 72 | `--aw-spacing-72` | Poco uso, usos específicos |
| `Valor/spacing/80` | 80 | `--aw-spacing-80` | Separación grande entre bloques de contenido. |
| `Valor/spacing/88` | 88 | `--aw-spacing-88` | Separación máxima. Uso en layouts de mucho espacio vertical. |

## Reglas de aplicación

| Relación | Token | Ejemplo |
|---|---|---|
| Elementos pegados | `spacing/0` | Segmented controls, grupos de botones unidos |
| Ícono ↔ texto, label ↔ input | `spacing/4` | Botón con ícono, campo de formulario |
| Padding interno base | `spacing/8` | Chips, tags, padding vertical de botón |
| **Margen lateral de pantalla y gutter** | `spacing/16` | Margen "sagrado": no se reduce en mobile |
| Entre grupos de contenido | `spacing/24` | Bloques dentro de una sección |
| Entre secciones / banners | `spacing/32` | Secciones de la Home |
| Touch target mínimo | `spacing/48` | Alto/ancho mínimo de cualquier elemento tocable |
| Barra de navegación, FAB, botón L | `spacing/56` | NavBar height |
| Secciones de pantalla completa | `spacing/64`–`88` | Layouts editoriales, kiosco |

### Touch targets

- Mínimo **48×48** (`spacing/48`) en App y Kiosco ADK, aunque el elemento visual sea más chico (el área de toque se extiende con padding).
- Web con mouse: el área visual puede ser menor, pero se mantiene 44×44 como mínimo recomendado (WCAG 2.5.5 AAA / 2.5.8 AA = 24×24).
