# Card List (lista de gestión)

> **Fuente de la verdad:** [Components › Card_list](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13547) · component set `Card_list` (8 variantes).
> **Origen:** Dashboard DS (Motor de promociones) · **Extraído vía Figma MCP:** 2026-10-08.
> ⚠️ "Uso exclusivo para listados interactivos; sirve como referencia para comportamientos similares." — Figma

## Propósito

> Representa **entidades gestionables**: cada ítem puede cambiar de estado o ejecutar acciones directas desde la lista. Combina la estructura de una tabla con el comportamiento de un componente interactivo, priorizando la acción por sobre la comparación de datos. — Figma

**Usar cuando** (Figma):

- Cada ítem es una entidad viva (promoción, configuración, contenido, país, regla).
- El usuario puede activar, desactivar o modificar el estado de un ítem.
- Hay acciones primarias visibles (toggle, menú de acciones, CTA).
- El contenido por fila es variable o contextual.
- El foco está en la gestión y operación, no sólo en la lectura.

Si no se cumple, usar [Data table read-only](./data-table.md). Comparativa completa en [usage/ui-templates.md](../usage/ui-templates.md#read-only-table-vs-card-list).

## Anatomía y tokens

| Parte | Token |
|---|---|
| Fila | 1088 × 80 · padding `spacing/200` · gap `spacing/200` · radio `spacing/100` |
| Fondo / borde | `layer/01` / `border/02` 1 px |
| Columnas | Orden · Nombre (+ código/PLU o URL) · Tipo / Subtipo · Vigencia · Estado (tag + descripción) · Toggle · Menú de acciones |
| Nombre | `Label02`, `text/primary`; link `link/primary` |
| Metadatos | `Label01`, `text/secondary` |
| Tag de estado | ver tabla |

Props: `Text Name`, `Text Tipo`, `Text Subtipo`, `Text Codigo`, `Show Tag-operations`, `Show Codigo`, `Show Tipo`, `Show Subtipo`, `Show date modified`, `Show Hr`.

## Estados de la entidad (`Style`)

Ejemplos tomados del frame *Componentes pendientes*:

| Style | Tag | Descripción del estado |
|---|---|---|
| Publicada-Activa | Activa (`tag/background-green`) | En curso actualmente |
| Publicada-Proxima | Próxima (`tag/background-blue`) | Espera fecha de inicio |
| Publicada-Inactiva | Inactiva | Apagada por administrador |
| Publicada-Expirada | Expirada | Finalizada por vencimiento |
| Pendiente-None | Pendiente | — |
| Cragando-None (typo) | Cargando | — |
| Borrador-None | Borrador | Aún sin publicar |
| Arcivada (typo) | Archivada | — |

## Responsive

En < 768 px cada fila pasa a card apilada: nombre + tag arriba, metadatos debajo, toggle y menú a la derecha del título.

## Accesibilidad

- Lista semántica (`<ul>`/`<li>`) o tabla con `role="grid"` si hay navegación por celdas; no mezclar.
- Toggle con label que incluya la entidad: `aria-label="Activar Navidad 20% helados"`.
- Menú de acciones: `aria-label="Acciones para <nombre>"`, `aria-haspopup="menu"`.
- El estado se comunica por el texto del tag + descripción, no sólo por color.
- Cambios de estado con confirmación y feedback ([Notification](./notification.md)).
