# Dashboard — Estructura (UI shell)

> **Fuente de la verdad:** [⮑ UI shell / Header + PanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=657-36880) · [⮑ SubPanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4103-17) · componentes base en *Components › UI shell - Header* y *UI shell - Left panel items* · **Extraído vía Figma MCP:** 2026-10-08.

> "UI Shell es un conjunto de componentes compartidos por todos los productos de una plataforma: la estructura persistente que envuelve la interfaz, incluyendo header, sidebar y navegación. Proporciona consistencia y acceso constante a funciones clave en toda la aplicación." — Figma

| Documento | Contenido |
|---|---|
| [ui-shell.md](./ui-shell.md) | Composición Header + PanelLeft, medidas, breakpoints y comportamiento responsive |
| [header.md](./header.md) | Header: anatomía (7 elementos), desplegables, comportamiento en mobile |
| [left-panel.md](./left-panel.md) | Sidebar principal: ítems, subítems, estados, expandida/colapsada, acciones fijas |
| [sub-panel-left.md](./sub-panel-left.md) | Navegación secundaria de Country (SubPanelLeft) |
| [information-architecture.md](./information-architecture.md) | Árbol de navegación del panel izquierdo y de Country (versiones en Figma) |

```
+------------------------------ Header 96 -----------------------------+
| [=]  M  [Pais v]                              (?)  (*)  (S)  (RA)    |
+-----------+--------------+-------------------------------------------+
| Left      | SubPanelLeft |                                           |
| panel     | (solo en     |              Contenido                    |
| 272 / 256 |  Country)    |                                           |
| o 48      | 272          |                                           |
+-----------+--------------+-------------------------------------------+
```

El patrón de pantalla que va dentro del área de contenido depende del contexto de navegación: ver [`../usage/`](../usage/README.md).
