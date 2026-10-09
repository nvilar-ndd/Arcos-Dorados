# Attract Screen, Logos y UI Shell

> **Fuente:** [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) — páginas [Attract Screen](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=3036-4916), [Logos](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=3197-1424) y [UI Shell](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=3845-10).
> **Origen:** ADK. Sin equivalente en ArchWay.

## Attract Screen

**Propósito:** pantalla de reposo del kiosco. Atrae, invita a empezar y permite identificarse con QR (MiMcDonald's / MeuMcDonald's).

| Pieza | Detalle |
|---|---|
| Lienzo | 1080 × 1920 con video o imagen de campaña |
| Footer Attract | 1080 × 496, con User_Footer de 336 × 400 en Gold |
| Idioma | Selector ES / PT / EN (*"Otros lenguajes"*) |
| Accesibilidad | Botón *"Accesibilidad"* que activa el modo de [área accesible](../foundations/layout.md#área-accesible-safe-accessibility-area) |

**Accesibilidad**

| Criterio | Detalle |
|---|---|
| Ubicación de los botones | *Accesibilidad* e *Idioma* tienen que estar **dentro de los 800 px inferiores** y medir 56 como mínimo |
| Video | Sin audio automático. Si tiene texto en movimiento, pausa o fin antes de 5 s (2.2.2) |
| `lang` | Al cambiar de idioma se actualiza `<html lang>` |
| Typo | El botón dice *"Acecibilidad"*: corregir a *"Accesibilidad"* (A-H01) |

## Logos

Componente `Logos Arcos` de 152 × 112:

| Type | Uso |
|---|---|
| McDonald's Red | Arcos sobre rojo |
| Arcos Dorados | Marca corporativa |
| MiM | MiMcDonald's (loyalty, ES) |
| MeuM | MeuMcDonald's (loyalty, PT) |

`alt="McDonald's"`, o `alt="MiMcDonald's"`, según el contexto.

## UI Shell

`Footers_shell` arma cada pantalla con Header + nav + contenido + footer. Las 15 variantes son:

| Grupo | Pantallas |
|---|---|
| Inicio | Attract, ComoInicioSesion, Método |
| Home | Home ± productos ± login |
| Producto | Detalle, Dimensionamiento |
| Cierre | Resumen, Cupones |

Es la referencia para el layout de [`foundations/layout.md`](../foundations/layout.md).
