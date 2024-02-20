function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceDelMayor = 0;
  for( var i=0; i<array.length; i++){
    if( array[i]>array[indiceDelMayor]){
      indiceDelMayor= i
    }
  } 
  return indiceDelMayor;
}


module.exports = encontrarIndiceMayor;
