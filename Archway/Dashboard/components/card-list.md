# Card List (lista de gestión)

> **Fuente de la verdad:** [Components › Card_list](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13547) · component set `Card_list` (9 variantes: 8 `Style` × `State=default` + `Publicada-Activa` × `State=change-order`).
> **Origen:** Dashboard DS (Motor de promociones) · **Extraído vía Figma MCP:** 2026-10-08 · **Revisado:** 2026-11-16 (nueva variante `change-order`).
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

Props: `Text Name`, `Text Tipo`, `Text Subtipo`, `Text Codigo`, `Show Tag-operations`, `Show Codigo`, `Show Tipo`, `Show Subtipo`, `Show date modified`, `Show Hr` y, desde noviembre, `Orden`, `Destino` y `Vigencia` (textos de la variante `change-order`).

Variantes: `Style` (estado de la entidad, tabla siguiente) × `State` (`default` · `change-order`).

## Estados de la entidad (`Style`)

Textos y colores tal cual están en las variantes de Figma:

| Style | Tag de publicación | Estado (título · descripción) | Toggle |
|---|---|---|---|
| Publicada-Proxima | Publicada (`tag/background-green`) | **Próxima** (`link/primary`) · Espera fecha de inicio | On |
| Publicada-Activa | Publicada | **Activa** (`text/success`) · En curso actualmente | On |
| Publicada-Inactiva | Publicada | **Inactiva** · Apagada por administrador | Off |
| Publicada-Expirada | Publicada | **Expirada** · Finalizada por vencimiento | Off, deshabilitado |
| Borrador -None | Borrador (sin fondo) | **Borrador** · Aún sin publicar | Deshabilitado |
| Cragando-None (typo) | Cargando (`tag/background-blue`) | **Publicando** · Procesando la publicación | Deshabilitado |
| Pendiente-None | Pendiente (rojo, primitivo `red-disabled`) | **Pendiente de publicar** (`text/error`) · Lista para publicar | Deshabilitado |
| Arcivada (typo) | Archivada (gris) | **Archivada** (`text/secondary`) · Fuera de publicación | Deshabilitado |

## Variante `change-order` (cambio de orden)

`Style=Publicada-Activa, State=change-order` ([6872:5073](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6872-5073)), agregada en noviembre de 2026. Es la fila para listas **con orden de prioridad editable** (qué promoción se muestra primero).

```
┌──────┬─────────────────────────┬──┬────────────────────┬──────────────────────┬─────────────────────┬───┐
│Orden │ PROMOBIRTHDAYPA         │ │ │ [PLU]              │ 📅 03 oct – 21 oct   │ Activa         (●)  │ ⋮ │
│  1   │ Por método de pago  Sub │ │ │ 1128 - Papas con…  │                      │ En curso…           │   │
└──────┴─────────────────────────┴──┴────────────────────┴──────────────────────┴─────────────────────┴───┘
```

| Parte | Medida / token |
|---|---|
| Fila | 1088 × 80 · padding y gap `spacing/200` · radio `spacing/100` · `layer/01` + `border/02` (igual que `default`) |
| Orden | Columna de 33 px · rótulo `Label01` + número `Label03` · `text/primary` · gap `spacing/100` |
| Nombre + tipo | 248 px fijo · nombre y tipo `Label03`, subtipo `Label02` · `text/primary` |
| Separador | `Hr` vertical `border/02` |
| Destino | `Tag-operations` `tag/background-blue` con el tipo (`PLU`, `URL`) + producto o URL en `Label02` |
| Vigencia | 216 px fijo · ícono `Calendar` 16 + rango en `Label02`. Sin fechas de creación/modificación |
| Estado + toggle | 200 px fijo · título `Label02` (`text/success` en Activa) + descripción `Label01` `text/secondary` · `Toggle` |
| Menú | `Data Table icon/illustration` (menú contextual) |

**Cuándo usarla:** sólo cuando el orden de la lista es un dato que se edita. Si no hay prioridad, usar `State=default`. El orden **no puede depender sólo del arrastre**: hace falta una alternativa por teclado y lector de pantalla (ver Accesibilidad).

> **En exploración:** en la misma página hay dos frames sueltos, `Card_list2` y `Card_list3`, con variantes de esta fila (columna *Prioridad*, destino por URL, horarios por día, estado *Programada · Inicia el …*). No son componentes; se documentarán si se publican. Ver [D-C17](../audit.md#d-c17--card-list-change-order-y-exploraciones).

## Responsive

En < 768 px cada fila pasa a card apilada: nombre + tag arriba, metadatos debajo, toggle y menú a la derecha del título.

## Accesibilidad

- Lista semántica (`<ul>`/`<li>`) o tabla con `role="grid"` si hay navegación por celdas; no mezclar.
- Toggle con label que incluya la entidad: `aria-label="Activar Navidad 20% helados"`.
- Menú de acciones: `aria-label="Acciones para <nombre>"`, `aria-haspopup="menu"`.
- El estado se comunica por el texto del tag + descripción, no sólo por color.
- Cambios de estado con confirmación y feedback ([Notification](./notification.md)).
- **Cambio de orden:** la posición se anuncia como "Posición 1" (no sólo el número). Si el orden se cambia arrastrando, ofrecer también botones *Subir* / *Bajar* o un campo numérico (WCAG 2.5.7 *Dragging Movements*) y anunciar el resultado con una región `aria-live` ("Papas con chedar pasó a la posición 2").

## Código

`DbCardList` ([ui/src/components/DbCardList.vue](../ui/src/components/DbCardList.vue)) implementa los dos `State`:

```vue
<DbCardList :item="item" :actions="actions" />                        <!-- State=default -->
<DbCardList :item="item" :actions="actions" state="change-order" />   <!-- State=change-order -->
```

`item.order` (número; sin valor muestra "—") e `item.destination` (`{ kind: 'PLU', label: '1128 - Papas con chedar' }`) sólo se usan en `change-order`. Stories: *Componentes › Card List* → *Estados* y *Cambio de orden*.
