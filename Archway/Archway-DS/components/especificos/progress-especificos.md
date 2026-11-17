# Loading & progress 💠

> **Fuente de la verdad:** [Design Resources CORE › Loading & progress 💠](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5253-2279) · `ProgressBar_beneficios` ([5253:2593](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5253-2593), 3), `Progress bar misiones` ([5253:2613](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5253-2613), 3).
> **Origen:** ArchWay · Específicos · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

Barras de progreso con contexto de negocio, armadas sobre [Progress](../core/progress.md).

| Componente | Tamaño | Estados |
|---|---|---|
| ProgressBar_beneficios | 272 × 4 | Default · In Progress · Complete |
| Progress bar misiones | 332 × 16 | Default · In progress · Complete (propiedad `Estado`) |

## Hallazgos

- **ProgressBar_beneficios** no usa variables: `#D6D6D6` y `#FFBC0D` sueltos ([C-T02](../audit.md#c-t02--colores-sin-variable)); el dorado sobre blanco es 1.69:1 ([C-A02](../audit.md#c-a02--pagination-y-progress-step-en-dorado)).
- **Progress bar misiones** usa `Background/01` y `Feacture/Misiones`, variables eliminadas / renombradas el 15/10 ([C-T01](../audit.md#c-t01--variables-que-no-existen-en-foundations)), y 3 blancos sin variable.

## Accesibilidad

Las de [Progress](../core/progress.md#accesibilidad): `progressbar` con valor y texto del objetivo.

## Cambios 2026-11-17 (paridad con Figma)

- Beneficios: degradé fucsia → rojo → naranja (primitivos, C-T02); completo en `Interactive/active` con check.
- Misiones: riel `Surface/subtle` con rombos dorados cada 82,88; avance `Feature/missions` con knob blanco de 12.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
