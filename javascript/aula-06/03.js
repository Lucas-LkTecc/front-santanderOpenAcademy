const readlineSync = require('readline-sync')

const idade = readlineSync.question("Qual e a sua idade? ");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);
// Coerção Explicita (Converção manualmente)
console.log(Number("x"));
console.log(String(10), typeof String(10));
console.log(Boolean(-1));

//Coerção implicita

console.log(1 + '1');
console.log("10" + 5);
console.log(10 - "5");
console.log(10 * "5");
console.log(10 / "5");

//Qual sera a saida desse código?
let n = 1 + '1'
n = n - 1;
console.log(n);

//qual será a saida desse código?
console.log(2 + 3 + 4 + '5');

//Qual será a saida desse código?
console.log('5' + 2 + 3 + 4);
