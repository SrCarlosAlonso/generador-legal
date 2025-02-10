console.log('Hello World!')

const $ = (id: string): HTMLElement | null => {
  return document.getElementById(id);
};

const DOM_ELEMENTS = {
  "social": $("input-social"),
  "nombre-comercial": $("input-comercial"),
  "cif": $("input-cif"),
  "direccion": $("input-direccion"),
  "email": $("input-email"),
  "website": $("input-website"),
  "fecha": $("input-fecha"),
}


console.log(DOM_ELEMENTS);


