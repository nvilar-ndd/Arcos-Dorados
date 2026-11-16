# Tooltip

> **Fuente de la verdad:** [Design Resources CORE › Tooltip](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2106-1752) · `Tooltip_Plain` ([2108:2512](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2108-2512), 12), `Rich Tooltip` ([2316:250](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2316-250), 12) y `Pointer` ([2108:2728](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2108-2728), 4).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Tooltips*.

## Propósito

> "Mensaje corto y contextual anclado a un elemento de la UI. Informa, no pide acción." — Figma

**Usar:** al tocar un ícono de ayuda (?), mensajes contextuales del sistema (la distancia al local es grande), onboarding puntual. **No usar:** si el mensaje pide una decisión (Modal / Alert), si es un error de validación (hint del [Input](./input.md)) o si es permanente (texto en la pantalla).

| | Tooltip | [Toast](./toast.md) | Alert | Hint |
|---|---|---|---|---|
| Anclado | Sí | No | No | A un campo |
| Se cierra | Solo / tap | Solo | Con acción | Siempre visible |

*Tooltip Walkthrough* (recorridos guiados) figura como **Falta** en el Índice.

## Anatomía y tokens

| Parte | Plain | Rich |
|---|---|---|
| Pointer | 16 × 8, indica el elemento anclado | Opcional (`ShowPointer`) |
| Contenedor | `Surface/inverse`, radio `Valor/radius/S` (8) + squircle 60 % | `Surface/inverse`, radio `Valor/radius/M` / `L` |
| Texto | `Label/Label Small` (12), `Text/on-color` (14.55:1 ✅) | Título `Label/Label Medium Bold` + cuerpo `Label/Label Medium` / `Small` |
| Ícono leading | Opcional | Opcional |
| Cerrar | Opcional, hit area 24 ⚠️ | — |
| Medidas | Alto mín. 36 · ancho 68–300 · label máx. 200 | 248 de ancho |

`Position` Top · Bottom · Left · Right × `alignment` Start · Center · End. Se elige según el espacio: **nunca debe quedar cortado** por los bordes.

## Comportamiento

- **Aparece:** tap en el disparador o evento del sistema.
- **Se cierra:** tap en X, tap fuera o automático después de X segundos ("definir con producto").

## Accesibilidad

- Disparador: `accessibilityLabel` "Más información sobre [contexto]", hint "Tocá para ver más información".
- Al abrirse, el lector enfoca su contenido; la X tiene label "Cerrar" y área táctil ≥ 48 ([C-A04](../audit.md#c-a04--áreas-táctiles)).
- Web: `role="tooltip"` + `aria-describedby`; se cierra con Esc; con hover y foco (WCAG 1.4.13: descartable, persistente y "hoverable").
- iOS: `cornerCurve = .continuous` para el squircle.
