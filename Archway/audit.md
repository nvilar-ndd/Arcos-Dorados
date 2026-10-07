# Audit — ArchWay Foundations

> **Archivo auditado:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) · **Fecha:** 2026-10-07 · **Método:** extracción de variables y estilos vía Figma MCP + cálculo de contraste WCAG 2.1 sobre valores resueltos.
>
> **Flujo:** cada hallazgo queda `Pendiente` hasta que el equipo lo **aprueba** o lo **rechaza**. Sólo lo aprobado se aplica en Figma (SSOT) y, después, se regenera la documentación. Nada de este archivo está aplicado todavía.

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
| A-01 | `Text_on-color` / `Icon/on-color` (blanco) descritos para usar sobre dorado: 1.69:1 | 🔴 P0 | Pendiente |
| A-02 | Variantes `-on-black` no pasan AA para texto | 🔴 P0 | Pendiente |
| A-03 | `Interactive/active-text-subtle` sobre `active-subtle`: 2.16:1 | 🔴 P0 | Pendiente |
| A-04 | `Border/soft` en inputs: 1.38:1 (WCAG 1.4.11) | 🔴 P0 | Pendiente |
| A-05 | No hay token de focus ring; focus = cambio de fondo casi imperceptible | 🔴 P0 | Pendiente |
| A-06 | Dorado como único indicador de estado sobre blanco: 1.69:1 | 🔴 P0 | Pendiente |
| S-01 | Tokens de componente (`Button/*`, `Chip/*`) mezclados en Semantic | 🟠 P1 | Pendiente |
| S-02 | Duplicados: `Background/0x` = `Layer/0x`, `Surface/default` = `Layer/01` | 🟠 P1 | Pendiente |
| S-03 | Todos los semánticos tienen scope `ALL_SCOPES` | 🟠 P1 | Pendiente |
| S-04 | `codeSyntax` vacío en 134 de 138 semánticos | 🟠 P1 | Pendiente |
| S-05 | Naming inconsistente (sufijos `_`, espacios, mayúsculas, idiomas) | 🟠 P1 | Pendiente |
| S-06 | Escala `violet` rota (100 = 200; 900 es azul) y sin descripciones | 🟠 P1 | Pendiente |
| S-07 | `Primary/Color` = `#FFFFFF` y `Number` = 0 sueltos en Primitives | 🟠 P1 | Pendiente |
| S-08 | Escalas de color con pasos desparejos (50 y 950 sólo en algunas) | 🟠 P1 | Pendiente |
| S-09 | Estados de botón/chip sin jerarquía (focus = pressed; disabled más fuerte que enabled) | 🟠 P1 | Pendiente |
| S-10 | Sombras, grilla y gradientes no enlazados a variables | 🟠 P1 | Pendiente |
| F-01 | Sin breakpoints ni grillas para Web, Dashboard y Kiosco | 🟡 P2 | Pendiente |
| F-02 | Escala tipográfica sólo mobile (no contempla Kiosco ni Desktop) | 🟡 P2 | Pendiente |
| F-03 | Radius: falta `XL` y `full` | 🟡 P2 | Pendiente |
| F-04 | Spacing: falta `12` semántico; spacing usado para stroke | 🟡 P2 | Pendiente |
| F-05 | Motion sólo como texto (no variables); sin Opacity, Z-index, Border width | 🟡 P2 | Pendiente |
| F-06 | Sin Iconography documentada en la librería | 🟡 P2 | Pendiente |
| F-07 | Sin modo Dark | 🟡 P2 | Pendiente |
| H-01 | Typos y descripciones a corregir | ⚪ P3 | Pendiente |

---

## 🔴 P0 — Accesibilidad (WCAG 2.1 AA)

### A-01 · Blanco sobre dorado está documentado como uso válido

**Evidencia**

| Token | Descripción en Figma | Par real | Ratio |
|---|---|---|---|
| `Text/Text_on-color` (`#ffffff`) | "Texto sobre fondos de color — **botón primary, chip selected**, tooltip." | sobre `Button/primary` `#ffbc0d` | **1.69:1** ❌ |
| `Icon/on-color` (`#ffffff`) | "Ícono sobre fondos de color — **botón primary, chip selected**." | sobre `Chip/selected-bg` `#ffbc0d` | **1.69:1** ❌ |

El sistema ya resuelve bien el caso con `Button/text-enabled` y `Chip/selected-text` (`#292929` sobre dorado = 8.63:1 ✅), pero la descripción de `on-color` contradice esa decisión y lleva a un uso ilegible.

**Propuesta**
1. Reescribir las descripciones: `on-color` = "texto/ícono sobre fondos **oscuros o saturados** (`Layer/06`, `Trust/default`, `highlight/new`, `Feedback/success`, `Feedback/error`)". Todos esos pares pasan (≥ 5:1).
2. Crear `Text/Text_on-brand` e `Icon/on-brand` → `color/black/800_` para todo lo que se apoye sobre `Layer/brand`, `Button/primary` y `Chip/selected-bg`.

**Fundamento:** WCAG 1.4.3 y 1.4.11. Ley de Jakob: el usuario de McDonald's ya espera texto oscuro sobre amarillo (packaging, kiosco).

### A-02 · Las variantes `-on-black` no cumplen lo que prometen

Las descripciones dicen "ajustada para pasar contraste sobre fondo negro (Layer/06)", pero:

| Token actual | Hex | Sobre `Layer/06` `#292929` | Propuesta | Ratio propuesto |
|---|---|---|---|---|
| `Feedback/error-on-black` → `red/400` | `#ff4248` | **4.24:1** ⚠️ | → `color/red/300` `#ff757a` | **5.60:1** ✅ |
| `Feedback/success-on-black` → `green/700` | `#2b8c4d` | **3.44:1** ⚠️ | → `color/green/500` `#53ca7d` | **7.01:1** ✅ |
| `Feedback/info-on-black` → `blue Dark/500` | `#4584e8` | **3.96:1** ⚠️ | → `color/blue Dark/400` `#72a2ee` | **5.62:1** ✅ |

Las actuales sólo pasan como ícono/borde (3:1) o texto grande (≥ 18.66px bold / 24px). Si se usan para el texto de un snackbar o un tooltip, fallan.

### A-03 · `Interactive/active-text-subtle` es ilegible sobre `Interactive/active-subtle`

- `active-text-subtle` = `gold/700` `#a87a00` sobre `active-subtle` = `black/200` `#c2c2c2` → **2.16:1** ❌.
- Además, `active-subtle` se describe como "versión suave del color activo", pero es **gris**, no dorado.

**Propuesta:** `Interactive/active-subtle` → `color/gold/200` `#ffe7a8` y `Interactive/active-text-subtle` → `color/gold/800` `#755500` → **5.64:1** ✅. Mantiene la familia dorada y pasa AA.

### A-04 · `Border/soft` no delimita el input

`Border/soft` (`black/100` `#dbdbdb`) se describe para "Input Text Field enabled". Sobre blanco da **1.38:1**: el usuario no percibe el límite del campo (WCAG 1.4.11 pide ≥ 3:1 para el borde que identifica un control).

**Propuesta:** usar `Border/default` (`#8f8f8f`, 3.23:1 ✅) para el borde del input enabled y reservar `Border/soft` para divisores decorativos. Alternativa: mantener `soft` pero darle al input fondo `Layer/02` (el borde deja de ser el único indicador del área).

**Fundamento:** Ley de Fitts (el área tocable tiene que percibirse) y Ley de región común.

### A-05 · No existe un indicador de foco

- `Button/primary-focus` = `gold/600`: sólo oscurece el fondo; contra el enabled la diferencia es mínima.
- `Button/secondary-focus` = `black/50` (igual a pressed); `Chip/focused-stroke` = `black/400` (igual a enabled).
- No hay ningún token de anillo de foco.

En Web, Dashboard y en Kiosco con lector de pantalla o teclado (ADK con navegación por hardware) esto hace imposible saber dónde está el foco (WCAG 2.4.7).

**Propuesta:** nueva familia `Focus/*`:

| Token | Valor | Uso |
|---|---|---|
| `Focus/ring` | `color/blue Dark/700` `#1652b1` (7.30:1 sobre blanco, 4.33:1 sobre dorado — ambos ≥ 3:1) | Anillo de 2px por fuera del componente |
| `Focus/ring-inverse` | `color/white/default` | Sobre `Layer/06` y `Layer/brand` oscuro |
| `Focus/ring-offset` | `Valor/spacing/2` *(nuevo)* o 2px | Separación entre componente y anillo |

El cambio de fondo actual puede quedar como refuerzo, pero el anillo es el indicador.

### A-06 · Dorado sobre blanco como único indicador de estado

`Interactive/active` (switch ON, toggle, chip selected) y `Feedback/warning` = `#ffbc0d` sobre `Layer/01` = **1.69:1** ❌ como componente de UI (WCAG 1.4.11, 3:1).

**Propuesta:** el estado ON nunca se comunica sólo con el relleno dorado; se requiere un segundo indicador: borde `Border/strong`, thumb/ícono `Icon/Primary` o un check. Para `Feedback/warning` en íconos sueltos sobre blanco, crear `Feedback/warning-icon` → `color/gold/800` (6.87:1 ✅).

---

## 🟠 P1 — Estructura y consistencia

### S-01 · Separar tokens de componente en una tercera colección

Hoy `Semantic` mezcla intención (`Text`, `Layer`, `Feedback`) con tokens de componente (`Button/*` 16, `Chip/*` 14). A medida que entren Input, Tag, NavBar, etc., la colección se vuelve inmanejable y se pierde la regla "un cambio de marca toca sólo Semantic".

**Propuesta:** arquitectura de tres niveles

```
Primitives  →  Semantic  →  Component
color/gold/500_   Interactive/active   Button/primary-bg
```

`Component` sólo puede apuntar a `Semantic`, nunca a `Primitives`. Ejemplo: `Button/secondary` hoy apunta a `Primary/Color` (primitivo suelto) y `Button/primary` a `gold/500_` directamente.

### S-02 · Tokens duplicados

| Grupo A | Grupo B | Valor |
|---|---|---|
| `Background/01…06` | `Layer/01…06` | idénticos 1:1 |
| `Surface/default` | `Layer/01` | `white/default` |
| `Surface/subtle` | `Layer/02` | `black/50` |
| `Surface/muted` | `Layer/03` | `black/100` |
| `Layer/inverse` | `Layer/06` | `black/800_` |
| `Feedback/warning` | `Interactive/active` | `gold/500_` |

**Propuesta:** quedarse con una sola familia de superficies (`Layer/*` + `Layer/inverse` + `Layer/brand`), deprecar `Background/*` y `Surface/*` con un ciclo: marcar como deprecated en la descripción → migrar componentes → borrar. Ley de Hick: menos opciones equivalentes = menos decisiones erróneas para el diseñador.

### S-03 · Scopes

Los 98 semánticos de color tienen `ALL_SCOPES`: `Text/*` aparece en el picker de fills de frames y `Layer/*` en el de texto. Los radius tienen además `FONT_VARIATIONS`; violet tiene `ALL_SCOPES` en primitivos.

**Propuesta:**

| Grupo | Scopes |
|---|---|
| `Text/*`, `Link/*`, `*-text` | `TEXT_FILL` |
| `Layer/*`, `Surface/*`, `Background/*`, `*-bg`, `*-surface` | `FRAME_FILL`, `SHAPE_FILL` |
| `Border/*`, `*-stroke` | `STROKE_COLOR` |
| `Icon/*` | `SHAPE_FILL`, `STROKE_COLOR` |
| `Valor/radius/*` | `CORNER_RADIUS` |
| Primitivos | ninguno (ocultos del picker; sólo se referencian) |

### S-04 · `codeSyntax` vacío

Sólo 4 de 138 semánticos tienen `codeSyntax.WEB` y con formatos distintos (`Color/text/primary`, `Feedback/info-on-black`, `Button/primary-pressed`). Sin esto, Dev Mode muestra nombres de Figma y cada plataforma inventa los suyos.

**Propuesta:** completar `codeSyntax` para WEB / iOS / ANDROID con la convención de las CSS vars documentadas (`--aw-text-primary`, `AWColor.textPrimary`, `AwTheme.colors.textPrimary`). Lo puedo aplicar vía MCP una vez aprobado.

### S-05 · Convención de nombres

| Problema | Ejemplos | Propuesta |
|---|---|---|
| Sufijo `_` para marcar base | `gold/500_`, `red/600_`, `black/800_` | Quitar el sufijo; marcar el base en la descripción. El `_` se filtra a código. |
| Espacios y mayúsculas | `blue Dark`, `black/800_ alpha` | `blue-dark`, `black/800-alpha` |
| Capitalización mixta | `Icon/Primary` vs `Icon/gray`; `highlight/new` vs `Feedback/*` | Grupos en PascalCase, hojas en kebab-case |
| Redundancia | `Text/Text_primary` | `Text/primary` |
| Idioma mezclado | `Valor/spacing`, `Valor/radius` | `Dimension/*`, `Spacing/*`, `Radius/*` |
| Typo | `Feacture/*` | `Feature/*` |
| Escala de radius | `XS, S, M, L, XXL, XXXL` (sin XL) | `xs, s, m, l, xl, 2xl, full` |

Renombrar variables en Figma **no rompe** las instancias (el ID se conserva), así que el costo es bajo si se hace antes de que los componentes de Core consuman la librería.

### S-06 · Escala `violet`

- `violet/100` y `violet/200` son el mismo color (`#c8a5fe`).
- `violet/900` = `#001742` es un **azul marino**, no un violeta; `violet/800` `#1b0141` sí es violeta.
- Sin descripciones y con `ALL_SCOPES` (el resto de primitivos no tiene scope).

**Propuesta:** regenerar 100 (≈ `#ece2ff`) y 900 (≈ `#10002e`) siguiendo la curva de luminancia de la familia, completar descripciones y quitar scopes. Hoy sólo la usa `highlight/new` (`violet/400`).

### S-07 · Primitivos sueltos

- `Primary/Color` = `#ffffff`: el nombre sugiere el color primario de marca pero es blanco. Lo usa `Button/secondary`. → Reemplazar por `color/white/default` y borrar.
- `Number` = `0`: duplica `Valor/0`, sin uso. → Borrar.

### S-08 · Escalas de color desparejas

| Familia | 50 | 100–900 | 950 | alpha |
|---|---|---|---|---|
| gold, red, black | ✅ | ✅ | — | ✅ |
| blue Dark | — | ✅ | ✅ | ✅ |
| green | — | ✅ | — | ✅ (800) |
| lime, orange, fuchsia, purple, violet | — | ✅ | — | — |

**Propuesta:** normalizar todas a `50–900`, y definir alphas como tokens de opacidad (ver F-05) en lugar de un alpha por familia, que hoy existe sobre pasos distintos (`red/600`, `gold/500`, `black/800`, `green/800`, `blue/700`).

### S-09 · Estados sin jerarquía visual

| Componente | Problema |
|---|---|
| Button secondary | `secondary-focus` = `secondary-pressed` = `secondary-disabled` = `black/50` (tres estados iguales) |
| Button secondary | `stroke-disabled` (`black/500`) es **más oscuro** que `stroke` enabled (`black/400`): disabled parece más activo |
| Chip | `focused-stroke` = `enabled-stroke` = `pressed-stroke` = `black/400` |
| Button primary | `primary-pressed` (`gold/400`) es **más claro** que enabled; la convención (y Material/HIG) es oscurecer al presionar |

**Propuesta:** escala de estados consistente para todo componente: enabled → hover (web) +1 paso → pressed +2 pasos → focus = enabled + `Focus/ring` → disabled = superficie `Layer/02` + texto `Text_disabled` + borde `Border/subtle`.

### S-10 · Estilos con valores hardcodeados

- **Sombras:** color `#292929` + opacidad fija; no enlazado a `color/black/800_`.
- **Grilla de columnas:** gutter y margin = 16 escritos a mano (sólo la baseline 8px está enlazada a `Valor/8`).
- **Gradientes Loyalty:** 7 stops con hex sueltos; `#910063` y `#e8720a` no existen en ningún primitivo. `Loyalty BA` es `Loyalty AB` invertido.

**Propuesta:** enlazar color de sombra y gutter/margin a variables; agregar `color/loyalty/start` y `color/loyalty/end` a primitivos y reducir el gradiente a 3 stops (start · `red/600_` · end) con dirección como parámetro.

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
- Los estilos `Italic` para legales reducen legibilidad en tamaño 12; considerar `Body Small` regular + color `Text_secondary` para disclaimers largos.

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

### F-06 · Iconografía

El estándar es el set de íconos McDonald's (no emojis como íconos de sistema), pero la librería de Foundations no documenta tamaños, grid de ícono ni stroke.

**Propuesta:** `iconography.md` + tokens `Icon/size/{s=16, m=24, l=32, xl=48}`, keyline grid 24, área táctil mínima 48, y regla de color: sólo tokens `Icon/*`.

### F-07 · Dark mode

Semantic tiene un único modo `Light`. Las variantes `-on-black` y `Link/inverse-*` son parches por contexto. Si dark mode está en el roadmap de la App, conviene agregarlo como **segundo modo de la colección Semantic** ahora, cuando hay pocos componentes, en vez de seguir sumando variantes `-on-black`. Si no está en el roadmap, documentarlo explícitamente como fuera de alcance.

---

## ⚪ P3 — Higiene

### H-01 · Typos y descripciones

| Token / estilo | Problema |
|---|---|
| `Feacture/*` | Typo en el nombre del grupo → `Feature` |
| `Valor/radius/XXL` | "Uso en headerer" |
| `Valor/radius/L` | "…modales de pantalla completa.e" |
| `Button/primary-focus` | Termina en `&quot;` |
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
