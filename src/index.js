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
   let tex1=document.getElementById("tex1");
   let tex2=document.getElementById("tex2");
   let buttonCifrado=document.getElementById("buttonCifrado");
   let buttonDecifrado=document.getElementById("buttonDecifrado");

   buttonCifrado.addEventListener("click", () => {
     let offset1= offset.value;
     let mensaje = tex1.value;
     let mensajeFinal =  ""

     for (let i= 0; i < mensaje.length; i++) {
       let numeroAscii = mensaje.charCodeAt(i);
       if (numeroAscii >=65  && numeroAscii <=90){
       mensajeFinal += String.fromCharCode((numeroAscii-65+parseInt(offset1))%26+65);
     }
   else{
     mensajeFinal+= tex2 [i]; /*espacio*/
   }
 }
   tex2.value= mensajeFinal
   });

/*decifrado*/
