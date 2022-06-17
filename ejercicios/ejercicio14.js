/* Dado un string y un numero, repetir el string tantas veces como el numero indique */

//funcion simple
function repeatMe(str, numRepeat){
    let result = "";
    
    for(let i = 0; i < numRepeat; i++){
        result += str;
    }
    return result;
        
};
console.log(repeatMe("hola",13));


//funcion con prototipo
String.prototype.repeatMe = function (numRepeat){
    let result = "";
    
    for(let i = 0; i < numRepeat; i++){
        result += this;
    }
    return result;
        
};
console.log("Hola manola ".repeatMe(5));


/*
- Crear funcion con los dos parámetros
- Bucle hasta el numero
- concatenar string
*/