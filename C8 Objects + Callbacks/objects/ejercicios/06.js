const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  contador=0;
  //for (const key in objeto){
  //    contador++;
      
  //  }
  //  return contador

  return Object.keys(objeto).length;
  
};

module.exports = contarPropiedades;
