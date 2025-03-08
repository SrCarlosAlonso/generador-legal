# Readme

## Ideas

1. Tener los textos originales en archivos `.md`, importarlos y trabajarlos con el plugin `marked`.
2. Se puede reemplazar texto que esté marcado en marcadores, por ejemplo `{placeholder}`.

   ```js
   // Ejemplo de reemplazo de texto
   plantillaMD = plantillaMD.replace('{{nombre}}', nombre);
   plantillaMD = plantillaMD.replace('{{email}}', email);
   ```

3. Luego guardamos todo en otro `const` y eso es lo que mostramos, dando la opción al usuario de copiar.

## Links

- [npm - marked](https://www.npmjs.com/package/marked)
- `vite-plugin-md` o similar: **import plantillaMD from './ruta/plantilla.md?raw';**

