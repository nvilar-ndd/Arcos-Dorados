# Buttons

> **Fuente:** [[ADK] Design System › Buttons](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=2-6) — component set `ADK Buttons` (28 variantes) y `Button illustration`.
> **Origen:** ADK. Equivalente en ArchWay: `Button` (Primary / Secondary).

## Propósito

Acción principal y secundaria del flujo de pedido en kiosco: *Agregar*, *Continuar*, *Pagar*, *Cancelar*. La variante **Selection** se usa para elegir una opción dentro de un grupo (tamaño, método de consumo).

## Anatomía y tokens

```
┌─────────────────────────────┐  radius.xs (4) · border-width.default (1)
│  [icono]  Label             │  alto: 80 / 56 / 40 · XXL 480×200
└─────────────────────────────┘  texto: body.large / medium / small (24/22/16)
```

| Estilo | Fondo | Borde | Texto |
|---|---|---|---|
| Primary | `button.primary` `#FFBC0D` | `button.primary-stroke` `#C08B00` 1px | `button.text` `#292929` |
| Secondary | `button.secondary` `#FFFFFF` | `border.default` `#6F6F6F` 1px | `button.text` |
| Selection activa | `#FFFFFF` | `border.selected` `#FFBC0D` **3px** | Bold |
| Selection inactiva | `#FFFFFF` | `border.default` 1px | Regular |

## Variantes

| Propiedad | Valores |
|---|---|
| Style | Primary · Secondary · Selection |
| State | Active · Hover · Inactive |
| Size | Large 80 · Medium 56 · Small 40 · XXL 480×200 (secondary, radio 3, texto 40 Bold) |
| Icon + Text | True · False (sólo Secondary) |

**Button illustration:** tarjeta-botón con ilustración, para la elección inicial *Comer acá / Para llevar*.

| Tamaño | Medida | Radio |
|---|---|---|
| Big | 344 × 440 | `radius.l` 16 |
| Medium | 280 × 320 | `radius.l` 16 |

## Estados

| Estado | Primary | Secondary |
|---|---|---|
| Active (default) | Gold + borde Accent Gold | Blanco + borde Dark Grey |
| Hover / pressed | `button.primary-hover` `#F1B417` | `button.secondary-hover` `#F1F1F1` |
| Inactive (disabled) | Forma y texto al 40 % de opacidad (fondo efectivo `#FFE49E`) | Forma y texto al 40 % (borde efectivo ≈ `#C5C5C5`) |
| Focus | **No existe** | **No existe** |

> En touch, "Hover" es en realidad el estado *pressed*. ArchWay lo llama `pressed`; conviene renombrarlo (A-C03).

## Responsive

- Hoy no hay ancho fluido: los botones del footer tienen ancho fijo por variante.
- **Propuesta:** `width: 100%` dentro de su columna y alto por tamaño.
- En tablet, Large pasa a 64 y Medium queda en 56 (ver Convergencia § Formatos).

## Accesibilidad

| Criterio | Estado |
|---|---|
| Contraste del texto | 8.63:1 sobre Gold y 7.82:1 en hover ✅ |
| Borde del primario sobre blanco | 3.03:1 ✅ (justo) |
| Inactive | Se resuelve con opacidad 40 % sobre la capa, no con tokens: en código y al cambiar de fondo da colores imprevisibles. Proponemos tokens `button.*-inactive` explícitos (A-C02) |
| Small 40 px | Bajo para kiosco; Figma ya lo depreca en el footer |
| Foco | Un kiosco puede tener teclado o lector externo (modo accesible, EN 301 549): definir anillo de 2 px `#292929` con offset 2 (A-C01) |

| Atributo Web | Valor |
|---|---|
| Elemento | `<button type="button">` |
| Inactive | `disabled` (no `aria-disabled` si no tiene tooltip) |
| Selection | Grupo `role="radiogroup"` + cada botón `role="radio"` `aria-checked` |
| Feedback de toque | `:active` con `transform: scale(0.98)`, igual que el motion `press.scale` de ArchWay |
