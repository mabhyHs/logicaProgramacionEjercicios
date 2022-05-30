/* Dado un numero entero inviertelo y devuelve de nuevo el entero */
function invertNumber(num){
    let numReverse = parseInt(num
                                .toString() //pasamos a cadena
                                .split('') //separamos
                                .reverse()// damos vuelta
                                .join('') //unimos
                                );
    return numReverse;
}

console.log(invertNumber(65));


/*
- Funcion que reciba un numero
- convertir el numero a string
- darle la vuelta
-  unir el array en un string
- convertir el string en entero
*/