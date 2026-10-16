# Audit — Iconografía

> **Archivo auditado:** [Iconography (Figma)](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=9-11) · **Fecha:** 2026-10-16 · **Método:** inventario de los 216 component sets vía Figma MCP, contra el [manual de creación](./manual-creacion.md).
>
> **Flujo:** igual que el resto de ArchWay. Cada hallazgo queda `Pendiente` hasta que el equipo lo aprueba o lo rechaza, y sólo lo aprobado se aplica en Figma. Ojo: es una librería de **Global**. Lo que se cambie ahí afecta a otros mercados, así que algunos puntos pueden requerir coordinarlos con Global o resolverlos en una capa local.

## Tablero

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| I-A01 | Variante `Disable` (`#ADADAD`) no llega a 3:1 sobre blanco | 🔴 P0 | Pendiente |
| I-A02 | Gold como único indicador de estado sobre blanco (1.69:1) | 🔴 P0 | Pendiente |
| I-S01 | Color por estilos de otra librería, no por variables de ArchWay | 🟠 P1 | Pendiente |
| I-S02 | Propiedades de variante con nombres y valores inconsistentes | 🟠 P1 | Pendiente |
| I-S03 | `Favorite` tiene las propiedades cruzadas | 🟠 P1 | Pendiente |
| I-S04 | Sets sin propiedades (`Trash`, `Accesibility_TEA`) | 🟠 P1 | Pendiente |
| I-S05 | Nombres duplicados entre páginas y dentro de una página | 🟠 P1 | Pendiente |
| I-S06 | Azul de links distinto al de ArchWay | 🟡 P2 | Pendiente |
| I-S07 | Tamaño 8px fuera de la escala | 🟡 P2 | Pendiente |
| I-H01 | Nombres en español o en minúscula, typos | ⚪ P3 | Pendiente |

## 🔴 P0 — Accesibilidad

### I-A01 · `Disable` no llega a 3:1

37 íconos tienen variante `Color=Disable` (más `Half Coin`, `Coin` y `Coin Stack` con `State=Disabled`), todos con `Secondary/Grey` `#ADADAD`, que da **2.24:1** sobre blanco. Un ícono deshabilitado está exento de contraste (WCAG 1.4.11) **sólo si el control también está deshabilitado**. Si en *Restaurant Features* y *Fulfillment* se usa `Disable` para decir "este restaurante no tiene el servicio", eso es información y tiene que pasar 3:1.

**Propuesta:** para "servicio no disponible", usar `Icon/disabled` `#707070` (4.83:1) más un texto o tachado. Reservar `#ADADAD` para controles deshabilitados.

### I-A02 · Gold como indicador de estado

En *Bottom Navigation*, `Reorder` y `House` ofrecen `Color=Gold` / `Black` / `Disable` en lugar de `Active State` como el resto del tab bar. Si el Gold se usa para marcar el activo sobre la barra blanca, da 1.69:1. **Propuesta:** pasarlos a `Active State=True/False` como `Home`, `Order` y `Deals`, y dejar el Gold como acento opcional. Mismo criterio que ArchWay A-06.

## 🟠 P1 — Estructura

### I-S01 · Color por estilos de otra librería

Los vectores usan estilos de color de una librería de Global (`Primary/McDonald's Black`, `Secondary/Grey`, `Secondary/Blue`…). No están enlazados a las variables de ArchWay, y el archivo no tiene variables ni estilos locales.

**Propuesta:** cuando la librería de ArchWay esté publicada, enlazar los fills a `Icon/primary`, `Icon/gold`, `Icon/red`, `Icon/disabled`, `Icon/gray` e `Icon/on-color`. Si Global no lo acepta, resolverlo en código: los SVG se exportan y el color se aplica con `currentColor` y los tokens.

### I-S02 · Propiedades inconsistentes

| Problema | Ejemplos |
|---|---|
| Misma propiedad, distinto nombre | `Active State` / `Active state` / `Active`; `Size` / `size`; `Color` / `color` |
| Propiedad genérica | `MODO`: `Property 1` |
| Otro esquema de versiones | `Billetera`: `Type=Outline/Filled` en lugar de `Color` + `Outline`; *Loyalty*: `State`; *Checkbox*: `Selected` |
| Valores de tamaño mal escritos | `MasterCard`: `32x`, `24x` · `House`: `56` y `56px` · `Assessment`: `56 px` (con espacio) · *Specials*: `56` sin `px` |
| Valores de color con typo | `Golde` (`Directions`, `Play`) · `Disble` (`McCafe`) |
| Mayúsculas en valores | `black` / `white` (`audio waveform`, `stars`) |

**Propuesta:** una lista cerrada de propiedades y valores, documentada en el [manual](./manual-creacion.md):

- `Color` = `Black`, `Gold`, `Red`, `White`, `Disable`, `Grey`, `Blue`, `Green`, `Fuchsia`
- `Outline` = `True` / `False`
- `Size` = `16px`, `24px`, `32px`, `48px`, `56px`
- `State` = `Default` / `Active` / `Disabled`

Renombrar propiedades no rompe instancias si se mantiene la cantidad de variantes. Igual hay que verificar con un archivo de prueba antes de publicar.

### I-S03 · `Favorite` tiene las propiedades cruzadas

`Favorite` (323:3867) tiene `Color=False/True`, `Outline=16px…56px` y `Size=Black/Red/Red+Border`: los valores quedaron en la propiedad equivocada. Quien lo usa en el panel de propiedades ve "Outline: 24px". **Propuesta:** renombrar las tres propiedades.

### I-S04 · Sets sin propiedades

`Trash` (25 variantes) y `Accesibility_TEA` (5) no tienen propiedades de variante legibles: no se pueden cambiar desde el panel. **Propuesta:** rearmarlos con `Color`, `Outline` y `Size`.

### I-S05 · Nombres duplicados

| Nombre | Dónde |
|---|---|
| `Restaurants` | Dos sets en *Bottom Navigation* (319:1592 y 983:1746) |
| `Reorder`, `Order`, `Deals` | *Bottom Navigation* y *Ordering* |
| `More` | *Bottom Navigation* y *Controls* |
| `Loyalty` | *Bottom Navigation* y *Restaurant Features* |
| `Kiosk` | *Devices* y *Restaurant Features* |
| `Edit` | *Ordering* y *Settings & Accessibility* |
| `Accessibility` | *Restaurant Features* y *Settings & Accessibility* |
| `Breakfast` | *Daypart* y *Restaurant Features* |
| `Discover` | *Payment Providers* y *Restaurant Features* |
| Mismo concepto, dos íconos | `Parking` / `Estacionamiento` · `Home` / `House` |

En el panel de Assets aparecen como resultados iguales, y en código chocan los nombres de archivo. **Propuesta:** prefijar por contexto cuando el dibujo es distinto (`Nav/Order`, `Restaurant/Kiosk`) o unificar cuando es el mismo.

## 🟡 P2

### I-S06 · Azul de links

`View All`, `Open Link`, `Share`, `Download`, `Upload`, `Edit` y `Chevron` usan `#006BAE`. ArchWay usa `Link/default` `#1652B1`. Se resuelve con la decisión compartida D4 / K1 de [Convergencia](../Convergencia/README.md#decisiones-compartidas).

### I-S07 · Tamaño 8px

`Close`, `Checkmark` y `Favorite Star` tienen una variante de 8px que no está en las especificaciones. Si se usa dentro de badges, documentarlo. Si no, eliminarlo.

## ⚪ P3 — Higiene

- Nombres en español en una librería en inglés: `Billetera`, `Mi cuenta`, `Mi cuenta_McID`, `Misiones`, `Estacionamiento`, `Pago efectivo`.
- Nombres en minúscula: `move elements`, `audio waveform`, `stars`.
- Typos: `Accesibility_TEA`.
- La página *Information* tiene un texto pendiente: "Actualizar ejemplos".
