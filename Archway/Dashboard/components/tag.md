# Tag

> **Fuente de la verdad:** [Components › Tag](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=857-22446) · `Tag`, `Tag-operations`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Etiqueta no interactiva para estado o categoría (estado de una promoción, tipo, segmento). `Tag-operations`: **uso exclusivo** para textos muy extensos que deben mostrarse completos.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Contenedor | 58 × 24 (`Tag`) · 241 × 24 (`Tag-operations`) · padding 4/8 (`spacing/050`/`spacing/100`) · gap `spacing/050` |
| Radio | **16 suelto** (debería ser `radius/lg`, [D-C02](../audit.md#d-c02--radios-enlazados-a-spacing)) |
| Texto | `Label01 - cms`, `text/primary` |
| Ícono | opcional, `icon/primary` |

## Variantes

| Style | Fondo | Borde |
|---|---|---|
| fill | `layer/03` | — |
| outline | `layer/00` (transparente) | `border/03` 1 px |
| Con color de estado | `tag/background-green`, `tag/background-blue` (ver [Card List](./card-list.md)) | — |

Combinaciones documentadas: Text · Icon · Icon + text · State + Fill · State + Outline.

> ⚠️ Figma: "En modo dark, cambiar manualmente el color tipográfico". Es [D-A01](../audit.md#d-a01--tags-en-dark-mode): el texto blanco sobre `tag/background-*` da 1.20–1.25:1.

## Accesibilidad

- No es interactivo: `<span>`, sin foco. Si filtra o se quita, es un *chip* (otro componente, con `<button>`).
- El color no es el único portador del estado: el texto del tag ("Activa", "Próxima") lo dice.
- Outline: `border/03` (2.24:1) no alcanza 3:1, pero el tag no es un control, así que no aplica 1.4.11; el texto sí cumple.
- `Tag-operations` puede truncar con `text-overflow: ellipsis` y `title`/tooltip con el texto completo.
