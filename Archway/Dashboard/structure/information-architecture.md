# Arquitectura de la información

> **Fuente de la verdad:** secciones *Ai - Panel Left*, *MenuIzq_ Arquitectura de la informacion v-09/03/26* ([⮑ UI shell / Header + PanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=657-36880)) y *Ai - Country* ([⮑ SubPanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4103-17)) · **Extraído vía Figma MCP:** 2026-10-08.

## Panel izquierdo

Figma tiene dos versiones del árbol. La **v-09/03/26** es la más reciente.

| Categoría | Subcategorías (v-09/03/26) | Cambios respecto de *Ai - Panel Left* |
|---|---|---|
| Home | — | |
| Countries | — | |
| Restaurants | Restaurants · Country Maps · Cumpleaños | |
| Promotions | — | |
| Orders | — | |
| **Coste de envío** | — | Antes: **Delivery** (SP – Distance · SP – Restaurant · Delivery Free Daypart) |
| Fees | Service Fee · Small Order Fee | |
| Products | — | |
| Cross Selling | — | |
| Games | — | |
| Loyalty | Loyalty · Productos digitales | |
| Missions | Misiones · Pines | |
| Voice Orders | — | |
| Home Content | Home Banners · Card · Rate · Modules · Product List | |
| App Content | **Animaciones** · **Primera compra** · Menu Horizontal · Menu Vertical · App Versions | Se suman Animaciones y Primera compra |
| Wallet | Wallet Tiers | |

**Acciones fijas al pie:** modo de color (Light/Dark) · idioma.

> El componente `Header+PanelLeft` muestra además **Pagos** (con subítems) entre Fees y Products, que no figura en ninguno de los dos árboles ([D-E04](../audit.md#d-e04--ia-desalineada-entre-componente-y-árbol)).

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

- **Idioma mixto:** el árbol de Country está en inglés y el componente en español con typos (`Loyality`, `Parámentros`); el panel principal mezcla ambos (`Coste de envío`, `Promotions`). Definir idioma de la UI y usar i18n para las etiquetas.
- **Refunds:** en el árbol es subsección de Cancellations; en el componente es ítem de primer nivel.
- **Wallet** figura en el árbol de Country pero no en el componente.
- **Ley de Hick / Miller:** el panel principal tiene 16 categorías y el de Country 21. Agrupar por dominio (p. ej. *Comercial*: Promotions, Products, Cross Selling · *Contenido*: Home Content, App Content · *Fidelización*: Loyalty, Missions, Wallet, Games) reduce el tiempo de búsqueda; queda como propuesta para validar con producto.
