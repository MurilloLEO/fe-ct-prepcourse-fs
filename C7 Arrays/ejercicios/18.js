function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  //var suma=0;
  //for(var i=0; i<resultadosTest.length; i++){
    //suma+=resultadosTest[i];
  //}
  //return suma/resultadosTest.length;
  
  suma=resultadosTest.reduce(function(acumulador,numero){
    return acumulador+numero;
  },0)
  return suma/resultadosTest.length;
}

module.exports = promedioResultadosTest;
