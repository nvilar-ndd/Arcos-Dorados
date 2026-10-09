# Color

> **Fuente de la verdad:** [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System), página *Colors*.
> **Extraído vía Figma MCP:** 2026-10-09 · **Estado:** documentado tal cual está en Figma. Las propuestas están en [`audit.md`](../audit.md) y la convergencia con ArchWay en [`Convergencia/adk-archway.md`](../../Convergencia/adk-archway.md).

## Cómo está construido hoy

ADK **no tiene variables ni estilos de color propios**:

- Hay una sola variable local, `Color` = `#CCF0FF`, y ningún componente la usa.
- No hay paint styles. La paleta existe sólo como **muestras documentadas** en la página *Colors*.
- Los componentes usan **hex sueltos**: unos 2.700 rellenos y bordes sin variable.
- Sólo 28 nodos usan variables, y todas son remotas de la librería **[Archway] Foundations Library / Semantic**. La librería ya está habilitada en el archivo.

Por eso [`adk.tokens.json`](../tokens/adk.tokens.json) se arma así:

| Capa | Origen | Estado |
|---|---|---|
| **Primitivos** | Muestras de la página *Colors* + 4 hex usados en componentes que no figuran en la paleta | Relevado |
| **Semánticos** | Uso real en componentes (botones, inputs, snackbars, badges…) | **Propuesta**: no existen en Figma |

Cada token lleva en `$extensions.archway` su equivalente en ArchWay. La comparación usa la distancia perceptual ΔE (CIE76):

| ΔE | Resultado |
|---|---|
| < 0.5 | Igual |
| < 3 | Redondeo |
| < 8 | Cercano |
| ≥ 8 | Distinto |

## Primitivos

### Primary

| Nombre Figma | Token | Hex | ArchWay |
|---|---|---|---|
| McDonald's Gold | `primary.gold` | `#FFBC0D` | `gold/500` — igual |
| McDonald's Red | `primary.red` | `#DB0007` | `red/600` — igual |
| Black | `primary.black` | `#292929` | `black/800` — igual |
| White | `primary.white` | `#FFFFFF` | `white` — igual |

### Secondary

| Nombre Figma | Token | Hex | ArchWay |
|---|---|---|---|
| Blue | `secondary.blue` | `#006BAE` | Sin equivalente (ΔE 22) |
| Dark Grey | `secondary.dark-grey` | `#6F6F6F` | `black/500` `#707070` — igual |
| Grey | `secondary.grey` | `#ADADAD` | `black/300` `#A8A8A8` — redondeo |
| Light Grey | `secondary.light-grey` | `#D6D6D6` | `black/100` `#DBDBDB` — redondeo |
| Ivory | `secondary.ivory` | `#F9F9F9` | `black/50` `#F5F5F5` — redondeo |

### Tertiary

| Nombre Figma | Token | Hex | ArchWay |
|---|---|---|---|
| McDonald's Green | `tertiary.green` | `#1F6437` | `green/800` — igual |
| Light Green | `tertiary.light-green` | `#A9C141` | `lime/500` `#ADC44B` — cercano |
| Dark Blue | `tertiary.dark-blue` | `#103C82` | `blue Dark/800` — igual |
| Light Blue | `tertiary.light-blue` | `#56AFD1` | Sin equivalente (ΔE 21) |
| Fuschia | `tertiary.fuchsia` | `#9A0A4D` | `fuchsia/700` — igual |
| Beige | `tertiary.beige` | `#B69A81` | Sin equivalente |
| Gold Disabled | `tertiary.gold-disabled` | `#FFE49E` | `gold/200` `#FFE7A8` — cercano |
| Blue Disabled | `tertiary.blue-disabled` | `#CCF0FF` | Sin equivalente |
| Green Disabled | `tertiary.green-disabled` | `#E2EABF` | `lime/200` — igual |
| Dark Red | `tertiary.dark-red` | `#9A0005` | `red/700` `#A80005` — cercano |

### Accessible Accent y Links

| Nombre Figma | Token | Hex | Uso | ArchWay |
|---|---|---|---|---|
| Accent Gold | `accent.gold` | `#C08B00` | Borde del botón primario y del toggle encendido | Sin equivalente (`gold/700` ΔE 9.5) |
| Hover Gold | `accent.gold-hover` | `#F1B417` | Hover del botón primario | Cercano a `gold/500` (ArchWay no tiene hover) |
| Accent Grey | `accent.grey` | `#959595` | — | `black/400` — redondeo |
| Link | `link.default` | `#0F62FE` | Links | Sin equivalente (mismo azul que Dashboard) |
| Link Hover | `link.hover` | `#054ADA` | | Sin equivalente |
| Link Visited | `link.visited` | `#8A3FFC` | | `violet/400` — igual |

### Ilustración

La página documenta una paleta de ilustración de 30 colores: Big Mac Sauce, Muffin, Bag, Bun, Hashbrown, McNuggets, Ham, Beef, McCafé, Mustard, Pickle, Lettuce, Card Green/Blue, McFlurry, Teal, Purple y tonos de piel.

Sólo dos se usan en UI, así que son los únicos que pasan a tokens:

| Nombre Figma | Token | Hex | Uso en UI |
|---|---|---|---|
| Ground Shadow | `illustration.ground-shadow` | `#F1F1F1` | Hover del botón secundario |
| Neutral Grey | `illustration.neutral-grey` | `#EAEAEA` | 32 usos (p. ej. sombra interna de las teclas del teclado) |

El resto es paleta de ilustración y queda fuera de los tokens de UI. Hay tres hex mal escritos en la página, detallados en audit A-H01.

### Usados en componentes y ausentes de la paleta

| Token | Hex | Usos | ArchWay |
|---|---|---|---|
| `undocumented.grey-808080` | `#808080` | 155 | `black/400` `#8F8F8F` — cercano |
| `undocumented.black-000000` | `#000000` | 92 | `black/900` `#0F0F0F` — cercano |
| `undocumented.error-red` | `#FA4D56` | Borde de Snackbar Error | `red/400` `#FF4248` — distinto (ΔE 8.7) |
| `undocumented.orange` | `#FE8234` | Badges de oferta | `orange/400` — igual |

### Gradientes

`Loyalty AB` y `Loyalty BA` son **idénticos** a los gradientes de ArchWay, con los mismos 7 stops desde `#910063` hasta `#E8720A`.

## Uso más frecuente en componentes

| Hex | Usos | Rol |
|---|---|---|
| `#292929` | 995 | Texto, bordes fuertes, snackbar |
| `#FFFFFF` | 693 | Fondos |
| `#FFBC0D` | 209 | Botón primario, selección, chips |
| `#6F6F6F` | 207 | Texto secundario, bordes de secundario |
| `#808080` | 155 | **Fuera de paleta** |
| `#000000` | 92 | **Fuera de paleta** |
| `#ADADAD` | 57 | Disabled, thumb de scroll |
| `#F9F9F9` | 41 | Fondos suaves |
| `#DB0007` | 36 | Error |
| `#C08B00` | 36 | Borde del primario |

## Semánticos (propuesta)

No existen en Figma. Esta capa sale de **cómo usan el color los componentes**. Su función es ser el puente para enlazar ADK a ArchWay; el detalle está en [Convergencia](../../Convergencia/adk-archway.md#mapa-de-semánticos).

| Semántico | Primitivo | Uso |
|---|---|---|
| `background.default` / `subtle` / `muted` / `inverse` / `brand` | white / ivory / ground-shadow / black / gold | Pantalla, fondos suaves, hover secundario, snackbar, user footer |
| `text.primary` / `secondary` / `disabled` / `on-color` / `error` | black / dark-grey / grey / white / red | |
| `link.default` / `hover` / `visited` | link.* | |
| `border.default` / `subtle` / `strong` / `selected` / `error` | dark-grey / light-grey / black / gold / red | |
| `button.primary` / `-hover` / `-stroke` / `-inactive` | gold / gold-hover / accent gold / gold-disabled | |
| `button.secondary` / `-hover`, `button.text` | white / ground-shadow, black | |
| `control.track` / `track-stroke` / `on` / `on-stroke` | ivory / grey / gold / accent gold | Toggle, chips |
| `scroll.track` / `thumb` | light-grey / grey | Barra de scroll |
| `feedback.success` / `error` / `warning` / `info` | light-green / `#FA4D56` / gold / light-blue | Borde izquierdo del Snackbar |
| `badge.new` / `recommended` / `loyalty` / `loyalty-disabled` | gold-disabled / green-disabled / gold / light-grey | Badges de producto |

## Contraste (WCAG 2.1 AA)

| Par | Ratio | Resultado |
|---|---|---|
| `#292929` sobre blanco | 14.55 | ✅ AAA |
| `#292929` sobre Gold (botón primario) | 8.63 | ✅ AAA |
| `#292929` sobre Hover Gold | 7.82 | ✅ AAA |
| `#6F6F6F` sobre blanco (texto secundario) | 5.02 | ✅ AA |
| `#6F6F6F` sobre Ivory | 4.77 | ✅ AA |
| `#DB0007` sobre blanco (error) | 5.23 | ✅ AA |
| Link `#0F62FE` sobre blanco | 5.00 | ✅ AA |
| Accent Gold `#C08B00` sobre blanco (borde del primario) | 3.03 | ✅ no-texto (justo) |
| Blanco sobre `#292929` (snackbar) | 14.55 | ✅ AAA |
| Bordes de snackbar sobre `#292929` | 4.34–7.20 | ✅ no-texto |
| `#ADADAD` sobre blanco (borde del toggle apagado) | 2.24 | ❌ no-texto < 3:1, audit A-A02 |
| Thumb `#ADADAD` sobre track `#D6D6D6` | 1.54 | ❌ no-texto, audit A-A03 |
| Gold sobre blanco como indicador | 1.69 | ❌ si es el único indicador, audit A-A01 |
| `#808080` sobre blanco | 3.95 | ⚠️ falla como texto normal |

En kiosco la luz ambiente y los reflejos de la pantalla bajan el contraste percibido, así que conviene apuntar a **AAA (7:1) en texto de lectura**.
