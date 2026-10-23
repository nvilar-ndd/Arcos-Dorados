---
feature: Cupones y resolución de identidad (McID)
estado: 🔍 En auditoría
figma: https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-8102
ultima_extraccion: 2026-10-23
owner_ux:
---

# Cupones y resolución de identidad (McID)

## 1. Contexto

Qué pasa cuando un cupón trae un McID y ya hay (o no) una sesión con token o soft login. Son **10 escenarios** de resolución de identidad; la regla de negocio que se repite es *priorizar la sesión vigente* salvo que el usuario elija cambiar de cuenta.

## 2. Matriz de escenarios

| Sesión actual | Cupón / token entrante | Resultado en Figma | Node |
|---|---|---|---|
| Token McID A | Token McID B | Cambia de cuenta y borra | `5086:8617` |
| Token McID A | Token McID B | Mantiene A | `5086:10495` |
| Token McID A | Token McID A | Mantiene cuenta | `5086:12368` |
| Token McID A | Cupón McID A | Suma puntos normalmente | `5086:29524` |
| Token McID A | Cupón McID B | Prioriza la sesión | `5086:35353` |
| Sin sesión | Cupón McID A | Soft login, suma puntos | `5086:43711` |
| Soft login A | Cupón McID A | Suma puntos a A | `5086:65110` |
| Soft login A | Cupón McID B | Prioriza la sesión de A | `5099:9030` |
| Cupón McID A + producto Loyalty | Validación de token, mismo usuario | Mantiene | `5101:27681` |
| Cupón McID A + producto Loyalty | Validación de token, otro usuario | Cambia | `5101:36679` |

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Transparencia | Cuando se prioriza la sesión vigente, ¿se le avisa al usuario que el cupón no suma a su cuenta? | Modelo mental · voz y tono *Problemas y recuperación* |
| Cambio de cuenta | Consecuencia (borrado de carrito) explícita antes de confirmar | K-TOQ-04 |
| Consistencia | ¿Las dos ramas "Diferente usuario" (cambia / mantiene) dependen de una elección del usuario o de una regla? | Documentar |

## 4. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-06](../../audits/001-flujos-kiosco.md#f-001-06) | Errores con una sola salida "Volver" y sin siguiente paso (identificación, cupones, FLEX, ticket no impreso) | 🟠 P1 | Pendiente |
| [F-001-15](../../audits/001-flujos-kiosco.md#f-001-15) | Cupón: dos "Volver" en la misma pantalla y CTA de footer redundante | 🟡 P2 | Pendiente |
| [F-001-16](../../audits/001-flujos-kiosco.md#f-001-16) | Typos en copy final: "pedidoo", "diponible" | 🟡 P2 | Pendiente |
