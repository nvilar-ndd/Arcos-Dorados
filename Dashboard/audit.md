# Audit — Dashboard Foundations

> **Archivo auditado:** [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) · **Fecha:** 2026-10-07 · **Método:** extracción de variables, estilos y páginas vía Figma MCP + contraste WCAG 2.1 en modo Light y Dark.
>
> **Flujo:** igual que ArchWay. Cada hallazgo queda `Pendiente` hasta que el equipo lo aprueba o lo rechaza; sólo lo aprobado se aplica en Figma. Muchos de estos puntos se resuelven solos al converger con ArchWay: ver [`Convergencia/dashboard-archway.md`](../Convergencia/dashboard-archway.md).

## Tablero

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| D-A01 | Tags en Dark: texto blanco sobre fondo claro (1.20–1.25:1) | 🔴 P0 | Pendiente |
| D-A02 | Bordes 02, 03 y 04 en Light no delimitan (1.45–2.24:1) | 🔴 P0 | Pendiente |
| D-A03 | `text/primary` sobre `layer/03` en Dark (2.24:1) | 🔴 P0 | Pendiente |
| D-A04 | Secondary button pressed en Dark (1.45:1) | 🔴 P0 | Pendiente |
| D-A05 | Botón red hover con texto blanco (3.90:1, ambos modos) | 🔴 P0 | Pendiente |
| D-A06 | Dorado como indicador sobre blanco (`support/warning`, `icon/gold`, `border/04`: 1.69:1) | 🔴 P0 | Pendiente |
| D-A07 | `text/disabled` en Dark más visible que en Light (10.01:1) | 🟠 P1 | Pendiente |
| D-S01 | Estilos de texto no enlazados a variables | 🟠 P1 | Pendiente |
| D-S02 | Todas las variables con `ALL_SCOPES` | 🟠 P1 | Pendiente |
| D-S03 | Valores sueltos en Semantic (transparencias en hex) | 🟠 P1 | Pendiente |
| D-S04 | `button/skeleton` apunta a otro semántico | 🟠 P1 | Pendiente |
| D-S05 | `RM_Body1` con interlineado enlazado a `spacing/300` | 🟠 P1 | Pendiente |
| D-S06 | Grupos de primitivos con nombres descriptivos (`secondary`, `tertiary`) | 🟠 P1 | Pendiente |
| D-S07 | Mismo nombre en Primitives y Semantic (`spacing/100`, `spacing/200`…) | 🟠 P1 | Pendiente |
| D-D01 | Página *Grids* dice 8 columnas; los estilos tienen 16 | 🟡 P2 | Pendiente |
| D-D02 | Página *Typography* lista estilos que no existen | 🟡 P2 | Pendiente |
| D-D03 | Sin elevación, motion ni reglas de radio | 🟡 P2 | Pendiente |
| D-D04 | Header de *UI templates* sin definir | 🟡 P2 | Pendiente |
| D-H01 | Typos y nombres | ⚪ P3 | Pendiente |
| D-C01 | 17 secciones de componentes con "Descripción: Falta agregar" | 🟡 P2 | Pendiente |
| D-C02 | Radios de componentes enlazados a `spacing/*` (o sueltos) en vez de `radius/*` | 🟠 P1 | Pendiente |
| D-C03 | Primitivos enlazados directo en componentes (no cambian en Dark) | 🟠 P1 | Pendiente |
| D-C04 | Colores hex sin variable dentro de componentes | 🟠 P1 | Pendiente |
| D-C05 | Variables y estilos de otra librería (`Theme`, `Elevation/*`) | 🟠 P1 | Pendiente |
| D-C06 | Foco de teclado débil o idéntico a hover/pressed | 🔴 P0 | Pendiente |
| D-C07 | Áreas de toque menores a 44 px en contextos touch | 🟠 P1 | Pendiente |
| D-C08 | Estados visualmente idénticos (hover = enabled, selected = hover) | 🟠 P1 | Pendiente |
| D-C09 | Typos y nombres genéricos en propiedades y variantes | ⚪ P3 | Pendiente |
| D-C10 | Estados de reserva con tokens de botón y hex sueltos | 🟠 P1 | Pendiente |
| D-C11 | Componentes sin estados (Link, Accordion) o sin estados clave (indeterminate, error) | 🟡 P2 | Pendiente |
| D-C12 | Data table *read-only* con celdas Switch y Textfield | 🟡 P2 | Pendiente |
| D-C13 | Dark: botón secundario en hover/focus queda con texto blanco sobre fondo claro (ilegible) | 🔴 P0 | Pendiente |
| D-C14 | Placeholder `text/secondary` sobre el hover del Dropdown (`button/secondary-hover`): 3.45:1 | 🟠 P1 | Pendiente |
| D-E01 | Medidas del shell y de las columnas de contenido sin tokens | 🟡 P2 | Pendiente |
| D-E02 | Header con gap fijo de 206 px | 🟡 P2 | Pendiente |
| D-E03 | Fondo del header distinto entre tamaños | ⚪ P3 | Pendiente |
| D-E04 | Arquitectura de la información desalineada entre componente y árbol | 🟡 P2 | Pendiente |

---

## 🔴 P0 — Accesibilidad

### D-A01 · Tags en Dark mode

`tag/background-green` (`#E2EABF`) y `tag/background-blue` (`#CCF0FF`) tienen el mismo valor en los dos modos, pero `text/primary` pasa a blanco en Dark: **1.25:1** y **1.20:1**. La descripción en Figma dice "Cambiar manualmente el color tipográfico", es decir que el sistema depende de un ajuste manual.

**Propuesta:** crear `tag/text` (Light y Dark = `black/800`) o dar a los fondos de tag un valor oscuro en Dark (p. ej. `green-800` / `dark-blue`) manteniendo `text/primary`.

### D-A02 · Bordes en Light

| Token | Sobre `background/01` | Ratio |
|---|---|---|
| `border/02` (`light-grey` #D6D6D6) | blanco | **1.45:1** |
| `border/03` (`grey` #ADADAD) | blanco | **2.24:1** |
| `border/04` (`gold/500`) | blanco | **1.69:1** |

Si alguno delimita un control (input, checkbox), falla WCAG 1.4.11 (3:1). **Propuesta:** para controles usar `border/01` (14.55:1) o un gris igual o más oscuro que `#949494` (3.03:1); dejar 02/03 para divisores decorativos.

### D-A03 · `text/primary` sobre `layer/03` en Dark

`layer/03` en Dark = `grey` #ADADAD, `text/primary` = blanco → **2.24:1**. **Propuesta:** `layer/03` Dark → `black/700` (#4B4B4B, 8.72:1 con texto blanco).

### D-A04 · Secondary pressed en Dark

`button/secondary-text` (blanco) sobre `button/secondary-pressed` (`light-grey`) → **1.45:1**. **Propuesta:** `secondary-pressed` Dark → `black/700` (#4B4B4B, 8.72:1).

### D-A05 · Botón red hover

`button/red-text` (blanco) sobre `button/red-hover` (`red/500` #FF161D) → **3.90:1** en ambos modos. Pasa sólo como texto grande. **Propuesta:** hover → `red/700` (#B20006, 7.25:1) y pressed → `red/800` (#890005, 10.17:1).

### D-A06 · Dorado sobre blanco

`support/warning`, `icon/gold` y `border/04` = `gold/500` sobre blanco → **1.69:1**. Mismo hallazgo que ArchWay A-06: el dorado no puede ser el único indicador. **Propuesta:** ícono de warning en `gold/800` (#856000, 5.72:1); estado con segundo indicador.

## 🟠 P1 — Estructura

### D-A07 · Jerarquía de texto en Dark

En Dark, `text/disabled` (`light-grey`, 10.01:1) es casi tan visible como `text/secondary` (`ivory`, 13.82:1). El disabled debería quedar claramente por debajo. **Propuesta:** `text/disabled` Dark → `dark-grey` (#6F6F6F, 2.90:1 sobre el fondo Dark: queda por debajo del secondary, como corresponde a disabled, que está exento de contraste).

### D-S01 · Estilos de texto sin variables

Los 16 estilos usan valores sueltos; sólo existen 3 variables de fuente (`font/family/default`, `font/size/label-01`, `font/size/body`). En ArchWay cada propiedad de cada estilo está enlazada a `Font/*`. Se resuelve al adoptar la tipografía de ArchWay (ver convergencia).

### D-S02 · Scopes

Las 167 variables de Primitives y Semantic tienen `ALL_SCOPES` (las colecciones Layout y Breakpoints sí tienen scopes correctos).

### D-S03 · Transparencias en hex

`button/primary-hover-transparent` (#FFBC0D33), `primary-pressed-transparent` (#FFBC0D66), `secondary-hover-transparent` y `secondary-pressed-transparent` son valores sueltos, no alias. **Propuesta:** primitivos alpha o tokens de opacidad (igual que ArchWay F-05).

### D-S04 · Alias semántico → semántico

`button/skeleton` apunta a `background/04`. Funciona, pero rompe la regla "semántico → primitivo". Definir si se acepta como patrón (en ArchWay se propone una colección Component que apunte a Semantic).

### D-S05 · `RM_Body1`

El interlineado de `RM_Body1` está enlazado a `spacing/300` (24). El valor coincide, pero es una variable de espaciado usada como line-height.

### D-S06 · Naming de primitivos

`secondary/*`, `tertiary/*` y `accessible/*` agrupan colores por rol, no por familia (`tertiary/dark-blue` es el `blue/800` de ArchWay; `tertiary/fuchsia` es `fuchsia/700`). Dificulta escalar y converger. Ver la tabla de equivalencias en la convergencia.

### D-S07 · Nombres repetidos entre colecciones

`spacing/0`, `spacing/100` … `spacing/2000` existen con el **mismo nombre** en Primitives y en Semantic (el semántico apunta al primitivo homónimo; sólo `spacing/50` → `spacing/050` difiere). En Figma se distinguen por colección, pero al exportar a código colisionan: en el Storybook hubo que resolver el valor directo para evitar una variable CSS que se referencia a sí misma. **Propuesta:** nombrar los primitivos como dimensión (`dimension/8`) y dejar `spacing/*` sólo en Semantic, como en ArchWay (`Valor/8` → `Valor/spacing/8`).

## 🟡 P2 — Documentación

- **D-D01:** la página *Grids* indica 8 columnas para Large, X-Large y Max; los estilos publicados tienen 16. Definir cuál vale.
- **D-D02:** la página *Typography* lista Display 01–03 (68/80, 48/54) y "Headline New" / "Body New", que no existen como estilos.
- **D-D03:** no hay estilos de sombra, motion ni reglas de radio (la sección "Radius Tokens" está vacía). ArchWay sí los tiene. *Actualización 2026-10-08:* los componentes sí usan sombras `Elevation/Raised Down` y `Elevation/Bordered Down`, pero son estilos **remotos** de otra librería, no del archivo (ver D-C05).
- **D-D04:** el contexto *Header* en *Usage and design criteria* no tiene contenido.

## ⚪ P3 — Higiene

`Fuondation` (nombre del archivo), `Spcace Tokens`, `estrech`, `Fuschia`, `Integración de desccuento`, `activoss`, `Priamry/Whiteoff`; nombres de estilos con espacios dobles y mayúsculas mezcladas (`h1-  cms`, `H3 - CMS`, `Label02 -  cms`).

---

## Componentes

> Auditoría de la página *Components* y de la estructura (UI shell). **Fecha:** 2026-10-08. Detalle por componente en [`components/`](./components/README.md) y [`structure/`](./structure/README.md).

### D-C01 · Descripciones faltantes

Button, FAB, TextField, Dropdown, Pagination, Tabs, Accordion, File uploader, DatePicker, Calendar, Tag, Notification, Modal, Link, Card, Progress bar y Progress indicator tienen el texto "Descripción: Falta agregar". Ningún component set tiene la **descripción de componente** de Figma completada (la que aparece en Dev Mode y en el panel de assets), salvo `Card`, `Cards_Category`, `Card_list`, `File Uploader`, `Notification+ProgresBar` y `Tag-operations`.

**Propuesta:** completar la descripción de cada component set con una línea de propósito + link a su `.md` de este repo, para que el handoff salga de un solo lugar.

### D-C02 · Radios enlazados a spacing

| Componente | Radio | Debería ser |
|---|---|---|
| Button, Modal, Card_Option, Cards_Category, Cards_img, Card_list, Evento | `spacing/100` (8) | `radius/md` |
| Card (Base/Info/Descripción/Table), Notification, File item, images | `spacing/050` (4) | `radius/sm` |
| SmallFAB | `spacing/200` (16) | `radius/full` (nuevo) |
| MediumFAB, Number Day | `spacing/300` (24) | `radius/full` |
| Tag, Tag-operations | `16` suelto | `radius/full` o `radius/lg` |
| Tab label, Dropdown-Menu, Dd-LabelNum | `spacing/0` | `radius/none` (nuevo) |

`Selectable Card` es el único que usa `radius/md`. Como `radius/*` es alias de `spacing/*` el valor es el mismo, pero el día que cambie la escala de radios (convergencia con ArchWay, [D3](../Convergencia/dashboard-archway.md#decisiones-necesarias-antes-de-empezar)) estos componentes no se van a enterar. Además, la familia `Card` usa 4 y el resto de las cards 8. **Propuesta:** reenlazar a `radius/*`, sumar `radius/none` y `radius/full`, y unificar el radio de las cards.

### D-C03 · Primitivos enlazados directo

| Primitivo | Dónde |
|---|---|
| `color/black/800` | FAB-ListMenu, TextField, Calendar picker |
| `color/tertiary/gold-disabled` | Checkbox, Radio button (disabled seleccionado) |
| `color/tertiary/red-disabled` | Calendar (Day, Evento cancelado) |
| `color/black/950`, `color/black/0` | File uploader item |
| `color/black/100`, `color/black/300` | Scroll, Modal |
| `color/white/default` | Selectable Card (fondo) |

Los primitivos no tienen modo Dark: estos componentes quedan claros sobre fondo oscuro. **Propuesta:** reemplazar por el semántico equivalente (`text/primary`, `layer/01`, `border/02`…) o crear los que falten (`control/selected-disabled`, `scroll/track`, `scroll/thumb`, `status/cancelled-surface`).

### D-C04 · Colores sin variable

`#FFBC0D` (Toggle *state layer*, Checkbox, Radio, Header/avatar, Carousel, Progress indicator, Selectable Card, Notification), `#C08B00` (Checkbox, Selectable Card), `#DB0007` (File item, Calendar picker, Notification), `#E2EABF` (Evento *Activa*, mismo valor que `tag/background-green`), `#292929` (íconos y borde *Pressed* de Selectable Card), `#ADADAD` (Carousel), `#D9D9D9`, `#FFFFFF`, `#000000`.

Parte del `#292929` viene de los íconos de la librería de íconos (instancias). **Propuesta:** enlazar todo color a un semántico; para íconos, que el componente de ícono use `icon/primary` por defecto.

### D-C05 · Variables de otra librería

`Text Area`, `progress bar` y `Progress indicator item` usan `Text/text-primary`, `Text/text-secondary`, `Icon/icon-primary`, `Miscellaneous/skeleton-background` y `Transparent`, que vienen de una colección remota llamada **`Theme`** (no de *DashBoard Foundation*). Las sombras `Elevation/Raised Down` y `Elevation/Bordered Down` (Dropdown, Calendar picker) también son estilos remotos.

Mezclar librerías rompe el modo Dark y hace que el componente dependa de un archivo que puede cambiar o deprecarse. **Propuesta:** identificar la librería `Theme` (¿Legacy?), reemplazar por los semánticos del Dashboard y crear estilos de elevación propios (o adoptar los de ArchWay como parte de la convergencia).

### D-C06 · Foco visible

| Componente | Foco actual | Problema |
|---|---|---|
| Button primary | borde 1 px `button/secondary-stroke` | anillo de 1 px, sin separación |
| FAB | borde 1 px `button/primary-focus` (gold) | 1.69:1 sobre blanco |
| Toggle | **igual que Hovered** | no se distingue |
| Tab label | `border/01`, igual que Pressed y Active | no se distingue |
| Sidebar / item | `border/01`, igual que Pressed | no se distingue |
| Card, Selectable Card, Link, Accordion | no tiene | — |

WCAG 2.4.7 (AA) exige foco visible. **Propuesta:** un único anillo de foco del sistema: 2 px `border/01` (o `link/primary`) con 2 px de separación (`outline-offset`), aplicado en código con `:focus-visible` a todo control, y un token `focus/ring` en Semantic (Light y Dark).

### D-C07 · Áreas de toque

`SmallFAB` 32 × 32, `Dd-LabelNum` 56 × 24, flechas de Pagination 24, `Segmented button` 32 de alto, `Link` 32, ítems de sidebar 40. En desktop con mouse es aceptable (≥ 24 × 24), pero el Dashboard también se usa en < 768 px con touch. **Propuesta:** en mobile, área táctil mínima de 44 × 44 (sin cambiar el visual: padding o pseudo-elemento), coherente con ArchWay (44/48/56).

### D-C08 · Estados iguales entre sí

- `Card_Option`, `Cards_Category`, `Cards_img`: **hovered = enabled**.
- `Dropdown-ListItem`: **Hover = Selected** (`background/04`).
- `Date`: Selected Hover = Selected Enabled.
- `Tab label`: Pressed = Active.

**Propuesta:** hover con `button/secondary-hover` o elevación; selected con check o peso de texto además del fondo.

### D-C09 · Naming de variantes

Typos: `hoverded`, `Focudes`, `presesed` (FAB), `Sate` (Radio), `Stuatus` (Evento), `Cragando`, `Arcivada` (Card_list), `Tittle`, `orientacion`, `stile`, `Carrousel`, `Segmente`. Propiedades genéricas `Property 1`. Mayúsculas mezcladas en los valores (`Enabled`/`enabled`, `Disabled`/`disabled`). `DropDown-ListMenuNum` está **duplicado** (787:27116 y 787:27172). "FAB" se usa para un *icon button*.

**Propuesta:** convención `State` = enabled · hover · focus · pressed · disabled en minúsculas, propiedades en inglés, y borrar el duplicado.

### D-C10 · Estados de negocio con tokens de otro componente

En el Calendar de reservas: *Pendiente* usa `button/primary-disabled`, *Activa* un `#E2EABF` suelto (= `tag/background-green`), *Cancelada* el primitivo `color/tertiary/red-disabled`. En Card List los estados de promoción usan `tag/background-*`. **Propuesta:** una familia `status/*` en Semantic (`status/pending-surface`, `status/active-surface`, `status/cancelled-surface`, `status/neutral-surface` + sus `-text`), compartida por Calendar, Card List y Tag, con valores para Dark (resuelve también [D-A01](#d-a01--tags-en-dark-mode)).

### D-C11 · Componentes sin estados

- **Link:** sin hover/visited/focus y con `text/primary` en lugar de `link/*`.
- **Accordion:** sólo "Desplegada".
- **Checkbox:** sin `indeterminate` ni error.
- **Selectable Card:** sin focus ni disabled.
- **Header:** el contexto *Header* de *UI templates* sigue vacío (D-D04).

### D-C12 · Data table read-only con controles

`Data table row cell` ofrece estilos `Switch` y `Textfield`, pero la regla de uso dice que la tabla de solo lectura no tiene toggles ni cambios de estado por fila (eso es una Card List). **Propuesta:** sacarlos de la tabla read-only o documentar una "tabla editable" como tercer patrón.

### D-C13 · Botón secundario en Dark

Detectado al previsualizar los componentes en Storybook con el modo Dark: en hover y focus, `button/secondary-hover` y `button/secondary-focus` pasan a `secondary/ivory` (casi blanco) mientras `button/secondary-text` es `white/default`, y el texto desaparece. Mismo patrón que [D-A04](#d-a04--secondary-pressed-en-dark) (pressed). **Propuesta:** en Dark, `secondary-hover` → `black/700` y `secondary-focus` → `black/600`, o un `button/secondary-text-hover` oscuro.

### D-C14 · Placeholder en hover

Detectado con axe en Storybook: en `Dropdown-Menu` hover, el placeholder `text/secondary` (#6F6F6F) sobre `button/secondary-hover` (#D6D6D6) da **3.45:1** (pide 4.5:1). **Propuesta:** hover del input con `layer/03` o placeholder `text/primary` en hover.

### D-E01 · Medidas del shell sin tokens

Alto del header (96), anchos del sidebar (272 / 256 / 48), del SubPanelLeft (272), columnas de contenido (1089 formulario · 800 paso a paso) y `Card_Info` (208) son valores fijos. **Propuesta:** sumarlos a la colección `Layout` (`layout/shell-header`, `layout/shell-sidebar`, `layout/shell-sidebar-collapsed`, `layout/content-form`, `layout/content-flow`, `layout/aside`), con valor por breakpoint.

### D-E02 · Header con gap fijo

El header separa el grupo izquierdo del derecho con `itemSpacing` = 206. Funciona en 1584 pero no en otros anchos. **Propuesta:** `primaryAxisAlignItems = SPACE_BETWEEN` (en código, `justify-content: space-between`).

### D-E03 · Fondo del header inconsistente

`Header` usa `layer/01` y la instancia de `Header+PanelLeft-Small` usa `background/01`. En Light son iguales; en Dark no. **Propuesta:** `layer/01` en todos.

### D-E04 · IA desalineada entre componente y árbol

- El componente `Header+PanelLeft` muestra **Pagos**, que no está en los árboles *Ai - Panel Left* ni *v-09/03/26*.
- *Delivery* pasó a *Coste de envío* y *App Content* sumó *Animaciones* y *Primera compra* (v-09/03/26): el componente ya muestra "Costos de envío".
- SubPanelLeft: etiquetas en español con typos (`Loyality`, `Parámentros`) contra un árbol en inglés; *Refunds* es primer nivel en el componente y subsección de *Cancellations* en el árbol; *Wallet* no está en el componente.

**Propuesta:** un único árbol versionado (este repo: [structure/information-architecture.md](./structure/information-architecture.md)) como referencia, y labels por i18n.
