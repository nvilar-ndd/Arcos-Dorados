# Input — Text Field · Text Area · Password · Select · PinCode

> **Fuente de la verdad:** [Design Resources CORE › Imput text field](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=434-3088) · `Imput_Text Field` ([501:1801](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=501-1801), 9), `Imput_Text area` ([537:17470](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=537-17470), 9), `Imput_Password` ([5005:564](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5005-564), 18), `Imput_Select` ([5001:3921](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5001-3921), 3), `Imput_PinCode` ([5001:4017](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5001-4017), 4) + `Imput_PinCode box`, y las piezas `Imput label`, `Placeholder`, `Hint`.
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Form Field*, *Text Area*, *Form Password*, *Select Field*, *PinCode*. "Imput" es un typo en Figma ([C-H01](../audit.md#c-h01--typos-y-nombres)).

## Propósito

| Componente | Uso |
|---|---|
| **Text Field** | Texto de una línea con label, placeholder y texto de ayuda |
| **Text Area** | Texto multilínea, con contador de caracteres y botón de limpiar |
| **Password** | Los caracteres quedan ocultos; el ojo permite mostrarlos (`Shown` Off / On) |
| **Select** | No se escribe: al tocarlo abre una lista de opciones predefinidas |
| **PinCode** | Código dígito por dígito: 4 o 6 casillas |

## Anatomía y tokens

```
Label ··········· 0/100     ← Imput label (Label Small, Text/secondary · contador opcional)
┌──────────────────────────┐
│ ◯ Placeholder         ✕  │ ← Placeholder (Label Medium) · íconos leading / trailing opcionales
└──────────────────────────┘
Hint                         ← Hint (Label Small, Text/secondary) · ícono opcional
```

| Parte | Medida / token |
|---|---|
| Campo | 320 × 32 (Text Field, alto total 72 con label y hint) · Text Area 112 · Select 52 |
| Padding | `Valor/spacing/16` horizontal · `Valor/spacing/4` entre label, campo y hint |
| Radio | `Valor/radius/M` (12) — *Square Circle*: el pill come espacio de escritura |
| Fondo | `Surface/default` (Disabled: `Surface/subtle`) |
| Texto | `Text/primary` · placeholder `Text/secondary` (6.69:1 ✅) · disabled `Text/disabled` |
| PinCode box | 48 × 56, `Heading/Heading Large` (24), radio `Valor/radius/M` |

### Borde por estado

| Estado | Borde | Cuándo |
|---|---|---|
| Enabled | `Border/soft` ⚠️ 1.38:1 | Reposo |
| Focused | `Button/secondary-stroke-focused` | Foco de teclado, sin escribir |
| Pressed | `Button/secondary-stroke-pressed` | Mientras se toca |
| Active | `Border/strong` | Cursor dentro del campo |
| Typing | `Border/strong` | Escribiendo |
| Error | `Feedback/error` | Validación fallida; el hint pasa a mensaje de error |
| Success | — | Validación correcta |
| Completed | `Border/input-active` | Campo completo |
| Disabled | `Border/subtle` | No editable |

⚠️ En reposo el borde no delimita el campo ([C-A03](../audit.md#c-a03--bordes-de-controles-en-1381)). Además, Focused y Pressed usan tokens de **Button** en un Input; conviene `Border/strong` y un token de foco común ([A-05](../../audit.md#a-05--no-existe-un-indicador-de-foco)).

## Propiedades

| Componente | Propiedades |
|---|---|
| Text Field / Text Area | `State` (9 estados) |
| Placeholder | `Placeholder` (texto), `Leading Icon`, `Trailing Icon`, `State` |
| Imput label | `Text`, `Character`, `Character count`, `State` (Enabeld · Disabled) |
| Hint | `Hint`, `Leading artwork`, `State` (Enabled · Disabled · Error · Success) |
| Password | `Shown` (Off · On) × `State` (9) |
| Select | `Hint` (boolean), `State` (Enabled · Completed · Disabled) |
| PinCode | `Digits` (4 · 6), `Label`, `Hint`, `State` (Enabled · Error) |

## Pautas

- Label siempre visible (no reemplazarlo con el placeholder). El placeholder es un ejemplo, no la instrucción.
- El hint dice el formato **antes** del error ("8 caracteres como mínimo").
- Error: mensaje concreto y cómo resolverlo, en el hint. Ver [Voz y Tono › Problemas y recuperación](../../../../Voz-y-Tono/02_contextos-de-ux/01_problemas-recuperacion.md).
- Disabled con token, sin opacidad ([C-A05](../audit.md#c-a05--disabled-por-opacidad)).

## Accesibilidad

- Label asociado al campo (`<label for>` / `accessibilityLabel`). El contador de Text Area se anuncia al acercarse al límite.
- Error: `aria-invalid="true"` + `aria-describedby` al hint; en mobile, anunciar el error al validar.
- Password: el ojo es un botón con label "Mostrar contraseña" / "Ocultar contraseña". Permitir pegar.
- PinCode: un solo campo lógico para el lector ("Código de 6 dígitos"), `autocomplete="one-time-code"` / `textContentType = .oneTimeCode`, teclado numérico.
- Select: rol `button` con `aria-haspopup="listbox"`; anuncia el valor elegido.
