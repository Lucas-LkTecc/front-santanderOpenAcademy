const { error } = require('console');
const fs = require('fs')
/*
// * 1. callbacks
//Função assincrona (ler um arquivo leva um tempo)
fs.readFile('aula-13/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro) {
        console.log('Ocorreu um erro ao tentar ler o arquivo', erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log("Depois da função de ler o arquivo....");


//SetTimeout

setTimeout(() => {
    console.log('Isso vai ser executado após dois segundos!')
}, 2 * 1000)
*/


// * 2. Promises (promessa)
// criando uma promessa
//console.log("antes da criação da promise");

function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
            if (erro){
                reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
            } else {
                resolve(String(conteudoDoArquivo));
            }
        });
    });
}
/*
lerArquivoPromise().then((retornoDoResolveDaPromise) => {
    console.log("Deu certo: ", erro);
}).catch((erro) => {
    console.log("Deu ruim:", erro);
}).finally(() => {
    console.log("Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no fnal dela.");
});
*/

// * async/await
//mais utilizada

async function leituraDeDados() {
    console.log('isso é executado antes da promisse ser resolvida!');

    try {
        const dadosDoArquivoLido = await lerArquivoPromise() //espera a promessa ser resolvida para avançar
    
       console.log(dadosDoArquivoLido);
       console.log('isso é executado depois da promisse ser resolvida!');
    } catch (erro) {
        console.log("Isso aqui é exibido depois da promessa dar erro");
    } finally {
        console.log("Dentro da finally!");
    }
}
leituraDeDados();
