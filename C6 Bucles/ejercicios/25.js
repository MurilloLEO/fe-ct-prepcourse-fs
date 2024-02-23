function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   //var stringRevez="";
   //for(var i=string.length -1; i>=0 ; i--){
   //   stringRevez=stringRevez + string[i] ;
   //} if( string===stringRevez) return true;
   //else return false;
   var invertido=string.split("").reverse().join("")

   return string===invertido;

}

module.exports = esPalindromo;
