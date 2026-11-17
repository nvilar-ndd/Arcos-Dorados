# Card (Nivel 2) · Card / Voucher · Card / Setting

> **Fuente de la verdad:** [Design Resources CORE › Card 💠](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4798-8849) · `Card` ([4798:9335](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4798-9335), 10), `Card / Voucher` ([4798:9238](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=4798-9238), 3), `Card / Setting` ([5435:5130](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5435-5130)).
> **Origen:** ArchWay · Específicos · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Card / Voucher*.

## Card (Nivel 2)

> "Componente base (Nivel 2). Las derivadas (Card / Voucher) toman de acá fondo, radio, espaciado y tipografía: cualquier cambio que aplique a todas las cards se hace en este componente." — Figma

`Style`: Elevation · Outline · Fill · Highlight · Outline-selected × `Layout`: Vertical · Horizontal. 26 propiedades (Rewards, Counter, Tag, Headline, Subhead, Supporting text, Icon action, Full Image, Img Left, Right Image Float, Text Helper, content-bg…).

> ⚠️ Convive con [`.Card (Core)`](../core/card.md), que también se presenta como la base de todas las cards, con otros nombres de estilo y sin imagen completa. Se propone unificar en `.Card (Core)` ([C-S01](../audit.md#c-s01--dos-card-base)). 10 textos sin estilo ([C-T03](../audit.md#c-t03--textos-sin-estilo)).

## Card / Voucher

> "Deriva de Card. Fondo, radio, espaciado y tipografía se definen en Card: no los cambies acá. Lo único propio del voucher es el troquel y la franja de acción." — Figma

`Type`: Img Product · Img Left · Icon Left. Props: `Subhead`, `Headline`, `First line support`, `Second line support` y visibilidad de Subhead, Supporting text, Info y Tag. Usa `Feature/missions-surface` y `Radius/XS` (variable de otra librería, [C-T01](../audit.md#c-t01--variables-que-no-existen-en-foundations)).

## Card / Setting

Opción de configuración con su control: título (`Label/Label Medium Bold`), texto de apoyo (`Text/Body Small`, `Text/secondary`) e ícono opcional. 380 × 68, `Surface/default` + `Border/soft`, radio `Valor/radius/S`. Props: `Text Headline`, `Text Supporting text`, `Show Icon`, `Show Supporting text`.

> La ficha describe un `Show Switch` que el componente no tiene ([C-H01](../audit.md#c-h01--typos-y-nombres)). Funcionalmente es un [List Item](../core/list-item.md) con Switch: evaluar si debe ser una variante de él.

## Accesibilidad

Las mismas reglas que [Card](../core/card.md#accesibilidad): una sola acción si la card se toca entera; acciones propias con label.

## Cambios 2026-11-17 (paridad con Figma)

- Voucher: tipos `img-product`, `img-left`, `icon-left`; troquel; fila de acciones con Ghost XS de info + Primary XS redondo *Usar*; sombra `Shallow/M/Elev 2`.
- Setting card: gap 8, padding 16, trazo interior `Border/soft`, textos con gap 4.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
