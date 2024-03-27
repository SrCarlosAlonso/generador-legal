function legalPage() {
  var guardar = document.getElementById("input-guardar");

  guardar.addEventListener("click", function () {
    var social = document.getElementById("input-social").value; 
    var comercial = document.getElementById("input-comercial").value; 
    var cif = document.getElementById("input-cif").value; 
    var direccion = document.getElementById("input-direccion").value; 
    var email = document.getElementById("input-email").value; 
    var website = document.getElementById("input-website").value; 

    // Actualiza los elementos span con la clase correspondiente
    var txtSocialElements = document.querySelectorAll(".txt-social");
    txtSocialElements.forEach(function(element) {
      element.textContent = social;
    });

    var txtComercialElements = document.querySelectorAll(".txt-comercial");
    txtComercialElements.forEach(function(element) {
      element.textContent = comercial;
    });

    var txtCifElements = document.querySelectorAll(".txt-cif");
    txtCifElements.forEach(function(element) {
      element.textContent = cif;
    });

    var txtDireccionElements = document.querySelectorAll(".txt-direccion");
    txtDireccionElements.forEach(function(element) {
      element.textContent = direccion;
    });

    var txtEmailElements = document.querySelectorAll(".txt-email");
    txtEmailElements.forEach(function(element) {
      element.textContent = email;
    });

    var txtWebsiteElements = document.querySelectorAll(".txt-website");
    txtWebsiteElements.forEach(function(element) {
      element.textContent = website;
    });
  });
}

legalPage();
//
const copiarContenido = async () => {
  let texto = document.getElementById('legalPrivacidad').innerText;
  try {
    await navigator.clipboard.writeText(texto);
    console.log('Contenido copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}
