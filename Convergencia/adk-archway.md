# Convergencia de Foundations — ADK → ArchWay

> **Fuentes:** [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) y [Archway Foundations Library](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library), extraídas vía Figma MCP el 2026-10-09.
> **Estado:** análisis para decidir. Nada de esto está aplicado.
> **Distancia perceptual ΔE (CIE76):**
>
> | ΔE | Lectura |
> |---|---|
> | < 0.5 | Igual |
> | < 3 | Redondeo |
> | < 8 | Cercano |
>
> **Relacionado:** [`dashboard-archway.md`](./dashboard-archway.md). Varias decisiones son compartidas y conviene tomarlas juntas.

## Resumen

**ADK es el caso más simple y el más urgente.** Es simple porque no tiene variables propias: no hay colección que re-aliasar, se enlaza directo a ArchWay. Es urgente porque hoy cada color y cada texto es un valor suelto, y cualquier cambio de formato (tablets, kioscos chicos) obliga a rehacer pantallas a mano.

| | ADK hoy | Qué hace falta |
|---|---|---|
| Color | ~2.700 hex sueltos · 28 nodos ya enlazados a ArchWay Semantic | Enlazar a ArchWay Semantic (la librería ya está habilitada en el archivo) |
| Tipografía | 20 estilos locales · 3.272 textos sin estilo | **Modo Kiosk** en `Font/size` y `Font/line-height` de ArchWay (audit ArchWay F-02) y aplicar los estilos de ArchWay |
| Espaciado | 14 spacers documentados, sin variables | ArchWay `spacing/*` + 96 y 112 |
| Radios | 4 · 8 · 12 · 16 · pills | ArchWay XS–L + `full` |
| Elevación | 2 sombras sueltas | ArchWay elevation + variante "up" |
| Layout | 1 lienzo fijo 1080 × 1920 | Breakpoints por orientación + grilla fluida para tablet y kiosco chico |
| Touch | 40–80 px, sin regla | Token `size/touch-target` por modo |

### Los números

| | Primitivos ADK (31) | Semánticos propuestos (39) |
|---|---|---|
| Igual en ArchWay | 11 | 15 |
| Redondeo | 5 | 7 |
| Cercano | 7 | 3 |
| Distinto | — | 11 |
| Sin equivalente | 8 | 3 |

- **La marca coincide exacto:** Gold `#FFBC0D`, Red `#DB0007`, Black `#292929`, Dark Blue, Fuchsia, Green, Green Disabled, Link Visited y los gradientes Loyalty son idénticos.
- **Los grises son los mismos que Dashboard** (`#6F6F6F`, `#ADADAD`, `#D6D6D6`, `#F9F9F9`). Las decisiones de grises que se tomen para Dashboard sirven para ADK.
- **Lo que más trabajo da es la tipografía:** la escala de kiosco es ~1.5× en cuerpo y ~2× en títulos respecto de mobile. Se resuelve con un modo, sin estilos nuevos (ver [Tipografía](#tipografía-modo-kiosk)).

## Comparativa por foundation

| Foundation | ArchWay | ADK | Diagnóstico |
|---|---|---|---|
| **Arquitectura** | Primitives → Semantic | Sin variables (paleta como muestras) | ✅ Sin conflicto de nombres: ADK adopta ArchWay tal cual |
| **Color – marca** | gold 500, red 600, black 800 | Idénticos | ✅ |
| **Color – grises** | `black/50…900` | Dark Grey, Grey, Light Grey, Ivory (= Dashboard) | Redondeo en 4 de 5; mismas decisiones que Dashboard |
| **Color – links** | `blue Dark/700` `#1652B1` | `#0F62FE` (= Dashboard) | ❗ Misma decisión que Dashboard D4 |
| **Botón primario** | Sin borde · pressed más claro (`gold/400`) | Borde `#C08B00` · hover más oscuro (`#F1B417`) | ❗ Direcciones opuestas en el estado presionado |
| **Feedback** | Superficies + `*-on-black` | 4 colores sueltos de borde de snackbar | ArchWay cubre todo |
| **Tipografía** | 20 estilos 12–36, enlazados a `Font/*` | 20 estilos 12–128, sueltos, tracking −0.15 | ❗ Modo Kiosk (F-02) |
| **Espaciado** | 0–88 por px | 4–112 por px | ✅ Misma convención. Faltan 96 y 112 semánticos |
| **Radios** | XS 4 · S 8 · M 12 · L 16 · XXL 32 · XXXL 160 | 4 · 8 · 12 · 16 · 20 · pills | ✅ El 20 de ADK es "mitad del alto" = `full` (F-03) |
| **Elevación** | Shallow / Deep ×3, hacia abajo | 0 8 16 /16 % y 0 −8 16 /16 % | Geometría = Deep M; falta la variante hacia arriba |
| **Motion** | Duraciones, curvas, press scale | No existe | Aporte de ArchWay |
| **Layout** | Master frame mobile 412 | Lienzo kiosco 1080 × 1920, zonas fijas | Aporte de ADK, pero hay que hacerlo fluido |
| **Breakpoints** | No existen (F-01) | No existen | Se definen junto con Dashboard (D6) + orientación |
| **Accesibilidad física** | — | Área accesible 800 / 960 inferior | Aporte de ADK (patrón de alcance) |
| **Touch target** | — | De facto 56–80 | Token nuevo por modo |

## Decisiones necesarias

| # | Decisión | Opciones | Recomendación |
|---|---|---|---|
| K1 | **Azul de links** | `#0F62FE` (ADK, Dashboard) · `#1652B1` (ArchWay) | Se decide con Dashboard **D4**. Recomendamos ArchWay: 7.30:1 vs 5.00:1, y en kiosco hay reflejos |
| K2 | **Borde del secundario y de inputs** | `#6F6F6F` (ADK, 5.02:1) · `#8F8F8F` (ArchWay, 3.23:1) | Que ArchWay suba `button/secondary-stroke` y `border/default` a `black/500` `#707070`. Mejora todas las plataformas y resuelve A-A02 en ADK sin cambio visible |
| K3 | **Estado presionado del primario** | Más oscuro `#F1B417` (ADK) · más claro `gold/400` (ArchWay) | Uno solo para todo el ecosistema. Recomendamos **más oscuro** (`gold/600` `#DB9F00`, cercano al de ADK): da sensación de "hundido" y mantiene 6.22:1 con el texto. Coordinar con Dashboard D8 |
| K4 | **Borde del primario** | Con borde (ADK) · sin borde (ArchWay) | Agregar `button/primary-stroke` = `gold/700` `#A87A00` (3.85:1 vs blanco) como opcional. En kiosco y Web el botón queda delimitado sobre blanco |
| K5 | **Disabled** | Opacidad 40 % (ADK) · tokens `*-disabled` (ArchWay) | ArchWay. Cambio visible: `text/disabled` pasa de `#ADADAD` a `#707070` |
| K6 | **Feedback sobre oscuro** | Colores de ADK (lime, light blue, `#FA4D56`) · `feedback/*-on-black` | ArchWay. `success-on-black` `#2B8C4D` da 3.44:1 sobre `#292929`, justo para no-texto: evaluar `lime/500` (7.46:1) |
| K7 | **Colores sin equivalente** | Blue `#006BAE`, Light Blue, Beige, Blue Disabled | Revisar los 19 usos de Blue; Beige y Light Blue son de ilustración. Ninguno pasa a ArchWay salvo que producto lo pida |
| K8 | **Tipografía de kiosco** | Escala propia de ADK · modo `kiosk` sobre ArchWay | **Modo `kiosk`** en `Font/size` y `Font/line-height`. Mismos estilos, otros valores (ver tabla) |
| K9 | **Escalones que sobran** | ADK 128, 36 y 12 no tienen rol en ArchWay | 128 queda como token de squad `adk/display-hero` (sólo Attract). 36 se funde en 40. 12 se elimina (mínimo 16 en kiosco) |
| K10 | **Tracking** | −0.15 (ADK) · 0 / +0.25 (ArchWay) | ArchWay, con `letter-spacing/m` = 0 en modo kiosk |
| K11 | **Formatos** | Kiosco fijo · breakpoints por ancho + orientación | Breakpoints compartidos con Dashboard + `kiosk-s` / `kiosk` / `tablet` por orientación |
| K12 | **Touch target** | 44 (WCAG AAA 2.5.5) · 48 · 56 | Token `size/touch-target`: mobile 48 · tablet 48 · kiosk 56 |
| K13 | **Dónde viven los componentes de kiosco** | Core ArchWay · Squad ADK | Header, footer, nav lateral, keyboard y attract son **Squad Components de ADK**, sobre foundations ArchWay |

## Qué aporta cada sistema

### ADK → ArchWay

1. **Valores del modo `kiosk`** de tipografía: resuelve la mitad de F-02.
2. **Touch target por plataforma** y la regla de 56 en kiosco.
3. **Área accesible (reach zone)**: patrón reutilizable también en tablets de mostrador.
4. **Elevación hacia arriba** (`*-up`): útil también para bottom bars y bottom sheets de la app.
5. **Variante Selection** de botón (borde 3 px): ArchWay no tiene un "botón seleccionable".
6. **Teclado en pantalla** como patrón de squad.
7. **Spacing 96 y 112** como semánticos.

### ArchWay → ADK

1. **Tokens de color y texto enlazados.** Hoy no hay ninguno.
2. **Estados completos:** pressed, focus y disabled como tokens, no opacidad.
3. **Feedback completo** (superficies, `*-on-black`, texto de error y de éxito).
4. **Motion** (duraciones, curvas, `press.scale`) y **elevación** con nombre.
5. **Escalas de color completas** para badges y highlights.

## Plan por fases

```
Fase 0  Decisiones K1–K13 ──► Fase 1  ArchWay incorpora ──► Fase 2  Binding en Figma ADK
        (+ Dashboard D1–D8)         modo kiosk, full,             (scripts sobre ~2.700
                                    touch-target, *-up…           colores y 3.272 textos)
                                                                        │
Fase 4  Retiro de estilos ADK ◄── Fase 3  Código Web ADK sobre tokens ArchWay ◄┘
```

| Fase | Qué se hace | Dónde | Riesgo |
|---|---|---|---|
| **0 · Decidir** | Cerrar K1–K13 en la misma sesión que Dashboard D1–D8 y el audit P0 de ArchWay | DesignOps | — |
| **1 · ArchWay crece** | Modo `kiosk` (y `tablet`) en `Font/*`, `radius/full`, `spacing/96` y `/112`, `elevation/*-up`, `button/primary-stroke`, pressed definido (K3), `size/touch-target`, breakpoints | Figma ArchWay → `Archway/` | Bajo: sólo agrega |
| **2a · Color** | Script que reemplaza cada hex por la variable ArchWay según **propiedad + valor** (tabla [Binding](#reglas-de-binding)). Lo ambiguo queda en un reporte para revisión manual | Figma ADK | Medio: cambios visibles en "Distinto" |
| **2b · Texto** | Script que aplica el estilo ArchWay más cercano según tamaño y peso, y pone los frames de ADK en modo `kiosk` (los modos de variables se fijan por frame o página) | Figma ADK | Medio: cambian los interlineados |
| **2c · Forma** | Radios → `radius/*`, sombras → elevation, spacing → variables en auto layout | Figma ADK | Bajo |
| **3 · Código** | Web ADK (Nuxt 4 + Vue 3 + Tailwind) consume el preset de ArchWay con `data-platform="kiosk"`. Durante la transición, un archivo puente `adk-to-archway.css` | Repo | Bajo: no hay código de tokens previo |
| **4 · Retiro** | Deprecar los 20 text styles `ADK/*` y la página *Colors* (queda link a ArchWay) | Figma ADK | Bajo |

**Por qué ADK no tiene fase de "re-alias":** a diferencia de Dashboard, no hay semánticos propios que mantener. Crear una colección ADK para después migrarla sería trabajo doble. Los semánticos de [`adk.tokens.json`](../ADK/tokens/adk.tokens.json) son **sólo un mapa**: dicen a qué token ArchWay va cada uso.

### Reglas de binding

Cómo decide el script de la fase 2a. Se lee por propiedad y por hex:

| Hex | En `fills` de TEXT | En `fills` de frame/shape | En `strokes` |
|---|---|---|---|
| `#292929` | `Text/primary` | `Background/06` (snackbar) | `Border/input-active` |
| `#FFFFFF` | `Text/on-color` | `Background/01` | — (revisar) |
| `#FFBC0D` | — (revisar) | `Button/primary` · `Layer/brand` · `Interactive/active` según componente | `Interactive/active` |
| `#6F6F6F` | `Text/secondary` | — (revisar) | `Button/secondary-stroke` |
| `#ADADAD` | `Text/disabled` | `Background/04` (thumb) | `Border/default` (corrige A-A02) |
| `#D6D6D6` | — | `Background/03` | `Border/soft` |
| `#F9F9F9` | — | `Background/02` | — |
| `#F1F1F1` | — | `Button/secondary-pressed` | — |
| `#F1B417` | — | `Button/primary-pressed` (K3) | — |
| `#C08B00` | — | — | `Button/primary-stroke` (K4) |
| `#DB0007` | `Text/error` | `Feedback/error` | `Feedback/error` |
| `#808080` · `#979797` · `#000000` | Revisión manual (A-S04) | | |

Cada nodo que el script toca queda listado en un reporte (página + componente + valor anterior), para hacer QA visual por pantalla.

### Puente de código (fase 3)

```css
/* adk-to-archway.css — se borra al terminar la migración */
:root[data-platform='kiosk'] {
  /* Tipografía: valores del modo kiosk de ArchWay */
  --aw-font-size-xs: 16px;  --aw-font-size-s: 22px;  --aw-font-size-m: 24px;  --aw-font-size-l: 28px;
  --aw-font-size-xl: 40px;  --aw-font-size-2xl: 48px; --aw-font-size-3xl: 60px; --aw-font-size-4xl: 80px;
  --aw-font-line-height-s: 24px; --aw-font-line-height-m: 28px; --aw-font-line-height-l: 32px;
  --aw-font-line-height-xl: 44px; --aw-font-line-height-2xl: 52px; --aw-font-line-height-3xl: 64px;
  --aw-font-line-height-4xl: 80px;
  --aw-font-letter-spacing-m: 0px;
  --aw-size-touch-target: 56px;
}
```

```ts
// tailwind.config.ts de ADK: preset de ArchWay + pantallas por orientación
import archway from '@arcos-dorados/archway/tailwind.preset'
export default {
  presets: [archway],
  theme: {
    extend: {
      screens: {
        tablet: { raw: '(orientation: landscape) and (min-width: 1024px)' },
        'kiosk-s': { raw: '(orientation: portrait) and (min-width: 768px)' },
        kiosk: { raw: '(orientation: portrait) and (min-width: 1024px)' },
      },
    },
  },
}
```

## Mapa de primitivos

Cada color de la paleta ADK contra el primitivo ArchWay más cercano.

| Grupo | Nombre Figma | Token ADK | Hex | ArchWay más cercano | ΔE | Resultado |
|---|---|---|---|---|---|---|
| primary | McDonald's Gold | `primary.gold` | `#FFBC0D` | `gold.500` `#FFBC0D` | 0.0 | Igual |
| primary | McDonald's Red | `primary.red` | `#DB0007` | `red.600` `#DB0007` | 0.0 | Igual |
| primary | Black | `primary.black` | `#292929` | `black.800` `#292929` | 0.0 | Igual |
| primary | White | `primary.white` | `#FFFFFF` | `white.default` `#FFFFFF` | 0.0 | Igual |
| secondary | Blue | `secondary.blue` | `#006BAE` | `blue-dark.800` `#103C82` | 22.0 | Sin equivalente |
| secondary | Dark Grey | `secondary.dark-grey` | `#6F6F6F` | `black.500` `#707070` | 0.4 | Igual |
| secondary | Grey | `secondary.grey` | `#ADADAD` | `black.300` `#A8A8A8` | 1.9 | ≈ redondeo |
| secondary | Light Grey | `secondary.light-grey` | `#D6D6D6` | `black.100` `#DBDBDB` | 1.8 | ≈ redondeo |
| secondary | Ivory | `secondary.ivory` | `#F9F9F9` | `black.50` `#F5F5F5` | 1.4 | ≈ redondeo |
| tertiary | McDonald's Green | `tertiary.green` | `#1F6437` | `green.800` `#1F6538` | 0.5 | Igual |
| tertiary | Light Green | `tertiary.light-green` | `#A9C141` | `lime.500` `#ADC44B` | 3.1 | Cercano |
| tertiary | Dark Blue | `tertiary.dark-blue` | `#103C82` | `blue-dark.800` `#103C82` | 0.0 | Igual |
| tertiary | Light Blue | `tertiary.light-blue` | `#56AFD1` | `blue-dark.300` `#A0C0F3` | 20.7 | Sin equivalente |
| tertiary | Fuschia | `tertiary.fuchsia` | `#9A0A4D` | `fuchsia.700` `#9A0A4D` | 0.0 | Igual |
| tertiary | Beige | `tertiary.beige` | `#B69A81` | `black.300` `#A8A8A8` | 18.5 | Sin equivalente |
| tertiary | Gold Disabled | `tertiary.gold-disabled` | `#FFE49E` | `gold.200` `#FFE7A8` | 4.0 | Cercano |
| tertiary | Blue Disabled | `tertiary.blue-disabled` | `#CCF0FF` | `blue-dark.100` `#E8F0FC` | 9.4 | Sin equivalente |
| tertiary | Green Disabled | `tertiary.green-disabled` | `#E2EABF` | `lime.200` `#E2EABF` | 0.0 | Igual |
| tertiary | Dark Red | `tertiary.dark-red` | `#9A0005` | `red.700` `#A80005` | 5.9 | Cercano |
| accent | Accent Gold | `accent.gold` | `#C08B00` | `gold.700` `#A87A00` | 9.5 | Sin equivalente |
| accent | Hover Gold | `accent.gold-hover` | `#F1B417` | `gold.500` `#FFBC0D` | 6.0 | Cercano |
| accent | Accent Grey | `accent.grey` | `#959595` | `black.400` `#8F8F8F` | 2.3 | ≈ redondeo |
| link | Link | `link.default` | `#0F62FE` | `blue-dark.600` `#1B67DF` | 21.5 | Sin equivalente |
| link | Link Hover | `link.hover` | `#054ADA` | `blue-dark.600` `#1B67DF` | 20.8 | Sin equivalente |
| link | Link Visited | `link.visited` | `#8A3FFC` | `violet.400` `#8A3FFC` | 0.0 | Igual |
| illustration | Ground Shadow | `illustration.ground-shadow` | `#F1F1F1` | `black.50` `#F5F5F5` | 1.4 | ≈ redondeo |
| illustration | Neutral Grey | `illustration.neutral-grey` | `#EAEAEA` | `black.50` `#F5F5F5` | 3.8 | Cercano |
| undocumented | — (sin nombre) | `undocumented.grey-808080` | `#808080` | `black.400` `#8F8F8F` | 5.8 | Cercano |
| undocumented | — (sin nombre) | `undocumented.black-000000` | `#000000` | `black.900` `#0F0F0F` | 4.3 | Cercano |
| undocumented | — (sin nombre) | `undocumented.error-red` | `#FA4D56` | `red.400` `#FF4248` | 8.7 | Sin equivalente |
| undocumented | — (sin nombre) | `undocumented.orange` | `#FE8234` | `orange.400` `#FE8234` | 0.0 | Igual |


## Mapa de semánticos

Cómo queda cada uso de ADK en ArchWay. **Distinto** y **Cercano** cambian de color visible: son los que hay que revisar en pantalla.

| Semántico ADK (propuesta) | Primitivo | Hex | Destino ArchWay | Hex ArchWay | ΔE | Resultado |
|---|---|---|---|---|---|---|
| `background.default` | `primary.white` | `#FFFFFF` | `background.01` | `#FFFFFF` | 0.0 | Igual |
| `background.subtle` | `secondary.ivory` | `#F9F9F9` | `background.02` | `#F5F5F5` | 1.4 | ≈ redondeo |
| `background.muted` | `illustration.ground-shadow` | `#F1F1F1` | `button.secondary-pressed` | `#F5F5F5` | 1.4 | ≈ redondeo |
| `background.inverse` | `primary.black` | `#292929` | `background.06` | `#292929` | 0.0 | Igual |
| `background.brand` | `primary.gold` | `#FFBC0D` | `layer.brand` | `#FFBC0D` | 0.0 | Igual |
| `text.primary` | `primary.black` | `#292929` | `text.primary` | `#292929` | 0.0 | Igual |
| `text.secondary` | `secondary.dark-grey` | `#6F6F6F` | `text.secondary` | `#5C5C5C` | 7.8 | Cercano |
| `text.disabled` | `secondary.grey` | `#ADADAD` | `text.disabled` | `#707070` | 23.5 | Distinto |
| `text.on-color` | `primary.white` | `#FFFFFF` | `text.on-color` | `#FFFFFF` | 0.0 | Igual |
| `text.error` | `primary.red` | `#DB0007` | `text.error` | `#DB0007` | 0.0 | Igual |
| `link.default` | `link.default` | `#0F62FE` | `link.default` | `#1652B1` | 34.9 | Distinto |
| `link.hover` | `link.hover` | `#054ADA` | `link.hover` | `#1B67DF` | 20.8 | Distinto |
| `link.visited` | `link.visited` | `#8A3FFC` | `link.visited` | `#8703B0` | 26.7 | Distinto |
| `border.default` | `secondary.dark-grey` | `#6F6F6F` | `button.secondary-stroke` | `#8F8F8F` | 12.6 | Distinto |
| `border.subtle` | `secondary.light-grey` | `#D6D6D6` | `border.soft` | `#DBDBDB` | 1.8 | ≈ redondeo |
| `border.strong` | `primary.black` | `#292929` | `border.input-active` | `#292929` | 0.0 | Igual |
| `border.selected` | `primary.gold` | `#FFBC0D` | `interactive.active` | `#FFBC0D` | 0.0 | Igual |
| `border.error` | `primary.red` | `#DB0007` | `feedback.error` | `#DB0007` | 0.0 | Igual |
| `button.primary` | `primary.gold` | `#FFBC0D` | `button.primary` | `#FFBC0D` | 0.0 | Igual |
| `button.primary-hover` | `accent.gold-hover` | `#F1B417` | — | — | — | Sin equivalente |
| `button.primary-stroke` | `accent.gold` | `#C08B00` | — | — | — | Sin equivalente |
| `button.primary-inactive` | `tertiary.gold-disabled` | `#FFE49E` | `button.primary-disabled` | `#FFF5DB` | 24.4 | Distinto |
| `button.secondary` | `primary.white` | `#FFFFFF` | `button.secondary` | `#FFFFFF` | 0.0 | Igual |
| `button.secondary-hover` | `illustration.ground-shadow` | `#F1F1F1` | `button.secondary-pressed` | `#F5F5F5` | 1.4 | ≈ redondeo |
| `button.text` | `primary.black` | `#292929` | `button.text-enabled` | `#292929` | 0.0 | Igual |
| `control.track` | `secondary.ivory` | `#F9F9F9` | `chip.disabled-bg` | `#F5F5F5` | 1.4 | ≈ redondeo |
| `control.track-stroke` | `secondary.grey` | `#ADADAD` | `border.default` | `#8F8F8F` | 11.3 | Distinto |
| `control.on` | `primary.gold` | `#FFBC0D` | `interactive.active` | `#FFBC0D` | 0.0 | Igual |
| `control.on-stroke` | `accent.gold` | `#C08B00` | — | — | — | Sin equivalente |
| `scroll.track` | `secondary.light-grey` | `#D6D6D6` | `background.03` | `#DBDBDB` | 1.8 | ≈ redondeo |
| `scroll.thumb` | `secondary.grey` | `#ADADAD` | `background.04` | `#C2C2C2` | 7.7 | Cercano |
| `feedback.success` | `tertiary.light-green` | `#A9C141` | `feedback.success-on-black` | `#2B8C4D` | 43.8 | Distinto |
| `feedback.error` | `undocumented.error-red` | `#FA4D56` | `feedback.error-on-black` | `#FF4248` | 8.7 | Distinto |
| `feedback.warning` | `primary.gold` | `#FFBC0D` | `feedback.warning` | `#FFBC0D` | 0.0 | Igual |
| `feedback.info` | `tertiary.light-blue` | `#56AFD1` | `feedback.info-on-black` | `#4584E8` | 44.5 | Distinto |
| `badge.new` | `tertiary.gold-disabled` | `#FFE49E` | `feedback.warning-surface` | `#FFE7A8` | 4.0 | Cercano |
| `badge.recommended` | `tertiary.green-disabled` | `#E2EABF` | `feedback.success-surface` | `#C8EED6` | 14.3 | Distinto |
| `badge.loyalty` | `primary.gold` | `#FFBC0D` | `layer.brand` | `#FFBC0D` | 0.0 | Igual |
| `badge.loyalty-disabled` | `secondary.light-grey` | `#D6D6D6` | `background.03` | `#DBDBDB` | 1.8 | ≈ redondeo |


**Lectura de los "Distinto":**

| Token | Cambio |
|---|---|
| `text.disabled` | `#ADADAD` → `#707070`: el disabled de ArchWay es mucho más visible (K5) |
| `link.*` | Cambio de azul (K1) |
| `border.default` | `#6F6F6F` → `#8F8F8F`, **baja** el contraste. Por eso la recomendación K2 es mover ArchWay a `#707070` |
| `button.primary-inactive` | `#FFE49E` → `#FFF5DB`, más claro |
| `control.track-stroke` | `#ADADAD` → `#8F8F8F`: mejora (2.24 → 3.23:1) |
| `feedback.*` | Bordes de snackbar con los `*-on-black` de ArchWay (K6) |
| `badge.recommended` | `#E2EABF` → `#C8EED6`. Alternativa: semántico nuevo `badge/recommended` → `lime/200`, que es igual a ADK |

## Tipografía: modo kiosk

La propuesta F-02 del audit de ArchWay plantea **modos sobre los mismos `Font/size/*` y `Font/line-height/*`**, sin estilos nuevos. Lo verificamos contra los 20 estilos de ArchWay.

La escala de ADK no es un factor fijo (cuerpo ~1.5×, títulos ~2×), pero **igual entra en modos**:

- Los tamaños no se comparten entre títulos y cuerpo.
- Los interlineados compartidos se pueden elegir para que ningún estilo quede roto.

| Variable | Mobile (actual) | **Tablet** (propuesta) | **Kiosk** (propuesta) |
|---|---|---|---|
| `Font/size/xs` | 12 | 14 | 16 |
| `Font/size/s` | 14 | 16 | 22 |
| `Font/size/m` | 16 | 18 | 24 |
| `Font/size/l` | 18 | 22 | 28 |
| `Font/size/xl` | 20 | 28 | 40 |
| `Font/size/2xl` | 24 | 32 | 48 |
| `Font/size/3xl` | 30 | 40 | 60 |
| `Font/size/4xl` | 36 | 48 | 80 |
| `Font/line-height/s` | 16 | 20 | 24 |
| `Font/line-height/m` | 20 | 24 | 28 |
| `Font/line-height/l` | 24 | 28 | 32 |
| `Font/line-height/xl` | 28 | 36 | 44 |
| `Font/line-height/2xl` | 32 | 40 | 52 |
| `Font/line-height/3xl` | 36 | 48 | 64 |
| `Font/line-height/4xl` | 44 | 56 | 80 |
| `Font/letter-spacing/m` | 0.25 | 0.25 | 0 |

**Resultado por estilo** (tamaño / interlineado):

| Estilo ArchWay | Mobile | Tablet | Kiosk | Estilo ADK que reemplaza |
|---|---|---|---|---|
| Display/Large Bold | 36/44 | 48/56 | **80/80** | Display/Medium Bold ✅ |
| Display/Medium Bold | 30/36 | 40/48 | **60/64** | Headline/Extra Large Bold ✅ |
| Heading/Large (Bold) | 24/32 | 32/40 | **48/52** | Headline/Large (Bold) ✅ |
| Heading/Medium (Bold) | 20/28 | 28/36 | **40/44** | Headline/Medium (Bold) ✅ |
| Heading/Small (Bold) | 18/24 | 22/28 | **28/32** | Headline/Extra Small (Bold) ✅ |
| Text/Body Large (Bold) | 16/24 | 18/28 | **24/32** | Body/Large 24/**28** (+4 de interlineado; 165 textos ya usan 24/32) |
| Text/Body Medium (Bold) | 14/20 | 16/24 | **22/28** | Body/Medium 22/**26** (+2) |
| Text/Body Small | 12/16 | 14/20 | **16/24** | Body/Small 16/**20** (+4) |
| Label/Large | 16/20 | 18/24 | **24/28** | Body/Large ✅ |
| Label/Medium (Bold, Italic) | 14/16 | 16/20 | **22/24** | 22/24, usado 327 veces sin estilo ✅ |
| Label/Small (Bold, Italic) | 12/16 | 14/20 | **16/24** | Utility/Alert y Link 16/20 (+4) |

| Sin rol en ArchWay | Decisión (K9) |
|---|---|
| Display/Large bold 128/128 | Token de squad `adk/display-hero`, sólo Attract Screen |
| Headline/Small 36/40 | Se funde en Heading/Medium 40/44 |
| Utility/Small 12/16 | Se elimina: mínimo 16 en kiosco (A-T05) |

> Tablet es una **propuesta de arranque** para validar con prototipo en dispositivo real. Conviene definirla junto con el modo `desktop` de Dashboard (D6).

## Espaciado, radios, elevación y touch

| Foundation | ADK | ArchWay | Acción |
|---|---|---|---|
| Spacing 4–88 | ✅ | ✅ | Mapeo 1:1 (`spacing/4` … `spacing/88`) |
| Spacing 96 | Usado | Sólo primitivo `dimension/96` | Agregar `spacing/96` semántico (también lo pide Dashboard) |
| Spacing 104 | Padding superior del header | No existe | Reemplazar por 96 + 8, o por 112. No suma un escalón nuevo |
| Spacing 112 | Offsets de módulo | No existe | Agregar `dimension/112` + `spacing/112` |
| Radio 4 / 8 / 12 / 16 | ✅ | XS / S / M / L | Mapeo 1:1 |
| Radio 20 / 28 / 99 / 100 | Pills | No existe | `radius/full` (F-03). El 20 de ADK es el pill de 40 px |
| Sombra `0 8 16 /16 %` | 100 usos | Deep/M-elev-2 = `0 8 16 /25 %` | Adoptar Deep/M (un poco más marcada) o pedir variante 16 % |
| Sombra `0 −8 16 /16 %` | Footer flotante | No existe | Agregar `elevation/*-up` |
| Header "sombra blanca" | Fade | — | Gradiente `Background/01 → transparente`, no elevación |
| Touch target | 40–80 | — | `size/touch-target`: mobile 48 · tablet 48 · kiosk 56 (K12) |
| Border width | 1 · 3 | — | `border-width/default` 1 · `focus` 2 · `selected` 3 (F-05 de ArchWay pide border width) |

## Formatos: tablet y pantallas chicas

Hoy ADK es un único lienzo de 1080 × 1920 en px fijos. Para llegar a tablets, kioscos chicos de locales pequeños, centros de postres y McCafé, el layout tiene que ser **fluido** y la tipografía tiene que **cambiar por modo**, no por pantalla.

### Formatos objetivo

| Formato | Viewport CSS de referencia | Orientación | Uso | Modo tipográfico | Touch target |
|---|---|---|---|---|---|
| **Kiosk** (actual) | 1080 × 1920 | Vertical | Restaurante estándar | `kiosk` | 56 |
| **Kiosk S** | 768–1023 de ancho (ej. 800 × 1280) | Vertical | Locales chicos, centro de postres, McCafé | `kiosk` | 56 |
| **Tablet** | ≥ 1024 de ancho (ej. 1280 × 800, 1366 × 1024) | Horizontal | Mostrador, mesa, McCafé | `tablet` | 48 |

> La pantalla física cambia pero la distancia de uso no (50–70 cm de pie). Por eso Kiosk S **mantiene** el modo tipográfico `kiosk` y lo que cambia es el layout.

### Breakpoints

Se definen **por orientación + ancho**, sumados a los breakpoints por ancho que trae Dashboard (D6 / F-01):

| Nombre | Media query | Layout |
|---|---|---|
| `kiosk` | `(orientation: portrait) and (min-width: 1024px)` | Nav lateral + contenido + footer flotante (actual) |
| `kiosk-s` | `(orientation: portrait) and (min-width: 768px)` | Nav como tabs horizontales arriba · 2 columnas de producto · footer compacto |
| `tablet` | `(orientation: landscape) and (min-width: 1024px)` | Nav lateral · contenido · **carrito lateral fijo** (sin footer flotante) |

### Layout fluido por formato

```
KIOSK (1080 × 1920)               KIOSK S (800 × 1280)            TABLET (1280 × 800)
┌──────────────────────┐          ┌──────────────────┐            ┌────────────────────────────────┐
│ HEADER 192           │          │ HEADER 120       │            │ HEADER 96                      │
├────┬────────────┬────┤          ├──────────────────┤            ├──────┬──────────────┬──────────┤
│NAV │ CONTENIDO  │ ▌  │          │ ◀ tabs categ. ▶  │            │ NAV  │  CONTENIDO   │ CARRITO  │
│248 │ 3 col × 208│    │          ├──────────────────┤            │ 200– │  auto-fill   │ 320–360  │
│    │            │    │          │ CONTENIDO        │            │ 240  │  min 176     │ total +  │
│    │            │    │          │ 2 col            │            │      │              │ CTA      │
├────┴────────────┴────┤          ├──────────────────┤            │      │              │          │
│ FOOTER FLOTANTE 248  │          │ FOOTER 200       │            │      │              │          │
└──────────────────────┘          └──────────────────┘            └──────┴──────────────┴──────────┘
```

| Zona | Kiosk | Kiosk S | Tablet |
|---|---|---|---|
| Márgenes laterales | 32 / 96 (con scroll) | `spacing/24` | `spacing/24` |
| Nav | 248 fijo | Tabs scrolleables, alto 56 | `clamp(200px, 18vw, 240px)` |
| Contenido | 656 (3 × 208 + 2 × 16) | `1fr`, 2 columnas | `repeat(auto-fill, minmax(176px, 1fr))` |
| Gap entre cards | 16 | 16 | 16 |
| Footer / carrito | Flotante 248, abajo | Flotante 200, user colapsado | Columna derecha fija `clamp(320px, 26vw, 360px)` |
| Área accesible | 800 / 960 inferiores | 640 inferiores (mismo alto físico aproximado) | No aplica (todo al alcance); controles críticos en la mitad inferior |
| Header | 192 | 120 | 96 |

**Reglas para que los módulos se adapten:**

1. **Container queries** en los módulos (banner, categorías, recomendados), no media queries. Un módulo mide su contenedor y elige 1, 2 o 3 columnas.
2. **Las medidas de módulo pasan a ser mínimos**, no tamaños fijos. Por ejemplo, el banner es `aspect-ratio: 656 / 200` con `width: 100%`.
3. **Imágenes de producto** cuadradas con recorte seguro definido (página *Guía para mercado*).
4. **Nada en px absolutos** salvo los tokens. Las posiciones salen de grid y flex.

### Leyes de UX aplicadas

| Ley | Aplicación |
|---|---|
| **Fitts** | En tablet el carrito pasa al costado: el CTA de pago queda a la misma distancia de cualquier producto. En kiosco el footer está en la zona baja, al alcance |
| **Hick** | En Kiosk S la nav pasa a tabs: si hay más de 7–8 categorías, agrupar antes que achicar |
| **Jakob** | Tablet en horizontal sigue el patrón de POS y apps de delivery (menú izquierda, carrito derecha), que el cliente ya conoce |
| **Ley de la región común** | El carrito lateral en tablet es una región con fondo `Background/02`, separada del catálogo |

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Binding automático con match equivocado (por ejemplo `#FFBC0D` como botón vs como badge) | El script decide por propiedad + componente padre. Lo ambiguo va al reporte, no se enlaza |
| Interlineados más altos (+2 / +4) alargan cards con texto | QA en Product Card y Carrito, los más densos |
| Cambios de color visibles (disabled, links) | Validar con producto en una sola sesión. Son los mismos cambios que en Dashboard |
| Tablet sin validar en dispositivo | Prototipo en tablet real antes de cerrar el modo `tablet` |

## Checklist

- [ ] K1–K13 decididas (junto con Dashboard D1–D8)
- [ ] ArchWay: modo `kiosk` y `tablet` en `Font/*`
- [ ] ArchWay: `radius/full`, `spacing/96`, `spacing/112`, `elevation/*-up`
- [ ] ArchWay: `button/primary-stroke`, pressed definido, `size/touch-target`, `border-width/*`
- [ ] ArchWay: breakpoints (con Dashboard) + `kiosk` / `kiosk-s` / `tablet`
- [ ] ADK: script de binding de color + reporte de ambiguos
- [ ] ADK: script de estilos de texto + frames en modo `kiosk`
- [ ] ADK: radios, sombras y spacing enlazados
- [ ] ADK: audit A-A01…A-A04 resuelto en el mismo pase
- [ ] Código: preset ArchWay + `data-platform="kiosk"` + pantallas por orientación
- [ ] Deprecar los 20 text styles `ADK/*` y la página *Colors*
