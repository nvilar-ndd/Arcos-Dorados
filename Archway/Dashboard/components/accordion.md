# Accordion

> **Fuente de la verdad:** [Components › Accordion](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13511) · componente `Accordion item`.
> **Origen:** Dashboard DS · **Descripción en Figma:** "Falta agregar" · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

Mostrar y ocultar bloques de contenido secundario para acortar pantallas largas (secciones de configuración, FAQs, detalle de un paso).

## Anatomía y tokens

| Parte | Token |
|---|---|
| Ítem | 401 × 40 cerrado · vertical · gap `spacing/050` |
| Ícono izquierdo | opcional (`Show Icon left`), `icon/primary` |
| Título | `Label02 - cms`, `text/primary` |
| Chevron | `icon/primary`, rota al abrir |
| Contenido | `Body02 - cms` (`Show Accordion content`) |

Sólo tiene el estado *Desplegada* documentado: faltan hover, focus y disabled.

## Accesibilidad

- Encabezado como `<button aria-expanded aria-controls>` dentro de un heading (`<h3>`), o `<details>/<summary>` nativo.
- `Enter`/`Space` abre y cierra; el foco no se mueve al contenido.
- No esconder dentro de un acordeón información obligatoria para completar un formulario (Ley de Tesler: el sistema absorbe la complejidad, no el usuario).
