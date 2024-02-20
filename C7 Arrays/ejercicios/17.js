function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  //var Suma=0;
  //for(var i=0; i<arrayOfNums.length; i++){
    //suma=suma + arrayOfNums[i];
  //}
  //return suma;
  return arrayOfNums.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
}

module.exports = agregarNumeros;
