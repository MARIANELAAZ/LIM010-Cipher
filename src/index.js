/* Acá va tu código */
const btn = document.getElementById('btn');
const laboratoria = document.getElementById("contrasena");
const sc1 = document.getElementById("screen-1");
const sc2 = document.getElementById("screen-2");
const sc3 = document.getElementById("intento3")
let numeroDeIntentos = 0;

const entrar = () => {
  btn.addEventListener('click', entrar);

  if (laboratoria.value ==="LABORATORIA") {
    sc1.style.display = 'none';
    sc2.style.display = 'block';
   }
}
 else {
    sc1.style.display = 'block';
    sc2.style.display = 'none'
    document.getElementById('errorpass').innerHTML="Inténtalo nuevamente"
    console.log("CORRECTO");
    numeroDeIntentos++
    if(numeroDeIntentos === 3) {
      sc1.style.display = 'none';
      sc2.style.display = 'none';
    }

}

};
