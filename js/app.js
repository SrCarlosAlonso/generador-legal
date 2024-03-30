/*
 * Popup Legal
 */
function popupLegal() {
  const btnAbrirPopup = document.getElementById("abrirPopup");
  const popup = document.getElementById("aviso-legal_popup");
  const btnCerrarPopup = document.getElementById("cerrarPopup");

  btnAbrirPopup.addEventListener("click", function (event) {
    popup.style.display = "block";
  });
  btnCerrarPopup.addEventListener("click", function (event) {
    popup.style.display = "none";
  });
}
popupLegal();
//

/*
 * Formulario legal y print de datos
 */

//Creamos un Listener para que generarDatos se lanze solo despues
//el DOM se termine de cargar.
document.addEventListener("DOMContentLoaded", function () {
  generarDatos();
});

// Creamos un listener para el boton de envio
function generarDatos() {
  const btnExportar = document.getElementById("input-guardar");

  btnExportar.addEventListener("click", function (event) {
    event.preventDefault();

    extraerDatos();
  });
}
//Extraemos datos y creamos la relacion.
function extraerDatos() {
  const inputsForm = {
    social: document.getElementById("input-social").value,
    comercial: document.getElementById("input-comercial").value,
    cif: document.getElementById("input-cif").value,
    direccion: document.getElementById("input-direccion").value,
    email: document.getElementById("input-email").value,
    website: document.getElementById("input-website").value,
    fecha: document.getElementById("input-fecha").value,
  };

  const printInputs = {
    txtSocial: document.querySelectorAll(".txt-social"),
    txtComercial: document.querySelectorAll(".txt-comercial"),
    txtCif: document.querySelectorAll(".txt-cif"),
    txtDireccion: document.querySelectorAll(".txt-direccion"),
    txtEmail: document.querySelectorAll(".txt-email"),
    txtWebsite: document.querySelectorAll(".txt-website"),
    txtFecha: document.querySelectorAll(".txt-fecha"),
  };

  function relacionVariable(origen, destino) {
    printInputs[origen].forEach(function (element) {
      element.textContent = destino;
    });
  }
  // Funcion varible para la relaciones de inputs y preview.
  relacionVariable("txtSocial", inputsForm.social);
  relacionVariable("txtComercial", inputsForm.comercial);
  relacionVariable("txtCif", inputsForm.cif);
  relacionVariable("txtDireccion", inputsForm.direccion);
  relacionVariable("txtEmail", inputsForm.email);
  relacionVariable("txtWebsite", inputsForm.website);
  relacionVariable("txtFecha", inputsForm.fecha);

  copyResetDatos();
}
//

/*
 * Borrar y copiar datos
 * Activamos el boton de reset y el boton copiar
 */
function copyResetDatos() {
  const reset = document.getElementById("input-reset");
  const copiarPolitica = document.getElementById("btn-copiar-Politica");
  const copiarAviso = document.getElementById("btn-copiar-Aviso");

  //Activamos el boton de reset y el boton copiar
  reset.removeAttribute("disabled");
  copiarPolitica.removeAttribute("disabled");
  copiarPolitica.style.opacity = "1";
  copiarPolitica.style.cursor = "pointer";
  copiarAviso.removeAttribute("disabled");
  copiarAviso.style.opacity = "1";
  copiarAviso.style.cursor = "pointer";
}
//

/*
 * Validando input form
 */
const form = document.getElementById("formLegal");
const email = document.getElementById("input-email");
const emailError = document.getElementById("emailError");
const website = document.getElementById("input-website");
const websiteError = document.getElementById("websiteError");

//Validar email
email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "Válido";
  } else {
    showError(email, emailError);
  }
});

//Validar website
website.addEventListener("input", () => {
  if (website.validity.valid) {
    websiteError.textContent = "Válido";
  } else {
    showError(website, websiteError);
  }
});

form.addEventListener("submit", (event) => {
  // Validar email
  if (!email.validity.valid) {
    showError(email, emailError);
    event.preventDefault();
  }

  // Validar website
  if (!website.validity.valid) {
    showError(website, websiteError);
    event.preventDefault();
  }
});

function showError(inputElement, errorElement) {
  switch (inputElement.id) {
    case "input-email":
      if (inputElement.validity.valueMissing) {
        errorElement.textContent = "Debes introducir un correo electrónico.";
      } else if (inputElement.validity.typeMismatch) {
        errorElement.textContent =
          "El valor introducido debe ser una dirección de correo electrónico válida.";
      }
      break;
    case "input-website":
      if (inputElement.validity.valueMissing) {
        errorElement.textContent = "Debes introducir una dirección web.";
      } else if (inputElement.validity.typeMismatch) {
        errorElement.textContent =
          "El valor introducido debe ser una URL válida.";
      }
      break;
    default:
      errorElement.textContent = "Se ha producido un error.";
  }
  errorElement.classList.add("error", "active");
}

/*
 * Boton de copiar textos legales
 */
const copyPolitica = () => {
  let texto = document.getElementById("legalPrivacidad").innerText;
  navigator.clipboard.writeText(texto);

  document.getElementById("copySuccess-1").style.display = "block";
  document.getElementById("copySuccess-1").classList.add("fade-in");

  setTimeout(function () {
    document.getElementById("copySuccess-1").classList.remove("fade-in");
    document.getElementById("copySuccess-1").classList.add("fade-out");
  }, 2500);

  setTimeout(function () {
    document.getElementById("copySuccess-1").style.display = "none";
  }, 3000);
};
const copyAviso = () => {
  let texto = document.getElementById("legalAviso").innerText;
  navigator.clipboard.writeText(texto);

  document.getElementById("copySuccess-2").style.display = "block";
  document.getElementById("copySuccess-2").classList.add("fade-in");

  setTimeout(function () {
    document.getElementById("copySuccess-2").classList.remove("fade-in");
    document.getElementById("copySuccess-2").classList.add("fade-out");
  }, 2500);

  setTimeout(function () {
    document.getElementById("copySuccess-2").style.display = "none";
  }, 3000);
};
//

/*
 * Toggle menu
 */
function menuLegal() {
  const politica = document.getElementById("politica-texto");
  const aviso = document.getElementById("aviso-texto");
  const btnPolitica = document.getElementById("btn-menu-politica");
  const btnAviso = document.getElementById("btn-menu-aviso");

  //El orden en el que se pasan los elementos determina si es visible o no.
  function toggleVisibilidad(elementoVisible, elementoOculto) {
    elementoVisible.style.display = "block";
    elementoOculto.style.display = "none";
  }
  /*
   * Añadimos un listener en todo el documento para controlar el cick en los botones,
   * Si el btnPolitica es el target se aplica la funcion de toggleVisibilidad
   * a siguiendo el orden que se le pasa.
   */
  document.addEventListener("click", function (event) {
    if (event.target === btnPolitica) {
      toggleVisibilidad(politica, aviso);
      btnPolitica.style.background = "var(--color-dark-hover)";
      btnPolitica.style.color = "var(--background-white-100)";
      btnAviso.style.color = "#f6fbff73";
      btnAviso.style.background = "none";
    } else if (event.target === btnAviso) {
      toggleVisibilidad(aviso, politica);
      btnAviso.style.background = "var(--color-dark-hover)";
      btnAviso.style.color = "var(--background-white-100)";
      btnPolitica.style.color = "#f6fbff73";
      btnPolitica.style.background = "none";
    }
  });
}
menuLegal();
