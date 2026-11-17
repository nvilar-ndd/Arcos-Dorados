# Mapa de módulos

> Base: IA del panel izquierdo **v-03/11/26** y árbol *Country → Configuration*, documentados en [`information-architecture.md`](../../Archway/Dashboard/structure/information-architecture.md). Los archivos de producto todavía no están relevados: la columna *Figma* se completa al encontrarlos.

## Panel izquierdo (gestión y operación)

Patrón por defecto: listado inicial (Card List o tabla read-only) + flujo paso a paso para crear o editar.

| # | Módulo | Etiqueta en el componente | Subcategorías (v-03/11/26) | Listado | Riesgo operativo | Figma | Estado |
|---|---|---|---|---|---|---|---|
| 00 | Home · transversal | — | Permisos, historial de cambios | — | — | — | ⬜ |
| 01 | Países | — | → Country → Configuration (abajo) | Tabla | 🔴 Alto | — | ⬜ |
| 02 | Restaurantes | Restaurants | *SUB MENU* sin detallar | Card List | 🔴 Alto | — | ⬜ |
| 03 | Promociones | Promotions | — | Card List | 🔴 Alto | Ejemplos en DS | 🧭 Parcial |
| 04 | Pedidos | Orders | — | Tabla | 🟠 Medio | — | ⬜ |
| 05 | Productos | Products | — | Card List | 🔴 Alto | — | ⬜ |
| 06 | Delivery | Delivery | Costes de envío · ETA | Card List | 🔴 Alto | — | ⬜ |
| 07 | Agenda de cumpleaños | Agenda de cumpleaños | Agenda · entrevista (en revisión) | Tabla | 🟡 Bajo | — | ⬜ |
| 08 | App Content | App Content | Animaciones · Campañas primera compra · Legal | Card List | 🟠 Medio | — | ⬜ |
| 09 | Wallet | — (oculto) | Wallet Tiers | Card List | 🟠 Medio | — | ⬜ ¿se elimina? |
| 10 | Misiones | Missions | Misiones · Pines | Card List | 🟡 Bajo | — | ⬜ |
| 11 | Loyalty | Loyalty | Productos digitales · Cashback | Card List | 🟠 Medio | — | ⬜ |
| 12 | Home Content | Home Content | Cards · Banners · Módulos · Product List · Pop-up | Card List | 🟠 Medio | — | ⬜ |
| 13 | Pagos | Pagos | Pago en cuotas | Card List | 🔴 Alto | — | ⬜ |
| 14 | Pedido por voz | Voice Orders | — | — | 🟡 Bajo | — | ⬜ "sigue en CMS" |
| 15 | Game | Games | — | Card List | 🟡 Bajo | — | ⬜ "solo en Figma" |

**Riesgo operativo** (criterio inicial, a validar): 🔴 un error corta ventas o cobra mal en uno o más mercados · 🟠 se ve mal o confunde al cliente final · 🟡 impacto acotado.

## Country → Configuration (configuración de mercado)

Patrón: formulario por secciones con [SubPanelLeft](../../Archway/Dashboard/structure/sub-panel-left.md) y *Guardar configuración*. Se documenta dentro de [`flows/01_paises`](../flows/01_paises/design.md); cuando una sección crece, se abre su propio `design.md`.

| Sección | Subsecciones | Se cruza con el módulo |
|---|---|---|
| Detail · Main | Main · App Version | — |
| Products | Categories & Products · Cross-Selling · Up-Selling \* · Persuasive Label \* | 05 Productos |
| Services | Delivery Other Settings · Delivery Tips · PickUp · General Limits · Time | 06 Delivery · 02 Restaurantes (MOP) |
| Integrations | — | — |
| Validations | Fiscal Fields · Review inherited items | — |
| Promotions | — | 03 Promociones |
| Birthday | — | 07 Agenda de cumpleaños |
| Loyalty | — | 11 Loyalty |
| Payment · Currency | — | 13 Pagos |
| Rating · Tips · Push | — | — |
| Special Sales | McDía · Special Sales (other events) | 03 Promociones |
| Anti-Fraud | — | — |
| Cancellations | Manual · Automatic · Reasons · Refunds | 04 Pedidos |
| Profile | Hobbies · Account | — |
| Enrollment · Parameters | Global · AdManager · IM · Marketing · Configure Parameters | — |
| Wallet | — | 09 Wallet |

> **Doble entrada:** varios dominios se configuran en dos lugares (p. ej. Promociones en el panel y en Country; Delivery en el panel y en Services). Hay que definir qué vive en cada nivel para que el usuario no tenga que adivinar ([Q-03](./preguntas-abiertas.md)).

## Prioridad sugerida de relevamiento

1. **03 Promociones** — ya hay ejemplos en Figma, es el flujo más largo y el de mayor riesgo.
2. **02 Restaurantes** y **06 Delivery** — horarios, capacidades, MOP y costes: impacto directo en ventas.
3. **01 Países** — define los defaults que heredan los demás módulos.
4. **12 Home Content** y **08 App Content** — necesitan live preview (BO-PRE-01).
