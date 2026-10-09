# Header

> **Fuente:** [[ADK] Design System › Header](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=139-1295) — component set `Header` (143:948).
> **Origen:** ADK. Sin equivalente en ArchWay (el header de app es un App Bar de 56 px).

## Propósito

Marca y contexto de la pantalla: logo, título de la categoría y, en el flujo de producto, el paso actual.

## Anatomía y tokens

```
┌──────────────────────────────────────────────────────────────┐ 1080 × 192 · background.default
│  [LOGO 152×112]  ·gap 96·  Título de categoría (48 Bold)     │ padding 104 · 80 · 24 · 80
│                            Subtítulo / paso (28 Bold)        │ título máx. 672
└──────────────────────────────────────────────────────────────┘ "sombra" blanca 0 8 16 = fade
```

| Parte | Token |
|---|---|
| Fondo | `background.default` |
| Título | `headline.large-bold` (48/52) · `text.primary` |
| Subtítulo | `headline.extra-small-bold` (28/32) |
| Logo | Componente [Logos](./logos.md) 152 × 112 |
| Padding | `spacing.104` arriba · `spacing.80` a los lados · `spacing.24` abajo |
| Gap logo ↔ título | `spacing.96` |

## Variantes

| Propiedad | Valores |
|---|---|
| Logo | Left · Center |
| Type | Categoría · Paso productos · False (sólo logo) |

## Estados

No es interactivo. El logo **no** funciona como "volver al inicio": eso lo resuelve el footer (*Cancelar pedido*).

## Responsive

- Alto fijo de 192, que en pantalla vertical es el 10 %.
- En tablet horizontal 192 es demasiado. Proponemos 120, con el padding superior ligado al área segura del dispositivo y no a un valor fijo de 104 (ver Convergencia § Formatos).

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Título | `<h1>` único por pantalla |
| Logo | `<img alt="McDonald's">`, o `alt=""` si se repite en otro lugar |
| Fade blanco | Hoy se modela como sombra de color blanco. Debería ser un gradiente `background.default → transparente` que no tape contenido interactivo |
| Truncado | Título con máx. 672 px: definir 2 líneas máximo y no usar elipsis en nombres de categoría |
