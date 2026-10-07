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

## Reglas (página *Spacing block* y *Grid base* de Figma)

### 4px atómico, 8px de ritmo

- **El 4 es la unidad atómica** (micro-espaciado): ícono ↔ texto, label ↔ input, radio de botones chicos, ajustes finos en componentes densos (p. ej. lista de ingredientes de un pedido). Es la excepción, no la regla.
- **El 8 es la unidad de ritmo** (macro-espaciado): márgenes y paddings 16, 24, 32, 40…; separación entre secciones (un banner y una fila de cupones: 24 o 32).
- **Alturas de componente en múltiplos de 8:** un botón mide 48 o 56, nunca 50 ni 54.

### Ritmo vertical

- **16px entre módulos principales** de la pantalla: es el margen vertical estándar de la App.
- La escala se usa igual para paddings internos y para márgenes entre componentes.

| Token | Uso definido en la página de Figma |
|---|---|
| `spacing/4` | Espacio entre ícono y texto, o label e input |
| `spacing/8` | Espacio entre título y párrafo (ritmo interno) |
| `spacing/16` | Margen sagrado lateral y gutters de la grilla |
| `spacing/24` | Separación entre grupos de contenido o secciones |
| `spacing/32` | División temática: entre un banner y el inicio de una lista |
| `spacing/40` | Entre el header y bloques de marketing |
| `spacing/48` | Separa la zona de lectura de la zona de decisión final |
| `spacing/56` | Altura funcional |
| `spacing/64` | Momentos de baja densidad y alto impacto visual |

### Touch targets

- Mínimo **44×44** en iOS y **48×48** en Android.
- **Recomendado para Arcos Dorados: botones principales de al menos 56px de alto**, para facilitar el toque mientras el usuario camina o está apurado.

### Configuración de Figma

Configurar el *Big nudge* en **8** (Preferences → Nudge amount) para mover capas en pasos de la grilla con Shift + flechas.
