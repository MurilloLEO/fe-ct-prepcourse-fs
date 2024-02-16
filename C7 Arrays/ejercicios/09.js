function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let indiceAleatorio = Math.floor(Math.random() * array.length);
  
  // Devolver el elemento en el índice aleatorio
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
