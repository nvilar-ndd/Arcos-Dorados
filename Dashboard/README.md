# Dashboard — Foundations

Foundations del Dashboard (CMS) de Arcos Dorados. **Por ahora viven separadas de ArchWay**; la unificación está planificada en [`Convergencia/dashboard-archway.md`](../Convergencia/dashboard-archway.md).

## Fuente de la verdad

| Capa | Archivo Figma |
|---|---|
| Foundations | [DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) |

Mismo flujo que ArchWay: Figma (SSOT) → extracción vía MCP → [`audit.md`](./audit.md) (propuestas, nada se aplica sin aprobación) → docs y tokens regenerados → Storybook.

## Foundations

| Foundation | Documento | Fuente en Figma |
|---|---|---|
| Color | [foundations/color.md](./foundations/color.md) | Colecciones `Primitives` y `Semantic` (**Light + Dark**), página *Color* |
| Tipografía | [foundations/typography.md](./foundations/typography.md) | 16 text styles, página *Typography* |
| Espaciado | [foundations/spacing.md](./foundations/spacing.md) | `spacing/*`, página *Spaces* |
| Radios | [foundations/radius.md](./foundations/radius.md) | `radius/*` |
| Grilla, breakpoints y layout | [foundations/grid.md](./foundations/grid.md) | Colecciones `Breakpoints` y `Layout`, 6 estilos de grilla, página *Grids* |

## Guías

| Documento | Contenido | Fuente en Figma |
|---|---|---|
| [guides/ui-templates.md](./guides/ui-templates.md) | Patrón de UI según el contexto de navegación (Country session, Left Panel); Read-only Table vs Card List | Página *Usage and design criteria* |

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

## Estructura

```
Dashboard/
├── README.md
├── audit.md
├── foundations/
│   ├── color.md
│   ├── typography.md
│   ├── spacing.md
│   ├── radius.md
│   └── grid.md
├── guides/
│   └── ui-templates.md
├── tokens/
│   └── dashboard.tokens.json   ← generado desde Figma
└── storybook/                  ← Vue 3 + Vite, Light/Dark
```
