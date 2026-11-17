---
modulo: Pedidos — consulta y gestión
estado: 🧭 Relevado
contexto: Left panel
figma: https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/
ultima_extraccion: 2026-11-17
owner_ux:
owner_producto:
---

# Pedidos — consulta y gestión

> Ficha armada desde la [arquitectura de la información](../../../Archway/Dashboard/structure/information-architecture.md) (v-03/11/26) y el relevamiento de Figma del 2026-11-17 (inventario completo en [`mapa-de-flujos.md`](../../docs/mapa-de-flujos.md)). Las secciones vacías se completan con [`templates/design.md`](../../templates/design.md) a medida que se audita cada flujo.

## 1. Contexto y objetivo

- **Qué gobierna:** Consulta de pedidos de todos los canales; cancelaciones y reembolsos.
- **Quién lo usa:** *pendiente*
- **Riesgo operativo:** ver [mapa de módulos](../../docs/mapa-de-modulos.md)
- **Métrica de éxito:** *pendiente*

## 2. Contexto en la IA

Listado de lectura y análisis → **tabla read-only** por defecto. Country › Cancellations define motivos, cancelaciones manuales/automáticas y refunds (en el componente *Refunds* figura como primer nivel).

## 3. Flujo en Figma

### [[DashBoard] Orders](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/) · `vFtg6osMX8fx6ebK08NKSj` · In Progress · editado 2026-11-04

| Página | Flujos / secciones |
|---|---|
| [Listado](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12015-20) | [Listado de pedidos](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12040-6415) |
| [Detalle](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12601-6162) | [Detalle de pedido v3](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12601-6163) · [Historial del pedido](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12610-11738) · [Historial de pago](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12610-12437) · [Historial de la devolución](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12610-13272) · [Log detalle](https://www.figma.com/design/vFtg6osMX8fx6ebK08NKSj/?node-id=12613-10125) |

### Lo que se ve en el archivo

- **Listado** de pedidos con filtros y **Detalle v3** con modales de historial (pedido, pago, devolución) y log de detalle con preview.
- Conecta con Countries › Cancelaciones y Refunds.

## 4. Puntos a definir

- Filtros persistentes y búsqueda por ID (BO-NAV-03, BO-DEN-04).
- Cancelar o reembolsar = acción destructiva con confirmación (BO-SEG-01).

## 5. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| — | — | — | — |
