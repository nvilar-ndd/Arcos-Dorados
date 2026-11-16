# Tag

> **Fuente de la verdad:** [Design Resources CORE › Tag](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=581-529) · component set `Tag` (3 variantes).
> **Origen:** ArchWay · Nivel 1 Core · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

> "Componente informativo no táctil — etiqueta de contexto o estado." — Figma

- **Tag → informa**, no se toca ("Nuevo"). **[Chip](./chip.md) → se toca.** **Pill** es una forma, no un componente.
- El Tag de Core es **neutro**: tiene la estructura (niveles, 24 de alto, ícono opcional), sin colores de negocio.
- Cuando el color depende del significado, es un **Específico**: *Tag 💠 EP* (etiquetas de persuasión: rojo para Oferta y Preventa; verde para Más vendido, Nuevo, Últimos días y Marketing) y *Tag 💠 Loyalty* (puntos). Ambos pendientes en Figma.

## Anatomía y tokens

| Medida | Valor (componente) |
|---|---|
| Alto | 24 fijo |
| Ancho | Crece con el contenido |
| Padding | `Valor/spacing/4` vertical · `Valor/spacing/8` horizontal |
| Radio | `Valor/radius/XS` (4) — *Square Circle*: la forma comunica que no es táctil |
| Texto | `Label/Label Small Bold` (12/16) |
| Íconos | `Icon Leading` / `Icon Trailing` opcionales, 16 |

| Hierarchy | Fondo | Texto |
|---|---|---|
| Primary | `Surface/inverse` | `Text/on-color` (14.55:1 ✅) |
| Secondary | `Surface/muted` | `Text/primary` (10.51:1 ✅) |
| Terciary (typo) | sin fondo | `Text/primary` |

> La ficha del canvas dice "Speedee 14pt (Label/Label.m)" y "Icon only disponible"; el componente publicado usa **Label Small Bold 12** y no tiene variante sólo ícono ([C-S04](../audit.md#c-s04--tag-core-ficha-vs-componente)). Este doc sigue al componente.

## No tiene

Estados (no es interactivo) · área táctil · Loading.

## Usos (ficha de Figma)

| Tipo | Ejemplos |
|---|---|
| Promociones | 8.000 pts, Envío gratis, 00% OFF, Solo por +$1200, Tu 5 estrellas, Saldo insuficiente |
| Comunes | Nuevo, Sugerido, Obligatorio (positivo / negativo) |
| Loyalty | R$1 = 100 pts (por país) → *Tag 💠 Loyalty* |
| Persuasión | Oferta, Flash, Más vendido, Últimos días, Preventa, Marketing → *Tag 💠 EP* |

Emoción → color (para los Específicos): Destacar → amarillo (matiz, no el primario) · Confianza → azul (`Trust/*`) · Urgencia → rojo · Estado + → verde · Estado − → rojo.

## Accesibilidad

- No es foco de teclado ni tiene rol de botón; se lee como texto dentro del elemento que lo contiene.
- El significado nunca depende sólo del color: el texto del tag lo dice ("Oferta", no un punto rojo).
- Si el tag es la única pista de un estado (p. ej. "Agotado" en una card), incluirlo en el `accessibilityLabel` de la card.
