var errores = document.querySelector("#errores");
errores.classList.add("invisible");

var guardar = document.querySelector("#guardar");
var cancelar = document.querySelector("#cancelar");
var palabra = document.querySelector("#palabra");
var palabras = [];

function agregarPalabras(palabra) {
    palabras.push(palabra);
    console.log(cantidadPalabras());
  }

  function cantidadPalabras() {
    return palabras.length;
  }

guardar.addEventListener("click", function(event){
    event.preventDefault();

    agregarPalabras(palabra.textContent);
    cantidadPalabras();

    location.href = "../pages/juego.html";
});

cancelar.addEventListener("click", function(event){
    event.preventDefault();

    location.href = "../index.html";
});