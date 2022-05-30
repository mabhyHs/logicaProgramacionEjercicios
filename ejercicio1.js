//Dado un numero devolver su tabla de multiplicar completa

function multiplicationTable(num){
    let results = `# Tabla del ${num} #\n`;

    for(let i = 1; i <= 10; i++){
        let multiplication = (i*num);  

        results += `${i} x ${num} = ${multiplication}\n`;
    }
    return results;
}
console.log(multiplicationTable(5));
