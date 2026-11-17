# Dashboard — CMS / Back-office

Diseño, auditoría y documentación de los **flujos del Dashboard** de Arcos Dorados (McDonald's Latinoamérica): el back-office desde el que se gobiernan los canales B2C (**App, eCommerce, ADK y Web**). Usuarios internos y de mercado, en escritorio, con tareas repetitivas y de alto riesgo operativo: una promoción mal configurada o un local mal cerrado impacta en miles de pedidos.

Esta carpeta documenta **producto y flujos**. El **sistema de diseño** (foundations, tokens, componentes Vue, UI shell, Storybook) vive en [`Archway/Dashboard`](../Archway/Dashboard/README.md) y no se duplica acá: se enlaza.

| Carpeta | Qué documenta | Fuente de la verdad |
|---|---|---|
| **`Dashboard/`** (esta) | Módulos, flujos, auditorías de flujo, `design.md` por módulo, historias de usuario y permisos | Los 17 archivos de producto de la carpeta [*Especificación*](https://www.figma.com/files/1180156850377231464/folder/420538859) ([`docs/fuentes-de-verdad.md`](./docs/fuentes-de-verdad.md)) |
| [`Archway/Dashboard/`](../Archway/Dashboard/README.md) | Foundations, tokens, componentes, UI shell, IA, plantillas de pantalla, Storybook (6007) | [DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) |
| [`Archway/Convergencia/dashboard-archway.md`](../Archway/Convergencia/dashboard-archway.md) | Decisión DS separado vs. unificado con ArchWay | — |
| [`Voz-y-Tono/`](../Voz-y-Tono/README.md) | Manual de voz, tono y estilo v1.0 | — |
| [`Base-de-conocimiento/`](../Base-de-conocimiento/README.md) | Leyes de UX y WCAG | — |

## Módulos

El mapa completo (subcategorías, archivo de Figma, riesgo y estado) está en [`docs/mapa-de-modulos.md`](./docs/mapa-de-modulos.md) y el inventario de páginas y flujos con node IDs en [`docs/mapa-de-flujos.md`](./docs/mapa-de-flujos.md). Sigue la IA vigente del panel izquierdo (**v-03/11/26**) cruzada con Figma.

| Bloque del producto | Módulos | Doc |
|---|---|---|
| Configuración de mercado | Países (Country → Configuration) | [`01`](./flows/01_paises/design.md) |
| Locales | Restaurantes | [`02`](./flows/02_restaurantes/design.md) |
| Comercial | Promociones · Productos · Pagos | [`03`](./flows/03_promociones/design.md) · [`05`](./flows/05_productos/design.md) · [`13`](./flows/13_pagos/design.md) |
| Operación de canales | Pedidos · Delivery (costes de envío, ETA) · Pedido por voz | [`04`](./flows/04_pedidos/design.md) · [`06`](./flows/06_delivery/design.md) · [`14`](./flows/14_pedido-por-voz/design.md) |
| Contenido y entornos | Home Content · App Content (animaciones, splash, legal) | [`12`](./flows/12_home-content/design.md) · [`08`](./flows/08_app-content/design.md) |
| Fidelización | Loyalty · Misiones · Wallet · Game · Agenda de cumpleaños | [`11`](./flows/11_loyalty/design.md) · [`10`](./flows/10_misiones/design.md) · [`09`](./flows/09_wallet/design.md) · [`15`](./flows/15_game/design.md) · [`07`](./flows/07_agenda-cumpleanos/design.md) |
| Transversal | Login · Home · ABM de usuarios (RBAC) · Logs y Audits | [`00`](./flows/00_transversal/design.md) |

## Cómo se trabaja

```
Figma (SSOT) ──► Extracción vía MCP ──► audits/ (hallazgos) ──► aprobación ──► flows/*/design.md ──► Dev (Jira)
```

1. **Figma es la única fuente de la verdad.** Esta carpeta documenta lo que está en Figma; no lo reemplaza. Lo que todavía no está en Figma entra como propuesta `Pendiente`.
2. **Nada se aplica sin aprobación.** Los hallazgos nacen `Pendiente` en [`audits/`](./audits/README.md) y pasan a `Aprobado` o `Rechazado`.
3. **Todo hallazgo se justifica** con una regla de [`docs/principios-dashboard.md`](./docs/principios-dashboard.md) (`BO-*`), una Ley de UX o un criterio WCAG, con link.
4. **Hallazgos de componente o foundation** no se abren acá: van al [audit del DS](../Archway/Dashboard/audit.md) y se citan por su ID (`D-*`).
5. **Todo texto de UI se valida** contra el [manual de voz y tono](../Voz-y-Tono/README.md).

## Modos de trabajo

| Modo | Para qué | Sale en |
|---|---|---|
| **Revisión de flujos** | Desglosar un flujo existente y proponer la V2 (menos clics, safety nets) | `audits/` + tabla *Flujo actual vs. propuesto* en el `design.md` |
| **Producto** | Lógica de features nuevos, permisos (RBAC), historias de usuario y criterios de aceptación | Secciones 7–8 del `design.md` |
| **Enterprise UX** | DataGrids, filtros, date pickers, modales, previsualizaciones | Secciones 3–4 del `design.md` |
| **Sistema de diseño** | Auditar componentes vía MCP y decidir migración a ArchWay | [`Archway/Dashboard/audit.md`](../Archway/Dashboard/audit.md) · [`Convergencia`](../Archway/Convergencia/dashboard-archway.md) |

## Estructura

```
Dashboard/
├── README.md
├── CLAUDE.md                     ← contexto para agentes (rol, modos, reglas, fuentes)
├── docs/
│   ├── fuentes-de-verdad.md      ← Figma, DS, IA, voz y tono, qué falta relevar
│   ├── principios-dashboard.md   ← reglas BO-* con umbrales (el "contrato" de auditoría) — v0 borrador
│   ├── mapa-de-modulos.md        ← módulos, archivo de Figma, riesgo y estado
│   ├── mapa-de-flujos.md         ← inventario de los 17 archivos con páginas, secciones y node IDs
│   └── preguntas-abiertas.md     ← decisiones pendientes con producto / tech
├── flows/                        ← un design.md por módulo
│   ├── 00_transversal/ 01_paises/  …  15_game/
├── audits/                       ← auditorías de flujo, una por archivo/fecha
└── templates/
    ├── design.md                 ← plantilla de spec de módulo / feature
    ├── audit.md                  ← plantilla y checklist de auditoría
    └── pull-request.md           ← checklist para PRs que tocan Dashboard/
```

## Estados de un `design.md`

| Estado | Significa |
|---|---|
| ⬜ Por relevar | Existe en la IA, todavía no se extrajo de Figma |
| 🧭 Relevado | Inventario extraído de Figma. Sin auditar |
| 🔍 En auditoría | Hallazgos abiertos en `audits/` |
| 🚧 En revisión UX | Propuesta V2 en Figma, pendiente de aprobación |
| ✅ Ready for Dev | Aprobado, sin hallazgos P0/P1 abiertos, con historias y criterios de aceptación |
