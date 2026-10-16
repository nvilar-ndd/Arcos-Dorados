# Iconografía

> **Fuente de la verdad:** [Iconography (Figma)](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=9-11). Es la librería global de McDonald's y la usan todos los sistemas (ArchWay, Dashboard, ADK y Legacy).
> **Relevado vía Figma MCP:** 2026-10-16 · **216 íconos** en 20 páginas de tipos · **2.699 variantes**.

Hay un solo set de íconos para todos los productos: App, Web eCommerce, Dashboard y Kiosco. Ningún sistema dibuja sus propios íconos ni usa emojis como íconos de sistema. Si falta uno, se crea en esta librería siguiendo el [manual de creación](./manual-creacion.md).

| Documento | Contenido |
|---|---|
| [`manual-creacion.md`](./manual-creacion.md) | Especificaciones de Global y paso a paso para crear un ícono nuevo. Sirve también como prompt para un agente |
| [`catalogo/`](./catalogo) | Un documento por página de Figma, con cada ícono, sus variantes y el link al nodo |
| [`audit.md`](./audit.md) | Inconsistencias encontradas en la librería, pendientes de aprobación |
| [`iconos.json`](./iconos.json) | Manifiesto con los IDs de Figma. Lo usa el script de export |
| `svg/` | SVG exportados por página e ícono. Se generan con el script (ver [Export a SVG](#export-a-svg)) |

## Catálogo

Sigue el mismo orden que las páginas de Figma.

| Tipo (página de Figma) | Qué contiene | Íconos | Variantes |
|---|---|---|---|
| [Account & Payment](./catalogo/account-payment.md) | Cuenta, perfil, datos personales y medios de pago guardados | 9 | 130 |
| [Arrows](./catalogo/arrows.md) | Flechas, chevrons y orden de listas | 9 | 180 |
| [Bottom Navigation](./catalogo/bottom-navigation.md) | Tab bar de la App, con estado activo | 14 | 160 |
| [Brand](./catalogo/brand.md) | Marca: arcos, logo, sticker | 6 | 70 |
| [Checkbox](./catalogo/checkbox.md) | Checks circulares y cuadrados | 2 | 35 |
| [Content](./catalogo/content.md) | Nutrición, imagen, compartir, abrir link | 6 | 90 |
| [Daypart](./catalogo/daypart.md) | Desayuno, almuerzo, cena | 3 | 60 |
| [Controls](./catalogo/controls.md) | Acciones de interfaz y categorías del menú del Dashboard | 21 | 222 |
| [Devices](./catalogo/devices.md) | Mobile, tablet, desktop, kiosco | 4 | 55 |
| [Fulfillment](./catalogo/fulfillment.md) | Delivery, drive thru, mostrador, mesa | 12 | 185 |
| [Information Labels](./catalogo/information-labels.md) | Info, éxito, error, advertencia | 7 | 120 |
| [Location & Directions](./catalogo/location-directions.md) | Ubicación, direcciones, distancia | 4 | 60 |
| [Restaurant Pins](./catalogo/restaurant-pins.md) | Pines para mapas | 1 | 8 |
| [Loyalty](./catalogo/loyalty.md) | Monedas y puntos | 3 | 33 |
| [Ordering](./catalogo/ordering.md) | Bolsa, favoritos, QR, ofertas, valoraciones | 16 | 296 |
| [Payment Providers](./catalogo/payment-providers.md) | Marcas de medios de pago por mercado | 33 | 190 |
| [Restaurant Features](./catalogo/restaurant-features.md) | Servicios del restaurante | 22 | 415 |
| [Settings & Accessibility](./catalogo/settings-accessibility.md) | Configuración, seguridad, idioma, voz, accesibilidad | 19 | 230 |
| [Social & Tech](./catalogo/social-tech.md) | Redes, tiendas, reproducción de medios | 14 | 105 |
| [Specials](./catalogo/specials.md) | Campañas puntuales (Appniversario 2024, BigFest) | 11 | 55 |

## Anatomía

| Tamaño | Padding | Stroke (inside) | Corner radius | Fry tip | Uso típico (propuesta) |
|---|---|---|---|---|---|
| 56px | 7px | 2.5px | 3px | 1.75px | Kiosco ADK, estados vacíos |
| 48px | 6px | 2.25px | 2.5px | 1.5px | Kiosco ADK, cards destacadas |
| 32px | 4px | 1.75px | 2px | 1px | Navegación lateral, tablet |
| 24px | 3px | 1.25px | 1.5px | .75px | **Default** en App y Web |
| 16px | 2px | 1px | 1px | .5px | Junto al texto, tablas densas del Dashboard |

Cada tamaño está **dibujado** con su propio grosor. Un ícono de 24 no se escala a 48: se usa la variante de 48.

## Versiones y color

El estándar es **15 variantes**: 3 versiones × 5 tamaños, combinando `Color`, `Outline` y `Size`. Las tres versiones son línea negra, relleno negro y relleno dorado. Algunos íconos suman colores de estado.

| Valor `Color` en Figma | Estilo de Figma | Hex | Token ArchWay | Estado |
|---|---|---|---|---|
| Black | `Primary/McDonald's Black` | `#292929` | `Icon/primary` | Igual |
| Gold | `Primary/McDonald's Gold` | `#FFBC0D` | `Icon/gold` | Igual |
| Red | `Primary/McDonald's Red` | `#DB0007` | `Icon/red` | Igual |
| White | `Primary/White` | `#FFFFFF` | `Icon/on-color` | Igual |
| Disable | `Secondary/Grey` | `#ADADAD` | `Icon/disabled` `#707070` | Distinto (ver [I-A01](./audit.md#i-a01--disable-no-llega-a-31)) |
| Grey / Dark Gray | `Secondary/Dark Grey` | `#6F6F6F` | `Icon/gray` `#5C5C5C` | Cercano |
| Link Blue / Blue | `Secondary/Blue` | `#006BAE` | `Link/default` `#1652B1` | Distinto (decisión D4 / K1 de [Convergencia](../Convergencia/README.md#decisiones-compartidas)) |
| Green | `Tertiary/McDonald's Green` | `#1F6437` | `color/green/800` | ≈ redondeo |
| Fuchsia | `Tertiary/Fuschia` | `#9A0A4D` | `color/fuchsia/700` | Igual |

Los estilos vienen de una librería de color de Global, no de las variables de ArchWay. La propuesta [I-S01](./audit.md#i-s01--color-por-estilos-de-otra-librería) es enlazarlos a `Icon/*`.

## Uso en diseño

- Usar siempre la **instancia** del component set y cambiar `Size`, `Color` y `Outline` desde las propiedades. No despegarla (detach) ni recolorearla a mano.
- **Outline = True** (línea) es el default en interfaz. **Outline = False** (relleno) marca el estado activo o seleccionado (tab bar, favorito) o un ícono destacado.
- **Gold** va sólo sobre fondos oscuros o como acento en relleno. Sobre blanco da 1.69:1, así que nunca puede ser el único indicador de estado (ArchWay A-06).
- Los íconos de **Payment Providers** y **Social & Tech** son marcas de terceros: no se recolorean.
- Los de **Specials** son de campañas puntuales y se retiran cuando termina la campaña.

## Uso en código

1. Exportar los SVG con el script (ver [Export a SVG](#export-a-svg)).
2. **Web (Nuxt 4 + Vue 3):** un componente `AwIcon` que carga el SVG del tamaño pedido y reemplaza el fill por `currentColor`. Así el color sale de los tokens (`text-icon-primary`, `text-icon-gold`).
3. **iOS y Android:** importar los SVG a un Asset Catalog como *template image* (iOS) o como Vector Drawables (Android), tintados con los colores de tema de ArchWay.

```vue
<!-- Propuesta de API: el componente todavía no existe -->
<AwIcon name="receipt" :size="24" variant="outline" class="text-icon-primary" aria-hidden="true" />
```

## Accesibilidad

| Criterio | Regla |
|---|---|
| Decorativo | Si al lado hay un texto que dice lo mismo, el ícono lleva `aria-hidden="true"` |
| Con significado | En un botón sólo-ícono, el `aria-label` va en el botón (por ejemplo "Cerrar") y el SVG queda oculto |
| Contraste (WCAG 1.4.11) | Un ícono que transmite información necesita 3:1 contra el fondo. Sobre blanco pasan Black, Red y los grises oscuros; Gold y Disable no |
| Área táctil | El ícono puede medir 16 o 24, pero el área tocable es de 44 × 44 como mínimo en mobile y de 56 × 56 en kiosco |
| Estado | Un estado no se comunica sólo con el cambio de color: se combina con Outline True/False o con texto |

## Export a SVG

Desde este repo no hay acceso directo a Figma. Los SVG se generan con un script que usa la API REST de Figma:

```bash
cd ~/Arcos-Dorados
FIGMA_TOKEN=tu_token node Archway/scripts/export-figma-assets.mjs iconos
FIGMA_TOKEN=tu_token node Archway/scripts/export-figma-assets.mjs iconos --page="Arrows"
```

- El token se crea en Figma › Settings › Security › Personal access tokens, con permiso de lectura de archivos.
- El script escribe `Iconografia/svg/<tipo>/<icono>/<variante>.svg`, por ejemplo `svg/account-payment/receipt/color-black-outline-true-size-24px.svg`.
- Hay que volver a correrlo cada vez que cambia la librería en Figma.
