# Navegación

> **Fuente:** [[ADK] Design System › Navegation](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=11-23).
> **Origen:** ADK. ArchWay tiene Tabs y Bottom navigation (mobile) pero no navegación lateral.

## Propósito

Columna izquierda de 248 px para moverse entre **categorías del menú** y para ver el **progreso del flujo** de armado de un producto.

## Anatomía y tokens

| Pieza | Medida | Tokens |
|---|---|---|
| `Nav.menu-button` | 248 × 56 · padding 4/16 · gap 24 | Ícono 48 (`#ADADAD`, Gold seleccionado) + texto 16. Seleccionado: fondo `background.subtle` + barra izquierda Gold + **Bold** |
| `Nav.menu-button` accesible | 80 × 48 | Sólo ícono 32; seleccionado con barra inferior Gold |
| `Nav.menu` | 248 × 352 | `radius.s` 8 · `shadow.bordered-down`. Arriba, User points: "¡Hola, {nombre}!" 28, "Tienes disponibles" 16 y puntos 40 Bold con el gradiente Loyalty |
| `nav.category-button` | 248 × 56 | Ilustración en círculo Ivory de 48 + nombre 16. Seleccionado: barra Gold + Bold |
| User points | 248 | Puntos del usuario logueado |
| Progress Bar (pasos) | 248 × 56 por paso | Pendiente: círculo vacío · Actual: barra Gold + Bold + Ivory · Completo: check Gold |

```
┌───────────────── 248 ─────────────────┐
│ [ilustr.]  Hamburguesas               │  56 · default
├───────────────────────────────────────┤
│▌[ilustr.]  McCombos (Bold)            │  56 · seleccionado (Ivory + barra Gold)
├───────────────────────────────────────┤
│ [ilustr.]  Postres                    │
└───────────────────────────────────────┘
```

## Variantes y estados

| Componente | Estados |
|---|---|
| menu-button | Default · Selected |
| category-button | Default · Selected |
| Progress steps | Completado · Actual · Pendiente |

No hay estado *pressed* ni *focus*.

## Responsive

| Formato | Navegación |
|---|---|
| Kiosco | Columna fija de 248 |
| Tablet horizontal | Columna de 200–240 |
| Kiosco chico (< 900 de ancho) | Pasa a tabs horizontales scrolleables arriba del contenido. **Ley de Hick:** con más de 7–8 categorías, conviene agrupar |

## Accesibilidad

| Criterio | Detalle |
|---|---|
| Selección | Fondo Ivory (1.05:1) y barra Gold (1.69:1) no llegan a 3:1, pero el texto Bold es un segundo indicador ✅. En la versión compacta (sólo ícono) no hay texto: falla (A-A01) |
| Semántica | `<nav aria-label="Categorías">` + lista. Ítem actual con `aria-current="page"` |
| Pasos | `<ol>` con `aria-current="step"` |
