# Link

> **Fuente de la verdad:** [Components › Link](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=847-3503) · componente `Link`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Navegación de texto: "← volver" en el header de un flujo paso a paso, "+ Agregar marca de moneda", accesos al detalle.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 58 × 32 · padding vertical 8 (`spacing/100`) · gap `spacing/100` |
| Texto | `Label02 - cms`, **`text/primary`** |
| Íconos | `icon left` / `icon right` opcionales (`#292929` suelto) |

> El componente usa `text/primary`, no los tokens `link/*` (`link/primary`, `-hover`, `-visited`) que sí existen en Semantic. No tiene estados.

## Estados propuestos

| Estado | Token |
|---|---|
| Default | `link/primary` (o `text/primary` + subrayado si es link de acción) |
| Hover | `link/primary-hover` + subrayado |
| Visited | `link/primary-visited` (sólo links a contenido) |
| Focus | anillo de foco |

Ver [D-C11](../audit.md#d-c11--componentes-sin-estados).

## Accesibilidad

- `<a href>` si navega; `<button>` si ejecuta una acción ("+ Agregar…").
- Un link en `text/primary` sin subrayado no se distingue del texto (WCAG 1.4.1): subrayar o usar `link/primary` con 3:1 contra el texto vecino.
- Texto del link autoexplicativo; si es sólo ícono, `aria-label`.
