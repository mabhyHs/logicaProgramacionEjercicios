/*Dibujar un cuadrado hueco con ateriscos */
function side(num){
    let side ="";

    for(let i = 0; i < num; i++ ){
        side += "*";
    }
    return side;
}

function square(num){
    let draw = side(num) + "\n";
    let content = "";

    for( i = 2; i < num; i++ ){ //empieza en 2 para restarle los dos    lugares que ya están
        content ="*";

        for(let j=2; j < num; j++){
            content += " ";
        }
        content += "*";

        draw += content + "\n";
    }

    draw += side(num);
    
    return draw;
}
console.log(square(6));

/*
- Funcion para crear el lado de arriba y abajo del cuadrado
- fucnion que haga los lados y el hueco del cuadrado
- Bucle de 0 al tamaño del lado menos 2 par equilibrar con el asterisco de izq. y derc.
- Ir concatenando en una variable cada linea del cuadrado.
- Mostrar el cuadrado en una funcion principal.
*/