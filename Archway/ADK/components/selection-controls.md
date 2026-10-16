# Chips, Toggle y Quantity

> **Fuente:** [[ADK] Design System › Buttons](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=2-6) — `Chips`, `Toggle`, `Quantity`.
> **Origen:** ADK. Equivalentes en ArchWay: `Chip`, `Switch`, `Stepper / Quantity`.

## Propósito

| Componente | Para qué |
|---|---|
| **Chips** | Filtros y opciones rápidas (ingredientes, salsas) |
| **Toggle** | Opciones on/off (por ejemplo "sin hielo") |
| **Quantity** | Cantidad de un producto en detalle y carrito |

## Anatomía y tokens

| Componente | Medida | Radio | Seleccionado / On | Default / Off |
|---|---|---|---|---|
| Chip L | alto 56 | 28 (`full`) | `control.on` `#FFBC0D` | `#FFFFFF` + `border.default` `#6F6F6F` |
| Chip S | alto 40 | 20 (`full`) | ídem | ídem |
| Toggle | Track 88 × 32 · knob 48 | `full` | Track Gold + borde `control.on-stroke` `#C08B00`; knob blanco a la derecha | Track `control.track` `#F9F9F9` + borde `control.track-stroke` `#ADADAD`; knob a la izquierda |
| Quantity | 144 × 40 | 20 (`full`) | — | Borde `border.strong` `#292929`, botones −/+ y número centrado |

## Variantes y estados

| Componente | Variantes | Estados documentados | Estados faltantes |
|---|---|---|---|
| Chips | Size 56 / 40 · Selected true / false | Default, Selected | Pressed, Disabled |
| Toggle | `Status` True / False (**invertido**: True dibuja apagado, A-C08) | On, Off | Disabled |
| Quantity | Active Remove × Active More (4 combinaciones) · Type Default / Trash | − y + habilitados o no; con 1 unidad el − pasa a tacho (Trash) | — |

## Responsive

Los tres tienen alto fijo. En tablet se mantienen los 56 de chip y 48 de toggle; Quantity debería crecer a 48 (ver Accesibilidad).

## Accesibilidad

| Criterio | Estado |
|---|---|
| Borde del toggle Off | `#ADADAD` sobre blanco da **2.24:1**: no delimita el control (1.4.11) → usar `border.default` `#6F6F6F` (A-A02) |
| Chip seleccionado | Fondo Gold (1.69:1 vs blanco) + texto Bold: el Bold es el segundo indicador ✅ |
| Quantity | Botones −/+ de menos de 40 × 40. Proponemos 56 de alto y botones de 56 × 56 (A-C04) |

| Atributo Web | Valor |
|---|---|
| Chip | `<button aria-pressed>` (filtro) o `role="checkbox"` |
| Toggle | `<button role="switch" aria-checked>` con label visible |
| Quantity | `role="group"` con `aria-label="Cantidad de {producto}"` |
| Botones −/+ | `aria-label` "Quitar uno" / "Agregar uno" |
| Valor | En `aria-live="polite"` |
