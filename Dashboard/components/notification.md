# Notification

> **Fuente de la verdad:** [Components › Notification](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6095-4568) · `Notification` (12 variantes), `Notification+ProgresBar` (4).
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Comunicar el resultado de una acción o un estado del sistema.

| Tipo | Dónde | Uso |
|---|---|---|
| **Toast** (emergente) | Esquina inferior derecha: **16 px** del borde inferior y **32 px** del derecho | Feedback de acciones. Sólo informativo: **no admite CTA** |
| **Inline** (informativa) | Integrada en el panel/pantalla | Contexto persistente (p. ej. "Si no seleccionás ningún filtro…"). **Admite CTA**. Por el momento, sólo en promociones |
| **+ProgresBar** | Toast | Procesos largos; permite seguir navegando |

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 288 × 100 (toast) · 288 × 68 (inline) · padding `spacing/200` · gap `spacing/100` · radio `spacing/050` |
| Fondo | `layer/02` · High contrast: `background/05` |
| Borde de estado | Success `support/success` · Error `support/error` · Warning `support/warning` · Info `link/primary` |
| Ícono de estado | mismo color que el borde |
| Título / mensaje | `Label03` / `Label02 - cms`; `text/primary`, `text/secondary` (`text/on-color` en high contrast) |
| CTA | botón secundario (`button/secondary`, `button/secondary-stroke`) |
| Cerrar | `Show close` |

Props: `Title text`, `Message text`, `Show close`, `Show CTA`, `Type` (Inline/Toast), `Status` (Success/Info/Warning/Error), `High contrast` (True/False).

## Comportamiento (Figma)

**Notification + progress bar**

- Si la carga dura **más de 8 segundos**, se muestra la notificación de progreso, con opción de cerrarla.
- Si aparecen otras notificaciones, se apilan **por encima** de la de carga.
- Si el usuario la cierra, deja de verse, pero al terminar **igual aparece** la de éxito, y si hay error **igual aparece** el error.
- Una vez completada, la notificación dura **8 segundos**.

**CTA**: sólo en las inline integradas en los paneles. Las emergentes no admiten acciones (uso incorrecto documentado en Figma).

## Responsive

Toast de 288 px fijo en desktop; en < 768 px ocupa el ancho disponible menos 16 px por lado y se ubica abajo.

## Accesibilidad

- Toast: región `aria-live="polite"` (éxito/info) o `role="alert"` (error). La región existe en el DOM antes de inyectar el mensaje.
- **8 s puede ser poco** (WCAG 2.2.1): pausar el temporizador en hover/foco y no auto-cerrar errores.
- El estado no depende sólo del color del borde: ícono + título ("Error", "Listo").
- Cerrar: `<button aria-label="Cerrar notificación">`.
- Usa varios hex sueltos (`#FFBC0D`, `#DB0007`, `#D9D9D9`, `#000000`) ([D-C04](../audit.md#d-c04--colores-sin-variable)). El frame *Modo dark* de Figma sólo prueba `Notification+ProgresBar`.
