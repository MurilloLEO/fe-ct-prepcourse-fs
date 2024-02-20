function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      resultado.push(array[i].toUpperCase()); // Convierte el string a mayúsculas y lo agrega al nuevo array.
    } else {
      resultado.push(array[i]); // Si el elemento no es un string, lo agrega al nuevo array sin modificar.
    }
  }
  return resultado;
}

module.exports = convertirStringAMayusculas;
