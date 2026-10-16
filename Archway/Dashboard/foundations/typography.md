# Tipografía

> **Fuente de la verdad:** [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) — 16 estilos de texto locales y página *Typography*.
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas viven en [`audit.md`](../audit.md); la convergencia con ArchWay, en [`Convergencia/dashboard-archway.md`](../../Convergencia/dashboard-archway.md).

## Familias

| Familia | Uso |
|---|---|
| **Speedee** (`font/family/default`) | Toda la interfaz del Dashboard (licencia McDonald's). |
| **Roboto Mono** | Bloques de código y JSON (estilos `RM_Body*`). |

Variables tipográficas en Figma: `font/family/default` = `speedee`, `font/size/label-01` = 12, `font/size/body` = 16. **Los estilos de texto no están enlazados a estas variables** (salvo el interlineado de `RM_Body1`, enlazado por error a `spacing/300`).

## Estilos de texto

Tracking de todos los estilos: **−0.15px**.

| Estilo Figma | Familia | Tamaño / Interlineado (px) | Peso | Tracking | Uso (página *Typography*) |
|---|---|---|---|---|---|
| `h1-  cms` | Speedee | 36 / 40 | Regular | −0.15px | Encabezados de diseño (página: "Esto es para encabezados de diseño"). |
| `h2 - cms` | Speedee | 32 / 40 | Bold | −0.15px | — |
| `H3 - CMS` | Speedee | 32 / 36 | Regular | −0.15px | — |
| `H4 - CMS` | Speedee | 24 / 32 | Bold | −0.15px | — |
| `H5 - CMS` | Speedee | 24 / 32 | Regular | −0.15px | — |
| `H6 - CMS` | Speedee | 18 / 24 | Bold | −0.15px | — |
| `H7 - CMS` | Speedee | 18 / 24 | Regular | −0.15px | — |
| `Body01 - cms` | Speedee | 16 / 24 | Regular | −0.15px | Párrafos largos de cuatro líneas o más. Siempre alineado a la izquierda. |
| `Body02 - cms` | Speedee | 14 / 20 | Regular | −0.15px | Párrafos largos de más de cuatro líneas; cuerpos largos en acordeones o listas estructuradas. Siempre alineado a la izquierda. |
| `Body03 - cms` | Speedee | 14 / 16 | Regular | −0.15px | Párrafos cortos de no más de cuatro líneas; uso común en componentes. |
| `Label03- cms` | Speedee | 14 / 16 | Bold | −0.15px | Ítems en estado activado. |
| `Label02 -  cms` | Speedee | 14 / 16 | Regular | −0.15px | Multipropósito: etiquetas de campo, mensajes de error y títulos. No usar para cuerpo de texto. |
| `Label01  - cms` | Speedee | 12 / 16 | Regular | −0.15px | — |
| `RM_Body1 - cms` | Roboto Mono | 16 / 24 | Regular | −0.15px | Uso especial para JSON. |
| `RM_Body2 - cms` | Roboto Mono | 14 / 20 | Regular | −0.15px | Uso para JSON. |
| `RM_Body3 - cms` | Roboto Mono | 12 / 16 | Regular | −0.15px | Uso para JSON. |

### Jerarquía

```
h1 – H3   36–32   títulos de página del CMS
H4 – H7   24–18   títulos de sección y bloques
Body01–03 16–14   lectura: párrafos largos (01, 02) y cortos en componentes (03)
Label01–03 14–12  UI: campos, errores, ítems activos
RM_Body   16–12   JSON y código
```

- **Body02 vs Body03:** mismo tamaño (14); Body02 (LH 20) para párrafos de más de cuatro líneas, Body03 (LH 16) para textos cortos dentro de componentes.
- **Label02** no se usa para cuerpo de texto.

> La página *Typography* también lista Display 01–03 (68/80 Bold, 68/80 Light, 48/54) y nombres como "Headline New", que **no existen como estilos** en el archivo. Ver [`audit.md`](../audit.md).
