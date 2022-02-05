var nuevo = document.querySelector("#nuevo-juego");
var desistir = document.querySelector("#desistir");
var img = document.querySelector("#img");
var ul2 = document.querySelector("#ul2");
var secreta = document.querySelector("#secreta");
var errores = document.querySelector("#errores");
var letra = document.querySelector("#letra");
var palabras = [
    "ALURA",
    "JAVASCRIPT",
    "CSS",
    "HTML",
    "ORACLE",
    "RAFAEL",
    "PROGRAMACION",
    "VIAJES",
    "SUEÑOS",
];
var elegida = palabraSecreta();
console.log(elegida);

function palabraSecreta() {
  var randon = Math.floor(Math.random() * palabras.length);
  var elegida = palabras[randon];
  
  return elegida;
}

function crearGion(tipo, texto) {
  var li = document.createElement(tipo);
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  p1.textContent = texto.toUpperCase();
  var img = document.createElement("img");
  img.src = "../img/_.png";
  p2.appendChild(img);
  li.appendChild(p1);
  li.appendChild(p2);
  return li;
}

letra.addEventListener("change", function (event) {
  event.preventDefault();

  ul2.appendChild(crearGion("li", this.value));
  this.value = "";
});

nuevo.addEventListener("click", function (event) {
  event.preventDefault();

  location.href = "../pages/juego.html";
});

desistir.addEventListener("click", function (event) {
  event.preventDefault();

  var salir = confirm("¿deceas salir del juego?");

  if (salir == true) {
    location.href = "../index.html";
  }
});

/*
setTimeout(function(){
    img.src = "https://i.ibb.co/rpr10c5/agua2.png";
}, 900);

setTimeout(function(){
    img.src = "https://i.ibb.co/hdTgxVt/agua3.png";
}, 1900);

setTimeout(function(){
    img.src = "https://i.ibb.co/ZYLM31Y/agua4.png";
}, 2900);

setTimeout(function(){
    img.src = "https://i.ibb.co/2YfqNKc/agua5.png";
}, 3900);

setTimeout(function(){
    img.src = "https://i.ibb.co/D71zLPP/agua6.png";
}, 4900);

setTimeout(function(){
    img.src = "https://i.ibb.co/C1D9M12/aguaf.png";
}, 5900);

//setTimeout(function(){alert("Has Perdido");},6500)
*/
