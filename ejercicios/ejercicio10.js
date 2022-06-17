/*Dado un numero, mostrar una escalera de escalones de "[-]" usando el numero para los niveles de la escalera 
[-]
[-][-]
[-][-][-]
[-][-][-][-]
[-][-][-][-][-]
*/
function stair(num){
    let fullLadder = "";

    for(let level = 1; level <= num; level++ ){//Aca definimos las filas

        var steps = "";

        for(let step = 1; step <= level; step++){//escalones
            steps += "[-]";
        }

        fullLadder += steps + '\n'//dibujamos la escalera concatenando los escalones sobre lo que ya hay en la escalera completa

    }
    return fullLadder;
}
console.log(stair(15));
/*
- Funcion que reciba como parametro un numero
- Recorrer el numero de niveles de la escalera
- En cada iteración dibujar los escalones de ese nivel
- Haciendo un bucle desde el 1 hasta el nivel en el que estamos

*/