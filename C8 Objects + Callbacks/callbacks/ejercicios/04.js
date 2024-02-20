function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var suma=0;
   for (var i=0; i<arrayOfNumbers.length;i++){
      suma= suma + arrayOfNumbers[i]; 
   }
   return cb(suma);

}
//otra forma es con reduce:
//var resultado= arrayOfNumber.reduce(function(acumulador,num){
//   return (acumulador= acumulador + num);
//});
// return cb(resultado);
module.exports = sumarArray;
