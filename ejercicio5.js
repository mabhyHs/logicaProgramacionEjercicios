/*¿Cuanto es el x por ciento de x numero? */
 function percentageCalculator( num, percentage ){
     let operation = (num*percentage)/100;

     let results = `El ${percentage} por ciento de ${num} es: ${operation} #`


     return results;
 };
 console.log(percentageCalculator(897, 12));