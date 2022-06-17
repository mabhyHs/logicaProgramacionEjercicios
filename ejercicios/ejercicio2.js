/*Dada una cadena de texto, comprobar si es un palindromo o no. Los palindromos
 son palabras que se leen igual aún estando invertidos.
por ejemplo: ana, bob, otto. No tener en cuenta espacios ó simbolos
como hacerlo:
-funcion con parametro str
-separar el texto en un array de letras
- darle la vuelta
-unir el aray de letras en un string y comparar con el parametro
*/

function isPalindrome(str){
    let inverted = str.split('').reverse().join('');

    return inverted === str ? "Es palindromo" : "No es palindromo"; 

    /* Puede usarse "if"
    if(invertido === str ){
        return true;
    }else{
        return false;
    }
    Otra opcion podría ser simplemente hacer un return ya que es sólo la comparacion y eso devuelve de por sí true o false
    return invertido === str*/
}
console.log(isPalindrome('Mailen'));