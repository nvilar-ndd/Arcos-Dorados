# File uploader

> **Fuente de la verdad:** [Components › File uploader](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3271-24198) · `File Uploader`, `_FileUploader`, `_File uploader file item`, `_File uploader file list item`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" (marcado como *Componente completo!*) · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Subir archivos (imágenes de banners, CSV de restaurantes) por clic o arrastrando, y ver el estado de cada archivo.

## Anatomía

| Pieza | Rol | Medida |
|---|---|---|
| `File Uploader` | componente completo: label + zona + lista | 328 × 208 · gap `spacing/100` |
| `_FileUploader` | zona de carga (drop zone) | 328 × 96 |
| `_File uploader file item` | un archivo | 288 × 32 (sin imagen) · 250 × 220 (con imagen) · radio `spacing/050` |
| `_File uploader file list item` | lista de archivos | `Type` = Grid · List · Only |

Props: `Label`, `Supporting text` (detalles del archivo a subir: formato, peso), `Drag and Drop`, `Show File list item`.

Según Figma, el toggle principal `Show File list item` muestra u oculta todos los ítems.

## Estados

**Zona de carga (`_FileUploader`)**: Enabled · Focus · Hover · Error · disabled. Fondo `layer/02` en todos.

| Estado | Borde | Texto |
|---|---|---|
| Enabled | `border/02` | link `link/primary` |
| Hover | `link/primary` | |
| Focus | `border/01` | |
| Error | `support/error` | `support/error` |
| disabled | `border/03` | `text/disabled` |

**Archivo (`file item`)**: Uploaded · Loading (con [progress circle](./progress.md)) · Error (texto `text/error` + ícono, `#DB0007` suelto). Fondo `layer/02`.

## Responsive

Fill del contenedor. `Grid` para imágenes en desktop; `List` en mobile.

## Accesibilidad

- Detrás de la zona de drop tiene que existir un `<input type="file">` alcanzable con teclado (el drag & drop no es accesible por sí solo).
- Indicar formatos y peso máximo **antes** de subir (supporting text), no sólo en el error.
- Estado de carga: `role="progressbar"` con `aria-valuenow`; resultado anunciado con `aria-live`.
- Botón de quitar archivo con `aria-label="Quitar <nombre>"`.
- Usa los primitivos `color/black/950` y `color/black/0` ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo)).
