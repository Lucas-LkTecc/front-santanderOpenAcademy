const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual e a sua idade: '))

//const ehMaiorDeIdade = idade >= 18;

if (idade >= 18) {
    console.log("Voce é maior de idade!");
} else {
    console.log("Voce é menor de idade.");
}27

//Média >= 7 = Aprovado
//Média < 7 e média >= 5 = prova final
//Média < 5 = reprovado

const mediaDoAluno = 6.999999;

if (mediaDoAluno >= 7){
    console.log("Aprovado!");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5){
    console.log("Prova Final");
}else {
    console.log("Reprovado");
}

//1. preciso ser maior de idade
//2. preciso ter uma CNH (ppd)

const idadePessoa = 18;
const temCnh = true;

if (idadePessoa >= 18 && temCnh) {
    console.log("Voce pode dirigir! ");
} else {
    console.log("Voce não pode dirigir! ");
}