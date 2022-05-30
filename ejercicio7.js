/*Dados dos numeros, devolver cuántos numeros impares hay entre ellos*/
function oddFinder(num1, num2){
    let counter = 0;
    while(num1 < num2){
        if(num1%2 !== 0){
            counter++;
        }
        num1++;
    }
    return counter;

}
/*
- Funcion que reciba dos numeros
- bucle de num1 a num2
- Condición si es distinto a cero, es impar
- aumentar en uno el contador
- devolver el contador
*/
console.log("Numeros impares:", oddFinder(1, 50));