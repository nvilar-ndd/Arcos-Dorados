# Dropdown

> **Fuente de la verdad:** [Components › Dropdown](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6302) · component sets `Dropdown-Menu`, `Dropdown-ListMenu`, `Dropdown-ListItem`, `Dropdown-ListMenu-desplegado`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Elegir una opción de una lista cerrada (país, tipo de franquicia, marca de moneda). Para búsqueda con texto libre usar `TextField_Dropdown` ([text-field.md](./text-field.md)).

## Anatomía

| Pieza | Rol | Medida | Tokens |
|---|---|---|---|
| `Dropdown-Menu` | input base | 288 × 48 · padding `spacing/200` · gap 8 | fondo `layer/01`; texto `Label02 - cms` |
| `Dropdown-ListMenu` | lista de opciones | 288 × 384 | fondo `layer/02`, separadores `border/02` |
| `Dropdown-ListItem` | opción | 288 × 80 (con imagen) · padding `spacing/200` | fondo `background/01`, borde inferior `border/02` |
| `Dropdown-ListMenu-desplegado` | input + lista abiertos | 288 × 432 | efecto `Elevation/Raised Down` |

Props: `IconLeft`, `IconRight` (input); `Show Icon Left`, `Show Icon Right`, `Show Img`, `Text Label` (ítem).

## Estados

**Input (`Dropdown-Menu`)**

| Estado | Fondo | Borde |
|---|---|---|
| Enabled | `layer/01` | — |
| Hover | `button/secondary-hover` | |
| Focus | `button/secondary-hover` | `border/01` |
| Active / Pressed | `layer/01` | `border/01` |
| Error | `layer/01` | `support/error` |
| Disabled | `layer/02` | — · texto `text/disabled` |
| Skeleton | `layer/02` | — |

**Ítem (`Dropdown-ListItem`)**: Enabled `background/01` · Hover y Selected `background/04` · Disabled `layer/02` · Skeleton `layer/02`.

> Selected y Hover tienen el mismo fondo: el ítem seleccionado necesita otra señal (check o peso) para no depender sólo del hover ([D-C08](../audit.md#d-c08--estados-iguales-entre-sí)).

## Responsive

Ancho fill del contenedor. En mobile la lista puede abrir como *bottom sheet* o `<select>` nativo.

## Accesibilidad

- Preferir `<select>` nativo cuando no hay imagen ni íconos. Si es custom: patrón *listbox* (`role="combobox"` + `role="listbox"`, `aria-expanded`, `aria-selected`, flechas, `Home/End`, type-ahead, `Esc`).
- El input en estado Enabled no tiene borde → no se identifica como control sobre `layer/01` (WCAG 1.4.11).
- Error con texto y `aria-invalid`, no sólo borde rojo.
