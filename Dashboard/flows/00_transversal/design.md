---
modulo: Transversal — Home, permisos e historial
estado: 🧭 Relevado
contexto: Left panel
figma: https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/ · https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/
ultima_extraccion: 2026-11-17
owner_ux:
owner_producto:
---

# Transversal — Home, permisos e historial

> Ficha armada desde la [arquitectura de la información](../../../Archway/Dashboard/structure/information-architecture.md) (v-03/11/26) y el relevamiento de Figma del 2026-11-17 (inventario completo en [`mapa-de-flujos.md`](../../docs/mapa-de-flujos.md)). Las secciones vacías se completan con [`templates/design.md`](../../templates/design.md) a medida que se audita cada flujo.

## 1. Contexto y objetivo

- **Qué gobierna:** Home del Dashboard, roles y permisos (RBAC), historial de cambios y patrones comunes a todos los módulos (confirmaciones, soft-delete, bulk actions, filtros).
- **Quién lo usa:** *pendiente*
- **Riesgo operativo:** ver [mapa de módulos](../../docs/mapa-de-modulos.md)
- **Métrica de éxito:** *pendiente*

## 2. Contexto en la IA

Define las reglas que heredan todos los módulos. Ver [`principios-dashboard.md`](../../docs/principios-dashboard.md).

## 3. Flujo en Figma

### [[DashBoard] Home + Header](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/) · `z9thVNqJLSqKMKUJQM9AGo` · Done · editado 2026-07-23

| Página | Flujos / secciones |
|---|---|
| [Home](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=6-305) | [Home (Max)](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2043-7145) · [Home (Small)](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2043-7201) |
| [⮑ Home sin país](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=5060-49039) | [Home sin país](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=5060-49395) |
| [⮑ Home con país](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=5079-25193) | [Página principal](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=5104-5123) |
| [⮑ Perfil](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2030-7178) | [Perfil](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2702-21210) |
| [⮑ ABM de usuarios](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2050-17859) | [Listado de usuarios](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2051-19361) · [Crear usuario](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2108-11460) · [Configuración por país](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2547-24183) · [Eliminar](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2277-39905) · [HandOff alta de usuario](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2676-22917) · [Modo dark](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=5299-29069) |
| [⮑ General setting](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2378-49133) | [General setting](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2378-61559) |
| [⮑ Logs](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2082-38792) | [Logs](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2320-58049) · [Detalle de log](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2320-79766) · [Significado de los campos](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2203-94741) |
| [⮑ Audits](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2138-48949) | [Audits](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2344-29575) · [Ver audit](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2344-64656) · [Significado de los campos](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2219-65122) |
| [⮑ Providers Auth](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2320-12899) | [Providers Auth](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2344-67454) · [Crear](https://www.figma.com/design/z9thVNqJLSqKMKUJQM9AGo/?node-id=2349-73310) |

### [[DashBoard] Login](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/) · `N60mLC2VbXIHHzTnY18dRf` · In Progress · editado 2026-05-08

| Página | Flujos / secciones |
|---|---|
| [Login](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/?node-id=6-305) | [Login](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/?node-id=2052-1529) · [Código por mail](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/?node-id=2052-1695) · [Error de código](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/?node-id=2052-1836) · [Login mobile](https://www.figma.com/design/N60mLC2VbXIHHzTnY18dRf/?node-id=2052-1856) |

### Lo que se ve en el archivo

- **Login:** acceso por mail + código (OTP), con reenvío y errores; versión desktop y mobile.
- **Home + Header** (cover *Done*): Home responsive (Max → Small), Home con y sin país, Perfil.
- **ABM de usuarios** con *configuración por país* al crear un usuario: es la base del RBAC (BO-PER-01). Revisar qué roles y alcances define ([Q-02](../../docs/preguntas-abiertas.md)).
- **Logs** y **Audits** ya existen como pantallas: cubren el historial de cambios (BO-SEG-07). Las tablas de "significado de los campos" están marcadas "según Rocío, no chequeado".
- **Providers Auth** y **General setting**.
- Incluye un frame de **Modo dark** del ABM.

## 4. Puntos a definir

- [Q-02](../../docs/preguntas-abiertas.md): roles y alcances.
- [Q-04](../../docs/preguntas-abiertas.md): soft-delete, programación e historial en backend.
- [Q-05](../../docs/preguntas-abiertas.md): idioma de la UI.

## 5. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| — | — | — | — |
