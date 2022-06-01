/* Dado un numero, mostrar los numeros de 1 hasta el numero.
Pero para multiplos de tres imprimir "buzz" en lugar del numero y para multiplos de 5 imprimir "Lightyear". Para multiplos de ambos imprime "Buzzlightyear" */

function buzz(num){
    let result = "";

    if(num % 5 && 3 === 0 ){
        result = "Buzzlightyear";

    }else if(num % 5 === 0){
        result ="Lightyear";

    }else if( num % 3 === 0){
        result = "buzz";

    }else{
        return num;
    }
    return result;
}

function print(num){
    for(let i = 1; i<= num; i++){
       console.log(buzz(i));
    }
};
print(3);