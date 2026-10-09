# Product

> **Fuente:** [[ADK] Design System › Product 🟠](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=73-970). La página está marcada 🟠, en progreso.
> **Origen:** ADK. ArchWay tiene Product card (mobile) con otras medidas y tokens.

## Propósito

Todo lo que muestra un producto en el flujo: listado, detalle, personalización, tamaño, carrito y badges comerciales.

## Piezas

| Pieza | Medida | Uso |
|---|---|---|
| Product Card | 208 × 312 · radio 8 (Product) / 16 (Loyalty) | Grilla de productos, 3 por fila en la columna de 656 |
| Placeholder | 208 | Sin imagen o cargando |
| Producto Carrito | 888 × 512 (expandido) / 184 (compacto) | Resumen del pedido |
| Product Custom | 888 × 112 | Fila de ingrediente / extra |
| Product Size | 102 × 160 | Selector de tamaño (Chico / Mediano / Grande) |
| Dimensionamiento | 296 × 336 | Elección de McCombo grande |
| Loyalty Pill | 112 × 32 · `radius.full` | Puntos del producto |

## Estados de Product Card

| Estado | Detalle |
|---|---|
| Active | Imagen, nombre, precio |
| Selected | Borde Gold |
| Disable | Producto agotado (*Outage*) |
| Type | Product · Loyalty (canje con puntos) |

## Badges

Badge de 32 de alto y `radius.full`:

| Badge | Fondo | Token | Texto `#292929` |
|---|---|---|---|
| Nuevo | `#FFE49E` | `badge.new` | 11.67:1 ✅ |
| Recomendado / Más vendido | `#E2EABF` | `badge.recommended` | 11.61:1 ✅ |
| % Off / Últimos días | `#FE8234` (fuera de paleta) | — | 5.86:1 ✅ (con texto blanco, 2.48 ❌) |
| McCombo del día | Gold | `badge.loyalty` | 8.63:1 ✅ |
| Outage | — | — | Agotado |

| Loyalty Pill | Fondo | Token |
|---|---|---|
| Con puntos | Gold | `badge.loyalty` |
| Sin puntos suficientes | `#D6D6D6` | `badge.loyalty-disabled` |

## Responsive

La card de 208 es la unidad de la grilla de producto:

| Formato | Columnas |
|---|---|
| Kiosco | 3 en 656 |
| Tablet | `repeat(auto-fill, minmax(176px, 1fr))` |
| Kiosco chico | 2 |

Ver Convergencia § Formatos.

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Card | Un único `<button>` o `<a>` por card, con nombre accesible "Nombre, precio". Los badges van dentro del nombre accesible ("Nuevo") |
| Seleccionada | Gold sobre blanco no alcanza 3:1 (A-A01): borde Gold 3 px + check |
| Agotado | No usar sólo opacidad: texto "Agotado" visible y `aria-disabled="true"` |
| Precio | Formato local (`Intl.NumberFormat`) y moneda leída completa |
| Imágenes | Guía de producto en la página *Guía para mercado*: 1440 × 1080, se muestra cuadrada. Definir recorte seguro |
