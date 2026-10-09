# Audit — ADK (Advance Kiosk)

> **Archivo auditado:** [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) · **Fecha:** 2026-10-09
> **Método:** extracción de variables, estilos, text styles y nodos de las 14 páginas de componentes vía Figma MCP, más contraste WCAG 2.1.
> **Flujo:** cada hallazgo queda `Pendiente` hasta que el equipo lo aprueba o lo rechaza. Sólo lo aprobado se aplica en Figma.
>
> Muchos puntos se resuelven solos al enlazar ADK a la librería ArchWay: ver [`Convergencia/adk-archway.md`](../Convergencia/adk-archway.md).

## Tablero

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| A-S01 | Sin variables propias: ~2.700 colores hex sueltos, sólo 28 nodos con variables (remotas de ArchWay) | 🔴 P0 | Pendiente |
| A-T01 | 3.272 textos sin estilo (~1.170 en Speedee) contra 354 con estilo | 🔴 P0 | Pendiente |
| A-A01 | Gold como único indicador en nav compacto (A11y) y loader (1.69:1 sobre blanco) | 🟠 P1 | Pendiente |
| A-A02 | Bordes `#ADADAD` en Text Field, Dropdown y Toggle off (2.24:1) | 🔴 P0 | Pendiente |
| A-C01 | Ningún componente tiene estado de foco | 🟠 P1 | Pendiente |
| A-C05 | Text Field: Focused y Typing iguales al reposo (sólo cambia el cursor) | 🟠 P1 | Pendiente |
| A-A03 | Scroll: thumb vs track 1.54:1 | 🟠 P1 | Pendiente |
| A-A04 | Error indicado sólo con color (Text Field) | 🟠 P1 | Pendiente |
| A-C04 | Áreas de toque de 40 px (botón Small, chip 40, Quantity) | 🟠 P1 | Pendiente |
| A-T02 | Tamaños fuera de la escala (22/24, 16/16, 24/32, 40/40, 66/80) | 🟠 P1 | Pendiente |
| A-T05 | `Utility/Small` 12 px: ilegible a distancia de kiosco | 🟠 P1 | Pendiente |
| A-S04 | Colores fuera de la paleta (`#808080`, `#000000`, `#FA4D56`, `#FE8234`, `#979797`) | 🟠 P1 | Pendiente |
| A-L01 | Sin breakpoints ni grilla fluida: todo en px absolutos sobre 1080 × 1920 | 🟠 P1 | Pendiente |
| A-L02 | Área accesible sin reglas documentadas | 🟠 P1 | Pendiente |
| A-C02 | Estado Inactive resuelto con opacidad 40 % en vez de tokens | 🟡 P2 | Pendiente |
| A-C06 | Página *Product* en progreso (🟠) | 🟡 P2 | Pendiente |
| A-C07 | Snackbar sin tiempo de cierre definido | 🟡 P2 | Pendiente |
| A-C08 | Toggle con nombres de variante invertidos (`Status=True` dibuja apagado) | 🟡 P2 | Pendiente |
| A-S02 | Radios sueltos (5, 2, 3, 19, 6…) y pills como 100 / 99 | 🟡 P2 | Pendiente |
| A-S03 | Sin effect styles: sombras repetidas como valores | 🟡 P2 | Pendiente |
| A-T03 | Fuentes fuera del sistema (Speedee Light, IBM Plex Sans) | 🟡 P2 | Pendiente |
| A-L03 | Página *🎨 Design Foundations* vacía; sin estilos de grilla | 🟡 P2 | Pendiente |
| A-C03 | "Hover" en un producto touch: en realidad es *pressed* | ⚪ P3 | Pendiente |
| A-S05 | Variable local `Color` (`#CCF0FF`) huérfana | ⚪ P3 | Pendiente |
| A-T04 | Nombres de text styles inconsistentes ("DIsplay", "Headline/Small" que es Bold) | ⚪ P3 | Pendiente |
| A-H01 | Typos y hex mal escritos | ⚪ P3 | Pendiente |

## Estructura y tokens

### A-S01 · Sin variables propias 🔴

| | |
|---|---|
| **Qué pasa** | La paleta existe sólo como muestras en la página *Colors*. Los componentes usan hex sueltos: `#292929` ×995, `#FFFFFF` ×693, `#FFBC0D` ×209… La librería ArchWay ya está habilitada y 28 nodos usan semánticos de ArchWay (`Background/01`, `Text/Text_primary`, `Button/primary-disabled`…), mezclados con hex |
| **Impacto** | No hay forma de cambiar un color de forma global, el código no puede consumir tokens, y la convergencia exige tocar nodo por nodo |
| **Propuesta** | **No crear una colección propia de ADK.** Enlazar directamente a ArchWay Semantic (ver Convergencia, fase 2). Mientras tanto, [`adk.tokens.json`](./tokens/adk.tokens.json) documenta los semánticos propuestos y su destino |

### A-S02 · Radios sueltos 🟡

Hay 120 nodos con radios fuera de la escala (5, 2, 3, 19, 6, 2.59, 107.1). Los pills usan 100 o 99 en vez de un `full`.

**Propuesta:** ArchWay `radius/XS–L` + `XL` 20 + `full` (audit ArchWay F-03).

### A-S03 · Sombras sin estilo 🟡

`0 8 16 #292929/16%` aparece 100 veces y la versión hacia arriba 40 veces.

**Propuesta:** usar la elevación de ArchWay y sumar una variante *up* para footers flotantes (ver [spacing.md § Elevación](./foundations/spacing.md#elevación)).

### A-S04 · Colores fuera de paleta 🟠

| Hex | Usos | Propuesta |
|---|---|---|
| `#808080` | 155 | `text.secondary` o `border.default` según el caso |
| `#000000` | 92 | `#292929` |
| `#FA4D56` | Snackbar Error | `feedback/error-on-black` |
| `#FE8234` | Badges de oferta | ArchWay `orange/400` |
| `#979797` | Bordes de categoría y banner | `border.subtle` |

### A-S05 · Variable huérfana ⚪

`Color` (`#CCF0FF`) es la única variable local y no tiene uso. Borrarla.

## Tipografía

### A-T01 · Textos sin estilo 🔴

| | Cantidad |
|---|---|
| Textos de componentes sin estilo | 3.272 |
| De esos, en Speedee | ~1.170 |
| Con fuentes mezcladas | 880 |
| Con estilo | 354 |

**Impacto:** un cambio de escala (por ejemplo el modo tablet) no se propaga.

**Propuesta:** aplicar estilos en bloque con un script `use_figma` que mapee tamaño/peso al estilo más cercano y liste lo que no tenga match para revisión manual.

### A-T02 · Tamaños fuera de escala 🟠

| Usado | Usos | Más cercano en la escala |
|---|---|---|
| 22 / 24 | 327 | Body Medium 22 / 26 |
| 16 / 16 | 311 | Body Small 16 / 20 |
| 24 / 32 | 165 | Body Large 24 / 28 |
| 40 / 40 | 87 | Headline Medium 40 / 44 |
| 66 / 80 | 53 | Sin equivalente: ¿Display de precio? Definir o eliminar |

### A-T03 · Fuentes fuera del sistema 🟡

| Fuente | Textos | Problema |
|---|---|---|
| Speedee Light | 23 | No está en el paquete licenciado de 4 archivos |
| IBM Plex Sans | 19 | Ajena al sistema |
| Inter | — | Se usa en anotaciones de documentación: OK, pero mover a una capa de "doc" |

### A-T04 · Nombres ⚪

| Problema | Propuesta |
|---|---|
| `ADK/DIsplay/*` | `ADK/Display/*` |
| `Headline/Small` es Bold | `Headline/Small Bold` |
| `Large bold` vs `Large Bold` | Unificar mayúsculas |

### A-T05 · Texto de 12 px en kiosco 🟠

A 50–70 cm, 12 px equivale a ~7 px en un teléfono.

**Propuesta:** mínimo 16 px para texto secundario y 22 px para texto de lectura.

## Accesibilidad

### A-A01 · Gold como único indicador 🟠

`#FFBC0D` sobre blanco da **1.69:1**. La mayoría de los componentes ya suman un segundo indicador:

| Componente | Segundo indicador en Figma | Estado |
|---|---|---|
| Chip seleccionado | Texto Bold | ✅ |
| Nav.menu-button / category-button | Barra Gold + texto Bold + fondo Ivory | ✅ |
| Product card / Product Size | Check circular | ✅ |
| Toggle | Posición del knob | ✅ |
| **Nav compacto (A11y)** | Sólo ícono y barra inferior Gold | ❌ |
| **Loader circular** | Sólo arco Gold | ❌ |

**Criterio:** 1.4.1 (uso del color) y 1.4.11 (contraste no textual, 3:1).

**Propuesta:**

| Componente | Propuesta |
|---|---|
| Nav compacto | Barra inferior `#292929`, o label visible debajo del ícono |
| Loader | Track `#D6D6D6` + arco `#292929`, o texto visible ("Procesando tu pago…") |

### A-A02 · Bordes `#ADADAD` 🔴

Text Field, Dropdown y Toggle off tienen borde `#ADADAD` (2.24:1): el control no se distingue del fondo (1.4.11).

**Propuesta:** `border.default` `#6F6F6F` (5.02:1), que es lo que ya usan los botones secundarios. En ArchWay: `border/default` `#8F8F8F` (3.23:1).

### A-A03 · Scroll poco visible 🟠

El thumb `#ADADAD` sobre el track `#D6D6D6` da 1.54:1.

**Propuesta:** thumb `#6F6F6F` (3.46:1).

### A-A04 · Error sólo por color 🟠

El estado Error del Text Field cambia borde y label a rojo, sin ícono ni mensaje obligatorio.

**Propuesta:** ícono + mensaje en el helper, `aria-invalid` + `aria-describedby`.

## Componentes

| ID | Hallazgo | Propuesta |
|---|---|---|
| A-C01 | Sin foco. El modo accesible y el cumplimiento de EN 301 549 / ADA para kioscos piden navegación por teclado o switch | Anillo 2 px `#292929` con offset 2 en todos los interactivos |
| A-C02 | Inactive con opacidad 40 % | Tokens explícitos: `button.primary-inactive` `#FFE49E`, texto `text.disabled` |
| A-C03 | "Hover" en touch | Renombrar a `Pressed`, igual que ArchWay |
| A-C04 | Áreas de toque de 40 px | Mínimo 56 en kiosco (ver [layout § Tamaños de toque](./foundations/layout.md#tamaños-de-toque)) |
| A-C05 | Text Field Focused igual al reposo | Borde `border.strong` 2 px en foco |
| A-C06 | Product 🟠 | Cerrar estados (selected, agotado) y badges con tokens antes de desarrollar |
| A-C07 | Snackbar | Duración mínima 4 s y 6 s para Error; no cerrar mientras se toca |
| A-C08 | Toggle: `Status=True` dibuja el estado apagado y `Status=False` el encendido | Renombrar a `On=True/False` |

## Layout

| ID | Hallazgo | Propuesta |
|---|---|---|
| A-L01 | Un solo lienzo, px absolutos | Breakpoints y grilla fluida (ver Convergencia § Formatos). Bloquea tablets y kiosco chico |
| A-L02 | El área accesible (800 / 960) es sólo un rectángulo | Documentar qué componentes se mueven, cómo se activa y cómo se sale del modo, y qué pasa con el header |
| A-L03 | *🎨 Design Foundations* vacía | Usarla como índice o borrarla. Crear estilo de grilla `ADK/Kiosk` (32 · 248 · 48 · 656 · 96) |

## A-H01 · Typos y hex mal escritos ⚪

| Dónde | Actual | Correcto |
|---|---|---|
| Attract Screen | "Acecibilidad" | Accesibilidad |
| Páginas | "Tipography", "templete", "Navegation" | Typography, Template, Navigation |
| Colors | "Fuschia" | Fuchsia |
| Colors › Ground Shadow | `#F1F1F` | `#F1F1F1` |
| Colors › Hashbrown | `#E8970` | Hex incompleto: confirmar valor |
| Colors › Bun, Ham Dark | Sin `#` | Agregar `#` |
