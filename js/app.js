/*
 * Popup Legal
 */
function popupLegal() {
  var btnAbrirPopup = document.getElementById("abrirPopup");
  var popup = document.getElementById("aviso-legal_popup");
  var btnCerrarPopup = document.getElementById("cerrarPopup");

  btnAbrirPopup.addEventListener("click", function (event) {
    popup.style.display = "block";
  });
  btnCerrarPopup.addEventListener("click", function (event) {
    popup.style.display = "none";
  });
}
popupLegal()
//
/*
 * Generar textos legales
 */
function legalPage() {
  var guardar = document.getElementById("input-guardar");
  var reset = document.getElementById("input-reset");
  var copiarPolitica = document.getElementById("btn-copiar-Politica");
  var copiarAviso = document.getElementById("btn-copiar-Aviso");

  guardar.addEventListener("click", function (event) {
    event.preventDefault(); // Evitamso que se envie formulario por defecto.

    var social = document.getElementById("input-social").value;
    var comercial = document.getElementById("input-comercial").value;
    var cif = document.getElementById("input-cif").value;
    var direccion = document.getElementById("input-direccion").value;
    var email = document.getElementById("input-email").value;
    var website = document.getElementById("input-website").value;
    var fecha = document.getElementById("input-fecha").value;

    var txtSocialElements = document.querySelectorAll(".txt-social");
    txtSocialElements.forEach(function (element) {
      element.textContent = social;
    });

    var txtComercialElements = document.querySelectorAll(".txt-comercial");
    txtComercialElements.forEach(function (element) {
      element.textContent = comercial;
    });

    var txtCifElements = document.querySelectorAll(".txt-cif");
    txtCifElements.forEach(function (element) {
      element.textContent = cif;
    });

    var txtDireccionElements = document.querySelectorAll(".txt-direccion");
    txtDireccionElements.forEach(function (element) {
      element.textContent = direccion;
    });

    var txtEmailElements = document.querySelectorAll(".txt-email");
    txtEmailElements.forEach(function (element) {
      element.textContent = email;
    });

    var txtWebsiteElements = document.querySelectorAll(".txt-website");
    txtWebsiteElements.forEach(function (element) {
      element.textContent = website;
    });

    var txtFechaElements = document.querySelectorAll(".txt-fecha");
    txtFechaElements.forEach(function (element) {
      element.textContent = fecha;
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
  var reset = document.getElementById("input-reset");

  reset.addEventListener("click", function (event) {
    event.preventDefault(); // Evitamso que se envie formulario por defecto.
    //Valor de los inputs
    var inputSocial = document.getElementById("input-social");
    var inputComercial = document.getElementById("input-comercial");
    var inputCif = document.getElementById("input-cif");
    var inputDireccion = document.getElementById("input-direccion");
    var inputEmail = document.getElementById("input-email");
    var inputWebsite = document.getElementById("input-website");
    //Reset Valor de los inputs
    inputSocial.value = "";
    inputComercial.value = "";
    inputCif.value = "";
    inputDireccion.value = "";
    inputEmail.value = "";
    inputWebsite.value = "";

    // Valor de los textos de preview
    var txtSocial = document.querySelector(".txt-social");
    var txtComercial = document.querySelector(".txt-comercial");
    var txtCif = document.querySelector(".txt-cif");
    var txtDireccion = document.querySelector(".txt-direccion");
    var txtEmail = document.querySelector(".txt-email");
    var txtWebsite = document.querySelector(".txt-website");
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
  var politica = document.getElementById("politica-texto");
  var aviso = document.getElementById("aviso-texto");
  var btnPolitica = document.getElementById("btn-menu-politica");
  var btnAviso = document.getElementById("btn-menu-aviso");

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
