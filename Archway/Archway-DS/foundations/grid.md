# Grilla y Layout

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — estilos de grilla `Aw_Layout/col` y `Aw_Layout/Grid`, página *Grid base*.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Master Frame — 412 × 912

iOS y Android se diseñan sobre **una sola medida maestra**: el lienzo de trabajo ("Source of Truth" de ArchWay).

| Propiedad | Valor | Razón técnica |
|---|---|---|
| Ancho | **412px** | Estándar de Material Design 3 (Android, mayor cuota en Latinoamérica) y punto medio entre iPhone 17 (402) y Pro Max (440). Múltiplo de 4. |
| Alto | **912px** | Múltiplo de 8 (114 × 8). |
| Fold | **720px** | Zona segura para contenido crítico sin scroll. |

Tamaños de referencia para validar: **iOS 393 × 852** (iPhone 15/16) y **Android 360 × 800** (el ancho más seguro para gama media-baja de la región).

## Grilla de columnas — `Aw_Layout/col` (The ARCH Grid)

| Propiedad | Valor | Token relacionado |
|---|---|---|
| Tipo | Columnas fluidas (`STRETCH`) | — |
| Columnas | **4** | — |
| Margen lateral | **16px fijos** | `Valor/spacing/16` — "margen sagrado lateral" |
| Gutter | **16px** | `Valor/spacing/16` (valor coincide; no está enlazado a la variable) |
| Contenedor útil | **380px** (412 − 2×16) | — |
| Columna | **83px** — (380 − 3×16) / 4 | — |

```
|16|  83  |16|  83  |16|  83  |16|  83  |16|   = 412
 ^ margen      ^ gutter                  ^ margen
```

- **83px no es múltiplo de 8 y no importa:** las columnas son fluidas (SwiftUI, Compose, CSS). Lo que debe ser múltiplo de 8 son márgenes y gutters.
- **Componentes:** una card al 100% mide 380px; dos cards de 2 columnas miden 182px cada una con 16 de gutter.

## Grilla base — `Aw_Layout/Grid`

| Propiedad | Valor | Token relacionado |
|---|---|---|
| Tipo | Grid cuadrada | — |
| Tamaño de celda | **8px** | Enlazado a `Valor/8` ✅ |

Todo tamaño, padding y posición se alinea a esta retícula de 8 (con 4 como medio paso). Ver [spacing.md](./spacing.md).

## Reglas de layout

- **The Margin Lock:** el margen exterior de 16px es sagrado e inamovible. Todo el contenido se alinea a él, excepto los elementos *full-bleed* (banners promocionales, galerías de imágenes) que necesitan llegar al borde.
- **Fluid Scaling:** nada se diseña con ancho fijo. Botones, cards y banners van en *Fill container*; al estirar el frame de 412 a 440 (Pro Max) o reducirlo a 360 (Android gama baja), el diseño se adapta solo.
- **Safe areas:** reservar **44–54px** arriba para la status bar y al menos **34px** abajo en iOS para el home indicator. No poner botones críticos pegados a esas zonas.
- **Touch targets:** ver [spacing.md](./spacing.md#touch-targets).

## Pendiente de definición

Hoy sólo existe grilla **mobile**. No hay grillas ni breakpoints para Web eCommerce, Dashboard o Kiosco ADK. Ver propuesta en [`audit.md`](../audit.md).
