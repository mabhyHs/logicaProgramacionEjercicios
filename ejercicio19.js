/*Dado un array de objetos de peliculas(titulo, director, vista) mostrar todas las películas indicando cuál has visto y cuál no
Ejemplo:
misPeliculas(peliculas)
Devuelve:
Ya has visto: "El señor de los anillos de Peter Jackson"
Te falta por ver: "La liga de la justicia de Zack Snyder"

Como Hacerlo:
-Crear array de objetos
-Crear la funcion para recorrer y mostrar
*/
function myMovies(movies){
    for(movie of movies){
        let show =`"${movie.titulo} de ${movie.director}"`;

        if(movie.vista){
            console.log("Ya has visto:", show);
        }else{
            console.log("Te falta por ver:", show);

        }
    }
    return movies;
}


const moviesColection =[
    {titulo: "El señor de los anillos",
     director: "Peter Jackson",
     vista: true   
    },
    {titulo: "La liga de la justicia",
     director: "Zack Snyder",
     vista: false   
    },
     {titulo: "Los vengadores: Endgame",
      director: "Joe Russo",
      vista: false   
    },
     {titulo: "Batman vs Superman",
      director: "Zack Snyder",
      vista: true 
    }
];
myMovies(moviesColection);


