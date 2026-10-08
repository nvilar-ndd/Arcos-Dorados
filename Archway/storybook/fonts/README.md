# Fuentes locales (no versionadas)

**Speedee** es una tipografía con licencia de McDonald's (Dalton Maag). Los archivos **no se suben al repo**: cada persona los copia en esta carpeta, que está ignorada por git.

## Cómo instalarla

1. Pedí el paquete `Speedee_V1.301` al equipo de diseño.
2. Copiá estos 4 archivos de `Speedee_V1.301/Web/WOFF2/` a esta carpeta (`Archway/storybook/fonts/`):

   | Archivo | Peso / estilo | Uso en ArchWay |
   |---|---|---|
   | `Speedee_W_Rg.woff2` | 400 normal | Estilos *Regular* |
   | `Speedee_W_Bd.woff2` | 700 normal | Estilos *Bold* |
   | `Speedee_W_It.woff2` | 400 italic | `Label … Italic` |
   | `Speedee_W_BdIt.woff2` | 700 italic | Énfasis dentro de itálicas |

   O con el script, apuntando a la carpeta descomprimida:

   ```bash
   npm run fonts -- ~/Downloads/tipografia/Speedee_V1.301
   ```

3. Reiniciá `npm run dev`. La página *Tipografía* deja de mostrar el aviso de fuente de reemplazo.

Sin estos archivos el Storybook funciona igual, con Helvetica Neue / Arial como reemplazo.
