# Skeleton

> **Fuente de la verdad:** [Design Resources CORE › Skeleton](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4081-14653) · component set `Skeleton` (6 variantes).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

> "Placeholder visual que reemplaza al contenido real mientras los datos están cargando. Comunica que algo va a aparecer ahí, sin anticipar forma, color ni significado del contenido final." — Figma

| ¿…? | Usar |
|---|---|
| ¿Una acción está en progreso? | Loader ([Progress](./progress.md)) |
| ¿No hay datos (estado vacío)? | Empty State |
| ¿El contenido llegó pero se procesa? | Loader |

Muchos componentes traen su propio estado `Skeleton` (Switch, Tile, Category, Banner, Gamification Bar, Loyalty home card, Carrousel cards).

## Anatomía y tokens

| Type | Tamaño base | Radio | Uso |
|---|---|---|---|
| Square | 72 × 72 | `Valor/radius/S` (8) | Imágenes, thumbnails, avatares cuadrados |
| Rectangle | 92 × 16 | `Valor/radius/XS` (4) | Líneas de texto, barras, labels |
| Circle | 72 × 72 | `Valor/radius/XXXL` (círculo) | Avatares, íconos |

Redimensionables. Sin estados interactivos (no se toca, no se foquea).

| Background | Token | Uso |
|---|---|---|
| Subtle | `Surface/subtle` (`#F5F5F5`) | Fondo del contenedor en estado skeleton |
| muted | `Surface/muted` (`#DBDBDB`) | Placeholders internos (imagen, texto, barras) |

> La ficha de Figma nombra `Layer/02` y `Layer/03` con los valores cruzados; el propio archivo lo marca "⚠ A definir" ([C-S05](../audit.md#c-s05--skeleton)). Este doc sigue a las variables enlazadas.

**Shimmer:** la animación de brillo se implementa en código, no en Figma.

## Accesibilidad

- El skeleton es `accessibilityHidden` / `aria-hidden="true"`; el contenedor anuncia "Cargando" (`aria-busy="true"`).
- Con "Reducir movimiento", sin shimmer (bloque estático).
- Mismas dimensiones que el contenido final: el layout no salta al cargar (CLS).
