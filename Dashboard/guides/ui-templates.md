# UI templates por contexto de navegación

> **Fuente de la verdad:** [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) — página *Usage and design criteria*.
> **Extraído vía Figma MCP:** 2026-10-07.

El layout y la estructura de una pantalla del Dashboard dependen del **contexto de navegación** desde el que se accede. Cada sección del sistema responde a un propósito distinto y requiere un patrón de UI específico.

| Contexto | Propósito | Patrón recomendado |
|---|---|---|
| 🌍 **Country session** | Definir el marco del mercado | **Formulario** (simple o por secciones) |
| 📂 **Left Panel** (panel izquierdo) | Gestión y operación | **Listado inicial + flujo paso a paso** |
| 🧭 **Header** | — | *Sin definir en Figma* |

## 🌍 Country session — formulario de configuración

Las pantallas que dependen de la sesión de Country se diseñan como **formularios**. Este contexto configura todo lo que varía por país:

- Reglas
- Datos
- Fechas
- Comportamientos
- Configuraciones específicas de mercado

**Criterio**

- El foco está en **definir contexto**.
- La información se edita de forma directa.
- No es un flujo secuencial, sino **configurativo**.

Ejemplos del archivo: Medios de pago (bancos, marcas de tarjeta), Motor de promociones, Reglas de negocio, Acumulación de promociones.

## 📂 Left Panel — listado + flujo paso a paso

Las pantallas del panel izquierdo responden a flujos de **gestión u operación**: creación, edición, revisión y publicación. Por eso el diseño tiende a estructurarse como un **proceso paso a paso**.

Generalmente empiezan con una **Read-only Table** o una **Card List** (ver abajo).

**Criterio**

- El flujo se evalúa caso por caso.
- La complejidad define la cantidad de pasos.
- La consistencia entre pasos es clave.

Ejemplo del archivo: alta de una promoción en pasos (Detalles generales → Disponibilidad → Segmentación → Contenido de apoyo → Resumen), con filtros de restaurante y de segmentación de usuarios.

## Read-only Table vs Card List

| | **Read-only Table** | **Card List** |
|---|---|---|
| Cuándo | El contenido es exclusivamente informativo | Cada ítem es una entidad gestionable |
| Interacción | El usuario **no** puede modificar estados desde la lista; no hay toggles, switches ni acciones primarias por fila | El usuario puede activar/desactivar, cambiar estados y ejecutar acciones directas; hay controles visibles (toggle, switch, menú de acciones) |
| Objetivo | Leer, comparar, analizar datos; escanear columnas rápido | Operar y gestionar, no sólo leer |
| Contenido | Altamente estructurado y consistente entre filas | Puede variar en longitud o jerarquía por ítem |
| Ejemplos | Logs, usuarios | Promociones, misiones |
