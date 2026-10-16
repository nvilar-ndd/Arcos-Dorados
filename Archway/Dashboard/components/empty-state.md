# Empty state

> **Fuente de la verdad:** [Components › Empty State](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6749-5101) · componente `Empty state`.
> **Origen:** Dashboard DS · **Nuevo en Figma**, relevado vía Figma MCP el 2026-10-15.

## Propósito

> "Para mostrar información sobre elementos vacíos o errores." — Figma (texto de la sección)

Reemplaza el contenido de una tabla, listado o panel cuando no hay datos que mostrar (primer uso, filtros sin resultados) o cuando la carga falló. Explica qué pasa y ofrece una única acción para salir del estado.

El componente no tiene descripción propia en Figma; el texto de arriba viene de la sección que lo contiene ([D-C01](../audit.md#d-c01--descripciones-faltantes)).

## Anatomía y tokens

```
┌──────────────── 480 ────────────────┐
│               [ícono 56]            │  slot "Íconos e ilustraciones"
│                  16                 │
│        Título (24 Bold, 1 línea)    │
│                   8                 │
│   Descripción (18 Regular, 2–4 l.)  │
│                  32                 │
│              [ Botón ]              │  Button secondary 128 × 40
└─────────────────────────────────────┘
```

| Pieza | Medida | En Figma | Token Dashboard en código |
|---|---|---|---|
| Contenedor | 480 × 280, columna centrada | Gap 32 → `spacing/32` (**colección remota `Number`**) | `spacing/400` (32) |
| Ícono / ilustración | 56 × 56 | *Slot* "Íconos e ilustraciones"; por defecto `Refresh / Size=56px` (componente remoto), relleno `#292929` sin variable | `icon/primary` |
| Bloque de texto | gap 16 con el ícono, 8 entre título y descripción | Gap 8 → `spacing/8` (**remota `Number`**); gap 16 sin variable | `spacing/200`, `spacing/100` |
| Título | 24 / Bold | Estilo **remoto** `Headlines/Headline 02`; color `#292929` sin variable | `H4 - CMS` (24/32 Bold) · `text/primary` |
| Descripción | 18 / Regular | Estilo **remoto** `Headlines/Headline 05`; color `text/secondary` ✅ | `H7 - CMS` (18/24 Regular) · `text/secondary` |
| Botón | 128 × 40 | Instancia de `Button` secondary (tokens del Dashboard ✅) | `Button` secondary |

Propiedades del componente: `Button` (mostrar/ocultar), `Title` y `Text` (textos) e `Íconos e ilustraciones` (slot).

> **Hallazgo:** es el único componente del Dashboard que mezcla variables y estilos de otras librerías (`Number`, `Headlines/*`) con los del Dashboard. Ver [D-C15](../audit.md#d-c15--empty-state-con-estilos-y-variables-remotos).

## Variantes y estados

No tiene variantes. Los usos se resuelven con las propiedades:

| Uso | Ícono | Título | Botón |
|---|---|---|---|
| Sin elementos (primer uso) | Ilustración o ícono del módulo | "Todavía no hay {elementos}" | Acción principal del módulo (crear, importar) |
| Sin resultados de filtro | Búsqueda | "No hay resultados para {filtro}" | "Limpiar filtros" |
| Error de carga | Error | "No pudimos cargar {elementos}" | "Reintentar" |

El componente no tiene estados interactivos propios: el botón trae los suyos ([button.md](./button.md)).

## Responsive

| Contexto | Comportamiento (propuesta) |
|---|---|
| Desktop ≥ 768 | Centrado en el área vacía (tabla, panel), ancho máximo 480 en Figma |
| Mobile < 768 | Ocupa el ancho disponible con el padding del contenedor; el texto se centra y crece en alto |

En código el ancho máximo usa `max-w-modal-sm` (512), el token de tamaño más cercano: Figma no tiene un token para 480.

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Anuncio | Cuando el estado aparece después de una acción (filtrar, recargar), el contenedor va en `role="status"`; si es un error que bloquea la tarea, `role="alert"` |
| Jerarquía | El título es un heading (`h2`–`h4` según dónde esté) para que se pueda navegar con lector de pantalla |
| Ícono | Decorativo: `aria-hidden="true"`; el mensaje lo dan título y descripción |
| Contraste | `text/secondary` 5.02:1 sobre `background/01` ✅ (`text/primary` #292929 ≈ 14.5:1) |
| Acción | Una sola acción visible (**Ley de Hick**). El botón mide 40 de alto: en contextos touch, ampliar a 44 ([D-C07](../audit.md#d-c07--áreas-de-toque)) |
| Mensaje | **Ley de Jakob / Heurística de Nielsen n.º 9:** el error dice qué pasó y cómo resolverlo, sin códigos técnicos |
