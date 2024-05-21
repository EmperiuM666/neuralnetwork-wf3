// nomedoficheiro5.js
// Ensinar a lógica de negação para entradas específicas usando a biblioteca brain.js

const brain = require('brain.js');

// Criar uma nova rede neural
const net = new brain.NeuralNetwork();

// Treinar a rede neural com os exemplos de negação
net.train([
  { input: [0, 0], output: [1, 1] },
  { input: [1, 1], output: [0, 0] }
]);

// Executar a rede neural com diferentes entradas e obter os resultados
const output00 = net.run([0, 0]);
const output11 = net.run([1, 1]);

// Converter os resultados para inteiros
const output000 = parseFloat(output00[0]).toFixed(0);
const output001 = parseFloat(output00[1]).toFixed(0);
const output110 = parseFloat(output11[0]).toFixed(0);
const output111 = parseFloat(output11[1]).toFixed(0);

// Imprimir os resultados no console
console.log(`not 0 e 0: ${output000} e ${output001}`);
console.log(`not 1 e 1: ${output110} e ${output111}`);