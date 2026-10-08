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
- **D-D03:** no hay estilos de sombra, motion ni reglas de radio (la sección "Radius Tokens" está vacía). ArchWay sí los tiene.
- **D-D04:** el contexto *Header* en *Usage and design criteria* no tiene contenido.

## ⚪ P3 — Higiene

`Fuondation` (nombre del archivo), `Spcace Tokens`, `estrech`, `Fuschia`, `Integración de desccuento`, `activoss`, `Priamry/Whiteoff`; nombres de estilos con espacios dobles y mayúsculas mezcladas (`h1-  cms`, `H3 - CMS`, `Label02 -  cms`).
