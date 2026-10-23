---
feature: Loyalty — MiMcDonald's, canje y puntos
estado: 🧭 Relevado
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

Ninguno todavía.
