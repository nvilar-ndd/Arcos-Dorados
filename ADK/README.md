# ADK — Advance Digital Kiosks

Diseño, auditoría y documentación de los **flujos del kiosco de autoservicio** de Arcos Dorados (McDonald's Latinoamérica): pantalla vertical 1080 × 1920, touch, de pie o en silla de ruedas, a 50–70 cm.

Esta carpeta documenta **producto y flujos**. El **sistema de diseño** (foundations, tokens, componentes Vue, Storybook) vive en [`Archway/ADK`](../Archway/ADK) y no se duplica acá: se enlaza.

| Carpeta | Qué documenta | Fuente de la verdad |
|---|---|---|
| **`ADK/`** (esta) | Flujos, pantallas, customer journeys, auditorías de flujo, `design.md` por feature | Los 3 archivos de producto en Figma |
| [`Archway/ADK/`](../Archway/ADK) | Foundations, tokens, componentes, Storybook | [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) |
| [`Voz-y-Tono/`](../Voz-y-Tono) | Manual de voz, tono y estilo v1.0 | — |
| [`Base-de-conocimiento/`](../Base-de-conocimiento) | Leyes de UX y WCAG | — |

## Archivos de Figma (producto)

| Archivo | Alcance | Doc |
|---|---|---|
| [[ADK] Login](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/-ADK--Login) | Attract, idiomas, identificación con token/QR, métodos de retiro, Home, inactividad, cambio de cuenta | [`flows/01_home-login`](./flows/01_home-login/design.md) |
| [[ADK] Productos, Loyalty y Cupones](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/-ADK--Productos--Loyalty---Cupones) | Catálogo, McCombos, personalización, promociones, errores FLEX, Loyalty, cupones, filtros | [`02`](./flows/02_productos/design.md) · [`03`](./flows/03_promociones/design.md) · [`04`](./flows/04_loyalty/design.md) · [`05`](./flows/05_cupones/design.md) |
| [[ADK] Carrito, Checkout y Cross Selling](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/-ADK--Carrito---Checkout--Cross-Selling) | Carrito, checkout, pagos, factura electrónica, OTP, errores, cross selling / NBO | [`06`](./flows/06_carrito/design.md) · [`07`](./flows/07_checkout/design.md) · [`08`](./flows/08_factura-electronica/design.md) · [`09`](./flows/09_otp/design.md) · [`10`](./flows/10_errores/design.md) · [`11`](./flows/11_cross-selling/design.md) |

El inventario completo de páginas, secciones y node IDs está en [`docs/mapa-de-flujos.md`](./docs/mapa-de-flujos.md).

## Cómo se trabaja

```
Figma (SSOT) ──► Extracción vía MCP ──► audits/ (hallazgos) ──► aprobación ──► flows/*/design.md ──► Dev
```

1. **Figma es la única fuente de la verdad.** Esta carpeta documenta lo que está en Figma; no lo reemplaza.
2. **Nada se aplica sin aprobación.** Los hallazgos nacen `Pendiente` en [`audits/`](./audits/README.md) y pasan a `Aprobado` o `Rechazado`.
3. **Todo hallazgo se justifica** con una regla de [`docs/principios-kiosco.md`](./docs/principios-kiosco.md), una Ley de UX o un criterio WCAG, con link.
4. **Todo texto de UI se valida** contra el [manual de voz y tono](../Voz-y-Tono).

## Estructura

```
ADK/
├── README.md
├── CLAUDE.md                     ← contexto para agentes (rol, reglas, fuentes)
├── docs/
│   ├── fuentes-de-verdad.md      ← Figma, librerías, Archway, voz y tono, íconos, ilustraciones
│   ├── principios-kiosco.md      ← reglas físicas con umbrales medibles (el "contrato" de auditoría)
│   └── mapa-de-flujos.md         ← inventario de los 3 archivos con node IDs y estado
├── flows/                        ← un design.md por feature
│   ├── 01_home-login/  …  11_cross-selling/
├── audits/                       ← auditorías de flujo, una por archivo/fecha
├── templates/
    ├── design.md                 ← plantilla de spec de feature
    ├── audit.md                  ← plantilla y checklist de auditoría
    └── pull-request.md           ← checklist para PRs que tocan ADK/
```

## Estados de un `design.md`

| Estado | Significa |
|---|---|
| 🧭 Relevado | Inventario extraído de Figma. Sin auditar |
| 🔍 En auditoría | Hallazgos abiertos en `audits/` |
| 🚧 En revisión UX | La página de Figma está en *PENDIENTES - EN REVISIÓN UX* |
| ✅ Ready for Dev | La página de Figma está en *READY for DEV* y no tiene hallazgos P0/P1 abiertos |
