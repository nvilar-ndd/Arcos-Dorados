# Top Bar

> **Fuente de la verdad:** [Design Resources CORE › Top Bar](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5230-4480) · `Top Bar` (Android, 2) y `Top Bar · iOS` ([5230:4489](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5230-4489), Toolbar - Top nativa, 2).
> **Origen:** ArchWay · Nivel 1 Core (Android) / Nivel 0 Nativo (iOS) · **Extraído vía Figma MCP:** 2026-11-16 · Legacy: *Navigation Bar* (back redondo, título grande / chico).

## Propósito

Barra superior de las pantallas: volver o cerrar, título de la pantalla y una acción opcional. En **Android** es custom (Core); en **iOS** es la *Toolbar - Top* nativa (estilo Default) con colores de Archway: el Liquid Glass lo pone el sistema.

**No usar** en las pantallas principales de las pestañas (Inicio, Cupones, MiM, Mi Cuenta).

## ¿En qué pantallas va?

> Criterio: si el contenido ya muestra, grande y visible, dónde está el usuario, la barra va sin título.

| Tipo de pantalla | Ejemplos | Top Bar |
|---|---|---|
| Principales de las pestañas | Inicio · Cupones · MiM · Mi Cuenta | Sin Top Bar |
| Ajustes y cuenta | Inicio de sesión y seguridad · Correo · Datos personales | Back + título |
| Listados | Restaurantes · Mis pedidos · Direcciones · Métodos de pago · FAQ | Back + título |
| Pasos de un flujo | Carrito · Pago · Elegir restaurante | Back + título |
| Detalle con contenido protagonista | Producto · Cupón · Promo | Back, sin título |
| Confirmaciones y un solo paso | Pedido confirmado · Cupón obtenido · Modales a pantalla completa | Close (X), con o sin título |

**Back (‹):** la pantalla entra desde el costado; vuelve al paso anterior. **Close (X):** la pantalla sube desde abajo (modal a pantalla completa); se cierra y el usuario queda donde estaba. *Pedido confirmado* usa Close: cierra el flujo y vuelve al inicio.

## Anatomía y tokens

| Parte | Android (custom) | iOS (nativa) |
|---|---|---|
| Leading | [Icon Only](./icon-only-fab.md) Ghost Medium: chevron o X | Back o X del sistema |
| Title | Una línea, `Heading/Heading Small Bold` (18/24), `Text/primary` · ocultable | Título de la barra (Default) |
| Trailing | "Ayuda": [Button](./button.md) Secondary Small Round (excepción a "el Secondary no va solo") | Botón de texto "Ayuda" del sistema |

Android: alto 64 · padding 8 vertical, 16 lateral · gap 8 · ancho Fill (mín. 360) · fondo `Surface/default`. iOS: texto `Text/primary`, íconos `Icon/primary`.

## Propiedades

`Leading` (Back · Close) · `Title` + `Title text` · `Trailing Icon`.

## Accesibilidad

- **Aunque el título no se vea, la pantalla tiene título** para el lector (VoiceOver / TalkBack lo anuncia al entrar).
- `accessibilityLabel`: "Volver", "Cerrar", "Ayuda". El título es `heading` / `accessibilityTraits = .header`.
