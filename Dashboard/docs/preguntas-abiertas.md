# Preguntas abiertas

Decisiones de producto o de tecnología que bloquean o condicionan el diseño. Se cierran con una respuesta y la fecha, no se borran.

| ID | Pregunta | Bloquea | Para | Estado |
|---|---|---|---|---|
| Q-01 | ¿Cuáles son los archivos de Figma de producto del Dashboard (no el DS)? | Todo el relevamiento | UX | ✅ Cerrada 2026-11-17: carpeta *Especificación*, 17 archivos ([`fuentes-de-verdad.md`](./fuentes-de-verdad.md)) |
| Q-02 | ¿Qué roles existen hoy y con qué alcance (global / país / restaurante)? | BO-PER-01 · historias de usuario | Producto · Tech | 🟡 Parcial: el ABM de usuarios de *Home + Header* tiene "configuración por país" al crear un usuario. Falta la matriz de roles |
| Q-03 | ¿Qué se configura en el panel izquierdo y qué en Country cuando el dominio está en los dos (Promociones, Delivery, Loyalty)? | IA · flujos 01, 03, 06, 11 | Producto | Abierta |
| Q-04 | ¿El backend soporta soft-delete, programación de publicaciones e historial de cambios por entidad? | BO-SEG-02 · BO-SEG-07 · BO-EST-01 | Tech | 🟡 Parcial: Figma ya diseña *Archivar* (Promociones), notificaciones *programadas* (App content) y Logs/Audits (Home + Header). Confirmar que existe en backend |
| Q-05 | Idioma de la UI: ¿español, inglés o i18n por usuario? | BO-SIS-05 | Producto | Abierta. Los archivos mezclan nombres en español e inglés (Orders, Voice Orders, Countries) |
| Q-06 | ¿Wallet se elimina del panel? | Módulo 09 | Producto | 🟡 Figma lo marca "No usar!" (sin cambios desde 02/2026). Falta confirmación de producto y sacarlo del árbol de Country |
| Q-07 | ¿Qué pasa con *Pedido por voz* ("sigue en CMS") y *Game* ("solo en Figma")? | Módulos 14 y 15 | Producto | 🟡 Los dos tienen archivo en la carpeta. Game tiene una página "❌ Migración de CMS a Dash" vacía: ¿la migración se descartó? |
| Q-08 | DS del Dashboard: ¿se mantiene separado (alta densidad, dark mode) o se unifica con ArchWay? | Componentes nuevos | Design Ops | Ver [Convergencia](../../Archway/Convergencia/dashboard-archway.md) |
| Q-09 | Cumpleaños está repartido en tres archivos (Countries: MVP, entrevista, kits, tour, monitoreo · Restaurantes: configuración, kits, upselling · Cumpleaños: agenda, entrevista). ¿Cuál es la fuente de cada parte y qué nivel configura qué? | Módulos 01, 02, 07 | Producto · UX | Abierta |
| Q-10 | App content tiene *Menú mi cuenta*, *Navigation bars* y *Centro de Notificaciones*, que no están en la IA v-03/11/26 (y la IA dice que salen Menu Horizontal y Vertical). ¿Siguen? | IA · módulo 08 | Producto | Abierta |
| Q-11 | Countries tiene páginas que no están en el árbol *Ai - Country* (ADK, Configuración APP, Ticket de compra, Order Limits) y el árbol tiene secciones sin página (Products, Services, Tips, Profile, Parameters). ¿Cuál es el árbol vigente? | IA · módulo 01 | Producto · UX | Abierta |
| Q-12 | ¿Cómo se marca que un flujo está listo para dev? Los covers dicen *In Progress* en 14 de 17 archivos y no hay páginas de estado como en ADK | Estados de los `design.md` | UX | Abierta. Propuesta: separador *READY for DEV* / *EN REVISIÓN UX* por archivo, como ADK |
