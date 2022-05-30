/*Dado un array dividirlo en tantos sub-arrays como sea necesario, basandonos en un numero que indique su tamaño*/

function splitArray(arr, elementNumber){
    let arrays = [];

    for(let element of arr){

        let last = arrays[arrays.length - 1];

        if(!last || last.length === elementNumber){
            arrays.push([element]);
        }else{
            last.push(element);
        }

    }
    return arrays;

}
console.log(splitArray([1,5,4,7,8,9,36], 5))

/*
- hacer una funcion que reciba dos  parametros, un array y un elemento
- crear un array 
- recorrer e ir añadiendo los subarrays
*/