# Inline notice

> **Fuente de la verdad:** [Design Resources CORE › Inline notice](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5699-578) · component set `Inline notice` (4 variantes, propiedad `Tono`).
> **Origen:** ArchWay · Nivel 1 Core · **Nuevo en Figma:** 2026-11-17 · **Extraído vía Figma MCP:** 2026-11-17.

## Propósito

Aviso contextual y **persistente** dentro de un bloque: comunica una condición o un cambio de expectativas (stock bajo, demora, pago rechazado). No tiene cierre ni temporizador; se retira cuando la condición deja de aplicar.

| ¿…? | Usar |
|---|---|
| ¿Es el resultado transitorio de una acción? | [Toast](./toast.md) |
| ¿Es un error de un campo puntual? | Hint del [Input](./input.md) |
| ¿Hay que confirmar o decidir? | [Dialog](../especificos/dialog-popup.md) |

## Anatomía y tokens

| # | Parte | Medida / token |
|---|---|---|
| 1 | Contenedor | Ancho Fill (inicial 296), padding 10 vertical · 12 horizontal, radio 4 (`Valor/radius/XS`) |
| 2 | Ícono de tono | 16 × 16 dentro de una caja de 20 × 20 alineada arriba, `Icon/primary` |
| 3 | Título (opcional) | Speedee 14/20 Bold, `Text/primary`, en línea con la descripción |
| 4 | Descripción | Speedee 14/20 Regular, `Text/primary` |
| 5 | Acción · enlace (opcional) | Speedee 14/20 Bold, subrayado |

Gap ícono–texto 8. Los textos no tienen estilo de texto en Figma; equivalen a `Body/Body Medium` y `Body/Body Medium Bold` ([C-T06](../audit.md#c-t06--inline-notice-sin-tokens)).

| Tono | Ícono | Fondo en Figma | Web (primitivo) | iOS / Android |
|---|---|---|---|---|
| Informativo | `info-filled` | `#EDF5FF` | `color/blue/100` | `Feedback/info-surface` |
| Positivo | `success-filled` | `#EBF7ED` | `color/green/100` | `Feedback/success-surface` |
| Advertencia | `warning-filled` | `#FFEDD5` | `color/orange/100` | `Feedback/warning-surface` |
| Crítico | `error-filled` | `#FFEDF0` | `color/red/50` | `Feedback/error-surface` |

> ⚠️ Los fondos son hex sin variable. Hasta que se aprueben `Feedback/*-subtle` (C-T06), web usa los primitivos más cercanos y nativo usa `Feedback/*-surface`.

## Propiedades

| Web (`AwInlineNotice`) | iOS (`AWInlineNotice`) | Android (`AwInlineNotice`) | Figma |
|---|---|---|---|
| `tone: 'info' \| 'success' \| 'warning' \| 'critical'` | `tone: .info …` | `tone: AwInlineNoticeTone` | `Tono` |
| `title?` | `title:` | `title =` | `Título` (visible/oculto) |
| `description` | primer argumento | `description` | `Descripción` |
| `actionLabel?` + `href?` o evento `action` | `actionLabel:` + `action:` | `actionLabel` + `onAction` | `Acción · enlace` |

## Estados

Sin estados propios. El enlace hereda los de un link: Hover subrayado más grueso (web), Focus con el anillo de foco del sistema, Active.

## Responsive

Ocupa el ancho del contenedor; el texto se envuelve en tantas líneas como haga falta y el ícono queda arriba. En Kiosco ADK conviene un ancho mínimo de 328 y el enlace como botón de al menos 48 de alto.

## Accesibilidad

- Web: `role="alert"` en Advertencia y Crítico, `role="status"` en el resto. Android: live region `Polite` en Advertencia y Crítico.
- El tono no puede depender sólo del color (1.4.1): el ícono cambia por tono y se recomienda título en Advertencia y Crítico.
- Contraste texto `Text/primary` sobre los cuatro fondos > 12:1 ✅.
- El enlace tiene que describir el destino ("Ver detalle del pedido", no "Acá").

## Código

- Web: [`AwInlineNotice.vue`](../../ui/src/components/AwInlineNotice.vue) · Storybook *Componentes/Core/Inline notice*.
- iOS: `AWInlineNotice` en [`AWFeedback.swift`](../../ios/Sources/ArchwayUI/Core/AWFeedback.swift).
- Android: `AwInlineNotice` en [`AwFeedback.kt`](../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwFeedback.kt). El título se concatena en el mismo texto (sin negrita) hasta sumar soporte de `AnnotatedString` a `AwText`.

Paridad con Figma (Storybook vs captura, 296 × 40): 0,33–0,36 % de píxeles distintos.
