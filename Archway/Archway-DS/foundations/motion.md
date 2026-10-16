# Motion

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — página **Motion** (documentación; todavía no son variables de Figma).
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Principios — *The Arch Spirit*

Antes de los números, cómo se siente el movimiento:

- **Eficiente (productive):** en la App o el Kiosco, el tiempo es hambre. Las transiciones funcionales son rápidas para no retrasar la tarea.
- **Orgánico:** evitamos movimientos lineales. Usamos curvas que imitan la física real (aceleración y desaceleración).
- **Enfocado:** el movimiento dirige el ojo hacia donde está la acción (p. ej. el producto saltando al carrito).

## Duraciones (timing tokens)

El tiempo se divide según la complejidad del cambio, en múltiplos fáciles de recordar.

| Token Figma | Duración | CSS var (propuesta) | Uso sugerido |
|---|---|---|---|
| `motion-duration-fast` | **100ms** | `--aw-motion-duration-fast` | Micro-interacciones: hover, checkboxes, toggle, feedback de botones. |
| `motion-duration-moderate` | **250ms** | `--aw-motion-duration-moderate` | Elementos pequeños: menús desplegables, expansión de acordeones, tooltips. |
| `motion-duration-slow` | **400ms** | `--aw-motion-duration-slow` | Transiciones de pantalla completa, diálogos (modales) o movimientos de cards grandes. |
| `motion-duration-expressive` | **600ms** | `--aw-motion-duration-expressive` | Momentos de marca: splash screens, animaciones de éxito de compra o recompensas. |

## Curvas de aceleración (easing)

| Curva | Valor | CSS var (propuesta) | Cuándo | Sensación |
|---|---|---|---|---|
| **Standard / Estándar (ease-in-out)** | `cubic-bezier(0.4, 0, 0.2, 1)` | `--aw-motion-easing-standard` | Elementos que se mueven de un punto A a un punto B dentro de la pantalla. | Natural, equilibrada. |
| **Entrance / Entrada (ease-out)** | `cubic-bezier(0, 0, 0.2, 1)` | `--aw-motion-easing-entrance` | Elementos que entran a la pantalla (modal, toast de notificación). Empiezan rápido y frenan suavemente. | Inmediata, atrae la atención. |
| **Exit / Salida (ease-in)** | `cubic-bezier(0.4, 0, 1, 1)` | `--aw-motion-easing-exit` | Elementos que abandonan la pantalla. Empiezan lento y aceleran al salir. | Despacho rápido: el elemento se retira para dejar espacio. |

## Patrones de transición

1. **Movimiento en el eje (Move):** cuando un objeto cambia de posición. Si recorre **más de la mitad de la pantalla → `motion-duration-slow`**; si es un trayecto corto → `motion-duration-moderate`.
2. **Escalado y elevación (Scale & Depth):** al presionar una card de producto, se encoge a **scale 0.98** y vuelve a su tamaño. Imita la sensación física de presionar un botón real.
3. **Golden Path (shared element transition):** en la App, al tocar una hamburguesa del listado, la imagen se convierte en el encabezado de la pantalla de detalle. **400ms, curva Standard.** Mantiene la continuidad visual: el usuario nunca siente que "cambió de app".

## Reglas para el equipo

- **Reducir movimiento (accesibilidad):** siempre debe existir la opción. Si el usuario la tiene activa, las animaciones pasan a un **fade de opacidad de 200ms** (WCAG 2.3.3; `prefers-reduced-motion` en web, *Reduce Motion* en iOS, *Remove animations* en Android).
- **No amontonar:** no animar más de 2 o 3 cosas al mismo tiempo en pantalla.
- **Evitar el bounce excesivo:** un rebote (elastic) fuerte se ve infantil o poco profesional. El *spring* se mantiene muy sutil.

## Uso en código

```css
.card {
  transition: transform var(--aw-motion-duration-fast) var(--aw-motion-easing-standard);
}
.card:active { transform: scale(var(--aw-motion-press-scale)); }

@media (prefers-reduced-motion: reduce) {
  * {
    transition-property: opacity !important;
    transition-duration: var(--aw-motion-reduced-duration) !important;
    animation: none !important;
  }
}
```

```swift
// SwiftUI
.animation(.timingCurve(0.4, 0, 0.2, 1, duration: 0.25), value: isExpanded)
```

```kotlin
// Jetpack Compose
val Standard = CubicBezierEasing(0.4f, 0f, 0.2f, 1f)
tween<Float>(durationMillis = 250, easing = Standard)
```

> Pendiente: en Figma estos valores están documentados en texto, no como variables. Convertirlos en una colección `Motion` permitiría exportarlos automáticamente como el resto de los tokens.
