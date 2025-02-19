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
  "btn-toggle-privacidad": $("btn-toggle-privacidad"),
  "btn-toggle-legal": $("btn-toggle-legal"),
  "txt-toggle-privacidad": $("txt-toggle-privacidad"),
  "txt-toggle-legal": $("txt-toggle-legal"),
}


console.log(DOM_ELEMENTS);


