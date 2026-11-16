# Arquitectura de la información

> **Fuente de la verdad:** secciones *Figma - MenuIzq_ Arquitectura de la informacion v-03/11/26*, *MenuIzq_ Arquitectura de la informacion v-09/03/26*, *Ai - Panel Left* ([⮑ UI shell / Header + PanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=657-36880)) y *Ai - Country* ([⮑ SubPanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4103-17)) · **Extraído vía Figma MCP:** 2026-10-08 · **Revisado:** 2026-11-16 (nueva versión v-03/11/26).

## Panel izquierdo

Figma tiene tres versiones del árbol. La **v-03/11/26** es la vigente y ya está aplicada en el componente `Header+PanelLeft` (con etiquetas en inglés).

| Categoría (v-03/11/26) | Subcategorías | Etiqueta en el componente | Cambio respecto de v-09/03/26 |
|---|---|---|---|
| Home | — | — (ícono) | |
| Países | — | — (ícono) | |
| Restaurantes | *SUB MENU* (sin detallar) | Restaurants | Cumpleaños sale del submenú y pasa a primer nivel |
| Promociones | — | Promotions | |
| Pedidos | — | Orders | |
| Productos | — | Products | |
| **Delivery** | Costes de envío · **ETA** | Delivery | Vuelve *Delivery* y agrupa *Coste de envío* (antes de primer nivel) y *ETA* (nuevo) |
| **Agenda de cumpleaños** | Agenda · entrevista (en revisión: "ver con Esther") | Agenda de cumpleaños | Nuevo en primer nivel |
| App content | Animaciones · Campañas primera compra · **Legal** | App Content | Suma *Legal*; salen *Menu Horizontal*, *Menu Vertical* y *App Versions* |
| Wallet | Wallet Tiers | — (oculto) | Marcado "eliminar?" en el árbol |
| Misiones | Misiones · Pines | Missions | |
| Loyalty | Productos digitales · **Cashback** | Loyalty | Suma *Cashback*; *Productos extra* aparece en el diagrama pero no en la lista |
| Home Content | Cards · Banners · Módulos · Product List · **Pop-up** | Home Content | Suma *Pop-up in app*; sale *Rate* |
| **Pagos** | Pago en cuotas | Pagos | Nuevo en el árbol (ya estaba en el componente, [D-E04](../audit.md#d-e04--ia-desalineada-entre-componente-y-árbol)) |
| Pedido por voz | — | Voice Orders | Marcado "sigue en CMS" |
| Game | — | Games | Marcado "solo en Figma" |

**Salen del panel:** *Fees* (Service Fee · Small Order Fee) y *Cross Selling*.

**Nota de Figma:** "Costes de envío cambia a Delivery y queda: coste de envío · ETA".

**Acciones fijas al pie:** modo de color (Light/Dark) · idioma.

> En el diagrama hay ítems en lila (*Pop-up in app*, *Productos extra*, *Legal*, *ETA*, *Agenda*, *entrevista*) sin leyenda que explique el color; por contexto, son los agregados de esta versión. El árbol incluye un link a la investigación que lo respalda.

<details>
<summary>Versión anterior (v-09/03/26)</summary>

| Categoría | Subcategorías |
|---|---|
| Home | — |
| Countries | — |
| Restaurants | Restaurants · Country Maps · Cumpleaños |
| Promotions | — |
| Orders | — |
| Coste de envío | — |
| Fees | Service Fee · Small Order Fee |
| Products | — |
| Cross Selling | — |
| Games | — |
| Loyalty | Loyalty · Productos digitales |
| Missions | Misiones · Pines |
| Voice Orders | — |
| Home Content | Home Banners · Card · Rate · Modules · Product List |
| App Content | Animaciones · Primera compra · Menu Horizontal · Menu Vertical · App Versions |
| Wallet | Wallet Tiers |

</details>

## Country → Configuration

Árbol *Ai - Country* (se navega con el [SubPanelLeft](./sub-panel-left.md)):

| Sección | Subsecciones |
|---|---|
| Detail | — |
| Main | Main · App Version |
| Products | Categories & Products · Cross-Selling · Up-Selling \* · Persuasive Label \* |
| Services | Delivery Other Settings · Delivery Tips · PickUp · General Limits · Time |
| Integrations | — |
| Validations | Fiscal Fields · Review inherited items (App + Ecommerce) |
| Promotions | — |
| Birthday | — |
| Loyalty | — |
| Payment | — |
| Currency | — |
| Rating | — |
| Tips | — |
| Push | — |
| Special Sales | McDía · Special Sales (other events) |
| Anti-Fraud | — |
| Cancellations | Manual Cancellations · Automatic Cancellations · Cancellation Reasons · Refunds |
| Profile | Hobbies · Account |
| Enrollment | — |
| Parameters | Global · AdManager · IM · Marketing · Configure Parameters |
| Wallet | — |

\* marcados con asterisco en Figma (sin aclaración; probablemente pendientes de definición).

## Observaciones

- **Idioma mixto:** el árbol v-03/11/26 está en español y el componente en inglés salvo *Agenda de cumpleaños* y *Pagos*; el árbol de Country está en inglés y el SubPanelLeft en español con typos (`Loyality`, `Parámentros`). Definir idioma de la UI y usar i18n para las etiquetas.
- **Refunds:** en el árbol es subsección de Cancellations; en el componente es ítem de primer nivel.
- **Wallet** figura en el árbol de Country pero no en el componente.
- **Ley de Hick / Miller:** el panel principal sigue en 16 categorías en v-03/11/26 (salen Fees y Cross Selling, entran Agenda de cumpleaños y Pagos; 15 si se confirma la baja de Wallet); el de Country sigue en 21. Agrupar por dominio (p. ej. *Comercial*: Promotions, Products, Pagos · *Contenido*: Home Content, App Content · *Fidelización*: Loyalty, Missions, Wallet, Games) reduce el tiempo de búsqueda; queda como propuesta para validar con producto.
