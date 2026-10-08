# Calendar (agenda de reservas)

> **Fuente de la verdad:** [Components › Calendar](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13517) · `Day`, `Number Day`, `Evento`.
> **Origen:** Dashboard DS (flujo de **Cumpleaños**) · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Vista mensual Lunes–Domingo para gestionar reservas de cumpleaños por restaurante. No confundir con el [Date picker](./date-picker.md), que es un selector.

## Anatomía

| Pieza | Medida | Tokens |
|---|---|---|
| `Day` (celda) | 138 × 144 (flex) · padding 16/8 (`spacing/200`/`spacing/100`) · gap `spacing/100` | fondo `background/01`, borde `border/02` |
| `Number Day` | 24 × 16 · radio `spacing/300` | Current: fondo `layer/06` + `text/on-color` |
| `Evento` (card) | 164 × 40 (Reservas) · 164 × 24 (Slot) · padding 4/8 · radio `spacing/100` | ver estados |

Figma documenta la celda como `padding: var(--Spaces-200, 16px) var(--Spaces-100, 8px)`, `gap: var(--Spaces-100, 8px)`, alto 144 px, ancho flex.

## Estados de `Day`

| Type | Fondo | Borde |
|---|---|---|
| Active | `background/01` | `border/02` |
| Current Day | `background/01` | `border/01` |
| Disabled (pasado) | `background/01` | `border/02` |
| Blocked | `layer/02` | `border/02` |

Variante `Cards` = True/False (con o sin eventos).

## Estados de reserva (`Evento`)

Documentación de Figma:

| Estado | Código | Uso | Color | Token actual |
|---|---|---|---|---|
| Pendiente de pago | `PENDING` | Reserva iniciada en la app sin completar el pago; lugar retenido por el tiempo configurado en el dashboard | Amarillo | `button/primary-disabled` |
| Activa | `CONFIRMED` | Pago exitoso, reserva confirmada | Verde | `#E2EABF` suelto + borde `support/success` |
| Cancelada | `CANCELLED` | Usuario o staff cancela antes del evento | Rojo | `color/tertiary/red-disabled` (primitivo) |
| Finalizada | `COMPLETED` | Era `CONFIRMED` y la fecha ya pasó. Se ve *disabled* pero se puede abrir para ver información. **No implica asistencia confirmada** | Verde atenuado | — |
| Ver [x] más | — | Más de 2 reservas en el día (activas o canceladas) | Gris | `layer/03` |
| Slot | — | Sólo horario | Verde | `tag/background-green` |

Props: `Nombre`, `Horario`, `Icon`, `Show Title`, `Pay in counter` (pago en mostrador).

> Pendiente toma un token de **botón** y Activa un hex suelto con el mismo valor que `tag/background-green`. Propuesta en [D-C10](../audit.md#d-c10--estados-de-negocio-con-tokens-de-otro-componente).

**Problema futuro (Figma):** registrar la asistencia real requiere otro flujo (check-in).

## Responsive

7 columnas flex en desktop. En < 768 px la grilla mensual no entra: pasar a **vista lista por día** (agenda).

## Accesibilidad

- Tabla con `role="grid"`, encabezados de día como `columnheader`; cada día con `aria-label` completo ("Martes 14 de enero, 3 reservas").
- El estado de la reserva no puede depender sólo del color: el texto ("Pendiente", "Cancelada") o un ícono tienen que estar visibles. Cancelada ya tacha nombre y horario (`Nombre cancelado`, `Horario cancelado`).
- **Finalizada** se ve disabled pero es interactiva: no usar `disabled`/`aria-disabled`; comunicar "Finalizada" en el nombre accesible.
- "Ver más" como `<button>` que abre la lista del día.
