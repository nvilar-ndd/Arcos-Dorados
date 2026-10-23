---
feature: Home, Login, Idiomas y Métodos de retiro
estado: 🧭 Relevado
figma: https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/-ADK--Login
ultima_extraccion: 2026-10-23
owner_ux:
---

# Home, Login, Idiomas y Métodos de retiro

## 1. Contexto

Entrada al kiosco: Attract → idioma → identificación opcional con **token / QR** desde la App → método de retiro → Home. Cubre además la gestión de sesión en un dispositivo compartido: inactividad, cambio de cuenta, log out con y sin carrito, y errores de identificación.

## 2. Flujos relevados

Ver inventario con node IDs en [`mapa-de-flujos.md § 1`](../../docs/mapa-de-flujos.md#1--adk-login--cjxvzun17o3sgykfiuxskm): 12 flujos en *Nuevo Login (con Token)* y 4 variantes de Home (logueado / no, con / sin Loyalty, con / sin carrito).

```mermaid
flowchart LR
  AT[Attract] --> ID[Seleccionar idioma]
  ID --> CI[Cómo iniciar sesión]
  CI -->|QR / token| LD[Loader] --> BV[Bienvenida] --> MR
  CI -->|Sin identificarse| MR[Método de retiro]
  MR --> H[Home]
  H -. inactividad .-> UI[User inactivo]
  UI -->|Otro usuario| CC[Cambiar de cuenta] -->|borra carrito| AT
```

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Inactividad | Tiempo, cuenta regresiva y qué se borra | K-SES-01 · K-SES-02 |
| Cambio de cuenta | ¿El usuario entiende que pierde el carrito antes de confirmar? | K-TOQ-04 · voz y tono *Confirmaciones* |
| Modales de error (`identificationError`, `identificationUpgradingError`, `unauthorized`) | Acción primaria y salida clara | K-DEC-03 · K-LEG-07 |
| Footer V2 con accesibilidad | Comportamiento del modo accesible en Attract y Home | K-ALC-02 · K-ALC-04 |
| Gobernanza | El archivo no tiene páginas READY / PENDIENTES (señal S-08) | — |

## 4. Hallazgos abiertos

Ninguno todavía. Ver agenda en [`audits/`](../../audits/README.md).
