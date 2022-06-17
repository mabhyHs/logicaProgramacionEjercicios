/* Dados dos arrays, devolver un array con solo los elementos comunes entre ambos*/
function matchingArrays(array1, array2){

    const filtered = array1.filter(element => {
        return array2.includes(element)
    });

    return filtered;    
}
console.log(matchingArrays([1,2,5,8,9,6], [9,8,6,3,2,1]));
/*
- Funcion que reciba ambos arrays
- Filtrar array y evaluar con una condicion
- Devolver el array nuevo
filter devuelve un nuevo array con todos los elementos que coincidan con la condicion que seteemos, includes determina si una cadena de texto se encuentra o no devolviendo true o false
*/