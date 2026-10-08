# Progress (bar, circle, spinner, indicator)

> **Fuente de la verdad:** [Components › Progress bar](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=2635-5413) y [Progress indicator item](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=2816-7588).
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Componentes

| Componente | Para qué | Medida |
|---|---|---|
| `progress bar` | Progreso determinado con label, ícono y helper | 220 × 56 |
| `progress bar -Items` | Sólo la barra | 220 × 8 |
| `_Progress circle` | Progreso circular chico (archivo subiendo) | 16 × 16 · fases 10–100 % |
| `Spinner animation` / `Spinner base` | Carga indeterminada | 48 × 48 · 4 frames |
| `Progress indicator item` | Paso de un flujo *step-by-step* | 128 × 24 |

## Progress bar

| Parte | Token |
|---|---|
| Track | `layer/03` |
| Relleno | `link/primary` (activo) · `support/success` · `support/error` |
| Label / helper | `Label02` / `Label01`; `text/primary` y **`Text/text-secondary`** (variable de otra librería, [D-C05](../audit.md#d-c05--variables-de-otra-librería)) |

`State` = Active · Success · Error × `Progress` = 0 · 25 · 50 · 75 % · Success · Error.

## Spinner

`Color` = **Blue** (`link/primary`, sobre fondo claro) · **White** (`icon/tertiary`, sobre fondo oscuro).

## Progress indicator item (stepper)

Se usa en el header del template paso a paso: *Descuento → Detalles generales → Disponibilidad → Segmentación → Contenido de apoyo* (ver [usage/page-templates.md](../usage/page-templates.md)).

| State | Línea superior | Ícono |
|---|---|---|
| Incompleto | `border/03` | círculo vacío |
| Current | `border/04` (gold) | medio círculo |
| Completed | `border/04` | check sobre `button/primary-enabled` |
| Error | `border/03` | `support/error` |
| Disabled | `border/03` | `text/disabled` |
| Skeleton | `border/03` | `Miscellaneous/skeleton-background` ([D-C05](../audit.md#d-c05--variables-de-otra-librería)) |

Texto `Label01 - cms`. Usa también `Icon/icon-primary` y `Transparent`, que no son de esta librería.

## Accesibilidad

- Barra: `role="progressbar"` + `aria-valuenow/min/max` + `aria-label`. Spinner: `role="status"` con texto oculto ("Cargando…") y respetar `prefers-reduced-motion`.
- Stepper: `<ol>` con `aria-current="step"` en el actual; los pasos completados navegables como links si se permite volver.
- **Current y Completed** se diferencian por el ícono, pero la línea gold `border/04` sobre blanco da 1.69:1 ([D-A06](../audit.md#d-a06--dorado-sobre-blanco)): el ícono y el texto tienen que llevar el estado.
- Error en la barra: texto, no sólo el color rojo.
