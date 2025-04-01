import { ObjData } from "@helpers/customTypes";
import { convertMD } from "@helpers/formatData";
import { DOM_ELEMENTS, $, INPUTS_PLACEHOLDER } from "./helpers/domElements";
import { copyText } from "@helpers/copyTextt";
import { newAlert } from "@helpers/newAlert";
import avisoLegal from "@docs/aviso_v1.md?raw";
import politicaPrivacidad from "@docs/privacidad_v1.md?raw";

const {
  btnReset,
  btnGenerate,
  txtTogglePrivacidad,
  txtToggleLegal,
  btnPrivacidad,
  txtPrivacidad,
  btnLegal,
  txtLegal,
  coppyBtnPrivacidad,
  coppyBtnLegal,
  social,
  nombreComercial,
  cif,
  direccion,
  email,
  website,
  fecha,
  alertContainer,
} = DOM_ELEMENTS;

// 0. Listeners
document.addEventListener("DOMContentLoaded", function () {
  printHTML();
  console.log("DOM is ready!");

  handleInputs(DOM_ELEMENTS);
  listenerToggleBtn();
});

function listenerInput(input: HTMLInputElement) {
  input.addEventListener("change", () => {
    handelPreview(input.id, input.value);
    btnReset.disabled = false;
  });
}

function handleInputs(input: Object) {
  Object.values(input).forEach((input) => listenerInput(input));
}

// 0.1 Toggle button for Privacidad and Legal
function listenerToggleBtn() {
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

//  0.2  Listner for copy buttons
coppyBtnPrivacidad.addEventListener("click", copyText);
coppyBtnLegal.addEventListener("click", copyText);

// 1. We print the preview data after the input changed, we don't save the data in the object
const handelPreview = (id: string, value: string) => {
  const name = id.toString().split("-")[1];
  const elementPrv = $(`prv-${name}`);
  elementPrv.textContent = value;
};

// 2. When user click on generate button hanndelGenerate is called
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
  // 2.2 Create a temporary object with the data from the inputs
  const OBJ_DATA_TEMP: ObjData = {
    social: social.value,
    nombreComercial: nombreComercial.value,
    cif: cif.value,
    direccion: direccion.value,
    email: email.value,
    website: website.value,
    fecha: fecha.value,
  };
  // 2.3 Check if all the fields are filled
  if (Object.values(OBJ_DATA_TEMP).some((value) => value === "")) {
    newAlert("Rellena todos los campos", "error");
    return;
  }
  // 2.4 If all the fields are filled, we save the data in OBJ_DATA and generateDocument is called
  OBJ_DATA = OBJ_DATA_TEMP;
  generateDocument();
};
// 2.1 Add event listener to the button generate to call hanndelGenerate
btnGenerate.addEventListener("click", handleBtnGenerate);

// 3. When the Data is saven in the global object OBJ_DATA, we generate the legal document
async function generateDocument() {
  //  3.1 We create container with de data form MD documents and the function convertMD to remplace and print the data
  const contentPrivacidad = await convertMD(politicaPrivacidad, OBJ_DATA);
  const contentLegal = await convertMD(avisoLegal, OBJ_DATA);

  const containerPrivacidad = txtTogglePrivacidad;
  const containerLegal = txtToggleLegal;

  containerPrivacidad.innerText = "";
  containerPrivacidad.appendChild(contentPrivacidad);
  containerLegal.innerText = "";
  containerLegal.appendChild(contentLegal);

  newAlert("Texto legal generado", "success");
}

// 3.2 Reset for the inputs and the global object OBJ_DATA
btnReset.addEventListener("click", () => {
  btnReset.disabled = true;

  Object.values(DOM_ELEMENTS).forEach((input) => {
    if (input instanceof HTMLInputElement) {
      input.value = "";
    }
  });

  alertContainer.innerHTML = "";

  printHTML(); // Print again the PlaceHolders Elements
});

// 4. Print the HTML
function printHTML() {
  const { prvSocial, prvComercial, prvCif, prvDireccion, prvEmail, prvWebsite, prvFecha, } = DOM_ELEMENTS;
  const { placeholderSocial, placeholderComercial, placeholderCif, placeholderDireccion, placeholderEmail, placeholderWebsite, placeholderFecha, } = INPUTS_PLACEHOLDER;

  social.placeholder = placeholderSocial;
  nombreComercial.placeholder = placeholderComercial;
  cif.placeholder = placeholderCif;
  direccion.placeholder = placeholderDireccion;
  email.placeholder = placeholderEmail;
  website.placeholder = placeholderWebsite;
  fecha.placeholder = placeholderFecha;

  prvSocial.textContent = placeholderSocial;
  prvComercial.textContent = placeholderComercial;
  prvCif.textContent = placeholderCif;
  prvDireccion.textContent = placeholderDireccion;
  prvEmail.textContent = placeholderEmail;
  prvWebsite.textContent = placeholderWebsite;
  prvFecha.textContent = placeholderFecha;
}
