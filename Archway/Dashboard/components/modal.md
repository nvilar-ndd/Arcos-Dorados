# Modal

> **Fuente de la verdad:** [Components › Modal](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6301) · component set `Modal` (Default · Mobile · Custom).
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Interrumpir el flujo para confirmar, completar un dato puntual o mostrar contenido que requiere foco (confirmación de eliminación, formulario corto). `Custom` tiene un **slot** para reemplazar el cuerpo por un componente propio.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | fondo `layer/02` · radio `spacing/100` (8) |
| Padding | Default 24 (`spacing/300`) · Mobile 24/16 · Custom 0 |
| Gap entre bloques | `spacing/400` (32) |
| Optional label | `Label01 - cms`, `text/secondary` |
| Título | `H7 - CMS`, `text/primary` |
| Descripción | `Label02 - cms`, `text/secondary` |
| Imagen | opcional (`Show Image`) |
| Divider | opcional, `border/02` |
| Cerrar | ícono 24 px |
| Botones | secundario + primario, alineados a la derecha |

Props: `Show Optional label`, `Text Title`, `Text description`, `Show buttons`, `Show Image`, `Show description`, `custom` (SLOT), `Show custom`, `Show scroll`, `Show divider`.

## Tamaños (Modal Custom — Sizes & Usage)

> El modal usa **max-width** basado en tokens de tamaño, alineado 1:1 con NuxtUI / Tailwind, para evitar anchos arbitrarios. — Figma

| Token | Valor | Tailwind | Uso recomendado |
|---|---|---|---|
| `size/modal/xs` (XSmall) | 384 px | `max-w-sm` | Confirmaciones, formularios simples |
| `size/modal/sm` (Small) | 512 px | `max-w-lg` | Formulario estándar |
| `size/modal/md` (Medium) | 672 px | `max-w-2xl` | Contenido mixto (form + info) |
| `size/modal/lg` (Large) | 896 px | `max-w-4xl` | Flujos complejos, tablas, configuración avanzada |
| Full screen | fill | `max-w-none` | Caso especial / mobile |

Detalle de los tokens en [foundations/grid.md](../foundations/grid.md#tamaños-de-modal).

## Responsive

`Default` (320 de base, crece hasta el max-width) en desktop; `Mobile` (288, padding lateral 16) o full screen en < 768 px.

## Accesibilidad

- `role="dialog"` + `aria-modal="true"` + `aria-labelledby` (título) + `aria-describedby` (descripción). Para confirmaciones destructivas: `role="alertdialog"`.
- Foco al abrir en el primer elemento útil (no en el ✕), **trap** de foco, `Esc` cierra, al cerrar el foco vuelve al disparador.
- Fondo inerte (`inert` en el resto de la página).
- Botón cerrar con `aria-label="Cerrar"`.
- En la variante con scroll, el contenido scrolleable tiene que ser enfocable (`tabindex="0"`) para usarlo con teclado.
