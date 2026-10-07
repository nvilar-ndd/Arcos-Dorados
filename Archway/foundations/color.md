# Color

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — colecciones **Primitives** (modo `Default`) y **Semantic** (modo `Light`), estilos de pintura `Loyalty AB` / `Loyalty BA`.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Arquitectura

ArchWay organiza el color en dos niveles de variables en Figma:

```
Primitives (valores crudos)        Semantic (intención de uso)            Componente
color/gold/500_  #FFBC0D   ──►   Button/primary, Layer/brand, …   ──►   <Button variant="primary">
color/black/800_ #292929   ──►   Text/Text_primary, Layer/06, …
```

- **Primitives** — 102 colores en 12 familias. No se usan directo en componentes.
- **Semantic** — 98 colores, todos alias de un primitivo. **Es la única capa que consumen diseño y código.**
- Un solo modo (`Light`). No hay dark mode definido; las variantes `-on-black` son ajustes puntuales para `Layer/06`, no un tema oscuro.

### Regla de consumo

> En Figma y en código se aplican **sólo tokens semánticos**. Si un caso no tiene token semántico, se pide uno nuevo (vía audit/PR); nunca se usa un primitivo ni un hex.

## Colores de marca

| Rol | Token primitivo | Hex | Semánticos que lo usan |
|---|---|---|---|
| Dorado McDonald's | `color/gold/500_` | `#ffbc0d` | `Button/primary`, `Layer/brand`, `Interactive/active`, `Chip/selected-bg`, `Feedback/warning`, `Icon/gold` |
| Rojo McDonald's | `color/red/600_` | `#db0007` | `Feedback/error`, `Text/Text_error`, `Icon/red` |
| Neutro base | `color/black/800_` | `#292929` | `Text/Text_primary`, `Icon/Primary`, `Layer/06`, `Layer/inverse`, `Button/text-enabled` |
| Blanco | `color/white/default` | `#ffffff` | `Layer/01`, `Surface/default`, `Background/01` |

Los tokens con sufijo `_` son el **valor base** de cada familia de marca.

## Primitivos

### Gold (Dorado) — marca

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/gold/50` | `#fff8e5` | `--aw-color-gold-50` | Gold (Dorado) 50. Tono más claro de la escala. Uso en fondos apenas perceptibles. |
| `color/gold/100` | `#fff5db` | `--aw-color-gold-100` | Gold (Dorado) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/gold/200` | `#ffe7a8` | `--aw-color-gold-200` | Gold (Dorado) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/gold/300` | `#ffd975` | `--aw-color-gold-300` | Gold (Dorado) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/gold/400` | `#ffcb42` | `--aw-color-gold-400` | Gold (Dorado) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/gold/500_` **(base)** | `#ffbc0d` | `--aw-color-gold-500` | Dorado base de marca McDonald's. Token principal de identidad. |
| `color/gold/600` | `#db9f00` | `--aw-color-gold-600` | Gold (Dorado) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/gold/700` | `#a87a00` | `--aw-color-gold-700` | Gold (Dorado) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/gold/800` | `#755500` | `--aw-color-gold-800` | Gold (Dorado) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/gold/900` | `#423000` | `--aw-color-gold-900` | Gold (Dorado) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |
| `color/gold/500-alpha` | `#ffbc0d4d` | `--aw-color-gold-500-alpha` | Dorado base con 30% de opacidad. Uso en overlays y estados suaves de marca. |

### Red (Rojo) — marca / error

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/red/50` | `#fff0f0` | `--aw-color-red-50` | Red (Rojo) 50. Tono más claro de la escala. Uso en fondos apenas perceptibles. |
| `color/red/100` | `#ffdbdc` | `--aw-color-red-100` | Red (Rojo) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/red/200` | `#ffa8ab` | `--aw-color-red-200` | Red (Rojo) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/red/300` | `#ff757a` | `--aw-color-red-300` | Red (Rojo) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/red/400` | `#ff4248` | `--aw-color-red-400` | Red (Rojo) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/red/500` | `#ff1017` | `--aw-color-red-500` | Red (Rojo) 500. Tono base de la escala. Valor central de referencia. |
| `color/red/600_` **(base)** | `#db0007` | `--aw-color-red-600` | Rojo base de la marca. Token principal para errores y alertas. |
| `color/red/700` | `#a80005` | `--aw-color-red-700` | Red (Rojo) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/red/800` | `#750004` | `--aw-color-red-800` | Red (Rojo) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/red/900` | `#420002` | `--aw-color-red-900` | Red (Rojo) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |
| `color/red/600-alpha` | `#db00074d` | `--aw-color-red-600-alpha` | Rojo base con 30% de opacidad. Uso en superficies de error suaves. |

### Black (Neutros)

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/black/50` | `#f5f5f5` | `--aw-color-black-50` | Black (Neutro) 50. Tono más claro de la escala. Uso en fondos apenas perceptibles. |
| `color/black/100` | `#dbdbdb` | `--aw-color-black-100` | Black (Neutro) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/black/200` | `#c2c2c2` | `--aw-color-black-200` | Black (Neutro) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/black/300` | `#a8a8a8` | `--aw-color-black-300` | Black (Neutro) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/black/400` | `#8f8f8f` | `--aw-color-black-400` | Black (Neutro) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/black/500` | `#707070` | `--aw-color-black-500` | Black (Neutro) 500. Tono base de la escala. Valor central de referencia. |
| `color/black/600` | `#5c5c5c` | `--aw-color-black-600` | Black (Neutro) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/black/700` | `#424242` | `--aw-color-black-700` | Black (Neutro) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/black/800_` **(base)** | `#292929` | `--aw-color-black-800` | Gris muy oscuro base. Token principal para textos y fondos oscuros. |
| `color/black/900` | `#0f0f0f` | `--aw-color-black-900` | Black (Neutro) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |
| `color/black/800_ alpha` | `#2929294d` | `--aw-color-black-800-alpha` | Gris oscuro base con 30% de opacidad. Uso en overlays y sombras. |

### White

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/white/default` | `#ffffff` | `--aw-color-white-default` | Blanco puro. Base de superficies claras y fondos principales. |
| `color/white/transparent` | `#ffffff00` | `--aw-color-white-transparent` | Blanco con alpha 0. Uso en transiciones y fondos ghost. |

### Green (Verde) — éxito

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/green/100` | `#effaf3` | `--aw-color-green-100` | Green (Verde) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/green/200` | `#c8eed6` | `--aw-color-green-200` | Green (Verde) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/green/300` | `#a1e2b8` | `--aw-color-green-300` | Green (Verde) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/green/400` | `#7ad69b` | `--aw-color-green-400` | Green (Verde) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/green/500` | `#53ca7d` | `--aw-color-green-500` | Green (Verde) 500. Tono base de la escala. Valor central de referencia. |
| `color/green/600` | `#37b363` | `--aw-color-green-600` | Green (Verde) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/green/700` | `#2b8c4d` | `--aw-color-green-700` | Green (Verde) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/green/800` | `#1f6538` | `--aw-color-green-800` | Green (Verde) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/green/900` | `#133e22` | `--aw-color-green-900` | Green (Verde) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |
| `color/green/800-alpha` | `#1f65384d` | `--aw-color-green-800-alpha` | Verde oscuro con 30% de opacidad. Uso en superficies de éxito suaves. |

### Lime (Lima)

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/lime/100` | `#f3f6e4` | `--aw-color-lime-100` | Lime (Lima) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/lime/200` | `#e2eabf` | `--aw-color-lime-200` | Lime (Lima) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/lime/300` | `#d0dd97` | `--aw-color-lime-300` | Lime (Lima) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/lime/400` | `#bfd071` | `--aw-color-lime-400` | Lime (Lima) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/lime/500` | `#adc44b` | `--aw-color-lime-500` | Lime (Lima) 500. Tono base de la escala. Valor central de referencia. |
| `color/lime/600` | `#90a536` | `--aw-color-lime-600` | Lime (Lima) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/lime/700` | `#6f7f2a` | `--aw-color-lime-700` | Lime (Lima) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/lime/800` | `#4d581d` | `--aw-color-lime-800` | Lime (Lima) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/lime/900` | `#2c3210` | `--aw-color-lime-900` | Lime (Lima) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |

### Blue Dark (Azul) — info / links / confianza

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/blue Dark/100` | `#e8f0fc` | `--aw-color-blue-dark-100` | Blue (Azul) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/blue Dark/200` | `#cddef9` | `--aw-color-blue-dark-200` | Blue (Azul) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/blue Dark/300` | `#a0c0f3` | `--aw-color-blue-dark-300` | Blue (Azul) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/blue Dark/400` | `#72a2ee` | `--aw-color-blue-dark-400` | Blue (Azul) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/blue Dark/500` | `#4584e8` | `--aw-color-blue-dark-500` | Blue (Azul) 500. Tono base de la escala. Valor central de referencia. |
| `color/blue Dark/600` | `#1b67df` | `--aw-color-blue-dark-600` | Blue (Azul) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/blue Dark/700` | `#1652b1` | `--aw-color-blue-dark-700` | Blue (Azul) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/blue Dark/800` | `#103c82` | `--aw-color-blue-dark-800` | Blue (Azul) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/blue Dark/900` | `#0b2856` | `--aw-color-blue-dark-900` | Blue (Azul) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |
| `color/blue Dark/950` | `#051329` | `--aw-color-blue-dark-950` | Blue (Azul) 950. Tono más oscuro de la escala. Uso reservado para contraste extremo. |
| `color/blue Dark/700-alpha` | `#1652b14d` | `--aw-color-blue-dark-700-alpha` | Azul medio-oscuro con 30% de opacidad. Uso en superficies informativas suaves. |

### Orange (Naranja)

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/orange/100` | `#ffe0cc` | `--aw-color-orange-100` | Orange (Naranja) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/orange/200` | `#fec099` | `--aw-color-orange-200` | Orange (Naranja) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/orange/300` | `#fea167` | `--aw-color-orange-300` | Orange (Naranja) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/orange/400` | `#fe8234` | `--aw-color-orange-400` | Orange (Naranja) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/orange/500` | `#fe6301` | `--aw-color-orange-500` | Orange (Naranja) 500. Tono base de la escala. Valor central de referencia. |
| `color/orange/600` | `#cb4f01` | `--aw-color-orange-600` | Orange (Naranja) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/orange/700` | `#983b01` | `--aw-color-orange-700` | Orange (Naranja) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/orange/800` | `#662800` | `--aw-color-orange-800` | Orange (Naranja) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/orange/900` | `#331400` | `--aw-color-orange-900` | Orange (Naranja) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |

### Fuchsia (Fucsia)

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/fuchsia/100` | `#fdd9e9` | `--aw-color-fuchsia-100` | Fuchsia (Fucsia) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/fuchsia/200` | `#f9a9ce` | `--aw-color-fuchsia-200` | Fuchsia (Fucsia) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/fuchsia/300` | `#f679b3` | `--aw-color-fuchsia-300` | Fuchsia (Fucsia) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/fuchsia/400` | `#f34998` | `--aw-color-fuchsia-400` | Fuchsia (Fucsia) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/fuchsia/500` | `#f0197d` | `--aw-color-fuchsia-500` | Fuchsia (Fucsia) 500. Tono base de la escala. Valor central de referencia. |
| `color/fuchsia/600` | `#c90d65` | `--aw-color-fuchsia-600` | Fuchsia (Fucsia) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/fuchsia/700` | `#9a0a4d` | `--aw-color-fuchsia-700` | Fuchsia (Fucsia) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/fuchsia/800` | `#690735` | `--aw-color-fuchsia-800` | Fuchsia (Fucsia) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/fuchsia/900` | `#39041d` | `--aw-color-fuchsia-900` | Fuchsia (Fucsia) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |

### Purple (Púrpura) — Misiones / visited

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/purple/100` | `#f9e6ff` | `--aw-color-purple-100` | Purple (Púrpura) 100. Tono casi blanco. Uso en fondos sutiles y estados disabled. |
| `color/purple/200` | `#ecb4fe` | `--aw-color-purple-200` | Purple (Púrpura) 200. Tono muy claro. Uso en superficies secundarias y tags. |
| `color/purple/300` | `#e082fd` | `--aw-color-purple-300` | Purple (Púrpura) 300. Tono claro. Uso en fondos de énfasis suave y decoración. |
| `color/purple/400` | `#d34ffc` | `--aw-color-purple-400` | Purple (Púrpura) 400. Tono medio-claro. Uso en estados hover y bordes sutiles. |
| `color/purple/500` | `#c71dfb` | `--aw-color-purple-500` | Purple (Púrpura) 500. Tono base de la escala. Valor central de referencia. |
| `color/purple/600` | `#ad04e2` | `--aw-color-purple-600` | Purple (Púrpura) 600. Tono medio. Uso en íconos, bordes y estados intermedios. |
| `color/purple/700` | `#8703b0` | `--aw-color-purple-700` | Purple (Púrpura) 700. Tono medio-oscuro. Uso en textos secundarios y bordes activos. |
| `color/purple/800` | `#5f027c` | `--aw-color-purple-800` | Purple (Púrpura) 800. Tono oscuro. Uso en textos principales y superficies de énfasis. |
| `color/purple/900` | `#3a014b` | `--aw-color-purple-900` | Purple (Púrpura) 900. Tono muy oscuro. Uso en textos de alto contraste o fondos profundos. |

### Violet — novedad

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `color/violet/100` | `#c8a5fe` | `--aw-color-violet-100` | — |
| `color/violet/200` | `#c8a5fe` | `--aw-color-violet-200` | — |
| `color/violet/300` | `#a972fd` | `--aw-color-violet-300` | — |
| `color/violet/400` | `#8a3ffc` | `--aw-color-violet-400` | — |
| `color/violet/500` | `#6c0efb` | `--aw-color-violet-500` | — |
| `color/violet/600` | `#5603d3` | `--aw-color-violet-600` | — |
| `color/violet/700` | `#4103a1` | `--aw-color-violet-700` | — |
| `color/violet/800` | `#1b0141` | `--aw-color-violet-800` | — |
| `color/violet/900` | `#001742` | `--aw-color-violet-900` | — |

### Primary (suelto)

| Token Figma | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|
| `Primary/Color` | `#ffffff` | `--aw-primary-color` | Color primario base del sistema. Referencia para alias semánticos. |

## Semánticos

### Text

Color de texto. Siempre sobre una superficie de la familia `Layer`/`Surface`.

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Text/Text_primary` | `color/black/800_` | `#292929` | `--aw-text-primary` | Texto principal en todos los componentes. |
| `Text/Text_secondary` | `color/black/600` | `#5c5c5c` | `--aw-text-secondary` | Texto secundario. Placeholder, hint text neutral. |
| `Text/Text_disabled` | `color/black/500` | `#707070` | `--aw-text-disabled` | Texto en estado disabled. |
| `Text/Text_on-color` | `color/white/default` | `#ffffff` | `--aw-text-on-color` | Texto sobre fondos de color — botón primary, chip selected, tooltip. |
| `Text/Text_error` | `color/red/600_` | `#db0007` | `--aw-text-error` | Texto de error. Hint text en estado error del input. |

### Icon

Color de íconos (set de íconos McDonald's — no se usan emojis como íconos de sistema).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Icon/on-color` | `color/white/default` | `#ffffff` | `--aw-icon-on-color` | Ícono sobre fondos de color — botón primary, chip selected. |
| `Icon/Primary` | `color/black/800_` | `#292929` | `--aw-icon-primary` | Ícono principal sobre fondos claros. |
| `Icon/gray` | `color/black/600` | `#5c5c5c` | `--aw-icon-gray` | Ícono secundario o de bajo énfasis. |
| `Icon/disabled` | `color/black/500` | `#707070` | `--aw-icon-disabled` | Ícono en estado disabled. |
| `Icon/gold` | `color/gold/500_` | `#ffbc0d` | `--aw-icon-gold` | Ícono en color de marca. Uso sobre fondos oscuros o negros. |
| `Icon/red` | `color/red/600_` | `#db0007` | `--aw-icon-red` | Ícono de error o alerta destructiva. |

### Layer

Superficies apiladas. `Layer/01` es el fondo base; cada número sube un nivel de profundidad.

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Layer/01` | `color/white/default` | `#ffffff` | `--aw-layer-01` | Superficie base. Fondo de pantalla o componente principal. |
| `Layer/02` | `color/black/50` | `#f5f5f5` | `--aw-layer-02` | Superficie secundaria. Cards y elementos sobre fondo base. |
| `Layer/03` | `color/black/100` | `#dbdbdb` | `--aw-layer-03` | Superficie terciaria. Inputs y campos sobre cards. |
| `Layer/04` | `color/black/200` | `#c2c2c2` | `--aw-layer-04` | Superficie cuaternaria. Uso en separadores y bordes sutiles. |
| `Layer/05` | `color/black/700` | `#424242` | `--aw-layer-05` | Superficie oscura. Uso en overlays y elementos de alto contraste. |
| `Layer/06` | `color/black/800_` | `#292929` | `--aw-layer-06` | Superficie más oscura. NavBar item selected, Tooltip background. |
| `Layer/inverse` | `color/black/800_` | `#292929` | `--aw-layer-inverse` | Superficie que invierte el esquema de color. Fondo oscuro Black 800 para elementos que flotan sobre contenido claro. Uso en Tooltip y NavBar item selected. |
| `Layer/brand` | `color/gold/500_` | `#ffbc0d` | `--aw-layer-brand` | Superficie de marca McDonald's. Fondo amarillo Gold 500 del Header. Uso exclusivo en componentes que requieren identidad de marca como fondo principal. |

### Background

Fondos de pantalla y secciones. Hoy son equivalentes 1:1 a `Layer/01…06` (ver audit).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Background/01` | `color/white/default` | `#ffffff` | `--aw-background-01` | Fondo base de pantalla. Superficie principal de la app. |
| `Background/02` | `color/black/50` | `#f5f5f5` | `--aw-background-02` | Fondo secundario. Uso en secciones alternadas o cards sobre fondo blanco. |
| `Background/03` | `color/black/100` | `#dbdbdb` | `--aw-background-03` | Fondo terciario. Uso en inputs deshabilitados y estados de carga. |
| `Background/04` | `color/black/200` | `#c2c2c2` | `--aw-background-04` | Fondo cuaternario. Uso en separadores visuales y zonas de bajo contraste. |
| `Background/05` | `color/black/700` | `#424242` | `--aw-background-05` | Fondo oscuro. Uso en overlays y elementos sobre fondo negro. |
| `Background/06` | `color/black/800_` | `#292929` | `--aw-background-06` | Fondo más oscuro. Uso en tooltips y superficies de alto contraste. |

### Surface

Superficies de componentes (inputs, chips, botones secundarios).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Surface/default` | `color/white/default` | `#ffffff` | `--aw-surface-default` | Superficie principal. Input bg, Chip bg, Secondary button bg |
| `Surface/subtle` | `color/black/50` | `#f5f5f5` | `--aw-surface-subtle` | Superficie sutil. Chip pressed, Disabled bg, Input disabled bg. |
| `Surface/muted` | `color/black/100` | `#dbdbdb` | `--aw-surface-muted` | Superficie apagada. Chip focused bg. |
| `Surface/default-bg` | `color/black/500` | `#707070` | `--aw-surface-default-bg` | Superficie de fondo. Barra de gamification. |

### Border

Trazos. `default` para elementos interactivos, `strong` para focus, `subtle` para disabled.

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Border/default` | `color/black/400` | `#8f8f8f` | `--aw-border-default` | Chip stroke, Secondary button stroke, Input enabled |
| `Border/soft` | `color/black/100` | `#dbdbdb` | `--aw-border-soft` | Borde suave para campos de texto en estado default. Menos prominente que Border/default para no competir con el contenido. Uso en Input Text Field enabled. |
| `Border/strong` | `color/black/700` | `#424242` | `--aw-border-strong` | Focused stroke — button, chip, input |
| `Border/subtle` | `color/black/200` | `#c2c2c2` | `--aw-border-subtle` | Disabled stroke |
| `Border/input-active` | `color/black/800_` | `#292929` | `--aw-border-input-active` | Input completed border |

### Interactive

Estados activos/seleccionados (chip selected, switch ON, toggle).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Interactive/active` | `color/gold/500_` | `#ffbc0d` | `--aw-interactive-active` | Chip selected, Switch ON, Toggle activo |
| `Interactive/active-text` | `color/black/800_` | `#292929` | `--aw-interactive-active-text` | Texto sobre cualquier estado active |
| `Interactive/active-subtle` | `color/black/200` | `#c2c2c2` | `--aw-interactive-active-subtle` | Versión suave del color activo. Uso en tag secondary de destacar. |
| `Interactive/active-text-subtle` | `color/gold/700` | `#a87a00` | `--aw-interactive-active-text-subtle` | Texto sobre active-subtle |

### Feedback

Error, éxito, advertencia e información. Las variantes `-on-black` sólo aplican sobre `Layer/06`.

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Feedback/error` | `color/red/600_` | `#db0007` | `--aw-feedback-error` | Input error border, Tag urgencia primary bg |
| `Feedback/error-on-black` | `color/red/400` | `#ff4248` | `--aw-feedback-error-on-black` | Variante de feedback/error, ajustada para pasar contraste sobre fondo negro (Layer/06). Usar solo en componentes con ese fondo — no es dark mode, no reemplaza al feedback original en el resto del sistema. |
| `Feedback/error-surface` | `color/red/100` | `#ffdbdc` | `--aw-feedback-error-surface` | Tag urgencia secondary bg, Tag estado- secondary |
| `Feedback/error-text` | `color/red/700` | `#a80005` | `--aw-feedback-error-text` | Texto sobre error-surface |
| `Feedback/success` | `color/green/800` | `#1f6538` | `--aw-feedback-success` | Input success, Tag estado+ primary bg |
| `Feedback/success-on-black` | `color/green/700` | `#2b8c4d` | `--aw-feedback-success-on-black` | Variante de feedback/success, ajustada para pasar contraste sobre fondo negro (Layer/06). Usar solo en componentes con ese fondo — no es dark mode, no reemplaza al feedback original en el resto del sistema |
| `Feedback/success-surface` | `color/green/200` | `#c8eed6` | `--aw-feedback-success-surface` | Tag estado+ secondary bg |
| `Feedback/success-surface-text` | `color/green/800` | `#1f6538` | `--aw-feedback-success-surface-text` | Texto sobre success-surface |
| `Feedback/warning` | `color/gold/500_` | `#ffbc0d` | `--aw-feedback-warning` | (alias de interactive/active en contextos de alerta) |
| `Feedback/warning-surface` | `color/gold/200` | `#ffe7a8` | `--aw-feedback-warning-surface` | (alias de interactive/active en contextos de alerta) |
| `Feedback/info` | `color/blue Dark/600` | `#1b67df` | `--aw-feedback-info` | Color principal de información. |
| `Feedback/info-on-black` | `color/blue Dark/500` | `#4584e8` | `--aw-feedback-info-on-black` | Variante de feedback/info, para pasar contraste sobre fondo negro (Layer/06). Usar solo en componentes con ese fondo — no es dark mode, no reemplaza al feedback original en el resto del sistema |
| `Feedback/info-surface` | `color/blue Dark/200` | `#cddef9` | `--aw-feedback-info-surface` | Superficie de información. Fondo de la barra de gamification en estado info. |

### Link

Links en sus estados, sobre fondo claro y sobre fondo oscuro (`inverse`).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Link/default` | `color/blue Dark/700` | `#1652b1` | `--aw-link-default` | Link en estado default. Texto que navega a otra pantalla; si ejecuta una acción. |
| `Link/hover` | `color/blue Dark/600` | `#1b67df` | `--aw-link-hover` | Color del link en estado hover. Solo web. |
| `Link/focus` | `color/blue Dark/800` | `#103c82` | `--aw-link-focus` | Link en estado focused. Solo navegación por teclado o lector de pantalla. |
| `Link/pressed` | `color/black/800_` | `#292929` | `--aw-link-pressed` | Link en estado pressed. |
| `Link/visited` | `color/purple/700` | `#8703b0` | `--aw-link-visited` | Color del link ya visitado. |
| `Link/inverse` | `color/blue Dark/300` | `#a0c0f3` | `--aw-link-inverse` | Link sobre fondos oscuros — estado default. |
| `Link/inverse-hover` | `color/blue Dark/400` | `#72a2ee` | `--aw-link-inverse-hover` | Link sobre fondos oscuros — estado hover. |
| `Link/inverse-focus` | `color/blue Dark/400` | `#72a2ee` | `--aw-link-inverse-focus` | Link sobre fondos oscuros — estado focused. |
| `Link/inverse-pressed` | `color/white/default` | `#ffffff` | `--aw-link-inverse-pressed` | Link sobre fondos oscuros — mientras se toca. |
| `Link/inverse-visited` | `color/purple/200` | `#ecb4fe` | `--aw-link-inverse-visited` | Sobre fondos oscuros — ya visitado. |

### Trust

Mensajes de confianza (tags de confianza).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Trust/default` | `color/blue Dark/600` | `#1b67df` | `--aw-trust-default` | Color principal de confianza. Tag confianza primary bg. |
| `Trust/bg-default` | `color/blue Dark/200` | `#cddef9` | `--aw-trust-bg-default` | Superficie de confianza. Tag confianza secondary bg. |
| `Trust/default-text` | `color/blue Dark/800` | `#103c82` | `--aw-trust-default-text` | Texto sobre superficie de confianza. |

### highlight

Señala novedad: features nuevas, onboarding, badges de "Nuevo".

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `highlight/new` | `color/violet/400` | `#8a3ffc` | `--aw-highlight-new` | Indica al usuario que algo es nuevo o que nunca fue visto antes — funcionalidades nuevas, onboarding, walkthroughs, badges de novedad. |

### Feacture

Colores de identidad de programas/features específicos.

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Feacture/Misiones` | `color/purple/800` | `#5f027c` | `--aw-feacture-misiones` | Color sólido de identidad del programa Misiones — íconos, texto o fondos donde se necesita el purple pleno (no un tint). Usar Misiones-surface para fondos claros que necesiten contraste con este color. |
| `Feacture/Misiones-surface` | `color/purple/100` | `#f9e6ff` | `--aw-feacture-misiones-surface` | Color de fondo/superficie de la identidad del programa Misiones (cards, headers, íconos). |
| `Feacture/accessibility` | `color/blue Dark/700` | `#1652b1` | `--aw-feacture-accessibility` | Color del ícono/indicador de accesibilidad — señala que un elemento tiene una función o ajuste de accesibilidad disponible. |

### Button

Tokens de componente: Button. Viven hoy en la colección Semantic (ver audit).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Button/primary` | `color/gold/500_` | `#ffbc0d` | `--aw-button-primary` | Fondo del botón primario en estado enabled. |
| `Button/primary-pressed` | `color/gold/400` | `#ffcb42` | `--aw-button-primary-pressed` | Fondo del botón primario en estado pressed. |
| `Button/primary-focus` | `color/gold/600` | `#db9f00` | `--aw-button-primary-focus` | Fondo del botón primario en estado focused. Solo accesibilidad. |
| `Button/primary-disabled` | `color/gold/100` | `#fff5db` | `--aw-button-primary-disabled` | Fondo del botón primario en estado disabled. |
| `Button/text-enabled` | `color/black/800_` | `#292929` | `--aw-button-text-enabled` | Color de texto del botón en estado enabled. |
| `Button/text-disabled` | `color/black/500` | `#707070` | `--aw-button-text-disabled` | Color de texto del botón en estado disabled. |
| `Button/secondary` | `Primary/Color` | `#ffffff` | `--aw-button-secondary` | Fondo del botón secondary en estado enabled. |
| `Button/secondary-pressed` | `color/black/50` | `#f5f5f5` | `--aw-button-secondary-pressed` | Fondo del botón secondary en estado pressed. |
| `Button/secondary-focus` | `color/black/50` | `#f5f5f5` | `--aw-button-secondary-focus` | Fondo del botón secondary en estado focused. |
| `Button/secondary-disabled` | `color/black/50` | `#f5f5f5` | `--aw-button-secondary-disabled` | Fondo del botón secondary en estado disabled. |
| `Button/secondary-stroke` | `color/black/400` | `#8f8f8f` | `--aw-button-secondary-stroke` | Borde del botón secondary en estado enabled. |
| `Button/secondary-stroke-pressed` | `color/black/400` | `#8f8f8f` | `--aw-button-secondary-stroke-pressed` | Borde del botón secondary en estado pressed. |
| `Button/secondary-stroke-focus` | `color/black/700` | `#424242` | `--aw-button-secondary-stroke-focus` | Borde del botón secondary en estado focused. |
| `Button/secondary-stroke-disabled` | `color/black/500` | `#707070` | `--aw-button-secondary-stroke-disabled` | Borde del botón secondary en estado disabled. |
| `Button/ghost` | `color/white/transparent` | `#ffffff00` | `--aw-button-ghost` | Fondo transparente del botón ghost en estado enabled. |
| `Button/ghost-pressed` | `color/black/50` | `#f5f5f5` | `--aw-button-ghost-pressed` | Fondo del botón ghost en estado pressed. |

### Chip

Tokens de componente: Chip. Viven hoy en la colección Semantic (ver audit).

| Token Figma | Alias → primitivo | Hex | CSS var (propuesta) | Uso |
|---|---|---|---|---|
| `Chip/icon` | `color/black/800_` | `#292929` | `--aw-chip-icon` | Color del ícono dentro del chip en estado enabled. |
| `Chip/icon-disabled` | `color/black/500` | `#707070` | `--aw-chip-icon-disabled` | Color del ícono dentro del chip en estado disabled. |
| `Chip/enabled-bg` | `color/white/default` | `#ffffff` | `--aw-chip-enabled-bg` | Fondo del chip en estado enabled. |
| `Chip/enabled-stroke` | `color/black/400` | `#8f8f8f` | `--aw-chip-enabled-stroke` | Borde del chip en estado enabled. |
| `Chip/enabled-text` | `color/black/800_` | `#292929` | `--aw-chip-enabled-text` | Texto del chip en estado enabled. |
| `Chip/selected-bg` | `color/gold/500_` | `#ffbc0d` | `--aw-chip-selected-bg` | Fondo del chip en estado selected. Filtro activo. |
| `Chip/selected-text` | `color/black/800_` | `#292929` | `--aw-chip-selected-text` | Texto del chip en estado selected. |
| `Chip/pressed-bg` | `color/black/50` | `#f5f5f5` | `--aw-chip-pressed-bg` | Fondo del chip en estado pressed. |
| `Chip/pressed-stroke` | `color/black/400` | `#8f8f8f` | `--aw-chip-pressed-stroke` | Borde del chip en estado pressed. |
| `Chip/focused-bg` | `color/black/100` | `#dbdbdb` | `--aw-chip-focused-bg` | Fondo del chip en estado focused. Solo accesibilidad. |
| `Chip/focused-stroke` | `color/black/400` | `#8f8f8f` | `--aw-chip-focused-stroke` | Borde del chip en estado focused. Solo accesibilidad. |
| `Chip/disabled-bg` | `color/black/50` | `#f5f5f5` | `--aw-chip-disabled-bg` | Fondo del chip en estado disabled. |
| `Chip/disabled-stroke` | `color/black/200` | `#c2c2c2` | `--aw-chip-disabled-stroke` | Borde del chip en estado disabled. |
| `Chip/disabled-text` | `color/black/500` | `#707070` | `--aw-chip-disabled-text` | Texto del chip en estado disabled. |

## Gradientes de marca

Definidos como estilos de pintura (no variables). Lineales, horizontales; `Loyalty BA` es el inverso de `Loyalty AB`.

#### Loyalty AB

```css
background: linear-gradient(90deg, #910063 0.1%, #990059 3.6%, #b60035 17.3%, #ca001c 30.1%, #d7000c 41.7%, #db0007 51%, #e8720a 100%);
```

#### Loyalty BA

```css
background: linear-gradient(90deg, #e8720a 0%, #db0007 51%, #d7000c 62%, #ca001c 72.9%, #b60035 82.8%, #990059 92.2%, #910063 100%);
```

## Contraste verificado (WCAG 2.1 AA)

Calculado sobre los valores resueltos de los pares semánticos de uso real. Los fallos están detallados con propuestas en [`audit.md`](../audit.md).

| Primer plano | Fondo | Ratio | Criterio | Resultado |
|---|---|---|---|---|
| `Text/Text_primary` `#292929` | `Layer/01` `#ffffff` | **14.55:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_primary` `#292929` | `Layer/02` `#f5f5f5` | **13.34:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_primary` `#292929` | `Layer/03` `#dbdbdb` | **10.51:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_secondary` `#5c5c5c` | `Layer/01` `#ffffff` | **6.69:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_secondary` `#5c5c5c` | `Layer/02` `#f5f5f5` | **6.13:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_secondary` `#5c5c5c` | `Layer/03` `#dbdbdb` | **4.83:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_disabled` `#707070` | `Layer/01` `#ffffff` | **4.95:1** | Disabled | — (exento: disabled) |
| `Text/Text_error` `#db0007` | `Layer/01` `#ffffff` | **5.23:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_on-color` `#ffffff` | `Button/primary` `#ffbc0d` | **1.69:1** | Texto (4.5:1) | ❌ Falla |
| `Text/Text_on-color` `#ffffff` | `Layer/brand` `#ffbc0d` | **1.69:1** | Texto (4.5:1) | ❌ Falla |
| `Text/Text_on-color` `#ffffff` | `Layer/06` `#292929` | **14.55:1** | Texto (4.5:1) | ✅ AA |
| `Button/text-enabled` `#292929` | `Button/primary` `#ffbc0d` | **8.63:1** | Texto (4.5:1) | ✅ AA |
| `Button/text-enabled` `#292929` | `Button/primary-pressed` `#ffcb42` | **9.61:1** | Texto (4.5:1) | ✅ AA |
| `Button/text-enabled` `#292929` | `Button/primary-focus` `#db9f00` | **6.22:1** | Texto (4.5:1) | ✅ AA |
| `Button/text-disabled` `#707070` | `Button/primary-disabled` `#fff5db` | **4.56:1** | Disabled | — (exento: disabled) |
| `Icon/on-color` `#ffffff` | `Button/primary` `#ffbc0d` | **1.69:1** | UI / ícono / borde (3:1) | ❌ Falla |
| `Icon/on-color` `#ffffff` | `Chip/selected-bg` `#ffbc0d` | **1.69:1** | UI / ícono / borde (3:1) | ❌ Falla |
| `Icon/gold` `#ffbc0d` | `Layer/06` `#292929` | **8.63:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Icon/gold` `#ffbc0d` | `Layer/01` `#ffffff` | **1.69:1** | UI / ícono / borde (3:1) | ❌ Falla |
| `Icon/Primary` `#292929` | `Layer/01` `#ffffff` | **14.55:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Icon/gray` `#5c5c5c` | `Layer/01` `#ffffff` | **6.69:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Icon/red` `#db0007` | `Layer/01` `#ffffff` | **5.23:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Chip/enabled-text` `#292929` | `Chip/enabled-bg` `#ffffff` | **14.55:1** | Texto (4.5:1) | ✅ AA |
| `Chip/selected-text` `#292929` | `Chip/selected-bg` `#ffbc0d` | **8.63:1** | Texto (4.5:1) | ✅ AA |
| `Chip/disabled-text` `#707070` | `Chip/disabled-bg` `#f5f5f5` | **4.54:1** | Disabled | — (exento: disabled) |
| `Chip/enabled-stroke` `#8f8f8f` | `Chip/enabled-bg` `#ffffff` | **3.23:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Border/default` `#8f8f8f` | `Layer/01` `#ffffff` | **3.23:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Border/soft` `#dbdbdb` | `Layer/01` `#ffffff` | **1.38:1** | UI / ícono / borde (3:1) | ❌ Falla |
| `Border/strong` `#424242` | `Layer/01` `#ffffff` | **10.05:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Border/input-active` `#292929` | `Layer/01` `#ffffff` | **14.55:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Button/secondary-stroke` `#8f8f8f` | `Layer/01` `#ffffff` | **3.23:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Feedback/error` `#db0007` | `Layer/01` `#ffffff` | **5.23:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Feedback/error-text` `#a80005` | `Feedback/error-surface` `#ffdbdc` | **6.16:1** | Texto (4.5:1) | ✅ AA |
| `Feedback/error-on-black` `#ff4248` | `Layer/06` `#292929` | **4.24:1** | Texto (4.5:1) | ⚠️ Sólo texto grande / UI |
| `Feedback/success` `#1f6538` | `Layer/01` `#ffffff` | **7.05:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Feedback/success-surface-text` `#1f6538` | `Feedback/success-surface` `#c8eed6` | **5.60:1** | Texto (4.5:1) | ✅ AA |
| `Feedback/success-on-black` `#2b8c4d` | `Layer/06` `#292929` | **3.44:1** | Texto (4.5:1) | ⚠️ Sólo texto grande / UI |
| `Feedback/warning` `#ffbc0d` | `Layer/01` `#ffffff` | **1.69:1** | UI / ícono / borde (3:1) | ❌ Falla |
| `Text/Text_primary` `#292929` | `Feedback/warning-surface` `#ffe7a8` | **11.95:1** | Texto (4.5:1) | ✅ AA |
| `Feedback/info` `#1b67df` | `Layer/01` `#ffffff` | **5.18:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Text/Text_primary` `#292929` | `Feedback/info-surface` `#cddef9` | **10.68:1** | Texto (4.5:1) | ✅ AA |
| `Feedback/info-on-black` `#4584e8` | `Layer/06` `#292929` | **3.96:1** | Texto (4.5:1) | ⚠️ Sólo texto grande / UI |
| `Interactive/active` `#ffbc0d` | `Layer/01` `#ffffff` | **1.69:1** | UI / ícono / borde (3:1) | ❌ Falla |
| `Interactive/active-text` `#292929` | `Interactive/active` `#ffbc0d` | **8.63:1** | Texto (4.5:1) | ✅ AA |
| `Interactive/active-text-subtle` `#a87a00` | `Interactive/active-subtle` `#c2c2c2` | **2.16:1** | Texto (4.5:1) | ❌ Falla |
| `Link/default` `#1652b1` | `Layer/01` `#ffffff` | **7.30:1** | Texto (4.5:1) | ✅ AA |
| `Link/hover` `#1b67df` | `Layer/01` `#ffffff` | **5.18:1** | Texto (4.5:1) | ✅ AA |
| `Link/focus` `#103c82` | `Layer/01` `#ffffff` | **10.55:1** | Texto (4.5:1) | ✅ AA |
| `Link/visited` `#8703b0` | `Layer/01` `#ffffff` | **7.86:1** | Texto (4.5:1) | ✅ AA |
| `Link/inverse` `#a0c0f3` | `Layer/06` `#292929` | **7.85:1** | Texto (4.5:1) | ✅ AA |
| `Link/inverse-visited` `#ecb4fe` | `Layer/06` `#292929` | **8.68:1** | Texto (4.5:1) | ✅ AA |
| `Trust/default-text` `#103c82` | `Trust/bg-default` `#cddef9` | **7.74:1** | Texto (4.5:1) | ✅ AA |
| `Text/Text_on-color` `#ffffff` | `Trust/default` `#1b67df` | **5.18:1** | Texto (4.5:1) | ✅ AA |
| `Feacture/Misiones` `#5f027c` | `Feacture/Misiones-surface` `#f9e6ff` | **9.96:1** | Texto (4.5:1) | ✅ AA |
| `highlight/new` `#8a3ffc` | `Layer/01` `#ffffff` | **5.00:1** | UI / ícono / borde (3:1) | ✅ AA |
| `Text/Text_on-color` `#ffffff` | `highlight/new` `#8a3ffc` | **5.00:1** | Texto (4.5:1) | ✅ AA |
| `Feacture/accessibility` `#1652b1` | `Layer/01` `#ffffff` | **7.30:1** | UI / ícono / borde (3:1) | ✅ AA |

## Uso en código

Los tokens se exportan en [`tokens/archway.tokens.json`](../tokens/archway.tokens.json) (formato W3C DTCG). Los nombres de CSS var son una **propuesta** de normalización (Figma hoy no define `codeSyntax` para casi ningún token).

```css
.button--primary {
  background: var(--aw-button-primary);
  color: var(--aw-button-text-enabled);
}
```
