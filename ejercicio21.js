/*Dado una cadena de texto y un número, recortar el string mostrando los X primeros caracteres
Ej:
recortar('curso de desarrollo web', 6) Devuelve cursos.

Como hacerlo:
- Crea una función con parametros texto y hasta.
- comprobar que los datos son correctos.
- Recortar string con substr.
- Devolver resultado.
*/
 function cropString(text, num){
    let result = "";
    if(typeof text === 'string' && typeof num === 'number'){
        result = text.substring(0, num);//corta una str a partir de donde le digamos

    }else{
        result = "introduce bien los datos"
    }
    return result;
 };

console.log(
 cropString("hola como estas",6)
);