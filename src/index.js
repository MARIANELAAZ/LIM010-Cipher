/* Acá va tu código */
const btn = document.getElementById('btn');
const laboratoria = document.getElementById("contrasena");
let sc1 = document.getElementById("screen-1");
let sc2 = document.getElementById("screen-2");
btn.addEventListener('click', entrar);

function entrar() {
  if (laboratoria.value ==="laboratoria") {
    sc1.style.display = 'none';
    sc2.style.display = 'block';
  }else {
    console.log("Incorrecto");
  }
};
