# ArchWay — Componentes

> **Fuente de la verdad:** [Design Resources CORE – Archway (Figma)](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-) · librería publicada **"Design Resources CORE [Archway]"** · **Extraído vía Figma MCP:** 2026-11-16.
>
> Las propuestas de mejora viven en [`audit.md`](./audit.md) y no se aplican hasta su aprobación. Los componentes consumen las [Foundations](../README.md#foundations) de ArchWay.

Un documento por componente con la estructura de handoff del proyecto: **propósito y origen · anatomía y tokens · variantes y estados · plataformas · accesibilidad**. Lo que dice Figma se cita como tal; lo que se propone acá queda marcado y se discute en el audit.

## La pirámide

Criterio del archivo (página *Nuestras bases*): **¿El componente funciona igual en cualquier pantalla, sin saber de qué se trata?** Sí → Core. Si necesita saber del negocio (pedido, producto, restaurante, Loyalty) → Específico.

| Nivel | Qué son | Quién los crea | Ejemplos |
|---|---|---|---|
| **0 · Nativos** (sólo iOS) | Los pone el sistema operativo; se usan tal cual vienen en el kit de Apple (iOS 27), con Liquid Glass | Apple | Navigation Bar, Tab Bar, Sheets, Alert, ActionSheet, Switch, DatePicker |
| **1 · Core** | Base, agnósticos y reutilizables. Sin contexto de negocio | Sólo Design Ops | Button, Chip, Tag, Input, Switch… |
| **2 · Compuestos** | Armados con varios Core. Genéricos → Core; con negocio → Específicos | Design Ops / squads | Card, List Item, Tile · Product Card |
| **3 · Específicos 💠** | Armados **con instancias de Core**, saben del negocio y se reutilizan en la app | El squad que los necesita, aprobados por Design Ops | Header, Gamification Bar, Card 💠 Voucher |

En **Android no hay nivel 0**: todo es custom y vive en Core.

### Reglas

1. Un Específico se arma con instancias de Core, **nunca de cero**.
2. Si necesita otra estructura **no se desacopla**: se le pide a Design Ops una variante nueva del Core.
3. Si se repite en dos o más lugares, se evalúa pasarlo a Core.
4. Lo que aparece en una sola pantalla **no es un Específico**: queda en el archivo de esa pantalla.
5. Nombre de los Específicos: `[Core en el que se basa] 💠 [Nombre]` (p. ej. `Tile 💠 Category`, `Card 💠 Voucher`, `Tag 💠 EP`).

### Forma: Round vs Square Circle

| Regla general | Forma |
|---|---|
| Acción táctil flotante o aislada | **Round** (píldora / círculo) |
| Contenedor de información o contenido editable | **Square Circle** (radio + squircle 60 %) |

| Componente | Forma | Por qué |
|---|---|---|
| Chip | Round | Acción de filtro, aislada |
| FAB / Icon Only | Circle | Flota sobre el contenido, foco único |
| Input | Square Circle | Excepción: el pill come espacio útil de escritura |
| Card / Modal / Bottom Sheet | Square Circle | Contenedor de información |
| Button dentro de un flujo (form, checkout, lista) | Square Circle | Convive con otros elementos square |
| Button flotante o promocional (login overlay, banner, CTA suelto) | Round | Busca destacarse; mismo lenguaje que FAB y Liquid Glass |

### Liquid Glass en iOS *(regla "por cerrar" en Figma)*

**Todo control que flota sobre el contenido es Liquid Glass**; el contenido es libre y lleva la identidad de marca completa.

| ¿Flota sobre el contenido? | En iOS | Ejemplos |
|---|---|---|
| Sí | Liquid Glass (nativo o custom con el material) | Tab Bar, Navigation Bar, FAB, Search flotante, chips sobre el mapa, CTA de login, CTA "Agregar" |
| No | Custom con la marca (Speedee, colores, squircle) | Cards, Product Card, Banners, Tags, listas, categorías |

Fuente: Apple, *Adopting Liquid Glass*, y el equipo de iOS.

## Estado

Replica la tabla *Estado de componentes* de Figma (22/10/2026), corregida con lo publicado al 16/11 ([C-S02](./audit.md#c-s02--estado-de-componentes-desalineado)).

### Core

| Componente | Documento | Origen en legacy | Estado |
|---|---|---|---|
| Button / Ghost | [button.md](./core/button.md) | Buttons | ✅ Existe |
| Icon Only · FAB | [icon-only-fab.md](./core/icon-only-fab.md) | FABs, Small Floating | ✅ Existe |
| Chip | [chip.md](./core/chip.md) | Tag clicable | ✅ Existe |
| Tag | [tag.md](./core/tag.md) | Tag | ✅ Existe |
| Badge | [badge.md](./core/badge.md) | Badge, Badge cantidades | ✅ Existe |
| Input: Text Field / Text Area / Password / Select / PinCode | [input.md](./core/input.md) | Form Field, Text Area, Form Password, Select Field, PinCode | ✅ Existe |
| Search | [search.md](./core/search.md) | Search Bar 2.0 · Liquid Glass en iOS | ✅ Existe |
| Checkbox / Radio | [checkbox-radio.md](./core/checkbox-radio.md) | Legal Checkbox, Circle selector | ✅ Existe |
| Switch (Android) | [switch.md](./core/switch.md) | Toggle / android | ✅ Existe |
| Divider | [divider.md](./core/divider.md) | — | ✅ Existe |
| List Item | [list-item.md](./core/list-item.md) | List Item (Menu, Toggle, Card, FAQs…) | ✅ Existe |
| Card | [card.md](./core/card.md) | Card | ✅ Existe (Figma todavía dice "Falta") |
| Tile | [tile.md](./core/tile.md) | Base de Categorías | ✅ Existe |
| Toast | [toast.md](./core/toast.md) | Toast / General | ✅ Existe |
| Tooltip | [tooltip.md](./core/tooltip.md) | Tooltips | ✅ Existe |
| Top Bar (Android) | [top-bar.md](./core/top-bar.md) | Navigation Bar | ✅ Existe |
| Skeleton | [skeleton.md](./core/skeleton.md) | Skeleton | ✅ Existe |
| Progress · Pagination · Stepper | [progress.md](./core/progress.md) | Loading & progress | ✅ Existe |
| NavBar (Android) | [navbar.md](./core/navbar.md) | Bottom Bar | ✅ Existe |
| Avatar / Flag | — | Round Flag, Flag tag pill | ⬜ Falta |
| Modal / Bottom Sheet | — | Modal (Floating, Fullwidth, alert…) · en iOS la presentación es nativa | ⬜ Falta |
| Tabs | — | Tabs | ⬜ Falta |
| Quantity Stepper | — | Quantity Stepper | ⬜ Falta |
| Rating | — | Rating | ⬜ Falta |
| File Uploader | — | File Uploader | ⬜ Falta |
| Masked Text | — | Masked Text (oculta datos sensibles) | ⬜ Falta |
| Tooltip Walkthrough | — | Tooltip / Walkthrough | ⬜ Falta |
| DatePicker (Android) | — | Date & time pickers | ⬜ Falta |
| Alert / Dialog (Android) | — | Modal_alert | ⬜ Falta |

Mientras un componente no existe en ArchWay, se usa el de Legacy.

### Específicos 💠

| Componente | Documento | Origen en legacy | Estado |
|---|---|---|---|
| Tile 💠 Category | [tile.md](./core/tile.md) | Categorías | ✅ Existe |
| Gamification Bar | [gamification-bar.md](./especificos/gamification-bar.md) | Gamification Bar | ✅ Existe |
| Loyalty home card | [loyalty-home-card.md](./especificos/loyalty-home-card.md) | — | ✅ Existe |
| Card 💠 Voucher · Card / Setting | [card-voucher-setting.md](./especificos/card-voucher-setting.md) | Card / Voucher | ✅ Existe |
| Header | [header.md](./especificos/header.md) | Cabecera | 🟡 Parcial |
| Banner | [banner.md](./especificos/banner.md) | Banners | 🟡 Parcial |
| Product Card (Carrousel cards) | [product-cards.md](./especificos/product-cards.md) | Square Products | 🟡 Parcial |
| Dialog 💠 Pop-up dashboard | [dialog-popup.md](./especificos/dialog-popup.md) | — | ✅ Existe (no figura en la tabla de Figma) |
| Tile 💠 Misiones | [tile-misiones.md](./especificos/tile-misiones.md) | — | ✅ Existe (no figura en la tabla de Figma) |
| Loading & progress 💠 | [progress-especificos.md](./especificos/progress-especificos.md) | — | ✅ Existe (no figura en la tabla de Figma) |
| Pin 💠 | [pin.md](./especificos/pin.md) | — | ✅ Existe (no figura en la tabla de Figma) |
| Button 💠 CTA login · Button 💠 CTA Agregar | — | Banner flotante registro · Bottom Sticky Carrito (Liquid Glass) | ⬜ Falta |
| Tag 💠 EP · Tag 💠 Loyalty | — | Etiquetas de persuasión, Tag Loyalty | ⬜ Falta |
| Chip 💠 Filtros | — | Gestor de filtros | ⬜ Falta |
| Card 💠 Restaurant · Cupón · Mostrador · Métodos de pago | — | Cards restaurantes, Card checkout, Card cupón, Card Dos Mostradores, Square Payments | ⬜ Falta |
| List Item 💠 Address · Pickup · Product | — | Direction / Address list, Pickup method list, List of products | ⬜ Falta |
| Resumen, Estado, Detalle y Repetir pedido · Selector MOP / DLV | — | Costes, Timeline, Steppers, Product Avatar, Selector MOP / PickUp | ⬜ Falta |
| Alérgenos · Pedidos por voz · Controles de mapa · DatePicker 💠 Horarios · Modal 💠 Modales específicos | — | Alergen list, Pedidos por voz, Controles mapa, Day of week, QR Cupón / Pedí y retirá / Rating | ⬜ Falta |

### Nativos de iOS y helpers

| Componente | Qué es |
|---|---|
| Navigation Bar, Tab Bar, Sheet, Alert, ActionSheet, Switch, DatePicker | **Nativos iOS** (página *iOs*): instancias del kit de Apple, sin desacoplar ni modificar. En Figma: `_Tab Bar Button - iPhone`, `_Search - iPhone`, `Ios Toggle - Switch`, `Top Bar · iOS` |
| `Status bar custom` | **Sólo para diseño**: marca la zona superior (62) que el contenido no ocupa. No se implementa |
| `Medida`, `indicador de numero`, `Utiidades_Enlace del flujo` | Utilidades para anotar archivos de diseño |

## Próximo en Figma

*Design Resources* se va a separar en dos librerías: **Archway Core** y **Archway Específicos**. Cuando pase, este repo sigue la misma división (`core/` y `especificos/`).

## Código

Los componentes se desarrollan para **Web (Nuxt 4 + Vue 3 + TypeScript strict + Tailwind)**, **iOS (SwiftUI)** y **Android (Jetpack Compose)** consumiendo los tokens de [`tokens/archway.tokens.json`](../tokens/archway.tokens.json), **una vez aprobados estos docs**. Mientras tanto, el [Storybook](../storybook) muestra cada ficha con el componente de Figma embebido.

## Estructura

```
components/
├── README.md        ← este archivo: pirámide, reglas y estado
├── audit.md         ← hallazgos de componentes (C-*)
├── core/            ← 19 fichas Nivel 1–2
└── especificos/     ← 10 fichas 💠
```
