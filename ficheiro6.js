// nomedoficheiro6.js
// Utilizar objetos JSON na array num ficheiro nomedoficheiro6.js

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// Treinar a rede neural com os exemplos do operador XOR
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

// Executar a rede neural com diferentes entradas e obter os resultados
const output00 = net.run([0, 0]);
const output01 = net.run([0, 1]);
const output10 = net.run([1, 0]);
const output11 = net.run([1, 1]);

// Converter os resultados para inteiros
const output000 = parseFloat(output00).toFixed(0);
const output001 = parseFloat(output01).toFixed(0);
const output010 = parseFloat(output10).toFixed(0);
const output011 = parseFloat(output11).toFixed(0);

// Imprimir os resultados no console
console.log(`0 xor 0: ${output000}`);
console.log(`0 xor 1: ${output001}`);
console.log(`1 xor 0: ${output010}`);
console.log(`1 xor 1: ${output011}`);