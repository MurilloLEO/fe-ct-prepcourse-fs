function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var multiplicar =[];
  for(var i=0;i<=10;i++){
    multiplicar.push(6*i);
  }
  return multiplicar;
}

module.exports = tablaDelSeis;
