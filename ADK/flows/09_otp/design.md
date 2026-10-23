---
feature: Validación OTP para canje de puntos
estado: 🧭 Relevado
figma: https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=272-16440
ultima_extraccion: 2026-10-23
owner_ux:
---

# Validación OTP para canje de puntos

## 1. Contexto

Para usar puntos, el usuario confirma su identidad con un código de **4 dígitos** enviado por mail, SMS o WhatsApp. Tras varios intentos fallidos se bloquean los canjes por un tiempo (15 min en el ejemplo; variable `q_minutes` en las keys) y se aclara que los puntos siguen intactos.

## 2. Flujos relevados

[`mapa-de-flujos.md § OTP`](../../docs/mapa-de-flujos.md#-otp--27216440): mail (3 pasos + intentos incorrectos + canje confirmado), teléfono SMS y WhatsApp.

## 3. Medidas relevadas

| Elemento | Posición / tamaño | Regla en juego |
|---|---|---|
| Título + bajada | `y 344–544` | ✅ información arriba |
| Teclado numérico (`Input`) | 704 × 520 · `y 608–1128` | K-ALC-02 (fuera de Safe Area) |
| Acciones | 2 × 376 × 80 · `y 1224` | ✅ K-TOQ-02 · K-ALC-02 |

## 4. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Destino del código | ¿Mail y teléfono enmascarados en pantalla? | K-SES-03 |
| Reenvío | ¿Hay "reenviar código" con temporizador visible? | K-SES-04 · voz y tono *Esperas* |
| Bloqueo | Copy de "Protegimos tu cuenta": ¿ofrece alternativa (seguir sin puntos)? | K-DEC-03 · *Problemas y recuperación* |
| Canje confirmado | Una sola acción visible (la segunda está oculta) | ✅ K-DEC-03 |

## 5. Hallazgos abiertos

Ninguno todavía.
