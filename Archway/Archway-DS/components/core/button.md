# Button · Button_Ghost

> **Fuente de la verdad:** [Design Resources CORE › Button](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=424-897) · component sets `Button` (80 variantes) y [`Button_Ghost`](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=424-567) (32 variantes).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Buttons* (Rounded, Medium 40, Small 24, Big 64, Terciary, Fullwidth…).

## Propósito

> "Ejecuta una acción." — Figma

- **Primary:** la acción principal; **una por pantalla**.
- **Secondary:** la acción de menor peso.
- **Ghost:** acción de bajo peso ("Cancelar", "Omitir", "Ahora no"), **siempre acompañando** a un Primary o Secondary. No tiene estado Loading.

**No usar:** si lleva a ver otro contenido → Link. Si es sólo un ícono → [Icon Only](./icon-only-fab.md).

> **Clave (Figma):** el significado lo da el label, nunca el color.

## Anatomía y tokens

| Size | Alto visual | Área táctil | Texto | Padding horizontal | Ícono |
|---|---|---|---|---|---|
| Large | 56 | 56 | `Label/Label Large` (16/20) | `Valor/spacing/16` | 16 |
| Medium | 48 | 48 | `Label/Label Large` | `Valor/spacing/16` | 16 |
| Small | 32 | 40 ⚠️ | `Label/Label Medium` (14/16) | — | 16 |
| XS | 24 | 40 ⚠️ | `Label/Label Small` (12/16) | — | 16 |

Gap ícono–texto: 8 (`Valor/spacing/8`). Íconos opcionales: `Icon Leading`, `Icon Trailing`.

| Shape | Radio | Cuándo |
|---|---|---|
| Square | `Valor/radius/L` (16) en Large y Medium · `Valor/radius/M` (12) en Small y XS | Dentro de un flujo (formulario, checkout, lista, modal) o con otro botón al lado |
| Round | `Valor/radius/XXL` (32, píldora) | CTA suelto o flotante (overlay de login, banner) |

El Ghost toma la misma forma que el botón al que acompaña.

### Color por estado

| Estado | Primary — fondo | Secondary — fondo / borde | Ghost — fondo | Texto |
|---|---|---|---|---|
| Enabled | `Button/primary-bg` | `Button/secondary-bg` / `Button/secondary-stroke` (0.5 px) | `Button/ghost-bg` | `Button/text` |
| Pressed | `Button/primary-bg-pressed` | `Button/secondary-bg-pressed` / `…-stroke-pressed` | `Button/ghost-bg-pressed` | `Button/text` |
| Focused | `Button/primary-bg-focused` | `Button/secondary-bg-focused` / `…-stroke-focused` | borde `Button/secondary-stroke-focused` | `Button/text` |
| Disabled | `Button/primary-bg-disabled` | `Button/secondary-bg-disabled` / `…-stroke-disabled` | — | `Button/text-disabled` |
| Loading | `Button/primary-bg` + barra de progreso | ídem Secondary | — (no tiene) | — |

Contraste: `Button/text` sobre `Button/primary-bg` **8.63:1** ✅ · borde Secondary `black/400` sobre blanco **3.23:1** ✅ (justo).

### Loading

`.Button Loading — Motion` ([4364:265](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4364-265)) prototipa la animación: la barra avanza lento mientras se procesa y completa rápido al confirmar (referencia: botón *Transferir* de Mercado Pago). Estados: Enabled → Loading start → Loading progress → Loading complete.

## Propiedades

| Propiedad | Tipo | Valores |
|---|---|---|
| `Style` | Variant | Primary · Secondary (Button) |
| `Size` | Variant | Large · Medium · Small · XS |
| `Shape` | Variant | Square · Round |
| `State` | Variant | Enabled · Pressed · Focused · Disabled · Loading (Ghost: sin Loading) |
| `Text` | Text | Label |
| `Icon Leading` / `Icon Trailing` | Boolean | — |
| `Stroke` | Boolean | Borde del Secondary |

## Plataformas

- **App (iOS / Android):** Square o Round según la regla de forma. En iOS, el CTA que flota sobre el contenido (login, "Agregar") va con Liquid Glass (ver Específicos *Button 💠 CTA*, pendientes).
- **Web y Dashboard:** falta el estado `Hover` ([C-S03](../audit.md#c-s03--lista-cerrada-de-estados)).
- **Kiosco (ADK):** usa sus propios botones hasta la convergencia ([Convergencia/adk-archway.md](../../../Convergencia/adk-archway.md)).

## Accesibilidad

- El label describe la acción ("Agregar al pedido", no "OK").
- `Focused` sólo con teclado externo o tecnologías de asistencia; nunca con el dedo.
- **Loading:** anunciar el cambio (`accessibilityValue` "Procesando", `aria-busy="true"`) y bloquear el doble toque. Con "Reducir movimiento", barra estática ([C-A06](../audit.md#c-a06--animaciones-sin-reglas-de-pausa)).
- **Área táctil:** XS y Small quedan en 40 → llevar a 48 ([C-A04](../audit.md#c-a04--áreas-táctiles)).
- Disabled: preferir explicar por qué no se puede avanzar (hint) antes que deshabilitar sin contexto.
