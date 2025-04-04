# Readme

## TODO

1.~~Crear una función que reciba un string y reemplaza los marcadores con el contenido de un objeto~~

2. ~~Crear una función que reciba un string y reemplaza los marcadores con el contenido de un objeto~~
3. Fix styles y repasar responsive.
4. Guardar versiones de los documentos en localStorage. Tener la opcion de hacer el CRUD.
5. ~~Crear una función que reciba un string y reemplaza los marcadores con el contenido de un objeto~~
6. Mostrar las plantillas por defecto con textos de ejemplo.
7. En la pestaña de vista previa an1adir tambien botnes de guardar y descargar.
8. Creata y mejorar SEO y meta tags.
9. Preparar multilingüe, por ahora solo en ES y EN.

## Ideas

1. Valorar la funcionalidad de subir archivos MD para generar textos personalizados.
2. Añadir de forma diñamica al formulario nuevos inputs vinculados para remplazar nuevos marcadores de documentos personalizados.
3. La página multilingüe será dinámica, los idiomas se guardaran en archivos json, se creará una función que reciba el idioma y el texto y devuelve el texto traducido.

```
<!-- Ejempli de función Translate -->
function t(path: string) {
  return path.split('.').reduce((obj, key) => obj?.[key], translations[lang]) || path;
}
```

```
<!-- Ejemplo del estándar de estructura de idiomas (JSON) -->
{
  "form": {
    "name": "Full name",
    "email": "Email address"
  },
  "button": {
    "submit": "Submit",
    "cancel": "Cancel"
  },
  "messages": {
    "welcome": "Welcome, {{user}}!"
  }
}
```

4. Se podrá almacenar en *`localStorage`* la selección del idioma.
5. Se cargará dinámicamente el idioma de la página dependiendo del idioma del navegador

## Links

- [npm - marked](https://www.npmjs.com/package/marked)
- `vite-plugin-md` o similar: **import plantillaMD from './ruta/plantilla.md?raw';**
- Estándar para estructurar archivos de traducción: [i18next](https://www.i18next.com/misc/json-format)
