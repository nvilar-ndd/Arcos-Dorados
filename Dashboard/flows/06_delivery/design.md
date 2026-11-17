---
modulo: Delivery — costes de envío y ETA (MOP / Delivery)
estado: 🧭 Relevado
contexto: Left panel
figma: https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/
ultima_extraccion: 2026-11-17
owner_ux:
owner_producto:
---

# Delivery — costes de envío y ETA (MOP / Delivery)

> Ficha armada desde la [arquitectura de la información](../../../Archway/Dashboard/structure/information-architecture.md) (v-03/11/26) y el relevamiento de Figma del 2026-11-17 (inventario completo en [`mapa-de-flujos.md`](../../docs/mapa-de-flujos.md)). Las secciones vacías se completan con [`templates/design.md`](../../templates/design.md) a medida que se audita cada flujo.

## 1. Contexto y objetivo

- **Qué gobierna:** Control y configuración operativa de Delivery y Mobile Order & Pay: costes de envío y tiempos estimados.
- **Quién lo usa:** *pendiente*
- **Riesgo operativo:** ver [mapa de módulos](../../docs/mapa-de-modulos.md)
- **Métrica de éxito:** *pendiente*

## 2. Contexto en la IA

Nuevo agrupador en v-03/11/26: *Coste de envío* (antes primer nivel) + *ETA* (nuevo). Salen *Fees* (Service Fee · Small Order Fee). Se cruza con Country › Services (Delivery Other Settings, Delivery Tips, PickUp, General Limits, Time).

## 3. Flujo en Figma

### [Delivery (Costes de envío)](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/) · `5pzsamjfXhKuKXYmaT1bMV` · In Progress · editado 2026-11-05

| Página | Flujos / secciones |
|---|---|
| [Costes de envío](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=1-4) | [Listado](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6627-43500) · [Coste distinto por distancia](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6003-9953) · [Envío gratis a partir de X](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6003-10783) · [Regla temporal](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6223-126102) · [Coste nocturno fin de semana](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6003-12696) · [Restaurantes con otras configuraciones](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6005-130526) · [Guardar en borrador](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6466-47890) · [Edición de borrador](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6005-99792) · [Nombre duplicado](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6147-31620) · [Rango de distancia solapado](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6147-43111) · [Errores de campos](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6003-13628) |
| [ETA](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6596-43319) | [UC-01 Primera activación](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-15338) · [UC-02 Añadir restaurantes](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-15584) · [UC-03 Quitar restaurantes](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-16261) · [UC-04 Ocultar ETA](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-17427) · [UC-08 Restaurante sin delivery propio](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-19853) · [UC-09 Seleccionar todos los filtrados](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-20338) · [UC-10 Descartar cambios](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6614-20972) · [EC-05 Salir sin guardar](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6615-24639) · [EC-06 Error al guardar](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6615-24759) · [CC-01 Guardar mientras aplica](https://www.figma.com/design/5pzsamjfXhKuKXYmaT1bMV/?node-id=6615-26561) |

### Lo que se ve en el archivo

- **Costes de envío** por reglas: por distancia, envío gratis desde un monto, regla temporal, nocturno de fin de semana; guardar en borrador; conflictos con otras configuraciones; nombre duplicado y rangos solapados.
- **ETA** documentado por casos de uso (`UC-*`), casos borde (`EC-*`) y concurrencia (`CC-*`): buena práctica para replicar en otros módulos.
- Change Log del 05/11: "Costes de envío ahora forma parte de Delivery".

## 4. Puntos a definir

- ¿Dónde quedan Service Fee y Small Order Fee?
- [Q-03](../../docs/preguntas-abiertas.md): panel vs. Country › Services.

## 5. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| — | — | — | — |
