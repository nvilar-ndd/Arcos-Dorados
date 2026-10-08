# Toggle (switch)

> **Fuente de la verdad:** [Components › Toggle](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6300) · component set `Toggle` (12 variantes).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Usa los interruptores para que los usuarios puedan activar o desactivar algo al instante." — Figma

Se usa para **estados que se aplican en el momento** (activar el motor de promociones, publicar/despublicar en una [Card List](./card-list.md)). Si el cambio necesita un *Guardar*, usar [Checkbox](./checkbox.md).

## Anatomía

| # | Parte | Medida / token |
|---|---|---|
| 1 | Toggle (handle) | 24 × 24 |
| 2 | Track | 48 × 24; color según on / off / disabled |
| 3 | Handle container | **48 × 48**, área clicable |
| 4 | Switch | conjunto |

Variante "Switch + Value": toggle con label a la derecha (ver ejemplo en Country: "Motor de promociones" + descripción).

## Estados

`Status` = Enabled · Hovered · Focused · Pressed · Disabled · Skeleton × `Value` = True / False.

| Estado | Track ON | Track OFF | State layer (halo) |
|---|---|---|---|
| Enabled | `layer/07` (gold) | `layer/04` | — |
| Hovered | `layer/07` | `layer/04` | `button/primary-hover-transparent` / `button/secondary-hover-transparent` |
| Focused | `layer/07` | `layer/04` | **igual que Hovered** |
| Pressed | `layer/07` | `layer/04` | `button/primary-pressed-transparent` / `button/secondary-pressed-transparent` |
| Disabled | `button/primary-disabled` | `button/secondary-focus` | — |
| Skeleton | `button/skeleton` | `button/skeleton` | — |

Handle: `background/01`. El *state layer* oculto de Enabled/Disabled/Skeleton es `#FFBC0D` al 20 % suelto ([D-C04](../audit.md#d-c04--colores-sin-variable)). **Focused es idéntico a Hovered**: con teclado no se distingue el foco ([D-C06](../audit.md#d-c06--foco-visible)).

## Accesibilidad

- `<button role="switch" aria-checked>` o `<input type="checkbox" role="switch">`; `Space` alterna.
- El label tiene que decir **qué** se activa, no el estado ("Motor de promociones", no "Activado").
- Track OFF `layer/04` sobre blanco: verificar 3:1 (WCAG 1.4.11) en los dos modos.
- El cambio inmediato tiene que tener feedback: [Notification](./notification.md) toast de éxito/error.
- Área de toque de 48 × 48: cumple para touch.
