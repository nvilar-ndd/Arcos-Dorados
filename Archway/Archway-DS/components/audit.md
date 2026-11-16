# Audit — ArchWay Components (Design Resources CORE)

> **Archivo auditado:** [Design Resources CORE – Archway (Figma)](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-) · **Fecha:** 2026-11-16 · **Método:** relevamiento de las 33 páginas vía Figma MCP (component sets, propiedades, descripciones, variables enlazadas, colores sin variable y estilos de texto) + contraste WCAG 2.1 sobre los valores resueltos de [Foundations](../foundations/color.md).
>
> **Flujo:** igual que el [audit de Foundations](../audit.md). Cada hallazgo queda `Pendiente` hasta que el equipo lo **aprueba** o lo **rechaza**; sólo lo aprobado se aplica en Figma. Nada de este archivo está aplicado.

## Lo que está bien

Antes de los hallazgos, lo que el archivo ya resuelve y conviene sostener:

- **Pirámide clara** (Nivel 0 Nativos iOS · 1 Core · 2 Compuestos · 3 Específicos 💠) con una regla simple para decidir ("¿funciona igual en cualquier pantalla sin saber de qué se trata?") y un tablero de estado por componente.
- **Tokens de ArchWay casi en todo.** Los componentes Core consumen las variables semánticas de Foundations (`Button/*`, `Chip/*`, `Surface/*`, `Text/*`, `Valor/spacing/*`, `Valor/radius/*`) y los 20 text styles. Los colores sin variable son excepciones puntuales (C-T02).
- **Estado `Focused` explícito** en Button, Ghost, Icon Only, FAB, Chip, Card, List Item, Input, Switch y NavItem, con borde `Border/strong` 2 px: resuelve a nivel componente buena parte de [A-05](../audit.md#a-05--no-existe-un-indicador-de-foco).
- **Descripciones con "Usar / No usar / Clave"** en la mayoría de los Core, y fichas de accesibilidad con `accessibilityLabel`, rol y estado.
- **Decisión de plataforma documentada:** qué es nativo en iOS (Liquid Glass) y qué es custom en Android.

## Tablero

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| C-A01 | Switch: track apagado `Surface/muted` 1.38:1 y encendido `Interactive/active` 1.69:1 sobre blanco | 🔴 P0 | Pendiente |
| C-A02 | Pagination y Progress step: el estado activo es dorado sobre blanco (1.69:1) | 🔴 P0 | Pendiente |
| C-A03 | Bordes que delimitan controles en 1.38:1: Input, Search, Select, PinCode, Card Outlined | 🔴 P0 | Pendiente |
| C-A04 | Áreas táctiles menores a 44 pt (iOS) / 48 dp (Android) | 🔴 P0 | Pendiente |
| C-T01 | Variables que no existen en Foundations o ya se eliminaron (`Background/01`, `Feacture/Misiones`, `Trust/Surface`, `Radius/*`, `Color/Chip/*`, `spacing/200`) | 🔴 P0 | Pendiente |
| C-A05 | Disabled por opacidad en Input y Carrousel cards; Switch prohíbe opacidad | 🟠 P1 | Pendiente |
| C-A06 | Sin reglas de duración y pausa para contenido animado (Toast 5 s, Loyalty home card, Button Loading) | 🟠 P1 | Pendiente |
| C-T02 | Colores sin variable en componentes (Pin, ProgressBar_beneficios, precios `#DB0007`, Button Loading) | 🟠 P1 | Pendiente |
| C-T04 | Documentación del canvas con nombres viejos de tokens (`color/layer/06`, `color/Background/01`, `Layer/03`) o con hex en lugar de tokens | 🟠 P1 | Pendiente |
| C-S01 | Dos componentes base de Card (`.Card (Core)` y `Card` Nivel 2) | 🟠 P1 | Pendiente |
| C-S03 | Lista cerrada de estados distinta en cada componente; sin `Hover` para web | 🟠 P1 | Pendiente |
| C-T03 | Textos sin estilo de texto (Card, Gamification Bar, Loyalty home card) | 🟡 P2 | Pendiente |
| C-S02 | Estado de los componentes desalineado entre *Índice*, *Estado de componentes* y lo publicado | 🟡 P2 | Pendiente |
| C-S04 | Tag Core: la documentación no coincide con el componente | 🟡 P2 | Pendiente |
| C-S05 | Skeleton: nombres de variante cruzados con los tokens | 🟡 P2 | Pendiente |
| C-S06 | Marcas pendientes en el archivo ("Color a revisar!!!", "Revisar si se utilizan", "A definir") | 🟡 P2 | Pendiente |
| C-H01 | Typos y nombres genéricos en componentes, propiedades y páginas | ⚪ P3 | Pendiente |

---

## 🔴 P0 — Accesibilidad y tokens

### C-A01 · Switch: tracks sin contraste

| Parte | Token | Sobre | Contraste | WCAG 1.4.11 (3:1) |
|---|---|---|---|---|
| Track apagado | `Surface/muted` `#DBDBDB` | `Surface/default` | **1.38:1** | ❌ |
| Track encendido | `Interactive/active` `#FFBC0D` | `Surface/default` | **1.69:1** | ❌ |
| Handle | `Surface/default` `#FFFFFF` | track encendido | **1.69:1** | ❌ (lo salva la sombra) |

El estado se entiende por la posición del handle, pero el **límite del control** (1.4.11) no se ve sobre blanco. Es [A-06](../audit.md#a-06--dorado-sobre-blanco-como-único-indicador-de-estado) de Foundations llevado al componente.

**Propuesta:** track apagado con borde `Border/default` (`black/400`, 3.23:1) de 1 px o relleno `black/400`; track encendido con borde `Border/strong` o relleno `gold/700` (≥ 3:1). En iOS se usa el nativo, así que aplica sólo a Android.

### C-A02 · Pagination y Progress step en dorado

`Pagination Bullet` (On) y `Progress_step` (Done) usan `Interactive/active` sobre blanco: **1.69:1**. Off y empty usan `Surface/muted` (1.38:1). Quien no percibe el amarillo no distingue en qué paso está.

**Propuesta:** On / Done = `Surface/inverse` (`#292929`) o `Border/strong`; Off / empty = `Border/default`. Si la marca pide dorado, sumar una diferencia de forma (bullet activo como píldora de 16 × 8).

### C-A03 · Bordes de controles en 1.38:1

`Border/soft` (`#DBDBDB`) delimita el Input (Text Field, Text Area, Password, Select, PinCode), el Search de Android y la Card Outlined: **1.38:1** sobre blanco. En el Input es el único indicador de dónde tocar. Es [A-04](../audit.md#a-04--bordersoft-no-delimita-el-input) de Foundations, ahora confirmado en 6 componentes.

**Propuesta:** `Border/default` (3.23:1) en el estado Enabled de los campos. En Card Outlined puede quedar `Border/soft` si la card no es un control, pero si es seleccionable (estado `Selected`) necesita `Border/default`.

### C-A04 · Áreas táctiles

Mínimos: **44 × 44 pt** en iOS (Apple HIG), **48 × 48 dp** en Android (Material) y 24 × 24 CSS px en web (WCAG 2.5.8, AA en 2.2). [Foundations](../foundations/spacing.md) ya pide 48.

| Componente | Área táctil en Figma | Mínimo |
|---|---|---|
| Button y Button_Ghost XS / Small | 40 de alto | 44 / 48 |
| Icon_Only XS (24) y Small (32) | hit area 40 | 44 / 48 |
| Chip | 40 de alto | 44 / 48 |
| Checkbox / Radio | 40 × 40 | 44 / 48 |
| Switch | 52 × 40 | 52 × 44 / 52 × 48 |
| Search / Android | 36 de alto | 48 |
| Tooltip (botón cerrar) | 24 | 44 / 48 |

**Propuesta:** dejar el tamaño **visual** como está y llevar el **área táctil** (el frame transparente que ya usan Checkbox, Switch e Icon Only) a 48 en todos. El diseño no cambia y se cumple en las dos plataformas. **Fundamento:** Ley de Fitts.

### C-T01 · Variables que no existen en Foundations

Hay bindings que apuntan a variables viejas o de otras librerías. Si la variable se borró en Foundations, el valor queda congelado y deja de seguir al sistema.

| Componente | Variable | Qué es | Reemplazo |
|---|---|---|---|
| Progress bar misiones (💠) | `Background/01` | Eliminada el 15/10 | `Surface/default` |
| Progress bar misiones (💠) | `Feacture/Misiones` | Renombrada el 15/10 | `Feature/missions` |
| Carrousel cards / New | `Trust/Surface` | No existe | `Trust/subtle` |
| Card / Voucher, Dialog 💠 Pop-up | `Radius/XS`, `Radius/L` | Otra librería | `Valor/radius/XS`, `Valor/radius/L` |
| Chip | `Color/Chip/chip-Selected-stroke` | Otra librería | Crear `Chip/stroke-selected` o usar `Chip/stroke` |
| Progress Circle | `spacing/200` | Variable de Dashboard | `Valor/spacing/16` |

Los componentes nativos de iOS (`_Tab Bar Button - iPhone`, `_Search - iPhone`, `Ios Toggle - Switch`) usan variables del kit de Apple (`Fills - Vibrant/Tertiary`, `Accents/Blue`…): es correcto y no se cambia.

---

## 🟠 P1 — Consistencia

### C-A05 · Disabled por opacidad

El Switch dice "Siempre color sólido con token. Nunca opacidad sobre el componente", pero la ficha del Input dice "Opacidad reducida para indicar inactividad" y las Carrousel cards "El estado Disabled reduce la opacidad visual". **Propuesta:** adoptar la regla del Switch en todo el sistema (disabled = tokens `*-disabled`), porque la opacidad depende del fondo y no se puede verificar el contraste.

### C-A06 · Animaciones sin reglas de pausa

- **Toast:** 5 s por defecto. WCAG 2.2.1 pide poder extender el tiempo si el mensaje tiene una acción o información necesaria. Propuesta: sin acción → 5 s; con acción o 2 líneas → 8 s o persistente hasta cerrar.
- **Loyalty home card:** flotación de monedas en loop infinito y confeti. WCAG 2.2.2 (pausar lo que se mueve más de 5 s) y `prefers-reduced-motion`: sin flotación ni confeti con "Reducir movimiento".
- **Button Loading — Motion:** documentar el comportamiento con "Reducir movimiento" (barra estática + label "Procesando…").

Referencia: reglas de [Motion](../foundations/motion.md).

### C-T02 · Colores sin variable

| Componente | Color | Propuesta |
|---|---|---|
| Pin (💠) | `#F9F9F9`, `#FFFFFF` en los 3 estados | `Surface/subtle`, `Surface/default` |
| ProgressBar_beneficios (💠) | `#D6D6D6`, `#FFBC0D` | `Surface/muted`, `Interactive/active` (ver C-A02) |
| Carrousel cards / Classic (Small y Big) | Precio con descuento `#DB0007` (10 nodos) | `Text/error`, o un token `Text/price-discount` si el rojo no significa error |
| .Button Loading — Motion | `#FFFFFF` | `Surface/default` |

### C-T04 · Documentación con nombres viejos o hex

Las fichas del canvas citan tokens que ya no existen desde el 15/10 o valores en hex:

- **NavBar:** `color/Background/01`, `color/layer/06`.
- **Tooltip:** `color/layer/06`.
- **Header:** `color/layer/brand`.
- **Skeleton:** `Layer/02`, `Layer/03` (ver C-S05).
- **Progress:** sólo hex (`#CDDEF9`, `#1B67DF`, `#292929`).
- **Toast:** `Feedback/error-on-black` figura `#FF1017`; en Foundations es `red/400` = `#FF4248`. `success-on-black` figura `#2B8C4E`; la variable es `#2B8C4D`.
- **Gamification Bar:** tabla de colores de Dashboard (`#006BAE`, `#CCF0FF`, `Layer /04`).

**Propuesta:** en las fichas, nombrar el token (con el hex entre paréntesis si hace falta) y tomar el valor de la variable. En este repo los docs ya usan los nombres actuales.

### C-S01 · Dos Card base

- `.Card (Core)` (página *Card*): header fijo + slots `Leading` (80 × 80) y `Bottom`; estilos Elevated / Filled / Outlined; estados Enabled / Pressed / Focused / Selected. Prohíbe la imagen completa.
- `Card` (página *Card 💠*, "Componente base (Nivel 2)"): 26 propiedades (Rewards, Counter, Full Image, Img Left, Right Image Float…); estilos Elevation / Outline / Fill / Highlight / Outline-selected; layout Vertical / Horizontal. `Card / Voucher` dice "Deriva de Card" (de esta).

Dos bases con nombres de estilo distintos (`Elevated` vs `Elevation`, `Outlined` vs `Outline`) y la segunda con imagen completa. **Propuesta:** `.Card (Core)` como única base; migrar `Card / Voucher` y `Card / Setting` a instancias de ella (Voucher: troquel en el Bottom slot) y deprecar `Card` Nivel 2.

### C-S03 · Lista cerrada de estados

| Componente | Estados |
|---|---|
| Button | Enabled, Pressed, Focused, Disabled, Loading |
| Chip | Enabled, Selected, Pressed, Focused, Disabled |
| Input | Enabled, Focused, Pressed, **Active, Typing**, Error, Success, **Completed**, Disabled |
| Search / Android | Enabled, Typing, Completed, Disabled, Active |
| Switch | Enabled, Pressed, Focused, Disabled, **Skeleton** |
| NavItem | `_Enabled`, `_Focused`, `_Pressed`, `_Selected` (con guion bajo) |
| Category / Tile | Enabled, Pressed, Skeleton |
| Carrousel cards / New | **Disable, Enable** |

Ninguno tiene `Hover`, que hace falta en Web eCommerce y Dashboard (mouse). **Propuesta:** lista cerrada para todo el sistema: `Enabled · Hover (web) · Pressed · Focused · Selected · Disabled · Loading · Skeleton`, más los de validación del Input (`Error · Success`). `Active` / `Typing` / `Completed` del Input se pueden resolver con propiedades (`Has value`, `Cursor`) en lugar de estados. Cierra [S-09](../audit.md#s-09--estados-sin-jerarquía-visual) de Foundations.

---

## 🟡 P2 — Documentación y estructura

### C-T03 · Textos sin estilo

`Card` (Nivel 2) tiene 10 textos sin text style, `progres Gamification Bar` 5 y `Loyalty home card` 1. **Propuesta:** aplicar el estilo de Foundations que corresponde (ver [typography.md](../foundations/typography.md)).

### C-S02 · Estado de componentes desalineado

- *Índice* y *Estado de componentes* (22/10) dicen **Card: Falta**, pero `.Card (Core)` está publicada con su ficha completa.
- *Índice* lista **Tooltip** dos veces; la segunda es *Tooltip Walkthrough*.
- *Estado de componentes* nombra "Checkbox — Legal Checkbox"; en Figma hay una sola página *Checkbox / Radio*.

**Propuesta:** una sola tabla de estado (este repo la replica en el [README](./README.md#estado)) y actualizarla en el mismo cambio que publica el componente.

### C-S04 · Tag Core: ficha vs componente

La ficha dice "Speedee 14pt (Label/Label.m)", "radius/X - 4pt" e "Icon only disponible"; el componente usa **Label Small Bold (12)**, `Valor/radius/XS` y no tiene variante de layout (sólo `Icon Leading` / `Icon Trailing`). La ficha lista los tags de negocio como "Nivel 3 → Tag/Destacar, Tag/Urgencia…", mientras *Nuestras bases* los llama `Tag 💠 EP` y `Tag 💠 Loyalty`. **Propuesta:** actualizar la ficha al componente y a la nomenclatura 💠.

### C-S05 · Skeleton

El propio archivo lo marca "⚠ A definir": la variante `Background=Subtle` usa `Surface/subtle` (`#F5F5F5`) y `Background=muted` usa `Surface/muted` (`#DBDBDB`), pero la ficha habla de `Layer/02` y `Layer/03` con los valores cruzados. **Propuesta:** nombres de variante iguales al token (`Subtle`, `Muted`) y borrar las referencias a `Layer/*`.

### C-S06 · Marcas pendientes

- `Badge`: descripción "Color a revisar!!!" (usa `Highlight/new`; 5.00:1 con texto blanco, pasa AA).
- `Progress_stepper`: "Revisar si se utilizan".
- `.Card (Core)`: "Cuándo usar cada estilo: A definir".
- Checkbox / Radio: cuándo se activa el label, casos de Disabled y reglas de convivencia "A definir".
- Liquid Glass: la regla está marcada "(por cerrar)".

---

## ⚪ P3 — Higiene

### C-H01 · Typos y nombres

| Dónde | Hoy | Propuesta |
|---|---|---|
| Página y componentes de Input | `Imput` (página, `Imput label`, `Imput_Text Field`…) | `Input` |
| Chip | propiedad `Layaut` | `Layout` |
| Imput label | valor `Enabeld` | `Enabled` |
| Category_Primary | descripción "Prymary" | "Primary" |
| Tag | valor `Terciary` | `Tertiary` |
| Tooltip_Plain, Rich Tooltip | `alignment=Star`, `Position=bottom`, `Position=RLeft` | `Start`, `Bottom`, revisar `RLeft` |
| NavItem_Only, progres Gamification Bar | `Property 1`, `Property 2` | `State`, `Context` |
| progres Gamification Bar | "progres" | "progress" |
| Carrousel cards / New | `Loayalty Coin`, `Disable` / `Enable` | `Loyalty Coin`, `Disabled` / `Enabled` |
| Utilidades | `Utiidades_Enlace del flujo` | `Utilidades_Enlace del flujo` |
| Páginas | *Nuestas bases* | *Nuestras bases* |
| Chip (descripción) | "I\nnteractivo" | "Interactivo" |
| Progress bar misiones | propiedad `Estado` (el resto usa `State`) | `State` |
| Card / Setting | la ficha nombra `Show Switch`; la propiedad es `Show Icon` | Alinear |
