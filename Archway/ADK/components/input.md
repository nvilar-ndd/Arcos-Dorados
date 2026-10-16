# Input: Text Field, Dropdown y Keyboard

> **Fuente:** [[ADK] Design System › Input](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=43-1531) — `ADK Text Field`, `ADK Dropdown` e `Input` (teclado).
> **Origen:** ADK. Equivalentes en ArchWay: Text field y Dropdown (mobile). El teclado en pantalla no existe en ArchWay.

## Propósito

Carga de datos en kiosco, por ejemplo:

- Documento para la factura. El dropdown de ejemplo ofrece *Cédula Física*, *Cédula Jurídica* y *DIMEX*.
- Nombre para el pedido.
- Código de promoción.

El kiosco no tiene teclado físico, así que **el teclado en pantalla es parte del componente**.

## Anatomía y tokens

```
Label (16 · text.secondary)
┌────────────────────────────────────────────────────────────┐
│ [🪪 38×26]  Input text (22 · text.primary)|                  │  888 × 104 · fondo blanco · radio 0
└────────────────────────────────────────────────────────────┘  sólo línea inferior #ADADAD
Helper text (22 · text.secondary)                                total 888 × 136
```

| Pieza | Medida | Tokens actuales |
|---|---|---|
| Campo | 888 × 104 | `background.default` · **sólo línea inferior** `secondary.grey` `#ADADAD` · radio 0 |
| Label | 16 Regular | `text.secondary` `#6F6F6F` |
| Valor | 22 Regular | `text.primary` |
| Helper | 22 Regular | `text.secondary` |
| Placeholder | 22 Regular | `#ADADAD` |
| Ícono a la izquierda | 38 × 26 | `#292929` (p. ej. documento) |
| Dropdown | 888 × 104 cerrado | Chevron de 48 px |
| Lista del dropdown | 888 × 336 | Opciones de 64 de alto. Seleccionada: `background.subtle` + borde Gold |
| Keyboard | 704 × 575 | Teclas de 48 px, texto 28–48 |

## Variantes

| Componente | Propiedades |
|---|---|
| Text Field | Status = Inactive · Focused · Typing · Activated · Error |
| Dropdown | Status = Inactive · Dropdown (abierto) · Activated |
| Keyboard | Type Alphabet / Number · Mayus · Characters · Two options (con *Borrar* / *Espacio*) |

## Estados del Text Field

| Estado | Borde | Label | Contenido |
|---|---|---|---|
| Inactive | `#ADADAD` | `#6F6F6F` | Placeholder |
| Focused | `#ADADAD` **(sin cambio)** | `#6F6F6F` | Cursor + placeholder `#ADADAD` |
| Typing | `#ADADAD` | `#6F6F6F` | Texto + cursor |
| Activated | `#ADADAD` | `#6F6F6F` | Texto |
| Error | `#DB0007` | `#DB0007` | Texto + cursor rojo |

> **Focused y Typing no se distinguen del reposo** salvo por el cursor de 2 px. En una pantalla con varios campos no queda claro cuál recibe lo que se tipea (A-C05).

## Responsive

- 888 px es más ancho que la columna de contenido (656). Los inputs viven en pantallas de formulario de ancho completo, con margen de 96.
- En tablet: ancho 100 % de la columna, máx. 640.
- En tablet el teclado es el **nativo del sistema**, no el componente.

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Borde del campo | `#ADADAD` sobre blanco da **2.24:1**, no delimita el campo (1.4.11). Proponemos `border.default` `#6F6F6F` (5.02:1) en reposo y `border.strong` 2 px en foco (A-A02, A-C05) |
| Placeholder | `#ADADAD` da 2.24:1. Si da información, como el formato del documento, tiene que ir en el helper con `text.secondary` |
| Error | Hoy se indica sólo con color (borde y label rojos). Sumar ícono y mensaje (1.4.1). `aria-invalid="true"` + `aria-describedby` |
| Label | `<label for>` siempre visible |
| Teclado en pantalla | 575 de alto: entra en el área accesible de 800. Cada tecla es un `<button>`; las especiales llevan `aria-label` (Borrar, Mayúsculas, Espacio) |
| `inputmode` / `autocomplete` | Para que en tablet aparezca el teclado nativo correcto (`numeric` para documento) |
| Datos personales | Enmascarar el documento al confirmar. El timeout de inactividad del kiosco tiene que borrar lo cargado |
