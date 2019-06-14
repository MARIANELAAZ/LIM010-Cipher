window.cipher = {
  encode: (offset1, mensaje) => {
    let mensajeFinal =  "";
    for (let i= 0; i < mensaje.length; i++) {
      let numeroAscii = mensaje.charCodeAt(i);
      if (numeroAscii >=65  && numeroAscii <=90){
      mensajeFinal += String.fromCharCode((numeroAscii- 65 + parseInt(offset1)) %26 + 65);
    }
  else if(numeroAscii===32){
    mensajeFinal += " ";
    /*mensajeFinal+= mensaje[i]; /*espacio*/
  }
}
  return mensajeFinal;
},

  decode: (offset1, mensaje) => {
    ///* Acá va tu código que descifra*/
    let mensajeFinal =  "";
    let caraCifrado = " ";
    for (let i= 0; i < mensaje.length; i++) { /*recorre*/
     let numeroAscii = mensaje.charCodeAt(i); /*avanza en un*/
     if (numeroAscii >=65  && numeroAscii <=90) {
        caraCifrado = (numeroAscii-65-parseInt(offset1)) % 26 + 65;/*devuelve valor númerico*/
     if (caraCifrado <65) {
        caraCifrado = caraCifrado+26;
    }
      mensajeFinal+= String.fromCharCode(caraCifrado); /*devuelve cadena de valor*/

    } else {
      mensajeFinal+= mensaje[i];
    }
    }

  return mensajeFinal;
}
};
