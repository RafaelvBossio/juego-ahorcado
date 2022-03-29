import {
  palabras
} from "./agregarPalabra.js";

const canvas = document.querySelector("#Canvas");
var nuevo = document.querySelector("#nuevo");
var desistir = document.querySelector("#desistir");
var texto = document.querySelector("#texto");
var pantalla = document.querySelector("canvas");
var ctx = pantalla.getContext("2d"); // necesario para poder empezar a dibujar en el canvas
let palabra = palabras[elegida()];
var incorrectas = [];
var errores = 0;
var win = palabra.split("");
var frase = palabra.split("");

console.log(win);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}


canvas.setAttribute("width", 1200);
canvas.setAttribute("height", 700);


function giones(cantidad, ma, mb, inicio, fin) {
  for (var i = 0; i < cantidad; i++) {
    ctx.strokeStyle = "tomato";
    ctx.beginPath();
    ctx.moveTo(ma, mb);
    ctx.lineTo(inicio, fin);
    ctx.stroke();
    ma += 50;
    inicio += 50;
  }
}
giones(palabra.length, 600, 600, 630, 600);

function elegida() {
  var random = Math.floor(Math.random() * palabras.length);
  return random;
}

var existe = false;
var considencias = [];
let continuar = frase;
let num = 0;

console.log(num);

function auth(opc) {
  for (var i = 0; i < palabra.length; i++) {
    if (win[i] == opc) {
      continuar[i] = true;
      num += 1;
      if (continuar[i] == true && continuar.length == num) {
        ganaste();
      }
    }
  }
}

function correcta(opc) {
  let posicion = [];
  for (var i = 0; i < palabra.length; i++) {
    var esta = false;
    if (opc == palabra[i]) {
      posicion.push(i);
      dibujarLetra(palabra[i], 50.3 * i);
      existe = true;
      considencias.push(opc);
    }
  }
  return posicion;
}

function incorrecta(opc) {
  for (var i = 0; i < opc.length; i++) {
    dibujarErrores(opc[i], 20.5 * i);
  }
  if (!incorrectas.length == 7) {
    perdiste();
  } else {
    errores += 1;
    mal(errores);
  }
}

export function mal(errores) {
  var pantalla = document.querySelector("canvas");
  var ctx = pantalla.getContext("2d");

  if (errores >= 0) {
    /* Orca */
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 699);
    ctx.lineTo(220, 699);
    ctx.stroke();
    ctx.fill();
  }

  if (errores == 1) {
    /* Orca */
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(150, 700);
    ctx.fillRect(100, 50, 20, 700);
    ctx.stroke();
  }

  if (errores == 2) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(150, 700);
    ctx.fillRect(100, 50, 300, 20);
    ctx.stroke();
  }

  if (errores == 3) {
    /* cabeza */
    ctx.fillStyle = "black";
    ctx.fillStyle = "#DD9F98";
    ctx.beginPath();
    ctx.arc(410, 200, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  if (errores == 4) {
    /* Cuerpo */
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(400, 250);
    ctx.lineTo(400, 450);
    ctx.stroke();
  }

  if (errores == 5) {
    ctx.beginPath();
    ctx.moveTo(400, 450);
    ctx.lineTo(350, 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 450);
    ctx.lineTo(450, 600);
    ctx.stroke();
  }

  if (errores == 6) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(400, 250);
    ctx.lineTo(350, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 250);
    ctx.lineTo(450, 400);
    ctx.stroke();
  }

  if (errores == 7) {
    /* Cuerda */
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.fillRect(400, 50, 3, 100);
    ctx.stroke();

    perdiste();
    texto.disabled = true;
  }
}


function dibujarLetra(letra, distancia) {
  let x = 597 + distancia;
  ctx.textAlign = "left";
  ctx.fillStyle = "#0077B3";
  ctx.font = "small-caps bold 39px arial";
  ctx.fillText(letra, x, 590);
}

function dibujarErrores(letra, distancia) {
  let x = 605 + distancia;
  ctx.beginPath();
  ctx.fillStyle = "#A43747";
  ctx.textAlign = "left";
  ctx.font = "small-caps bold 17px arial";
  ctx.fillText(letra, x, 630);
  ctx.fill();
}


function perdiste() {
  ctx.textAlign = "left";
  ctx.strokeStyle = "tomato";
  ctx.font = "small-caps bold 45px arial";
  ctx.strokeText("Que mala suerte", 550, 410);

  ctx.textAlign = "left";
  ctx.fillStyle = "tomato";
  ctx.font = "small-caps bold 45px arial";
  ctx.fillText("has perdido", 600, 450);

  texto.classList.add("bye");
}

function ganaste() {
  ctx.textAlign = "left";
  ctx.strokeStyle = "#62C247";
  ctx.font = "small-caps bold 45px arial";
  ctx.strokeText("Felicidades", 550, 410);

  ctx.textAlign = "left";
  ctx.fillStyle = "#62C247";
  ctx.font = "small-caps bold 45px arial";
  ctx.fillText("has ganado", 600, 450);

  texto.classList.add("bye");
}

nuevo.addEventListener("click", function (event) {
  event.preventDefault();
  location.href = "../pages/juego.html";
});

canvas.addEventListener("click", () => {
  texto.focus();
});

desistir.addEventListener("click", function (event) {
  event.preventDefault();
  location.href = "../index.html";
});

texto.addEventListener("change", function () {
  let letra = this.value.toUpperCase();
  let bandera = correcta(letra);
  let ingresadas = [];
  ingresadas.push(letra);

  auth(letra);
  if (this.value != "") {
    correcta(letra);
    for (var i = 0; i < frase.length; i++) {
      if (frase[i] == letra) {
        win.push(letra);
        if (win.length == palabra.length) {
          ganaste();
        }
      }
    }
  }

  if (bandera.length == 0) {
    incorrectas.push(this.value);
    incorrecta(incorrectas);
  } else {}
  this.value = "";
});

document.addEventListener("dblclick", toggleFullScreen);