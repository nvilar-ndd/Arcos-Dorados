# Tile · Category

> **Fuente de la verdad:** [Design Resources CORE › Tile (category)](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2117-2643) · `Tile` ([4583:10376](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4583-10376), 3), `Category_Primary` ([2117:2647](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2117-2647), 3), `Category_Secondary` ([2117:2654](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2117-2654), 3) y los contenedores `Principal categories`, `Categories`, `Stripe secondary categories`.
> **Origen:** ArchWay · Nivel 2 · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Base de Categorías*.

## Propósito

| | Tile | Category (Tile 💠 Category) |
|---|---|---|
| Qué es | Bloque tocable con ícono y label que lleva a un destino de la app | Elemento que representa una categoría de productos |
| Nivel | Core | Específico (las categorías de McDonald's) |
| Contenido | Ícono protagonista + label | Ilustración de producto + label |
| Ejemplos | Accesos de la Home: reserva de cumpleaños, Mis beneficios, Misiones | Hamburguesas, Bebidas… |

Los dos **siempre navegan**: no seleccionan ni filtran (eso es [Chip](./chip.md)) y **no tienen estado Selected**. No es un botón: el ícono o la ilustración son el protagonista.

## Anatomía y tokens

| | Tile | Category Primary | Category Secondary |
|---|---|---|---|
| Tamaño | 116 × 112 | 184 × 104 | 102 × 120 |
| Radio | `Valor/radius/L` (16) + squircle 60 % | ídem | ídem |
| Fondo / borde | `Surface/default` / `Border/subtle` 0.5 pt | ídem | ídem |
| Gráfico | Ícono sobre `Surface/brand` | Ilustración 72 × 72, arriba a la derecha | Ilustración 64 × 64, centrada arriba |
| Label | `Label/Label Small` | `Label/Label Medium`, abajo a la izquierda | `Label/Label Small`, centrado |
| Máx. texto | — | 2 líneas, ellipsis | 2 líneas · 16 caracteres |

Pressed: fondo `Button/secondary-bg-pressed`; en Category, "una transformación visual del componente completo" (tamaño y color) por menos de 1 s antes de navegar. Skeleton: `Surface/subtle` / `Surface/muted`, mismas dimensiones.

El borde `Border/subtle` (1.78:1) es decorativo: el bloque se reconoce por el contenido.

## Propiedades

`Label` / `Category Title` (texto) · `Icons` / `Illustration` (instance swap) · `State` (Enabled · Pressed · Skeleton).

## Accesibilidad

- `accessibilityLabel` = nombre del destino ("Hamburguesas"; no "Categoría" ni "Imagen de hamburguesa").
- `accessibilityHint` = "Ver productos de Hamburguesas"; rol `button` (navega).
- Skeleton: `accessibilityHidden = true`.
- Pressed con transformación: respetar "Reducir movimiento" (sólo cambio de color).
