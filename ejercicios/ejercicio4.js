/* Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres. sin usar métodos propios del lenguaje, sólo estructuras de control*/
function invertStr(str){

    let invertedString = "";

    for(let letter of str){
        invertedString = letter + invertedString;
    }
    return invertedString;
}
console.log(invertStr("mailen"));

module.exports = invertStr;
/*Obviamente se puede hacer más simple usando los métodos de js
return str.split(" ").reverse().join(''). De esta manera agarra el string por patametro, lo divide por espacios, lo reversa y lo vuelve a unir con join
*/