//criando uma promise:

let promise = new Promise((resolve) => {
    resolve([1,2,3,4,5]);
})

//resolve => valor que sera passado caso a resposta seja um sucesso:

promise
    .then(response => response.map(el => el * 2))
    .then(response => console.log(response))