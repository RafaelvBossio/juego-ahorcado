var errores = document.querySelector("#errores");
errores.classList.add("invisible");

var guardar = document.querySelector("#guardar");
var cancelar = document.querySelector("#cancelar");

guardar.addEventListener("click", function(event){
    event.preventDefault();

    location.href = "../pages/juego.html";
});

cancelar.addEventListener("click", function(event){
    event.preventDefault();

    location.href = "../index.html";
});