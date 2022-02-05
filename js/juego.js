var img = document.querySelector("#img");

var nuevo = document.querySelector("#nuevo-juego");
var desistir = document.querySelector("#desistir");

nuevo.addEventListener("click", function(event){
    event.preventDefault();

    location.href = "../pages/juego.html";
});

desistir.addEventListener("click", function(event){
    event.preventDefault();

    var salir = confirm("¿deceas salir del juego?");

    if (salir == true){
        location.href = "../index.html";
    }
});

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
