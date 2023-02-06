//Utilizando currying para dividir o processamento de uma função:

function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                const tamanho = (texto || '').trim().length;
                //função trin remotve espaços em branco;

                if (tamanho < min || tamanho > max) {
                    throw erro;
                }
                console.log('Tamanho válido');
            }
        }
    }
}

//Repare que ao utilizar o currying, a função será executada por partes, sempre fazendo uma callback para
//uma nova função. Para executa-la, os parametros também devem ser passados por partes:

textoComTamanhoEntre(5)(10)('Tamanho inválido')('Edua');

//Nesse caso, a função somente será processada, quando o ultimo parametro for passado.

//Utilizando essa técnica podemos, criar versões intermediárias das funções:
//Isso nos permite reaproveitar codigo, sem ter de ficar repetindo.

const forcarTamanhoPadrao = textoComTamanhoEntre(10)(20);

forcarTamanhoPadrao('erro')('eduardo');

