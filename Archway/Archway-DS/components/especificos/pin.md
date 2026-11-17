# Pin 💠

> **Fuente de la verdad:** [Design Resources CORE › Pin 💠](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5277-5) · component set `Pin` (3 variantes).
> **Origen:** ArchWay · Específico (Misiones) · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

Insignia (pin) del programa Misiones. `Status`: **Default** · **Incomplete** · **Expired**. 56 × 60.

## Hallazgos

Sin variables: `#F9F9F9` y `#FFFFFF` sueltos en los 3 estados ([C-T02](../audit.md#c-t02--colores-sin-variable)). Propuesta: `Surface/subtle` y `Surface/default`.

## Accesibilidad

El estado se anuncia en texto ("Pin Hora de disfrutar, incompleto"), no sólo con el tratamiento visual.

## Cambios 2026-11-17 (paridad con Figma)

- Hexágono (exterior blanco, interior `Surface/subtle`) con sombra; imagen 38. Incompleto al 50 %; Vencido al 50 % y en escala de grises.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
