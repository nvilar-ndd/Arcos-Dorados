# Scroll Bar

> **Fuente:** [[ADK] Design System › Scroll Bar](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=137-8749) — component set `Scroll`.
> **Origen:** ADK. Sin equivalente en ArchWay (en mobile el scroll es nativo).

## Propósito

Indicador **siempre visible** de que la columna de contenido tiene más productos abajo. En kiosco no hay mouse ni barra nativa, y la gente no siempre descubre que puede deslizar.

## Anatomía y tokens

| Pieza | Medida | Token |
|---|---|---|
| Track | 16 × 1416 · radio 16 | `scroll.track` `#D6D6D6` |
| Thumb | 16 × variable · radio 16 | `scroll.thumb` `#ADADAD` |
| Posición | x = 1032, desde debajo del header hasta arriba del footer | `layout.scrollbar-width` |

## Variantes

`Position` = Up · Center · Down, según dónde esté el thumb.

## Estados

No es interactivo en Figma: sólo indica. Proponemos que el thumb se pueda **arrastrar** (Fitts: el objetivo de 16 px es chico, el área táctil tendría que ser de 48 × alto).

## Responsive

En tablet usar el scroll nativo y ocultar este componente. En kiosco chico mantenerlo.

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Contraste thumb ↔ track | **1.54:1**, el thumb casi no se distingue (1.4.11). Proponemos thumb `#6F6F6F` (3.46:1 vs track) o `#292929` (A-A03) |
| Semántica | Decorativo (`aria-hidden="true"`). La región scrolleable lleva `tabindex="0"` + `aria-label` para teclado |
| Affordance | Sumar sombra o fade en el borde inferior del contenido para reforzar que hay más (Ley de Prägnanz / continuidad) |
