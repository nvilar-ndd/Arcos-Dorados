# ArchWay — Design System de Arcos Dorados

> *El camino bajo el arco.* Sistema de diseño transversal para los productos digitales de McDonald's Latinoamérica: App iOS/Android, Web eCommerce, Dashboard y Kiosco (ADK).

## Fuente de la verdad

**Figma es la única fuente de la verdad (SSOT).** Esta carpeta documenta lo que está publicado en Figma; nunca al revés.

| Capa | Archivo Figma | Estado |
|---|---|---|
| Foundations | [Archway Foundations Library](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) | Documentado |
| Core components | — | Próxima fase |
| Squad components | — | Próxima fase |

### Flujo de cambios

```
Figma (SSOT) ──► extracción vía MCP ──► audit.md (propuestas)
     ▲                                        │
     │                                 Aprobado / Rechazado
     └──── se aplica en Figma ◄───────────────┘
                     │
                     ▼
     docs .md + tokens/archway.tokens.json ──► Storybook ──► código (Web · iOS · Android)
```

1. Las propuestas de mejora se registran en [`audit.md`](./audit.md). **Nada se aplica sin aprobación.**
2. Lo aprobado se aplica primero en Figma.
3. La documentación y los tokens se regeneran desde Figma.

## Foundations

| Foundation | Documento | Fuente en Figma |
|---|---|---|
| Color | [foundations/color.md](./foundations/color.md) | Variables `Primitives` + `Semantic`, estilos Loyalty |
| Tipografía | [foundations/typography.md](./foundations/typography.md) | 20 text styles + variables `Font/*` |
| Espaciado | [foundations/spacing.md](./foundations/spacing.md) | Variables `Valor/*`, `Valor/spacing/*` |
| Grilla y layout | [foundations/grid.md](./foundations/grid.md) | Estilos `Aw_Layout/col`, `Aw_Layout/Grid` |
| Radios | [foundations/radius.md](./foundations/radius.md) | Variables `Valor/radius/*` |
| Elevación | [foundations/elevation.md](./foundations/elevation.md) | Effect styles `Shallow/*`, `Deep/*` |

Foundations que todavía no existen en Figma (iconografía, motion, breakpoints, opacidad, z-index, border width) están listadas como propuestas en [`audit.md`](./audit.md#-p2--foundations-faltantes).

## Tokens

[`tokens/archway.tokens.json`](./tokens/archway.tokens.json) — export completo en formato [W3C Design Tokens (DTCG)](https://www.designtokens.org/tr/drafts/format/), con alias preservados (`{primitives.color.gold.500}`) y el nombre original de Figma en `$extensions.figma`. Es la entrada para Storybook y para la transformación a Tailwind (Web), Swift (iOS) y Kotlin (Android).

> Archivo generado. No se edita a mano: se regenera desde Figma.

## Storybook

[`storybook/`](./storybook) — visualización de las Foundations (Vue 3 + Vite + TypeScript strict) que lee `tokens/archway.tokens.json`. Incluye la tabla de contraste WCAG calculada en vivo.

```bash
cd Archway/storybook && npm install && npm run dev   # http://localhost:6006
```

## Principios de consumo

- **Sólo tokens semánticos** en componentes y en código. Nunca primitivos ni valores hardcodeados.
- **WCAG 2.1 AA** es innegociable: contraste, foco visible y áreas táctiles mínimas de 48×48.
- **Omnicanal:** cada foundation se piensa para touch (App, Kiosco) y mouse/teclado (Web, Dashboard).
- **Iconografía:** set de íconos McDonald's; no se usan emojis como íconos de sistema.

## Estructura

```
Archway/
├── README.md
├── audit.md                  ← propuestas pendientes de aprobación
├── foundations/
│   ├── color.md
│   ├── typography.md
│   ├── spacing.md
│   ├── grid.md
│   ├── radius.md
│   └── elevation.md
├── tokens/
│   └── archway.tokens.json   ← generado desde Figma
└── storybook/                ← Vue 3 + Vite, lee los tokens
```
