# Button

> **Fuente de la verdad:** [Components › Button](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13512) · component set `Button` (15 variantes).
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Disparar la acción principal o secundaria de una pantalla o formulario (guardar, continuar, cancelar, eliminar).

**Comportamiento documentado en Figma**

- Los CTA están **siempre habilitados** por defecto.
- En formularios **no se deshabilita** el CTA: se dejan hacer clic y se marcan los errores en los campos.
- El estado `disabled` se reserva para **restricciones por rol** o **acciones que no se pueden repetir**.

## Anatomía y tokens

| Parte | Medida / token | CSS |
|---|---|---|
| Contenedor | 128 × 40 (alto fijo) · auto layout horizontal | — |
| Padding | 8 / 16 → `spacing/100` / `spacing/200` | `--db-spacing-100` / `--db-spacing-200` |
| Gap ícono-texto | `spacing/100` (8) | `--db-spacing-100` |
| Radio | **`spacing/100`** (8) — ver [D-C02](../audit.md#d-c02--radios-enlazados-a-spacing) | debería ser `--db-radius-md` |
| Texto | estilo `Label02 - cms` | `.db-label-02` |
| Ícono | opcional, 16 px | — |

## Variantes

Propiedad `Style`: **primary**, **secondary**, **eliminar** (destructivo) × `State`: enabled · hovered · focused · pressed · disabled.

| Style | State | Fondo | Borde | Texto |
|---|---|---|---|---|
| primary | enabled | `button/primary-enabled` | — | `button/primary-text` |
| primary | hovered | `button/primary-hover` | — | `button/primary-text` |
| primary | focused | `button/primary-enabled` | `button/secondary-stroke` 1 px | `button/primary-text` |
| primary | pressed | `button/primary-pressed` | — | `button/primary-text` |
| primary | disabled | `button/primary-disabled` | — | `text/disabled` |
| secondary | enabled | `button/secondary` | `button/secondary-stroke` | `button/secondary-text` |
| secondary | hovered / pressed | `button/secondary-hover` / `-pressed` | `button/secondary-stroke` | `button/secondary-text` |
| secondary | disabled | `button/secondary-hover` | `border/03` | `text/disabled` |
| eliminar | enabled | `button/red` | — | `button/red-text` |
| eliminar | hovered / focused | `button/red-hover` | — | `button/red-text` |
| eliminar | pressed | `button/red-pressed` | — | `button/red-text` |
| eliminar | disabled | `button/red-disabled` | — | `text/disabled` |

## Estados interactivos

| Estado | Web (mouse/teclado) | Touch (< 768 px) |
|---|---|---|
| Default | `enabled` | `enabled` |
| Hover | `:hover` → `hovered` | no aplica |
| Active | `:active` → `pressed` | `pressed` mientras dura el tap |
| Focus | `:focus-visible` → `focused` | — |
| Disabled | `disabled` + `aria-disabled` según el caso | ídem |

## Responsive

Ancho por contenido (hug) en desktop. En los footers de formulario (ver [usage/page-templates.md](../usage/page-templates.md)) se alinean a la derecha con `spacing/400` (32) entre botones: primero el secundario (*Cancelar*) y después el primario.

## Accesibilidad

- Usar `<button>` nativo (o `<a>` si navega). Nunca un `div` con click.
- **Foco:** el `focused` primario sólo agrega un borde de 1 px de `button/secondary-stroke`; no es un anillo visible sobre todos los fondos (WCAG 2.4.7). Ver [D-C06](../audit.md#d-c06--foco-visible).
- **Contraste:** `button/red-hover` con texto blanco da 3.90:1 ([D-A05](../audit.md#d-a05--botón-red-hover)).
- Botón sólo ícono → `aria-label` obligatorio.
- Destructivo (*eliminar*): confirmar con [Modal](./modal.md) y nombrar el objeto ("Eliminar promoción"), no sólo "Eliminar".
- Si el disabled es por rol, explicar el motivo con [Tooltip](./tooltip.md) y usar `aria-disabled="true"` (sigue siendo enfocable) en lugar de `disabled`.

## Convergencia con ArchWay

ArchWay no tiene hover ni botón destructivo; el Dashboard los aporta. El pressed primario va en dirección opuesta (Dashboard oscurece, ArchWay aclara). Decisión pendiente: [Convergencia › D8](../../Convergencia/dashboard-archway.md#decisiones-necesarias-antes-de-empezar).
