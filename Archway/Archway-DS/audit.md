# Audit — ArchWay Foundations

> **Archivo auditado:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) · **Fecha:** 2026-10-07 · **Revisado contra Figma:** 2026-10-15 · **Método:** extracción de variables y estilos vía Figma MCP + cálculo de contraste WCAG 2.1 sobre valores resueltos.
>
> **Flujo:** cada hallazgo queda `Pendiente` hasta que el equipo lo **aprueba** o lo **rechaza**. Sólo lo aprobado se aplica en Figma (SSOT) y, después, se regenera la documentación. Nada de este archivo está aplicado todavía.

## Cambios en Figma desde la versión anterior (2026-10-15)

El equipo renombró y limpió las variables de color. Esto **resuelve S-02** y resuelve en parte S-03, S-04, S-05, S-06, S-07 y H-01. Los P0 (A-01…A-06) siguen pendientes: los valores no cambiaron, sólo los nombres. La tabla completa de renombres está en [`foundations/color.md`](./foundations/color.md) y en `Convergencia/*`.

| Cambio | Detalle |
|---|---|
| Superficies unificadas | `Background/*` y `Layer/*` eliminados → `Surface/{default, subtle, muted, strong, inverse, brand}` |
| Naming | Sin sufijo `_`; `blue Dark` → `blue`; `Text/Text_x` → `Text/x`; `Feacture/Misiones` → `Feature/missions` |
| Tokens de componente | `Button/*` y `Chip/*` con orden propiedad → estado (`primary-bg-pressed`, `bg-selected`) |
| Scopes | Específicos en 120 de 126 semánticos |
| `codeSyntax` | Android en los 86 semánticos de color |
| Primitivos | `Primary/Color` eliminado, `violet/100` corregido, primitivos ocultos del publishing |
| Sin cambios | Text styles, efectos, gradientes, grilla y página Motion |

## Resumen

| Prioridad | Cantidad | Qué cubre |
|---|---|---|
| 🔴 P0 — Accesibilidad | 6 | Pares de color que fallan WCAG AA o descripciones que inducen a un uso que falla |
| 🟠 P1 — Estructura y consistencia | 10 | Arquitectura de tokens, duplicados, scopes, naming |
| 🟡 P2 — Foundations faltantes | 7 | Lo que el sistema necesita para App + Web + Dashboard + Kiosco ADK |
| ⚪ P3 — Higiene | 1 | Typos y descripciones |

### Tablero de decisiones

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| A-01 | `Text/on-color` / `Icon/on-color` (blanco) descritos para usar sobre dorado: 1.69:1 | 🔴 P0 | Pendiente |
| A-02 | Variantes `-on-black` no pasan AA para texto | 🔴 P0 | Pendiente |
| A-03 | `Interactive/active-subtle-text` sobre `active-subtle`: 2.16:1 | 🔴 P0 | Pendiente |
| A-04 | `Border/soft` en inputs: 1.38:1 (WCAG 1.4.11) | 🔴 P0 | Pendiente |
| A-05 | No hay token de focus ring; focus = cambio de fondo casi imperceptible | 🔴 P0 | Pendiente |
| A-06 | Dorado como único indicador de estado sobre blanco: 1.69:1 | 🔴 P0 | Pendiente |
| S-01 | Tokens de componente (`Button/*`, `Chip/*`) mezclados en Semantic | 🟠 P1 | Pendiente |
| S-02 | Duplicados: `Background/0x` = `Layer/0x`, `Surface/default` = `Layer/01` | 🟠 P1 | ✅ Resuelto (2026-10-15) |
| S-03 | Scopes: 6 semánticos siguen con `ALL_SCOPES`; radius con `FONT_VARIATIONS` | 🟠 P1 | 🟡 Parcial |
| S-04 | `codeSyntax`: sólo Android; faltan Web, iOS y los 40 numéricos | 🟠 P1 | 🟡 Parcial |
| S-05 | Naming: queda el prefijo `Valor/` y la escala de radius sin `XL` | 🟠 P1 | 🟡 Parcial |
| S-06 | Escala `violet`: 100 corregido; 900 sigue siendo azul, sin descripciones | 🟠 P1 | 🟡 Parcial |
| S-07 | `Primary/Color` eliminado; queda `Number` = 0 en Primitives | 🟠 P1 | 🟡 Parcial |
| S-08 | Escalas de color con pasos desparejos (50 y 950 sólo en algunas) | 🟠 P1 | Pendiente |
| S-09 | Estados de botón/chip sin jerarquía (focus = pressed; disabled más fuerte que enabled) | 🟠 P1 | Pendiente |
| S-10 | Sombras, grilla y gradientes no enlazados a variables | 🟠 P1 | Pendiente |
| F-01 | Sin breakpoints ni grillas para Web, Dashboard y Kiosco | 🟡 P2 | Pendiente |
| F-02 | Escala tipográfica sólo mobile (no contempla Kiosco ni Desktop) | 🟡 P2 | Pendiente |
| F-03 | Radius: falta `XL` y `full` | 🟡 P2 | Pendiente |
| F-04 | Spacing: falta `12` semántico; spacing usado para stroke | 🟡 P2 | Pendiente |
| F-05 | Motion sólo como texto (no variables); sin Opacity, Z-index, Border width | 🟡 P2 | Pendiente |
| F-06 | Iconografía: existe en archivo propio (documentada en `Archway/Iconografia`); faltan tokens de tamaño y binding de color | 🟡 P2 | 🟡 Parcial |
| F-07 | Sin modo Dark | 🟡 P2 | Pendiente |
| H-01 | Typos y descripciones a corregir | ⚪ P3 | 🟡 Parcial |

---

## 🔴 P0 — Accesibilidad (WCAG 2.1 AA)

### A-01 · Blanco sobre dorado está documentado como uso válido

**Evidencia**

| Token | Descripción en Figma | Par real | Ratio |
|---|---|---|---|
| `Text/on-color` (`#ffffff`) | "Texto sobre fondos de color — **botón primary, chip selected**, tooltip." | sobre `Button/primary-bg` `#ffbc0d` | **1.69:1** ❌ |
| `Icon/on-color` (`#ffffff`) | "Ícono sobre fondos de color — **botón primary, chip selected**." | sobre `Chip/bg-selected` `#ffbc0d` | **1.69:1** ❌ |

El sistema ya resuelve bien el caso con `Button/text` y `Chip/text-selected` (`#292929` sobre dorado = 8.63:1 ✅), pero la descripción de `on-color` contradice esa decisión y lleva a un uso ilegible.

**Propuesta**
1. Reescribir las descripciones: `on-color` = "texto/ícono sobre fondos **oscuros o saturados** (`Surface/inverse`, `Trust/default`, `Highlight/new`, `Feedback/success`, `Feedback/error`)". Todos esos pares pasan (≥ 5:1).
2. Crear `Text/on-brand` e `Icon/on-brand` → `color/black/800` para todo lo que se apoye sobre `Surface/brand`, `Button/primary-bg` y `Chip/bg-selected`.

**Fundamento:** WCAG 1.4.3 y 1.4.11. Ley de Jakob: el usuario de McDonald's ya espera texto oscuro sobre amarillo (packaging, kiosco).

### A-02 · Las variantes `-on-black` no cumplen lo que prometen

Las descripciones dicen "ajustada para pasar contraste sobre fondo negro (Surface/inverse)", pero:

| Token actual | Hex | Sobre `Surface/inverse` `#292929` | Propuesta | Ratio propuesto |
|---|---|---|---|---|
| `Feedback/error-on-black` → `red/400` | `#ff4248` | **4.24:1** ⚠️ | → `color/red/300` `#ff757a` | **5.60:1** ✅ |
| `Feedback/success-on-black` → `green/700` | `#2b8c4d` | **3.44:1** ⚠️ | → `color/green/500` `#53ca7d` | **7.01:1** ✅ |
| `Feedback/info-on-black` → `blue/500` | `#4584e8` | **3.96:1** ⚠️ | → `color/blue/400` `#72a2ee` | **5.62:1** ✅ |

Las actuales sólo pasan como ícono/borde (3:1) o texto grande (≥ 18.66px bold / 24px). Si se usan para el texto de un snackbar o un tooltip, fallan.

### A-03 · `Interactive/active-subtle-text` es ilegible sobre `Interactive/active-subtle`

- `active-subtle-text` = `gold/700` `#a87a00` sobre `active-subtle` = `black/200` `#c2c2c2` → **2.16:1** ❌.
- Además, `active-subtle` se describe como "versión suave del color activo", pero es **gris**, no dorado.

**Propuesta:** `Interactive/active-subtle` → `color/gold/200` `#ffe7a8` y `Interactive/active-subtle-text` → `color/gold/800` `#755500` → **5.64:1** ✅. Mantiene la familia dorada y pasa AA.

### A-04 · `Border/soft` no delimita el input

`Border/soft` (`black/100` `#dbdbdb`) se describe para "Input Text Field enabled". Sobre blanco da **1.38:1**: el usuario no percibe el límite del campo (WCAG 1.4.11 pide ≥ 3:1 para el borde que identifica un control).

**Propuesta:** usar `Border/default` (`#8f8f8f`, 3.23:1 ✅) para el borde del input enabled y reservar `Border/soft` para divisores decorativos. Alternativa: mantener `soft` pero darle al input fondo `Surface/subtle` (el borde deja de ser el único indicador del área).

**Fundamento:** Ley de Fitts (el área tocable tiene que percibirse) y Ley de región común.

### A-05 · No existe un indicador de foco

- `Button/primary-bg-focused` = `gold/600`: sólo oscurece el fondo; contra el enabled la diferencia es mínima.
- `Button/secondary-bg-focused` = `black/50` (igual a pressed); `Chip/stroke-focused` = `black/400` (igual a enabled).
- No hay ningún token de anillo de foco.

En Web, Dashboard y en Kiosco con lector de pantalla o teclado (ADK con navegación por hardware) esto hace imposible saber dónde está el foco (WCAG 2.4.7).

**Propuesta:** nueva familia `Focus/*`:

| Token | Valor | Uso |
|---|---|---|
| `Focus/ring` | `color/blue/700` `#1652b1` (7.30:1 sobre blanco, 4.33:1 sobre dorado — ambos ≥ 3:1) | Anillo de 2px por fuera del componente |
| `Focus/ring-inverse` | `color/white/default` | Sobre `Surface/inverse` y `Surface/brand` oscuro |
| `Focus/ring-offset` | `Valor/spacing/2` *(nuevo)* o 2px | Separación entre componente y anillo |

El cambio de fondo actual puede quedar como refuerzo, pero el anillo es el indicador.

### A-06 · Dorado sobre blanco como único indicador de estado

`Interactive/active` (switch ON, toggle, chip selected) y `Feedback/warning` = `#ffbc0d` sobre `Surface/default` = **1.69:1** ❌ como componente de UI (WCAG 1.4.11, 3:1).

**Propuesta:** el estado ON nunca se comunica sólo con el relleno dorado; se requiere un segundo indicador: borde `Border/strong`, thumb/ícono `Icon/primary` o un check. Para `Feedback/warning` en íconos sueltos sobre blanco, crear `Feedback/warning-icon` → `color/gold/800` (6.87:1 ✅).

---

## 🟠 P1 — Estructura y consistencia

### S-01 · Separar tokens de componente en una tercera colección

Hoy `Semantic` mezcla intención (`Text`, `Surface`, `Feedback`) con tokens de componente (`Button/*` 16, `Chip/*` 16). A medida que entren Input, Tag, NavBar, etc., la colección se vuelve inmanejable y se pierde la regla "un cambio de marca toca sólo Semantic".

**Propuesta:** arquitectura de tres niveles

```
Primitives  →  Semantic  →  Component
color/gold/500   Interactive/active   Button/primary-bg
```

`Component` sólo puede apuntar a `Semantic`, nunca a `Primitives`. Ejemplo: `Button/primary-bg` y `Button/secondary-bg` apuntan directo a primitivos (`gold/500`, `white/default`) en lugar de a `Surface/brand` y `Surface/default`.

### S-02 · Tokens duplicados — ✅ Resuelto en Figma (2026-10-15)

En la revisión del 2026-10-15 el equipo eliminó `Background/01…06`, `Layer/01…06`, `Layer/inverse`, `Layer/brand` y `Surface/default-bg`. Queda una sola familia de superficies, `Surface/*` (`default`, `subtle`, `muted`, `strong`, `inverse`, `brand`). La propuesta original era quedarse con `Layer/*`; el equipo eligió `Surface/*`, que cumple el mismo objetivo.

| Antes | Ahora |
|---|---|
| `Background/01`, `Layer/01` | `Surface/default` |
| `Background/02`, `Layer/02` | `Surface/subtle` |
| `Background/03`, `Layer/03` | `Surface/muted` |
| `Background/04`, `Layer/04` (`black/200`) | `Surface/strong` (mismo valor, otro uso declarado: Gamification Bar) |
| `Background/05`, `Layer/05` (`black/700`) | **Sin reemplazo.** Si algún componente lo usaba para overlays, hay que decidir entre `Surface/inverse` o un token de overlay (ver F-05) |
| `Background/06`, `Layer/06`, `Layer/inverse` | `Surface/inverse` |
| `Layer/brand` | `Surface/brand` |

Los alias que siguen compartiendo valor (`Feedback/warning` = `Interactive/active` = `Surface/brand` = `gold/500`) tienen intenciones distintas y se mantienen. **Pendiente menor:** las descripciones de las variantes `-on-black` todavía citan `Surface/inverse` (ver H-01).

### S-03 · Scopes — 🟡 Parcial (2026-10-15)

**Resuelto:** 120 de 126 semánticos tienen scopes específicos (`TEXT_FILL`, `FRAME_FILL`+`SHAPE_FILL`, `STROKE_COLOR`, etc.) y los primitivos están ocultos del publishing.

**Pendiente:**

| Token | Scope actual | Propuesta |
|---|---|---|
| `Feedback/error`, `Feedback/success`, `Feedback/warning`, `Feedback/info` | `ALL_SCOPES` | `SHAPE_FILL`, `STROKE_COLOR`, `FRAME_FILL` |
| `Feature/missions`, `Feature/accessibility` | `ALL_SCOPES` | Según uso: `TEXT_FILL` o `SHAPE_FILL` |
| `Valor/radius/*` | `CORNER_RADIUS`, `FONT_VARIATIONS` | Sólo `CORNER_RADIUS` |
| `color/violet/*` (primitivos) | `ALL_SCOPES` | Ninguno, como el resto de los primitivos |

### S-04 · `codeSyntax` — 🟡 Parcial (2026-10-15)

**Resuelto:** los 86 semánticos de color tienen `codeSyntax.ANDROID` con un formato único: `theme.color.<grupo>.<camelCase>` (p. ej. `theme.color.button.primaryBg`).

**Pendiente:**
- `WEB` e `iOS` vacíos en todos. Propuesta: `var(--aw-button-primary-bg)` y `AWColor.buttonPrimaryBg`, alineados con las CSS vars que ya documenta [`foundations/color.md`](./foundations/color.md).
- Los 40 semánticos numéricos y de tipografía (`Font/*`, `Valor/radius/*`, `Valor/spacing/*`) no tienen `codeSyntax` en ninguna plataforma.

Lo puedo aplicar vía MCP una vez aprobado.

### S-05 · Convención de nombres — 🟡 Parcial (2026-10-15)

**Resuelto en Figma:**

| Problema | Antes | Ahora |
|---|---|---|
| Sufijo `_` para marcar base | `gold/500_`, `red/600_`, `black/800_` | `gold/500`, `red/600`, `black/800` |
| Espacios y mayúsculas | `blue Dark`, `black/800_ alpha` | `blue`, `black/800-alpha` |
| Redundancia | `Text/Text_primary` | `Text/primary` |
| Capitalización | `Icon/primary`, `Highlight/new` | `Icon/primary`, `Highlight/new` |
| Typo | `Feacture/Misiones` | `Feature/missions` |
| Orden estado/propiedad | `Button/primary-pressed`, `Chip/bg-selected` | `Button/primary-bg-pressed`, `Chip/bg-selected` (propiedad → estado) |

**Pendiente:**

| Problema | Ejemplos | Propuesta |
|---|---|---|
| Idioma mezclado | `Valor/spacing`, `Valor/radius` | `Spacing/*`, `Radius/*` |
| Escala de radius | `XS, S, M, L, XXL, XXXL` (sin XL) | `xs, s, m, l, xl, 2xl, full` (ver F-03) |
| Estados | `focused` en Button y Chip, pero el resto del sistema no tiene `hover` | Definir la lista cerrada de estados (ver S-09) |

### S-06 · Escala `violet` — 🟡 Parcial (2026-10-15)

- ✅ `violet/100` ahora es `#e7d7fe` (antes igual a `violet/200`).
- ❌ `violet/900` = `#001742` sigue siendo un **azul marino**; `violet/800` `#1b0141` sí es violeta. Propuesta: ≈ `#10002e`.
- ❌ Sin descripciones y con `ALL_SCOPES` (ver S-03).

Hoy sólo la usa `Highlight/new` (`violet/400`).

### S-07 · Primitivos sueltos — 🟡 Parcial (2026-10-15)

- ✅ `Primary/Color` eliminado. `Button/secondary-bg` ahora apunta a `color/white/default`.
- ❌ `Number` = `0` sigue en Primitives: duplica `Valor/0`, sin uso. → Borrar.

### S-08 · Escalas de color desparejas

| Familia | 50 | 100–900 | 950 | alpha |
|---|---|---|---|---|
| gold, red, black | ✅ | ✅ | — | ✅ |
| blue | — | ✅ | ✅ | ✅ |
| green | — | ✅ | — | ✅ (800) |
| lime, orange, fuchsia, purple, violet | — | ✅ | — | — |

**Propuesta:** normalizar todas a `50–900`, y definir alphas como tokens de opacidad (ver F-05) en lugar de un alpha por familia, que hoy existe sobre pasos distintos (`red/600`, `gold/500`, `black/800`, `green/800`, `blue/700`).

### S-09 · Estados sin jerarquía visual

| Componente | Problema |
|---|---|
| Button secondary | `secondary-bg-focused` = `secondary-bg-pressed` = `secondary-bg-disabled` = `black/50` (tres estados iguales) |
| Button secondary | `stroke-disabled` (`black/500`) es **más oscuro** que `stroke` enabled (`black/400`): disabled parece más activo |
| Chip | `stroke-focused` = `stroke` = `stroke-pressed` = `black/400` |
| Button primary | `primary-bg-pressed` (`gold/400`) es **más claro** que enabled; la convención (y Material/HIG) es oscurecer al presionar |

**Propuesta:** escala de estados consistente para todo componente: enabled → hover (web) +1 paso → pressed +2 pasos → focus = enabled + `Focus/ring` → disabled = superficie `Surface/subtle` + texto `Text/disabled` + borde `Border/subtle`.

### S-10 · Estilos con valores hardcodeados

- **Sombras:** color `#292929` + opacidad fija; no enlazado a `color/black/800`.
- **Grilla de columnas:** gutter y margin = 16 escritos a mano (sólo la baseline 8px está enlazada a `Valor/8`).
- **Gradientes Loyalty:** 7 stops con hex sueltos; `#910063` y `#e8720a` no existen en ningún primitivo. `Loyalty BA` es `Loyalty AB` invertido.

**Propuesta:** enlazar color de sombra y gutter/margin a variables; agregar `color/loyalty/start` y `color/loyalty/end` a primitivos y reducir el gradiente a 3 stops (start · `red/600` · end) con dirección como parámetro.

---

## 🟡 P2 — Foundations faltantes

### F-01 · Breakpoints y grillas multiplataforma

Sólo existe `Aw_Layout/col` (4 columnas). ArchWay gobierna App, Web eCommerce, Dashboard y Kiosco ADK.

**Propuesta inicial (a validar con el equipo):**

| Breakpoint | Rango | Columnas | Margen | Gutter | Contexto |
|---|---|---|---|---|---|
| `sm` | 0–599 | 4 | 16 | 16 | App mobile |
| `md` | 600–1023 | 8 | 24 | 16 | Tablet, web mobile landscape |
| `lg` | 1024–1439 | 12 | 32 | 24 | Web eCommerce, Dashboard |
| `xl` | ≥ 1440 | 12 (max 1280) | auto | 24 | Desktop amplio |
| `kiosk` | 1080×1920 vertical | 6 | 48 | 24 | ADK, uso a distancia de brazo |

En Figma: colección `Layout` con un modo por breakpoint (margin, gutter, columns como variables) para que la grilla cambie con el modo del frame.

### F-02 · Tipografía para Kiosco y Desktop

La escala (12–36) es mobile. En kiosco (pantalla de 32"+, usuario a ~60 cm) un `Body Large` de 16px queda chico; en desktop el `Display Large` de 36px queda débil.

**Propuesta:** colección `Typography` con modos `mobile` / `desktop` / `kiosk` sobre los mismos tokens `Font/size/*` y `Font/line-height/*` (p. ej. kiosk ≈ ×1.5). Los text styles no cambian; cambian los valores por modo.

Además:
- `Label Medium` y `Label Small` tienen interlineado 16 sobre 14px (1.14). Funciona en una línea, pero si el label rompe en dos (traducciones PT/ES) las líneas se pisan visualmente. Proponer 20 para `Label Medium`.
- Los estilos `Italic` para legales reducen legibilidad en tamaño 12; considerar `Body Small` regular + color `Text/secondary` para disclaimers largos.

### F-03 · Radius

- Falta `XL` (24) entre `L` (16) y `XXL` (32).
- `XXXL` = 160 para píldora depende del alto del componente; en código se resuelve con `full` (9999 / `Capsule()` / 50%).

### F-04 · Spacing

- `Valor/12` existe y lo usa `radius/M`, pero no hay `spacing/12`. Es un valor muy usado (padding de cards compactas, gap de listas); hoy se resuelve con valores sueltos.
- Spacing tiene scope `STROKE_FLOAT`: se usan valores de espaciado (0, 4, 8…) como grosor de borde. Proponer tokens `Border/width/{thin=1, default=1.5|2, thick=2|3}`.
- Faltan `spacing/2` (offset de focus ring, ajustes ópticos) y `spacing/96`/`128` (existen como primitivo, sin semántico).

### F-05 · Motion como variables; Opacity, Z-index, Border width

> *Corregido:* la primera versión de este punto decía que Motion no existía. Motion **sí está definido** en la página *Motion* de Figma (4 duraciones, 3 curvas, patrones y reglas) y ya está documentado en [`foundations/motion.md`](./foundations/motion.md). Lo pendiente es que vive como texto y no como variables.

Opacity, Z-index y Border width no existen en la librería. Son necesarios antes de documentar componentes interactivos (snackbar, bottom sheet, tooltip, modal).

| Foundation | Mínimo propuesto |
|---|---|
| **Motion** | Pasar a una colección de variables `Motion` los valores ya definidos (`motion-duration-fast/moderate/slow/expressive`, curvas Standard / Entrance / Exit) para exportarlos como el resto de los tokens |
| **Opacity** | `disabled 0.38`, `overlay 0.30` (reemplaza los `*-alpha`), `scrim 0.50` |
| **Z-index** | `base 0`, `dropdown 100`, `sticky 200`, `overlay 300`, `modal 400`, `toast 500`, `tooltip 600` |
| **Border width** | ver F-04 |

**Fundamento:** Doherty Threshold (feedback < 400ms) y WCAG 2.3.3 (animaciones desactivables).

### F-06 · Iconografía — 🟡 Parcial (2026-10-16)

La librería de Foundations no documenta íconos, pero **existen en un archivo propio de Global**: [Iconography](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=9-11), con 216 íconos, 5 tamaños (16–56) y especificaciones de stroke, radio y fry tip. Quedó documentada en [`../Iconografia/`](../Iconografia/README.md), con su manual de creación y su propio audit.

**Pendiente:**
- Tokens `Icon/size/{xs=16, s=24, m=32, l=48, xl=56}` en ArchWay, alineados a los tamaños de la librería.
- Enlazar el color de los íconos a `Icon/*` ([I-S01](../Iconografia/audit.md#i-s01--color-por-estilos-de-otra-librería)).
- Regla de área táctil: 44 en mobile y 56 en kiosco, independiente del tamaño del ícono.

### F-07 · Dark mode

Semantic tiene un único modo `Light`. Las variantes `-on-black` y `Link/inverse-*` son parches por contexto. Si dark mode está en el roadmap de la App, conviene agregarlo como **segundo modo de la colección Semantic** ahora, cuando hay pocos componentes, en vez de seguir sumando variantes `-on-black`. Si no está en el roadmap, documentarlo explícitamente como fuera de alcance.

---

## ⚪ P3 — Higiene

### H-01 · Typos y descripciones — 🟡 Parcial (2026-10-15)

**Resuelto:** el typo `Feacture` en el nombre del grupo.

**Pendiente** (texto tal cual está en Figma):

| Token / estilo | Problema |
|---|---|
| `Valor/radius/XXL` | "Uso en headerer" |
| `Valor/radius/L` | "…modales de pantalla completa.e" |
| `Valor/radius/XXXL` | "pildora" → "píldora" |
| `Valor/spacing/40` | "Uso esporadico" → "esporádico", y sin uso concreto |
| `Button/primary-bg-focused` | Termina en `&quot;` |
| `Link/inverse-visited` | Empieza con " sobre fondos oscuros…" (falta "Link") |
| `Link/inverse-pressed` | "mientras se toca" (el resto usa "pressed") |
| `Feedback/*-on-black` | Citan `Layer/06`, que ya no existe → `Surface/inverse` |
| `Border/default` y `Border/soft` | Las dos dicen "Input enabled": hay que elegir una (ver A-04) |
| `Link/default` | "Texto que navega a otra pantalla; si ejecuta una acción." (frase incompleta: ¿link vs botón?) |
| `Feedback/warning`, `Feedback/warning-surface` | Descripción entre paréntesis sin uso concreto |
| `Shallow/M.Elev-2` y `Shallow/H.Elev-3` | Misma descripción: no queda claro cuándo usar cada nivel |
| `Deep/L`, `Deep/M`, `Deep/H` | Las tres comparten descripción |
| `color/violet/*` | Sin descripciones |

---|---|
| `Feacture/*` | Typo en el nombre del grupo → `Feature` |
| `Valor/radius/XXL` | "Uso en headerer" |
| `Valor/radius/L` | "…modales de pantalla completa.e" |
| `Button/primary-bg-focused` | Termina en `&quot;` |
| `Link/default` | "Texto que navega a otra pantalla; si ejecuta una acción." (frase incompleta: ¿link vs botón?) |
| `Feedback/warning`, `Feedback/warning-surface` | Descripción entre paréntesis sin uso concreto |
| `Shallow/M.Elev-2` y `Shallow/H.Elev-3` | Misma descripción: no queda claro cuándo usar cada nivel |
| `Deep/L`, `Deep/M`, `Deep/H` | Las tres comparten descripción |
| `color/violet/*` | Sin descripciones |
| `Border/default`, `Feedback/*-surface` | Descripciones con espacios iniciales / saltos de línea |

---

## Próximos pasos sugeridos

1. Revisar este tablero y marcar cada ID como **Aprobado / Rechazado / Ajustar**.
2. Aplico en Figma vía MCP los ítems aprobados (empezando por P0, que son cambios de alias y descripciones, de bajo riesgo).
3. Regenero los `.md` y `tokens/archway.tokens.json` desde Figma.
4. Con Foundations estables: Storybook (Vue 3 + Vite) leyendo `archway.tokens.json`.
