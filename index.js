console.log('Analista Desenvolvedora:');
var client = 'Katharine Pires'
console.log('Nome: ' + client)

var valProd = 1500;
var valDesc = 25;

var funcDesc = require('./module/calc');

var finalVal = funcDesc(valProd, valDesc);

console.log('Valor final com desconto R$: ' + finalVal);