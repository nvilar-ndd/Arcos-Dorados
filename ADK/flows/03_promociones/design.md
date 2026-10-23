---
feature: Promociones a elección
estado: 🔍 En auditoría
figma: https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4778-143840
ultima_extraccion: 2026-10-23
owner_ux:
---

# Promociones a elección

## 1. Contexto

Promos donde el usuario elige componentes dentro de un bundle: **2 Sundae a elección** (9 pantallas) y **Combo + McFlurry a elección** (10 pantallas, termina en *Añadir al carrito*).

## 2. Flujos relevados

[`mapa-de-flujos.md § Flujos de Promociones`](../../docs/mapa-de-flujos.md#-flujos-de-promociones--4778143840).

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Progreso | ¿Queda claro cuántas elecciones faltan ("1 de 2")? | K-DEC-05 |
| Precio | ¿El total de la promo se ve en todo momento? | K-DEC-06 |
| Copy promocional | Contexto *Promociones y beneficios* del manual | K-SIS-05 |

## 4. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-03](../../audits/001-flujos-kiosco.md#f-001-03) | Controles de 40 px en acciones del flujo principal (personalizar, seleccionar, cantidad, factura, quitar descuento) | 🟠 P1 | Pendiente |
| [F-001-12](../../audits/001-flujos-kiosco.md#f-001-12) | Inconsistencias de componentes entre archivos (variantes de footer, dos `nav.menu-button`, Chips vs Tag Pill, componentes locales, Inter) | 🟡 P2 | Pendiente |
