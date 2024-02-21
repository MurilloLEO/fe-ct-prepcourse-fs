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
        } else objeto.arrayOrdenado[i]= contador;
            contador=1;
        
        
        
    }
    console.log(objeto)
    return objeto;
}


numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");