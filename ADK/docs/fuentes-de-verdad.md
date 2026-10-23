# Fuentes de la verdad

> Relevado vía Figma MCP el **2026-10-23**.

## Archivos de producto (Figma)

| Archivo | File key | Páginas de trabajo | Estado declarado en Figma |
|---|---|---|---|
| [[ADK] Login](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/-ADK--Login) | `cJxVzUn17o3SgYkfiuXSkm` | Nuevo Login (con Token) · Home | Sin páginas de estado (READY / PENDIENTES) |
| [[ADK] Productos, Loyalty y Cupones](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/-ADK--Productos--Loyalty---Cupones) | `CkrLK7rb1I1DKjKCvZOpLN` | Flujos de productos · Error integración FLEX · Flujos de Promociones · Cupones · Loyalty · Filtros y etiquetas | ✅ READY: todas menos *Filtros y etiquetas* (🚧 En revisión UX) |
| [[ADK] Carrito, Checkout y Cross Selling](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/-ADK--Carrito---Checkout--Cross-Selling) | `FgvtqbTZN2gkuUJbegbhrA` | Carrito · Checkout · Errores de alerta · Factura electrónica · OTP · Cross Selling / NBO | ✅ READY: todas menos *Cross Selling / NBO* (debajo del separador, sin estado) |

**Convención de los archivos:** cada flujo es una `section` con título, frames de 1080 × 1920 en orden de izquierda a derecha, notas y marcadores de toque (👈, son anotaciones, no UI). Las secciones **`Keys …`** reúnen las pantallas con sus claves de traducción para desarrollo.

## Librerías habilitadas en los 3 archivos

| Librería | Rol | Observación |
|---|---|---|
| `[ADK] Design System` | Componentes y shell del kiosco | ✅ Fuente correcta |
| `Iconography` | Íconos McDonald's Global | ✅ |
| `Illustrations Guide` | Ilustraciones | ✅ |
| `Componentes App (Design System)` | Componentes de la **App mobile** | ⚠️ Riesgo de mezclar componentes móviles en kiosco (K-SIS-01). Verificar uso |
| `Themes` · `Color Guide` · `Tipography` · `2xGrid` | Librerías de estilos previas a ArchWay | ⚠️ Probable legado. Verificar si algún nodo las consume |
| `[Archway] Foundations Library` | Foundations destino | ❌ **No está agregada** en ningún archivo de producto. Bloquea el binding de tokens (Audit DS **A-S01**, Convergencia fase 2) |

## Sistema de diseño y contexto (resto del repo)

| Qué | Dónde | Para qué se usa acá |
|---|---|---|
| ADK DS — README | [`Archway/ADK`](../../Archway/ADK) | Mapa del sistema del kiosco |
| Foundations | [`color`](../../Archway/ADK/foundations/color.md) · [`typography`](../../Archway/ADK/foundations/typography.md) · [`spacing`](../../Archway/ADK/foundations/spacing.md) · [`layout`](../../Archway/ADK/foundations/layout.md) | Umbrales de [`principios-kiosco.md`](./principios-kiosco.md) |
| Componentes | [`Archway/ADK/components`](../../Archway/ADK/components) | Anatomía, variantes y estados al auditar pantallas |
| Tokens | [`adk.tokens.json`](../../Archway/ADK/tokens/adk.tokens.json) | Valores y destino en ArchWay |
| Audit del DS | [`Archway/ADK/audit.md`](../../Archway/ADK/audit.md) | Los hallazgos `A-*` se citan, no se repiten |
| Convergencia | [`Convergencia/adk-archway.md`](../../Archway/Convergencia/adk-archway.md) | Plan ADK → ArchWay |
| Íconos | [`Archway/Iconografia`](../../Archway/Iconografia) · [Figma](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=9-11) | 216 íconos; catálogo por tipo (ordering, payment, loyalty, fulfillment…) |
| Ilustraciones | [`Archway/Ilustraciones`](../../Archway/Ilustraciones) · [Figma](https://www.figma.com/design/E0n9VRsdG5TfPRqhf9sbFK/Illustrations-Guide?node-id=0-1) | Payments, Delivery & Pickup, Devices (kiosco), Loyalty |
| Voz y tono v1.0 | [`Voz-y-Tono`](../../Voz-y-Tono) · [versión completa](../../Voz-y-Tono/version-completa/manual-voz-tono-estilo-v1.0.md) | Revisión de copy: errores, esperas, confirmaciones, CTA, localización |
| Leyes de UX | [`leyes-de-ux.md`](../../Base-de-conocimiento/leyes-de-ux.md) | Justificación de hallazgos |
| WCAG | [`accesibilidad-wcag.md`](../../Base-de-conocimiento/accesibilidad-wcag.md) | Criterios citados por número |

> La documentación de Arcos-Dorados se actualiza seguido. Antes de cada auditoría se toma la versión vigente de `main`; si un umbral cambió, se corrige [`principios-kiosco.md`](./principios-kiosco.md).
