import { ObjData } from "@helpers/customTypes";
import { convertMD } from "@helpers/formatData";
import { DOM_ELEMENTS, $ } from "./helpers/domElements";
import { copyText } from "@helpers/copyTextt";
import avisoLegal from "@docs/aviso_v1.md?raw";
import politicaPrivacidad from "@docs/privacidad_v1.md?raw";

// 0. Listeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");

  handleInputs(DOM_ELEMENTS);
  listenerToggleBtn();
});

function listenerInput(input: HTMLInputElement) {
  input.addEventListener("change", () => {
    handelPreview(input.id, input.value);
  });
}

function handleInputs(input: Object) {
  Object.values(input).forEach((input) => listenerInput(input));
}

// 0.1 Toggle button for Privacidad and Legal
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

//  0.2  Listner for copy buttons
DOM_ELEMENTS.coppyBtnPrivacidad.addEventListener("click", copyText);
DOM_ELEMENTS.coppyBtnLegal.addEventListener("click", copyText);

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
    social: DOM_ELEMENTS.social.value,
    nombreComercial: DOM_ELEMENTS.nombreComercial.value,
    cif: DOM_ELEMENTS.cif.value,
    direccion: DOM_ELEMENTS.direccion.value,
    email: DOM_ELEMENTS.email.value,
    website: DOM_ELEMENTS.website.value,
    fecha: DOM_ELEMENTS.fecha.value,
  };
  console.log(`Data saved in OBJ_DATA_TEMP, ${OBJ_DATA_TEMP}`);
  // 2.3 Check if all the fields are filled
  if (Object.values(OBJ_DATA_TEMP).some((value) => value === "")) {
    console.log("Please fill all the fields");
    return;
  }
  // 2.4 If all the fields are filled, we save the data in OBJ_DATA and generateDocument is called
  OBJ_DATA = OBJ_DATA_TEMP;
  generateDocument();
};
// 2.1 Add event listener to the button generate to call hanndelGenerate
DOM_ELEMENTS.btnGenerate.addEventListener("click", handleBtnGenerate);

// 3. When the Data is saven in the global object OBJ_DATA, we generate the legal document
async function generateDocument() {
  //  3.1 We create container with de data form MD documents and the function convertMD to remplace and print the data
  const contentPrivacidad = await convertMD(politicaPrivacidad, OBJ_DATA);
  const contentLegal = await convertMD(avisoLegal, OBJ_DATA);

  const containerPrivacidad = DOM_ELEMENTS.txtTogglePrivacidad;
  const containerLegal = DOM_ELEMENTS.txtToggleLegal;

  containerPrivacidad.innerText = "";
  containerPrivacidad.appendChild(contentPrivacidad);
  containerLegal.innerText = "";
  containerLegal.appendChild(contentLegal);
}

// 3.2 Reset for the inputs and the global object OBJ_DATA
