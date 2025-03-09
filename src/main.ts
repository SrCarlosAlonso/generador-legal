import { convertMD } from "./getData";
import avisoLegal from "./docs/aviso_v1.md?raw";
import politicaPrivacidad from "./docs/privacidad_v1.md?raw";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");

  handleInputs(DOM_ELEMENTS);

  convertMD( avisoLegal )
  convertMD( politicaPrivacidad )
});

const $ = (id: string) => {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Elemento ${id} no encontrado`);
  }
  return el;
};

const DOM_ELEMENTS = {
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

  btnGenerate: document.querySelector(
    "button[type='submit']"
  ) as HTMLButtonElement,
  btnReset: $("input-reset") as HTMLButtonElement,
};

function listenerInput(input: HTMLInputElement) {
  input.addEventListener("change", () => {
    handelPreview(input.id, input.value);
  });
}

function handleInputs(input: Object) {
  Object.values(input).forEach((input) => listenerInput(input));
}

// 1. let's print the data after the input changed and the button generate clicked.
const handelPreview = (id: string, value: string) => {
  const name = id.toString().split("-")[1];
  const elementPrv = $(`prv-${name}`);
  elementPrv.textContent = value;
};

// 2. handelButtons. when do you click on generate button. the program will save the data in a new object, then we take the new information object to generate the legal document.
type ObjData = {
  social: string;
  nombreComercial: string;
  cif: string;
  direccion: string;
  email: string;
  website: string;
  fecha: string;
};

let OBJ_DATA: ObjData = {
  social: "",
  nombreComercial: "",
  cif: "",
  direccion: "",
  email: "",
  website: "",
  fecha: "",
};

const handleBtnGenerate = (e: Event) => {
  e.preventDefault();
  // 1. take the value from inputs.value
  const OBJ_DATA_TEMP: ObjData = {
    social: DOM_ELEMENTS.social.value,
    nombreComercial: DOM_ELEMENTS.nombreComercial.value,
    cif: DOM_ELEMENTS.cif.value,
    direccion: DOM_ELEMENTS.direccion.value,
    email: DOM_ELEMENTS.email.value,
    website: DOM_ELEMENTS.website.value,
    fecha: DOM_ELEMENTS.fecha.value,
  };
  console.log(`Data saved in OBJ_DATA_TEMP, ${OBJ_DATA_TEMP}`);
  // 2. check thif the value are not empty
  if (Object.values(OBJ_DATA_TEMP).some((value) => value === "")) {
    console.log("Please fill all the fields");
    return;
  }
  // 3. if the valuea are not empty, then we save the infomation in the objecto.
  OBJ_DATA = OBJ_DATA_TEMP;
  // 4. When the information is saved, we take the the object to pritn the legal document.
  generateDocument(OBJ_DATA);
};

DOM_ELEMENTS.btnGenerate.addEventListener("click", handleBtnGenerate);

const generateDocument = (data: ObjData) => {
  const { social, nombreComercial, cif, direccion, email, website, fecha } =
    data;

  console.log(`The thata are:
    social: ${social},
    nombreComercial: ${nombreComercial},
    cif: ${cif},
    direccion: ${direccion},
    email: ${email},
    website: ${website},
    fecha: ${fecha}
    `);
};

// 2.1 if the user clilc eb delete, all the data will be deleted.
