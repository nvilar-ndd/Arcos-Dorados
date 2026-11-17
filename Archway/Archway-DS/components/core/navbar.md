# NavBar · TabBar

> **Fuente de la verdad:** [Design Resources CORE › Navigation bars / TabBar](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=678-518) · `NavBarCustom` ([2149:2174](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2149-2174), 2), `NavItem` ([2142:1905](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2142-1905), 4), `NavItem_Only` ([2146:1870](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2146-1870), 4) y `_Tab Bar Button - iPhone` ([3315:14311](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=3315-14311), nativo).
> **Origen:** ArchWay · Nivel 1 Core en Android / Nivel 0 nativo estilizado en iOS · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Bottom Bar*.

## Propósito

Barra de navegación principal de la app. **Flota sobre el contenido** y está siempre visible, independientemente del scroll.

| Plataforma | Qué es |
|---|---|
| **iOS** | Nivel 0 — nativo estilizado: el sistema renderiza (Tab Bar con Liquid Glass, cápsula flotante); Archway define los colores |
| **Android** | Nivel 1 — custom: se construye con los tokens de Archway; no hay cápsula flotante nativa |

**Tipos:** `Default` (4 ítems con ícono + label; el único activo) · `Prominent Tab` (pendiente de análisis).

Ítems: **Inicio** (Home) · **Cupones** (Deals) · **MiM** (Loyalty Coin) · **Mi cuenta** (Profile).

## Anatomía y tokens

| # | Parte | Medida / token |
|---|---|---|
| 1 | Contenedor flotante | 412 × 104 (con margen) · `Surface/default` |
| 2 | Radio | `Valor/radius/XXL` (32) + squircle 60 % |
| 3 | Sombra | `Shallow/M.Elev-2` |
| 4 | Padding | 4 interior |
| 5 | NavItem × 4 | Alto 56 fijo · ancho flex · radio `Valor/radius/XXL` |
| 6 | Ícono | 24 × 24 · outline en reposo, filled en Selected |
| 7 | Label | `Label/Label Small` (12, tracking 0.25) |

| Estado del NavItem | Fondo | Texto | Contraste |
|---|---|---|---|
| Enabled | Transparente | `Text/secondary`, Regular | 6.69:1 ✅ |
| Selected | `Surface/inverse` | `Text/on-color`, **Bold** | 14.55:1 ✅ |
| Pressed | `Surface/subtle` | — | — |
| Focused | Sólo teclado externo / accesibilidad | — | — |

Sólo un ítem Selected a la vez. Badge opcional ([Badge](./badge.md), `Highlight/new`).

> La ficha del canvas nombra `color/Background/01` y `color/layer/06`; hoy son `Surface/default` y `Surface/inverse` ([C-T04](../audit.md#c-t04--documentación-con-nombres-viejos-o-hex)).

## Comportamiento y espaciado

- Flota: no empuja el layout. El primer elemento debajo del NavBar mantiene **16 pt** del borde inferior (Home, MiM, Cupones).
- Al seleccionar un ítem navega a su sección.

## Propiedades

`NavBarCustom`: `Type` (Default · Prominent Tab). `NavItem`: `State` (`_Enabled` · `_Focused` · `_Pressed` · `_Selected`) · `Badge` · `Instance` (ícono). `NavItem_Only`: `Property 1` (nombre genérico, [C-H01](../audit.md#c-h01--typos-y-nombres)).

## Accesibilidad

- Cada NavItem: `accessibilityLabel` = nombre de la sección; rol `tab`; `accessibilityState: selected`.
- `accessibilityHint` opcional ("Ver cupones disponibles").
- Alto 56 ≥ 44 / 48 ✅. En iOS, el tab bar nativo muestra la etiqueta ampliada al mantener presionado (Large Content Viewer).
- Selected se distingue por fondo, ícono filled y Bold (no sólo color) ✅.

## Cambios 2026-11-17 (paridad con Figma)

- Padding 16 arriba, 24 abajo, 16 a los lados; gap −8 entre ítems. Ícono seleccionado en `Icon/gold`.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
