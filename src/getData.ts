import { marked } from "marked";
import aviso from "./docs/aviso_v1.md?raw";

export async function getData() {
  const html = document.createElement("div");

  // Verificar si aviso es una promesa
  const mdContent = typeof aviso === 'string' ? aviso : await aviso;

  html.innerHTML = marked.parse(mdContent) as string;
  console.log(html.innerHTML);
  return html;
}

//  Tengo que hacer un foreach del obj con el html y hacer un Regex para reemplazar los valores por los datos
