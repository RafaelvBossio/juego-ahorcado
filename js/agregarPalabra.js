export let palabras = JSON.parse(localStorage.getItem("palabras")) || [];

if (palabras.length <= 3) {
  let fraces = ["ALURA", "ORACLE", "WEB", "PROGRAMACION"];
  fraces.forEach(item => {
    palabras.push(item);
  })
}

export function storage() {
  localStorage.setItem("palabras", JSON.stringify(palabras));
}
storage();