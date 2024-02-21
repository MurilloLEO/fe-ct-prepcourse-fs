/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arrayPadre=[];
    
  for(let propiedad in objeto){

      var array=[propiedad,objeto[propiedad]];
      arrayPadre.push(array);

    }

  return(arrayPadre);

}


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

    var arrayOrdenado = string.split("").sort();
    var contador = 1;
    objeto = {};

    for (let i = 0; i< arrayOrdenado.length; i++) {
        if(arrayOrdenado[i]===arrayOrdenado[i+1]){
            contador++
        } else { 
            objeto[arrayOrdenado[i]]= contador;
            contador=1;
            }
        
        
    }
    
    return objeto;



  

}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arrayMayusculas= [];
  var arrayMinusculas= []; 

  for (let letra of string) {
    if(letra===letra.toUpperCase()){
      arrayMayusculas.push(letra);

    } else arrayMinusculas.push(letra);
    
  }
    
  return arrayMayusculas.join("") + arrayMinusculas.join("");
}



function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  
  var arrayFrase= frase.split(" "); 
    

  var palabrasInvertidas= arrayFrase.map( palabra =>{
      return palabra.split("").reverse().join("");        
  })
  
  var fraseInvertida=palabrasInvertidas.join(" ");
  
  return fraseInvertida;


}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
 //var nuevoArray = numero.toString().split("");
    
  //var arrayCapicua= nuevoArray.slice().reverse()
    
  //if(nuevoArray.join("")===arrayCapicua.join("")){
    //    return "Es capicua";
  //}
    
//return "No es capicua";

let cadena = numero.toString();


let inicio = 0;
let fin = cadena.length - 1;


while (inicio < fin) {

  if (cadena[inicio] !== cadena[fin]) {
    
    return "No es capicua";
  }
  
  inicio++;
  fin--;
}


return "Es capicua"

}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var todosMinuscula= string.toLowerCase();
  var nuevoString="";

  for(var i=0; i<todosMinuscula.length;i++){
    if(todosMinuscula[i]!=="a" && todosMinuscula[i]!=="b" && todosMinuscula[i]!=="c"){
      nuevoString+=todosMinuscula[i];
    }
  }
  return nuevoString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  var nuevoArray= arrayOfStrings.slice().sort((a,b)=> a.length - b.length);

  return nuevoArray;

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  let interseccion = [];
  
  // Recorremos array1 y comprobamos si cada elemento está en array2
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      // Si el elemento está presente en array2, lo agregamos a la intersección
      interseccion.push(array1[i]);
    }
  }
  
  return interseccion;


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
