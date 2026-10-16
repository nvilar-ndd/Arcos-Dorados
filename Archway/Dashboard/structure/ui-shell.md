# UI shell — Header + PanelLeft

> **Fuente de la verdad:** [⮑ UI shell / Header + PanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=657-36880) · component sets `Header+PanelLeft` (desktop) y `Header+PanelLeft-Small` (mobile).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Marco persistente de todas las pantallas del Dashboard: el [Header](./header.md) arriba y el [Left panel](./left-panel.md) a la izquierda. En las pantallas de un país se suma el [SubPanelLeft](./sub-panel-left.md).

## Variantes

### `Header+PanelLeft` (≥ 768 px)

| Propiedad | Valores |
|---|---|
| `LeftPanel` | **Default** (expandido) · **Close** (colapsado, sólo íconos) |
| `Size` | **Max plus / Max** · **X-Larger / Larger** |

| Medida | Max plus / Max | X-Larger / Larger |
|---|---|---|
| Frame | 1584 × 880 | 1584 × 880 |
| Header | 1584 × 96 | 1584 × 96 |
| Left panel expandido | **272** | **256** |
| Left panel colapsado | 48 | 48 |

Breakpoints en [foundations/grid.md](../foundations/grid.md).

### `Header+PanelLeft-Small` (< 768 px)

320 × 877. Propiedades `Header` = Perfil · seguridad · Configuracion (qué desplegable del header está abierto) y `PanelLeft` = Default · activo (drawer abierto, 256 de ancho).

## Medidas y tokens

| Zona | Medida | Tokens |
|---|---|---|
| Header | alto 96 · padding 24/16 (`spacing/300`/`spacing/200`) | fondo `layer/01` (desktop) · `background/01` (small), borde inferior `border/02` |
| Grupo izquierdo del header | gap `spacing/500` (40) | |
| Grupo derecho del header | gap `spacing/200` (16) | |
| Left panel | padding vertical `spacing/400` (32) · ítems de 40 de alto sin gap | fondo `layer/01`, borde derecho `border/02` |
| Contenido | desde x = 272 (o 48) | fondo `background/01` |

> El header separa los grupos con un **gap fijo de 206 px** en vez de *space-between* ([D-E02](../audit.md#d-e02--header-con-gap-fijo)), y el fondo cambia entre `layer/01` y `background/01` según el tamaño ([D-E03](../audit.md#d-e03--fondo-del-header-inconsistente)).

## Comportamiento responsive (Figma)

| Ancho | Sidebar | Header (lado derecho) |
|---|---|---|
| **≥ 768 px** (desktop / tablet) | Siempre visible. El ícono del header alterna **Expandida** (íconos + texto) / **Colapsada** (sólo íconos). Tap en un ícono colapsado → se expande | Selector de país, ayuda, configuración, seguridad y perfil visibles y accesibles |
| **< 768 px** (mobile) | Oculta por defecto. El ícono del header abre/cierra un **drawer** que se superpone al contenido y se cierra al elegir una opción | Los accesos se **agrupan dentro del menú de perfil** |

## Navegación secundaria

Frame *Navegación secundaria activada desde páginas internas*: al entrar a **Countries → Configurar**, el Left panel pasa a **colapsado** y aparece el SubPanelLeft con la navegación de configuración del país. Ver [sub-panel-left.md](./sub-panel-left.md).

## Implementación (propuesta)

```
<AppShell>
  <AppHeader />                 ← <header role="banner">
  <AppSidebar :collapsed />     ← <nav aria-label="Principal">
  <AppSubSidebar v-if="country"/> ← <nav aria-label="Configuración del país">
  <main id="contenido">…</main>
</AppShell>
```

- Ancho del sidebar como token de layout (`--db-shell-sidebar` 272 / 256, `--db-shell-sidebar-collapsed` 48, `--db-shell-header` 96): hoy no existen como variables ([D-E01](../audit.md#d-e01--medidas-del-shell-sin-tokens)).
- Estado colapsado persistido por usuario (preferencia), no por página.

## Accesibilidad

- Landmarks: `banner`, `navigation` (uno por menú, con nombre distinto) y `main`.
- *Skip link* "Saltar al contenido" como primer elemento enfocable.
- El drawer mobile es un diálogo: trap de foco, `Esc` cierra, foco vuelve al botón del header.
- El orden de tabulación sigue el visual: header → sidebar → subpanel → contenido.
