# Migración tipográfica — Legacy → ArchWay

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — página *Typography*, sección **Equivalencias / handoff** (actualizada en Figma el 25/09/2026).
> **Extraído vía Figma MCP:** 2026-10-07.

Los **24 estilos** del sistema Legacy se migran a los **20 estilos** de ArchWay. La familia no cambia (Speedee); cambian la escala, el interlineado, el tracking y los nombres. Cada estilo Legacy tiene un único reemplazo.

## Resumen

### Qué cambia

- **Tracking:** de −0.15 en todo a **0** en Display/Heading y **+0.25** en Text/Label.
- **Interlineado de párrafos de 14:** de 16 a **20** (Body). Los Label de 14 siguen en 16.
- **Desaparece el tamaño 10.** El piso ahora es **12**.
- **Display baja** de 68/48 a **36/30**. Se elimina el peso Light.
- **Subrayado, tachado y color** dejan de ser estilos: van en el componente.
- Todos los estilos están conectados a variables `Font/*`.

### Qué no cambia

- Familia Speedee y pesos Regular, Bold e Italic.
- Títulos de 24 y 18: equivalencia 1:1.
- Textos de 12: mismo tamaño e interlineado (12/16).

## Equivalencias

Donde dice *según contexto*, aplicar la [regla Body vs Label](#regla-body-vs-label).

| Estilo Legacy | Legacy (pt) | Estilo ArchWay | ArchWay (pt) | Tipo de cambio | Nota |
|---|---|---|---|---|---|
| `Display/Display 01` | 68/80 Bold | Display Large Bold | 36/44 | Cambio de escala | Revisar cada hero |
| `Display/Display 02` | 68/80 Light | Display Large Bold | 36/44 | Fusión | Se elimina el peso Light |
| `Display/Display 03` | 48/54 Bold | Display Large Bold | 36/44 | Fusión | — |
| `Headlines/Headline 01` | 32/36 Bold | Display Medium Bold | 30/36 | Cambio de escala | −2pt, pasa a Display |
| `Headlines/Headline 02` | 24/32 Bold | Heading Large Bold | 24/32 | 1:1 | Sólo cambia el tracking |
| `Headlines/Headline 03` | 24/32 Regular | Heading Large | 24/32 | 1:1 | — |
| `Headlines/Headline 04` | 18/24 Bold | Heading Small Bold | 18/24 | 1:1 | — |
| `Headlines/Headline 05` | 18/24 Regular | Heading Small | 18/24 | 1:1 | — |
| `Body/Large Body 01` | 14/16 Regular | Body Medium (párrafo) · Label Medium (UI) | 14/20 · 14/16 | Según contexto | En párrafos el LH sube a 20 |
| `Body/Large Body 02` | 14/16 Bold | Body Medium Bold (párrafo) · Label Medium Bold (UI) | 14/20 · 14/16 | Según contexto | Igual que Large Body 01 |
| `Body/Small Body 01` | 12/16 Regular | Body Small (legales) · Label Small (UI) | 12/16 | Según contexto | Specs iguales |
| `Body/Small Body 02` | 12/16 Bold | Label Small Bold | 12/16 | 1:1 | — |
| `Links/Large Text Link` | 14/16 Regular | Label Medium | 14/16 | 1:1 | — |
| `Links/Large Text Link (Underlined)` | 14/16 + subrayado | Label Medium + subrayado en componente | 14/16 | Decoración al componente | — |
| `Links/Large Text Link Visited` | 14/16 | Label Medium | 14/16 | Deprecado | Visited es color, no aplica en app |
| `Links/Large Text Link Visited (Underlined)` | 14/16 + subrayado | Label Medium + subrayado en componente | 14/16 | Deprecado | Ídem |
| `Links/Small Text Link` | 12/16 Regular | Label Small | 12/16 | 1:1 | Hay dos estilos con este nombre en Legacy |
| `Links/Small Text Link` (subrayado) | 12/16 + subrayado | Label Small + subrayado en componente | 12/16 | Decoración al componente | Ídem |
| `Utilty/Utility 01` | 10/12 Regular | Label Small | 12/16 | Sube de tamaño | Revisar tab bar y badges |
| `Utilty/Utility 01 Bold` | 10/12 Bold | Label Small Bold | 12/16 | Sube de tamaño | Ídem |
| `Utilty/Utility 02` | 10/12 Italic | Label Small Italic | 12/16 | Sube de tamaño | Legales cortos |
| `Utilty/Error Red Text` | 12/16 Regular | Label Small + `color/feedback/*` | 12/16 | Color al token | Mismo tamaño que el hint del Input |
| `Utilty/Price Discount` | 14/16 + tachado | Label Medium + tachado en componente | 14/16 | Decoración al componente | — |
| `Utilty/Product deleted` | 12/16 + tachado | Label Small + tachado en componente | 12/16 | Decoración al componente | — |

**Nuevos en ArchWay, sin equivalente Legacy:** Heading Medium y Heading Medium Bold (20/28), Body Large y Body Large Bold (16/24), Label Large (16/20) y Label Medium Italic (14/16).

## Para diseño

### Regla Body vs Label

- **¿Es un párrafo o texto que se lee?** Descripción, legal, texto de card de varias líneas → `Text/Body`.
- **¿Es el nombre de algo en la interfaz?** Botón, chip, link, tab, badge, tag, una línea → `Label`.
- Ejemplo: la descripción de un producto es `Body Medium`; el texto de un chip de 14 es `Label Medium`.

### Cómo hacer el swap

1. Seleccioná el texto con el estilo Legacy.
2. Buscá su equivalente en la tabla.
3. Si dice *según contexto*, aplicá la regla Body vs Label.
4. Aplicá el estilo ArchWay desde *Text styles*.
5. Revisá el contenedor: los párrafos de 14 crecen (LH 16 → 20) y los textos de 10 pasan a 12.

### Decoraciones

- **Subrayado:** lo trae el componente Link.
- **Tachado:** lo trae el componente de precio.
- **Color** (error, feedback): tokens `color/text/*` o `color/feedback/*`.

### Cuándo subir a 16

En una migración 1:1 el texto de 14 queda en 14. Al rediseñar una pantalla, evaluá `Body Large` (16/24) como texto base.

## Para desarrollo

- **Tokens:** cada estilo = `Font/family` + `Font/size` + `Font/weight` + `Font/line-height` + `Font/letter-spacing`. Consumir por nombre, nunca valores hardcodeados: si cambia un token, cambian todos los estilos que lo usan.
- **Nombres sugeridos:** `displayLargeBold`, `headingSmall`, `bodySmall`, `labelMediumItalic`.
- **Tracking:** Display/Heading 0 · Text/Label 0.25.
  - SwiftUI: `.tracking(0.25)` en pt.
  - Compose: `letterSpacing = 0.25.sp` (sp, no em).
- **Line height:**
  - SwiftUI: `lineSpacing = LH − tamaño` (ej. Body Medium 20 − 14 = 6) + padding vertical. Usar un helper común.
  - Compose: `lineHeight` en sp, `LineHeightStyle` centrado y `trim = None`.
- **Decoraciones y color:** subrayado y tachado en el componente (`.underline()` / `.strikethrough()` · `TextDecoration.Underline` / `LineThrough`). El color siempre sale de tokens `color/text/*` o `color/feedback/*`.
- **Accesibilidad:** definir si los estilos escalan con Dynamic Type (iOS) y font scale (Android). Los Label de tab bar y badges son los primeros en romperse.

## QA visual

Revisar en cada pantalla migrada; son los lugares donde el cambio de estilo puede romper el layout:

- [ ] Cards y listas con párrafos de 14: crecen en alto por el LH 16 → 20.
- [ ] Tab bar y badges que usaban 10pt: ahora 12, puede no entrar el texto.
- [ ] Hero banners y promociones con Display 68/48: ahora 36, revisar jerarquía.
- [ ] Títulos de 32 (Headline 01): ahora 30.
- [ ] Textos truncados en una línea (chips, botones, tabs): el tracking +0.25 ensancha el texto.
- [ ] Links y precios tachados: la decoración viene del componente.
- [ ] Mensajes de error: el color viene de un token de feedback.
- [ ] iOS y Android: misma altura de línea que en Figma (comparar con overlay).
