# Text field y Text area

> **Fuente de la verdad:** [Components › TextField](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=857-22444) · component sets `TextField`, `Text Area`, `TextField_Dropdown`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Ingreso de texto libre de una línea (`TextField`) o varias (`Text Area`). `TextField_Dropdown` combina el campo con un desplegable de sugerencias (búsqueda o autocompletar, p. ej. "Buscá o escribí un segmento").

## Anatomía y tokens

| Parte | Token | Notas |
|---|---|---|
| Contenedor | 321 × 72 (label + campo); 321 × 104 con error | |
| Label | `text/primary`, `Label01 - cms` | opcional |
| Campo (fondo) | `layer/02` | `layer/03` en hover/disabled |
| Borde | `button/secondary-stroke` (activo) · `button/secondary-hover` | |
| Placeholder | `text/secondary` | |
| Valor | `text/primary` · `color/black/800` en algunas variantes ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo)) | |
| Ícono izquierdo / derecho | 16 px, `icon/primary` | props `IconLeft`, `IconRight` |
| Supporting text | `text/secondary` / `text/error` / `support/success` | prop booleana |
| Contador | `text/secondary` | prop `contador` |
| Text Area | 328 × 128 | usa la variable **`Text/text-primary`**, que no pertenece a esta librería ([D-C05](../audit.md#d-c05--variables-de-otra-librería)), y `#FFFFFF` suelto |

## Estados

`TextField` tiene 9 estados: Default · Hover · Focus · **Active-Typing** · Error · Success · Disabled · complete (con valor) y variantes con ícono. `Text Area`: Default · Disabled · Error · Focus · Warning.

| Estado | Fondo | Borde | Texto de soporte |
|---|---|---|---|
| Default | `layer/02` | — | `text/secondary` |
| Hover | `layer/03` | `button/secondary-hover` | |
| Focus / Active-Typing | `layer/02` | `button/secondary-stroke` | |
| Error | `layer/02` | `support/error` | `text/error` + ícono |
| Success | `layer/02` | `support/success` | `support/success` |
| Disabled | `layer/03` | — | `text/disabled` |
| Warning (Text Area) | | `support/warning` | |

## Responsive

Ancho fluido (fill) dentro de la grilla del formulario. En los templates de Country se ubican de a dos por fila en desktop ([usage/page-templates.md](../usage/page-templates.md)) y en una columna en mobile.

## Accesibilidad

- `<label for>` siempre visible; el placeholder no reemplaza al label.
- Error: `aria-invalid="true"` + `aria-describedby` apuntando al supporting text. El error no puede depender sólo del color rojo: va con ícono y texto.
- Contador: anunciarlo con `aria-live="polite"` sólo al acercarse al límite.
- **Contraste del borde:** el estado default no tiene borde y `layer/02` sobre blanco no delimita el campo (WCAG 1.4.11); ver [D-A02](../audit.md#d-a02--bordes-en-light).
- `TextField_Dropdown`: patrón *combobox* (`role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`).
