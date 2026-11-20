# Inline notice

> **Fuente de la verdad:** [Design Resources CORE › Inline notice](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5699-578) · component set `Inline notice` (4 variantes, propiedad `Tono`).
> **Origen:** ArchWay · Nivel 1 Core · **Nuevo en Figma:** 2026-11-17 · **Extraído vía Figma MCP:** 2026-11-17 · **Actualizado:** 2026-11-20 (tipografía 12/16 con variables, título arriba de la descripción, ícono centrado, variante `Tono4`).

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
| 2 | Ícono de tono | 16 × 16 dentro de una caja de 20 × 20, **centrada verticalmente** con el bloque de texto (auto layout `CENTER`). Relleno `Icon/primary` en Informativo y `Surface/inverse` en los otros tres (mismo `#292929`) |
| 3 | Contenido | Columna vertical, gap 0, ancho Fill: título → descripción → enlace |
| 4 | Título (opcional, `Mostrar título`, oculto por defecto) | Speedee Bold 12/16, tracking 0.25 — variables `Font/size/xs`, `Font/line-height/s`, `Font/letter-spacing/m`, sin estilo de texto (= `Label/Label Small Bold`). Relleno `Surface/inverse` |
| 5 | Descripción | Estilo **`Label/Label Small`** (Speedee Regular 12/16, tracking 0.25), `Text/primary` |
| 6 | Acción · enlace (opcional, oculto por defecto) | Speedee Bold 12/16 subrayado, mismas variables que el título, relleno `Surface/inverse`. No tiene propiedad booleana para mostrarlo ([C-T07](../audit.md#c-t07--inline-notice-ajustes-del-2011)) |

Gap ícono–texto 8. Desde el 20/11 la descripción usa `Label/Label Small` y el título y el enlace consumen las variables `Font/*`: la parte tipográfica de [C-T06](../audit.md#c-t06--inline-notice-sin-tokens) queda resuelta (con la observación de [C-T07](../audit.md#c-t07--inline-notice-ajustes-del-2011)). Los fondos siguen sin variable.

| Tono | Ícono | Fondo en Figma | Web (primitivo) | iOS / Android |
|---|---|---|---|---|
| Informativo (en Figma la variante se llama `Tono4`) | `info-filled` | `#EDF5FF` | `color/blue/100` | `Feedback/info-surface` |
| Positivo | `success-filled` | `#EBF7ED` | `color/green/100` | `Feedback/success-surface` |
| Advertencia | `warning-filled` | `#FFEDD5` | `color/orange/100` | `Feedback/warning-surface` |
| Crítico | `error-filled` | `#FFEDF0` | `color/red/50` | `Feedback/error-surface` |

> ⚠️ Los fondos son hex sin variable. Hasta que se aprueben `Feedback/*-subtle` (C-T06), web usa los primitivos más cercanos y nativo usa `Feedback/*-surface`.

## Propiedades

| Web (`AwInlineNotice`) | iOS (`AWInlineNotice`) | Android (`AwInlineNotice`) | Figma |
|---|---|---|---|
| `tone: 'info' \| 'success' \| 'warning' \| 'critical'` | `tone: .info …` | `tone: AwInlineNoticeTone` | `Tono` (`Tono4` = info · `Positivo` · `Advertencia` · `Crítico`) |
| `title?` | `title:` | `title =` | `Título` (texto) + `Mostrar título` (booleano, `false` por defecto) |
| `description` | primer argumento | `description` | `Descripción` |
| `actionLabel?` + `href?` o evento `action` | `actionLabel:` + `action:` | `actionLabel` + `onAction` | `Texto de acción` (la capa está oculta y sin booleano) |
| `icon?` | — | — | `Icono · Informativo` / `· Positivo` / `· Advertencia` / `· Crítico` (intercambio de instancia) |

Descripción del componente en Figma: *"Inline notice comunica una condición local o advierte de un cambio de expectativas. Tono independiente del ETA. Textos de instancia sin copy de negocio por defecto; la content writer los redacta en el archivo de tarea. Título y enlace opcionales. Icono intercambiable según significado. Sin cierre, sin número de líneas como variante."*

## Estados

Sin estados propios. El enlace hereda los de un link: Hover subrayado más grueso (web), Focus con el anillo de foco del sistema, Active.

## Responsive

Ocupa el ancho del contenedor; el texto se envuelve en tantas líneas como haga falta y el ícono queda centrado verticalmente (Figma). En Kiosco ADK conviene un ancho mínimo de 328 y el enlace como botón de al menos 48 de alto.

## Accesibilidad

- Web: `role="alert"` en Advertencia y Crítico, `role="status"` en el resto. Android: live region `Polite` en Advertencia y Crítico.
- El tono no puede depender sólo del color (1.4.1): el ícono cambia por tono y se recomienda título en Advertencia y Crítico.
- Contraste texto `Text/primary` (#292929) sobre los cuatro fondos > 12:1 ✅.
- Texto de 12/16: respeta los topes de escalado de [Typography](../../foundations/typography.md) (Label Small 12 → 16). Para avisos de varias líneas ver [C-T07](../audit.md#c-t07--inline-notice-ajustes-del-2011).
- El enlace tiene que describir el destino ("Ver detalle del pedido", no "Acá").

## Código

- Web: [`AwInlineNotice.vue`](../../ui/src/components/AwInlineNotice.vue) · Storybook *Componentes/Core/Inline notice*.
- iOS: `AWInlineNotice` en [`AWFeedback.swift`](../../ios/Sources/ArchwayUI/Core/AWFeedback.swift).
- Android: `AwInlineNotice` en [`AwFeedback.kt`](../../android/archway-ui/src/main/java/com/arcosdorados/archway/core/AwFeedback.kt).

Los tres usan Label Small / Label Small Bold, título en su propia línea e ícono centrado (20/11). La paridad de píxeles medida el 17/11 (0,33–0,36 %) corresponde a la versión 14/20; no se volvió a medir (la fuente Speedee no está en el repo).
