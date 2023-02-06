//simulando o padrão observer:

const readline = require('readline');

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp);
            rl.close();
        })
    })
}

//observer
function namorada() {
    console.log('N: Apaga a luz...');
    console.log('Grita parabéns...');
}

//observer
function sindico() {
    console.log('S: Monitora o barulho...');
}

async function porteiro(interessados){
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)');
        if (resp.toLowerCase() === 's') {
            // os observadores sao notificafvdos
            ( interessados || []).forEach(obs => obs());
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

//Chamada da função -> Registra os dois observadores 
// Os observadores são: namorada e sindico
// O subject é o porteiro

porteiro([namorada, sindico]);