# Templates de pantalla (medidas)

> **Fuente de la verdad:** [Usage and design criteria › Medidas / UI Templates](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4428-15250) · frames *medidas / countries* y *Medidas / paso a paso* (1584 de ancho, breakpoint Max).
> **Extraído vía Figma MCP:** 2026-10-08.

Las dos plantillas que bajan a pantalla los patrones de [ui-templates.md](./ui-templates.md).

## 1. Country session → formulario

Ejemplo de Figma: **Argentina › Promociones** (Configuración · Reglas de negocio · Medios de pago).

```
+-- Header 96 ---------------------------------------------------------+
+----+------------------+-------------- Contenido ---------------------+
| 48 | SubPanelLeft 272 |  Argentina (h1)                              |
|    | Detail           |  +-- Seccion (card) -----------------------+ |
| H  | Main        v    |  | Configuracion                           | |
| C  | Servicios   v    |  | [toggle] Motor de promociones           | |
| R  | > Promociones    |  | --------------------------------------- | |
| .. | Cumpleanos       |  | Campo .................  [Aplicar PLU]  | |
|    | ...              |  +-----------------------------------------+ |
|    |                  |          gap 48 (spacing/600)                |
|    |                  |  +-- Seccion ------------------------------+ |
|    |                  |  +-----------------------------------------+ |
|    |                  |  ------------------------------------------- |
|    |                  |           [Cancelar] [Guardar configuracion] |
+----+------------------+----------------------------------------------+
```

| Elemento | Medida / token |
|---|---|
| Left panel | colapsado, 48 |
| [SubPanelLeft](../structure/sub-panel-left.md) | 272 · padding vertical `spacing/200` |
| Columna de contenido | **1089** de ancho, empieza en x = 383 |
| Título + CTA | 40 de alto; separación al contenido `spacing/400` (32) |
| Entre secciones | `spacing/600` (48) |
| Sección (card) | padding `spacing/400` (32) · gap interno `spacing/600` (48) · borde `border/02` |
| Campos | de a 2 por fila; botón *Aplicar* a la derecha del campo |
| Footer | padding superior `spacing/400`, divisor arriba, botones a la derecha con gap `spacing/400`: **Cancelar** (secundario) · **Guardar configuración** (primario) |

**Criterio:** edición directa, sin pasos. Cada sección agrupa un dominio (Configuración, Reglas de negocio, Medios de pago). Toggles para lo que se activa al instante; *Aplicar* para listas (PLU, segmentos); *Guardar configuración* para el resto.

## 2. Left Panel → flujo paso a paso

Ejemplo de Figma: **Promotions › Crear › Segmentación y filtros**.

```
+-- Header 96 ---------------------------------------------------------+
+-- Left panel 272 --+------------------ Contenido --------------------+
| Home               |  <- volver                                      |
| Countries          |  (x)----(x)----(x)----(o)----( )   stepper      |
| > Promotions       |  Segmentacion y filtros (h2)                    |
| Orders             |  Configure donde y para quien aplica...         |
| ...                |  +-- Notification 800 ----+   +- Card_Info -+   |
|                    |  +------------------------+   | Resumen 208 |   |
|                    |  +-- Filtros restaurante -+   +-------------+   |
|                    |  | [lista] -> [elegidos]  |                     |
|                    |  +------------------------+                     |
|                    |  +-- Filtros segmentacion +                     |
|                    |  +------------------------+                     |
|                    |  ---------------------------------------------- |
|                    |                         [Cancelar] [Siguiente]  |
+--------------------+-------------------------------------------------+
```

| Elemento | Medida / token |
|---|---|
| Left panel | expandido, 272 (ítem activo: Promotions) |
| Columna principal | **800** de ancho, empieza en x = 384 |
| Header del paso | 864 de ancho: [Link](../components/link.md) "← volver" + [stepper](../components/progress.md#progress-indicator-item-stepper) (gap 16) · título h2 + bajada (gap `spacing/100`) · separación `spacing/600` |
| Banda de fondo | rectángulo detrás del header del paso (278 de alto) |
| [Card_Info](../components/card.md#card_info) (Resumen) | 208 (max-width), a la derecha, alineada con el inicio del contenido (x = 1264) |
| Entre bloques | `spacing/600` (48) |
| Bloque de filtro (card) | padding `spacing/400` (32) · gap `spacing/300` (24) |
| Listas duales | dos columnas con gap `spacing/200` (16): disponibles (con búsqueda, *Subir CSV*, *Limpiar filtros*) → seleccionados |
| Footer | igual que en Country; botones **Cancelar** · **Siguiente** |

**Pasos del flujo de alta de promoción** (stepper): Descuento → Detalles generales → Disponibilidad → Segmentación → Contenido de apoyo → (revisión con [Card_Descripcion](../components/card.md#card_descripcion)).

## Medidas como tokens

Las columnas de 1089 y 800 y el ancho de 208 de `Card_Info` no están enlazados a variables. Propuesta: `layout/content-form` y `layout/content-flow` en la colección Layout ([D-E01](../audit.md#d-e01--medidas-del-shell-sin-tokens)).
