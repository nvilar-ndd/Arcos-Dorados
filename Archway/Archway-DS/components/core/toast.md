# Toast

> **Fuente de la verdad:** [Design Resources CORE › Toast](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4709-2086) · component set `Toast / General` (4 variantes).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Toast / General*. También conocido como notificación flotante o mensaje de confirmación.

## Propósito

> "Mensaje contextual y transitorio que informa sobre el resultado de una acción o el estado de una tarea, sin interrumpir el flujo del usuario." — Figma

| ¿…? | Usar |
|---|---|
| ¿El usuario tiene que confirmar o descartar? | Dialog / Alert |
| ¿Requiere una acción para resolverse? | Banner |
| ¿Es un estado persistente de un formulario? | Hint del [Input](./input.md) |
| ¿Muestra progreso o carga? | [Progress](./progress.md) |

## Anatomía y tokens

| # | Parte | Medida / token |
|---|---|---|
| 1 | Borde de acento | Stroke izquierdo 5 px, color del estado |
| 2 | Ícono de estado | 16 × 16, un color, token del estado |
| 3 | Texto | `Label/Label Medium` (14/16), `Text/on-color` · máx. 2 líneas, ellipsis |
| 4 | Fondo | `Surface/inverse`, radio 8 (`Valor/radius/S`) |

Ancho Fill, **mín. 328 / máx. 408** (en tablet queda en 408, centrado) · alto según contenido (64 con una línea) · padding 8 vertical, 24 izquierda, 16 derecha · gap ícono–texto 8.

| Status | Acento + ícono | Contraste sobre `Surface/inverse` (3:1) |
|---|---|---|
| Info | `Feedback/info-on-black` | 3.96:1 ✅ |
| Success | `Feedback/success-on-black` | 3.44:1 ✅ |
| Warning | `Feedback/warning` | 8.63:1 ✅ |
| Error | `Feedback/error-on-black` | 4.24:1 ✅ |

Texto `Text/on-color` sobre `Surface/inverse`: 14.55:1 ✅. Las variantes `-on-black` existen justamente para este fondo; no es dark mode.

> La ficha de Figma cita `#FF1017` para error y `#2B8C4E` para success; los valores de las variables son `#FF4248` y `#2B8C4D` ([C-T04](../audit.md#c-t04--documentación-con-nombres-viejos-o-hex)).

## Propiedades

`Status` (Success · Error · Warning · Info) · textos por estado (`Text success`, `Text Warning`, `Text Information`, `Support text error`) · `Show support text` + `Support text` (oculto por defecto, máx. 10 caracteres).

## Pautas (Figma)

- Cada estado tiene **un ícono fijo**. El texto de soporte **no se usa en general**.
- Excepción documentada: *Pedido por voz* (ícono de audio + tiempo restante). No es un patrón a repetir; otros usos se consultan con Design Ops.
- Texto principal: máximo 2 líneas. **Duración: 5 segundos** por defecto.
- Copy: [Voz y Tono › Confirmaciones](../../../../Voz-y-Tono/02_contextos-de-ux/02_confirmaciones.md).

## Accesibilidad

- Anunciar sin mover el foco: `role="status"` / `aria-live="polite"` (Error: `assertive`); en iOS `UIAccessibility.post(.announcement)`, en Android `announceForAccessibility`.
- El estado no depende sólo del color: hay ícono y texto ✅.
- 5 s puede no alcanzar con lector de pantalla o con 2 líneas: extender o permitir cerrar ([C-A06](../audit.md#c-a06--animaciones-sin-reglas-de-pausa)).
- No poner acciones críticas dentro del Toast (desaparece).
