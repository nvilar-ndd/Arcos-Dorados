# Feedback: Snackbar, Alerta y Loaders

> **Fuente:** [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) — páginas [Snackbars](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=2222-6), [Alerta](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=2208-145) y [Loaders](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=3197-1139).
> **Origen:** ADK. Equivalentes en ArchWay: Snackbar / Toast, Dialog y Progress indicator.

## Snackbar

**Propósito:** confirmación breve y no bloqueante, por ejemplo *Producto agregado* o *Cupón aplicado*.

```
▌┌──────────────────────────────────────────────┐
▌│  [ícono]  Supporting text (24 · on-color)    │  568 × 96 · background.inverse #292929 · radius.s 8
▌└──────────────────────────────────────────────┘
└ borde izquierdo de estado
```

| Status | Borde izquierdo | Contraste sobre `#292929` | ArchWay |
|---|---|---|---|
| Success | `feedback.success` `#A9C141` | 7.20 ✅ | `feedback/success-on-black` `#2B8C4D` |
| Error | `feedback.error` `#FA4D56` (fuera de paleta) | 4.34 ✅ | `feedback/error-on-black` `#FF4248` |
| Warning | `feedback.warning` `#FFBC0D` | 8.63 ✅ | `feedback/warning` |
| Information | `feedback.info` `#56AFD1` | 5.85 ✅ | `feedback/info-on-black` `#4584E8` |

| Criterio | Detalle |
|---|---|
| Accesibilidad | `role="status"` (`aria-live="polite"`); Error con `role="alert"` |
| Tiempo de cierre | Ninguno documentado: proponemos 4 s mínimo y 6 s para Error, sin cerrar mientras se toca (2.2.1) |
| Ícono | Figma ya tiene ícono por estado (check, octógono, triángulo, info) ✅ |
| Posición | Dentro del área accesible, arriba del footer |

## Alerta

**Propósito:** interrupción a pantalla completa por un error que bloquea el flujo. El ejemplo de Figma: *"Ups! Hubo un problema — Es necesario tener productos en el pedido…"*.

| Pieza | Medida / token |
|---|---|
| Contenedor | 864 × 552 sobre pantalla blanca |
| Título | `headline.extra-large-bold` 60/64 |
| Cuerpo | 40 Regular (`headline.medium`) |
| CTA | Botón primario (borde `#C08B00`) y/o secundario (`#6F6F6F`) |

| Criterio | Detalle |
|---|---|
| Rol | `role="alertdialog"` con `aria-labelledby` (título) y `aria-describedby` (cuerpo) |
| Foco | Va al CTA principal |
| Acción | Siempre con una acción explícita: no se cierra sola |
| Ley de Jakob | Mantener el mismo layout para todas las alertas (título, cuerpo, CTA abajo) |

## Loaders

| Variante | Medida | Uso |
|---|---|---|
| Loader Circular | 120 × 120, arco Gold `#FFBC0D` sobre blanco | Espera genérica |
| Add-to-cart | 140 | Animación al agregar al carrito |
| Fries loader | 900 | Espera larga, por ejemplo procesando el pago |

| Criterio | Detalle |
|---|---|
| Contraste | Gold sobre blanco da 1.69:1. Para un indicador de progreso (1.4.11) hace falta 3:1: usar track `#D6D6D6` + arco `#292929`, o sumar texto *"Procesando pago…"* (A-A01) |
| Semántica | `role="progressbar"` (o `role="status"` con texto), `aria-busy="true"` en la región que carga |
| Motion | Respetar `prefers-reduced-motion`: reemplazar la animación ilustrada por un indicador estático + texto. Duración y curvas de ArchWay: `motion.duration.*`, `easing.standard` |
