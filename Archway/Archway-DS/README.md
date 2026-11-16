# ArchWay DS — Design System de Arcos Dorados

> Esta carpeta es el sistema ArchWay en sí. Vive dentro de [`Archway/`](../README.md), la carpeta padre que agrupa a todos los sistemas que convergen hacia él (Dashboard, ADK, Legacy).

> *El camino bajo el arco.* Sistema de diseño transversal para los productos digitales de McDonald's Latinoamérica: App iOS/Android, Web eCommerce, Dashboard y Kiosco (ADK).

## Fuente de la verdad

**Figma es la única fuente de la verdad (SSOT).** Esta carpeta documenta lo que está publicado en Figma; nunca al revés.

| Capa | Archivo Figma | Estado |
|---|---|---|
| Foundations | [Archway Foundations Library](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) | Documentado · revisado 2026-11-16 |
| Core components y Específicos | [Design Resources CORE – Archway](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-) (librería *Design Resources CORE [Archway]*) | Documentado · 19 Core + 10 Específicos · [components/](./components/README.md) |

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
| Color | [foundations/color.md](./foundations/color.md) | Variables `Primitives` + `Semantic`, estilos Loyalty, guía de uso y paleta de ilustración |
| Tipografía | [foundations/typography.md](./foundations/typography.md) | 20 text styles + variables `Font/*` · topes de tamaño de letra del sistema |
| Espaciado | [foundations/spacing.md](./foundations/spacing.md) | Variables `Valor/*`, `Valor/spacing/*` |
| Grilla y layout | [foundations/grid.md](./foundations/grid.md) | Estilos `Aw_Layout/col`, `Aw_Layout/Grid` |
| Radios | [foundations/radius.md](./foundations/radius.md) | Variables `Valor/radius/*` |
| Elevación | [foundations/elevation.md](./foundations/elevation.md) | Effect styles `Shallow/*`, `Deep/*` |
| Motion | [foundations/motion.md](./foundations/motion.md) | Página *Motion* (documentación, aún no variables) |

## Guías y referencias

| Documento | Contenido | Fuente en Figma |
|---|---|---|
| [guides/typography-legacy-migration.md](./guides/typography-legacy-migration.md) | Equivalencias de los 24 estilos Legacy → 20 de ArchWay, guía para diseño y desarrollo, QA visual | Página *Typography*, sección Equivalencias / handoff |
| [glossary.md](./glossary.md) | Glosario de traducción de términos del sistema | Página *Colors*, Glosario de Traducción |

Foundations que todavía no existen en Figma (iconografía, breakpoints, opacidad, z-index, border width) están listadas como propuestas en [`audit.md`](./audit.md#-p2--foundations-faltantes).

## Componentes

[`components/`](./components/README.md) — pirámide (Nativos iOS · Core · Compuestos · Específicos 💠), reglas de forma y Liquid Glass, tabla de estado y una ficha por componente: 19 Core ([Button](./components/core/button.md), [Chip](./components/core/chip.md), [Input](./components/core/input.md), [Card](./components/core/card.md), [Switch](./components/core/switch.md)…) y 10 Específicos ([Header](./components/especificos/header.md), [Gamification Bar](./components/especificos/gamification-bar.md), [Product Card](./components/especificos/product-cards.md)…). Hallazgos en [`components/audit.md`](./components/audit.md).

**Código** (16/11/2026): los 29 componentes, sólo con tokens, en [`ui/`](./ui/README.md) (Web: Nuxt 4 + Vue 3 + TS strict + Tailwind), [`ios/`](./ios/README.md) (SwiftUI) y [`android/`](./android/README.md) (Jetpack Compose). iOS y Android todavía no se compilaron: validar en Xcode / Android Studio.

## Tokens

[`tokens/archway.tokens.json`](./tokens/archway.tokens.json) — export completo en formato [W3C Design Tokens (DTCG)](https://www.designtokens.org/tr/drafts/format/), con alias preservados (`{primitives.color.gold.500}`) y el nombre original de Figma en `$extensions.figma`. Es la entrada para Storybook y para la transformación a Tailwind (Web), Swift (iOS) y Kotlin (Android).

> Archivo generado. No se edita a mano: se regenera desde Figma.

## Storybook

[`storybook/`](./storybook) — Foundations y una entrada por componente en **Componentes › Core / Específicos** (Vue 3 + Vite + TypeScript strict + Tailwind) sobre `tokens/archway.tokens.json`. Cada entrada junta la ficha, el *Playground* con controles y *Web · iOS · Android* con la demo en vivo y el código de las tres plataformas. Incluye la tabla de contraste WCAG calculada en vivo.

```bash
cd Archway/Archway-DS/storybook && npm install && npm run dev   # http://localhost:6006
```

## Convergencia

ArchWay es el destino de los demás sistemas. El plan de unificación está en [`../Convergencia/`](../Convergencia/README.md): [Dashboard](../Convergencia/dashboard-archway.md), [ADK](../Convergencia/adk-archway.md) y, cuando se releve, Legacy.

## Principios de consumo

- **Sólo tokens semánticos** en componentes y en código. Nunca primitivos ni valores hardcodeados.
- **WCAG 2.1 AA** es innegociable: contraste, foco visible y áreas táctiles mínimas de 48×48.
- **Omnicanal:** cada foundation se piensa para touch (App, Kiosco) y mouse/teclado (Web, Dashboard).
- **Iconografía:** set de íconos McDonald's; no se usan emojis como íconos de sistema.

## Estructura

```
Archway/Archway-DS/
├── README.md
├── audit.md                  ← propuestas de Foundations pendientes de aprobación
├── components/               ← fichas Core y Específicos + audit de componentes
├── glossary.md
├── guides/
│   └── typography-legacy-migration.md
├── foundations/
│   ├── color.md
│   ├── typography.md
│   ├── spacing.md
│   ├── grid.md
│   ├── radius.md
│   ├── elevation.md
│   └── motion.md
├── tokens/
│   └── archway.tokens.json   ← generado desde Figma
├── icons/archway-icons.json  ← 21 íconos de Iconography (paths)
├── scripts/                  ← build-platform-tokens.mjs → Swift, Kotlin e íconos
├── ui/                       ← Web: componentes Vue + preset de Tailwind
├── ios/                      ← Swift Package ArchwayUI (SwiftUI)
├── android/                  ← módulo archway-ui (Compose)
└── storybook/                ← Vue 3 + Vite + Tailwind, lee los tokens
```
