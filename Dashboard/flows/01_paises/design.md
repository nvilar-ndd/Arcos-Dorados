---
modulo: Países — Country → Configuration
estado: 🧭 Relevado
contexto: Country
figma: https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/
ultima_extraccion: 2026-11-17
owner_ux:
owner_producto:
---

# Países — Country → Configuration

> Ficha armada desde la [arquitectura de la información](../../../Archway/Dashboard/structure/information-architecture.md) (v-03/11/26) y el relevamiento de Figma del 2026-11-17 (inventario completo en [`mapa-de-flujos.md`](../../docs/mapa-de-flujos.md)). Las secciones vacías se completan con [`templates/design.md`](../../templates/design.md) a medida que se audita cada flujo.

## 1. Contexto y objetivo

- **Qué gobierna:** Configuración de cada mercado: reglas, datos, fechas, comportamientos y parámetros que heredan los demás módulos.
- **Quién lo usa:** *pendiente*
- **Riesgo operativo:** ver [mapa de módulos](../../docs/mapa-de-modulos.md)
- **Métrica de éxito:** *pendiente*

## 2. Contexto en la IA

Entrada: *Countries → Configurar*. El Left panel se colapsa a 48 y el [SubPanelLeft](../../../Archway/Dashboard/structure/sub-panel-left.md) muestra 21 secciones (ver [mapa](../../docs/mapa-de-modulos.md#country--configuration-configuración-de-mercado)). Plantilla: [formulario de Country](../../../Archway/Dashboard/usage/page-templates.md#1-country-session--formulario) (columna 1089, secciones con gap 48, *Cancelar* · *Guardar configuración*).

## 3. Flujo en Figma

### [[DashBoard] Countries](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/) · `usfvpsKjGaLLwjc8deDS0a` · In Progress · editado 2026-11-12

| Página | Flujos / secciones |
|---|---|
| [↳ Countries](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6-305) | [Listado de países](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6372-13040) · [Flujo de menú](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6834-75798) · [Configure](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6372-13468) · [Navegación secundaria (SubPanelLeft)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6372-15006) · [Mobile / navegación secundaria](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6372-13996) |
| [↳ Detalle](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6573-82142) | [Detail](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6573-85951) · [JSON](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6834-63881) |
| [↳ Main](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6350-85694) | [Main](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=7316-4807) · [App version](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=7316-4954) |
| [↳ Promotions](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=2039-2730) | [Promotions (17 pantallas)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=2044-4366) · [Modal messages](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=4523-15491) · [Configuración / promociones](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=6350-38876) |
| [↳ Antifraude](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=9733-2333) | [Antifraude](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=9759-29490) |
| [↳ Cancelaciones](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=8807-63252) | [COUNTRY_Cancelaciones (9 flujos)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=8812-66964) |
| [↳ Refunds](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=7935-17) | [Refunds](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10463-57146) · [Refunds · errores](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10463-57568) · [Flujo chatbot](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=8210-1835) |
| [↳ Payment](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=7991-64952) | [COUNTRY_Modify_Payment (7 flujos)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=8119-89333) |
| [↳ Order Limits](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11238-3433) | [COUNTRY_Order_Limits](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11238-3451) |
| [↳ Currency](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11725-1891) | [COUNTRY_Moneda](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11725-1892) |
| [↳ Rating](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=9479-20876) | [Valoración de la app](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10066-122060) |
| [↳ ADK](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10005-30236) | [Countries / ADK](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10260-15290) · [Configuración avanzada](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11929-7426) |
| [↳ Configuración APP](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11831-10604) | [App — Configuración](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11831-13832) |
| [↳ Special Sales](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12241-25744) | [Listado de eventos especiales](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12266-33991) · [Elegir tipo de evento](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12244-12339) · [Pago exclusivo](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12266-102335) · [Oferta de bienvenida](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12246-16244) · [Límite de producto](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12247-14540) · [Pago con tarjeta](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12247-18969) · [Venta anticipada](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12262-31945) |
| [↳ Enrollment](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11120-6038) | [Enroll](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11174-116067) |
| [↳ Validaciones](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12722-3294) | [Tipo de documento y documento fiscal](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12785-48044) · [Eliminar tipo de documento](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12791-5862) · [Errores de validación (propuesta)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12791-6228) |
| [↳ Ticket de compra](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12619-17852) | [Activar (digital por defecto)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12685-30849) · [Desactivar](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12685-59519) · [Papel → digital](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12688-89234) · [Abandonar sin guardar](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12688-107119) · [Error de guardado](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12688-153254) |
| [↳ Notificaciones Push](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=8314-9598) | [COUNTRY_Notificaciones_Push (16 flujos)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=8407-18984) |
| [↳ Cumpleaños (MVP)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=2110-9591) | [Habilitar funcionalidad](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=5637-54209) · [Deshabilitar con reservas confirmadas](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=5637-59218) · [Contrato digital (T&C)](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=5641-54453) · [Upselling · hora adicional](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12133-72720) · [Puntos MiMcDonald's](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10787-61298) |
| [↳ Cumpleaños - Entrevista, Kits y Tour](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=10983-77960) | [Entrevista](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12403-51630) · [Añadir preguntas](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=12403-81015) · [Kit · añadir](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11117-30737) · [Tour por la cocina](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11118-101795) |
| [↳ Monitoreo de disponibilidad](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11856-108409) | [Monitoreo de disponibilidad de cumpleaños](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=11856-152501) |
| [Countries / Overview](https://www.figma.com/design/usfvpsKjGaLLwjc8deDS0a/?node-id=9616-17) | — |

### Lo que se ve en el archivo

- El archivo tiene **22 páginas de configuración**, más que el árbol *Ai - Country*: suma **Order Limits**, **Ticket de compra**, **Configuración APP**, **ADK** y **Monitoreo de disponibilidad** (cumpleaños), y no tiene páginas propias para Products, Services, Loyalty, Tips, Profile, Parameters ni Wallet ([Q-11](../../docs/preguntas-abiertas.md)).
- **Special Sales** se rediseñó como paso a paso por tipo de evento (pago exclusivo, oferta de bienvenida, límite de producto, pago con tarjeta, venta anticipada), marcado "Propuesta nueva".
- **Main:** nota en Figma "loyalty: se quita, y los campos duplicados se unifican".
- **Cumpleaños** se configura acá *y* en Restaurantes ([Q-09](../../docs/preguntas-abiertas.md)).
- **ADK:** configuración avanzada por país; la página *deprecated adk* tiene un rediseño País → Restaurante → Tótem que conecta con el proyecto [ADK](../../../ADK/README.md).
- Páginas deprecadas: *deprecated rating*, *deprecated adk*. *Countries / Overview* está vacía.

## 4. Puntos a definir

- 21 secciones en el SubPanelLeft (Hick): evaluar agrupación.
- SubPanelLeft en español con typos (`Loyality`, `Parámentros`) y árbol en inglés.
- [Q-03](../../docs/preguntas-abiertas.md): qué se configura acá y qué en el panel.

## 5. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| — | — | — | — |
