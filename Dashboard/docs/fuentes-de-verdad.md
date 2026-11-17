# Fuentes de la verdad

> Actualizado el **2026-11-17** con el relevamiento vía Figma MCP de la carpeta de producto. El DS se documenta en `Archway/Dashboard` (extracción del 2026-10-08, revisada el 2026-11-16).

## Archivos de producto (Figma)

Carpeta **[Especificación](https://www.figma.com/files/1180156850377231464/folder/420538859)**: 17 archivos, uno por módulo. Inventario de páginas, secciones y node IDs en [`mapa-de-flujos.md`](./mapa-de-flujos.md).

| Módulo | Archivo | File key | Estado (cover) | Última edición |
|---|---|---|---|---|
| Promociones | [[DashBoard] Promociones](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/) | `eY15rEgfQpHeY2H50TkbKW` | In Progress | 2026-11-16 |
| Restaurantes | [[Dashboard] Restaurantes](https://www.figma.com/design/2avCORvKSEYLW4epxnWWod/) | `2avCORvKSEYLW4epxnWWod` | In Progress | 2026-10-20 |
| Countries | [[DashBoard] Countries](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/) | `usfvpsKjGaLLwjc8deDS0a` | In Progress | 2026-11-12 |
| Pedidos | [[DashBoard] Orders](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/) | `vFtg6osMX8fx6ebK08NKSj` | In Progress | 2026-11-04 |
| Productos | [[Dashboard] Productos](https://www.figma.com/design/IsLhjURFelHOQUgptnmrAZ/) | `IsLhjURFelHOQUgptnmrAZ` | In Progress | 2026-10-21 |
| Delivery | [Delivery (Costes de envío)](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/) | `5pzsamjfXhKuKXYmaT1bMV` | In Progress | 2026-11-05 |
| Agenda de cumpleaños | [[DashBoard] Cumpleaños](https://www.figma.com/design/YDN5FvBTi6V86IxDRlsTyo/) | `YDN5FvBTi6V86IxDRlsTyo` | To Do | 2026-10-29 |
| App Content | [App content](https://www.figma.com/design/RRK9N3bdYF54zZ0KJ6ad0g/) | `RRK9N3bdYF54zZ0KJ6ad0g` | In Progress | 2026-11-13 |
| Wallet | [[DashBoard] Wallet](https://www.figma.com/design/OXZEw713xJ4RnlPy7zzeoR/) | `OXZEw713xJ4RnlPy7zzeoR` | To Do | 2026-02-19 |
| Misiones | [[DashBoard] Misiones](https://www.figma.com/design/Xbj2z2metjEujuL05vmRSO/) | `Xbj2z2metjEujuL05vmRSO` | In Progress | 2026-10-13 |
| Loyalty | [[DashBoard] Loyalty](https://www.figma.com/design/zUP6SZD2xtlaSeK9iVM9k7/) | `zUP6SZD2xtlaSeK9iVM9k7` | In Progress | 2026-08-14 |
| Home Content | [Home content (new)](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/) | `pjrqXNbG3C1jGMqAIpyX52` | In Progress | 2026-11-13 |
| Pagos | [[DashBoard] Pagos](https://www.figma.com/design/DZwLs52NNCdfNDDHImbVjV/) | `DZwLs52NNCdfNDDHImbVjV` | In Progress | 2026-10-14 |
| Pedido por voz | [[Dashboard] Voice Orders](https://www.figma.com/design/XPX8KcClMgKFof53nwuiSu/) | `XPX8KcClMgKFof53nwuiSu` | In Progress | 2026-10-22 |
| Game | [[DashBoard] Game](https://www.figma.com/design/Sr4tidhouzS3CaV3EO4jaN/) | `Sr4tidhouzS3CaV3EO4jaN` | In Progress | 2026-08-21 |
| Transversal · Home | [[DashBoard] Home + Header](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/) | `z9thVNqJLSqKMKUJQM9AGo` | Done | 2026-07-23 |
| Transversal · Login | [[DashBoard] Login](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/) | `N60mLC2VbXIHHzTnY18dRf` | In Progress | 2026-05-08 |

El archivo del DS ([DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation)) tiene además la IA del panel y las plantillas de pantalla (Country › Promociones y Promotions › Crear) que se usan como referencia de medidas.

## Sistema de diseño y contexto (resto del repo)

| Qué | Dónde | Para qué se usa acá |
|---|---|---|
| Dashboard DS — README | [`Archway/Dashboard`](../../Archway/Dashboard/README.md) | Mapa del sistema |
| Foundations | [`color`](../../Archway/Dashboard/foundations/color.md) · [`typography`](../../Archway/Dashboard/foundations/typography.md) · [`spacing`](../../Archway/Dashboard/foundations/spacing.md) · [`radius`](../../Archway/Dashboard/foundations/radius.md) · [`grid`](../../Archway/Dashboard/foundations/grid.md) | Umbrales de [`principios-dashboard.md`](./principios-dashboard.md) |
| Componentes (27 familias) | [`Archway/Dashboard/components`](../../Archway/Dashboard/components/README.md) | Anatomía, variantes y estados al auditar pantallas |
| UI shell e IA | [`structure/`](../../Archway/Dashboard/structure/README.md) · [`information-architecture.md`](../../Archway/Dashboard/structure/information-architecture.md) | Módulos y navegación |
| Plantillas de pantalla | [`usage/`](../../Archway/Dashboard/usage/README.md) | Patrón según contexto y medidas |
| Tokens | [`dashboard.tokens.json`](../../Archway/Dashboard/tokens/dashboard.tokens.json) | Valores Light/Dark |
| Audit del DS | [`Archway/Dashboard/audit.md`](../../Archway/Dashboard/audit.md) | Los hallazgos `D-*` se citan, no se repiten |
| Convergencia | [`Convergencia/dashboard-archway.md`](../../Archway/Convergencia/dashboard-archway.md) | Decisión DS separado vs. ArchWay |
| Storybook | `Archway/Dashboard/storybook` · http://localhost:6007 | Comportamiento real de componentes y plantillas |
| Íconos e ilustraciones | [`Iconografia`](../../Archway/Iconografia/README.md) · [`Ilustraciones`](../../Archway/Ilustraciones/README.md) | — |
| Voz y tono v1.0 | [`Voz-y-Tono`](../../Voz-y-Tono/README.md) | Errores, confirmaciones, estados vacíos, CTA |
| Leyes de UX · WCAG | [`leyes-de-ux.md`](../../Base-de-conocimiento/leyes-de-ux.md) · [`accesibilidad-wcag.md`](../../Base-de-conocimiento/accesibilidad-wcag.md) | Justificación de hallazgos |

## Qué falta relevar

- [x] Links y file keys de los archivos de producto del Dashboard (2026-11-17).
- [ ] Ambiente del Dashboard en producción / staging para revisar flujos reales (con un usuario de prueba por rol).
- [ ] Matriz de roles y permisos actual.
- [ ] Métricas de uso por módulo (si existen) para priorizar auditorías.

> La documentación de Arcos-Dorados se actualiza seguido. Antes de cada auditoría se toma la versión vigente de `main`; si un umbral del DS cambió, se corrige [`principios-dashboard.md`](./principios-dashboard.md).
