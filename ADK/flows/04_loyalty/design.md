---
feature: Loyalty — MiMcDonald's, canje y puntos
estado: 🔍 En auditoría
figma: https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-95346
ultima_extraccion: 2026-10-23
owner_ux:
---

# Loyalty — MiMcDonald's, canje y puntos

## 1. Contexto

Sección MiMcDonald's para usuario identificado y no identificado, canje de productos con puntos (sólo Loyalty o mezclado con otros productos) y visualización de puntos en el carrito. El canje exige validar identidad con **OTP** (ver [`09_otp`](../09_otp/design.md)) y se cruza con la inactividad del login.

## 2. Flujos relevados

[`mapa-de-flujos.md § Loyalty`](../../docs/mapa-de-flujos.md#-loyalty--497295346) y, en el archivo de Carrito, *Canje · sólo productos Loyalty* (`171:9935`).

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| No identificado | ¿Cuál es la llamada a identificarse y dónde está? | K-ALC-01 · K-DEC-03 |
| Puntos | Gradientes Loyalty sobre texto: contraste | K-LEG-03 |
| Canje mixto | ¿Se distingue en el carrito qué se paga con puntos y qué con dinero? | Similitud · Región común |
| Privacidad | Saldo de puntos visible para quien está detrás en la fila | K-SES-03 |

## 4. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-03](../../audits/001-flujos-kiosco.md#f-001-03) | Controles de 40 px en acciones del flujo principal (personalizar, seleccionar, cantidad, factura, quitar descuento) | 🟠 P1 | Pendiente |
| [F-001-07](../../audits/001-flujos-kiosco.md#f-001-07) | Texto legal de EE. UU. ("2,000 calories a day…") en el footer de Loyalty y del checkout de Cross Selling | 🟠 P1 | Pendiente |
| [F-001-14](../../audits/001-flujos-kiosco.md#f-001-14) | Nombre y puntos del usuario visibles para la fila | 🟡 P2 | Pendiente |
