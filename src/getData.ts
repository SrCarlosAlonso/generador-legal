import { marked } from "marked";

export async function convertMD( data : string) {
  const html = document.createElement("div");

  // Verificar si aviso es una promesa
  const mdContent = typeof data === 'string' ? data : await data;

  html.innerHTML = marked.parse(mdContent) as string;
  console.log(html.innerHTML);
  return html;
}

//  Tengo que hacer un foreach del obj con el html y hacer un Regex para reemplazar los valores por los datos
