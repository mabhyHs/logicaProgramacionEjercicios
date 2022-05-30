/*Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones donde cada numero debe empezar por numero  
ej:
Del 100 al 0
- n°100
- n° 92
- n° 84
- n° 76
*/

function upToZero(num){
    let result = `--- Del ${num} al 0 ---\n`;

    while( num > 0 ){
        result += `- n°${num}\n`;
        num -= 8;
    }

     result += "--- FIN ---";
     return result;
}
console.log(upToZero(100));