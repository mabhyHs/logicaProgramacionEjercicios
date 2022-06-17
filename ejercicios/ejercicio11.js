/* Dado un texto y una busqueda censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-].

Si el texto o busqueda están vacíos mostrar "No puedes leer el texto y la busqueda" en el caso de que ambos parámetros no lleguen.
*/
function censored(text=false, search=false){
    let result = "";

    if(!text && !search){
        result = "No puedes leer el texto y la busqueda";

    }else if(!text && search){
        result = "No puedes leer el texto";

    }else if(text && !search){
        result = "No puedes hacer la búsqueda";

    }else if(text && search){
        result = text.replace(new RegExp(search,'gi'), "[-CENSURADO-]");
    }

    return result;

}

console.log(censored("Hola manola, hola", "hola"));

/*
- Funcion con dos parametros
- 

*/