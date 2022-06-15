/*Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si

Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad.

No tener en cuenta espacios, simbolos raros, ni puntos

Ejemplos:
anagramas('Riesgo', 'Sergio')Devuelve true
anagramas('Victor', 'Robles')Devuelve False

Como hacerlo:
- Crear una function para limpiar los textos
- Quitar todo lo que no sea texto
- Poner en minusculas
- Crear array de letras
- Ordenarlo alfabeticamente porque de esa manera si las palabras tienen los mismos caracteres entonces podemos saber si son anagramas.
- Unirlo
-Podría hacerse con un if pero es mucho mas corto y limpio hacerlo de este modo
*/

function clearText(text){
    return text
            .replace(/[^\w]/gi,'')//limpia caracteres
            .toLowerCase()//pone en minusculas
            .split('')//separa las letras en array
            .sort()//ordena alfabeticamente
            .join('')//volvemos a unir la palabra     
    ;
}

function anagrams(text1, text2){
    return clearText(text1) === clearText(text2);
}

console.log(anagrams('hola', 'loHa!!'));