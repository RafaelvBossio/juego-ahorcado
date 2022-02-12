var nuevo = document.querySelector("#nuevo");
var desistir = document.querySelector("#desistir");
var texto = document.querySelector("#texto");
var pantalla = document.querySelector("canvas");
var errores = 0;
var ctx = pantalla.getContext("2d"); // necesario para poder empezar a dibujar en el canvas
var palabras = [
  "ALURA",
  "ORACLE",
  "JAVASCRIPT",
  "LATAM",
  "PROGRAMACION",
  "HTML",
  "JUEGO",
  "RAFAEL",
  "MUNDO",
  "AGUA",
  "AMOR",
  "CRECIMIENTO",
  "ESPERANZA",
  "RESPETO",
  "UNION",
  "GRUPO",
];
var palabra = palabras[palabraElegida()];

function giones(cantidad) {
  var ma = 600;
  var mb = 600;
  var inicio = 630;
  var fin = 600;
  
  for(var i = 0; i < cantidad; i++) {
    ctx.beginPath();
    ctx.moveTo(ma, mb);
    ctx.lineTo(inicio, fin);
    ctx.stroke();

    ma += 45;
    inicio += 45;
  }
}

function palabraElegida(){
  var random = Math.floor((Math.random() * palabras.length));
  var elegida = palabras[random];
  return random;
}

var posicion = [];
var existe = false;
var noExiste  = false;


/*Falta terminar solo almacena las pociciones donde se encuentan las letras acertadas*/
function correcta(opc){

  for (var i = 0; i < palabra.length; i++){
    if (opc == palabra[i]){
      posicion.push(i);
      existe = true;
      console.log(palabra[i], i);
      console.log(posicion);
    }
  }
}

giones(palabra.length);

/* Orca */
fillStyle = "black";
ctx.beginPath();
ctx.moveTo(0, 750);
ctx.lineTo(1200, 750);
ctx.stroke();
ctx.fill();

setTimeout(function () {
  ctx.beginPath();
  ctx.moveTo(150, 750);
  ctx.fillRect(100, 50, 20, 700);
  ctx.stroke();
}, 1000);

setTimeout(function () {
  ctx.beginPath();
  ctx.moveTo(150, 750);
  ctx.fillRect(100, 50, 300, 20);
  ctx.stroke();
}, 2000);

/* Cuerda */
setTimeout(function () {
  ctx.beginPath();
  ctx.moveTo(400, 50);
  ctx.fillRect(400, 50, 3, 150);
  ctx.stroke();
}, 3000);

/* cabeza */
setTimeout(function () {
  ctx.fillStyle = "#DD9F98";
  ctx.beginPath();
  ctx.arc(410, 200, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}, 4000);

/* Cuerpo */
setTimeout(function () {
  ctx.beginPath();
  ctx.moveTo(400, 250);
  ctx.lineTo(400, 450);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 450);
  ctx.lineTo(350, 600);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 450);
  ctx.lineTo(450, 600);
  ctx.stroke();
}, 5000);

setTimeout(function () {
  ctx.beginPath();
  ctx.moveTo(400, 250);
  ctx.lineTo(350, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400, 250);
  ctx.lineTo(450, 400);
  ctx.stroke();
}, 6000);

nuevo.addEventListener("click", function (event) {
  event.preventDefault();
  location.href = "../pages/juego.html";
});

desistir.addEventListener("click", function (event) {
  event.preventDefault();
  location.href = "../index.html";
});

texto.addEventListener("change", function(){
  var esta = this.value.toUpperCase();
  correcta(esta);
  this.value = "";
})