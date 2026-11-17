# Loyalty home card

> **Fuente de la verdad:** [Design Resources CORE › Loyalty](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4100-16736) · component set `Loyalty home card` (2 variantes).
> **Origen:** ArchWay · Específico · **Estado en Figma:** Existe · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

Card de la Home con los puntos del programa Loyalty (MiM): saldo, avance hacia el próximo premio y premios bloqueados / desbloqueados.

`Type`: **Loyalty** · **Skeleton**. Props: `Points`, `Content`, `Middle points` (textos) y visibilidad de premio bloqueado / desbloqueado, punto medio, vencimiento de puntos, barra de avance (y completa), ilustración de monedas, título grande, "sumá puntos" e ilustración de combo.

## Tokens

Fondo `Surface/subtle` / `Surface/brand` · radio `Valor/radius/L` · texto `Display/Display Medium Bold` (puntos), `Heading/Heading Large Bold`, `Heading/Heading Small Bold`, `Text/Body Small`, `Label/Label Small` · barra `Interactive/active` sobre `Button/primary-bg-disabled` · íconos `Icon/gold`, `Icon/disabled`.

## Animaciones (Figma)

| # | Animación | Trigger | Duración / easing |
|---|---|---|---|
| 1 | Contador de puntos (number ticker) | Recibir puntos | ~1 s · ease-out |
| 2 | Avance de la barra | Recibir puntos (en paralelo) | ~1 s · ease-out |
| 3 | Confeti detrás del contenido | Barra al 100 % | ~1.5–2 s · ease-out con gravedad |
| 4 | Candado se abre | Barra al 100 % | ~0.3 s · ease-in-out |
| 5 | "Desbloqueado" entra de derecha a izquierda | Después del candado (+0.2 s) | ~0.4 s · ease-out |
| 6 | Flotación de monedas | **Siempre (loop)** | ~2.5–3 s · sinusoidal, 3–4 px |

## Accesibilidad

- Con "Reducir movimiento": sin confeti ni flotación; contador y barra sin animar ([C-A06](../audit.md#c-a06--animaciones-sin-reglas-de-pausa)).
- El loop infinito (6) necesita poder pausarse o detenerse a los 5 s (WCAG 2.2.2).
- Anunciar "Premio desbloqueado" con `aria-live`. Los puntos se leen como número ("1.000 puntos").

## Cambios 2026-11-17 (paridad con Figma)

- Título *MiMcDonald’s* en `Heading Small Bold`; tarjeta radio L con esquina superior derecha de 48 y trazo `Border/subtle`.
- Puntos en `Display Medium Bold` con texto en degradé; barra sobre `Button/primary-bg-disabled` con estrellas y degradé de avance (C-T02).
- Pie de vencimiento sobre `Surface/subtle`, radio L abajo, con ícono de advertencia.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
