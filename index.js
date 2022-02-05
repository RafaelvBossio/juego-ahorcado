var iniciar = document.querySelector("#iniciar");
var agregar = document.querySelector("#agregar");

iniciar.addEventListener("click", function(event){
    event.preventDefault();

    location.href = "./pages/juego.html";
});

agregar.addEventListener("click", function(event){
    event.preventDefault();

    location.href = "./pages/agregar.html";
});