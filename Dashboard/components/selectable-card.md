# Selectable Card

> **Fuente de la verdad:** [Components › Selectable Card](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6603-5033) · component set `Selectable Card` (12 variantes).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08. Es la sección mejor documentada del archivo.

## Propósito

> Permite seleccionar una o varias opciones dentro de un flujo, combinando contenido visual (imagen o carrusel) con un control de selección (checkbox o radio). Se usa cuando las opciones requieren contexto visual para decidir. Ideal para configuración o selección de productos. — Figma

## Variantes

| Propiedad | Valores | Regla (Figma) |
|---|---|---|
| `type` | **Multi select** (checkbox) · **Single select** (radio) | Multi: todas las seleccionadas son válidas juntas. Single: opciones mutuamente excluyentes |
| `image` | **Carrousel** (427 × 320) · **Image** (427 × 278) | Carrusel cuando la opción tiene varias imágenes; imagen simple cuando una alcanza |
| `state` | Enabled · Hovered · Pressed | ver abajo |

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 427 de ancho · padding `spacing/200` · gap `spacing/100` · radio **`radius/md`** (el único componente que usa `radius/*`) |
| Fondo | `color/white/default` (primitivo, [D-C03](../audit.md#d-c03--primitivos-enlazados-directo)) |
| Borde | `border/02` 1 px · Pressed `#292929` 2 px suelto ([D-C04](../audit.md#d-c04--colores-sin-variable)) |
| Imagen / [Carousel](./carousel.md) | `layer/02` |
| Control | [Checkbox](./checkbox.md) o [Radio](./radio-button.md), **siempre visible arriba a la derecha** |
| Label | `Label02 - cms`, `text/primary` · secundario `Label03`, `text/secondary` |

## Estados

| Estado | Comportamiento (Figma) | Visual |
|---|---|---|
| Enabled | Por defecto, sin selección | borde `border/02` |
| Hovered | Cursor encima; se eleva con sombra | sombra suelta (no es un effect style) |
| Pressed | Seleccionada; borde prominente y control activo | borde 2 px oscuro + control seleccionado |

## Guías de uso (Figma)

- Usar sólo cuando el contenido visual apoya la decisión.
- El control de selección siempre visible en la esquina superior derecha.
- Label corto y descriptivo.
- No combinar Multi y Single select en la misma lista.
- Aplicar Pressed de forma consistente a todas las cards seleccionadas.

## Responsive

Grilla de 2 columnas en desktop (427 px c/u), 1 columna en < 768 px.

## Accesibilidad

- El control real es el `<input type="checkbox|radio">`; la card entera es su `<label>`. Grupo con `<fieldset>`/`<legend>`.
- El carrusel adentro no puede robar el clic de selección: sus controles van fuera del área del label o detienen la propagación.
- Foco visible en la card (`:focus-within`), hoy no definido.
- Hover sólo con sombra no aplica en touch; Pressed no depende sólo del borde: el control marcado lo refuerza.
