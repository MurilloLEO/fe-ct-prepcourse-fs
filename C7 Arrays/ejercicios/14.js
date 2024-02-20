function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  //var contador=0
  //for(var i=0; i<array.length;i++){
  //  if(array[i]>10){
  //    contador=contador + 1;
  //  }
  //}
  //return contador;
  var contador= array.filter(numero => numero>10);

  return contador.length;

}

module.exports = contarElementosMayoresA10;
