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

## Reglas (página *Corner Radius* de Figma)

La forma comunica jerarquía y relación entre elementos. La escala se basa en múltiplos de 4 para garantizar nitidez en pantallas de alta densidad.

- **Default del sistema: `radius/M` (12)** para cards, banners y snackbars.
- **Regla del balance (anidación):** cuando un componente vive dentro de otro, su radio baja **4px** respecto del contenedor, para crear paralelismo óptico. Ejemplo: **padre 12 → hijo 8**.
- **Full-bleed:** si una card (`radius/M`) se extiende hasta el borde de la pantalla, las esquinas que tocan el borde pasan a **0** y el radio se mantiene sólo en las esquinas internas.
- **Botones dentro de contenedores grandes:** los botones usan 8, pero el CTA principal de un bottom sheet (`radius/L`) puede evaluar 12 para acompañar la curvatura, siempre que no rompa la consistencia del botón en el resto de la App.
- **Píldora:** `radius/XXXL` (160). En código conviene un valor "full" (`9999px` / `Capsule()` / `RoundedCornerShape(50)`) para no depender del alto del componente.
