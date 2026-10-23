---
feature: Errores de pago, impresión e integración
estado: 🔍 En auditoría
figma: https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=70-11157
ultima_extraccion: 2026-10-23
owner_ux:
---

# Errores de pago, impresión e integración

## 1. Contexto

Pantallas `ADK_error` a pantalla completa (ícono *Warning* 166 px + título + bajada + acciones) para:

| Error | Salida | Node |
|---|---|---|
| Pago con tarjeta rechazado (recuperable) | Intentar de nuevo / Cancelar pedido | `71:11303` |
| Medio de pago no disponible | Pagar en mostrador / Cancelar pedido | `71:11335` |
| Impresora no disponible | Pedido confirmado igual, con número en pantalla | `71:11373` |
| FLEX · productos sin stock | Revisar pedido | `4088:109512` (archivo Productos) |
| FLEX · no se pudo completar | Reintentar | `4088:110325` (archivo Productos) |

## 2. Mapeo de códigos del procesador

Documentado en el canvas de Figma junto a cada error. Hay que llevarlo a una tabla para desarrollo:

| Grupo | Ejemplos de códigos | Pantalla |
|---|---|---|
| Rechazo recuperable | `05_DENEGADA` · `14_TARJETA_INVALIDA` · `51_DENEGADA_FI` · `54_TARJETA_VENCIDA` · `X1_FONDOS_INSUFICIENTES` | Intentar de nuevo |
| Falla de sistema o comunicación | `96_ERROR_EN_SISTEMA` · `CE_ERROR_DE_COMUNICACION` · `NA_SISTEMA_NO_DISPONIBLE` · `OV_OTP_VENCIDO` | Pagar en mostrador |

> Tarea: transcribir la lista completa de códigos desde Figma a este doc (fuente: textos `71:11330` y `71:11369`).

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Jerarquía | Pago: ✅ *Reintentar* primario + *Volver*. FLEX y ticket no impreso: una sola salida o ninguna (F-001-06) | K-DEC-03 · Von Restorff |
| Alcance | Acciones en `y ≈ 984–1104`, fuera de la Safe Area | K-ALC-02 |
| Copy | Títulos de 2 líneas a 64 px de alto de línea; ¿la causa y el siguiente paso están claros? | *Problemas y recuperación* |
| Ticket no impreso | El número de pedido es la única referencia: ¿tamaño y contraste suficientes para fotografiarlo? | K-LEG-03 |

## 4. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-06](../../audits/001-flujos-kiosco.md#f-001-06) | Errores con una sola salida "Volver" y sin siguiente paso (identificación, cupones, FLEX, ticket no impreso) | 🟠 P1 | Pendiente |
