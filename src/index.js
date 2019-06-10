/* Acá va tu código */
const btn = document.getElementById("btn");
const contraseña = document.getElementById("contraseña")
const screen1 = document.getElementById("screen1");
const screen2= document.getElementById("screen2");
const screen3 = document.getElementById("screen3"); /*error pantalla*/
let intentos = 0;
/*hide esconder*/
btn.addEventListener("click", () => {
const contraseña = document.getElementById("contraseña")
const password = contraseña.value
  if(password ==="laboratoria") {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    screen3.classList.add("hide");
    btn.classList.add("hide");
 }
else {
  intentos++
    /*alert("numeroDeIntentos:"+intentos);*/
  if(intentos===3){
      screen1.classList.add("hide");
      screen2.classList.add("hide");
      screen3.classList.remove("hide");
      btn.classList.add("hide");
     }
}
});
