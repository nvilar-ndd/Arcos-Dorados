# FAB (botón de ícono)

> **Fuente de la verdad:** [Components › FAB](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6304) · component sets `SmallFAB`, `MediumFAB`, `FAB-ListMenu-desplegado`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Botón de **sólo ícono** para acciones de alcance global o contextual: los accesos del [Header](../structure/header.md) (configuración, seguridad, perfil), el control del [SubPanelLeft](../structure/sub-panel-left.md) y menús de acciones por fila. `FAB-ListMenu-desplegado` es el FAB con su menú abierto.

> En el Dashboard "FAB" no es un botón flotante (Material): es un *icon button*. Conviene renombrarlo al converger.

## Anatomía y tokens

| Variante | Tamaño | Padding | Radio | Ícono |
|---|---|---|---|---|
| `SmallFAB` | 32 × 32 | `spacing/100` (8) | `spacing/200` (16) → circular | 16 px |
| `MediumFAB` | 48 × 48 | `spacing/200` (16) | `spacing/300` (24) → circular | 16 px |

Los radios están enlazados a `spacing/*`, no a `radius/*` ([D-C02](../audit.md#d-c02--radios-enlazados-a-spacing)). En código: `border-radius: 9999px`.

## Variantes y estados

Propiedades: `Style` = Primary · secondary · tipografia × `State` = enabled · hoverded · Focudes · presesed (nombres con typo en Figma, [D-C09](../audit.md#d-c09--naming-de-variantes)).

| Style | enabled | hover | focus | pressed |
|---|---|---|---|---|
| Primary | `button/primary-enabled` | `button/primary-hover` | + borde `button/primary-focus` 1 px | `button/primary-focus` |
| secondary | `button/transparent` | `button/secondary-hover` | + borde `button/primary-focus` 1 px | `button/secondary-pressed` |
| tipografia | sin fondo; sólo cambia el color del ícono/texto | | | |

### FAB-ListMenu-desplegado

Propiedades `Menu` = Left / Right (alineación del menú) y `Position` = Up / down. El menú usa un estilo de efecto (sombra) y texto `color/black/800` enlazado **al primitivo** ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo)); no cambia en Dark.

## Responsive

- **Desktop:** `SmallFAB` en el header.
- **Mobile (< 768 px):** los FAB del header se agrupan en el menú de perfil (ver [structure/header.md](../structure/header.md)).
- Para targets táctiles, `SmallFAB` (32 px) queda por debajo de 44 px ([D-C07](../audit.md#d-c07--áreas-de-toque)): usar `MediumFAB` o ampliar el área clicable sin cambiar el visual.

## Accesibilidad

- `<button>` con `aria-label` siempre (no tiene texto visible).
- Si abre un menú: `aria-haspopup="menu"`, `aria-expanded`, foco al primer ítem al abrir, `Esc` cierra y devuelve el foco al FAB.
- El borde de foco de 1 px `button/primary-focus` (dorado) sobre blanco no llega a 3:1 ([D-A06](../audit.md#d-a06--dorado-sobre-blanco), [D-C06](../audit.md#d-c06--foco-visible)).
