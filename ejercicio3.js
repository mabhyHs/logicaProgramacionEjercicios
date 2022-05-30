/* Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
La frase y la palabra deben ser parametros de una funcion*/
function coincidences(phrase, search){
  let clearPhrase = phrase.toLowerCase().replace(/[!¡.,-]/gi,'');
  let result = 0;

  if(clearPhrase.includes(search)){

      let words = clearPhrase.split(" ");
      let map = {};

      for(let word of words){

          if(map[word]){
              map[word]++;
          }else{
              map[word] = 1;
          }
      };

      result = map[search];

  }else{
      result = 0;

  }
  return result;
}
console.log(coincidences("Hola mi nombre es mailen, tengo una hermana mailen", "mailen"));
/*se crea la funcion, luego una variable para limpiar la frase que nos llega por parámetro, ponerla en minúsculas y remplazar cualuier caracter especial por espacios vacio, usamos expresiones regulares de manera global e indistinta (gi del final), creo una variable resultado que es igual a 0 que es lo que devuelve en caso de no encontrar nada en la busqueda de word, luego hacemos un if con un includes pasandole word que el método este lo que hace es buscar si está incluido lo que pasa por parámetro ( busca si una cadena de texto está incluida dentro de otra), entonces en el caso de que sí exista la word, se hace la lógica para ver cuántas veces aparece, y en caso que no, hacedmos que el result retorne 0, luego retornemos resultado, dentro del if hacemos una let words donde dividimos con split cada palabra de la frase limpia, luego hacemos un mapeo de words para que cada palabra sea una propiedad de un json y cada una y se cuenta cuantos eventos hay de esa frase, se recorre todas las palabras con un for of para que recorra cada word de words, se usa for of ya que consigue el valor de cfada elemento del array mientras que el for in consigue el indice, no el valor */