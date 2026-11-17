# Progress · Pagination · Stepper

> **Fuente de la verdad:** [Design Resources CORE › Loading & progress](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2041-3425) · `Progress bar` ([2044:452](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2044-452), 11), `Progress Circle` ([3944:367](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=3944-367), 35), `Pagination` ([4465:1188](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4465-1188), 6) + `Pagination Bullet`, `Progress_stepper` ([4465:1217](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4465-1217), 7) + `Progress_step`.
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Loading & progress*.

## Propósito

| Componente | Qué comunica |
|---|---|
| **Progress bar** (lineal) | Avance de una operación con duración conocida (carga, subida). Label opcional |
| **Progress Circle** | El mismo avance en poco espacio. 5 tamaños |
| **Pagination** | En qué página de un carrusel estás (bullets) |
| **Progress_stepper** | En qué paso de un flujo estás (segmentos) |

## Anatomía y tokens

**Progress bar / Circle**

| Parte | Token | Valor |
|---|---|---|
| Track | `Feedback/info-surface` | `#CDDEF9` |
| Indicador | `Feedback/info` | `#1B67DF` — **3.80:1** sobre el track ✅ |
| Label (bar) | `Label/Label Medium`, `Text/primary` | — |
| Alto / radio (bar) | 8 · `Valor/radius/XS` | — |

| Circle | 16 | 24 | 32 | 48 | 56 |
|---|---|---|---|---|---|
| Uso | Inline / íconos | Listas / badges | Cards / módulos | Secciones | Hero / pantalla completa |

**Pagination / Stepper**

| Pieza | Activo | Inactivo |
|---|---|---|
| Pagination Bullet (16) | `Interactive/active` ⚠️ 1.69:1 | `Surface/muted` |
| Progress_step (56 × 4) | `Interactive/active` ⚠️ (Done) | `Surface/muted` (empty) |

⚠️ El paso activo no llega a 3:1 sobre blanco ([C-A02](../audit.md#c-a02--pagination-y-progress-step-en-dorado)).

## Propiedades

| Componente | Propiedades |
|---|---|
| Progress bar | `Progress` (0 % … 100 % de a 10) · `Show label` |
| Progress Circle | `Phase` (10 · 25 · 40 · 60 · 75 · 90 · 100 %) · `Size` (16 · 24 · 32 · 48 · 56) |
| Pagination | `Bullets` (2 … 6 · skeleton) |
| Progress_stepper | `Step` (1–4) · `Total` (3 · 4) — marcado "Revisar si se utilizan" ([C-S06](../audit.md#c-s06--marcas-pendientes)) |

En código, `Progress` y `Phase` son un número continuo (0–100), no pasos.

## Hallazgos

- `Progress Circle` usa `spacing/200`, variable de Dashboard ([C-T01](../audit.md#c-t01--variables-que-no-existen-en-foundations)).
- La ficha del canvas usa sólo hex; los tokens son los de la tabla ([C-T04](../audit.md#c-t04--documentación-con-nombres-viejos-o-hex)).

## Accesibilidad

- `role="progressbar"` con `aria-valuenow` / `accessibilityValue` ("60 % completado") y label de la acción ("Subiendo archivo").
- Anunciar inicio, avances significativos y fin; no cada punto.
- Animado: respetar `prefers-reduced-motion`; no depender sólo de la animación.
- Pagination / Stepper: anunciar "Paso 2 de 4" / "Página 3 de 5".

## Cambios 2026-11-17 (paridad con Figma)

- Progress circle: grosor = tamaño ÷ 8. Pagination: celdas de 16 con puntos de 10 (activo) y 6. Stepper: gap 8. Progress bar: mínimo 8.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
