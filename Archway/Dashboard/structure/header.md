# Header

> **Fuente de la verdad:** [Components › UI shell - Header](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=638-4240) · component set `Header` (Large · small).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Anatomía (Figma)

| # | Elemento | Componente |
|---|---|---|
| 1 | **Ícono de control de la barra lateral**: abre/colapsa la navegación del panel izquierdo | [FAB](../components/fab.md) |
| 2 | **Logo** | — |
| 3 | **Sub-menu**: desplegable de países | [Dropdown](../components/dropdown.md) |
| 4 | **Ayuda** | FAB |
| 5 | **Configuración** (desplegable) | FAB + menú |
| 6 | **Seguridad** (desplegable) | FAB + menú |
| 7 | **Perfil** (desplegable) | Avatar con iniciales (`button/primary-enabled`) |

Desplegables documentados: **País**, **Perfil** (Mi perfil · Cerrar sesión) y **Seguridad** (Auditorías · Registros · Autenticación de terceros).

## Variantes y tokens

| `size` | Medida | Fondo | Borde |
|---|---|---|---|
| Large | 1312 × 96 (fill en el shell: 1584) | `layer/01` | inferior `border/02` |
| small | 768 × 96 | `layer/01` | inferior `border/02` |

Padding 24/16 (`spacing/300`/`spacing/200`). Texto `Label02 - cms` / `Label01 - cms`, `text/primary`; íconos `icon/primary`; el avatar usa `#FFBC0D` suelto además del token ([D-C04](../audit.md#d-c04--colores-sin-variable)).

## Ícono de control de la barra lateral (Figma)

> Controla el estado visual de la barra lateral izquierda, que **siempre permanece visible**. Alterna entre **Expandida** (íconos + etiquetas) y **Colapsada** (sólo íconos). Al hacer tap en un ícono colapsado, la barra se vuelve a expandir. Este comportamiento es exclusivo de este ícono: administra cómo se presenta la barra, **sin ocultarla por completo**.

En mobile (< 768 px) el mismo ícono abre y cierra el drawer.

## Responsive (Figma)

- **≥ 768 px:** todos los elementos del lado derecho distribuidos y accesibles desde el header.
- **< 768 px:** se agrupan dentro del **menú de perfil**, para optimizar el espacio sin perder accesos.

## Estados

El header no tiene estados propios; los toma de cada elemento ([FAB](../components/fab.md), [Dropdown](../components/dropdown.md)). El selector de país muestra la bandera + nombre ("🇦🇷 Argentina") cuando hay país en sesión, o "Menu item" como placeholder.

## Accesibilidad

- `<header role="banner">`. Logo como link a Home con `alt="McDonald's — Inicio"`.
- Ícono del sidebar: `<button aria-label="Contraer menú" aria-expanded aria-controls="sidebar">` (el label cambia con el estado).
- Desplegables: `aria-haspopup="menu"` + `aria-expanded`; ítems con `role="menuitem"`; `Esc` cierra.
- Avatar con iniciales: `aria-label="Perfil de <nombre>"`; las iniciales sobre gold necesitan texto oscuro (gold + blanco no llega a 4.5:1).
- Selector de país: si cambia el contexto de toda la app, anunciarlo (`aria-live`) y no hacerlo al pasar el mouse.
