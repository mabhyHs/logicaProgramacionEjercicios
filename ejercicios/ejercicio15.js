/* Dada una cadena de texto, devolver el caracter más usado
Ej:
masUsado("Victorroblesweb.es");
Devuelve:
Lo que más se repite es:e;
*/

function moreUsed(text){
    let mapLetters = {};
    let maxRepeat = 0;
    let letterMoreUsed = "";

    for( let letter of text ){

        if(!mapLetters[letter]){
            mapLetters[letter] = 1;
        }else{
            mapLetters[letter]++;
        }
    }

    for(let letter in mapLetters){
        if(mapLetters[letter].toString().trim().length === 1 && mapLetters[letter]> maxRepeat){
            maxRepeat = mapLetters[letter];
            letterMoreUsed = letter;
        }
    }
    return letterMoreUsed;    
};
console.log("La letra mas repetida es:", moreUsed("Hola como estas esta noche"));
/*
-Crear funcion que reciba un texto
- Mapear letras en un objeto
- Recorrer el mapeo
- Hacer la condicion para ver qué contador es mayor
*/