# Dashboard — Design System

Foundations, componentes core y estructura del Dashboard (CMS) de Arcos Dorados. **Por ahora viven separadas de ArchWay**; la unificación está planificada en [`Convergencia/dashboard-archway.md`](../Convergencia/dashboard-archway.md).

## Fuente de la verdad

| Capa | Archivo Figma |
|---|---|
| Foundations, componentes y estructura | [DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) |

Mismo flujo que ArchWay: Figma (SSOT) → extracción vía MCP → [`audit.md`](./audit.md) (propuestas, nada se aplica sin aprobación) → docs y tokens regenerados → Storybook.

## Foundations

| Foundation | Documento | Fuente en Figma |
|---|---|---|
| Color | [foundations/color.md](./foundations/color.md) | Colecciones `Primitives` y `Semantic` (**Light + Dark**), página *Color* |
| Tipografía | [foundations/typography.md](./foundations/typography.md) | 16 text styles, página *Typography* |
| Espaciado | [foundations/spacing.md](./foundations/spacing.md) | `spacing/*`, página *Spaces* |
| Radios | [foundations/radius.md](./foundations/radius.md) | `radius/*` |
| Grilla, breakpoints y layout | [foundations/grid.md](./foundations/grid.md) | Colecciones `Breakpoints` y `Layout`, 6 estilos de grilla, página *Grids* |

## Componentes core

[`components/`](./components/README.md) — 27 familias (Button, Text field, Dropdown, Toggle, Checkbox, Radio, Date picker, Calendar, File uploader, Tabs, Accordion, Pagination, Link, Tag, Tooltip, Notification, Modal, Progress, Hr, Scroll, Images, Carousel, Card, Card List, Selectable Card, Data table). Fuente: página *Components*.

## Estructura (UI shell)

[`structure/`](./structure/README.md) — Header + PanelLeft, SubPanelLeft y arquitectura de la información. Fuente: páginas *⮑ UI shell / Header + PanelLeft* y *⮑ SubPanelLeft*.

## Usage and design criteria

| Documento | Contenido | Fuente en Figma |
|---|---|---|
| [usage/ui-templates.md](./usage/ui-templates.md) | Patrón de UI según el contexto de navegación (Country session, Left Panel); Read-only Table vs Card List | Página *Usage and design criteria* |
| [usage/page-templates.md](./usage/page-templates.md) | Medidas de las plantillas de formulario (Country) y paso a paso | Frame *Medidas / UI Templates* |

## Tokens

[`tokens/dashboard.tokens.json`](./tokens/dashboard.tokens.json) — formato W3C DTCG. Los semánticos tienen `$value` = Light y los dos modos en `$extensions.modes`.

> Archivo generado. No se edita a mano: se regenera desde Figma.

## Storybook

[`storybook/`](./storybook) — separado del de ArchWay, con selector Light/Dark.

```bash
cd Dashboard/storybook && npm install && npm run dev   # http://localhost:6007
```

## Diferencias principales con ArchWay

- **Tiene dark mode**, breakpoints, grillas de escritorio y tokens de layout (ArchWay no).
- **No tiene** elevación ni motion, y su tipografía no está enlazada a variables (ArchWay sí).
- Detalle completo y plan de unificación: [`Convergencia/dashboard-archway.md`](../Convergencia/dashboard-archway.md).

## Estructura del repo

```
Dashboard/
├── README.md
├── audit.md                    ← foundations + componentes + estructura
├── foundations/                ← color, typography, spacing, radius, grid
├── components/                 ← un .md por familia + README (índice)
├── structure/                  ← ui-shell, header, left-panel, sub-panel-left, IA
├── usage/                      ← ui-templates, page-templates
├── tokens/
│   └── dashboard.tokens.json   ← generado desde Figma
└── storybook/                  ← Vue 3 + Vite, Light/Dark
```
