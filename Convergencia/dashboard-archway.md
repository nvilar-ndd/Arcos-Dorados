# Convergencia de Foundations — Dashboard → ArchWay

> **Fuentes:** [Archway Foundations Library](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) y [DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation), extraídas vía Figma MCP el 2026-10-07.
> **Estado:** análisis para decidir. Nada de esto está aplicado. Las comparaciones de color usan la distancia perceptual ΔE (CIE76): < 0.5 igual, < 3 redondeo, < 8 cercano.

## Resumen

**ArchWay es el destino, pero Dashboard trae piezas que ArchWay no tiene y necesita**: dark mode, breakpoints y grillas de escritorio, tokens de layout y estados hover. La unificación no es sólo "pasar Dashboard a ArchWay": primero ArchWay incorpora esas piezas, después Dashboard cambia sus alias.

| | Primitivos de color (63) | Semánticos de color (63) |
|---|---|---|
| Igual en ArchWay | 14 | 24 |
| Igual con diferencia de redondeo | 16 | 3 |
| Cercano (requiere decisión visual) | 16 | 4 |
| Distinto | — | 16 |
| Sin equivalente | 17 | 16 |

- **La marca coincide exacto:** `gold/500` #FFBC0D, `red/600` #DB0007 y `black/800` #292929 son iguales en los dos sistemas, y el patrón de tokens (Primitives → Semantic) es el mismo.
- **Lo que más trabajo da:** el azul de links (otra familia de color), la escala de grises (Dashboard usa `secondary/*` con valores propios), los estados de botón (direcciones opuestas en pressed) y la tipografía (otro sistema de nombres, tracking −0.15 y sin variables).
- **Colisiones de nombre que hay que resolver antes de mezclar:** `radius/md` = 8 en Dashboard y `radius/M` = 12 en ArchWay; `background/02` es gris oscuro en Dashboard y gris claro en ArchWay.

## Comparativa por foundation

| Foundation | ArchWay | Dashboard | Diagnóstico |
|---|---|---|---|
| **Arquitectura** | Primitives → Semantic (1 modo) | Primitives → Semantic (**Light + Dark**) + Layout + Breakpoints | Compatible. Dashboard va un paso adelante en modos |
| **Color – marca** | gold 500, red 600, black 800 | Idénticos | ✅ Sin trabajo |
| **Color – escalas** | 50–900, sufijo `_` en el base | 0–950, sin sufijo | Distinto paso inicial (0 vs 50) y Dashboard agrega 950 |
| **Color – neutros** | `black/50…900` | `black/0…950` + `secondary/*` (dark-grey, grey, light-grey, ivory) | Los `secondary/*` son los que usa la semántica de Dashboard; 4 de ellos ≈ ArchWay |
| **Color – links** | `blue Dark/700` #1652B1 | `link/blue` #0F62FE (azul tipo IBM Carbon) | ❗ Decisión de marca |
| **Dark mode** | No existe (propuesta en el doc para DesignOps) | Existe, base #292929 | Dashboard es el insumo para el dark de ArchWay |
| **Tipografía** | 20 estilos (Display/Heading/Text/Label), enlazados a `Font/*`, tracking 0 / +0.25 | 16 estilos (h1–H7, Body01–03, Label01–03, RM_Body), sin variables, tracking −0.15 | ❗ Mayor trabajo: Dashboard sigue con el tracking Legacy |
| **Monoespaciada** | — | Roboto Mono (JSON) | Aporte de Dashboard |
| **Espaciado** | `spacing/0…88` nombrados por px | `spacing/0…2000` nombrados por multiplicador (100 = 8px) | Mismos valores base; convención de nombres distinta |
| **Radios** | XS 4 · S 8 · M 12 · L 16 · XXL 32 · XXXL 160 | sm 4 · md 8 · lg 16 · xl 32 | ❗ Colisión: `md` 8 vs `M` 12. Dashboard no tiene 12 |
| **Grilla** | Mobile 412, 4 col, gutter 16 | 6 grillas 320–1784, 4/8/16 col, gutter 32 | Complementarias: Dashboard cubre escritorio |
| **Breakpoints** | No existen (audit F-01) | sm 375 · md 768 · lg 1024 · xl 1440 · 2xl 1792 | Aporte de Dashboard |
| **Layout / tamaños** | — | `layout/01–05`, `size/modal/xs–lg` | Aporte de Dashboard |
| **Elevación** | 6 sombras Shallow/Deep | No existe | Aporte de ArchWay |
| **Motion** | 4 duraciones, 3 curvas, patrones | No existe | Aporte de ArchWay |
| **Estados interactivos** | enabled, pressed, focus, disabled | + **hover**, + transparencias para switch, + botón **destructivo** (red) | Aporte de Dashboard: Web necesita hover |
| **Guías** | Migración tipográfica Legacy, glosario | UI templates por contexto de navegación | Complementarias |

## Decisiones necesarias antes de empezar

Bloquean la unificación; conviene tomarlas en la misma sesión con DesignOps donde se revise el audit de ArchWay.

| # | Decisión | Opciones | Recomendación |
|---|---|---|---|
| D1 | **Paso inicial de las escalas** | `0` (Dashboard) · `50` (ArchWay) | `50`, y sumar `950` donde haga falta (patrón Tailwind/Material, menos renombres en ArchWay) |
| D2 | **Nombres de spacing** | por px (`spacing/16`) · por multiplicador (`spacing/200`) | Por px: se lee igual en diseño y código, y ArchWay ya está publicado así |
| D3 | **Escala de radios** | Mantener ArchWay (12 = M) · adoptar Dashboard (md = 8) | ArchWay + `xl` 24 + `full` (audit F-03). Dashboard mapea `md`→`S`, `lg`→`L`, `xl`→`XXL` |
| D4 | **Azul de links** | #1652B1 (ArchWay) · #0F62FE (Dashboard) | Un solo azul. ArchWay pasa AA con más margen (7.30 vs 5.00:1) y pertenece a una escala completa |
| D5 | **Base del dark mode** | #292929 (Dashboard, en uso) · #0F0F0F (propuesta ArchWay) | Validar con producto: si Dashboard ya está en producción en dark, #292929 evita un cambio visible |
| D6 | **Tipografía de escritorio** | Escala única · modos mobile/desktop/kiosk (audit F-02) | Modos: Dashboard necesita títulos de 32–36 que en mobile no existen |
| D7 | **Tracking** | −0.15 (Dashboard/Legacy) · 0 / +0.25 (ArchWay) | ArchWay, siguiendo la guía de migración Legacy → ArchWay |
| D8 | **Hover y botón destructivo** | Sumarlos a ArchWay · dejarlos sólo en Dashboard | Sumarlos a ArchWay: Web eCommerce también los necesita |

## Qué aporta cada sistema

### Dashboard → ArchWay

1. **Dark mode** como segundo modo de Semantic (ya probado en producción).
2. **Breakpoints** (`sm`–`2xl`) y **grillas de escritorio** (4/8/16 columnas, gutter 32): resuelven el audit F-01.
3. **Tokens de layout** (`layout/01–05`) y **tamaños de modal** (`xs`–`lg`).
4. **Estados hover** y **transparencias de switch**.
5. **Botón destructivo** (`button/red*`).
6. **Fuente monoespaciada** (Roboto Mono) para código y JSON.
7. **Spacing 2, 96, 128 y 160** como semánticos.
8. **Guía de UI templates** por contexto de navegación (se generaliza a Web).

### ArchWay → Dashboard

1. **Tipografía enlazada a variables** (`Font/*`) con tracking corregido.
2. **Elevación** (Shallow/Deep) y **Motion**.
3. **Feedback completo**: superficies y textos de error/éxito/info, info, trust, highlight.
4. **Escalas de color completas** (green, lime, blue, orange, fuchsia, purple, violet) en lugar de colores sueltos en `tertiary/*`.
5. **Documentación de uso por token** (descripciones en cada variable).

## Plan por fases

```
Fase 0  Decisiones D1–D8 ──► Fase 1  ArchWay incorpora aportes ──► Fase 2  Dashboard re-alias
                                                                       │
Fase 4  Retiro de Dashboard Foundations ◄── Fase 3  Renombre y swap de componentes
```

| Fase | Qué se hace | Dónde | Riesgo |
|---|---|---|---|
| **0 · Decidir** | Cerrar D1–D8 y el audit P0 de ArchWay | Reunión DesignOps | — |
| **1 · ArchWay crece** | Agregar modo Dark, colección Breakpoints/Layout, grillas desktop, hover, destructivo, mono, spacing faltantes, modos tipográficos | Figma ArchWay → repo `Archway/` | Bajo: sólo agrega |
| **2 · Re-alias** | Dashboard activa la librería ArchWay y **cambia el alias de cada semántico** al primitivo de ArchWay equivalente (tabla de abajo). Los componentes de Dashboard no se tocan: siguen apuntando a sus semánticos | Figma Dashboard | Medio: cambios visuales en los 16 "Distinto" y 4 "Cercano" |
| **3 · Renombre** | Reemplazar los semánticos de Dashboard por los de ArchWay en componentes (swap de variables) y en código (`--db-*` → `--aw-*` con un archivo puente de alias durante la transición) | Figma + código Dashboard | Medio: requiere QA visual por pantalla |
| **4 · Retiro** | Deprecar las colecciones de Dashboard y la carpeta `Dashboard/foundations` queda como histórico | Figma + repo | Bajo |

**Por qué este orden:** el paso 2 cambia valores sin tocar componentes, así que se puede validar pantalla por pantalla con un solo cambio de alias y revertir fácil. El renombre (paso 3) recién se hace cuando los valores ya son los de ArchWay.

### Puente de código para la transición (fase 3)

```css
/* dashboard-to-archway.css — se borra al terminar la migración */
:root {
  --db-text-primary: var(--aw-text-primary);
  --db-background-01: var(--aw-background-01);
  --db-button-primary-enabled: var(--aw-button-primary);
  /* … un alias por cada fila "Igual" / "≈" de la tabla de semánticos */
}
```

## Mapa de semánticos (Light)

Cómo quedaría cada token de Dashboard en ArchWay. **Distinto** y **Cercano** cambian de color visible al migrar: son los que hay que revisar en pantalla.

| Dashboard | Valor | ArchWay | Valor | Estado | Nota |
|---|---|---|---|---|---|
| `background/01` | `#ffffff` | `Background/01` | `#ffffff` | Igual | Fondo base |
| `background/02` | `#6f6f6f` | — | — | Sin equivalente | Dashboard: gris oscuro. ArchWay `Background/02` es gris claro (misma numeración, distinto significado) |
| `background/03` | `#adadad` | — | — | Sin equivalente | Ídem: numeración igual, valor distinto |
| `background/04` | `#d6d6d6` | `Background/04` | `#c2c2c2` | Cercano |  |
| `background/05` | `#292929` | `Background/06` | `#292929` | Igual | Fondo oscuro de componentes |
| `layer/00` | `#ffffff00` | `Button/ghost` | `#ffffff` | Igual | Transparente |
| `layer/01` | `#ffffff` | `Layer/01` | `#ffffff` | Igual |  |
| `layer/02` | `#f9f9f9` | `Layer/02` | `#f5f5f5` | ≈ redondeo |  |
| `layer/03` | `#d6d6d6` | `Layer/03` | `#dbdbdb` | ≈ redondeo |  |
| `layer/04` | `#adadad` | `Layer/04` | `#c2c2c2` | Cercano |  |
| `layer/05` | `#6f6f6f` | `Layer/05` | `#424242` | Distinto |  |
| `layer/06` | `#292929` | `Layer/06` | `#292929` | Igual |  |
| `layer/07` | `#ffbc0d` | `Layer/brand` | `#ffbc0d` | Igual |  |
| `layer/08` | `#fff8e7` | `Feedback/warning-surface` | `#ffe7a8` | Distinto | Fondo de componentes activos (gold claro) |
| `border/01` | `#292929` | `Border/input-active` | `#292929` | Igual |  |
| `border/02` | `#d6d6d6` | `Border/soft` | `#dbdbdb` | ≈ redondeo |  |
| `border/03` | `#adadad` | `Border/default` | `#8f8f8f` | Distinto |  |
| `border/04` | `#ffbc0d` | `Interactive/active` | `#ffbc0d` | Igual | Borde dorado: no hay Border dorado en ArchWay |
| `text/primary` | `#292929` | `Text/Text_primary` | `#292929` | Igual |  |
| `text/secondary` | `#6f6f6f` | `Text/Text_secondary` | `#5c5c5c` | Cercano |  |
| `text/disabled` | `#adadad` | `Text/Text_disabled` | `#707070` | Distinto |  |
| `text/on-color` | `#ffffff` | `Text/Text_on-color` | `#ffffff` | Igual |  |
| `text/success` | `#1f6437` | `Feedback/success` | `#1f6538` | Igual |  |
| `text/error` | `#db0007` | `Text/Text_error` | `#db0007` | Igual |  |
| `link/primary` | `#0f62fe` | `Link/default` | `#1652b1` | Distinto | Azul distinto |
| `link/primary-hover` | `#054ada` | `Link/hover` | `#1b67df` | Distinto |  |
| `link/primary-visited` | `#8a3ffc` | `Link/visited` | `#8703b0` | Distinto | Dashboard usa violeta; ArchWay púrpura |
| `link/secondary` | `#292929` | `Link/pressed` | `#292929` | Igual | ArchWay no tiene link secundario |
| `icon/primary` | `#292929` | `Icon/Primary` | `#292929` | Igual |  |
| `icon/secondary` | `#6f6f6f` | `Icon/gray` | `#5c5c5c` | Cercano |  |
| `icon/tertiary` | `#ffffff` | `Icon/on-color` | `#ffffff` | Igual |  |
| `icon/gold` | `#ffbc0d` | `Icon/gold` | `#ffbc0d` | Igual |  |
| `icon/background` | `#ffe49e` | — | — | Sin equivalente | Fondo de ícono: sin equivalente |
| `support/warning` | `#ffbc0d` | `Feedback/warning` | `#ffbc0d` | Igual |  |
| `support/success` | `#1f6437` | `Feedback/success` | `#1f6538` | Igual |  |
| `support/error` | `#db0007` | `Feedback/error` | `#db0007` | Igual |  |
| `support/error-secondary` | `#fa4d56` | `Feedback/error-on-black` | `#ff4248` | Distinto | Rojo para fondo oscuro |
| `tag/background-green` | `#e2eabf` | `Feedback/success-surface` | `#c8eed6` | Distinto |  |
| `tag/background-blue` | `#ccf0ff` | `Feedback/info-surface` | `#cddef9` | Distinto |  |
| `button/primary-text` | `#292929` | `Button/text-enabled` | `#292929` | Igual |  |
| `button/primary-enabled` | `#ffbc0d` | `Button/primary` | `#ffbc0d` | Igual |  |
| `button/primary-hover` | `#ffd46a` | — | — | Sin equivalente | ArchWay no tiene hover (necesario en Web/Dashboard) |
| `button/primary-focus` | `#c08800` | `Button/primary-focus` | `#db9f00` | Distinto |  |
| `button/primary-pressed` | `#c08800` | `Button/primary-pressed` | `#ffcb42` | Distinto | Dirección opuesta: Dashboard oscurece, ArchWay aclara |
| `button/primary-disabled` | `#ffe49e` | `Button/primary-disabled` | `#fff5db` | Distinto |  |
| `button/secondary` | `#ffffff` | `Button/secondary` | `#ffffff` | Igual |  |
| `button/secondary-text` | `#292929` | `Button/text-enabled` | `#292929` | Igual |  |
| `button/secondary-stroke` | `#292929` | `Button/secondary-stroke` | `#8f8f8f` | Distinto |  |
| `button/secondary-enabled` | `#f9f9f9` | — | — | Sin equivalente |  |
| `button/secondary-hover` | `#d6d6d6` | — | — | Sin equivalente | Sin hover en ArchWay |
| `button/secondary-focus` | `#d6d6d6` | `Button/secondary-focus` | `#f5f5f5` | Distinto |  |
| `button/secondary-pressed` | `#959595` | `Button/secondary-pressed` | `#f5f5f5` | Distinto |  |
| `button/primary-hover-transparent` | `#ffbc0d33` | — | — | Sin equivalente | Estados de switch (transparencia 20%) |
| `button/primary-pressed-transparent` | `#ffbc0d66` | — | — | Sin equivalente | Estados de switch (transparencia 40%) |
| `button/secondary-hover-transparent` | `#d6d6d633` | — | — | Sin equivalente |  |
| `button/secondary-pressed-transparent` | `#d6d6d666` | — | — | Sin equivalente |  |
| `button/transparent` | `#ffffff00` | `Button/ghost` | `#ffffff` | Igual |  |
| `button/skeleton` | `#d6d6d6` | — | — | Sin equivalente | Skeleton: sin equivalente |
| `button/red` | `#db0007` | — | — | Sin equivalente | Botón destructivo: no existe en ArchWay |
| `button/red-text` | `#ffffff` | — | — | Sin equivalente |  |
| `button/red-hover` | `#ff161d` | — | — | Sin equivalente |  |
| `button/red-pressed` | `#b20006` | — | — | Sin equivalente |  |
| `button/red-disabled` | `#ffe7e8` | — | — | Sin equivalente |  |

## Mapa de primitivos

Primitivo de ArchWay más cercano a cada color de Dashboard. Los **sin equivalente** necesitan decidir si se suman a ArchWay o se reemplazan por el más cercano.

| Dashboard | Hex | ArchWay más cercano | Hex | ΔE | Estado |
|---|---|---|---|---|---|
| `color/gold/0` | `#fff8e7` | `gold/50` | `#fff8e5` | 1.0 | ≈ redondeo |
| `color/gold/100` | `#ffeccb` | `gold/100` | `#fff5db` | 5.7 | Cercano |
| `color/gold/200` | `#ffe090` | `gold/200` | `#ffe7a8` | 9.6 | Sin equivalente |
| `color/gold/300` | `#ffd46a` | `gold/300` | `#ffd975` | 4.2 | Cercano |
| `color/gold/400` | `#ffc839` | `gold/400` | `#ffcb42` | 2.8 | ≈ redondeo |
| `color/gold/500` | `#ffbc0d` | `gold/500` | `#ffbc0d` | 0.0 | Igual |
| `color/gold/600` | `#d69b00` | `gold/600` | `#db9f00` | 2.0 | ≈ redondeo |
| `color/gold/700` | `#ad7d00` | `gold/700` | `#a87a00` | 1.9 | ≈ redondeo |
| `color/gold/800` | `#856000` | `gold/800` | `#755500` | 6.7 | Cercano |
| `color/gold/900` | `#5c4200` | `gold/800` | `#755500` | 11.3 | Sin equivalente |
| `color/gold/950` | `#332500` | `gold/900` | `#423000` | 8.9 | Sin equivalente |
| `color/red/0` | `#ffe7e8` | `red/50` | `#fff0f0` | 4.1 | Cercano |
| `color/red/100` | `#ffbec0` | `red/200` | `#ffa8ab` | 10.9 | Sin equivalente |
| `color/red/200` | `#ff9497` | `red/200` | `#ffa8ab` | 10.3 | Sin equivalente |
| `color/red/300` | `#ff6a6f` | `red/300` | `#ff757a` | 5.8 | Cercano |
| `color/red/400` | `#ff4046` | `red/400` | `#ff4248` | 1.0 | ≈ redondeo |
| `color/red/500` | `#ff161d` | `red/500` | `#ff1017` | 2.3 | ≈ redondeo |
| `color/red/600` | `#db0007` | `red/600` | `#db0007` | 0.0 | Igual |
| `color/red/700` | `#b20006` | `red/700` | `#a80005` | 3.9 | Cercano |
| `color/red/800` | `#890005` | `red/800` | `#750004` | 9.1 | Sin equivalente |
| `color/red/900` | `#610003` | `red/800` | `#750004` | 9.7 | Sin equivalente |
| `color/red/950` | `#330002` | `red/900` | `#420002` | 8.9 | Sin equivalente |
| `color/black/0` | `#fcfcfc` | `white/default` | `#ffffff` | 1.0 | ≈ redondeo |
| `color/black/100` | `#f2f2f2` | `black/50` | `#f5f5f5` | 1.0 | ≈ redondeo |
| `color/black/200` | `#e4e4e4` | `black/100` | `#dbdbdb` | 3.2 | Cercano |
| `color/black/300` | `#c7c7c7` | `black/200` | `#c2c2c2` | 1.8 | ≈ redondeo |
| `color/black/400` | `#a9a9a9` | `black/300` | `#a8a8a8` | 0.4 | Igual |
| `color/black/500` | `#7f7f7f` | `black/500` | `#707070` | 6.0 | Cercano |
| `color/black/600` | `#6a6a6a` | `black/500` | `#707070` | 2.4 | ≈ redondeo |
| `color/black/700` | `#4b4b4b` | `black/700` | `#424242` | 3.9 | Cercano |
| `color/black/800` | `#292929` | `black/800` | `#292929` | 0.0 | Igual |
| `color/black/900` | `#080808` | `black/900` | `#0f0f0f` | 2.1 | ≈ redondeo |
| `color/black/950` | `#000000` | `black/900` | `#0f0f0f` | 4.3 | Cercano |
| `color/white/default` | `#ffffff` | `white/default` | `#ffffff` | 0.0 | Igual |
| `color/secondary/blue` | `#006bae` | `blue/800` | `#103c82` | 22.0 | Sin equivalente |
| `color/secondary/orange` | `#fe8234` | `orange/400` | `#fe8234` | 0.0 | Igual |
| `color/secondary/dark-grey` | `#6f6f6f` | `black/500` | `#707070` | 0.4 | Igual |
| `color/secondary/grey` | `#adadad` | `black/300` | `#a8a8a8` | 1.9 | ≈ redondeo |
| `color/secondary/light-grey` | `#d6d6d6` | `black/100` | `#dbdbdb` | 1.8 | ≈ redondeo |
| `color/secondary/ivory` | `#f9f9f9` | `black/50` | `#f5f5f5` | 1.4 | ≈ redondeo |
| `color/link/blue` | `#0f62fe` | `blue/600` | `#1b67df` | 21.5 | Sin equivalente |
| `color/link/blue-300` | `#76a5fe` | `blue/400` | `#72a2ee` | 7.4 | Cercano |
| `color/link/blue-hover` | `#054ada` | `blue/600` | `#1b67df` | 20.8 | Sin equivalente |
| `color/link/blue-hover-300` | `#7da6fc` | `blue/400` | `#72a2ee` | 6.3 | Cercano |
| `color/link/blue-visited` | `#8a3ffc` | `violet/400` | `#8a3ffc` | 0.0 | Igual |
| `color/link/blue-visited-300` | `#a972fd` | `violet/300` | `#a972fd` | 0.0 | Igual |
| `color/tertiary/green-800` | `#1f6437` | `green/800` | `#1f6538` | 0.5 | Igual |
| `color/tertiary/green-600` | `#38b362` | `green/600` | `#37b363` | 0.5 | ≈ redondeo |
| `color/tertiary/green-100` | `#effaf3` | `green/100` | `#effaf3` | 0.0 | Igual |
| `color/tertiary/light-green` | `#a9c141` | `lime/500` | `#adc44b` | 3.1 | Cercano |
| `color/tertiary/dark-blue` | `#103c82` | `blue/800` | `#103c82` | 0.0 | Igual |
| `color/tertiary/light-blue` | `#56afd1` | `blue/300` | `#a0c0f3` | 20.7 | Sin equivalente |
| `color/tertiary/fuchsia` | `#9a0a4d` | `fuchsia/700` | `#9a0a4d` | 0.0 | Igual |
| `color/tertiary/beige` | `#b69a81` | `black/300` | `#a8a8a8` | 18.5 | Sin equivalente |
| `color/tertiary/gold-disabled` | `#ffe49e` | `gold/200` | `#ffe7a8` | 4.0 | Cercano |
| `color/tertiary/blue-disabled` | `#ccf0ff` | `blue/100` | `#e8f0fc` | 9.4 | Sin equivalente |
| `color/tertiary/purple-disabled` | `#eee3ff` | `purple/100` | `#f9e6ff` | 3.6 | Cercano |
| `color/tertiary/red-disabled` | `#ffcec4` | `red/100` | `#ffdbdc` | 8.8 | Sin equivalente |
| `color/tertiary/green-disabled` | `#e2eabf` | `lime/200` | `#e2eabf` | 0.0 | Igual |
| `color/tertiary/dark-red` | `#9a0005` | `red/700` | `#a80005` | 5.9 | Cercano |
| `color/accessible/gold` | `#c08800` | `gold/700` | `#a87a00` | 9.0 | Sin equivalente |
| `color/accessible/grey` | `#959595` | `black/400` | `#8f8f8f` | 2.3 | ≈ redondeo |
| `color/accessible/red` | `#fa4d56` | `red/400` | `#ff4248` | 8.7 | Sin equivalente |

**Lectura rápida:** las escalas `gold`, `red` y `black` de Dashboard tienen otra curva de luminosidad (los pasos 100–300 y 800–950 difieren), así que no conviene mapear paso por paso: la semántica de Dashboard debería apuntar al primitivo de ArchWay que cumpla el mismo rol. Varios `tertiary/*` ya son colores de ArchWay con otro nombre (`dark-blue` = `blue Dark/800`, `fuchsia` = `fuchsia/700`, `green-disabled` = `lime/200`, `blue-visited` = `violet/400`).

## Tipografía

| Dashboard | Specs | ArchWay propuesto | Specs | Cambio |
|---|---|---|---|---|
| `h1- cms` | 36/40 Regular | Display Large Bold | 36/44 Bold | Peso e interlineado — *o* nuevo Display Large Regular |
| `h2 - cms` | 32/40 Bold | Display Medium Bold | 30/36 | −2px |
| `H3 - CMS` | 32/36 Regular | — | — | Sin equivalente (requiere escala desktop, D6) |
| `H4 - CMS` | 24/32 Bold | Heading Large Bold | 24/32 | 1:1 + tracking |
| `H5 - CMS` | 24/32 Regular | Heading Large | 24/32 | 1:1 + tracking |
| `H6 - CMS` | 18/24 Bold | Heading Small Bold | 18/24 | 1:1 + tracking |
| `H7 - CMS` | 18/24 Regular | Heading Small | 18/24 | 1:1 + tracking |
| `Body01 - cms` | 16/24 | Body Large | 16/24 | 1:1 + tracking |
| `Body02 - cms` | 14/20 | Body Medium | 14/20 | 1:1 + tracking |
| `Body03 - cms` | 14/16 | Label Medium (UI) · Body Medium (párrafo) | 14/16 · 14/20 | Regla Body vs Label |
| `Label03- cms` | 14/16 Bold | Label Medium Bold | 14/16 | 1:1 + tracking |
| `Label02 - cms` | 14/16 | Label Medium | 14/16 | 1:1 + tracking |
| `Label01 - cms` | 12/16 | Label Small | 12/16 | 1:1 + tracking |
| `RM_Body1–3` | Roboto Mono 16/24 · 14/20 · 12/16 | — | — | Agregar familia `Code` a ArchWay |

El tracking pasa de −0.15 a 0 (títulos) y +0.25 (texto y labels): los textos de una línea en tablas densas del Dashboard se ensanchan. Hay que revisar truncados, igual que en la guía de migración Legacy.

## Espaciado y radios

| Dashboard | px | ArchWay | Nota |
|---|---|---|---|
| `spacing/025` | 2 | — | Agregar (offset de focus ring, audit F-04) |
| `spacing/050` | 4 | `spacing/4` | |
| `spacing/100` | 8 | `spacing/8` | |
| — | 12 | — | Ninguno de los dos tiene `spacing/12` (audit F-04) |
| `spacing/200` | 16 | `spacing/16` | |
| `spacing/300` | 24 | `spacing/24` | |
| `spacing/400` | 32 | `spacing/32` | |
| `spacing/500` | 40 | `spacing/40` | |
| `spacing/600` | 48 | `spacing/48` | |
| `spacing/700` | 56 | `spacing/56` | |
| `spacing/800` | 64 | `spacing/64` | |
| — | 72 | `spacing/72` | Sólo ArchWay |
| `spacing/1000` | 80 | `spacing/80` | |
| — | 88 | `spacing/88` | Sólo ArchWay |
| `spacing/1200` | 96 | — | Agregar a ArchWay (existe como primitivo) |
| `spacing/1400` | 128 | — | Ídem |
| `spacing/2000` | 160 | — | Ídem |
| `radius/sm` | 4 | `radius/XS` | |
| `radius/md` | 8 | `radius/S` | ❗ `md` ≠ `M` |
| — | 12 | `radius/M` | Default de ArchWay; Dashboard no lo tiene |
| `radius/lg` | 16 | `radius/L` | |
| `radius/xl` | 32 | `radius/XXL` | ❗ `xl` ≠ `XL` (propuesto 24) |

## Riesgos

- **Cambios visibles en producción** al re-aliasar: 16 semánticos cambian de color (links, grises de texto, estados de botón). Mitigación: hacerlo por grupos (texto → links → botones) con QA por pantalla.
- **Tracking +0.25 en tablas densas** del Dashboard: puede truncar columnas. Mitigación: checklist de QA de la guía de migración tipográfica.
- **Dark mode con dos bases distintas** si se decide #0F0F0F para ArchWay y Dashboard ya está en #292929. Mitigación: decidir D5 antes de la fase 1.
- **Nombres que colisionan** (`md`/`M`, `background/02`): si se mezclan librerías antes de renombrar, un diseñador puede aplicar el token equivocado. Mitigación: no activar las dos librerías en el mismo archivo hasta la fase 3.

## Checklist de unificación

- [ ] Decisiones D1–D8 cerradas
- [ ] Audit P0 de ArchWay aprobado y aplicado
- [ ] ArchWay: modo Dark en Semantic
- [ ] ArchWay: colecciones Breakpoints y Layout, grillas desktop
- [ ] ArchWay: hover, transparencias de switch y botón destructivo
- [ ] ArchWay: familia Code (Roboto Mono) y modos tipográficos
- [ ] ArchWay: spacing 2, 12, 96, 128, 160 y radius XL / full
- [ ] Dashboard: re-alias de semánticos a primitivos de ArchWay (por grupos, con QA)
- [ ] Dashboard: swap de variables en componentes y archivo puente en código
- [ ] Dashboard: deprecación de colecciones propias
