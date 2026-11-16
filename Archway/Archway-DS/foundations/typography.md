# Tipografía

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — 20 estilos de texto locales, todos con propiedades enlazadas a variables `Font/*` de la colección **Semantic**.
> **Extraído vía Figma MCP:** 2026-10-07 · **Revisado:** 2026-11-16 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Familia

| Token | Valor | Notas |
|---|---|---|
| `Font/family/speedee` | **Speedee** | Tipografía corporativa de McDonald's. Requiere licencia y distribución de los archivos de fuente a cada plataforma. |
| `Font/weight/regular` | `Regular` | Texto corrido, labels sin énfasis. |
| `Font/weight/bold` | `Bold` | Títulos y énfasis. |
| `Font/weight/italic` | `Italic` | Sólo legales y disclaimers (`Label … Italic`). |

## Escalas

### Tamaño

| Token | px |
|---|---|
| `Font/size/xs` | 12 |
| `Font/size/s` | 14 |
| `Font/size/m` | 16 |
| `Font/size/l` | 18 |
| `Font/size/xl` | 20 |
| `Font/size/2xl` | 24 |
| `Font/size/3xl` | 30 |
| `Font/size/4xl` | 36 |

### Interlineado

| Token | px |
|---|---|
| `Font/line-height/s` | 16 |
| `Font/line-height/m` | 20 |
| `Font/line-height/l` | 24 |
| `Font/line-height/xl` | 28 |
| `Font/line-height/2xl` | 32 |
| `Font/line-height/3xl` | 36 |
| `Font/line-height/4xl` | 44 |

### Tracking

| Token | Valor | Se aplica a |
|---|---|---|
| `Font/letter-spacing/l` | 0 | Display y Heading |
| `Font/letter-spacing/m` | 0.25 px | Body y Label |

## Estilos de texto

| Estilo Figma | Tamaño / Interlineado (px) | Peso | Tracking | Variables enlazadas | Uso en producto | Descripción del estilo |
|---|---|---|---|---|---|---|
| `Display/Display Large Bold` | 36 / 44 | Bold | 0px | `Font/size/4xl` · `Font/line-height/4xl` · `Font/letter-spacing/l` | Grandes promociones | Títulos de impacto. Uso en hero banners y pantallas promocionales. |
| `Display/Display Medium Bold` | 30 / 36 | Bold | 0px | `Font/size/3xl` · `Font/line-height/3xl` · `Font/letter-spacing/l` | Títulos de categorías del menú | Títulos grandes. Uso en pantallas de bienvenida y onboarding. |
| `Heading/Heading Large Bold` | 24 / 32 | Bold | 0px | `Font/size/2xl` · `Font/line-height/2xl` · `Font/letter-spacing/l` | Títulos de pantalla (ej. "Carrito") | Título principal de pantalla. Jerarquía máxima dentro del contenido. |
| `Heading/Heading Large` | 24 / 32 | Regular | 0px | `Font/size/2xl` · `Font/line-height/2xl` · `Font/letter-spacing/l` | Uso en presentaciones | Título principal sin énfasis. Uso en presentaciones y layouts editoriales. |
| `Heading/Heading Medium Bold` | 20 / 28 | Bold | 0px | `Font/size/xl` · `Font/line-height/xl` · `Font/letter-spacing/l` | Títulos de sección o modales | Título de sección con énfasis. Uso en cards y módulos de contenido. |
| `Heading/Heading Medium` | 20 / 28 | Regular | 0px | `Font/size/xl` · `Font/line-height/xl` · `Font/letter-spacing/l` | Títulos de sección o modales | Título de sección sin énfasis. Uso en agrupadores y listados. |
| `Heading/Heading Small Bold` | 18 / 24 | Bold | 0px | `Font/size/l` · `Font/line-height/l` · `Font/letter-spacing/l` | Nombres de productos en cards | Subtítulo con énfasis. Uso en ítems de lista y encabezados de formulario. |
| `Heading/Heading Small` | 18 / 24 | Regular | 0px | `Font/size/l` · `Font/line-height/l` · `Font/letter-spacing/l` | Nombres de productos en cards | Subtítulo sin énfasis. Uso en etiquetas de sección y navegación. |
| `Text/Body Large Bold` | 16 / 24 | Bold | 0.25px | `Font/size/m` · `Font/line-height/l` · `Font/letter-spacing/m` | Texto base | Resaltador de texto base. Énfasis dentro de párrafos de 16px. |
| `Text/Body Large` | 16 / 24 | Regular | 0.25px | `Font/size/m` · `Font/line-height/l` · `Font/letter-spacing/m` | Texto base | Texto de base. Párrafos y descripciones principales. |
| `Text/Body Medium Bold` | 14 / 20 | Bold | 0.25px | `Font/size/s` · `Font/line-height/m` · `Font/letter-spacing/m` | Descripciones | Resaltador de texto de apoyo. Énfasis dentro de descripciones de 14px. |
| `Text/Body Medium` | 14 / 20 | Regular | 0.25px | `Font/size/s` · `Font/line-height/m` · `Font/letter-spacing/m` | Descripciones | Texto de apoyo o descripciones. Uso en subtítulos y textos secundarios. |
| `Text/Body Small` | 12 / 16 | Regular | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Letra pequeña, legales | Texto legal, términos y condiciones, notas al pie. Puede ocupar varias líneas. |
| `Label/Label Large` | 16 / 20 | Regular | 0.25px | `Font/size/m` · `Font/line-height/m` · `Font/letter-spacing/m` | Primary buttons (CTAs) | Etiqueta de acción grande. Uso en botones L y navegación principal. |
| `Label/Label Medium Bold` | 14 / 16 | Bold | 0.25px | `Font/size/s` · `Font/line-height/s` · `Font/letter-spacing/m` | Labels, inputs, tabs | Etiqueta de acción con énfasis. Uso en botones M y estados activos. |
| `Label/Label Medium` | 14 / 16 | Regular | 0.25px | `Font/size/s` · `Font/line-height/s` · `Font/letter-spacing/m` | Labels, inputs, tabs | Etiqueta de acción. Uso en botones M, chips y links. |
| `Label/Label Medium Italic` | 14 / 16 | Italic | 0.25px | `Font/size/s` · `Font/line-height/s` · `Font/letter-spacing/m` | Aclaraciones de precio, disclaimers, legales, TyC | Textos legales, términos y condiciones, aclaraciones de precio, disclaimers. |
| `Label/Label Small Bold` | 12 / 16 | Bold | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Letra pequeña, legales y tab bar | Letra pequeña con énfasis. Uso en legales, Tab bar y badges. |
| `Label/Label Small` | 12 / 16 | Regular | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Letra pequeña, legales y tab bar | Rótulos de UI de bajo peso. Uso en Tab bar, badges y etiquetas. Una sola línea. |
| `Label/Label Small Italic` | 12 / 16 | Italic | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Aclaraciones de precio, disclaimers, legales, TyC | Textos legales, términos y condiciones, aclaraciones de precio, disclaimers. |

### Jerarquía

```
Display   36–30  impacto, hero, onboarding        (sólo Bold)
Heading   24–18  títulos de pantalla y sección    (Regular / Bold)
Text      16–12  lectura: párrafos y descripciones (Body)
Label     16–12  acción y UI: botones, chips, tabs, badges
```

### Regla Body vs Label

- **¿Es un párrafo o texto que se lee?** Descripción, legal, texto de card de varias líneas → `Text/Body`.
- **¿Es el nombre de algo en la interfaz?** Botón, chip, link, tab, badge, tag, una línea → `Label`.
- Ejemplo: la descripción de un producto es `Body Medium`; el texto de un chip de 14 es `Label Medium`.

### Cuándo subir a 16

En una migración 1:1 el texto de 14 queda en 14. Al **rediseñar** una pantalla, evaluá `Body Large` (16/24) como texto base.

### Decoraciones y color

- Subrayado, tachado y color **no son estilos de texto**: los aporta el componente (Link, precio) o un token (`Text/*`, `Feedback/*`).

> Migrando desde el sistema Legacy: ver la [guía de migración tipográfica Legacy → ArchWay](../guides/typography-legacy-migration.md).

## Lineamientos de accesibilidad

- Tamaño mínimo del sistema: **12px** (`Font/size/xs`). No hay estilos por debajo.
- Los tamaños deben escalar con la preferencia del usuario: **Dynamic Type** en iOS, **sp** en Android y **rem** en web (16px = 1rem), con los topes de la tabla siguiente.
- WCAG 1.4.12 (Text Spacing): los contenedores no deben cortar texto si el usuario aumenta interlineado/tracking — evitar alturas fijas en componentes con texto.
- Color de texto: sólo tokens `Text/*`, `Link/*` o `*-text` (ver [color.md](./color.md)).

### Tamaño de letra del sistema

Los estilos crecen cuando la persona agranda la letra en los ajustes del teléfono, **hasta un tope por grupo**: el texto de lectura sigue siendo legible y la UI (tab bar, badges, botones) no se rompe. Acordado con iOS y Android el **16/10/2026** (sección *Tamaño de letra del sistema* del Handoff de la página *Typography*).

| Grupo | Tope iOS | Tope Android | Ejemplo |
|---|---|---|---|
| Display, Heading, Label | +30 % (máximo fuera del modo de accesibilidad) | `fontScale` 1,3 | Label Small: 12 → 16 |
| Body (`Text/Body *`) | El doble | `fontScale` 2,0 | Body Medium: 14 → 28 |

- En el tab bar nativo de iOS, la etiqueta ampliada se muestra al mantener presionado (*Large Content Viewer*), así que el ítem no necesita crecer.
- **Web:** Figma no define tope. Por consistencia, aplicar el mismo criterio con `rem` + `clamp()` (Label hasta 1,3×, Body hasta 2×). Queda como propuesta en [F-08](../audit.md#f-08--tope-de-escalado-en-web).
- Diseñar los contenedores para el tope: alturas mínimas, no fijas, y textos que puedan pasar a dos líneas.

**En código**

```swift
// iOS — Display/Heading/Label topean en el último tamaño fuera de accesibilidad (+30 %)
Text(title).font(.aw(.labelSmall))
  .dynamicTypeSize(...DynamicTypeSize.xxxLarge)
```

```kotlin
// Android — Label/Display/Heading: fontScale máx. 1,3 · Body: 2,0
@Composable
fun cappedSp(base: Float, maxScale: Float): TextUnit {
  val density = LocalDensity.current
  val scale = density.fontScale.coerceAtMost(maxScale)
  return with(density) { (base * scale).dp.toSp() }
}
```

```css
/* Web (propuesta F-08) */
.aw-label-small { font-size: clamp(0.75rem, 0.75rem * var(--aw-user-scale, 1), 0.75rem * 1.3); }
```

### Referencia Material (Android + Web)

La página tiene dos fichas sueltas con la escala de Material 3 en **Roboto** (Body Large 16/24 +0.5 · Body Medium 14/20 +0.25 · Body Small 12/16 +0.4 · Label Large Medium 14/20 +0.1 · Label Medium Medium 12/16 +0.5 · Label Small Medium 11/16 +0.5). **No son estilos ni variables**: se documentan como referencia de comparación. La familia de ArchWay en todas las plataformas sigue siendo Speedee; si la intención es definir un *fallback* Roboto para Android/Web, queda como pregunta en [F-02](../audit.md#f-02--tipografía-para-kiosco-y-desktop).

## Historial en Figma

Resumen del *Change Log — Typography* (autora: Rochi).

| Fecha | Cambio |
|---|---|
| 29/09/2026 | Renombre de Body para alinear con Material: Body Medium → Body Large, Body Small → Body Medium, Body Extra Small → Body Small |
| 16/10/2026 | Topes con el tamaño de letra del sistema (tabla de arriba). Fichas de muestra corregidas para coincidir con los estilos: Heading Medium 20/28 (decía 20/38), Label Medium 14/16 (decía 14/20), Heading Small sin tracking, Label Small Bold con su estilo aplicado. Los 20 text styles no cambiaron |

## Para desarrollo

- Cada estilo = `Font/family` + `Font/size` + `Font/weight` + `Font/line-height` + `Font/letter-spacing`. Se consumen por nombre, nunca con valores hardcodeados.
- Nombres sugeridos en código: `displayLargeBold`, `headingSmall`, `bodySmall`, `labelMediumItalic`.
- **Tracking:** Display/Heading 0 · Text/Label 0.25. SwiftUI `.tracking(0.25)` (pt) · Compose `letterSpacing = 0.25.sp` (sp, no em).
- **Line height:** SwiftUI `lineSpacing = LH − tamaño` (ej. Body Medium 20 − 14 = 6) + padding vertical, con un helper común · Compose `lineHeight` en sp, `LineHeightStyle` centrado y `trim = None`.
- **Decoraciones:** `.underline()` / `.strikethrough()` · `TextDecoration.Underline` / `LineThrough`.

## Uso en código

```css
.heading-large-bold {
  font-family: var(--aw-font-family-speedee);
  font-size: var(--aw-font-size-2xl);        /* 24px → 1.5rem en web */
  line-height: var(--aw-font-line-height-2xl);/* 32px */
  font-weight: 700;
  letter-spacing: var(--aw-font-letter-spacing-l);
}
```
