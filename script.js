const character = document.querySelector("#post")

function createPost (name , message, imageURL){
    return `
  <div class="bloque">
  <h1><img class="image" src="${imageURL}" alt=""></h1>
  <h2>${name}</h2>
  <p>${message}</p>
  </div>
  `}

for(i=1 ; i <= 5  ; i++){ 
    character.innerHTML+= createPost(`Character ${i}`,`Esta es mi publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`,`https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`)
    }