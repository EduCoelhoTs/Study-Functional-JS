//comparando promises e observables:

const { Observable } = require('rxjs');

const promise = new Promise(
    resolve => {
        resolve('Promise é bem legal');
    }
)

const observable = new Observable(
    subscriber => {
        subscriber.next('Observer');
        subscriber.next('é');
        subscriber.next('bem');
        subscriber.next('legal');
    }
    //A promise so executara um resolve, visto que ela é um tipo de função que so envia um dado e morre
    //Já o observable pode enviar varios dados, visto que ele é um stream de dados;
)

promise.then(console.log);
observable.subscribe(console.log);