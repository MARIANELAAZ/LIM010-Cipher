/* Acá va tu código */
const btn = document.getElementById("btn");
const screen1 = document.getElementById("screen1");
const screen2= document.getElementById("screen2");
const screen3 = document.getElementById("screen3"); /*error pantalla*/
let intentos = 0;
/*hide esconder*/
btn.addEventListener("click", () => {
const contraseña = document.getElementById("contraseña");
const password = contraseña.value;
  if(password ==="LABORATORIA") {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    screen3.classList.add("hide");
    btn.classList.add("hide");
 }
else {
  intentos++
    alert("numeroDeIntentos:"+intentos);
  if(intentos===3){
      screen1.classList.add("hide");
      screen2.classList.add("hide");
      screen3.classList.remove("hide");
      btn.classList.add("hide");
     }
}
});
/* Cifrado */
   let offset= document.getElementById("offset");
   let tex1= document.getElementById("tex1");
   let tex2= document.getElementById("tex2");
   let buttonCifrado= document.getElementById("buttonCifrado");
   let buttonDecifrado= document.getElementById("buttonDecifrado");

   buttonCifrado.addEventListener("click", () => {
     let offset1= offset.value;
     let mensaje = tex1.value;
     tex2.value= cipher.encode(offset1, mensaje);
   });

/*decifrado*/
buttonDecifrado.addEventListener("click", () => {
  let offset1= offset.value;
  let mensaje = tex1.value;
  tex2.value= cipher.decode(offset1, mensaje);
});
