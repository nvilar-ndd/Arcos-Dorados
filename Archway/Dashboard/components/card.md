# Card

> **Fuente de la verdad:** [Components › Card](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4688-5247) · `Card`, `Card_Option`, `Cards_Category`, `Cards_img`, `Card_Campos`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" (hay guías de uso por tipo) · **Extraído vía Figma MCP:** 2026-10-08.

## Tipos

| Componente | Para qué | Medida base |
|---|---|---|
| `Card` · **Card_Base** | **Informar**: información breve y contextual | 156 × 52 (ancho mínimo 156) |
| `Card` · **Card_Info** | **Resumen corto** que acompaña al contenido principal, a la derecha | 208 × 153 (max-width 208) |
| `Card` · **Card_Descripcion** | **Resumen de cada paso** en la revisión final de un flujo | 240 × 275 |
| `Card` · **Card_Table** | Filas de 3 columnas (+ tag) dentro de una card | 240 × 161 |
| `Card_Option` | Opción navegable (ícono + título + descripción + link) | 288 × 68 |
| `Cards_Category` | Acceso a una categoría (ícono grande + label) | 154 × 160 |
| `Cards_img` | Imagen cargada con acción de borrar | 192 × 264 |
| `Card_Campos` | ⚠️ Uso exclusivo para un campo puntual; referencia para comportamientos similares | 360 × 76 / 144 |

## Anatomía y tokens comunes

| Parte | `Card` (Base/Info/Descripción/Table) | `Card_Option` / `Cards_Category` / `Cards_img` |
|---|---|---|
| Fondo | `layer/01` | `layer/01` |
| Borde | `border/02` 1 px | `border/02` 1 px · pressed `border/01` **2 px** |
| Padding / gap | `spacing/100` (8) | `spacing/200` (16) |
| Radio | `spacing/050` (4) | `spacing/100` (8) |
| Título | `Label03 - cms`, `text/primary` | `Label02 - cms` |
| Texto secundario | `Label01 - cms`, `text/secondary` | `Label01`, `Label03` |
| Ícono | `icon/primary` · fondo de ícono `icon/background` (Category) | |

Los radios están enlazados a `spacing/*` ([D-C02](../audit.md#d-c02--radios-enlazados-a-spacing)), y son distintos entre la familia `Card` (4) y el resto (8).

## Card_Base

> Proporciona información breve y contextual para entender rápido un concepto, estado o mensaje. Combina ícono, título, descripción y tag en una unidad escaneable. — Figma

**Anatomía:** ícono (izquierda) · título · descripción · tag (opcional).

**Guías:** usar para informar de forma breve; contenido directo; ideal para mensajes contextuales. Mantener la descripción corta, evitar varios niveles de información, no convertirla en un bloque explicativo. El ícono refuerza el contexto.

## Card_Info

> Resumen conciso que acompaña el contenido principal. Se posiciona **a la derecha** y da contexto sin reemplazar la vista principal. — Figma

**Anatomía:** ícono (izquierda) · título · subtítulo (izquierda) + tag (derecha) · hasta 4 bloques *texto + subtítulo* separados por divisor ([Hr](./divider.md)).

**Límites:** recomendado hasta **3** subtítulos; excepcional hasta **4**. Pensado para resúmenes, no para explicaciones. Ícono: en promociones, alusivo al tipo de promoción; en otros casos, ícono genérico de listado.

En el template paso a paso se ubica a la derecha del contenido (ver [usage/page-templates.md](../usage/page-templates.md)).

## Card_Descripcion

> Se usa en la instancia final de revisión general para presentar un resumen estructurado de cada paso. Permite validar la configuración y acceder al detalle de cada sección, **sin editar desde la card**. — Figma

**Anatomía (Figma):**

1. Header: ícono alusivo al título · título · ícono de acceso al detalle (título e ícono llevan al detalle).
2. Subtítulo (izquierda) + Tag (derecha).
3. Texto con acceso: texto descriptivo + ícono "ver" a la derecha.
4. Bloque de texto: texto + subtítulo + divisor.
5. Bloque de texto secundario.
6. Hr.
7. Row 3 col: tres ítems en paralelo (ampliable desde el panel de propiedades).
8. Hr.
9. Row 3 col + Tag: dos ítems + tag.

## Estados (`Card_Option`, `Cards_Category`, `Cards_img`)

| Estado | Fondo | Borde |
|---|---|---|
| enabled | `layer/01` | `border/02` 1 px |
| hovered | `layer/01` | `border/02` 1 px |
| pressed | `layer/01` | `border/01` 2 px |

> Hovered es idéntico a enabled ([D-C08](../audit.md#d-c08--estados-iguales-entre-sí)). Las cards informativas (`Card`) no son interactivas.

## Accesibilidad

- Card informativa: `<section>`/`<article>` con heading; no enfocable.
- Card navegable (`Card_Option`, `Cards_Category`, título de `Card_Descripcion`): **un solo** `<a>` que cubre la card (patrón *block link* con `::after`), no varios destinos anidados.
- Hover sin cambio visual y borde `border/02` (1.45:1): agregar señal de hover y foco visibles.
- `Cards_img` con botón de borrar: `<button aria-label="Eliminar imagen <nombre>">`.
