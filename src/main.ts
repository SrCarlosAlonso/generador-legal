document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");

  handleInputs(DOM_INPUTS);
  console.log(DOM_ELEMENTS);
});

const $ = (id: string) => {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Elemento ${id} no encontrado`);
  }
  return el;
};

const DOM_INPUTS = {
  social: $("input-social") as HTMLInputElement,
  nombreComercial: $("input-comercial") as HTMLInputElement,
  cif: $("input-cif") as HTMLInputElement,
  direccion: $("input-direccion") as HTMLInputElement,
  email: $("input-email") as HTMLInputElement,
  website: $("input-website") as HTMLInputElement,
  fecha: $("input-fecha") as HTMLInputElement,
};

const DOM_ELEMENTS = {
  btnPrivacidad: $("btn-toggle-privacidad") as HTMLButtonElement,
  btnLegal: $("btn-toggle-legal") as HTMLButtonElement,
  txtPrivacidad: $("txt-toggle-privacidad") as HTMLDivElement,
  txtLegal: $("txt-toggle-legal") as HTMLDivElement,
};


function listenerInput(input : HTMLInputElement) {
  input.addEventListener("change", () => {
    console.log(input.value);
  });
}

function handleInputs(input : Object) {
  Object.values(input).forEach((input) => listenerInput(input));
}
