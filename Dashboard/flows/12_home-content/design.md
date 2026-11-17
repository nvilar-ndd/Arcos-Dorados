---
modulo: Home Content — cards, banners, módulos, product list y pop-up
estado: 🧭 Relevado
contexto: Left panel
figma: https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/
ultima_extraccion: 2026-11-17
owner_ux:
owner_producto:
---

# Home Content — cards, banners, módulos, product list y pop-up

> Ficha armada desde la [arquitectura de la información](../../../Archway/Dashboard/structure/information-architecture.md) (v-03/11/26) y el relevamiento de Figma del 2026-11-17 (inventario completo en [`mapa-de-flujos.md`](../../docs/mapa-de-flujos.md)). Las secciones vacías se completan con [`templates/design.md`](../../templates/design.md) a medida que se audita cada flujo.

## 1. Contexto y objetivo

- **Qué gobierna:** Contenido de la home de la App: cards, banners, módulos, listas de productos y pop-ups.
- **Quién lo usa:** *pendiente*
- **Riesgo operativo:** ver [mapa de módulos](../../docs/mapa-de-modulos.md)
- **Métrica de éxito:** *pendiente*

## 2. Contexto en la IA

Subcategorías v-03/11/26: Cards · Banners · Módulos · Product List · **Pop-up in app** (nuevo). Sale *Rate*. Relacionado con la iniciativa Nueva Home.

## 3. Flujo en Figma

### [Home content (new)](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/) · `pjrqXNbG3C1jGMqAIpyX52` · In Progress · editado 2026-11-13

| Página | Flujos / secciones |
|---|---|
| [⮑ Card](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=0-1) | [Listado de cards](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=2003-8461) · [Crear (paso a paso: tipo, info general, disponibilidad, segmentación, producto, diseño, revisión)](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=2003-6091) · [Revisión final](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7520-100355) |
| [⮑ Banners](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7265-33352) | [Banners publicados](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7318-129287) · [Crear](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7266-37218) · [Configuración](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7287-159314) · [Diseño del banner](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7326-28323) · [Tipo marketing / URL de campaña](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7266-46230) · [Revisión final](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7266-39015) |
| [⮑ Listas de productos](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7766-50147) | [Listado](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7896-1823) · [Variante](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7899-9959) |
| [⮑ Módulos](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7834-15185) | [Con contenido](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7834-15240) · [Sin contenido](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7958-4488) · [Desplegado](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=7834-15396) |
| [⮑ Pop-up in App](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8684-39170) | [Listado / estados / prioridades](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8927-35875) · [Crear (sin publicados)](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8927-35867) · [Límite de 5 publicados](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8927-35822) · [Desactivar y liberar prioridad](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8927-35833) · [Editar activo](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8927-35819) · [Errores](https://www.figma.com/design/pjrqXNbG3C1jGMqAIpyX52/?node-id=8927-35785) |

### Lo que se ve en el archivo

- **Card** y **Banners** se crean en paso a paso: tipo → información general → disponibilidad → segmentación → producto → diseño → revisión final.
- **Pop-up in App:** listado con prioridades, límite de 5 publicados, liberar prioridad al desactivar.
- Las páginas Card y Banners no usan secciones: son frames sueltos con `Utilidades_TitleFlow`; la página Card también tiene frames de Misiones y Promociones. Difícil de recorrer y de auditar.

## 4. Puntos a definir

- Live preview obligatorio (BO-PRE-01).
- Programación por vigencia y país (BO-EST-01, BO-SEG-06).

## 5. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| — | — | — | — |
