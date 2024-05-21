// nomedoficheiro1.js
// Ensinar a lÃ³gica dos operadores xor utilizando a biblioteca brain.js

const brain = require('brain.js');

// Criar uma nova rede neural
const net = new brain.NeuralNetwork();

// Treinar a rede neural com os exemplos do operador XOR
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

// Executar a rede neural com diferentes entradas e obter os resultados
const output00 = parseFloat(net.run([0, 0])).toFixed(0);
const output01 = parseFloat(net.run([0, 1])).toFixed(0);
const output10 = parseFloat(net.run([1, 0])).toFixed(0);
const output11 = parseFloat(net.run([1, 1])).toFixed(0);

// Imprimir os resultados no console
console.log(`0 xor 0: ${output00}`);
console.log(`0 xor 1: ${output01}`);
console.log(`1 xor 0: ${output10}`);
console.log(`1 xor 1: ${output11}`);