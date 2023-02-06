function eager(a, b) {
    //processamento mais pesado:
    const fim = Date.now() + 2500;

    while (Date.now() < fim) { }

    const valor = Math.pow(a, 3);
    return valor + b;
}

console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));

//Utilizando Lazy Evaluation

function eagerLazy(a){

    const fim = Date.now() + 2500;
    while (Date.now() < fim) {}

    return function(b){
        
    }
}
