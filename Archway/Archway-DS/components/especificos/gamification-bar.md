# Gamification Bar

> **Fuente de la verdad:** [Design Resources CORE › Gamification Bar](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2684-4307) · `Gamification Bar` (16 variantes), `progres Gamification Bar` ([2998:875](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2998-875), 8), `Icon Bar` ([2684:4297](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2684-4297), 2).
> **Origen:** ArchWay · Específico (Nivel 2) · **Estado en Figma:** Existe · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

Barra de progreso que incentiva a sumar productos para desbloquear beneficios: reducción de tasas (*Small Order Fee*) y envío gratis.

| State | Etapa |
|---|---|
| Minimum Small Order Fee | Todavía no alcanza el mínimo |
| Suma productos | Sumando hacia el objetivo |
| Complete Small Order Fee | Mínimo alcanzado (tasas reducidas) |
| Complete 33 % / 66 % / 100 % Envío gratis | Progreso hacia envío gratis |
| Sin barra de Gamificación | Sin barra visible |
| skeleton | Cargando |

`Type`: **Expanded** (barra + card de mensaje, ≈ 162) · **Collapsed** (sólo barra, ≈ 66).

## Uso por pantalla (Figma)

| Pantalla | Type | Ancho | padding-bottom |
|---|---|---|---|
| Home | Expanded | Full width | 80 (la TabBar se monta encima) |
| Loyalty | Expanded | Full width | 0 |
| Mis cupones | Expanded | Full width | 0 |
| Categorías | Collapsed | Full width | 0 |
| Carrito | Collapsed | Ancho del contenedor flotante | 0 |

En todas: padding-top 16 y radio superior 16 (`Valor/radius/L`). Si no hay Small Order Fee, se puede quitar el ícono de la "M" en los estados de envío gratis.

## Tokens

Contenedor `Surface/default` · card `Feedback/info-surface` · track `Surface/subtle` / `Surface/strong` · avance `Feedback/info` · hitos (`Icon Bar`) `Feedback/info` + `Icon/on-color` (completo) o `Icon/disabled` · texto `Label/Label Small Bold`, `Text/primary`.

## Hallazgos

- La tabla "Antes / Ahora" de colores del canvas usa hex y nombres de Dashboard (`#006BAE`, `#CCF0FF`, `Layer /04`) ([C-T04](../audit.md#c-t04--documentación-con-nombres-viejos-o-hex)).
- 5 textos sin estilo y propiedades `Property 1` / `Property 2` en `progres Gamification Bar` ([C-T03](../audit.md#c-t03--textos-sin-estilo), [C-H01](../audit.md#c-h01--typos-y-nombres)).

## Accesibilidad

- `role="progressbar"` con valor y texto: "Te faltan $1.200 para el envío gratis".
- Anunciar el desbloqueo de un beneficio (`aria-live="polite"`).

## Cambios 2026-11-17 (paridad con Figma)

- Fondo `Feedback/info-surface`, radio L arriba, padding 16. Colapsada: alto mínimo 66; expandida: 162 con 80 abajo.
- Riel con hitos (por defecto 12,8 %) e ícono final; mensaje en `Label Small` centrado.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
