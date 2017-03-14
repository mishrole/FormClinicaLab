var element = document.querySelector(".formulario");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  imprimirPaciente();
});
