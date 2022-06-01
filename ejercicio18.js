/*Dado un numero, mostrar sus numero divisores.
Ejemplo:
mostrarDivisores(5)
devuelve 
1
5
*/
function checkDividers(num, divider){
    if(num % divider === 0){
        return divider;
    }
    return 0;
};

//console.log(checkDividers(6,2));

function showDividers(num){
    for(let i =1; i <= num; i++){
        let isDivider = checkDividers(num, i);

        if(isDivider){
            console.log(isDivider);
        }
        
    }
}

showDividers(20);



/*
- Crear una funcion que comprueba si un numero es divisor de otro
- Crear funcion para recorrer y mostrar
*/