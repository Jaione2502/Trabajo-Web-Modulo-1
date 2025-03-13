document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let nameError = document.getElementById("nameError");
    let messageError = document.getElementById("messageError");
    let emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (name === "") {
      nameError.textContent = "Por favor, introduce tu nombre.";
      valid = false;
    }

    if (!emailIsValid(email)) {
      emailError.textContent =
        "Por favor, introduce un correo electrónico válido.";
        valid = false;
    }


    if (message === "") {
      messageError.textContent = "Por favor, introduce un mensaje.";
      valid = false;
    }

    alert("Gracias por tu mensaje. Le escribiremos en breve.");

    document.getElementById("contactForm").reset();
  });

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
