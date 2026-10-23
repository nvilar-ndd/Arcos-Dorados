---
feature: Cross Selling y NBO (Next Best Offer)
estado: 🔍 En auditoría
figma: https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-29955
ultima_extraccion: 2026-10-23
owner_ux:
---

# Cross Selling y NBO (Next Best Offer)

## 1. Contexto

Sugerencia de productos adicionales en dos momentos: desde la Home y **post carrito**, antes del checkout. La sección *¿Cómo mostramos los productos?* (`71:37445`) no son exploraciones: son los **estados de 1 a 6 sugerencias** del mismo componente. Con 1–3 productos el descarte queda en `y 960`; con 4–6, en `y 1288`.

## 2. Flujos relevados

[`mapa-de-flujos.md § Cross Selling / NBO`](../../docs/mapa-de-flujos.md#cross-selling--nbo--7129955).

## 3. Criterios para los estados de 1 a 6 sugerencias

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
| [F-001-19](../../audits/001-flujos-kiosco.md#f-001-19) | Cross Selling: la acción para descartar cambia de altura según la cantidad de sugerencias, que llega a 6 | 🟠 P1 | Pendiente |
| [F-001-07](../../audits/001-flujos-kiosco.md#f-001-07) | Texto legal de EE. UU. ("2,000 calories a day…") en el footer de Loyalty y del checkout de Cross Selling | 🟠 P1 | Pendiente |
| [F-001-17](../../audits/001-flujos-kiosco.md#f-001-17) | Frames fuera de lienzo y pantallas sin componentes | ⚪ P3 | Pendiente |
