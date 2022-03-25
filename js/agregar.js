import { palabras, storage } from "./agregarPalabra.js";

const guardar = document.querySelector("#guardar");
const cancelar = document.querySelector("#cancelar");
const frase = document.querySelector("#palabra");

guardar.addEventListener("click", (e) => {
    e.preventDefault();
    var valor = frase.value.toUpperCase();
    palabras.push(valor);
    console.log(palabras);
    storage();
    frase.value = "";
});

cancelar.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "../index.html";
});