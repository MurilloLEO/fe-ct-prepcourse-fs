function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  console.log(pasarUsuarioAPremium);
  objetoMuchosUsuarios.array.forEach(function(usuario){
    console.log(usuario);
    usuario.esPremium= true;
  })

}


const users = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
];

pasarUsuarioAPremium(users);




module.exports = pasarUsuarioAPremium;
