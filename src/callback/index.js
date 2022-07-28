function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum)); // la funcion no lleva parentesis porque no es una invocacion, es una mencion

setTimeout(function () { // recibe como argumento, una funcion anonima y el tiempo
    console.log('Hola js');
}, 2000);

function saludo (name) {
    console.log(`Hola, ${name}`);
}

setTimeout(saludo, 2000, 'Oscar'); // set timeout recibe funcion, tiempo y parametros como argumentos

// la funcion la puede recibir directamente creada en el timeout o por fuera
// al poner la funcion solo se debe mencionar, no invocar.