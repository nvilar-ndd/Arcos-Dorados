# Mapa de módulos

> Base: IA del panel izquierdo **v-03/11/26** y árbol *Country → Configuration* ([`information-architecture.md`](../../Archway/Dashboard/structure/information-architecture.md)), cruzados con los 17 archivos de producto relevados en Figma el **2026-11-17**. Inventario de flujos con node IDs: [`mapa-de-flujos.md`](./mapa-de-flujos.md).

## Panel izquierdo (gestión y operación)

Patrón por defecto: listado inicial (Card List o tabla read-only) + flujo paso a paso para crear o editar.

| # | Módulo | Subcategorías (IA v-03/11/26) | Páginas en Figma | Figma | Riesgo | Estado |
|---|---|---|---|---|---|---|
| 00 | Transversal | — | Login · Home (con/sin país) · Perfil · ABM de usuarios · General setting · Logs · Audits · Providers Auth | [Login](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/) · [Home + Header](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/) | 🔴 Alto | 🧭 |
| 01 | Países | → Country → Configuration | 22 páginas (ver abajo) | [Countries](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/) | 🔴 Alto | 🧭 |
| 02 | Restaurantes | *SUB MENU* sin detallar | Listado · Crear · Detalle · Mapa · Cumpleaños (config, kits, upselling) · Template menú lateral | [Restaurantes](https://www.figma.com/design/2avCORvKSEYLW4epxnWWod/) | 🔴 Alto | 🧭 |
| 03 | Promociones | — | Promociones · Por método de pago | [Promociones](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/) | 🔴 Alto | 🔍 [Audit 001](../audits/001-promociones.md) |
| 04 | Pedidos | — | Listado · Detalle | [Orders](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/) | 🟠 Medio | 🧭 |
| 05 | Productos | — | Productos (listado) · deprecated | [Productos](https://www.figma.com/design/IsLhjURFelHOQUgptnmrAZ/) | 🔴 Alto | 🧭 Parcial |
| 06 | Delivery | Costes de envío · ETA | Costes de envío · ETA | [Delivery](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/) | 🔴 Alto | 🧭 |
| 07 | Agenda de cumpleaños | Agenda · entrevista | Agenda · Entrevista | [Cumpleaños](https://www.figma.com/design/YDN5FvBTi6V86IxDRlsTyo/) | 🟡 Bajo | 🧭 (cover *To Do*) |
| 08 | App Content | Animaciones · Campañas primera compra · Legal | Animaciones · Primera compra · Legal · **Menú mi cuenta** · **Navigation bars** · **Centro de Notificaciones** | [App content](https://www.figma.com/design/RRK9N3bdYF54zZ0KJ6ad0g/) | 🟠 Medio | 🧭 |
| 09 | Wallet | Wallet Tiers | "Wallet / No usar!" | [Wallet](https://www.figma.com/design/OXZEw713xJ4RnlPy7zzeoR/) | — | ⬜ Deprecado |
| 10 | Misiones | Misiones · Pines | Misiones · Pines · **Administrar progreso de usuarios** | [Misiones](https://www.figma.com/design/Xbj2z2metjEujuL05vmRSO/) | 🟡 Bajo | 🧭 |
| 11 | Loyalty | Productos digitales · Cashback | Cashback · Productos digitales · **Puntos extra** | [Loyalty](https://www.figma.com/design/zUP6SZD2xtlaSeK9iVM9k7/) | 🟠 Medio | 🧭 |
| 12 | Home Content | Cards · Banners · Módulos · Product List · Pop-up | Card · Banners · Listas de productos · Módulos · Pop-up in App | [Home content](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/) | 🟠 Medio | 🧭 |
| 13 | Pagos | Pago en cuotas | Pago en cuotas | [Pagos](https://www.figma.com/design/DZwLs52NNCdfNDDHImbVjV/) | 🔴 Alto | 🧭 |
| 14 | Pedido por voz | — | Configuración · Deshabilitado | [Voice Orders](https://www.figma.com/design/XPX8KcClMgKFof53nwuiSu/) | 🟡 Bajo | 🧭 |
| 15 | Game | — | Game · Evolutivo de calendario · ❌ Migración (vacía) | [Game](https://www.figma.com/design/Sr4tidhouzS3CaV3EO4jaN/) | 🟡 Bajo | 🧭 |

**En negrita:** páginas que están en Figma pero no en la IA. **Riesgo** (criterio inicial, a validar): 🔴 un error corta ventas o cobra mal en uno o más mercados · 🟠 se ve mal o confunde al cliente final · 🟡 impacto acotado.

## Country → Configuration (configuración de mercado)

Patrón: formulario por secciones con [SubPanelLeft](../../Archway/Dashboard/structure/sub-panel-left.md) y *Guardar configuración*. Se documenta dentro de [`flows/01_paises`](../flows/01_paises/design.md).

| Sección (árbol *Ai - Country*) | Subsecciones | Página en [Countries](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/) | Se cruza con |
|---|---|---|---|
| Detail | — | ↳ Detalle (incluye JSON) | — |
| Main | Main · App Version | ↳ Main | — |
| Products | Categories & Products · Cross-Selling · Up-Selling \* · Persuasive Label \* | — | 05 Productos |
| Services | Delivery Other Settings · Delivery Tips · PickUp · General Limits · Time | ↳ Order Limits (¿= General Limits?) | 06 Delivery · 02 Restaurantes |
| Integrations | — | ↳ Integrations | — |
| Validations | Fiscal Fields · Review inherited items | ↳ Validaciones | — |
| Promotions | — | ↳ Promotions | 03 Promociones |
| Birthday | — | ↳ Cumpleaños (MVP) · Entrevista, Kits y Tour · Monitoreo de disponibilidad | 07 · 02 |
| Loyalty | — | — (nota en Main: "loyalty: se quita") | 11 Loyalty |
| Payment | — | ↳ Payment | 13 Pagos |
| Currency | — | ↳ Currency | — |
| Rating | — | ↳ Rating | — |
| Tips | — | — | — |
| Push | — | ↳ Notificaciones Push | 08 (Centro de Notificaciones) |
| Special Sales | McDía · Special Sales (other events) | ↳ Special Sales (propuesta nueva por tipo de evento) | 03 Promociones |
| Anti-Fraud | — | ↳ Antifraude | — |
| Cancellations | Manual · Automatic · Reasons · Refunds | ↳ Cancelaciones · ↳ Refunds | 04 Pedidos |
| Profile | Hobbies · Account | — | — |
| Enrollment | — | ↳ Enrollment | — |
| Parameters | Global · AdManager · IM · Marketing · Configure Parameters | — | — |
| Wallet | — | — | 09 Wallet |
| *(no está en el árbol)* | — | ↳ **ADK** · ↳ **Configuración APP** · ↳ **Ticket de compra** | [ADK](../../ADK/README.md) |

> **Doble entrada:** varios dominios se configuran en más de un lugar: Promociones (panel y Country), Delivery (panel y Services), **Cumpleaños (Countries, Restaurantes y Agenda)**, ADK (Countries y Restaurantes › Crear). Hay que definir qué vive en cada nivel ([Q-03](./preguntas-abiertas.md), [Q-09](./preguntas-abiertas.md)).

## Prioridad sugerida de auditoría

1. **03 Promociones** — el archivo más grande y el más reciente; ciclo de vida completo y mayor riesgo.
2. **02 Restaurantes** — formulario largo de alta (8 bloques, pagos por proveedor, MOP, ADK).
3. **06 Delivery** — reglas de coste con conflictos y solapamientos; ETA bien documentado por casos de uso.
4. **01 Países** — define los defaults que heredan los demás módulos; 22 páginas.
5. **12 Home Content** y **08 App Content** — contenido que ve el cliente; necesitan live preview (BO-PRE-01).
