# ADK (Advance Kiosk) — Design System

Foundations y componentes de los **kioscos de autoservicio** de Arcos Dorados: Web, pantalla vertical de 1080 × 1920 en el local, touch.

| | |
|---|---|
| Relación con ArchWay | Por ahora separado. La unificación está en [`Convergencia/adk-archway.md`](../Convergencia/adk-archway.md) |
| Evolución prevista | Tablets y pantallas más chicas (locales pequeños, centros de postres, McCafé). Ver [Convergencia § Formatos](../Convergencia/adk-archway.md#formatos-tablet-y-pantallas-chicas) |

## Fuente de la verdad

| Capa | Archivo Figma |
|---|---|
| Foundations, componentes y UI shell | [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) |

Mismo flujo que ArchWay y Dashboard:

1. Figma (SSOT).
2. Extracción vía MCP.
3. [`audit.md`](./audit.md): propuestas. Nada se aplica sin aprobación.
4. Docs y tokens.
5. Storybook.

> **ADK no tiene variables propias.** La paleta y los text styles están documentados en Figma, pero los componentes usan valores sueltos. [`tokens/adk.tokens.json`](./tokens/adk.tokens.json) registra esos valores y el destino de cada uno en ArchWay.

## Foundations

| Foundation | Documento | Fuente en Figma |
|---|---|---|
| Color | [foundations/color.md](./foundations/color.md) | Página *Colors* (31 colores de UI + paleta de ilustración) |
| Tipografía | [foundations/typography.md](./foundations/typography.md) | 20 text styles `ADK/*`, página *Tipography* |
| Espaciado, radios, bordes y elevación | [foundations/spacing.md](./foundations/spacing.md) | Página *Spaces* + relevamiento de componentes |
| Layout, formato y área accesible | [foundations/layout.md](./foundations/layout.md) | Páginas *Safe Accesibility Area*, *templete* y *UI Shell* |

## Componentes

[`components/`](./components/README.md) — 11 familias:

| Familia | Incluye |
|---|---|
| Buttons | Botones e illustration button |
| Controles | Chips, Toggle y Quantity |
| Estructura | Header, Footer, Navegación |
| Input | Text Field, Dropdown y teclado |
| Feedback | Snackbar, Alerta y Loaders |
| Otros | Scroll Bar, Banners, Product, Attract / Logos / UI Shell |

## Tokens

[`tokens/adk.tokens.json`](./tokens/adk.tokens.json), en formato W3C DTCG:

| Grupo | Contenido |
|---|---|
| `primitives.color` | Paleta documentada + 4 colores en uso fuera de la paleta (grupo `undocumented`) |
| `semantic.*` | **Propuesta** derivada del uso. Cada uno trae `$extensions.archway` con el token destino, ΔE y resultado |
| `typography` | Los 20 estilos |
| `semantic.spacing` / `radius` / `border-width` | |
| `shadow`, `gradient`, `layout`, `breakpoint` | |

## Storybook

[`storybook/`](./storybook) — separado de los de ArchWay y Dashboard. Incluye:

- Foundations con previews a tamaño real de kiosco.
- Plantilla del lienzo 1080 × 1920 con sus zonas y el área accesible.
- Docs de componentes, audit y convergencia.

```bash
cd ADK/storybook && npm install && npm run dev   # http://localhost:6008
```

La tipografía Speedee se instala aparte. Ver [`storybook/fonts/README.md`](./storybook/fonts/README.md).

## Diferencias principales con ArchWay

| Aspecto | ADK | ArchWay |
|---|---|---|
| Escala tipográfica | 12–128 | 12–36 |
| Tamaños de toque | 56–80 | — |
| Patrón de área accesible | Sí | No |
| Variables | **No tiene** | Sí |
| Estados | Sin foco; disabled con opacidad | Completos como tokens |
| Marca y grises | Mismos valores (y mismos grises que Dashboard) | |

## Estructura

```
ADK/
├── README.md
├── audit.md
├── foundations/        ← color, typography, spacing, layout
├── components/         ← un .md por familia + README
├── tokens/             ← adk.tokens.json
└── storybook/          ← Storybook 8 + Vue 3 (puerto 6008)
```
