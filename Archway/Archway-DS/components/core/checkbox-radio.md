# Checkbox · Radio

> **Fuente de la verdad:** [Design Resources CORE › Checkbox / Radio](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4979-13405) · `Checkbox` ([4983:115](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4983-115), 4) y `Radio` ([4993:137](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4993-137), 4).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Legal Checkbox*, *Circle selector*.

## Propósito

| ¿…? | Componente |
|---|---|
| ¿Se pueden elegir ninguna, una o varias opciones, de forma independiente? | **Checkbox** |
| ¿Se elige una sola entre alternativas que se excluyen? | **Radio** |
| ¿Filtra sin salir de la pantalla? | [Chip](./chip.md) |
| ¿Es un encendido/apagado que aplica el cambio en el momento? | [Switch](./switch.md) |

Checkbox también se usa solo (aceptar términos y condiciones). En la app, por lo general va **sin label**: la fila del producto da el contexto.

## Anatomía y tokens

| # | Parte | Medida |
|---|---|---|
| 1 | Ícono | 24 (Square en Checkbox, Circle en Radio), de Iconography |
| 2 | Área táctil | 40 × 40 transparente ⚠️ |
| 3 | Label | Opcional, apagado por defecto · `Label/Label Medium` · gap `Valor/spacing/8` |

| Parte | Enabled | Disabled |
|---|---|---|
| Contorno (sin seleccionar) | `Icon/primary` | `Border/subtle` |
| Fondo (seleccionado) | `Button/primary-bg` | `Button/primary-bg-disabled` |
| Tilde (seleccionado) | `Icon/primary` (8.63:1 sobre dorado ✅) | `Icon/disabled` |
| Label | `Text/primary` | `Text/disabled` |

El estado seleccionado se reconoce por el tilde (forma), no sólo por el dorado ✅.

## Propiedades

`Selected` (False · True) · `State` (Enabled · Disabled) · `Label` (boolean) · `Text`.

> **Pressed y Focused** no están en el control: los resuelve **la fila** donde vive ([List Item](./list-item.md)).

## Pendiente en Figma

"A definir": cuándo se activa el label, en qué casos aparece Disabled, reglas de convivencia y ejemplos en contexto ([C-S06](../audit.md#c-s06--marcas-pendientes)).

## Accesibilidad

- Sin label visible, `accessibilityLabel` obligatorio (igual que Icon Only).
- Checkbox: rol `checkbox`, estado checked. Radio: rol `radio` dentro de un `radiogroup` con nombre.
- La fila completa es el área táctil (≥ 48); el control solo queda en 40 ([C-A04](../audit.md#c-a04--áreas-táctiles)).
- Teclado (web): Espacio marca Checkbox; flechas mueven la selección del Radio.

## Cambios 2026-11-17 (paridad con Figma)

- Glifos exactos de Iconografía (24). Radio seleccionado: círculo dorado con el check calado (no un punto).
- Área: label con padding 8 y gap 8.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
