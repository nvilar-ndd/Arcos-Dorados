# Header

> **Fuente de la verdad:** [Design Resources CORE › Header](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2236-2206) · `Header` (6 variantes), `Selection Mode Header` ([2210:2260](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2210-2260), 7), `State` ([2290:2526](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=2290-2526), 3), `background_home`.
> **Origen:** ArchWay · Específico (Nivel 2–3) · **Estado en Figma:** Parcial · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Cabecera* (Top header, header scroll, Estado del restaurante).

## Propósito

Barra superior de la Home que comunica el **modo de entrega activo** y la ubicación. Al tocarla se abre el modal para elegir o cambiar el método.

| Mode | Label de acción | Ubicación | Estado del local | QR |
|---|---|---|---|---|
| PickUp | "Retirar en" | Nombre del local | Sí | Sí |
| Delivery | "Enviar a" | Alias + calle / número, o calle / número | No | No |
| Default | "Retirar o Enviar" | — | No | Sí |

`State`: **Expanded** (152 / 120 de alto, toda la info) · **Collapsed** (contraído al hacer scroll).

## Anatomía y tokens

| # | Parte | Token / medida |
|---|---|---|
| 1 | Fondo | `Surface/brand` (texto `Text/primary` 8.63:1 ✅) |
| 2 | Hit area | 316 × 48 |
| 3 | Ícono de modo | Local (PickUp) / moto (Delivery) |
| 4 | Label de acción | `Label/Label Medium` |
| 5 | Ubicación | `Label/Label Medium Bold`, truncada con ellipsis |
| 6 | Dropdown | Ícono que indica que es táctil |
| 7 | Estado del local (PickUp) | Cerrado · Próximo a cerrar (`Feedback/error-text`) · Pedidos en el local; `Label/Label Small` |
| 8 | QR | [Icon Only](../core/icon-only-fab.md) 48, fondo `Button/secondary-bg` |
| 9 | Radio inferior | `Valor/radius/XXL` (32) + squircle 60 %, sólo esquinas inferiores |

`Selection Mode Header`: `Mode` (Skeleton · Active · scroll) × `State` (Generic · Pickup · Delivery) · textos `Restaurant_name`, `address_alias`, `street_address`.

> La ficha nombra `color/layer/brand`; hoy es `Surface/brand` ([C-T04](../audit.md#c-t04--documentación-con-nombres-viejos-o-hex)).

## Accesibilidad

- El bloque de modo es un botón: "Retirar en McDonald's Palermo, cambiar método de entrega".
- El estado del local se incluye en el label ("Próximo a cerrar").
- QR: "Mostrar código QR".
