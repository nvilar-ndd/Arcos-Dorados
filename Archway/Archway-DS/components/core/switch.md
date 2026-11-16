# Switch

> **Fuente de la verdad:** [Design Resources CORE › Switch](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5447-68) · `Switch` (Android, 10 variantes) y `Ios Toggle - Switch` ([5499:339](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5499-339), nativo).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Toggle / android*. También conocido como Toggle o interruptor.

## Propósito

> "Control para activar o desactivar una opción, con efecto inmediato." — Figma

**Usar:** ajustes que se aplican al instante, sin botón de confirmar (notificaciones). **No usar:** para elegir entre varias opciones ([Checkbox / Radio](./checkbox-radio.md)) ni cuando el cambio necesita confirmación (Checkbox + Button).

**Plataformas:** custom en Android; en iOS se usa el **Switch nativo**.

## Anatomía y tokens

| # | Parte | Medida / token |
|---|---|---|
| 1 | Track | 52 × 32, radio 16 (píldora), padding 4 |
| 2 | Handle | 24 × 24, `Surface/default` con sombra · en Pressed se estira a 30 × 24 |
| 3 | Focus indicator | 2 px por fuera del track, `Border/strong`. Sólo accesibilidad |
| — | Área táctil | 52 × 40 ⚠️ (4 arriba y abajo) |

| Estado | Track | Handle |
|---|---|---|
| Encendido | `Interactive/active` ⚠️ 1.69:1 | `Surface/default` |
| Apagado | `Surface/muted` ⚠️ 1.38:1 | `Surface/default` |
| Encendido + Disabled | `Button/primary-bg-disabled` | `Surface/default` |
| Apagado + Disabled | `Surface/muted` | `Surface/subtle` |
| Focused | + contorno `Border/strong` | — |
| Skeleton | `Surface/muted`, sin handle | — |

> **Regla de Figma:** siempre color sólido con token; **nunca opacidad** sobre el componente. Se propone llevarla a todo el sistema ([C-A05](../audit.md#c-a05--disabled-por-opacidad)).

⚠️ Los tracks no llegan a 3:1 contra el fondo ([C-A01](../audit.md#c-a01--switch-tracks-sin-contraste)).

## Propiedades

`Selected` (True · False) · `State` (Enabled · Pressed · Focused · Disabled · Skeleton).

## Movimiento

`motion-duration-fast` (100 ms), curva Standard `cubic-bezier(0.4, 0, 0.2, 1)`, según [Motion](../../foundations/motion.md). Sin ripple: el pressed es el estiramiento del handle.

## Accesibilidad

- `accessibilityLabel` = nombre de la opción; rol `switch`; estado on / off.
- Focused sólo con teclado externo, TalkBack o Switch Control; nunca con el dedo.
- Si la fila tiene label, toda la fila alterna el switch (área táctil ≥ 48).
