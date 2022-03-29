import {
    palabras,
    storage
} from "./agregarPalabra.js";

const guardar = document.querySelector("#guardar");
const cancelar = document.querySelector("#cancelar");
const frase = document.querySelector("#palabra");

guardar.addEventListener("click", (e) => {
    e.preventDefault();
    var valor = frase.value.toUpperCase();
    if (valor != "") {
        palabras.push(valor);
        console.log(palabras);
        storage();
        frase.value = "";
    }

    location.href = "./juego.html";
});

cancelar.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "../index.html";
});