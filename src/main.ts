document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");

  handleInputs(DOM_INPUTS);
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

// 1. let's print the data after the input changed and the button generate clicked.
// 2. handelButtons. when do you click on generate button. the program will save the data in a new object, then we take the new inforation objecto to generate the legal document.
// 2.1 if the user clilc eb delete, all the data will be deleted.
