function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var resultado=1;
  for (let i = a; i <= b; i++) {
    resultado=resultado*i;
    if(resultado===-0){
      return 0;
    }
    
  }return resultado;
}

module.exports = productoEntreNúmeros;