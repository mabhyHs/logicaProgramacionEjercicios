/* Dada una cadena de texto devolver cuantas vocales tiene esa cadena */
function vowels(text){  
    let matches = text.match(/[aeiou]/gi); //se usa regex de modo global e indistinto (ya sean mayusculas o minusuculas);
    
    return matches ? matches.length : 0;
    
};

console.log(vowels("hola como estas"));
/*
- funcion con un parametro
- metodo match con expresion regular
- Devolver resultado
*/