# Dashboard Storybook

Visualización de las Foundations del Dashboard. **No define valores propios:** todo sale de [`../tokens/dashboard.tokens.json`](../tokens/dashboard.tokens.json), exportado desde Figma (SSOT).

## Uso

```bash
cd Dashboard/storybook
npm install
npm run fonts -- ~/ruta/a/Speedee_V1.301   # una sola vez, fuente con licencia
npm run dev       # http://localhost:6007
```

Corre en el puerto **6007** para poder tenerlo abierto al mismo tiempo que el de ArchWay (6006).

## Light / Dark

La colección Semantic tiene dos modos. `npm run tokens` genera las variables Light en `:root` y las de Dark en `[data-theme='dark']`. En Storybook se cambia con el selector **Tema** de la barra superior.

## Páginas

| Sección | Contenido |
|---|---|
| Dashboard › Introducción | Fuente de la verdad, modos y estado de cada foundation |
| Foundations › Color | Semánticos con Light y Dark lado a lado, primitivos, contraste WCAG en los dos modos |
| Foundations › Tipografía | Los 16 estilos (Speedee y Roboto Mono) |
| Foundations › Espaciado | Escala por multiplicador y tokens de layout |
| Foundations › Radios | sm, md, lg, xl |
| Foundations › Grilla | Breakpoints, 6 grillas a escala y tamaños de modal |
| Guías › UI templates | Se renderiza desde `../guides/ui-templates.md` |
| Convergencia › Dashboard a ArchWay | Se renderiza desde `../../Convergencia/dashboard-archway.md` |

## Notas

- **Speedee** no se versiona (licencia): ver [fonts/README.md](./fonts/README.md). **Roboto Mono** se carga desde Google Fonts (licencia OFL).
- La tabla de contraste se recalcula desde los tokens de cada modo.
