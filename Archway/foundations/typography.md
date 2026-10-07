# Tipografía

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — 20 estilos de texto locales, todos con propiedades enlazadas a variables `Font/*` de la colección **Semantic**.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

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

| Estilo Figma | Tamaño / Interlineado (px) | Peso | Tracking | Variables enlazadas | Uso |
|---|---|---|---|---|---|
| `Display/Display Large Bold` | 36 / 44 | Bold | 0px | `Font/size/4xl` · `Font/line-height/4xl` · `Font/letter-spacing/l` | Títulos de impacto. Uso en hero banners y pantallas promocionales. |
| `Display/Display Medium Bold` | 30 / 36 | Bold | 0px | `Font/size/3xl` · `Font/line-height/3xl` · `Font/letter-spacing/l` | Títulos grandes. Uso en pantallas de bienvenida y onboarding. |
| `Heading/Heading Large Bold` | 24 / 32 | Bold | 0px | `Font/size/2xl` · `Font/line-height/2xl` · `Font/letter-spacing/l` | Título principal de pantalla. Jerarquía máxima dentro del contenido. |
| `Heading/Heading Large` | 24 / 32 | Regular | 0px | `Font/size/2xl` · `Font/line-height/2xl` · `Font/letter-spacing/l` | Título principal sin énfasis. Uso en presentaciones y layouts editoriales. |
| `Heading/Heading Medium Bold` | 20 / 28 | Bold | 0px | `Font/size/xl` · `Font/line-height/xl` · `Font/letter-spacing/l` | Título de sección con énfasis. Uso en cards y módulos de contenido. |
| `Heading/Heading Medium` | 20 / 28 | Regular | 0px | `Font/size/xl` · `Font/line-height/xl` · `Font/letter-spacing/l` | Título de sección sin énfasis. Uso en agrupadores y listados. |
| `Heading/Heading Small Bold` | 18 / 24 | Bold | 0px | `Font/size/l` · `Font/line-height/l` · `Font/letter-spacing/l` | Subtítulo con énfasis. Uso en ítems de lista y encabezados de formulario. |
| `Heading/Heading Small` | 18 / 24 | Regular | 0px | `Font/size/l` · `Font/line-height/l` · `Font/letter-spacing/l` | Subtítulo sin énfasis. Uso en etiquetas de sección y navegación. |
| `Text/Body Large Bold` | 16 / 24 | Bold | 0.25px | `Font/size/m` · `Font/line-height/l` · `Font/letter-spacing/m` | Resaltador de texto base. Énfasis dentro de párrafos de 16px. |
| `Text/Body Large` | 16 / 24 | Regular | 0.25px | `Font/size/m` · `Font/line-height/l` · `Font/letter-spacing/m` | Texto de base. Párrafos y descripciones principales. |
| `Text/Body Medium Bold` | 14 / 20 | Bold | 0.25px | `Font/size/s` · `Font/line-height/m` · `Font/letter-spacing/m` | Resaltador de texto de apoyo. Énfasis dentro de descripciones de 14px. |
| `Text/Body Medium` | 14 / 20 | Regular | 0.25px | `Font/size/s` · `Font/line-height/m` · `Font/letter-spacing/m` | Texto de apoyo o descripciones. Uso en subtítulos y textos secundarios. |
| `Text/Body Small` | 12 / 16 | Regular | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Texto legal, términos y condiciones, notas al pie. Puede ocupar varias líneas. |
| `Label/Label Large` | 16 / 20 | Regular | 0.25px | `Font/size/m` · `Font/line-height/m` · `Font/letter-spacing/m` | Etiqueta de acción grande. Uso en botones L y navegación principal. |
| `Label/Label Medium Bold` | 14 / 16 | Bold | 0.25px | `Font/size/s` · `Font/line-height/s` · `Font/letter-spacing/m` | Etiqueta de acción con énfasis. Uso en botones M y estados activos. |
| `Label/Label Medium` | 14 / 16 | Regular | 0.25px | `Font/size/s` · `Font/line-height/s` · `Font/letter-spacing/m` | Etiqueta de acción. Uso en botones M, chips y links. |
| `Label/Label Medium Italic` | 14 / 16 | Italic | 0.25px | `Font/size/s` · `Font/line-height/s` · `Font/letter-spacing/m` | Textos legales, términos y condiciones, aclaraciones de precio, disclaimers. |
| `Label/Label Small Bold` | 12 / 16 | Bold | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Letra pequeña con énfasis. Uso en legales, Tab bar y badges. |
| `Label/Label Small` | 12 / 16 | Regular | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Rótulos de UI de bajo peso. Uso en Tab bar, badges y etiquetas. Una sola línea. |
| `Label/Label Small Italic` | 12 / 16 | Italic | 0.25px | `Font/size/xs` · `Font/line-height/s` · `Font/letter-spacing/m` | Textos legales, términos y condiciones, aclaraciones de precio, disclaimers. |

### Jerarquía

```
Display   36–30  impacto, hero, onboarding        (sólo Bold)
Heading   24–18  títulos de pantalla y sección    (Regular / Bold)
Text      16–12  lectura: párrafos y descripciones (Body)
Label     16–12  acción y UI: botones, chips, tabs, badges
```

- **Text (Body)** se usa para contenido que se lee; **Label** para contenido que se acciona o rotula. Un botón nunca usa `Body`.
- `Body Large` (16/24) es el tamaño base de lectura.
- `Label Small` es de **una sola línea**; si el texto puede romper, usar `Body Small`.

## Lineamientos de accesibilidad

- Tamaño mínimo del sistema: **12px** (`Font/size/xs`). No hay estilos por debajo.
- Los tamaños deben escalar con la preferencia del usuario: **Dynamic Type** en iOS, **sp** en Android y **rem** en web (16px = 1rem).
- WCAG 1.4.12 (Text Spacing): los contenedores no deben cortar texto si el usuario aumenta interlineado/tracking — evitar alturas fijas en componentes con texto.
- Color de texto: sólo tokens `Text/*`, `Link/*` o `*-text` (ver [color.md](./color.md)).

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
