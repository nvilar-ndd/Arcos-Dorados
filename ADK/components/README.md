# Componentes ADK

> **Fuente:** [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) — sección *Components*. Relevado vía Figma MCP el 2026-10-09.
> Cada doc sigue la estructura de handoff: Propósito · Anatomía y tokens · Variantes · Estados · Responsive · Accesibilidad.

| Familia | Doc | Página Figma | Componentes |
|---|---|---|---|
| Buttons | [buttons.md](./buttons.md) | Buttons ✅ | `ADK Buttons` (28 variantes), `Button illustration` |
| Chips, Toggle y Quantity | [selection-controls.md](./selection-controls.md) | Buttons ✅ | `ADK_Chips`, `ADK Toggle`, `Quantity ADK` |
| Header | [header.md](./header.md) | Header ✅ | `Header` (Logo × Type) |
| Footer | [footer.md](./footer.md) | Footer ✅ | User_Footer, Carrito_Footer, Footers, Badge |
| Navegación | [navigation.md](./navigation.md) | Navegation ✅ | Nav.menu, menu-button, category-button, Progress steps |
| Input | [input.md](./input.md) | Input ✅ | `ADK Text Field`, `ADK Dropdown`, Keyboard |
| Feedback | [feedback.md](./feedback.md) | Snackbars ✅ · Alerta ✅ · Loaders ✅ | `ADK_Snackbars`, `Alerta`, Loaders |
| Scroll Bar | [scroll-bar.md](./scroll-bar.md) | Scroll Bar ✅ | `Scroll` |
| Banners | [banners.md](./banners.md) | Banners ✅ · Banners Categorias ✅ | `Banner`, `category_buttons` |
| Product | [product.md](./product.md) | Product 🟠 | Product Card, Carrito, Custom, Size, Badges, Loyalty Pill |
| Attract, Logos y UI Shell | [attract-screen.md](./attract-screen.md) | Attract Screen ✅ · Logos ✅ · UI Shell | `Attract Screen`, `Logos Arcos`, `Footers_shell` |

## Mapa hacia ArchWay

| ADK | ArchWay | Qué cambia al converger |
|---|---|---|
| ADK Buttons | Button | Tokens iguales en primario; ADK suma `hover`, borde del primario, tamaños 80 y XXL y la variante Selection |
| Chips | Chip | Los tokens `chip/*` de ArchWay cubren todos los estados; ADK sólo tiene 2 |
| Toggle | Switch | Mismo patrón, tamaño kiosco |
| Text Field / Dropdown | Text field / Dropdown | ADK necesita `border/default` en reposo y foco más visible |
| Snackbar | Snackbar | `feedback/*-on-black` de ArchWay reemplaza los 4 bordes sueltos |
| Header, Footer, Nav lateral, Scroll, Keyboard, Attract | — | **Componentes propios de kiosco**: quedan como *Squad Components* de ADK sobre foundations ArchWay |

Detalle completo en [`Convergencia/adk-archway.md`](../../Convergencia/adk-archway.md).
