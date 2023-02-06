//outra forma de utilizar observable:

const { Observable } = require('rxjs');

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('legal');

    if(Math.random() > 0.5){
        subscriber.complete();
    } else {
        subscriber.error('Que problema?');
    }
});

//Repare que foi escrito, o next, o complete(que será executado 50% das vezes e o error, que também
//será executado 50% das vezes);

obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('Fim!')
)