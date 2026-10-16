# Footer

> **Fuente:** [[ADK] Design System › Footer](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=19-68) y *UI Shell › Footers_shell* (3845:10).
> **Origen:** ADK. Sin equivalente en ArchWay.

## Propósito

Zona fija inferior con el **estado del pedido** (carrito), la **identidad del usuario** (login / puntos) y las **acciones de flujo** (*Ver pedido*, *Pagar*, *Cancelar*).

Está dentro del [área accesible](../foundations/layout.md#área-accesible-safe-accessibility-area): es lo más importante que hay al alcance.

## Anatomía y tokens

```
┌──────────────────────────────────────────────────────────────┐  shadow.bordered-up (0 −8 16 #292929/16%)
│ ┌ User_Footer ┐  ┌ "Podrías sumar x pts" (656×48, subtle) ─┐ │
│ │  248 × 232  │  ├ Carrito_Footer 656 × 80 ────────────────┤ │
│ │ gold/white  │  │  [Badge 64×56]  Total     [Ver pedido]  │ │
│ └─────────────┘  └─────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘  Footers: 1080 × 328 (Home) / 496 (Attract)
```

| Pieza | Medida | Tokens |
|---|---|---|
| User_Footer Attract | 336 × 400 | `background.brand` |
| User_Footer Default | 248 × 232 | `background.brand` (con login) / `background.default` (sin login) |
| User_Footer collapsed | 248 × 136 | |
| Carrito_Footer | 656 × 80 | Variantes Empty · Full · Two buttons |
| "Podrías sumar x pts" | 656 × 48 | `background.subtle` `#F9F9F9` · `radius.s` 8 |
| Código de promoción | — | Campo + CTA |
| Badge de cantidad | 64 × 56 | |

## Variantes

| Footer completo | Medida | Uso |
|---|---|---|
| Attract | 1080 × 496 | Pantalla de inicio: CTA *Tocá para empezar* + login QR |
| Home c/Carrito | 1080 × 328 | Navegación de menú con pedido en curso |

**Mapa de CTAs** (Figma): 22 variantes × 7 pantallas × 11 CTAs. `Footers_shell` resuelve las 15 pantallas del flujo: Attract, ComoInicioSesion, Método, Home ± productos ± login, Detalle, Dimensionamiento, Resumen, Cupones.

## Estados

| Pieza | Estados |
|---|---|
| Carrito | Vacío (CTA inactivo) · Con productos · Dos botones |
| User | Sin login · Con login (puntos) · Colapsado |
| Accesibilidad | Variantes "Accessibility" que reubican el footer dentro de los 800 / 960 px inferiores |

## Responsive

El footer es **lo que más cambia** en otros formatos:

| Formato | Footer |
|---|---|
| Kiosco 1080 × 1920 | Flotante, ancho completo |
| Tablet horizontal | Columna derecha fija (carrito lateral), estilo POS |
| Kiosco chico | Altura reducida a 200 y user colapsado por defecto |

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Botones de 40 px | Figma ya los marca como deprecados en el footer por área de toque. Usar Medium 56 como mínimo |
| Cambios de total | Total y cantidad del carrito en `aria-live="polite"` |
| Landmark | `<footer>` con `aria-label="Tu pedido"` |
| Orden de foco | Contenido → footer. El footer no debe atrapar el foco |
