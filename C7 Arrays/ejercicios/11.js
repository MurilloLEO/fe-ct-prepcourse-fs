function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  //< array.length; i++) {
  //  arrayDuplicado.push(array[i] * 2); 
  //}
  //return arrayDuplicado;
  return array.map(function(numero){
    return numero*2;
  })
}

module.exports = duplicarElementos;
