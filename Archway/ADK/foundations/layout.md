# Layout, formato y área accesible

> **Fuente de la verdad:** [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System), páginas *Safe Accesibility Area*, *templete* y *UI Shell*.
> **Extraído vía Figma MCP:** 2026-10-09.

## Formato

| | Valor |
|---|---|
| Pantalla | **1080 × 1920**, vertical 9:16, densidad 1.0× |
| Interacción | Touch, de pie, a 50–70 cm |
| Breakpoints | **Ninguno**: es el único formato diseñado |

ADK es web (igual que Dashboard), así que el layout se puede construir con CSS. Hoy todo está en px absolutos sobre ese único lienzo.

## Zonas de la pantalla

```
x: 0    32          280  328                           984  1032 1048 1080
   ┌──────────────────────────────────────────────────────────────────┐ y: 0
   │                         HEADER  (h 192)                          │
   │         padding 104 top · 80 lados · 24 bottom · gap 96          │
   ├──────────────────────────────────────────────────────────────────┤ 192
   │    │    NAV    │    │          CONTENIDO          │    │ ▌  │    │
   │ 32 │    248    │ 48 │             656             │ 48 │ 16 │ 32 │
   │    │ categorías│    │       módulos (gap 56)      │    │scr │    │
   │    │           │    │                             │    │    │    │
   ├──────────────────────────────────────────────────────────────────┤ 1672
   │                     FOOTER FLOTANTE  (h 248)                     │
   │            Footers completos: 328 Home · 496 Attract             │
   └──────────────────────────────────────────────────────────────────┘ 1920
```

| Token | Valor | Descripción |
|---|---|---|
| `layout.screen-width` / `screen-height` | 1080 / 1920 | Lienzo |
| `layout.header-height` | 192 | Header con logo y título |
| `layout.margin-left` | 32 | Margen izquierdo |
| `layout.nav-width` | 248 | Navegación de categorías, botones de nav, user footer |
| `layout.column-gap` | 48 | Separación nav ↔ contenido |
| `layout.content-width` | 656 | Columna de módulos (banners, carrito, etc.) |
| `layout.margin-right` | 96 | Incluye la barra de scroll (16) en x = 1032 |
| `layout.scrollbar-width` | 16 | Scroll siempre visible |
| `layout.module-gap` | 56 | Entre módulos de contenido |
| `layout.footer-height` | 248 | Footer flotante en y = 1672 |

### Medidas de módulos (columna de 656)

| Módulo | Medida |
|---|---|
| Banner | 656 × 200 |
| Categorías | 656 × 424 |
| Mis Recompensas | 656 × 384 |
| Repeat | 656 × 344 |
| Recomendados | 656 × 712 |
| Carrito (footer) | 656 × 80 |

El contenido usa sub-grillas de 208 (cards de producto, 3 por fila con gap 16) y 320 (botones de categoría, 2 por fila con gap 16).

## Área accesible (Safe Accessibility Area)

La página define una **zona de alcance en el tercio inferior**: 1080 × 800, con una variante extendida de 1080 × 960.

Ver el frame en [Figma › Safe Accesibility Area](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=335-69).

| Regla | Detalle |
|---|---|
| Para qué existe | Personas en silla de ruedas, de baja estatura o niños: los controles críticos tienen que entrar en esta zona |
| Modo accesibilidad | Los componentes tienen variantes "Accessibility" (por ejemplo nav 80 × 48, User_Footer accesible) |
| Qué pasa al activarlo | El contenido baja a la zona inferior |
| Base normativa | Coincide con el criterio de alcance de ADA 308 (rango 15–48 in desde el piso) y EN 301 549 |

> Lo que falta documentar (A-L02): qué componentes se mueven, cómo se activa el modo y cómo se sale.

## Footer por pantalla

El componente `Footers_shell` (página *UI Shell*) tiene **15 variantes de pantalla**:

| Grupo | Pantallas |
|---|---|
| Inicio | Attract, ComoInicioSesion, Método |
| Home | Home con o sin productos, con o sin login |
| Producto | Detalle, Dimensionamiento |
| Cierre | Resumen, Cupones |

Cada pantalla define qué CTAs muestra el footer: 22 variantes, 7 pantallas y 11 CTAs.

## Tamaños de toque

| Elemento | Alto | Estado |
|---|---|---|
| Botón Large | 80 | ✅ |
| Botón Medium | 56 | ✅ |
| Botón Small | 40 | ⚠️ Figma ya lo depreca en el footer por área de toque |
| Nav button | 56 | ✅ |
| Chip | 56 / 40 | ⚠️ El de 40 es chico para kiosco |
| Quantity | 40 | ⚠️ Botones +/− dentro de 40 de alto |
| Teclas del teclado | 48 | ✅ |

**Propuesta:** `layout.touch-target-min` = 56 en kiosco, y 48 en tablet. Los 44 px de WCAG 2.5.5 están pensados para dedos a distancia de un teléfono; en kiosco, de pie y apurado, hace falta más.

## Formatos futuros

Están previstos tablets y pantallas más chicas para locales pequeños, centros de postres y McCafé. El layout actual no se adapta: todo es px fijos.

La propuesta de breakpoints, grilla fluida y modo tipográfico está en [`Convergencia/adk-archway.md` § Formatos](../../Convergencia/adk-archway.md#formatos-tablet-y-pantallas-chicas).
