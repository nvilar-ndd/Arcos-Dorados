# Radios (Corner radius)

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — variables `Valor/radius/*` de la colección **Semantic**, alias de `Valor/*`.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Escala

| Token | px | Alias | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Valor/radius/XS` | 4 | `Valor/4` | `--aw-radius-xs` | Micro-componentes: Badges, etiquetas de "Nuevo", indicadores de cantidad y elementos de precisión. |
| `Valor/radius/S` | 8 | `Valor/8` | `--aw-radius-s` | Valor Base. Botones principales, inputs de texto y componentes que viven dentro de un contenedor mayor. |
| `Valor/radius/M` | 12 | `Valor/12` | `--aw-radius-m` | El Estándar (Default): Cards de producto, message cards, snackbars, banners informativos y promocionales. |
| `Valor/radius/L` | 16 | `Valor/16` | `--aw-radius-l` | Grandes Contenedores (Vessels): Bottom sheets, diálogos de confirmación y modales de pantalla completa. |
| `Valor/radius/XXL` | 32 | `Valor/32` | `--aw-radius-xxl` | Grandes Contenedores: Uso en header. |
| `Valor/radius/XXXL` | 160 | `Valor/160` | `--aw-radius-xxxl` | Componentes circle: componentes en formato píldora. |

> No existe `radius/XL` en Figma: la escala salta de `L` (16) a `XXL` (32). Ver [`audit.md`](../audit.md).

## Reglas

- **Default del sistema: `radius/M` (12)** para cards, banners y snackbars.
- **Radios anidados:** el radio interno = radio externo − padding. Una card `M` (12) con padding 8 contiene elementos `XS` (4).
- `radius/XXXL` (160) se usa para lograr forma de **píldora**; en código se recomienda un valor "full" (`9999px` / `Capsule()` / `RoundedCornerShape(50%)`) para que no dependa del alto del componente.
- Los componentes de pantalla completa (bottom sheets) sólo redondean las esquinas superiores.
