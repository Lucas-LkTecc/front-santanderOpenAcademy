const { error } = require('console');
const fs = require('fs');
/*
//1. lendo um arquivo JSON
fs.readFile('.eslint.config.mjs', (erro, dados) => {
    if(erro){
        console.log('Erro:', erro);
    } else {
        // dados: Buffer com os dados do arquivo json
        const dadosObjeto = JSON.parse (dados);// convertendo o Buffer em um objeto do JS
        console.log(dadosObjeto.rules);
    }
});
*/

// convertendo JSON, em formato de string, para um objeto.
const jsonString = '{"nome": "Lucas"}';
console.log(JSON.parse(jsonString));

// Convertendo um objeto do js, em um Json (string)

const pessoa = {
    nome: 'Tony Stark',
    papel: 'homem de ferro',
};

console.log(JSON.stringify(pessoa));