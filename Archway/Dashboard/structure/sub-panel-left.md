# SubPanelLeft (navegación secundaria de Country)

> **Fuente de la verdad:** [⮑ SubPanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4103-17) · component set `SubPanelLeft-Countries` (4 variantes).
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Segundo nivel de navegación para la **configuración de un país**. Se activa desde páginas internas: en **Countries → Configurar**, el [Left panel](./left-panel.md) se colapsa a íconos y el SubPanelLeft muestra las secciones de configuración del país en sesión. Las pantallas que se abren desde acá siguen el patrón **formulario** ([usage/ui-templates.md](../usage/ui-templates.md)).

## Variantes

| `stile` | `Size` | Medida |
|---|---|---|
| Default | Desktop | 272 × 888 |
| Default | Mobile | 256 × 888 |
| Close | Desktop / Mobile | 48 × 64: sólo un `SmallFAB` (ícono menú) para reabrirlo |

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | padding 32 arriba / 16 abajo (`spacing/400` / `spacing/200`) · fondo `layer/01` · borde derecho `border/02` |
| Ítems | instancias de `Sidebar_items` (mismo componente que el [Left panel](./left-panel.md)), 40 de alto, **sin ícono** |
| Ítem activo | indicador gold `border/04` a la izquierda + texto en negrita |
| Botón de reapertura (Close) | `SmallFAB` primario, `button/primary-enabled` |

Estados: los mismos de `sidebar` (ver [left-panel.md](./left-panel.md#estados)).

## Contenido

Ítems en el componente: **Detail** · Main ▾ · Products ▾ · Servicios ▾ · Integraciones · Validaciones ▾ · Promociones · Cumpleaños · Loyality · Payment · Currency · Rating · Tips · Push · Special Sale ▾ · Antifraude · Cancelaciones ▾ · Perfil ▾ · Enrollment · Parámentros ▾ · Refunds.

El árbol completo (*Ai - Country*) está en [information-architecture.md](./information-architecture.md#country--configuration). Hay diferencias de idioma y de orden entre el componente y el árbol ([D-E04](../audit.md#d-e04--ia-desalineada-entre-componente-y-árbol)).

## Handoff (Figma)

El frame *HandOff* de la página enlaza: ícono de control de la sidebar · [UI shell - Left panel items](./left-panel.md) · [UI shell - Header](./header.md) · **Arquitectura countries**. También hay una sección *SubMenu Restaurante* (en preparación, sin contenido de texto).

## Responsive

- Desktop: Left panel colapsado (48) + SubPanelLeft (272) + contenido.
- Mobile: no hay una definición explícita de cómo conviven drawer principal y subpanel. **Propuesta:** el subpanel se presenta como segundo nivel dentro del mismo drawer (con "← Volver a Countries"), no como un segundo drawer.

## Accesibilidad

- `<nav aria-label="Configuración de <país>">`, distinto del nav principal.
- Ítem actual con `aria-current="page"`; grupos desplegables con `aria-expanded`.
- Al colapsarlo (variante Close), el `SmallFAB` necesita `aria-label="Mostrar menú de configuración"` y `aria-expanded="false"`.
