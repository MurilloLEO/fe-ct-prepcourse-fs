function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   var textoRevez= "";
   for(i=texto.length -1; i>=0; i--) {
      textoRevez=textoRevez + texto[i];
   }
   return textoRevez;
}

module.exports = invertirTexto;
