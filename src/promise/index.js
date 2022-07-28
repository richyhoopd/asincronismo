// las promesas son asincronas
// pueden suceder ahora, en el futuro o nunca
// las promesas tienen 3 estados, resueltas, pendientes o rechazadas

// una promesa se declara con la palabra reservada "Promise()" (es el constructor de la promesa)
// este constructor recibe un solo parametro: una funcion que recibe dos parametros: resolve, reject
const promise = new Promise(function (res, rej) {
   res('la promesa fue resuelta'); 
});

const cows = 9;

const countCows = new Promise(function (res, rej) {
    if (cows>10) {
        res(`we have enough cows ${cows}`);
    } else {
        rej('thereis no cows');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => console.log('finally'));