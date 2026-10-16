# Convergencia — plan para unificar todo en ArchWay

> Todo lo que hay que hacer para que Dashboard, ADK y Legacy terminen consumiendo las foundations de ArchWay. Este documento es el **plan maestro**: junta las decisiones, el orden y el checklist de los tres sistemas. El detalle de cada uno está en su propio análisis.
>
> **Estado al 2026-10-16:** nada aplicado. Todo está pendiente de aprobación (Fase 0).

| Sistema | Análisis | Estado |
|---|---|---|
| Dashboard | [`dashboard-archway.md`](./dashboard-archway.md) | Analizado · decisiones D1–D8 pendientes |
| ADK | [`adk-archway.md`](./adk-archway.md) | Analizado · decisiones K1–K13 pendientes |
| Legacy | — | Sin relevar. Falta el archivo de Figma ([`../Legacy/`](../Legacy/README.md)) |

## Cómo se llega

```
Fase 0  Decidir ──► Fase 1  ArchWay crece ──► Fase 2  Cada sistema apunta a ArchWay
                                                        │  (Dashboard: re-alias · ADK: binding · Legacy: swap)
Fase 4  Retiro de foundations propias ◄── Fase 3  Código sobre tokens ArchWay ◄┘
```

La regla es la misma para todos: **ArchWay primero agrega lo que le falta** (Fase 1, sin romper nada) y **recién después** los otros sistemas cambian sus referencias (Fase 2). Así cada cambio visible se puede validar pantalla por pantalla y revertir.

## Fase 0 · Decisiones

Conviene tomarlas en una sola sesión con DesignOps y producto, porque varias se repiten entre sistemas.

### Accesibilidad que bloquea (P0)

| Sistema | Hallazgos | Doc |
|---|---|---|
| ArchWay | A-01 … A-06: blanco sobre dorado, variantes `-on-black`, `active-subtle`, borde de input, **sin focus ring**, dorado como único indicador | [audit](../Archway-DS/audit.md#-p0--accesibilidad-wcag-21-aa) |
| Dashboard | D-A01 … D-A06, D-C06, D-C13: contraste en Dark, bordes, foco de teclado | [audit](../Dashboard/audit.md) |
| ADK | A-S01, A-T01 (sin variables ni estilos), A-A02 (bordes `#ADADAD`) | [audit](../ADK/audit.md) |

Los P0 de ArchWay van primero: los otros dos sistemas heredan esos valores.

### Decisiones compartidas

Varias decisiones de Dashboard (D) y ADK (K) son la misma pregunta. Se deciden una sola vez:

| Tema | Dashboard | ADK | Recomendación |
|---|---|---|---|
| Azul de links | D4 | K1 | `#1652B1` de ArchWay (7.30:1) |
| Hover, pressed y destructivo | D8 | K3 | ArchWay suma hover y destructivo; pressed **más oscuro** (`gold/600`) |
| Tipografía por plataforma | D6 | K8 | Modos `mobile` / `desktop` / `kiosk` (/ `tablet`) en `Font/*` |
| Tracking | D7 | K10 | El de ArchWay |
| Breakpoints y formatos | Fase 1 | K11 | Breakpoints compartidos + `kiosk-s` / `kiosk` / `tablet` |

### Decisiones propias

- **Dashboard:** D1 escala desde `50`, D2 spacing por px, D3 radios de ArchWay + `xl` + `full`, D5 base del dark mode.
- **ADK:** K2 bordes a `black/500`, K4 borde opcional del primario, K5 disabled por tokens, K6 feedback sobre oscuro, K7 colores sin equivalente, K9 escalones que sobran, K12 touch target, K13 componentes de kiosco como Squad.
- **Legacy:** se definen al relevarlo.

## Fase 1 · Lo que ArchWay tiene que sumar

Backlog único; cada ítem dice qué sistema lo necesita.

| Ítem | Dashboard | ADK | Audit ArchWay |
|---|---|---|---|
| Focus ring (`Focus/*`) | ✅ | ✅ | A-05 |
| Modo Dark en Semantic | ✅ | — | F-07 |
| Breakpoints, colección Layout y grillas desktop / kiosco | ✅ | ✅ | F-01 |
| Modos tipográficos (`desktop`, `kiosk`, `tablet`) | ✅ | ✅ | F-02 |
| Hover y botón destructivo | ✅ | ✅ | S-09 |
| Pressed definido y `button/primary-stroke` | — | ✅ | S-09 |
| `radius/xl`, `radius/full` | ✅ | ✅ | F-03 |
| Spacing faltantes (2, 12, 96, 112, 128, 160) | ✅ | ✅ | F-04 |
| `elevation/*-up` (sombras hacia arriba) | — | ✅ | — |
| `size/touch-target` (48 / 56) | — | ✅ | — |
| Opacity, Z-index, Border width | ✅ | ✅ | F-05 |
| Familia Code (Roboto Mono) | ✅ | — | — |
| Transparencias de switch | ✅ | — | — |
| Separar tokens de componente (colección `Component`) | ✅ | ✅ | S-01 |
| `codeSyntax` Web e iOS | ✅ | ✅ | S-04 |

## Fase 2 · Cada sistema apunta a ArchWay

| Sistema | Cómo | Riesgo |
|---|---|---|
| Dashboard | **Re-alias:** cada semántico del Dashboard pasa a apuntar al primitivo de ArchWay equivalente. Los componentes no se tocan. Por grupos: texto → links → botones | Medio: 16 semánticos cambian de color |
| ADK | **Binding por script:** ~2.700 hex y 3.272 textos se enlazan a variables y estilos de ArchWay según propiedad + valor; lo ambiguo va a un reporte | Medio: cambios de interlineado y disabled |
| Legacy | A definir al relevar. La guía [Legacy → ArchWay de tipografía](../Archway-DS/guides/typography-legacy-migration.md) ya cubre los 24 estilos de texto | — |

## Fase 3 · Código

- Un solo preset de Tailwind de ArchWay con `data-platform` (`app`, `web`, `dashboard`, `kiosk`).
- Archivos puente durante la transición: `--db-*` → `--aw-*` (Dashboard) y `adk-to-archway.css` (ADK).
- Los componentes de [`Dashboard/ui`](../Dashboard/ui/README.md) y [`ADK/ui`](../ADK/ui/README.md) cambian sus clases a los tokens de ArchWay con QA visual en Storybook.

## Fase 4 · Retiro

- Dashboard: deprecar sus colecciones; `Dashboard/foundations/` queda como histórico.
- ADK: deprecar los 20 text styles `ADK/*` y la página *Colors*.
- Legacy: deprecar la librería cuando no queden pantallas que la usen.

## Checklist maestro

**Fase 0**
- [ ] Audit P0 de ArchWay (A-01 … A-06) aprobado
- [ ] Decisiones compartidas (links, hover/pressed, modos tipográficos, tracking, breakpoints)
- [ ] Dashboard D1, D2, D3, D5 · ADK K2, K4–K7, K9, K12, K13
- [ ] Legacy relevado (archivo de Figma, inventario, audit)

**Fase 1 — ArchWay**
- [ ] Focus ring y P0 aplicados en Figma
- [ ] Modo Dark
- [ ] Breakpoints, Layout y grillas
- [ ] Modos tipográficos
- [ ] Hover, destructivo, pressed, `primary-stroke`
- [ ] Radios, spacing, elevación hacia arriba, touch target
- [ ] Opacity, Z-index, Border width
- [ ] Colección `Component` y `codeSyntax` Web / iOS

**Fase 2**
- [ ] Dashboard: re-alias por grupos con QA
- [ ] ADK: binding de color, texto y forma + reporte de ambiguos
- [ ] Legacy: plan de swap

**Fase 3**
- [ ] Preset único de Tailwind con `data-platform`
- [ ] Puentes `--db-*` y `--adk-*` → `--aw-*`
- [ ] Componentes Vue de Dashboard y ADK sobre tokens ArchWay

**Fase 4**
- [ ] Colecciones y estilos propios deprecados en los tres sistemas

## Seguimiento de Figma

[`../figma-snapshots/`](../figma-snapshots/README.md) guarda una foto de los tres archivos de Figma en cada revisión, para saber exactamente qué cambió entre una y otra.
