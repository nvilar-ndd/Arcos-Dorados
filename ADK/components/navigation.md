# Navegación

> **Fuente:** [[ADK] Design System › Navegation](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=11-23).
> **Origen:** ADK. ArchWay tiene Tabs y Bottom navigation (mobile) pero no navegación lateral.

## Propósito

Columna izquierda de 248 px para moverse entre **categorías del menú** y para ver el **progreso del flujo** de armado de un producto.

## Anatomía y tokens

| Pieza | Medida | Tokens |
|---|---|---|
| `Nav.menu-button` | 248 × 56 | Seleccionado: `background.subtle` `#F9F9F9` + `border.selected` Gold. Default: sin fondo |
| `Nav.menu-button` accesible | 80 × 48 | Versión compacta para el modo accesible |
| `Nav.menu` | 248 × 352 | `radius.s` 8 · `shadow.bordered-down` |
| `nav.category-button` | 248 × 56 | Ícono/ilustración + nombre de categoría |
| User points | 248 | Puntos del usuario logueado |
| Progress Bar (pasos) | 248 × 56 por paso | Paso actual, completado y pendiente |

```
┌───────────────── 248 ─────────────────┐
│ [ilustr.]  Hamburguesas               │  56 · default
├───────────────────────────────────────┤
│▌[ilustr.]  McCombos                   │  56 · seleccionado (#F9F9F9 + Gold)
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
| Selección | Hoy se indica con fondo `#F9F9F9` (1.05:1 vs blanco) + borde Gold (1.69:1). Ninguno de los dos llega a 3:1, así que proponemos sumar barra lateral `#292929` de 4 px o texto Bold (A-A01) |
| Semántica | `<nav aria-label="Categorías">` + lista. Ítem actual con `aria-current="page"` |
| Pasos | `<ol>` con `aria-current="step"` |
