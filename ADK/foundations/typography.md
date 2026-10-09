# Tipografía

> **Fuente de la verdad:** [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System), página *Tipography* + 20 text styles locales `ADK/*`.
> **Extraído vía Figma MCP:** 2026-10-09 · **Estado:** documentado tal cual está en Figma.

## Familia

**Speedee** en Regular y Bold. Es una tipografía con licencia de McDonald's: en el Storybook se carga desde `ADK/storybook/fonts/`, que está fuera de git.

## Escala

Está pensada para pantalla vertical de **1080×1920 vista a 50–70 cm**, por eso es mucho más grande que la de mobile:

| Sistema | Tamaño de body | Título más grande |
|---|---|---|
| ADK | 22–24 px | 128 px |
| ArchWay | 14–16 px | 36 px |

| Estilo Figma | Token | Peso | Tamaño / interlineado | Tracking |
|---|---|---|---|---|
| ADK/DIsplay/Large bold | `display.large-bold` | Bold | 128 / 128 | −0.15 px |
| ADK/DIsplay/Medium Bold | `display.medium-bold` | Bold | 80 / 80 | −0.15 px |
| ADK/DIsplay/Medium | `display.medium` | Regular | 80 / 80 | −0.15 px |
| ADK/Headline/Extra Large Bold | `headline.extra-large-bold` | Bold | 60 / 64 | −0.15 px |
| ADK/Headline/Large Bold | `headline.large-bold` | Bold | 48 / 52 | −0.15 px |
| ADK/Headline/Large | `headline.large` | Regular | 48 / 52 | −0.15 px |
| ADK/Headline/Medium Bold | `headline.medium-bold` | Bold | 40 / 44 | −0.15 px |
| ADK/Headline/Medium | `headline.medium` | Regular | 40 / 44 | −0.15 px |
| ADK/Headline/Small ⚠️ | `headline.small-bold` | **Bold** | 36 / 40 | −0.15 px |
| ADK/Headline/Extra Small Bold | `headline.extra-small-bold` | Bold | 28 / 32 | −0.15 px |
| ADK/Headline/Extra Small | `headline.extra-small` | Regular | 28 / 32 | −0.15 px |
| ADK/Body/Large Bold | `body.large-bold` | Bold | 24 / 28 | 0 |
| ADK/Body/Large | `body.large` | Regular | 24 / 28 | 0 |
| ADK/Body/Medium Bold | `body.medium-bold` | Bold | 22 / 26 | 0 |
| ADK/Body/Medium | `body.medium` | Regular | 22 / 26 | 0 |
| ADK/Body/Small Bold | `body.small-bold` | Bold | 16 / 20 | 0 |
| ADK/Body/Small | `body.small` | Regular | 16 / 20 | 0 |
| ADK/Utility/Small | `utility.small` | Regular | 12 / 16 | 0 |
| ADK/Utility/Alert | `utility.alert` | Regular | 16 / 20 | 0 |
| ADK/Utility/Link | `utility.link` | Regular, subrayado | 16 / 20 | 0 |

En el Storybook cada estilo es una clase `.adk-<grupo>-<nombre>`, por ejemplo `.adk-headline-large-bold`.

## Uso por componente

| Componente | Estilo |
|---|---|
| Botón Large / Medium / Small / XXL | 24 / 22 / 16 / 40 Bold (Selection activo en Bold) |
| Header (título de categoría) | 48 Bold, ancho máx. 672 |
| Header (subtítulo) | 28 Bold |
| Alerta | Título 60 Bold, cuerpo 40 Regular |
| Snackbar | 24 Regular, blanco |
| Nav.menu-button | 22–24 |

## Estado real en los componentes

| Métrica | Valor |
|---|---|
| Textos con estilo aplicado | 354 |
| Textos sin estilo | **3.272** (incluye las anotaciones de documentación en Inter) |
| Textos en Speedee sin estilo | ~1.170 (más 880 con fuentes mezcladas) |

Los tamaños sueltos que más aparecen **no existen en la escala**:

| Tamaño / interlineado | Usos | Estilo más cercano |
|---|---|---|
| 28 / 32 | 495 | Coincide con Extra Small, pero sin el estilo aplicado |
| 22 / 24 | 327 | Body Medium es 22/**26** |
| 16 / 16 | 311 | Body Small es 16/**20** |
| 24 / 32 | 165 | Body Large es 24/**28** |
| 66 / 80 | 53 | No existe en la escala |
| 40 / 40 | 87 | Headline Medium es 40/**44** |

También aparecen familias que no son del sistema:

- Speedee **Light**: 23 textos. No es parte del paquete licenciado de 4 archivos.
- **IBM Plex Sans**: 19 textos.

Detalle en audit A-T01…A-T04.

## Accesibilidad

| Aspecto | Estado |
|---|---|
| Tamaño mínimo de lectura | `utility.small` (12 px) es demasiado chico a distancia de kiosco. Proponemos un mínimo de 16 px y 22 px para texto que haya que leer (A-T05) |
| Interlineado | Los Display usan 1.0 de interlineado: válido para una sola línea, no para títulos que pasen a dos líneas |
| Tracking | −0.15 px viene de Legacy. En 128 px no se nota; ArchWay lo eliminó (ver la guía de migración Legacy → ArchWay) |
