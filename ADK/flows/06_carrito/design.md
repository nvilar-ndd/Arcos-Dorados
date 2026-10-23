---
feature: Carrito
estado: 🔍 En auditoría
figma: https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=1-293
ultima_extraccion: 2026-10-23
owner_ux:
---

# Carrito

## 1. Contexto

Revisión del pedido antes del checkout: detalle de McCombos (hasta 3 ítems), productos simples, eliminar, vaciar, cross selling post carrito (NBO) y canje Loyalty. Cada ítem es un `Producto Carrito` de 888 × 184 en una lista con scroll.

## 2. Flujos relevados

[`mapa-de-flujos.md § Carrito`](../../docs/mapa-de-flujos.md#-carrito--1293).

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Vaciar carrito | Confirmación y distancia respecto de "Pagar" | K-TOQ-04 |
| Eliminar ítem | ¿Hay deshacer? ¿El target cubre la fila o sólo el ícono? | K-TOQ-05 · Postel |
| Quantity | Botones +/− dentro de 40 px de alto (Audit DS **A-C04**) | K-TOQ-01 |
| Total | Visible y con contraste 7:1 | K-DEC-06 · K-LEG-03 |
| Scroll | Thumb vs track 1.54:1 (Audit DS **A-A03**) | K-LEG-04 |

## 4. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-03](../../audits/001-flujos-kiosco.md#f-001-03) | Controles de 40 px en acciones del flujo principal (personalizar, seleccionar, cantidad, factura, quitar descuento) | 🟠 P1 | Pendiente |
| [F-001-04](../../audits/001-flujos-kiosco.md#f-001-04) | "Vaciar carrito" pegado a la acción principal en el footer de Home, Detalle y Tipo de pago | 🟠 P1 | Pendiente |
| [F-001-18](../../audits/001-flujos-kiosco.md#f-001-18) | Datos de ejemplo inconsistentes en el carrito (el total no suma) | ⚪ P3 | Pendiente |
