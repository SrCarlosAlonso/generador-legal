import { ObjData } from "@helpers/customTypes";
import { convertMD } from "@helpers/formatData";
import avisoLegal from "@docs/aviso_v1.md?raw";
import politicaPrivacidad from "@docs/privacidad_v1.md?raw";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");

  handleInputs(DOM_ELEMENTS);
  listenerToggleBtn();
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

  txtTogglePrivacidad: $("txt-toggle-privacidad"),
  txtToggleLegal: $("txt-toggle-legal"),
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
  generateDocument();
};

DOM_ELEMENTS.btnGenerate.addEventListener("click", handleBtnGenerate);

async function generateDocument() {
  // Print the data in the container
  const contentPrivacidad = await convertMD(politicaPrivacidad, OBJ_DATA);
  const containerPrivacidad = DOM_ELEMENTS.txtTogglePrivacidad;
  containerPrivacidad.innerText = "";
  containerPrivacidad.appendChild(contentPrivacidad);

  const contentLegal = await convertMD(avisoLegal, OBJ_DATA);
  const containerLegal = DOM_ELEMENTS.txtToggleLegal;
  containerLegal.innerText = "";
  containerLegal.appendChild(contentLegal);
}

// 2.1 if the user clilc eb delete, all the data will be deleted.

// 2.2 Toggle button for Privacidad and Legal

function listenerToggleBtn() {
  const btnPrivacidad = DOM_ELEMENTS.btnPrivacidad;
  const txtPrivacidad = DOM_ELEMENTS.txtPrivacidad;
  const btnLegal = DOM_ELEMENTS.btnLegal;
  const txtLegal = DOM_ELEMENTS.txtLegal;
  function toggleVisibility(
    btnActive: HTMLButtonElement,
    txtActive: HTMLDivElement,
    btnInactive: HTMLButtonElement,
    txtInactive: HTMLDivElement
  ) {
    const isActive = btnActive.classList.contains("active");
    //
    if (!isActive) {
      btnActive.classList.add("active");
      btnInactive.classList.remove("active");

      txtInactive.classList.add("fade-out");

      setTimeout(() => {
        txtInactive.classList.add("hidden");
        txtInactive.classList.remove("active");

        txtActive.classList.remove("hidden");
        txtActive.classList.add("fade");

        setTimeout(() => {
          txtActive.classList.add("fade-in");
          txtActive.classList.remove("fade-out");

          setTimeout(() => {
            txtActive.classList.add("active");
          }, 200);
        }, 20);
      }, 250);
    }
    //
  }
  btnPrivacidad.addEventListener("click", () =>
    toggleVisibility(btnPrivacidad, txtPrivacidad, btnLegal, txtLegal)
  );
  btnLegal.addEventListener("click", () =>
    toggleVisibility(btnLegal, txtLegal, btnPrivacidad, txtPrivacidad)
  );
}
