function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(var i=0;i<array.length;i++){
    if(array[i].length>4){
      return array[i];
      
    } 
  
  }   
  return undefined; 
}

//var array1=["pedro","leo","alberto","roberto"];
//var primerStringLargo = obtenerPrimerStringLargo(array1);

//console.log(array1);
//console.log(primerStringLargo);
  

module.exports = obtenerPrimerStringLargo;
