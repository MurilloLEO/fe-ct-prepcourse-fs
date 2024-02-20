function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var nuevoArray=[];
  array.forEach(function(elemento,indice) {
    nuevoArray.push(elemento*indice);
    
  });
  return nuevoArray;
}

module.exports = multiplicarElementosPorIndice;
