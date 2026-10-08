# Dashboard — Componentes core

> **Fuente de la verdad:** [DashBoard Foundation › Components](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=106-1103) · **Extraído vía Figma MCP:** 2026-10-08.

Un documento por familia de componentes, con la estructura de handoff del proyecto:

1. **Propósito y origen**
2. **Anatomía y design tokens** (nombres de variable de Figma; en código `--db-<grupo>-<nombre>`, p. ej. `layer/02` → `--db-layer-02`)
3. **Variantes y estados interactivos**
4. **Responsive** (desktop ≥ 768 px con mouse/teclado; mobile < 768 px touch)
5. **Accesibilidad** (WCAG 2.1 AA)

Lo que dice Figma se cita como tal. Lo que no está en Figma y se propone acá (estados faltantes, roles ARIA, comportamiento responsive no documentado) queda marcado como propuesta y se discute en [`audit.md`](../audit.md#componentes).

Los componentes de la estructura de la app (Header, Left panel, SubPanelLeft) están en [`../structure/`](../structure/README.md).

## Índice

| Componente | Documento | Figma | Descripción en Figma |
|---|---|---|---|
| Button | [button.md](./button.md) | [4298:13512](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13512) | Falta · hay reglas de comportamiento |
| FAB (icon button) | [fab.md](./fab.md) | [3124:6304](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6304) | Falta |
| Text field / Text area | [text-field.md](./text-field.md) | [857:22444](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=857-22444) | Falta |
| Dropdown | [dropdown.md](./dropdown.md) | [3124:6302](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6302) | Falta |
| Toggle | [toggle.md](./toggle.md) | [3124:6300](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6300) | ✅ propósito + anatomía |
| Checkbox | [checkbox.md](./checkbox.md) | [4298:13515](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13515) | ✅ propósito |
| Radio button | [radio-button.md](./radio-button.md) | [5644:4541](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=5644-4541) | ✅ propósito |
| Date picker | [date-picker.md](./date-picker.md) | [4298:13516](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13516) | Falta |
| Calendar (reservas) | [calendar.md](./calendar.md) | [4298:13517](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13517) | Falta · ✅ estados de reserva |
| File uploader | [file-uploader.md](./file-uploader.md) | [3271:24198](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3271-24198) | Falta |
| Tabs / Segmented button | [tabs.md](./tabs.md) | [797:4187](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=797-4187) | Falta |
| Accordion | [accordion.md](./accordion.md) | [4298:13511](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13511) | Falta |
| Pagination | [pagination.md](./pagination.md) | [787:27330](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=787-27330) | Falta |
| Link | [link.md](./link.md) | [847:3503](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=847-3503) | Falta |
| Tag | [tag.md](./tag.md) | [857:22446](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=857-22446) | Falta · regla de Tag-operations |
| Tooltip | [tooltip.md](./tooltip.md) | [2713:5222](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=2713-5222) | ✅ |
| Notification | [notification.md](./notification.md) | [6095:4568](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6095-4568) | Falta · ✅ comportamiento y CTA |
| Modal | [modal.md](./modal.md) | [3124:6301](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6301) | Falta · ✅ tamaños |
| Progress (bar, spinner, stepper) | [progress.md](./progress.md) | [2635:5413](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=2635-5413) · [2816:7588](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=2816-7588) | Falta |
| Hr (divisor) | [divider.md](./divider.md) | [3124:6303](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=3124-6303) | ✅ |
| Scroll | [scroll.md](./scroll.md) | [5700:4423](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=5700-4423) | ✅ |
| Images and embeds | [image.md](./image.md) | [6453:9189](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6453-9189) | ✅ |
| Carousel | [carousel.md](./carousel.md) | [6518:4514](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6518-4514) | ✅ (genérica) |
| Card | [card.md](./card.md) | [4688:5247](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4688-5247) | Falta · ✅ guías por tipo |
| Card List | [card-list.md](./card-list.md) | [4298:13547](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4298-13547) | ✅ |
| Selectable Card | [selectable-card.md](./selectable-card.md) | [6603:5033](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=6603-5033) | ✅ completa |
| Data table — Read-only | [data-table.md](./data-table.md) | [671:25687](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=671-25687) | ✅ |

**Fuera de alcance:** `Utilidades` (componentes internos de documentación), los componentes marcados "No se puede usar!" y el frame *Componentes pendientes!!!!* (trabajo en curso: grupo de cards, text field y card de resumen). El frame *Modo dark* sólo contiene una prueba de `Notification+ProgresBar`.

## Estado general

- **27 familias** documentadas; **17** tienen "Descripción: Falta agregar" en Figma ([D-C01](../audit.md#d-c01--descripciones-faltantes)).
- Todos usan la tipografía `* - cms` y tokens semánticos del Dashboard, con excepciones: radios enlazados a `spacing/*` ([D-C02](../audit.md#d-c02--radios-enlazados-a-spacing)), primitivos enlazados directo ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo)), hex sueltos ([D-C04](../audit.md#d-c04--colores-sin-variable)) y variables de otra librería ([D-C05](../audit.md#d-c05--variables-de-otra-librería)).
- El foco de teclado es el estado más débil del sistema ([D-C06](../audit.md#d-c06--foco-visible)).

## Código

Todos los componentes están desarrollados en [`Dashboard/ui`](../ui/README.md) (Vue 3 + TypeScript strict + Tailwind alimentado por los tokens `--db-*`) y se previsualizan en el Storybook del Dashboard: cada página de esta carpeta muestra su vista previa interactiva arriba del documento.

El visual replica Figma. Lo único agregado es accesibilidad que no cambia el diseño: HTML semántico, teclado, ARIA y el anillo de foco `db-focus` (propuesta [D-C06](../audit.md#d-c06--foco-visible)). Los hallazgos del audit **no** se corrigen en código hasta que se aprueben en Figma.

iOS (SwiftUI) y Android (Compose) quedan para cuando estos componentes se usen fuera del Dashboard web.
