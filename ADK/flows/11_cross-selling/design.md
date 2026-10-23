---
feature: Cross Selling y NBO (Next Best Offer)
estado: 🔍 En auditoría — sin estado en Figma (debajo del separador)
figma: https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-29955
ultima_extraccion: 2026-10-23
owner_ux:
---

# Cross Selling y NBO (Next Best Offer)

## 1. Contexto

Sugerencia de productos adicionales en dos momentos: desde la Home y **post carrito**, antes del checkout. La página incluye 6 exploraciones de *¿Cómo mostramos los productos?* (`71:37445`), así que la solución visual no está cerrada.

## 2. Flujos relevados

[`mapa-de-flujos.md § Cross Selling / NBO`](../../docs/mapa-de-flujos.md#cross-selling--nbo--7129955).

## 3. Criterios para elegir entre las 6 exploraciones

| Criterio | Umbral | Regla |
|---|---|---|
| Descartar | 1 toque, botón ≥ 80 px en el tercio inferior | K-DEC-04 · K-TOQ-02 · K-ALC-01 |
| Cantidad de sugerencias | ≤ 4 | K-DEC-01 · Hick |
| Frecuencia | Una vez por pedido | K-DEC-04 · Peak-End |
| Agregar | Sin salir del flujo (no navega a la categoría) | Flow |
| Lienzo | 1080 × 1920 exacto (hoy 1083 × 1925, señal S-07) | K-SIS-01 |

## 4. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-07](../../audits/001-flujos-kiosco.md#f-001-07) | Texto legal de EE. UU. ("2,000 calories a day…") en el footer de Loyalty y del checkout de Cross Selling | 🟠 P1 | Pendiente |
| [F-001-17](../../audits/001-flujos-kiosco.md#f-001-17) | Frames fuera de lienzo y pantallas sin componentes | ⚪ P3 | Pendiente |
