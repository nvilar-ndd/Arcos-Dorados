# Color

> **Fuente de la verdad:** [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) — colecciones **Primitives** (modo `Default`) y **Semantic** (modos **`Light`** y **`Dark`**).
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas viven en [`audit.md`](../audit.md); la convergencia con ArchWay, en [`Convergencia/dashboard-archway.md`](../../Convergencia/dashboard-archway.md).

## Arquitectura

```
Primitives (64 colores)     Semantic (63 colores × 2 modos)
color/gold/500 #FFBC0D   ──►   button/primary-enabled   Light ▸ gold/500 · Dark ▸ gold/500
color/black/800 #292929  ──►   text/primary             Light ▸ black/800 · Dark ▸ white
```

- **Primitives:** escalas `gold`, `red` y `black` de 0 a 950, más grupos `secondary`, `tertiary`, `link` y `accessible` con nombres descriptivos.
- **Semantic:** cada token tiene un valor por modo. **Dashboard ya tiene dark mode.**
- Principio de la página *Color*: *"The primary color used in digital is white. We use brand colors sparingly to emphasize features, improve usability and add personality."*

### Paleta por rol (página *Color*)

| Rol | Colores |
|---|---|
| Primary / Brand | McDonald's Gold, McDonald's Red, McDonald's Black, White |
| Secondary | Blue, Orange, Dark Grey, Grey, Light Grey, Ivory |
| Tertiary | McDonald's Green, Light Green, Dark Blue, Light Blue, Fuchsia, Beige, Gold/Blue/Purple/Red/Green Disabled, Dark Red |
| Accessible accent | Accent Gold, Accent Grey, Accent Red |
| Links | Link, Link Hover, Link Visited |

*Change log en Figma (20.04.2023, Nico V):* se agregó el rojo de accesibilidad para usar sobre fondo oscuro y se renombró el gris de accesibilidad.

## Primitivos

### Gold — marca

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/gold/0` | `#fff8e7` | `--db-color-gold-0` |
| `color/gold/100` | `#ffeccb` | `--db-color-gold-100` |
| `color/gold/200` | `#ffe090` | `--db-color-gold-200` |
| `color/gold/300` | `#ffd46a` | `--db-color-gold-300` |
| `color/gold/400` | `#ffc839` | `--db-color-gold-400` |
| `color/gold/500` | `#ffbc0d` | `--db-color-gold-500` |
| `color/gold/600` | `#d69b00` | `--db-color-gold-600` |
| `color/gold/700` | `#ad7d00` | `--db-color-gold-700` |
| `color/gold/800` | `#856000` | `--db-color-gold-800` |
| `color/gold/900` | `#5c4200` | `--db-color-gold-900` |
| `color/gold/950` | `#332500` | `--db-color-gold-950` |

### Red — marca / error

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/red/0` | `#ffe7e8` | `--db-color-red-0` |
| `color/red/100` | `#ffbec0` | `--db-color-red-100` |
| `color/red/200` | `#ff9497` | `--db-color-red-200` |
| `color/red/300` | `#ff6a6f` | `--db-color-red-300` |
| `color/red/400` | `#ff4046` | `--db-color-red-400` |
| `color/red/500` | `#ff161d` | `--db-color-red-500` |
| `color/red/600` | `#db0007` | `--db-color-red-600` |
| `color/red/700` | `#b20006` | `--db-color-red-700` |
| `color/red/800` | `#890005` | `--db-color-red-800` |
| `color/red/900` | `#610003` | `--db-color-red-900` |
| `color/red/950` | `#330002` | `--db-color-red-950` |

### Black — neutros

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/black/0` | `#fcfcfc` | `--db-color-black-0` |
| `color/black/100` | `#f2f2f2` | `--db-color-black-100` |
| `color/black/200` | `#e4e4e4` | `--db-color-black-200` |
| `color/black/300` | `#c7c7c7` | `--db-color-black-300` |
| `color/black/400` | `#a9a9a9` | `--db-color-black-400` |
| `color/black/500` | `#7f7f7f` | `--db-color-black-500` |
| `color/black/600` | `#6a6a6a` | `--db-color-black-600` |
| `color/black/700` | `#4b4b4b` | `--db-color-black-700` |
| `color/black/800` | `#292929` | `--db-color-black-800` |
| `color/black/900` | `#080808` | `--db-color-black-900` |
| `color/black/950` | `#000000` | `--db-color-black-950` |

### White

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/white/default` | `#ffffff` | `--db-color-white-default` |
| `color/white/off` | `#ffffff00` | `--db-color-white-off` |

### Secondary

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/secondary/blue` | `#006bae` | `--db-color-secondary-blue` |
| `color/secondary/orange` | `#fe8234` | `--db-color-secondary-orange` |
| `color/secondary/dark-grey` | `#6f6f6f` | `--db-color-secondary-dark-grey` |
| `color/secondary/grey` | `#adadad` | `--db-color-secondary-grey` |
| `color/secondary/light-grey` | `#d6d6d6` | `--db-color-secondary-light-grey` |
| `color/secondary/ivory` | `#f9f9f9` | `--db-color-secondary-ivory` |

### Link

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/link/blue` | `#0f62fe` | `--db-color-link-blue` |
| `color/link/blue-300` | `#76a5fe` | `--db-color-link-blue-300` |
| `color/link/blue-hover` | `#054ada` | `--db-color-link-blue-hover` |
| `color/link/blue-hover-300` | `#7da6fc` | `--db-color-link-blue-hover-300` |
| `color/link/blue-visited` | `#8a3ffc` | `--db-color-link-blue-visited` |
| `color/link/blue-visited-300` | `#a972fd` | `--db-color-link-blue-visited-300` |

### Tertiary

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/tertiary/green-800` | `#1f6437` | `--db-color-tertiary-green-800` |
| `color/tertiary/green-600` | `#38b362` | `--db-color-tertiary-green-600` |
| `color/tertiary/green-100` | `#effaf3` | `--db-color-tertiary-green-100` |
| `color/tertiary/light-green` | `#a9c141` | `--db-color-tertiary-light-green` |
| `color/tertiary/dark-blue` | `#103c82` | `--db-color-tertiary-dark-blue` |
| `color/tertiary/light-blue` | `#56afd1` | `--db-color-tertiary-light-blue` |
| `color/tertiary/fuchsia` | `#9a0a4d` | `--db-color-tertiary-fuchsia` |
| `color/tertiary/beige` | `#b69a81` | `--db-color-tertiary-beige` |
| `color/tertiary/gold-disabled` | `#ffe49e` | `--db-color-tertiary-gold-disabled` |
| `color/tertiary/blue-disabled` | `#ccf0ff` | `--db-color-tertiary-blue-disabled` |
| `color/tertiary/purple-disabled` | `#eee3ff` | `--db-color-tertiary-purple-disabled` |
| `color/tertiary/red-disabled` | `#ffcec4` | `--db-color-tertiary-red-disabled` |
| `color/tertiary/green-disabled` | `#e2eabf` | `--db-color-tertiary-green-disabled` |
| `color/tertiary/dark-red` | `#9a0005` | `--db-color-tertiary-dark-red` |

### Accessible accent

| Token Figma | Hex | CSS var (propuesta) |
|---|---|---|
| `color/accessible/gold` | `#c08800` | `--db-color-accessible-gold` |
| `color/accessible/grey` | `#959595` | `--db-color-accessible-grey` |
| `color/accessible/red` | `#fa4d56` | `--db-color-accessible-red` |

## Semánticos

### Background

Fondos de pantalla y de áreas grandes. Cambian con el modo.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `background/01` | `white/default` #ffffff | `black/800` #292929 | `--db-background-01` | Color de base y predeterminado |
| `background/02` | `secondary/dark-grey` #6f6f6f | `secondary/light-grey` #d6d6d6 | `--db-background-02` | — |
| `background/03` | `secondary/grey` #adadad | `secondary/grey` #adadad | `--db-background-03` | — |
| `background/04` | `secondary/light-grey` #d6d6d6 | `secondary/dark-grey` #6f6f6f | `--db-background-04` | — |
| `background/05` | `black/800` #292929 | `white/default` #ffffff | `--db-background-05` | Se utiliza únicamente en fondos de componentes |

### Layer

Superficies superpuestas (cards, paneles, modales) sobre el fondo base.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `layer/00` | `white/off` #ffffff00 | `white/off` #ffffff00 | `--db-layer-00` | Se utiliza si el fondo de atrás no es white |
| `layer/01` | `white/default` #ffffff | `black/800` #292929 | `--db-layer-01` | Se utiliza si el fondo de atrás no es white |
| `layer/02` | `secondary/ivory` #f9f9f9 | `black/700` #4b4b4b | `--db-layer-02` | Se utiliza si el fondo de atrás no es white |
| `layer/03` | `secondary/light-grey` #d6d6d6 | `secondary/grey` #adadad | `--db-layer-03` | Se utiliza si el fondo de atrás no es white |
| `layer/04` | `secondary/grey` #adadad | `secondary/light-grey` #d6d6d6 | `--db-layer-04` | Se utiliza si el fondo de atrás no es white |
| `layer/05` | `secondary/dark-grey` #6f6f6f | `secondary/ivory` #f9f9f9 | `--db-layer-05` | Se utiliza si el fondo de atrás no es white |
| `layer/06` | `black/800` #292929 | `white/default` #ffffff | `--db-layer-06` | Se utiliza si el fondo de atrás no es white |
| `layer/07` | `gold/500` #ffbc0d | `gold/500` #ffbc0d | `--db-layer-07` | Se utiliza si el fondo de atrás no es white |
| `layer/08` | `gold/0` #fff8e7 | `gold/800` #856000 | `--db-layer-08` | Se utiliza si el fondo de atrás no es white |

### Border

Bordes y contornos de componentes.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `border/01` | `black/800` #292929 | `gold/500` #ffbc0d | `--db-border-01` | — |
| `border/02` | `secondary/light-grey` #d6d6d6 | `white/default` #ffffff | `--db-border-02` | — |
| `border/03` | `secondary/grey` #adadad | `secondary/light-grey` #d6d6d6 | `--db-border-03` | — |
| `border/04` | `gold/500` #ffbc0d | `white/default` #ffffff | `--db-border-04` | — |

### Text

Color de texto por jerarquía y estado.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `text/primary` | `black/800` #292929 | `white/default` #ffffff | `--db-text-primary` | Color de base y predeterminado |
| `text/secondary` | `secondary/dark-grey` #6f6f6f | `secondary/ivory` #f9f9f9 | `--db-text-secondary` | — |
| `text/disabled` | `secondary/grey` #adadad | `secondary/light-grey` #d6d6d6 | `--db-text-disabled` | — |
| `text/on-color` | `white/default` #ffffff | `black/800` #292929 | `--db-text-on-color` | — |
| `text/success` | `tertiary/green-800` #1f6437 | `tertiary/green-600` #38b362 | `--db-text-success` | — |
| `text/error` | `red/600` #db0007 | `red/300` #ff6a6f | `--db-text-error` | — |

### Link

Links de texto y sus estados.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `link/primary` | `link/blue` #0f62fe | `link/blue-300` #76a5fe | `--db-link-primary` | Color predeterminado |
| `link/primary-hover` | `link/blue-hover` #054ada | `link/blue-hover-300` #7da6fc | `--db-link-primary-hover` | Color predeterminado |
| `link/primary-visited` | `link/blue-visited` #8a3ffc | `link/blue-visited-300` #a972fd | `--db-link-primary-visited` | Color predeterminado |
| `link/secondary` | `black/800` #292929 | `white/default` #ffffff | `--db-link-secondary` | Color predeterminado |

### Icon

Color de íconos según contexto.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `icon/primary` | `black/800` #292929 | `white/default` #ffffff | `--db-icon-primary` | Color predeterminado |
| `icon/secondary` | `secondary/dark-grey` #6f6f6f | `secondary/ivory` #f9f9f9 | `--db-icon-secondary` | Color predeterminado |
| `icon/tertiary` | `white/default` #ffffff | `black/800` #292929 | `--db-icon-tertiary` | Color predeterminado |
| `icon/gold` | `gold/500` #ffbc0d | `gold/500` #ffbc0d | `--db-icon-gold` | Color predeterminado |
| `icon/background` | `tertiary/gold-disabled` #ffe49e | `gold/700` #ad7d00 | `--db-icon-background` | Color predeterminado |

### Support

Estados y alertas: éxito, error, advertencia.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `support/warning` | `gold/500` #ffbc0d | `gold/500` #ffbc0d | `--db-support-warning` | — |
| `support/success` | `tertiary/green-800` #1f6437 | `tertiary/green-600` #38b362 | `--db-support-success` | — |
| `support/error` | `red/600` #db0007 | `red/400` #ff4046 | `--db-support-error` | — |
| `support/error-secondary` | `accessible/red` #fa4d56 | `accessible/red` #fa4d56 | `--db-support-error-secondary` | Sólo en algunos componentes |

### Tag

Fondos de tags.

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `tag/background-green` | `tertiary/green-disabled` #e2eabf | `tertiary/green-disabled` #e2eabf | `--db-tag-background-green` | Cambiar manualmente el color tipográfico |
| `tag/background-blue` | `tertiary/blue-disabled` #ccf0ff | `tertiary/blue-disabled` #ccf0ff | `--db-tag-background-blue` | — |

### Button

Tokens de componente Button (primary, secondary, red, transparent, skeleton).

| Token Figma | Light | Dark | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `button/primary-text` | `black/800` #292929 | `black/800` #292929 | `--db-button-primary-text` | — |
| `button/primary-enabled` | `gold/500` #ffbc0d | `gold/500` #ffbc0d | `--db-button-primary-enabled` | — |
| `button/primary-hover` | `gold/300` #ffd46a | `gold/700` #ad7d00 | `--db-button-primary-hover` | — |
| `button/primary-hover-transparent` | `#ffbc0d33` | `#ffbc0d33` | `--db-button-primary-hover-transparent` | Utilizado en los estados de los switch |
| `button/primary-focus` | `accessible/gold` #c08800 | `gold/300` #ffd46a | `--db-button-primary-focus` | Se aplica al elemento cuando recibe el foco |
| `button/primary-pressed` | `accessible/gold` #c08800 | `gold/300` #ffd46a | `--db-button-primary-pressed` | — |
| `button/primary-pressed-transparent` | `#ffbc0d66` | `#ffbc0d66` | `--db-button-primary-pressed-transparent` | — |
| `button/primary-disabled` | `tertiary/gold-disabled` #ffe49e | `tertiary/gold-disabled` #ffe49e | `--db-button-primary-disabled` | — |
| `button/secondary-text` | `black/800` #292929 | `white/default` #ffffff | `--db-button-secondary-text` | — |
| `button/secondary` | `white/default` #ffffff | `black/700` #4b4b4b | `--db-button-secondary` | — |
| `button/secondary-stroke` | `black/800` #292929 | `white/default` #ffffff | `--db-button-secondary-stroke` | — |
| `button/secondary-enabled` | `secondary/ivory` #f9f9f9 | `secondary/light-grey` #d6d6d6 | `--db-button-secondary-enabled` | — |
| `button/secondary-hover` | `secondary/light-grey` #d6d6d6 | `secondary/ivory` #f9f9f9 | `--db-button-secondary-hover` | — |
| `button/secondary-hover-transparent` | `#d6d6d633` | `#d6d6d633` | `--db-button-secondary-hover-transparent` | — |
| `button/secondary-focus` | `secondary/light-grey` #d6d6d6 | `secondary/ivory` #f9f9f9 | `--db-button-secondary-focus` | — |
| `button/secondary-pressed` | `accessible/grey` #959595 | `secondary/light-grey` #d6d6d6 | `--db-button-secondary-pressed` | — |
| `button/secondary-pressed-transparent` | `#d6d6d666` | `#d6d6d666` | `--db-button-secondary-pressed-transparent` | — |
| `button/transparent` | `white/off` #ffffff00 | `white/off` #ffffff00 | `--db-button-transparent` | — |
| `button/skeleton` | `background/04` #d6d6d6 | `background/04` #6f6f6f | `--db-button-skeleton` | — |
| `button/red` | `red/600` #db0007 | `red/600` #db0007 | `--db-button-red` | Sólo para eliminar o comunicar algo similar |
| `button/red-text` | `white/default` #ffffff | `white/default` #ffffff | `--db-button-red-text` | — |
| `button/red-hover` | `red/500` #ff161d | `red/500` #ff161d | `--db-button-red-hover` | — |
| `button/red-pressed` | `red/700` #b20006 | `red/700` #b20006 | `--db-button-red-pressed` | — |
| `button/red-disabled` | `red/0` #ffe7e8 | `red/0` #ffe7e8 | `--db-button-red-disabled` | Sólo para eliminar o comunicar algo similar |

## Contraste verificado (WCAG 2.1 AA) en ambos modos

| Primer plano / fondo | Criterio | Light | Dark |
|---|---|---|---|
| `text/primary` / `background/01` | Texto 4.5 | 14.55 ✅ | 14.55 ✅ |
| `text/primary` / `layer/02` | Texto 4.5 | 13.82 ✅ | 8.72 ✅ |
| `text/primary` / `layer/03` | Texto 4.5 | 10.01 ✅ | 2.24 ❌ |
| `text/secondary` / `background/01` | Texto 4.5 | 5.02 ✅ | 13.82 ✅ |
| `text/secondary` / `layer/02` | Texto 4.5 | 4.77 ✅ | 8.29 ✅ |
| `text/disabled` / `background/01` | Disabled | 2.24 — exento | 10.01 — exento |
| `text/error` / `background/01` | Texto 4.5 | 5.23 ✅ | 5.23 ✅ |
| `text/success` / `background/01` | Texto 4.5 | 7.15 ✅ | 5.40 ✅ |
| `text/on-color` / `background/05` | Texto 4.5 | 14.55 ✅ | 14.55 ✅ |
| `text/on-color` / `layer/06` | Texto 4.5 | 14.55 ✅ | 14.55 ✅ |
| `link/primary` / `background/01` | Texto 4.5 | 5.00 ✅ | 5.95 ✅ |
| `link/primary-hover` / `background/01` | Texto 4.5 | 7.00 ✅ | 6.05 ✅ |
| `link/primary-visited` / `background/01` | Texto 4.5 | 5.00 ✅ | 4.51 ✅ |
| `button/primary-text` / `button/primary-enabled` | Texto 4.5 | 8.63 ✅ | 8.63 ✅ |
| `button/primary-text` / `button/primary-hover` | Texto 4.5 | 10.31 ✅ | 3.96 ⚠️ texto grande |
| `button/primary-text` / `button/primary-focus` | Texto 4.5 | 4.69 ✅ | 10.31 ✅ |
| `button/secondary-text` / `button/secondary` | Texto 4.5 | 14.55 ✅ | 8.72 ✅ |
| `button/secondary-text` / `button/secondary-pressed` | Texto 4.5 | 4.86 ✅ | 1.45 ❌ |
| `button/red-text` / `button/red` | Texto 4.5 | 5.23 ✅ | 5.23 ✅ |
| `button/red-text` / `button/red-hover` | Texto 4.5 | 3.90 ⚠️ texto grande | 3.90 ⚠️ texto grande |
| `text/primary` / `tag/background-green` | Texto 4.5 | 11.61 ✅ | 1.25 ❌ |
| `text/primary` / `tag/background-blue` | Texto 4.5 | 12.11 ✅ | 1.20 ❌ |
| `text/primary` / `layer/08` | Texto 4.5 | 13.74 ✅ | 5.72 ✅ |
| `icon/secondary` / `background/01` | UI 3 | 5.02 ✅ | 13.82 ✅ |
| `icon/gold` / `background/01` | UI 3 | 1.69 ❌ | 8.63 ✅ |
| `border/01` / `background/01` | UI 3 | 14.55 ✅ | 8.63 ✅ |
| `border/02` / `background/01` | UI 3 | 1.45 ❌ | 14.55 ✅ |
| `border/03` / `background/01` | UI 3 | 2.24 ❌ | 10.01 ✅ |
| `border/04` / `background/01` | UI 3 | 1.69 ❌ | 14.55 ✅ |
| `support/error` / `background/01` | UI 3 | 5.23 ✅ | 4.21 ✅ |
| `support/success` / `background/01` | UI 3 | 7.15 ✅ | 5.40 ✅ |
| `support/warning` / `background/01` | UI 3 | 1.69 ❌ | 8.63 ✅ |
| `support/error-secondary` / `background/01` | UI 3 | 3.35 ✅ | 4.34 ✅ |

Los fallos y sus propuestas están en [`audit.md`](../audit.md).
