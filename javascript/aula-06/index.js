//Utilize sempre o Camel case no JavaScript
//JavaScript possui tipagem dinamica: infere os tipos de dados

var nome = 'Lucas ruan'; //string (texto): utilize sempre aspas
var idade = 27; //number
var altura = 1.70 // number
var estudando = true // boolean (booleano: verdadeiro ou falso)

console.log(nome, typeof nome);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; // Declarando uma variavel sem atribuir um conteudo a essa variavel
console.log(semConteudo);

var curso = "Front-and em React", topico = "JavaScript Básico 1";

console.log(curso, topico);

// ! Não utilize o VAR nos seus códigos JavaScript

let notaAluno = 10;
const mediaDoAluno = 8;

notaAluno = 8; // Alteração na variavel
//mediaDoAluno = 5; // erro pois a variavel const não pode ser alterada no decorrer do código

console.log(notaAluno);
console.log(mediaDoAluno);
