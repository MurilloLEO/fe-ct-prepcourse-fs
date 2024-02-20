function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  var resultado = objetoUsuario.posts.reduce(function(acum,item){
    return acum= acum + item.likes;
  },0)
  
  return resultado;
}

const user = {
  usernombre: 'Jhon Doe',
  password: 'JavaScript es genial!',
  posts: [
    {
      id: '1',
      title: 'Aventuras en JS!',
      likes: 10,
    },
    {
      id: '2',
      title: 'Soy Henry!',
      likes: 100,
    },
    {
      id: '3',
      title: 'Qué es un JavaScript?',
      likes: 35,
    },
    {
      id: '4',
      title: 'JS Objects for Dummies',
      likes: 42,
    },
    {
      id: '5',
      title: 'Educación online',
      likes: 99,
    },
  ],
};

sumarLikesDeUsuario(user);


module.exports = sumarLikesDeUsuario;
