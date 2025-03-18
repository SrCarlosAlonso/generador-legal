import { marked } from "marked";
import { ObjData } from "./customTypes";

export async function convertMD(data: string, content: ObjData) {
  const { social, nombreComercial, cif, direccion, email, website, fecha } =
    content;

    const newData: string = await marked(data);

  const temp = document.createElement("div");
  temp.innerHTML = newData;

  const replace = temp.innerHTML
    .replace(/{{social}}/g, social)
    .replace(/{{nombreComercial}}/g, nombreComercial)
    .replace(/{{cif}}/g, cif)
    .replace(/{{direccion}}/g, direccion)
    .replace(/{{email}}/g, email)
    .replace(/{{website}}/g, website)
    .replace(/{{fecha}}/g, fecha);

  const print = document.createElement("div");
  print.innerHTML = replace;

  // return footer.appendChild(print);
  return print as HTMLElement;
}
