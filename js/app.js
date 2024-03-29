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
 * Generar textos legales
 */
function legalPage() {
  const guardar = document.getElementById("input-guardar");
  const reset = document.getElementById("input-reset");
  const copiarPolitica = document.getElementById("btn-copiar-Politica");
  const copiarAviso = document.getElementById("btn-copiar-Aviso");

  guardar.addEventListener("click", function (event) {
    event.preventDefault(); // Evitamos que se envie formulario por defecto.

    const generadorLegal = {
      social: document.getElementById("input-social").value,
      comercial: document.getElementById("input-comercial").value,
      cif: document.getElementById("input-cif").value,
      direccion: document.getElementById("input-direccion").value,
      email: document.getElementById("input-email").value,
      website: document.getElementById("input-website").value,
      fecha: document.getElementById("input-fecha").value,
    };
    
    let previewLegal = {
      txtSocial: document.querySelectorAll(".txt-social"),
      txtComercial: document.querySelectorAll(".txt-comercial"),
      txtCif: document.querySelectorAll(".txt-cif"),
      txtDireccion: document.querySelectorAll(".txt-direccion"),
      txtEmail: document.querySelectorAll(".txt-email"),
      txtWebsite: document.querySelectorAll(".txt-website"),
      txtFecha: document.querySelectorAll(".txt-fecha"),
    };

    previewLegal.txtSocial.forEach(function (element) {
      element.textContent = generadorLegal.social;
    });

    previewLegal.txtComercial.forEach(function (element) {
      element.textContent = generadorLegal.comercial;
    });

    previewLegal.txtCif.forEach(function (element) {
      element.textContent = generadorLegal.cif;
    });

    previewLegal.txtDireccion.forEach(function (element) {
      element.textContent = generadorLegal.direccion;
    });

    previewLegal.txtEmail.forEach(function (element) {
      element.textContent = generadorLegal.email;
    });

    previewLegal.txtWebsite.forEach(function (element) {
      element.textContent = generadorLegal.website;
    });

    previewLegal.txtFecha.forEach(function (element) {
      element.textContent = generadorLegal.fecha;
    });

    //Activamos el boton de reset y el boton copiar
    reset.removeAttribute("disabled");
    copiarPolitica.removeAttribute("disabled");
    copiarPolitica.style.opacity = "1";
    copiarPolitica.style.cursor = "pointer";
    copiarAviso.removeAttribute("disabled");
    copiarAviso.style.opacity = "1";
    copiarAviso.style.cursor = "pointer";
  });
}
legalPage();
//

/*
 * Boton de reset
 */
function resetDatos() {
  const reset = document.getElementById("input-reset");

  reset.addEventListener("click", function (event) {
    event.preventDefault(); // Evitamso que se envie formulario por defecto.
    //Valor de los inputs
    const inputSocial = document.getElementById("input-social");
    const inputComercial = document.getElementById("input-comercial");
    const inputCif = document.getElementById("input-cif");
    const inputDireccion = document.getElementById("input-direccion");
    const inputEmail = document.getElementById("input-email");
    const inputWebsite = document.getElementById("input-website");
    const inputFecha = document.getElementById("input-fecha");

    //Reset Valor de los inputs
    inputSocial.value = "";
    inputComercial.value = "";
    inputCif.value = "";
    inputDireccion.value = "";
    inputEmail.value = "";
    inputWebsite.value = "";
    inputFecha.value = "";

    // Valor de los textos de preview
    const txtSocial = document.querySelector(".txt-social");
    const txtComercial = document.querySelector(".txt-comercial");
    const txtCif = document.querySelector(".txt-cif");
    const txtDireccion = document.querySelector(".txt-direccion");
    const txtEmail = document.querySelector(".txt-email");
    const txtWebsite = document.querySelector(".txt-website");
    // Reset de los textos de preview
    txtSocial.textContent = "";
    txtComercial.textContent = "";
    txtCif.textContent = "";
    txtDireccion.textContent = "";
    txtEmail.textContent = "";
    txtWebsite.textContent = "";
  });
}
resetDatos();
//

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
